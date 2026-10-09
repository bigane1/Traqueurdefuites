const fs = require("fs");
const path = require("path");

/** Charge .env local (VPS) dans process.env pour PM2. */
function loadEnvFile() {
  const envPath = path.join(__dirname, ".env");
  if (!fs.existsSync(envPath)) return {};
  const out = {};
  const content = fs.readFileSync(envPath, "utf8");
  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;
    const eq = line.indexOf("=");
    if (eq <= 0) continue;
    const key = line.slice(0, eq).trim();
    let value = line.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    out[key] = value;
  }
  return out;
}

const fileEnv = loadEnvFile();

module.exports = {
  apps: [
    {
      name: "traqueurdefuite",
      cwd: __dirname,
      script: "npm",
      args: "start -- -p 3004",
      env: {
        NODE_ENV: "production",
        PORT: "3004",
        ...fileEnv,
      },
      autorestart: true,
      max_restarts: 10,
    },
  ],
};
