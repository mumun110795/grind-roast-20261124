// One-Line Roast: The Gadget You Use Every Day
// Entry for the make.fun competition of the same name.
// The whole entry is a single line about my wireless earbuds and
// their habit of losing exactly one of themselves at a time.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The roast itself. One target (wireless earbuds), one twist
// (the pair "split the work": one actually works, the other
// vanishes and resurfaces like a housemate who pays no rent).
const LINE =
  "My earbuds split the work perfectly: one plays music in my ear, the other vanishes for three days and resurfaces in a pocket like it pays rent.";

function checkLength(text: string): void {
  // The brief caps an entry at 200 characters, and an empty
  // line would not roast anything at all.
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry line must be 1-200 characters, got ${text.length}`);
  }
}

function main(): void {
  checkLength(LINE);

  const outDir = process.env.OUTPUT_DIR ?? "/output";

  // Create the output directory if it is missing. Only ever
  // create it here — never remove the directory itself, since
  // it may be a mounted volume on the grading runner.
  mkdirSync(outDir, { recursive: true });

  const outFile = join(outDir, "entry.txt");
  writeFileSync(outFile, LINE, "utf8");

  console.log(`wrote ${LINE.length} characters to ${outFile}`);
}

main();
