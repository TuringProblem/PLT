"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reader = void 0;
exports.pipe = pipe;
// The Reader Module containing pure combinators
exports.Reader = {
    of: function (value) {
        return function () { return value; };
    },
    ask: function () {
        return function (env) { return env; };
    },
    map: function (f) {
        return function (reader) {
            return function (env) { return f(reader(env)); };
        };
    },
    flatMap: function (f) {
        return function (reader) {
            return function (env) { return f(reader(env))(env); };
        };
    },
};
function pipe(a) {
    var fns = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        fns[_i - 1] = arguments[_i];
    }
    return fns.reduce(function (acc, fn) { return fn(acc); }, a);
}
// Sub-computations: Pure functions returning a Reader
var chargeAmount = function (amount) {
    return pipe(exports.Reader.ask(), exports.Reader.map(function (env) { return env.paymentGateway.charge(amount); }));
};
var logResult = function (message) {
    return pipe(exports.Reader.ask(), exports.Reader.map(function (env) { return env.logger.log(message); }));
};
// Composed Pipeline
var checkout = function (amount) {
    return pipe(chargeAmount(amount), exports.Reader.flatMap(function (receipt) {
        return pipe(logResult("Payment successful: ".concat(receipt)), exports.Reader.map(function () { return receipt; }));
    }));
};
var env = {
    paymentGateway: {
        charge: function (amount) { return "Charged ".concat(amount, " to payment gateway"); },
    },
    logger: {
        log: function (msg) { return console.log(msg); },
    },
};
// checkout(100) builds the RECIPE (a Reader). It has run nothing yet.
var program = checkout(100);
var receipt = program(env);
console.log("Returned:", receipt);
var testEnv = {
    paymentGateway: { charge: function (amt) { return "TEST charge ".concat(amt); } },
    logger: { log: function (msg) { return console.log("[test]", msg); } },
};
console.log("Returned:", checkout(100)(testEnv));
