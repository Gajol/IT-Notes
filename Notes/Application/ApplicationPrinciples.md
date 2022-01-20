
# Microsoft Web Architecture Principles
https://docs.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/architectural-principles

- Separation of concerns
- Encapsulation
- Dependency inversion
- Explicit dependencies
- Single responsibility
- Don't repeat yourself (DRY)
- Persistence ignorance
- Bounded contexts : [Bounded Context - Fowler](https://martinfowler.com/bliki/BoundedContext.html).  central pattern in Domain-Driven Design

# Java Design Principles
- [Java Design Principles](https://java-design-patterns.com/principles/)


# Prototypes
You must make prototypes of your service to explore, share and test different designs before you commit to building anything.[ref: GOV UK Design Patterns](https://www.gov.uk/service-manual/design/making-prototypes)
Prototypes can vary in style from a quick pen and paper sketch to a code prototype that works like a fully interactive website.
- You should use the prototype that best meets your needs at the time.
- Sketches are useful for exploring and discussing basic ideas with colleagues.
- Code prototypes are better for user research because they’re more realistic.

# URL / Link Design
What is the deisgn for the URLs.   What is the format - what standards is it comply to?  What is the guarantee to the user & systems that are using the URL (will the URL persist for 1-day, 1-year, ..., until disposition)

- Link Rot : For URLs the system is managing (hyperlinks saved as part of the information managed by the system) what tools are used to identify, report and remediate rotten links?


# Laws
Curlys Law : Do One Thing (Java Principles use this) - from movie *City Slickers* [ref: Coding Horring](https://blog.codinghorror.com/curlys-law-do-one-thing/)

# Software Principles
1. Single Responsibility Principle
Gather together those things that change for the same reason, and separate those things that change for different reasons.  Good system design means that we separate the system into components that can be independently deployed.  [Reference: 97 Things Every Programmer Should Know #76 - 2010 ](http://www.worldcat.org/isbn/978-0-596-80948-5).   SRP is part of SOLID [ref: SOLID Wikipedia](https://en.wikipedia.org/wiki/SOLID)
