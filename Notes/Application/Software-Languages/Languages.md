# languages

|language|used in|comments|
|--|--|--|
|[Scala](https://scala-lang.org/)|Kafka|combines OO and functional programming.  Static types (avoids bugs in complex applications).  JVM and JS runtimes.[Wikipedia](https://en.wikipedia.org/wiki/Scala_(programming_language))|
|[Java](www.java.com)|Kafka|[Java Magazine](https://blogs.oracle.com/javamagazine/)|

## Language Categories (?)

functional programming
- Haskwell


## Language Features
fu

## python

## C++ / C

## Rust

## Haskell

## Erlang

## JavaScript

### TypeScript

## R

# Domains
data analystics
statistics
front-end
back-end


# JavaScript Frameworks


# What language to uses

| Reason / Workload / ... | Note |
|--|--|
|OOP Friction|NoSQL - Schemaless.  For me, the real benefit of dynamic schema is the lack of setup and the reduced friction with OOP. This is particularly true when you're working with a static language. I've worked with MongoDB in both C# and Ruby, and the difference is striking. Ruby's dynamism and its popular ActiveRecord implementations already reduce much of the object-relational impedance mismatch. That isn't to say MongoDB isn't a good match for Ruby, it really is. Rather, I think most Ruby developers would see MongoDB as an incremental improvement, whereas C# or Java developers would see a fundamental shift in how they interact with their data. [Flexlbile Schema - The Little MongoDB Book](https://github.com/karlseguin/the-little-mongodb-book/blob/master/en/mongodb.markdown)|
|Logging|Logs can take advantage of schema-less collections.  MongoDB writes can return quickly, can control durability [Little Book ](https://github.com/karlseguin/the-little-mongodb-book/blob/master/en/mongodb.markdown#writes).  Capped collections, by size, and automatically deletes older documents in collection|
