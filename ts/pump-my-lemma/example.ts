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



const sanitize = (str: string): string[] => {
  const stack = [];
  let i = 0;
  const regexAlphabet = /[a-e]/;

  while (i < str.length) {
    const char = str[i];
    console.log(char);
    if (regexAlphabet.test(char)) {
      stack.push(char);
    }
    ++i;
  }

  return stack;
}

// will return true if the language is regular
const pumpingLemma = (str: string, pumpingLength: number = 1): boolean => {
  console.log(str);
  console.log(pumpingLength);
  const pumpedStack = [];

  const [first, second] = sanitize(str);
  console.log(`Sanitized values: ${first}, ${second}`);


  for (let i = 0; i < pumpingLength; ++i) {
    console.log(i);
    pumpedStack.push(first);
  }

  // to skip the second part if there is no second part
  if (second !== undefined) {
    for (let i = 0; i < pumpingLength; ++i) {
      pumpedStack.push(second);

    }
  }

  const final = pumpedStack.join('');
  console.log(pumpedStack);

  console.log(final);

  return true;
}

const pumpingExamples = [pumpingLemma("{a^nb^n | n >= 0}", 5), // CFG language - we can prove this with the lemma
pumpingLemma("{a^n | n >= 0}", 6)]; // regular language

console.log(pumpingExamples); // [ false, true ]

