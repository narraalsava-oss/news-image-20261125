// Entry program for the make.fun bounty "news-image-20261125".
//
// What this entry is:
//   A one-day world news front page for Wednesday 25 November 2026:
//   35 dated stories, 6 regions, 14 fields, drawn in code as a single
//   1024x1024 image (entry.png). The image names its day, lists each
//   story with its source, and carries a date check that every story
//   happened or was first reported on 25 November 2026 (UTC).
//
// What this program does:
//   It copies entry.png, which sits next to this file in the repository,
//   byte for byte to entry.png inside the output directory, so the judge
//   sees exactly the image the repository holds. The copy is pure and
//   deterministic: no network, no randomness, no timestamps, and the
//   output is identical on every run. The output directory comes from
//   MAKEFUN_OUTPUT_DIR, or "/output" when that variable is unset.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const target = join(outDir, "entry.png");

// A PNG file always starts with these eight magic bytes. Refuse to copy
// anything else, so a corrupted or replaced source fails loudly instead
// of silently producing an invalid entry.
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

mkdirSync(outDir, { recursive: true });
const bytes = readFileSync(source);
if (bytes.length < PNG_MAGIC.length || !bytes.subarray(0, PNG_MAGIC.length).equals(PNG_MAGIC)) {
  throw new Error(`source image is not a PNG file: ${source}`);
}
writeFileSync(target, bytes);
