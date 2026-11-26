import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Diagnosis: textbook avoidance, stage three — you book therapy sessions to avoid the very feelings you booked therapy to process.";

function validate(text: string): void {
  if (text.trim().length === 0) {
    throw new Error("entry must not be empty or only whitespace");
  }
  if (text.length > 200) {
    throw new Error(`entry is ${text.length} characters, over the 200 limit`);
  }
  if (text.split("\n").length !== 1) {
    throw new Error("entry must be exactly one line");
  }
}

function main(): void {
  validate(ENTRY);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY, "utf8");
}

main();
