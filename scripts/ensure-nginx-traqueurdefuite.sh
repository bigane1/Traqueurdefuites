#!/usr/bin/env bash
# Ajoute uniquement le vhost traqueurdefuites.fr.
# Si le test nginx échoue, le fichier ajouté est retiré et nginx n'est pas rechargé.
set -uo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SRC="$ROOT/scripts/nginx-traqueurdefuite-site.conf"

if [ ! -f "$SRC" ]; then
  echo "Modèle nginx introuvable: $SRC"
  exit 0
fi

run_sudo() {
  if [ "$(id -u)" -eq 0 ]; then
    "$@"
  elif sudo -n true 2>/dev/null; then
    sudo -n "$@"
  else
    echo "sudo non interactif indisponible — vhost non installé"
    return 1
  fi
}

if [ -d /www/server/panel/vhost/nginx ] && [ -x /www/server/nginx/sbin/nginx ]; then
  DEST="/www/server/panel/vhost/nginx/traqueurdefuites.fr.conf"
  NGINX=(/www/server/nginx/sbin/nginx)
  LINK=""
elif command -v nginx >/dev/null 2>&1; then
  DEST="/etc/nginx/sites-available/traqueurdefuite"
  LINK="/etc/nginx/sites-enabled/traqueurdefuite"
  NGINX=(nginx)
else
  echo "nginx introuvable — reverse proxy à faire manuellement vers 127.0.0.1:3004"
  exit 0
fi

if [ -f "$DEST" ] && run_sudo grep -q "ssl_certificate" "$DEST"; then
  echo "Certificat déjà présent dans $DEST — fichier conservé"
  exit 0
fi

BACKUP=""
if run_sudo test -f "$DEST"; then
  BACKUP="$(mktemp)"
  run_sudo cp "$DEST" "$BACKUP" || BACKUP=""
fi

echo "Installation du vhost $DEST"
run_sudo cp "$SRC" "$DEST" || exit 0
if [ -n "$LINK" ]; then
  run_sudo ln -sfn "$DEST" "$LINK" || true
fi

if run_sudo "${NGINX[@]}" -t; then
  if [ -n "$BACKUP" ]; then
    rm -f "$BACKUP"
  fi
  run_sudo "${NGINX[@]}" -s reload || run_sudo systemctl reload nginx || true
  echo "nginx rechargé (vhost traqueurdefuites.fr uniquement)"
  exit 0
fi

echo "nginx -t a échoué — retrait de la config Traqueur, les autres sites ne sont pas rechargés"
if [ -n "$BACKUP" ] && [ -f "$BACKUP" ]; then
  run_sudo cp "$BACKUP" "$DEST" || true
  rm -f "$BACKUP"
else
  run_sudo rm -f "$DEST" || true
  if [ -n "$LINK" ]; then
    run_sudo rm -f "$LINK" || true
  fi
fi
exit 0
