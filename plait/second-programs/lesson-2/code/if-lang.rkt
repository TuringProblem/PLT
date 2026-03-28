#lang plait

(define-type IfLang
             (numI [value : Number])
             (addI [e1 : IfLang] [e2 : IfLang])
             (ifI [guard : IfLang] [thn : IfLang] [els : IfLang]))

(interp-if : (IfLang -> Number))
(define (interp-if e)
  (type-case IfLang e
             [(numI v) v]
             [(addI e1 e2) (+ (interp-if e1) (interp-if e2))]
             [(ifI guard thn els)
              (if (not (equal? (interp-if guard) 0))
                  (interp-if thn)
                  (interp-if els))]))


(test (interp-if (ifI (numI 0)
                      (numI 10)
                      (numI 20))) 20)




