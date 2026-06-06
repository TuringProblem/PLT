"use strict";
const log = console.log;
const myColors = {
    red: ["❌ FAILED: ", "\x1b[31m"],
    green: ["✔ PASSED: ", "\x1b[32m"],
    yellow: ["\x1b[33m"],
    blue: ["\x1b[34m"],
    magenta: ["\x1b[35m"],
    cyan: ["\x1b[36m"],
    white: ["\x1b[37m"],
    reset: ["\x1b[0m"],
};
const pass = (msg) => log(`${myColors.green[1] + myColors.green[0]}${msg}${myColors.reset} `);
const fail = (msg) => log(`${myColors.red[1] + myColors.red[0]}${msg}${myColors.reset} `);
//------ PRACTICE ------
const array = ["any", "boy", "cat"];
const decrypted = Array.from({ length: Math.random() * 20 }, () => Math.floor(Math.random() * 100));
log(decrypted);
const value = decrypted.map((i) => String.fromCharCode(i ^ 22)).join('');
array.forEach((item) => item === "boy" ? fail(item) : pass(item));
log(value);
