const uniquePaths = (m: number, n: number): number => {
  let ROWS = new Array<number>(n).fill(1);
  for (let r = m - 2; r >= 0; --r) {
    for (let c = n - 2; c >= 0; --c) {
      ROWS[c] += ROWS[c + 1]
    }

  }
  return ROWS[0];
};


const tests = [
  [3, 7],
  [3, 2]
];

console.log(tests.map(([x, y]) => uniquePaths(x, y)));
