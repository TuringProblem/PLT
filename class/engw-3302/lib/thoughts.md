make functions and inject into a #myDay() that injects into sub fuctions and then compiles to typst



example:

for each day,  there is a data.typ file and each will hold deterministic data

each week contains drills, analysis, quizes

#let titles = (
    "Jamiroquai": "Virtual Insanity"
)



how I will structure this:


data = (
    1: (
        songTitle: "Virtual Insanity",
        artist: "Jamiroquai",
        songStyle: "greatest hits",
        content: "...blah blah blah about this"
    ),
    2: (
        songTitle: "Duality",
        artist: "Slipknot",
        songStyle: "hit single",
        content: "...blah blah blah about this"
    ),
    3: (
        songTitle: "Pneuma",
        artist: "TOOL",
        songStyle: "wildcard",
        content: "...blah blah blah about this"
    )
)
