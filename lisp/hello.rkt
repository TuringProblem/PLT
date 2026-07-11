#lang racket

(define (greet name)
  (displayln (format "Hello, ~a!" name)))

(greet "World")


(define (add x y) (+ x y))


(define (add-1 x) (add x 1))


(define (compose f g)
  (λ (x) (f (g x))))

(define myComposedValues (compose add-1 add-1))



(displayln (add-1 1))
(displayln (myComposedValues 1)) ; shoule be 3
