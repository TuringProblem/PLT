// ─── LEXER ────────────────────────────────────────────────────────────────────
// Turns a raw string into a flat list of tokens.
// A token is just a (kind, value) pair; positions are tracked for error messages.

export type TokenKind =
  | "LET"
  | "IN"
  | "IDENT"
  | "NUMBER"
  | "PLUS"
  | "MINUS"
  | "STAR"
  | "SLASH"
  | "EQ"
  | "SEMI"
  | "LPAREN"
  | "RPAREN"
  | "EOF";

export type TokenLiteral =
  | "+"
  | "-"
  | "*"
  | "/"
  | "="
  | ";"
  | "("
  | ")";

export interface Token {
  kind: TokenKind;
  value: string;
  pos: number; // byte offset in source
}

const KEYWORDS: Record<string, TokenKind> = {
  let: "LET",
  in: "IN",
};

export function lex(source: string): Token[] {
  const tokens: Token[] = [];
  let i = 0;

  while (i < source.length) {

    if (/\s/.test(source[i])) { i++; continue; }

    const pos = i;
    const ch = source[i];

    const punct: Partial<Record<TokenLiteral, TokenKind>> = {
      "+": "PLUS",
      "-": "MINUS",
      "*": "STAR",
      "/": "SLASH",
      "=": "EQ",
      ";": "SEMI",
      "(": "LPAREN",
      ")": "RPAREN",
    };

    if (punct[ch as TokenLiteral]) {
      tokens.push({ kind: punct[ch as TokenLiteral]!, value: ch, pos });
      i++;
      continue;
    }

    // number literal  [0-9]+
    if (/[0-9]/.test(ch)) {
      let num = "";
      while (i < source.length && /[0-9]/.test(source[i])) num += source[i++];
      tokens.push({ kind: "NUMBER", value: num, pos });
      continue;
    }

    // identifier or keyword  [a-zA-Z_][a-zA-Z0-9_]*
    if (/[a-zA-Z_]/.test(ch)) {
      let id = "";

      while (i < source.length && /[a-zA-Z0-9_]/.test(source[i])) id += source[i++];
      const kind: TokenKind = KEYWORDS[id] ?? "IDENT";
      tokens.push({ kind, value: id, pos });
      continue;
    }

    throw new Error(`Unexpected character '${ch}' at position ${i}`);
  }

  tokens.push({ kind: "EOF", value: "", pos: i });
  return tokens;
}
