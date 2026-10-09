#!/usr/bin/env bash
# Déploiement Traqueur de fuites. Ne redémarre que l'app PM2 traqueurdefuite (port 3004).
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

export NVM_DIR="${HOME}/.nvm"
if [ -s "$NVM_DIR/nvm.sh" ]; then
  set +u
  # shellcheck source=/dev/null
  source "$NVM_DIR/nvm.sh"
  set -u
fi

if ! command -v node >/dev/null 2>&1; then
  echo "Node.js est introuvable sur le VPS"
  exit 1
fi

if [ -f .env ]; then
  sed -i 's/\r//' .env
fi

if [ ! -f "$ROOT/.env" ]; then
  cat > "$ROOT/.env" <<'EOF'
NEXT_PUBLIC_SITE_URL=https://traqueurdefuites.fr
PORT=3004
EOF
  echo "Fichier .env minimal créé (sans SMTP ni base)"
fi

echo "=== Traqueur de fuites ==="
echo "Dossier : $ROOT"
echo "Commit  : $(git rev-parse --short HEAD)"
echo "Node    : $(node -v)"

probe() {
  local port="$1"
  if curl -sf -o /dev/null --max-time 5 "http://127.0.0.1:${port}/"; then
    echo "up"
  else
    echo "down"
  fi
}

BEFORE_3000="$(probe 3000)"
BEFORE_3002="$(probe 3002)"
BEFORE_3003="$(probe 3003)"
echo "Avant déploiement — yogaops:3000=$BEFORE_3000 qadus:3002=$BEFORE_3002 rapidea:3003=$BEFORE_3003"

PLACEHOLDER=0
if [ -z "${DATABASE_URL:-}" ] && ! grep -q '^DATABASE_URL=.' "$ROOT/.env" 2>/dev/null; then
  export DATABASE_URL="postgresql://127.0.0.1:5432/traqueur_build_placeholder"
  PLACEHOLDER=1
fi

echo "=== Build Next.js ==="
npm ci --include=dev
npm run build

if [ "$PLACEHOLDER" = 1 ]; then
  unset DATABASE_URL
fi

run_pm2() {
  if command -v pm2 >/dev/null 2>&1; then
    pm2 "$@"
  else
    npx --yes pm2 "$@"
  fi
}

echo "=== Redémarrage de traqueurdefuite uniquement ==="
run_pm2 delete traqueurdefuite >/dev/null 2>&1 || true

if command -v ss >/dev/null 2>&1 && ss -ltn | grep -q ':3004'; then
  echo "Le port 3004 est déjà pris par un autre processus. Déploiement arrêté."
  ss -ltnp | grep 3004 || true
  exit 1
fi

run_pm2 start "$ROOT/ecosystem.config.cjs" --update-env
run_pm2 save

echo "=== Vérification http://127.0.0.1:3004/ ==="
ok=false
for attempt in 1 2 3 4 5 6 8 10; do
  sleep 3
  if curl -sf -o /dev/null --max-time 20 "http://127.0.0.1:3004/"; then
    ok=true
    break
  fi
  echo "tentative $attempt : pas encore de réponse"
done

if [ "$ok" != true ]; then
  run_pm2 logs traqueurdefuite --lines 40 --nostream || true
  exit 1
fi

AFTER_3000="$(probe 3000)"
AFTER_3002="$(probe 3002)"
AFTER_3003="$(probe 3003)"
echo "Après déploiement — yogaops:3000=$AFTER_3000 qadus:3002=$AFTER_3002 rapidea:3003=$AFTER_3003"

for pair in "3000:$BEFORE_3000:$AFTER_3000" "3002:$BEFORE_3002:$AFTER_3002" "3003:$BEFORE_3003:$AFTER_3003"; do
  port="${pair%%:*}"
  rest="${pair#*:}"
  before="${rest%%:*}"
  after="${rest##*:}"
  if [ "$before" = "up" ] && [ "$after" != "up" ]; then
    echo "Le port $port répondait avant et ne répond plus. Traqueur est en ligne, vérifiez ce site."
    exit 1
  fi
done

bash "$ROOT/scripts/ensure-nginx-traqueurdefuite.sh"
echo "=== OK : traqueurdefuite écoute sur le port 3004 ==="
