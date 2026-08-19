var numE = function (value) { return ({ type: "numE", value: value }); };
var addE = function (e1, e2) { return ({ type: "addE", e1: e1, e2: e2 }); };
var mulE = function (e1, e2) { return ({ type: "mulE", e1: e1, e2: e2 }); };
var subE = function (e1, e2) { return ({ type: "subE", e1: e1, e2: e2 }); };
var evaluate = function (expr) {
    switch (expr.type) {
        case "numE": return expr.value;
        case "addE": return evaluate(expr.e1) + evaluate(expr.e2);
        case "mulE": return evaluate(expr.e1) * evaluate(expr.e2);
        case "subE": return evaluate(expr.e1) - evaluate(expr.e2);
    }
};
var logic = mulE(addE(numE(2), numE(3)), numE(5)); // 25
console.log(evaluate(logic));
