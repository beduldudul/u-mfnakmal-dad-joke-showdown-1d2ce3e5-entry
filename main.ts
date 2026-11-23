import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "My son asked why I put my money in the blender. " +
  "I said I wanted to make some liquid assets.";

if (joke.length < 1 || joke.length > 200) {
  throw new Error(`joke must be 1-200 chars, got ${joke.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
