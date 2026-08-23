export type CalcLang =
  | { type: "numE"; value: number; }
  | { type: "addE"; e1: CalcLang; e2: CalcLang; }
  | { type: "mulE"; e1: CalcLang; e2: CalcLang; }
  | { type: "subE"; e1: CalcLang; e2: CalcLang; }

type NumE = (value: number) => CalcLang;
type TypeE = (e1: CalcLang, e2: CalcLang) => CalcLang;

export const numE: NumE = (value) => ({ type: "numE", value });
export const addE: TypeE = (e1, e2) => ({ type: "addE", e1, e2 });
export const mulE: TypeE = (e1, e2) => ({ type: "mulE", e1, e2 });
export const subE: TypeE = (e1, e2) => ({ type: "subE", e1, e2 });

type Eval = (expr: CalcLang) => number;

export const evaluate: Eval = (expr) => {
  switch (expr.type) {
    case "numE": return expr.value;
    case "addE": return evaluate(expr.e1) + evaluate(expr.e2);
    case "mulE": return evaluate(expr.e1) * evaluate(expr.e2);
    case "subE": return evaluate(expr.e1) - evaluate(expr.e2);
  }
};


const logic = mulE(addE(numE(2), numE(3)), numE(5)); // 25
// this is equivalent to (* (+ 2 3) 5) - this is S-expressions
// for something like 2 + 3 * 5 - would be (+ 2 (* 3 5)) - which is infix notation

console.log(evaluate(logic));

