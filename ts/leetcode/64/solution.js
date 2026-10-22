var solution = function (grid) {
    var _a;
    var ROWS = grid.length;
    var COLS = (_a = grid[0]) === null || _a === void 0 ? void 0 : _a.length;
    var res = Array.from({ length: ROWS + 1 }, function () { return new Array(COLS + 1).fill(Infinity); });
    res[ROWS - 1][COLS] = 0;
    for (var r = ROWS - 1; r >= 0; --r) {
        for (var c = COLS - 1; c >= 0; --c) {
            res[r][c] = grid[r][c] + Math.min(res[r + 1][c], res[r][c + 1]);
        }
    }
    return res[0][0];
};
var examples = [
    [[1, 3, 1], [1, 5, 1], [4, 2, 1]],
    [[1, 2, 3], [4, 5, 6]]
];
console.log(examples.map(function (x) { return solution(x); }));
