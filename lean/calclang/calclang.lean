inductive Expr : Type
| num : Nat -> Expr
| add : Expr -> Expr -> Expr

def eval : Expr -> Nat
 | .num n => n
 | .add e₁ e₂ => eval e₁ + eval e₂

