// ─── EVALUATOR ────────────────────────────────────────────────────────────────
// Tree-walking interpreter.  The key idea is the *environment*: a mapping from
// variable names → values that is threaded through every recursive call.
//
// Environments are persistent (functional): `let x = 5 in ...` extends the
// current env with x=5 for the body only — outer scopes are unaffected.

import { Expr } from "./ast";

type Env = ReadonlyMap<string, number>;

const EMPTY_ENV: Env = new Map();
const extendEnv = (env: Env, name: string, value: number): Env => new Map([...env, [name, value]]);

export const evaluate = (expr: Expr, env: Env = EMPTY_ENV): number => {
  switch (expr.kind) {
    case "Num":
      return expr.value;

    case "Var": {
      const v = env.get(expr.name);
      if (v === undefined)
        throw new Error(`Unbound variable: ${expr.name}`);
      return v;
    }

    case "BinOp": {
      const l = evaluate(expr.left, env);
      const r = evaluate(expr.right, env);
      switch (expr.op) {
        case "+": return l + r;
        case "-": return l - r;
        case "*": return l * r;
        case "/":
          if (r === 0) throw new Error("Division by zero");
          return Math.trunc(l / r);
      }
    }

    case "Let": {
      const initVal = evaluate(expr.init, env);
      const extEnv = extendEnv(env, expr.name, initVal);
      return evaluate(expr.body, extEnv);
    }
  }
}
