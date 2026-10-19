type List<T> =
  | { type: "empty" }
  | { type: "cons", value: T, next: List<T> }

