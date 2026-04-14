/**
 * Author: { @Override }
 **/

export type Pair<A, B> = <R>(f: (a: A, b: B) => R) => R;

export const pair = <A, B>(a: A, b: B): Pair<A, B> => <R>(f: (a: A, b: B) => R): R => f(a, b);

export const fst = <A, B>(pair: Pair<A, B>): A => pair((a, _) => a);
export const snd = <A, B>(pair: Pair<A, B>): B => pair((_, b) => b);

