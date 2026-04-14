// TODO: Figure out a way to use this type  
type Tokens =
  | "push"
  | "clear"
  | "put";


type Token = (stream: string[]) => void;

const compareTokenAndExpected = (stream: string[], expected: string): boolean => stream[0] === expected;

export const push: Token = (stream: string[]): void => stream.forEach((token: string) => pushNumber(token));

export const handleToken: Token = (tokens: string[]): void => compareTokenAndExpected(tokens, "push")
  ? push(tokens) : compareTokenAndExpected(tokens, "put")
    ? push(tokens) : compareTokenAndExpected(tokens, "clear")
      ? console.clear() : console.log(`[${tokens[0]}]: is an invalid token`);





// TODO: Clean this up a bit - make cuter <{^_^}>
const pushNumber = (cases: string): void => {
  switch (cases) {
    case "1":
      console.log("pushed: 1");
      break;
    case "2":
      console.log("pushed: 2");
      break;
    case "3":
      console.log("pushed: 3");
      break;
    case "4":
      console.log("pushed: 4");
      break;
    case "5":
      console.log("pushed: 5");
      break;
    case "6":
      console.log("pushed: 6");
      break;
    case "7":
      console.log("pushed: 7");
      break;
    case "8":
      console.log("pushed: 8");
      break;
    case "9":
      console.log("pushed: 9");
      break;
    default:
      break;
  }
} 
