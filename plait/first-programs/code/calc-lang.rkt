#lang plait

(define-type CalcLang
             (numE [value : Number])
             (addE [left : CalcLang] [right : CalcLang]))

(define (calc-interpreter e)
  (type-case CalcLang e
             [(numE v) v]
             [(addE e1 e2) (+ (calc-interpreter e1) (calc-interpreter e2))]))

(test (calc-interpreter (addE (numE 1) (numE 2))) 3)
(test (calc-interpreter (addE (numE 3) (numE 3))) 6)
(test (calc-interpreter (addE (addE (numE 1) (numE 2)) (numE 3))) 6) ; building upon it but 1 + 2 + 3 = 6
(test (calc-interpreter (addE (addE (numE 1) (numE 2)) (addE (numE 3) (numE 4)))) 10) ; building upon it but (1 + 2) + (3 + 4) = 10 (associativity)

