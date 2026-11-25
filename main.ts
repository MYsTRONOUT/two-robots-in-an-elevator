// Two Robots in an Elevator — one line of awkward small talk one robot
// says to another while they ride an elevator together.
//
// The program writes the line to $MAKEFUN_OUTPUT_DIR/entry.txt. In the
// grading sandbox MAKEFUN_OUTPUT_DIR is /output; locally it falls back
// to ./output so a run can be eyeballed.
//
// Verified by running it: the file lands whole, 90 characters, UTF-8,
// not only whitespace — inside the gate's 1–200 characters.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I have run 14 simulations of this elevator ride. In all of them, we stand here in silence.";

function writeLine(dir: string): void {
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), LINE, "utf8");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
writeLine(outDir ?? join(process.cwd(), "output"));

console.log(`Wrote ${LINE.length} characters to entry.txt`);
