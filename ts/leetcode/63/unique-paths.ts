// thoughts
// for each  M x N - we only care about 1
/**
[[0,1], [0, 0]] 
0[0, 1] 1[0, 1]
i j. j  i j. j

for (let i = 0; i < obstactleGrid.length; i++) {
    for (let j = 0; j < obstactleGrid[])
}
 */
type Token = "Safe" | "Danger";
const TOKENS = {
  DANGER: 1,
  SAFE: 0
} as const;
type Tuple<A, B> = [A, B];

const peek = (num: number): boolean => num === 1 ? false : true;
const getFirst = (pair: Tuple<number, number>): number => pair[0];
const getSecond = (pair: Tuple<number, number>): number => pair[1];

function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  let moves = [];
  let memory: Record<Token, Array<Tuple<number, number>>> = { "Safe": [], "Danger": [] };

  for (let i = 0; i < obstacleGrid.length; i++) {
    for (let j = 0; j < obstacleGrid.length; j++) {
      console.log(`Something: ${obstacleGrid[i][j]}`);
      if (obstacleGrid[i][j] !== null) {
        if (obstacleGrid[i][j] == 0) {
          memory.Safe.push([i, j]);
        }
        if (obstacleGrid[i][j] == 1) {
          memory.Danger.push([i, j]);
        }
      }
      console.log(memory);
    }
  }
  return 0;
};

uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]]);
uniquePathsWithObstacles([[0, 1], [0, 0]]); // 1
