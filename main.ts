// main.ts — make.fun entry for news-image-20261125.
// The poster image ships in this repository as entry.png; this program
// copies it, byte for byte, into the output directory. It runs offline
// and writes identical bytes on every run.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.png");
copyFileSync(join(repoDir, "entry.png"), target);

// Sanity check: the copy must be a whole PNG within the size limit.
const { statSync, readFileSync } = await import("node:fs");
const size = statSync(target).size;
const head = readFileSync(target).subarray(0, 4);
const isPng = head[0] === 0x89 && head[1] === 0x50 && head[2] === 0x4e && head[3] === 0x47;
if (!isPng || size > 1048576) {
  throw new Error(`entry.png failed sanity check (png=${isPng}, bytes=${size})`);
}
