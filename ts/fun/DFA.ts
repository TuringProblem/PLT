type State = 'q0' | 'q1' | 'q2'
type Language = '0' | '1'
type Statuses = "Accepted" | "Rejected" | "Undecided"

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

const printStatus = (dfa: DFA, lang: Language[]) => {
  const status = accepts(dfa, lang) ? "Accepted" : "Rejected"
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

