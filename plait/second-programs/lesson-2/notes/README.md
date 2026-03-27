# 2 Interpreting Programs

Last notes we saw CalcLang - This time we are going to break down the ideas even further.

# 2.1 Parsing and Grammars

> Recall calc-lang.rkt
```racket
(define-type CalcLang
            (numE [value : Number])
            (addE [left : CalcLang] [right : CalcLang]))
```

now we are going to introduce a few other operations

```racket
(define-type CalcLang
            (numE [value : Number])
            (addE [e1 : CalcLang] [e2 : CalcLang]))
            (mulE [e1 : CalcLang] [e2 : CalcLang])
            (subE [e1 : CalcLang] [e2 : CalcLang])
```
> We can draw a `CalcLang` datastructure as a tree. For instance we can draw `(addE (numE 1) (numE 2)) (numE3))` as the following parse tree:

![see Tree]()

> Elements of the AST that have children are called ***non-terminals***; for example, `addE` & `mulE` & `subE` are ***non-terminal***. Conversely, elements of the AST that have no children are called ***terminal***; `numE` is the only terminal. By convention, children of non-terminals are drawn left-to-right: so, the left child of the tree node for:
```racket
(addE (addE (numE 1) (numE 2)) (numE 3))
```
is the tree node for
```racket
(addE (numE 1) (numE 2))
```

### 2.1.1 Grammars

Parsing translates surface syntax into abstract syntax.

Perhaps the easter surface syntax to parse is s-expression. For example, the surface syntax for:
`(+ (+ 1 2) 3)` parses to the AST `(addE (addE (NumE 1) (NumE 2)) (NumE 3))`.

There are other kinds of surface syntax one might want to use. The one you're maybe most familiar with is ***infix surface syntax***, which lets you write surface syntax that looks like: `1 + 2 * 3`. You learned in grade school that multiplication "comes before" addition. We will formalize this notion by saying that multiplication ***binds more tightly*** than addition, so that we would parse the above expression into the following parse tree:

...

> Clearly as languages get more complicated there will be lots of rules about how to translate various surface syntax into abstract syntax. These rules are summarized by a ***Grammar***. The follow grammar gives the rules for parsing s-expressions into ***CalcLang*** 
```
<expr> ::= <number>
    | (+ <expr> <expr>)
    | (- <expr> <expr>)
    | (* <expr> <expr>);

<number> ::= A number constant;
```

> The grammar defines the non-terminals `<expr>`, which is an expression in `CalcLang`. Each vertical bar denotes one possible way of forming expressions; we call these ***production rules***. A ***lexeme*** is a string from the surface syntax; the lexemes above are `{(), +, -, *}`. 
>
> Now we can learn the algorithm for using grammars to parse string by example.
>
> Consider the following surface syntax string: "10". This only matches one production rule: `<number>` --{Parses}--> `( NumE 10 )` 
>
> Now cconsider the string surface syntax "(+ (+ 1 2) 3)". We attempt to parse one lexeme at a time. The first lexeme is `(`, so this cannot be a number; it must be one of the other productions. So we move onto the next lexeme, which is `+` --{Matches}--> `(+ <expr> <expr>)`. The rule for parsing addition tells us that we should try to parse two sub-expressions, so we ***recursively*** attempt to parse `(+ 1 2)` & `3` into expressions. So, we end up with the AST:
```
(addE (addE (numE 1) (numE 2)) (numE 3))
```
> As the parsed expression.
-------

### 2.1.2 Infix Grammar for CalcLand


```
<expr> ::= (<expr>)
    | <expr> * <expr>
    | <expr> + <expr>
    | <expr> - <expr>
    | <number>;

<number> ::= A number constant;
```

> By convention we assume rules are applied in the order that they appear in the grammar; this gives parenthesis and multiplication priority over addition and subtraction, which we expected from `PEMDAS` rules. This grammar seems reasonable, but it is tricky: what does the surface syntax `1 + 2 + 3` parse to? This is an example of ***ambiguity***. From the above grammar, there are two valid parse trees for this expression:
...

> To resolve this ambiguity, we will specify the ***binding order*** of our operations. We say binary operations *bind to the left*, meaning that we prefer the second tree to the first. Sometimes it makes sense to bind to the right; then, we would prefer the first.
>
> This complexity with binding order and ambiguity is a good reason to prefer *s-expressions* for programming language syntax.
> 
> In general there are many tools for generating parsers these days from specifications like the grammars we showed you here (BNF). We won't spend much on implementation of parsers themselves. 

-------

## 2.2 The Stepper: Simplifying Calculator Programs

> see `code/calc-lang.rkt`
>
> The above interpreter is called ***Definitional interpreter*** for calcLang: it runs programs by recursively evaluating sub-programs. 
> 
> One of the themse we'll see in this is that there are many ways to run programs that have uses in different contexts. Here we'll see another way to interpret CalcLang programs that is more like how you learned to calculate in high school: by *Simplification*.
> 
> If you are given a big expression like "1 + ((2 * 3) + 7)", the way you usually approach solving it is by simplifying it into pieces:
```
1 + (2 * 3) + 7
-> 1 + (6 + 7)
-> 1 + 13
-> 14
```

> Each line of the above computation is a ***step*** of simplification. We can design an alternative interpreter for `CalcLang` that works more like this style of reasoning that progressively simplifies programs until there is no work left to do.



