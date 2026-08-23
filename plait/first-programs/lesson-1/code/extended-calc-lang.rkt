#lang plait

(define-type CalcLang
             (numE [value : number])
             (addE [e1 : CalcLang] [e2 : CalcLang])
             (mulE [e1 : CalcLang] [e2 : CalcLang])
             (subE [e1 : CalcLang] [e2 : CalcLang]))

; now time to use it

(define (interp-calc e)
  (type-case CalcLang e
             [(numE v) v]
             [(addE e1 e2) (+ (interp-calc e1) (interp-calc e2))]
             [(subE e1 e2) (- (interp-calc e1) (interp-calc e2))]
             [(mulE e1 e2) (* (interp-calc e1) (interp-calc e2))]
             ))
(test (interp-calc (addE (numE 1) (numE 2))) 3)

