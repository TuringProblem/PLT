import * as fs   from "fs";
import * as path from "path";
import { lex }         from "./lexer";
import { parse }       from "./parser";
import { evaluate }    from "./evaluator";
import { prettyPrint } from "./ast";

const filePath = process.argv[2];

if (!filePath) {
  console.error("Usage: npm start <file.sll>");
  process.exit(1);
}

if (path.extname(filePath) !== ".sll") {
  console.error(`Error: expected a .sll file, got '${filePath}'`);
  process.exit(1);
}

const src = fs.readFileSync(filePath, "utf-8");

// Split on semicolons so a single file can hold multiple expressions
const programs = src
  .split(";")
  .map(s => s.trim())
  .filter(s => s.length > 0);

for (const program of programs) {
  console.log("━".repeat(60));
  console.log("SOURCE  :", program);

  const tokens = lex(program);
  console.log("TOKENS  :", tokens.map(t => `${t.kind}(${t.value})`).join(" "));

  const ast = parse(tokens);
  console.log("AST     :", JSON.stringify(ast, null, 0));
  console.log("PRETTY  :", prettyPrint(ast));

  const result = evaluate(ast);
  console.log("RESULT  :", result);
}

console.log("━".repeat(60));
