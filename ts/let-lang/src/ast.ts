// ─── AST ──────────────────────────────────────────────────────────────────────
// The Abstract Syntax Tree is the data structure the parser builds.
// Each node type is a discriminated union — the `kind` field is the tag.

export type Expr =
  | { kind: "Num";    value: number }
  | { kind: "Var";    name: string }
  | { kind: "BinOp"; op: "+" | "-" | "*" | "/"; left: Expr; right: Expr }
  | { kind: "Let";   name: string; init: Expr; body: Expr };

// Helpers so call-sites read cleanly
export const Num    = (value: number): Expr => ({ kind: "Num", value });
export const Var    = (name: string):  Expr => ({ kind: "Var", name });
export const BinOp  = (op: "+" | "-" | "*" | "/", left: Expr, right: Expr): Expr =>
  ({ kind: "BinOp", op, left, right });
export const Let    = (name: string, init: Expr, body: Expr): Expr =>
  ({ kind: "Let", name, init, body });

// Pretty-print an AST node back to readable source (useful for debugging)
export function prettyPrint(e: Expr): string {
  switch (e.kind) {
    case "Num":    return String(e.value);
    case "Var":    return e.name;
    case "BinOp":  return `(${prettyPrint(e.left)} ${e.op} ${prettyPrint(e.right)})`;
    case "Let":    return `let ${e.name} = ${prettyPrint(e.init)} in ${prettyPrint(e.body)}`;
  }
}
