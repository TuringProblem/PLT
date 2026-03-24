#lang plait
 
;; Understanding the underlying Language
;; seems interpreted - here is the program showing some types
;; use one semicolon for inline comments

#| This is for block comments

 Author: { @Override } -> 20260323
 Time: 21:45 
|#

1 ; number
"hello" ; string 
#t ; boolean
#f ; boolean


(+ 1 2) ; Function call -> returns number
(define x : Number 1) ; Variable definition with types
;; or without ( I prefer with )
(define y 1)


(define (add1 [x : Number]): Number (+ x 1))
(define (add1_another_example x) (+ x 1)) ; Same shit - but I prefer types ahha





(display (string-append "Here is with types " (to-string (add1 x))))
(display (string-append "Here is without types " (to-string (add1_another_example y))))


;; ------------ functions ------------

;; TODO: figure that shit out...

(display (string-append "add1 is " (to-string (add1 1))))


;; Make a procedure

;; conditionals 

(
 if (< 10 2)
  (display "the value was true!")
  (display "the value was false!")
)

;; -------- conditions -------




