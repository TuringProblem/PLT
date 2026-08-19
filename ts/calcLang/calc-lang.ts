type SimpleCalcLang =
  | { type: "numE"; value: number; }
  | { type: "addE"; left: SimpleCalcLang; right: SimpleCalcLang; }

type NumE = (value: number) => SimpleCalcLang;
type AddE = (left: SimpleCalcLang, right: SimpleCalcLang) => SimpleCalcLang;


const numE: NumE = (value) => ({ type: "numE", value });
const addE: AddE = (left, right) => ({ type: "addE", left, right });


type Eval = (expr: SimpleCalcLang) => number;

const evaluate: Eval = (expr) => {
  switch (expr.type) {
    case "numE": return expr.value;
    case "addE": return evaluate(expr.left) + evaluate(expr.right);
  }
};

const program = evaluate(addE(numE(2), numE(3))); // 5

console.log(program);
