var uniquePaths = function (m, n) {
    var ROWS = new Array(n).fill(1);
    for (var r = m - 2; r >= 0; --r) {
        for (var c = n - 2; c >= 0; --c) {
            ROWS[c] += ROWS[c + 1];
        }
    }
    return ROWS[0];
};
var tests = [
    [3, 7],
    [3, 2]
];
console.log(tests.map(function (_a) {
    var x = _a[0], y = _a[1];
    return uniquePaths(x, y);
}));
