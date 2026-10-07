/**
 * What I have for an idea is simple,
 * The user with write - {a^nb^n | n >= 0} and then we will parse the string
 * to determine if the language is regular or not based on the pumping lemma.
 *
 * The pumping lemma states that if the language is regular
 *
 *
 * What is the pumping lemma?
 *
 * According to wiki - this is the definition:
 *
 * For any regular language L, there exists an int n s.t., for all string x ∈ L,
 * with the length of x ≥ n, can be divided into x = uvw with:
 * |uv| ≤ n
 * |v| ≥ 1
 * for all i ≥ 0, u v^1 w ∈ L
 *
 *
 * however, satisfying the pumping lemma does not imply that the language is regular.
 *
 **/
var sanitize = function (str) {
    var stack = [];
    var i = 0;
    var regexAlphabet = /[a-e]/;
    while (i < str.length) {
        var char = str[i];
        console.log(char);
        if (regexAlphabet.test(char)) {
            stack.push(char);
        }
        ++i;
    }
    return stack;
};
// will return true if the language is regular
var pumpingLemma = function (str, pumpingLength) {
    if (pumpingLength === void 0) { pumpingLength = 1; }
    console.log(str);
    console.log(pumpingLength);
    var pumpedStack = [];
    var _a = sanitize(str), first = _a[0], second = _a[1];
    console.log("Sanitized values: ".concat(first, ", ").concat(second));
    for (var i = 0; i < pumpingLength; ++i) {
        console.log(i);
        pumpedStack.push(first);
    }
    if (second !== undefined) {
        for (var i = 0; i < pumpingLength; ++i) {
            pumpedStack.push(second);
        }
    }
    var final = pumpedStack.join('');
    console.log(pumpedStack);
    console.log(final);
    return true;
};
var pumpingExamples = [pumpingLemma("{a^nb^n | n >= 0}", 5), // CFG language - we can prove this with the lemma
    pumpingLemma("{a^n | n >= 0}", 6)]; // regular language
console.log(pumpingExamples); // [ false, true ]
