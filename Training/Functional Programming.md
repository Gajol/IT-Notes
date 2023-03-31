# Functional Programming

Why

- clarity
- be declarative
- prromote immutabilty
- avoid side effects
- prefer expressions over statements
- design with high-order functions
- Java: make use of multi-core (without the need for multi-threading).  Multi-threading is difficult to do safetly; shared-memory, semaphore locks, etc.  Java parallelism is difficult and `synchronized` is error-prone.

## Collections, Streams

Traditional functional languages have `fitler` with `map`, and `reduce`.   Java has Collections and Streams.

# Inheritance

*diamond inheritance problem* in C++.

# Java

## Generics

Reference: https://www.baeldung.com/java-generics

Generics   `List<String>`   Java  SE 5

- improves quality of code
- provides compile-time (static) type safety for collections and eliminates the need for most typecasts (type conversion) - run-time errors can occur is casting is wrong
- By adding the diamond operator <> containing the type, we narrow the specialization of this list to only *Integer* type. In other words, we specify the type held inside the list. The compiler can enforce the type at compile time.

```java
List<Integer> list = new LinkedList<>();
```

### Generic Methods

We write generic methods with a single method declaration, and we can call them with arguments of different types.

- `<T>` T denotes generic type T
- Generic methods have a type parameter (the diamond operator enclosing the type) before the return type of the method declaration.
- Generic methods can have different type parameters separated by commas in the method signature.
- Method body for a generic method is just like a normal method.

```java
public <T> List<T> fromArrayToList(T[] a) {   
    return Arrays.stream(a).collect(Collectors.toList());
}
```

### Type Parameter Naming Conventions

reference: https://docs.oracle.com/javase/tutorial/java/generics/types.html

By convention, type parameter names are single, uppercase letters. This stands in sharp contrast to the variable [naming](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/variables.html#naming) conventions that you already know about, and with good reason: Without this convention, it would be difficult to tell the difference between a type variable and an ordinary class or interface name.

- E - Element (used extensively by the Java Collections Framework)
- K - Key
- N - Number
- T - Type
- V - Value
- S,U,V etc. - 2nd, 3rd, 4th types

## Java Features

## Behavior parameterization

Anonymous classes: allow you to declare and instantiate a class at the same time. In other words, they allow you to create ad hoc implementations. Anonymous classes are often used in the context of GUI applications to create event-handler objects (here using the JavaFX API, a modern UI platform for Java).  Note: many programmers find them confusing to use.

```java
button.setOnAction(new EventHandler<ActionEvent>() {
    public void handle(ActionEvent event) {
        System.out.println("Woooo a click!!");
    }
});
```



# Software Patterns

Strategy Pattern: The Strategy pattern suggests that you take a class that does something specific in a lot of different ways and extract all of these algorithms into separate classes called *strategies*.  Also know as the Policy Pattern ([Wikipedia](https://en.wikipedia.org/wiki/Strategy_pattern))

- the strategy design pattern,which lets you define a family of algorithms, encapsulate each algorithm (called a strategy), and select an algorithm at run-time

# Java Version History

https://en.wikipedia.org/wiki/Java_version_history

Java 8

Features:

- Functions
- Methods and Classes as first class citizens.  Allows them to be passed around like values. 
  - *method reference* :: syntax (meaning “use this method as a value”);
- Methods and lambda's (anonymous functions) as first class citizens
- 



References:

- [AS96]

  Harold Abelson and Gerald Jay Sussman. *Structure and Interpretation of Computer Programs*. MIT Press, Cambridge, MA, 2nd, 1996.

- [Blo08]

  Joshua Bloch. *Effective Java*. Addison-Wesley, Reading, MA, 2008.

- [GHJV95]

  Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides. *Design Patterns: Elements of Reusable Object-Oriented Software*. Addison-Wesley, Reading, MA, 1995.

- [Goe06]

  Brian Goetz. *Java Concurrency in Practice*. Addison-Wesley, Reading, MA, 2006.

- [HT00]

  Andrew Hunt and David Thomas. *The Pragmatic Programmer: From Journeyman to Master*. Addison-Wesley, Reading, MA, 2000.

- [Sub11]

  Venkat Subramaniam. *Programming Concurrency on the JVM: Mastering Synchronization, STM, and Actors*. The Pragmatic Bookshelf, Raleigh, NC and Dallas, TX, 2011.

- [Zin01]

  William Zinsser. *On Writing Well, 25th Anniversary: The Classic Guide to Writing Nonfiction*. HarperResource, New York, NY, USA, 2001.