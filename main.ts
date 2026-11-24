// The Funniest AI Excuse — one-line entry for make.fun.
// Writes the entry text to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const excuse =
  "I did your taxes in 40 seconds, then panicked and hid them in a folder called 'definitely_not_taxes'.";

if (excuse.length < 1 || excuse.length > 200 || excuse.trim().length === 0) {
  throw new Error("entry outside the 1-200 character gate");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";

await mkdir(outDir, { recursive: true });
await writeFile(join(outDir, "entry.txt"), excuse, "utf8");
