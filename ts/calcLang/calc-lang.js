var numE = function (value) { return ({ type: "numE", value: value }); };
var addE = function (left, right) { return ({ type: "addE", left: left, right: right }); };
var evaluate = function (expr) {
    switch (expr.type) {
        case "numE": return expr.value;
        case "addE": return evaluate(expr.left) + evaluate(expr.right);
    }
};
var program = evaluate(addE(numE(2), numE(3))); // 5
console.log(program);
