"use strict";
const zero = s => {
    switch (s) {
        case "q0": return "q1";
        case "q1": return "q1";
        case "q2": return "q1";
        default: return "q0";
    }
    ;
};
const one = s => {
    switch (s) {
        case "q0": return "q0";
        case "q1": return "q2";
        case "q2": return "q0";
        default: return "q0";
    }
    ;
};
const run = (dfa, input) => input.reduce((Q, Σ) => dfa.δ(Q, Σ), dfa.S);
const accepts = (dfa, input) => {
    const finalState = run(dfa, input);
    return dfa.F.has(finalState);
};
const dfa = {
    δ: (zero),
    S: "q0",
    F: new Set(["q1"])
};
const dfaTwo = {
    δ: (one),
    S: "q0",
    F: new Set(["q2"])
};
console.log(accepts(dfa, ["0", "1", "0"])); // - this was true.
console.log(accepts(dfaTwo, ["0", "1", "0", "1", "1", "0", "0"]));
