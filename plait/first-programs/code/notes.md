# 1.3 Syntax: Programs Are Data

Our study of programming languages begins with understaing how programs are respesented to the computer. ***Surface Syntax*** is the textual representation of a program: it's what you type into your editor. Consider the following surface syntax:

```
1 + 2
```

> This represents the programm "add 1 and 2". Of course, we could have also written this with s-expressions: 

```racket
(+ 1 2)
```

> There are clearly countless different kinds of surface syntax. What we need is an abstraction: we want to abstract away the details of how surface syntax is written into a more uniform representation. This is called abstract syntax, which can be represented as the following datastructure:

```racket
(define-type CalcLang
    (numE [value : Number])
    (addE [left : CalcLang] [right : CalcLang]))
```
> Then we can create the "add 1 and 2" program as follows:

(define add-one-and-two (addE (numE 1) (numE 2)))

> This same abstract syntax can represent a variety of different surface syntax. The process of translating surface syntax into abstract syntax is called ***Parsing*** (*Discussed further*) 

------

# 1.4 Semantics: Giving a Programming Language Meaning

> ***Semantics*** associates a meaning with abstract syntax. What does the program add-one-and-two do? Intuitively, this program should "evaluate to 3" by performing the addition 1 + 2.
>
> We define the semantics of programs *compositionally* by giving a meaning to each part. Let's start by giving a specification for the semantics of calculator programs using English:

- (numE v) = v
- if l evaluates to $v_1$ and r evaluates to $v_2$ then (addE l r) evaluates to $v_1 + v_2$

> We are using one language, English, to describe the behavoir of another language, CalcLang. It's helpful to give these two languages names to denote their roles. We call CalcLang the ***object language***. It's the language we are trying to describe. We call english the ***meta-language***: it's the language we're using to describe another one.  
>
> This begs the question: *What is the meaning of +, 1, and 2 in Enlish?* The intuitive meaning is that these are real numbers and real-number addition, as we learned in highschool. But this is implicit: we are not going one step further and defining the meaning of these English primitives. This is a general pattern in defining the meaning of one language using a meta-language: the meta-language is "taken as given."

-----

