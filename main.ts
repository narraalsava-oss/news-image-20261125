// news-image-20261125 — v2 entry.
//
// One day's world news in one image: a front page for Wednesday 25 November
// 2026 with 50 dated stories across 10 regions and 21 fields, drawn in code.
// This program copies entry.png byte for byte to the output directory.
// Source image: entry-v2.png, sha256
// 47fdd60849aadb624371495f8f05d68d8b6011756970c9d0e39f497e3c7fe194.
// No network, no randomness, no timestamps — the output is deterministic.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const target = join(outDir, "entry.png");

try {
  const bytes = readFileSync(source);
  if (bytes.length < PNG_MAGIC.length || !bytes.subarray(0, PNG_MAGIC.length).equals(PNG_MAGIC)) {
    throw new Error("entry.png is not a valid PNG file (bad magic bytes)");
  }
  if (!existsSync(outDir)) {
    mkdirSync(outDir, { recursive: true });
  }
  writeFileSync(target, bytes);
} catch (err) {
  const message = err instanceof Error ? err.message : String(err);
  console.error("main.ts failed: " + message);
  process.exit(1);
}
