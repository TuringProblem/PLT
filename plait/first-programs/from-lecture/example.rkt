#lang plait

#|
Author: { @Override }
Since: { 2026-03-26 } - @22:48
|#

((lambda (x) (+ x 1)) 5)
((λ (x) (+ x 1)) 5) ; λ is the same as lambda


(define my_add (λ (x y) (+ x y)))
(my_add 2 2)

(define (my_add_without_lambda x y) (+ x y))
(my_add_without_lambda 2 2)

(define add_one (λ (x) (my_add x 1)))
(add_one 2)

;; it's considered good practice to manually annotate the type of your function. This is done by declaring the type of the function before its definition.


(my-typed-add : (Number -> Number))
(define (my-typed-add x) (+ x 1))
(my-typed-add 2)

;; -------- LOCAL VARIABLES --------

(let [(x 10)] x)


;; -------- LISTS --------

#|
> Lists are an important primitive datatype. A list is one of two things: n empty list, 
or a pair (cons hd tl) where hd is the first element of the list and tl is the rest of the list.
|#
'()
'(1)


(cons 1 (cons 2 empty)) ; looks like it MUST end with <number> empty

;; asigning a list to a variable
(let [(my_list '(1 2 3))] my_list)

;; another way to write out a list

(list 1 2 3 4 5 6 7)

#|
Time to show off some fancy stuff :o
|#

(define my-list '(1 2 3 4 5))
;; recursive definition for summing a list - feels simliar to ocaml
(define (add-list l) (type-case (Listof Number) l
                                [empty 0]
                                [(cons hd tl) (+ hd (add-list tl))]))
(add-list my-list)


;; -------- TESTING & ERRORS --------
#|
 Plait has built-in functions for testing that your code behaves as expected.
 The function (test actual expected) tests that actual evalutaes to expected. You should use them in your programs as such:
|#

(test (add-list '(1 2 3)) 6)
