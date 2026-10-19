= inference rules:

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
== Axioms:
#v(1em)

#let axioms = (
  [
--------------------- (T-Int) #v(0.1em)
$Gamma tack.r n: ZZ$
  ],
  [
--------------------- (T-Int) #v(0.1em)
$Gamma tack.r n: ZZ$
  ],
  [
--------------------- (T-False) #v(0.1em)
$Gamma tack.r F: BB$
  ],
)

#axioms.join("\n")





