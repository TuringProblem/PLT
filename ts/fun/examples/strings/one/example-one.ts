const log = console.log;

const myColors: Record<string, string[]> = {
  red: ["❌ FAILED: ", "\x1b[31m"],
  green: ["✔ PASSED: ", "\x1b[32m"],
  yellow: ["\x1b[33m"],
  blue: ["\x1b[34m"],
  magenta: ["\x1b[35m"],
  cyan: ["\x1b[36m"],
  white: ["\x1b[37m"],
  reset: ["\x1b[0m"],
};

const pass = (msg: string) => log(`${myColors.green[1] + myColors.green[0]}${msg}${myColors.reset} `);
const fail = (msg: string) => log(`${myColors.red[1] + myColors.red[0]}${msg}${myColors.reset} `);


//------ PRACTICE ------



const array: string[] = ["any", "boy", "cat"];
const random: number[] = Array.from({ length: Math.random() * 20 }, () => Math.floor(Math.random() * 100));

log(random);

const value: string = random.map((i) => String.fromCharCode(i ^ 22)).join('');

array.forEach((item) => item === "boy" ? fail(item) : pass(item));
log(value);


