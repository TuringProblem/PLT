

#let setFont() = {
  set text(font: "Times New Roman", size: 24pt)
  set align(center)
  set block(spacing: 1em)

}

#let header(meta: (:)) = {
  set text(font: "Times New Roman", size: 24pt)
  set align(center)
  set block(spacing: 1em)
  stack(
   text(meta.title),
   v(1em),
   text(meta.date),
  )
}


#let day(date, day) = {
  header(meta: (title: date, date: day))
}

#let myDay = (
  date: "Monday",
  day: "06-10",
  subcontent: (
    headers: ("first", "second"),
    content: (
    "",
    "",
    )
  ) 
)

#day("Monday", "06-10")

