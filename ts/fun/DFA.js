"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const updateNumber = (x) => x + 1;
const getColorCode = () => ({
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
});
const colors = __rest(getColorCode(), []);
const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);
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
const run = (dfa, input) => {
    const value = input.reduce((Q, Σ) => dfa.δ(Q, Σ), dfa.S);
    //console.log(`finale State from run: ${value}`);
    return value;
};
const accepts = (dfa, input) => {
    const finalState = run(dfa, input);
    //console.log(`finale State: ${finalState}`);
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
    const status = accepts(dfa, lang) ? `Accepted` : `Rejected`;
    const colorStatus = accepts(dfa, lang) ? `\x1b[32m${status}\x1b[0m` : `\x1b[31m${status}\x1b[0m`;
    console.log(`${lang.join("")}: ${colorStatus}`);
};
const testDFARestuls = (dfa, languages) => {
    languages.forEach(lang => printStatus(dfa, lang));
};
const pushValueToArrayXTimes = (value, x, array = []) => {
    if (x <= 1) {
        return array;
    }
    return pushValueToArrayXTimes(value, x - 1, [...array, value]);
};
// what would an expression look like?
// 1{25}010{25}00 = 1111111111111111111111111101000000000000000000000000000
const createLanguage = (expression, arr = []) => {
    let exampleValue = "";
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
};
console.log(`${testDFARestuls(dfa, languages)}`);
const myLanguage = createLanguage("1{25}010{25}00");
console.log(myLanguage);
