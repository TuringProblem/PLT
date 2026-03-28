type Tokens =
  | "push"
  | "clear"
  | "put";


const pushOrPut = (stream: string[]): void => stream[0] === "push"
  ? push(stream) : stream[0] === "put"
    ? push(stream) : console.log(`[${stream[0]}]: is an invalid token`);

export const handleToken = (tokens: string[]): void => {
  pushOrPut(tokens);
}

export const push = (stream: string[]): void => {
  stream.forEach((token: string) => pushNumber(token));
}


const pushNumber = (cases: string) => {
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
