#lang plait

(define (add-one x) (+ x 1))

(define value (add-one 3))
;; anon function
(define (add-two x) (+ x (add-one x)))

(add-two value)

