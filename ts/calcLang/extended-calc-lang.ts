type CalcLang =
  | { type: "numE"; value: number; }
  | { type: "addE"; e1: CalcLang; e2: CalcLang; }
  | { type: "mulE"; e1: CalcLang; e2: CalcLang; }
  | { type: "subE"; e1: CalcLang; e2: CalcLang; }

type NumE = (value: number) => CalcLang;
type TypeE = (e1: CalcLang, e2: CalcLang) => CalcLang;

const numE: NumE = (value) => ({ type: "numE", value });
const addE: TypeE = (e1, e2) => ({ type: "addE", e1, e2 });
const mulE: TypeE = (e1, e2) => ({ type: "mulE", e1, e2 });
const subE: TypeE = (e1, e2) => ({ type: "subE", e1, e2 });

type Eval = (expr: CalcLang) => number;

const evaluate: Eval = (expr) => {
  switch (expr.type) {
    case "numE": return expr.value;
    case "addE": return evaluate(expr.e1) + evaluate(expr.e2);
    case "mulE": return evaluate(expr.e1) * evaluate(expr.e2);
    case "subE": return evaluate(expr.e1) - evaluate(expr.e2);
  }
};


const logic = mulE(addE(numE(2), numE(3)), numE(5)); // 25

console.log(evaluate(logic));

