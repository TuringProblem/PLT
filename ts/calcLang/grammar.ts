import { CalcLang, numE, addE, mulE, subE, evaluate } from "./extended-calc-lang.ts";

// I want to take the CalcLang and be abel to write (+ 2 3) and it generate the AST for me

function tokenize(source: string): string[] {
  return source.match(/\(|\)|[+\-*]|-?\d+(?:\.\d+)?/g) ?? [];
}

function parse(source: string): CalcLang {
  const tokens = tokenize(source);
  let current = 0;

  function parseExpr(): CalcLang {
    const token = tokens[current++];

    if (token !== undefined && !Number.isNaN(Number(token))) {
      return numE(Number(token));
    }

    // Recursive case: (<operator> <expr> <expr>)
    if (token === "(") {
      const operator = tokens[current++];
      const e1 = parseExpr();
      const e2 = parseExpr();

      if (tokens[current++] !== ")") {
        throw new Error("Expected ')'");
      }

      switch (operator) {
        case "+":
          return addE(e1, e2);
        case "*":
          return mulE(e1, e2);
        case "-":
          return subE(e1, e2);
        default:
          throw new Error(`Unknown operator: ${operator}`);
      }
    }

    throw new Error(`Unexpected token: ${token}`);
  }

  const ast = parseExpr();

  if (current !== tokens.length) {
    throw new Error(`Unexpected token: ${tokens[current]}`);
  }

  return ast;
}

const expression = parse("(+ 2 3)");
const another_exp = parse("(+ (+ 5 2) 7)");


console.log(expression);
console.log(another_exp);
console.log(evaluate(expression));
console.log(evaluate(another_exp));


/**
* for s-expressions the grammar is the following
* 
*
* <expr> ::= 
* | <number>
* | ( + <expr> <expr>)
* | ( - <expr> <expr>)
* | ( * <expr> <expr>)
* <number> ::= const number
*
*
* for an infix it would look like
* <expr> ::= (<expr>)
* | <expr> * <expr>
* | <expr> +  <expr>
* | <expr> - <expr>
* | <number>
* <numer> ::= const number
*
* now this might seems okay, because we are following "PEMDAS" rules - but what if we got something like
* "1 + 2 + 3" for an infix notation, this grammar we have is ambiguous atm because we can make it a 
* Left-associative or right-associative tree - so we need to specifty the binding order of our operations
*
* (we will prefer a left-associative tree)
*
* <expr> ::= 
*/

