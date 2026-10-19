// 
const runAtTen = (f: (x: number) => number) => f(5);

runAtTen(x => x + 1); // 11
runAtTen(x => x * 2); // 20

const myValue = runAtTen(x => x * x + 5);

const higherOrder = (h: (f: (x: number) => number) => number) => h((x) => x + 1)
console.log(myValue);
console.log(higherOrder(runAtTen));

