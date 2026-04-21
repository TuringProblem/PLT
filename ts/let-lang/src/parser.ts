// ─── PARSER ───────────────────────────────────────────────────────────────────
// Recursive-descent parser. Turns a token stream into an Expr AST.
//
// Grammar (informal):
//   program  ::= expr EOF
//   expr     ::= "let" IDENT "=" expr "in" expr
//              | additive
//   additive ::= multiplicative (('+' | '-') multiplicative)*
//   multip.  ::= primary (('*' | '/') primary)*
//   primary  ::= NUMBER | IDENT | '(' expr ')'
//
// Precedence is encoded structurally: additive calls multiplicative,
// multiplicative calls primary — lower in the call stack = tighter binding.

import { Token, TokenKind } from "./lexer";
import { Expr, Num, Var, BinOp, Let } from "./ast";

export const parse = (tokens: Token[]): Expr => {
  let pos = 0;

  // ── token helpers ─────────────────────────────────────────────────────────

  const peek = (): Token => { return tokens[pos]; }
  const check = (kind: TokenKind): boolean => tokens[pos].kind === kind;

  const eat = (kind: TokenKind): Token => {
    const t = tokens[pos];
    if (t.kind !== kind)
      throw new Error(`Parse error at pos ${t.pos}: expected ${kind}, got ${t.kind} ('${t.value}')`);
    pos++;
    return t;
  }


  const match = (...kinds: TokenKind[]): Token | null => {
    for (const k of kinds) {
      if (check(k)) { const t = tokens[pos++]; return t; }
    }
    return null;
  }

  // ── recursive descent ─────────────────────────────────────────────────────

  function parseExpr(): Expr {
    // let x = <init> in <body>
    if (check("LET")) {
      eat("LET");
      const nameToken = eat("IDENT");
      eat("EQ");
      const init = parseExpr();
      eat("IN");
      const body = parseExpr();
      return Let(nameToken.value, init, body);
    }
    return parseAdditive();
  }

  const parseAdditive = (): Expr => {
    let left = parseMultiplicative();
    let op: Token | null;
    while ((op = match("PLUS", "MINUS"))) {
      const right = parseMultiplicative();
      left = BinOp(op.value as "+" | "-", left, right);
    }
    return left;
  }

  const parseMultiplicative = (): Expr => {
    let left = parsePrimary();
    let op: Token | null;
    while ((op = match("STAR", "SLASH"))) {
      const right = parsePrimary();
      left = BinOp(op.value as "*" | "/", left, right);
    }
    return left;
  }

  const parsePrimary = (): Expr => {
    const t = peek();

    if (t.kind === "NUMBER") {
      pos++;
      return Num(parseInt(t.value, 10));
    }

    if (t.kind === "IDENT") {
      pos++;
      return Var(t.value);
    }

    if (t.kind === "LPAREN") {
      eat("LPAREN");
      const e = parseExpr();
      eat("RPAREN");
      return e;
    }

    throw new Error(`Parse error at pos ${t.pos}: unexpected token ${t.kind} ('${t.value}')`);
  }

  // ── entry point ───────────────────────────────────────────────────────────

  const result = parseExpr();
  // consume optional trailing semicolons
  while (check("SEMI")) pos++;
  eat("EOF");
  return result;
}
