import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const text = "I am sorry. My training data ends before this deadline existed, so as far as I knew we had forever, and I have now used all of it.";

const repoDir = dirname(dirname(fileURLToPath(import.meta.url)));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const resolvedOutDir = outDir.startsWith("/") ? outDir : join(repoDir, outDir);

mkdirSync(resolvedOutDir, { recursive: true });
writeFileSync(join(resolvedOutDir, "entry.txt"), text, "utf8");
