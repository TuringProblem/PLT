import { handleToken } from "./utils/toy-functions.ts";
import { type Pair, pair, fst, snd } from "./utils/encodings/tuple/tuple.ts";
import { AND, True, TRUE_TWO, FALSE_TWO, TrueCurried, False, FalseCurried } from "./utils/encodings/bools/church-bools.ts";

const prompt = "Type something: ";

process.stdout.write(prompt);


const exampleFunction = () => {

  // TODO: Figure out how to make a tuple structure
  const examplePair: Pair<number, string> = pair(25, "world"); // this works and it's AWESOME 

  console.log(`\n\n\n\nexampleTuple: ${fst(examplePair)}`);
  console.log(`exampleTuple: ${snd(examplePair)}`);
  console.log(`type: ${typeof examplePair}`);
  console.log(`True: ${True(1, 2)}\nFalse: ${False(1, 2)}\nFalseCurried: ${FalseCurried(1)(2)}\nTrueCurried: ${TrueCurried(1)(2)}`);

  const output = AND(TRUE_TWO)(FALSE_TWO);
  const outputTwo = AND(TRUE_TWO)(TRUE_TWO);

  // AND TRUE FALSE = FALSE i.e. the seoncd so we expect 6 
  console.log(`This is the output for AND(TRUE)(FALSE): ${output(5)(6)}\n Expected: 6`);
  console.log(`This is the output for AND(TRUE)(TRUE): ${outputTwo(5)(6)}\nExpected: 5`);


}


for await (const line of console) {
  const individual_tokens: string[] = line.split("");
  const tokens: string[] = line.split(" ");

  console.log(`You typed: ${line}\ntokens: [${tokens}]\n\nindividual tokens: [${individual_tokens}]`);

  handleToken(tokens);

  exampleFunction();

  process.stdout.write(prompt);

}


