# HM System.    # let expressions
 > ***Example:***
>
 > `let x = 3 in odd x -> odd 3 -> true`
> Looks very similar to 
 > ```
 > let x = 3 in odd x -> odd 3 -> true
 > (λx. odd x)(3) // They are the same!
 > ```
 > You might think, *isn’t this less powerful*?
> 
 > Because you ca    

### ***SIDE NOTE:***

 #### Type Checking in Typescript
 > For type checking it uses a combination of ***Inference*** and ***explicit***  types to determine what the program is doing.  #### Writing types is tedious > Even if you have types already, writing types is tedious, so you can add optional, where some types aren’t needed - compiler should be optimized for this as well.  #### Improves developer experience. > being able to infer types is sometimes useful as well (for no boiler-plate) but personally I like types… idk  #### What is Hindley-Milner type system? > A type system that was built for the lambda calculus with let statements. All these languages have their own “type” system (which feels quite relative to one another), HM type system is specifically for Lambda Calculus. 
