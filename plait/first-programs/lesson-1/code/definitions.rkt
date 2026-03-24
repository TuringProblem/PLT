#lang plait

|#
Author: { @Override } -> 20260323
Time: 13:51 
#|

(define pi : Number 3.14)
(define x : Number 55)


pi


(define myadd (λ (x y)
                (+ x y)))

(myadd 1 2)


;; another version without the lambdas

(define (myadd_two x y)
                (+ x y))

(myadd_two 5 x)

