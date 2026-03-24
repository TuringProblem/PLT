# Lesson 1: Plait language

## Table of Contents
> - [Introduction](#introduction)
> - [Plait Functions](#plait-functions)


## Introduction
> Plait is a dialect of Racket, which is a dialect of Scheme. -> Plait is a dialect of Scheme.
>
> ***NOTE:*** *A Plait expressions is either a [Plait Value]() or a [Plait function call]()* - there are no other kinds of Plait programs. 
> 
> There are, however, several kinds of Plait values:
> 
> - Symbols - `'hello`
> - Numbers - `1`
> - Strings - `"hello"`
> - Booleans - `#t` and `#f`
> - Lists - `(1 2 3)`
> - Vectors - `#(1 2 3)`
> - Hash tables - `#hash((1 . 2) (3 . 4))`
> - Characters - `#\a`
> - Keywords - `:hello`
> - Null - `null`

--------

## Plait Functions

> You should have access to `/code/hello.rkt` - that file contains the logic for this portion see `;;----- functions ------` part
>
> ***NOTE:*** *Everything in Plait is a function call, including things like conditionals.* 
>
> ***NOTE:*** *which parens should I use? Plait has two kinds of parenthesis `()` && `[]` they behave the same, but look different*
> 
> In Plait functions are also values, so just like the lambda calculus you can pass functions around as arguments to other functions.
