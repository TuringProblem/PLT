import { handleToken } from "./utils/toy-functions.ts";
import { type Pair, pair, fst, snd } from "./utils/encodings/tuple/tuple.ts";
import { True, TrueCurried, False, FalseCurried } from "./utils/encodings/bools/church-bools.ts";

const prompt = "Type something: ";

process.stdout.write(prompt);


for await (const line of console) {
  const individual_tokens: string[] = line.split("");
  const tokens: string[] = line.split(" ");

  console.log(`You typed: ${line}\ntokens: [${tokens}]\n\nindividual tokens: [${individual_tokens}]`);


  // TODO: Figure out how to make a tuple structure
  const examplePair: Pair<number, string> = pair(25, "world"); // this works and it's AWESOME 
  console.log(`exampleTuple: ${fst(examplePair)}`);
  console.log(`exampleTuple: ${snd(examplePair)}`);
  console.log(`type: ${typeof examplePair}`);
  console.log(`True: ${True(1, 2)}\nFalse: ${False(1, 2)}\nFalseCurried: ${FalseCurried(1)(2)}\nTrueCurried: ${TrueCurried(1)(2)}`);

  handleToken(tokens);
  process.stdout.write(prompt);


}
