"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.evaluate = exports.subE = exports.mulE = exports.addE = exports.numE = void 0;
var numE = function (value) { return ({ type: "numE", value: value }); };
exports.numE = numE;
var addE = function (e1, e2) { return ({ type: "addE", e1: e1, e2: e2 }); };
exports.addE = addE;
var mulE = function (e1, e2) { return ({ type: "mulE", e1: e1, e2: e2 }); };
exports.mulE = mulE;
var subE = function (e1, e2) { return ({ type: "subE", e1: e1, e2: e2 }); };
exports.subE = subE;
var evaluate = function (expr) {
    switch (expr.type) {
        case "numE": return expr.value;
        case "addE": return (0, exports.evaluate)(expr.e1) + (0, exports.evaluate)(expr.e2);
        case "mulE": return (0, exports.evaluate)(expr.e1) * (0, exports.evaluate)(expr.e2);
        case "subE": return (0, exports.evaluate)(expr.e1) - (0, exports.evaluate)(expr.e2);
    }
};
exports.evaluate = evaluate;
var logic = (0, exports.mulE)((0, exports.addE)((0, exports.numE)(2), (0, exports.numE)(3)), (0, exports.numE)(5)); // 25
// this is equivalent to (* (+ 2 3) 5) - this is S-expressions
// for something like 2 + 3 * 5 - would be (+ 2 (* 3 5)) - which is infix notation
console.log((0, exports.evaluate)(logic));
