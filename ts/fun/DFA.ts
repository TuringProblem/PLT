type State = 'q0' | 'q1' | 'q2'
type Language = '0' | '1'
type Statuses = "Accepted" | "Rejected" | "Undecided"
type Color = 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white' | 'reset'
const updateNumber = (x: number): number => x + 1;
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


const compose = <T>(...fns: Array<(args: any) => any>) => (x: T) => fns.reduceRight((acc, fn) => fn(acc), x);

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

const run = (dfa: DFA, input: Language[]): State => {
  const value = input.reduce((Q, Σ) => dfa.δ(Q, Σ), dfa.S);
  //console.log(`finale State from run: ${value}`);
  return value;
};


const accepts = (dfa: DFA, input: Language[]): boolean => {
  const finalState = run(dfa, input);
  //console.log(`finale State: ${finalState}`);
  return dfa.F.has(finalState);
}

const dfa: DFA = {
  δ: δ,
  S: "q0",
  F: new Set(["q1"])
};

const dfaTwo: DFA = {
  δ: δ,
  S: "q0",
  F: new Set(["q2"])
};

const languages: Language[][] = [["0", "1", "1", "1", "1", "0", "1"], ["0", "0"], ["0", "1", "1", "1", "1", "0", "1", "0"]];

const printStatus = (dfa: DFA, lang: Language[]) => {
  const status = accepts(dfa, lang) ? `Accepted` : `Rejected`;
  const colorStatus = accepts(dfa, lang) ? `\x1b[32m${status}\x1b[0m` : `\x1b[31m${status}\x1b[0m`;
  console.log(`${lang.join("")}: ${colorStatus}`);
};

const testDFARestuls = (dfa: DFA, languages: Language[][]): void => {
  languages.forEach(lang => printStatus(dfa, lang));
}


const pushValueToArrayXTimes = (value: string, x: number, array: string[] = []): string[] => {
  if (x <= 1) {
    return array;
  }

  return pushValueToArrayXTimes(value, x - 1, [...array, value]);

}
// what would an expression look like?
// 1{25}010{25}00 = 1111111111111111111111111101000000000000000000000000000
const createLanguage = (expression: string, arr: string[] = []): string => {
  let exampleValue: string = "";
  const frontBrace = expression.split('{');
  const backBrace = expression.split('}');
  console.log(frontBrace, backBrace);
  for (let i = 0; i < frontBrace.length; i++) {
    console.log(frontBrace[i]);
    for (let j = 0; j < frontBrace[i].length; j++) {
      if (frontBrace[i][j] === '}') {
        const removedBrace = frontBrace[i].slice(0, j);
        console.log(removedBrace);
        const example = pushValueToArrayXTimes("1", parseInt(removedBrace), []).join('');
        console.log(example);
        exampleValue += example;
      }
    }
  }
  return exampleValue;
}


console.log(`${testDFARestuls(dfa, languages)}`);
const myLanguage: string = createLanguage("1{25}010{25}00");
console.log(myLanguage);
