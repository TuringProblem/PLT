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

// small step 
type Stepper = (expr: SimpleCalcLang) => SimpleCalcLang;

const stepper: Stepper = (expr) => {
  switch (expr.type) {
    case "numE": throw new Error("No more rules to be evaluated"); // value: no step
    case "addE": {
      const { left, right } = expr;
      if (left.type !== "numE") return addE(stepper(left)!, right);
      if (right.type !== "numE") return addE(left, stepper(right)!);
      return numE(left.value + right.value);
    }
  }
};



const runSmallStep = (expr: SimpleCalcLang): SimpleCalcLang => {
  while (expr.type !== "numE") { expr = stepper(expr); }
  return expr;
};

const program = evaluate(addE(numE(2), numE(3))); // 5

const abstractSyntax = addE(addE(addE(numE(6), numE(9)), numE(2)), numE(2));

console.log(stepper(abstractSyntax));
console.log(stepper(stepper(abstractSyntax)));
console.log(runSmallStep(abstractSyntax));



console.log(program);
