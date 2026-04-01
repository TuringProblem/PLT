
# Types of polymorphism

#### FROM WIKI:

The most commonly recognized major forms of polymorphism are:

Ad hoc polymorphism: defines a common interface for an arbitrary set of individually specified types.
Parametric polymorphism: does not specify concrete types and instead uses abstract symbols that can substitute for any type.
Subtyping (also called subtype polymorphism or inclusion polymorphism): when a name denotes instances of many different classes related by a common superclass.[4]




### Ad-hoc polymorphism

> Also known as ***"Overloading"*** if you come from java or c++ -> this type of polymorphism is relatively easy to understand, think about it this way:
>
> ***imagine*** you have some function, or constructor where you want a similiar functionaility but with different parameters.
>
> ***Ex:***
>
>```java
> public class Person {
>     public Person(String name, int age) {
>         this.name = name;
>         this.age = age;
>     }
>     // This is a form of ad-hoc polymorphism
>     public Person(String name) {
>         this.name = name;
>         this.age = 0;
>     }
>     public String getName() {
>         return name;
>     }
>     public int getAge() {
>         return age;
>     }
> }
>```
>  You can see in the example in the code above, that you can create a person with just a name (and defaults age to 0 (which would mean you aren't born lmaoo - kind of terrible example)) or you can specifcy the name, and how it would look is like this:
>
>```java
> Person person = new Person("john", 15);
> Person personTwo = new Person("doe");
>```

#### What are the tradeoffs with this design??

> 

-------


### Parametric Polymorphism

> ***Parametric Polymorphism***, also know as ***Generics*** is a style of polymorphism that is WAAAAAY more powerful imo than ad-hoc although they serve different purposes.
>
> ***Ex:***
> 
> ```java
> public class Something<T> {
> private T value;
> public Something(T value) {
>     this.value = value;
> }
> public T getValue() {
>     return value;
> }
> }
>
> public class Main {
>     public static void main(String[] args) {
>         Something<String> string = new Something<>("Hello");
>         Something<Integer> integer = new Something<>(10);
>         System.out.println(string.getValue()); // outputs "Hello"
>         System.out.println(integer.getValue()); // outputs 10
>     }
> }
> ```
> #### Why would we want this?
> 
> let's assume you wanted to make a function that takes a list of some type and just returns a well formatted string of the list. You could do this with a for loop but that would be very inefficient and would require you to know the type of the list beforehand.
> 
> ```java
> // This is a bad example
> // It would be much better to use a for loop
> public static <T> String listToString(List<T> list) {
>     StringBuilder builder = new StringBuilder();
>     for (T item : list) {
>         builder.append(item);
>     }
>     return builder.toString();
> }
> ```
> 
> Then you would be able to call:
> 
> ```java
> List<String> list = Arrays.asList("Hello", "World");
> String string = listToString(list); // outputs "HelloWorld"
> ```
> 
> #### What are the tradeoffs with this design??


