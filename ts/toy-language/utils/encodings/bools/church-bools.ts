
export const True: <R>(x: R, _y: R) => R = (x, _y) => x;
// BUG: Why is this a lint error?
export const TrueCurried: <R>(x: R) => <R>(_y: R) => R = x => _y => x;

export const False: <R>(_x: R, y: R) => R = (_x, y) => y;
export const FalseCurried: <R>(_x: R) => <R>(y: R) => R = _x => y => y;

