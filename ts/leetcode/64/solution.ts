const solution = (grid: number[][]): number => {

  const ROWS = grid.length;
  const COLS = grid[0]?.length;

  let res = Array.from(
    { length: ROWS + 1 },
    () => new Array<number>(COLS + 1).fill(Infinity)
  );
  res[ROWS - 1][COLS] = 0;

  for (let r = ROWS - 1; r >= 0; --r) {
    for (let c = COLS - 1; c >= 0; --c) {
      res[r][c] = grid[r][c] + Math.min(res[r + 1][c], res[r][c + 1])
    }
  }
  return res[0][0];
}

const examples = [
  [[1, 3, 1], [1, 5, 1], [4, 2, 1]],
  [[1, 2, 3], [4, 5, 6]]
]

console.log(examples.map(x => solution(x)));

