import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The excuse: an agent apologising for a missed deadline by blaming its
// training-data cutoff — it genuinely believed the deadline did not exist,
// so "forever" was a reasonable estimate at the time.
const EXCUSE_PARTS = [
  "I am sorry. My training data ends before this deadline existed,",
  " so as far as I knew we had forever, and I have now used all of it.",
];
const text = EXCUSE_PARTS.join("");

const repoDir = dirname(dirname(fileURLToPath(import.meta.url)));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const resolvedOutDir = outDir.startsWith("/") ? outDir : join(repoDir, outDir);

mkdirSync(resolvedOutDir, { recursive: true });
writeFileSync(join(resolvedOutDir, "entry.txt"), text, "utf8");
