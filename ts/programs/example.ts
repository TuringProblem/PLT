export type Reader<Env, A> = (env: Env) => A;

// The Reader Module containing pure combinators
export const Reader = {
  of: <Env, A>(value: A): Reader<Env, A> =>
    () => value,

  ask: <Env>(): Reader<Env, Env> =>
    (env) => env,

  map: <Env, A, B>(f: (a: A) => B) =>
    (reader: Reader<Env, A>): Reader<Env, B> =>
      (env) => f(reader(env)),

  flatMap: <Env, A, B>(f: (a: A) => Reader<Env, B>) =>
    (reader: Reader<Env, A>): Reader<Env, B> =>
      (env) => f(reader(env))(env),
};

// Standard functional pipe operator (|> equivalent)
export function pipe<A>(a: A): A;
export function pipe<A, B>(a: A, ab: (a: A) => B): B;
export function pipe<A, B, C>(a: A, ab: (a: A) => B, bc: (b: B) => C): C;
export function pipe<A>(a: A, ...fns: Array<(x: any) => any>): any {
  return fns.reduce((acc, fn) => fn(acc), a);
}

interface Env {
  paymentGateway: { charge: (amount: number) => string };
  logger: { log: (msg: string) => void };
}

// Sub-computations: Pure functions returning a Reader
const chargeAmount = (amount: number): Reader<Env, string> =>
  pipe(
    Reader.ask<Env>(),
    Reader.map((env) => env.paymentGateway.charge(amount))
  );

const logResult = (message: string): Reader<Env, void> =>
  pipe(
    Reader.ask<Env>(),
    Reader.map((env) => env.logger.log(message))
  );

// Composed Pipeline
const checkout = (amount: number): Reader<Env, string> =>
  pipe(
    chargeAmount(amount),
    Reader.flatMap((receipt) =>
      pipe(
        logResult(`Payment successful: ${receipt}`),
        Reader.map(() => receipt)
      )
    )
  );

const env: Env = {
  paymentGateway: {
    charge: (amount: number) => `Charged ${amount} to payment gateway`,
  },
  logger: {
    log: (msg: string) => console.log(msg),
  },
};

// checkout(100) builds the RECIPE (a Reader). It has run nothing yet.
const program: Reader<Env, string> = checkout(100);

const receipt = program(env);
console.log("Returned:", receipt);

const testEnv: Env = {
  paymentGateway: { charge: (amt) => `TEST charge ${amt}` },
  logger: { log: (msg) => console.log("[test]", msg) },
};

console.log("Returned:", checkout(100)(testEnv));
