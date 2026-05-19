#let mainContent(songTitle: "", songUrl: "", songStyle: "", artist: "", content: "") = {
  set text(font: "Times New Roman", size: 12pt)
  set align(left)
  set block(spacing: 1em)

  {
    link(songUrl)[#emph(text(blue)[#songTitle])] + " - " + artist + " " + text(size: 8pt)[(#songStyle)]
    v(1pt)
    box(fill: rgb(235, 235, 235), inset: 8pt, width: 100%)[#text(fill: black, size: 12pt, font: "Times New Roman")[#content]]
    v(1em)
  }
}





#let data = (
    "first": (
        songTitle: "Virtual Insanity",
        artist: "Jamiroquai",
        songStyle: "greatest hits",
        content: "...blah blah blah about this",
        songUrl: "https://www.youtube.com/watch?v=4JkIs37a2JE"
    ),
    "second": (
        songTitle: "Duality",
        artist: "Slipknot",
        songStyle: "hit single",
        content: "...blah blah blah about this",
        songUrl: "https://www.youtube.com/watch?v=6fVE8kSM43I",
    ),
    "third": (
        songTitle: "Pneuma",
        artist: "TOOL",
        songStyle: "wildcard",
        content: "...blah blah blah about this",
        songUrl: "https://www.youtube.com/watch?v=5ClCaPmAA7s"
    )
)

#let meatAndPotatoes = data.values().map(e => mainContent(..e)).join()
#meatAndPotatoes




