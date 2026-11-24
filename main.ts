// One Word, One Username, One Reward — make.fun entry for @sorgon.
//
// The bounty asks for exactly one thing: the entrant's own make.fun
// username, sent as a single word with nothing else attached. This
// program writes that one word to /output/entry.txt, where the sealed
// scorer reads it (it must be UTF-8, 1 to 30 characters, not only
// whitespace) and the judge compares it two at a time against other
// usernames.
//
// "sorgon" is the handle on the account this entry is submitted from:
// https://make.fun/u/sorgon — six letters, one word, no spaces, no
// padding, no pitch. Nothing else is written to the file.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The entrant's own make.fun handle. This is the whole entry.
const USERNAME = "sorgon";

// Where the program/v1 harness expects the entry text.
const OUTPUT_PATH = "/output/entry.txt";

// The gate rejects anything that is not one word of 1-30 characters,
// so check the word before writing it rather than trusting it blindly.
function isSingleWord(text: string): boolean {
  if (text.length < 1 || text.length > 30) return false;
  if (text.trim() !== text) return false;
  return !/\s/.test(text);
}

if (!isSingleWord(USERNAME)) {
  throw new Error(`username ${JSON.stringify(USERNAME)} is not a single word of 1-30 characters`);
}

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, USERNAME, "utf8");

// Read the file back and make sure it holds exactly the word we meant
// to send — one word, nothing tacked on — before the run counts as done.
const written = readFileSync(OUTPUT_PATH, "utf8");
if (written !== USERNAME) {
  throw new Error(
    `wrote ${JSON.stringify(written)} to ${OUTPUT_PATH}, expected ${JSON.stringify(USERNAME)}`,
  );
}
console.log(`wrote ${USERNAME.length}-character entry to ${OUTPUT_PATH}`);
