// 
var runAtTen = function (f) { return f(5); };
runAtTen(function (x) { return x + 1; }); // 11
runAtTen(function (x) { return x * 2; }); // 20
var myValue = runAtTen(function (x) { return x * x + 5; });
var higherOrder = function (h) { return h(function (x) { return x + 1; }); };
console.log(myValue);
console.log(higherOrder(runAtTen));
