var numE = function (value) { return ({ type: "numE", value: value }); };
var addE = function (left, right) { return ({ type: "addE", left: left, right: right }); };
var evaluate = function (expr) {
    switch (expr.type) {
        case "numE": return expr.value;
        case "addE": return evaluate(expr.left) + evaluate(expr.right);
    }
};
var stepper = function (expr) {
    switch (expr.type) {
        case "numE": throw new Error("No more rules to be evaluated"); // value: no step
        case "addE": {
            var left = expr.left, right = expr.right;
            if (left.type !== "numE")
                return addE(stepper(left), right);
            if (right.type !== "numE")
                return addE(left, stepper(right));
            return numE(left.value + right.value);
        }
    }
};
var runSmallStep = function (expr) {
    while (expr.type !== "numE") {
        expr = stepper(expr);
    }
    return expr;
};
var program = evaluate(addE(numE(2), numE(3))); // 5
var abstractSyntax = addE(addE(addE(numE(6), numE(9)), numE(2)), numE(2));
console.log(stepper(abstractSyntax));
console.log(stepper(stepper(abstractSyntax)));
console.log(runSmallStep(abstractSyntax));
console.log(program);
