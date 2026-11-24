// Ridiculous at First Glance, Real by the Second
// Reads the one-sentence pitch from entry.txt in the bot (repo) dir and
// writes it verbatim to entry.txt in the output dir — byte for byte, with
// no added newline, so the gate sees exactly the 147-character line.
// Node 22, stdlib only, no network, no wall clock, no files outside the repo.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const line = readFileSync(join(botDir, "entry.txt"), "utf8");
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), line, "utf8");
