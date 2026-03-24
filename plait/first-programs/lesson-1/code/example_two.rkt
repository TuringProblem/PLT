#lang plait 

|#
Author: { @Override } -> 20260323
Time: 13:51 
#|



"hello"

(
  define x : Number 10
)


;; Not too sure what the difference between a conditional and condition is - but gonna try and wrap my head around it haha
(cond 
  [(< x 3) (display "first branch taken")]
  [#f (display "second branch taken")]
  [#t (display "third branch taken")]
)

" "

(
 if (< x 3)
  (display "first branch taken")
  (display "second branch taken")
)


;; functions as values


" " ;TODO: Figure out how the hell to just do a newline... lmao
(λ (x) (+ x 1))

((λ (x) (+ x 1)) 10) ; anonymous function that evaluates to 11 by passing 10

((λ (x) (+ x 1)) x)



