import { handleToken } from "./utils/toy-functions.ts";

const prompt = "Type something: ";

process.stdout.write(prompt);


for await (const line of console) {
  const individual_tokens: string[] = line.split("");
  const tokens: string[] = line.split(" ");
  console.log(`You typed: ${line}\ntokens: [${tokens}]\n\nindividual tokens: [${individual_tokens}]`);
  handleToken(tokens);
  process.stdout.write(prompt);
}



