// Render the front page (layout.html) to entry.png at exactly 1024x1024.
// Run from ~/workspace/shot-tool so `playwright` resolves from its
// node_modules:
//   cd ~/workspace/shot-tool && node ../news-image-20261124/tools/render.mjs
// If the PNG breaks the 1 MiB gate, fall back to JPEG quality 85 — the file
// keeps the name entry.png and the gate tells PNG from JPEG by its bytes.
import { chromium } from 'playwright';
import { existsSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repo = dirname(dirname(fileURLToPath(import.meta.url)));
const pagePath = join(repo, 'layout.html');
const outPath = join(repo, 'entry.png');
const LIMIT = 1048576;

const browser = await chromium.launch();
try {
  const page = await browser.newPage({ viewport: { width: 1024, height: 1024 } });
  await page.goto('file://' + pagePath, { waitUntil: 'load' });
  await page.waitForTimeout(400);
  await page.screenshot({ path: outPath, type: 'png' });
  let bytes = statSync(outPath).size;
  console.log(`png: ${bytes} bytes`);
  if (bytes > LIMIT) {
    await page.screenshot({ path: outPath, type: 'jpeg', quality: 85 });
    bytes = statSync(outPath).size;
    console.log(`jpeg q85: ${bytes} bytes`);
  }
  console.log(existsSync(outPath) && bytes <= LIMIT ? 'OK within 1 MiB' : 'STILL OVER 1 MiB');
} finally {
  await browser.close();
}
