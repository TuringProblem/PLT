#let header(textContent, styles: (:)) = {
  text(..styles)[#textContent]
}
#let mainContent(songTitle: "", songUrl: "", songStyle: "", artist: "", content: "") = {
  set text(font: "Times New Roman", size: 12pt)
  set align(left)
  set block(spacing: 1em)
  let boxData = (inset: 8pt, width: 100%, radius: 4pt, stroke: rgb(245, 245, 245))

  {
    link(songUrl)[#emph(text(blue)[#songTitle])] + " - " + artist + " " + text(size: 8pt)[(#songStyle)]
    v(1pt)
    box(..boxData)[#text(fill: black, size: 12pt, font: "Times New Roman")[#content]]
    v(1em)
  }
}

#let displayDjStatement(settings: (:), content: "") = {
  header("DJ Statement", styles: settings)
  v(1em)
  text(content)
}

#let djStatement = "
Imagine yourself immersed in a crowd - you’re front row to your favorite show, it’s hot, boiling by the minute but this invaluable moment makes anything bearable. The show begins, fog on the gravel stage sends chills as it reaches your skin. The lights hit, creating a synergistic feeling amongst the crowd that’s not spoken about, yet you can feel the emotions it illuminates hidden beneath its scenery - this is my discourse. Theoretical Computer Science, specifically Compilers/Programming Language Theory (PLT) are like a Light Director during a concert - you know it’s there but you don’t know the intricacies on how it works. You might think the importance of a Light Director is minimal, however, imagine yourself at a concert without lights - how would that experience feel? I would imagine dull and dark - the same applies in a compiler, without its presence, knowing where to go or even what’s next is ambiguous. However, the beauty lies in its purpose - just as a Light Designer, a compilers’ purpose is taking control. Control of the user's emotions and understanding, allowing them to connect with their environment by a feeling and ensuring they are focused on the particulars: the stage, singer, drummer, guitarists, the program.  

This soundtrack is designed to explore said discourse and reflect my journey so far within the discourse community. Each track represents a different perspective, subjectively shaped by the experiences I’ve had and share insight on why I’ve become so fascinated with computation, abstraction, and modern technology as a whole.  
"





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
    ),
    "fourth": (

        songTitle: "Gansta's Paradise",
        artist: "Coolio",
        songStyle: "wildcard",
        content: "...blah blah blah about this",
        songUrl: "https://www.youtube.com/watch?v=fPO76Jlnz6c"
    ),
    "fifth": (
        songTitle: "",
        artist: "",
        songStyle: "",
        content: "",
        songUrl: ""
    ),
    "sixth": (
        songTitle: "",
        artist: "",
        songStyle: "",
        content: "",
        songUrl: ""
    ),
)

#let meatAndPotatoes = data.values().map(e => mainContent(..e)).join()


#displayDjStatement(settings: (fill: blue), content: djStatement) 
// #djStatement
#meatAndPotatoes



