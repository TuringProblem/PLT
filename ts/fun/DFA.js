"use strict";
const δ = (s, Σ) => {
    if (Σ === '0') {
        switch (s) {
            case "q0": return "q1";
            case "q1": return "q1";
            case "q2": return "q1";
        }
    }
    else {
        switch (s) {
            case "q0": return "q0";
            case "q1": return "q2";
            case "q2": return "q0";
        }
    }
    ;
};
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
const run = (dfa, input) => input.reduce((Q, Σ) => dfa.δ(Q, Σ), dfa.S);
const accepts = (dfa, input) => {
    const finalState = run(dfa, input);
    return dfa.F.has(finalState);
};
const dfa = {
    δ: δ,
    S: "q0",
    F: new Set(["q1"])
};
const dfaTwo = {
    δ: δ,
    S: "q0",
    F: new Set(["q2"])
};
const languages = [["0", "1", "1", "1", "1", "0", "1"], ["0", "0"], ["0", "1", "1", "1", "1", "0", "1", "0"]];
const printStatus = (dfa, lang) => {
    const status = accepts(dfa, lang) ? "\x1b[32mAccepted\x1b[0m" : "\x1b[31mRejected\x1b[0m";
    console.log(`${lang.join("")}: ${status}`);
};
const testDFARestuls = (dfa, languages) => {
    languages.forEach(lang => printStatus(dfa, lang));
};
console.log(testDFARestuls(dfa, languages));
/*
console.log(accepts(dfa, ["0", "1", "0"]))
console.log(accepts(dfaTwo, ["0", "1", "0", "1", "1", "0", "0"]))
console.log(accepts(dfaTwo, ["1", "0"]))
console.log(accepts(dfaTwo, ["1", "0"]))
*/
