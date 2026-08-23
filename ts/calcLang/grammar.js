"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var extended_calc_lang_ts_1 = require("./extended-calc-lang.ts");
// I want to take the CalcLang and be abel to write (+ 2 3) and it generate the AST for me
function tokenize(source) {
    var _a;
    return (_a = source.match(/\(|\)|[+\-*]|-?\d+(?:\.\d+)?/g)) !== null && _a !== void 0 ? _a : [];
}
function parse(source) {
    var tokens = tokenize(source);
    var current = 0;
    function parseExpr() {
        var token = tokens[current++];
        if (token !== undefined && !Number.isNaN(Number(token))) {
            return (0, extended_calc_lang_ts_1.numE)(Number(token));
        }
        // Recursive case: (<operator> <expr> <expr>)
        if (token === "(") {
            var operator = tokens[current++];
            var e1 = parseExpr();
            var e2 = parseExpr();
            if (tokens[current++] !== ")") {
                throw new Error("Expected ')'");
            }
            switch (operator) {
                case "+":
                    return (0, extended_calc_lang_ts_1.addE)(e1, e2);
                case "*":
                    return (0, extended_calc_lang_ts_1.mulE)(e1, e2);
                case "-":
                    return (0, extended_calc_lang_ts_1.subE)(e1, e2);
                default:
                    throw new Error("Unknown operator: ".concat(operator));
            }
        }
        throw new Error("Unexpected token: ".concat(token));
    }
    var ast = parseExpr();
    if (current !== tokens.length) {
        throw new Error("Unexpected token: ".concat(tokens[current]));
    }
    return ast;
}
var expression = parse("(+ 2 3)");
var another_exp = parse("(+ (+ 5 2) 7)");
console.log(expression);
console.log(another_exp);
console.log((0, extended_calc_lang_ts_1.evaluate)(expression));
console.log((0, extended_calc_lang_ts_1.evaluate)(another_exp));
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
