/*
 * Script de publicación a GitHub Pages.
 * Uso:  node publicar.mjs
 * Hace: 1) vite build  2) corrige rutas de assets al subpath /opalao-web/
 *       3) agrega .nojekyll  4) publica la carpeta dist/public en gh-pages
 */
import { execSync } from "node:child_process";
import { readdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const DIST = join(process.cwd(), "dist", "public");
const BASE = "/opalao-web";
// IMPORTANTE: cada carpeta nueva en client/public/ con assets referenciados por
// ruta absoluta (/carpeta/...) debe ir aquí, o dará 404 en GitHub Pages.
const PUBLIC_DIRS = ["manus-storage", "frames_hero", "mariposas", "video_cascada", "servicios", "galeria", "productos", "blog", "retiros", "sobre-opalao"];

function run(cmd) {
  console.log("›", cmd);
  execSync(cmd, { stdio: "inherit" });
}

// 1) Compilar con base de GitHub Pages
run(process.platform === "win32"
  ? "cmd /c \"set DEPLOY_BASE=/opalao-web/ && npx vite build\""
  : "DEPLOY_BASE=/opalao-web/ npx vite build");

// 2) Corregir rutas absolutas de assets públicos en el bundle
function fixFile(path) {
  let txt = readFileSync(path, "utf8");
  for (const d of PUBLIC_DIRS) {
    txt = txt.split(`"/${d}/`).join(`"${BASE}/${d}/`);
    txt = txt.split("`/" + d + "/").join("`" + BASE + "/" + d + "/");
  }
  writeFileSync(path, txt);
}
fixFile(join(DIST, "index.html"));
const assetsDir = join(DIST, "assets");
if (existsSync(assetsDir)) {
  for (const f of readdirSync(assetsDir)) {
    if (f.endsWith(".js") || f.endsWith(".css")) fixFile(join(assetsDir, f));
  }
}
console.log("✓ rutas corregidas");

// 3) .nojekyll
writeFileSync(join(DIST, ".nojekyll"), "");

// 4) Publicar a gh-pages
run('npx -y gh-pages -d dist/public --dotfiles -b gh-pages');
console.log("\n✅ Publicado. En ~1 min: https://l3ocad1-ship-it.github.io/opalao-web/");
