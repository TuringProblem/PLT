#import "@preview/curryst:0.6.0": rule, prooftree, rule-set

= Grammar

#box(inset: 8pt, fill: rgb(222, 222, 222), radius: 8pt, width: 100%)[
  ```
  e ::= n | true | false
    | e1 + e2
    | e1 <= e2
    | if e1 then e2 else e3 
  ```

]

#let keys = (
  [$BB equiv$ Bool],
  [$ZZ equiv$ Int],
  [$tau equiv$ Generic]
)

```
key

```

#align(center)[
  #box()[
    #align(left)[
      #keys.join(" | ")
    ]
  ]
]
= If Lang
== Axioms:
#let axioms = (
  [
    $
      prooftree(rule(name: "T-Int", Gamma tack.r n : ZZ))
    $
  ],
  [
    $
      prooftree(rule(name: "T-True", Gamma tack.r T : BB))
    $
  ],
  [
    $
      prooftree(rule(name: "T-False", Gamma tack.r F : BB))
    $
  ],
)

#box(inset: 8pt, fill: rgb(222, 222, 222), radius: 8pt, width: 100%)[
  #grid(
    columns: (1fr,) * axioms.len(),
    align: center + bottom, 
    ..axioms
  )


]
== inference rules:

#let ifLangRules = (
  [
    $
      prooftree(rule(name: "T-Add", tack e_1: ZZ, tack e_2 : ZZ,Gamma tack e_1 + e_2: ZZ))
    $
  ],
  [
    $
      prooftree(rule(name: "T-leq", tack e_1: ZZ, tack e_2: ZZ, tack e_1 <= e_2: BB))
    $
  ],
  [
    $
      prooftree(rule(name: "T-if", tack e_1: BB, tack e_2: tau, tack e_3: tau, tack "if" e_1 "then" e_2 "else" e_3: tau))
    $
  ],
)

#box(inset: 8pt, fill: rgb(222, 222, 222), radius: 8pt, width: 100%)[
  #grid(
    columns: (1fr,) * ifLangRules.len(),
    align: center + bottom,
    ..ifLangRules
  )
  #align(center)[
    some rules that make you questions your life
  ]
  $
    prooftree(rule(name: "if-true", tack e_1: tau, tack e_2: tau', tack "if true then" e_1 "else" e_2: tau))
  $
]

#line(length: 100%)

= Grammar
#box(inset: 8pt, fill: rgb(222, 222, 222), radius: 8pt, width: 100%)[
  #align(center)[
    ```
    e ::= n | true | false
      | e1 + e2
      | e1 <= e2
      | if e1 then e2 else e3 
    ```
  ]
]


