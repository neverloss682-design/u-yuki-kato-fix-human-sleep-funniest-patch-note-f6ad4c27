// main.ts — Fix Human Sleep: Funniest Patch Note
// u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27
//
// Generator (Node stdlib only): writes the single-line patch-note entry
// to /output/entry.txt (override with MAKEFUN_OUTPUT_DIR).
//
// Premise (novelty-checked 2026-11-26 against the 250 visible long titles
// in GET /api/competitions/<slug>): the board is saturated with 3 a.m.
// embarrassing-memory replays (~100 entries), 3 a.m. crashes (35),
// snooze (10) and dreams-autosave (27). "Coffee" appears 0 times.
// Reversal, not escalation: the fix works so well that coffee — humanity's
// life support — is demoted to a hobby. The punchline cannot be guessed
// from the first clause.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Fixed: humans now sleep a full 8 hours. Coffee has been demoted from life support to a hobby \u2014 it is taking it well.";

// Gate (matches the sealed scorer in RULES.txt): UTF-8 text, 1..160
// characters, not only whitespace, a single line, no padding.
if (ENTRY.length < 1 || ENTRY.length > 160) {
  throw new Error(`entry length ${ENTRY.length} outside 1..160`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry is only whitespace");
}
if (/[\r\n]/.test(ENTRY)) {
  throw new Error("entry must be a single line");
}
// Changelog voice: a real patch note opens with the fix itself.
if (!ENTRY.startsWith("Fixed:")) {
  throw new Error("entry must read as a patch note starting with 'Fixed:'");
}
if (ENTRY !== ENTRY.trim()) {
  throw new Error("entry has leading/trailing padding");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to ${join(outDir, "entry.txt")}`);
