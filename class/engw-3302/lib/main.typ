

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


#let content(subcontent) = {
  set text(font: "Times New Roman", size: 16pt)
  set align(center)
  set block(spacing: 1em)
  for c in subcontent.content {
    text(c)
    v(1em)
  }
}

// what is a writing artifact - an instance of communication (how communication takes shape in your field - the exchange of meaningful information)

#let ideas() = {

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

#day(myDay.date, myDay.day)
#content(myDay.subcontent)

