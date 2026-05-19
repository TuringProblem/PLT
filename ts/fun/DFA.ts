type State = 'q0' | 'q1' | 'q2'
type Language = '0' | '1'
type Statuses = "Accepted" | "Rejected" | "Undecided"
type Color = 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white' | 'reset'
type PrintColors = {
  Colors: string[],
}

type Colors = {
  'black': string,
  'red': string,
  'green': string,
  'yellow': string,
  'blue': string,
  'magenta': string,
  'cyan': string,
  'white': string,
  'reset': string
}

const getColorCode = (): PrintColors => ({
  Colors: [
    '\x1b[30m',
    '\x1b[31m',
    '\x1b[32m',
    '\x1b[33m',
    '\x1b[34m',
    '\x1b[35m',
    '\x1b[36m',
    '\x1b[37m',
    '\x1b[0m'
  ]
})


const { ...colors } = getColorCode();



const gof = (f: (x: Color) => string, x: Color) => f(x);

type DFA = {
  δ: (Q: State, Σ: Language) => State, // δ = Transition function: δ(Q, Σ) → Q= Q × Σ → Q the state reached on reading x
  S: State, // S = q0 | Start state
  F: Set<State> // the set of final states
}


type δ = (Q: State, Σ: Language) => State;
const δ: δ = (s: State, Σ: Language) => {
  if (Σ === '0') {
    switch (s) {
      case "q0": return "q1"
      case "q1": return "q1"
      case "q2": return "q1"
    }
  } else {
    switch (s) {
      case "q0": return "q0"
      case "q1": return "q2"
      case "q2": return "q0"
    }
  };
}

/*
const one: δ = (s: State) => {
  switch (s) {
    case "q0": return "q0"
    case "q1": return "q2"
    case "q2": return "q0"
    default: return "q0"
  };
}

*/
const run = (dfa: DFA, input: Language[]): State => input.reduce((Q, Σ) => dfa.δ(Q, Σ), dfa.S);

const accepts = (dfa: DFA, input: Language[]): boolean => {
  const finalState = run(dfa, input);
  return dfa.F.has(finalState);
}

const dfa: DFA = {
  δ: δ,
  S: "q0",
  F: new Set(["q1"])
}

const dfaTwo: DFA = {
  δ: δ,
  S: "q0",
  F: new Set(["q2"])
}

const languages: Language[][] = [["0", "1", "1", "1", "1", "0", "1"], ["0", "0"], ["0", "1", "1", "1", "1", "0", "1", "0"]]

const printStatusColor = (color: Color) => gof(printColor, color);

const printStatus = (dfa: DFA, lang: Language[]) => {
  const status = accepts(dfa, lang) ? `Accepted` : `Rejected`
  console.log(`${lang.join("")}: ${status}`)
};

const testDFARestuls = (dfa: DFA, languages: Language[][]): void => {
  languages.forEach(lang => printStatus(dfa, lang));
}

console.log(testDFARestuls(dfa, languages));

/*
console.log(accepts(dfa, ["0", "1", "0"]))
console.log(accepts(dfaTwo, ["0", "1", "0", "1", "1", "0", "0"]))
console.log(accepts(dfaTwo, ["1", "0"]))
console.log(accepts(dfaTwo, ["1", "0"]))
*/

