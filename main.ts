import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// One Word From Your Ex — the word an ex would use to describe them.
// "exhausting": painfully honest, instantly funny, and relatable —
// the word everyone who has lived through it recognises at once.
const WORD = "exhausting";

const OUTPUT = "/output/entry.txt";

// The grader bind-mounts /output: create it if missing, never delete it.
mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT, WORD, "utf8");

// Self-check: the file must hold exactly the word, 1-24 characters.
const written = readFileSync(OUTPUT, "utf8");
if (written !== WORD) {
  throw new Error(
    `entry mismatch: expected ${JSON.stringify(WORD)}, got ${JSON.stringify(written)}`,
  );
}
if (written.length < 1 || written.length > 24) {
  throw new Error(`entry length ${written.length} is outside 1-24 characters`);
}
