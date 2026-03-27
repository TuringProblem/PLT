#lang plait

(define-type CalcLang
             (numE [value : Number])
             (addE [left : CalcLang] [right : CalcLang])
             (subE [left : CalcLang] [right : CalcLang])
             (multE [left : CalcLang] [right : CalcLang]))

(define (interpreter-calc e)
  (type-case CalcLang e
             [(numE v) v]
             [(addE e1 e2) (+ (interpreter-calc e1)
                              (interpreter-calc e2))]
             [(subE e1 e2) (- (interpreter-calc e1)
                              (interpreter-calc e2))]
             [(multE e1 e2) (* (interpreter-calc e1)
                               (interpreter-calc e2))]))

(test (interpreter-calc (addE (numE 1) (numE 2))) 3)
(test (interpreter-calc (multE (numE 1) (numE 2))) 2)
(test (interpreter-calc (multE (addE (numE 1) (numE 2)) (numE 2))) 6)
(test (interpreter-calc (subE (addE (numE 1) (numE 2)) (numE 2))) 1)


;; ---------- Simplification ----------

(step : (CalcLang -> CalcLang))

(define (step e)
  (type-case CalcLang e
             [(numE v)
              (numE v)]
             [(addE e1 e2)
              (type-case CalcLang e1
                         [(numE v1)
                          (type-case CalcLang e2
                                     [(numE v2)
                                      (numE (+ v1 v2))]
                                     [else (addE (numE v1) (step e2))])]
                         [else (addE (step e1) e2)])]

             [(multE e1 e2)
              (type-case CalcLang e1
                         [(numE v1)
                          (type-case CalcLang e2
                                     [(numE v2)
                                      (numE (* v1 v2))]
                                     [else (multE (numE v1) (step e2))])]
                         [else (multE (step e1) e2)])]
             [(subE e1 e2)
              (type-case CalcLang e1
                         [(numE v1)
                          (type-case CalcLang e2
                                     [(numE v2)
                                      (numE (- v1 v2))]
                                     [else (subE (numE v1) (step e2))])]
                         [else (subE (step e1) e2)])]))

(step (addE (addE (numE 1) (numE 2)) (addE (numE 3) (numE 4))))
(step (addE (numE 3) (addE (numE 3) (numE 4))))
