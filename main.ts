// The World in One Day — Tuesday 24 November 2026
// make.fun bounty: news-image-20261124
//
// This program copies the newspaper front-page image held in this
// repository (entry.png, 1024x1024) to the harness output directory as
// entry.png. It performs no network access and writes exactly one file,
// so repeated runs produce byte-identical output.

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = join(here, "entry.png");
const target = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
console.log(`wrote ${target}`);
