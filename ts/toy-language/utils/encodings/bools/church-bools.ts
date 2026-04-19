type ChurchBool = <T>(then: T) => (elseBranch: T) => T;

export const True: <R>(x: R, _y: R) => R = (x, _y) => x;
// BUG: Why is this a lint error?
export const TrueCurried: <R>(x: R) => <R>(_y: R) => R = x => _y => x;

export const False: <R>(_x: R, y: R) => R = (_x, y) => y;
export const FalseCurried: <R>(_x: R) => <R>(y: R) => R = _x => y => y;

/**
 * DEFINITION OF AND
 * ------------------
 *  AND = λpq. pqp 
 *
 **/

// What is the difference between the top portion and the bottom?
export const FALSE_TWO: ChurchBool = (_then) => (elseBranch) => elseBranch;
export const TRUE_TWO: ChurchBool = (then) => (_elseBranch) => then;


export const AND = (p: ChurchBool) => (q: ChurchBool): ChurchBool => p(q)(FALSE_TWO);
export const OR = (p: ChurchBool) => (q: ChurchBool): ChurchBool => p(TRUE_TWO)(q);

