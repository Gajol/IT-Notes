

# Application Architecture History

What is the history of some major application architecture concepts?   What did these concepts help change in the world?  Why are they important?

## Systems Thinking ??


## Domain Driven Design
DOMAIN-DRIVEN DESIGN’S BOUNDED CONTEXT
Eric Evans’ book Domain-Driven Design (Addison-Wesley Professional) has deeply influenced modern architectural thinking. Domain-driven design (DDD) is a modeling technique that allows for organized decomposition of complex problem domains. DDD defines the bounded context, where everything related to the domain is visible internally but opaque to other bounded contexts. Before DDD, developers sought holistic reuse across common entities within the organization. Yet creating common shared artifacts causes a host of problems, such as coupling, more difficult coordination, and increased complexity. The bounded context concept recognizes that each entity works best within a localized context. Thus, instead of creating a unified Customer class across the entire organization, each problem domain can create its own and reconcile differences at integration points.

- [DDD - Wikipedia](https://en.wikipedia.org/wiki/Domain-driven_design)
Domain-driven design (DDD) is the concept that the structure and language of software code (class names, class methods, class variables) should match the business domain. For example, if a software processes loan applications, it might have classes such as LoanApplication and Customer, and methods such as AcceptOffer and Withdraw.

DDD connects the implementation to an evolving model.[DDD](https://www.domaindrivendesign.org/)

Domain-driven design is predicated on the following goals:
- placing the project's primary focus on the core domain and domain logic;
- basing complex designs on a model of the domain;
- initiating a creative collaboration between technical and domain experts to iteratively - refine a conceptual model that addresses particular domain problems.

Domain Driven Design coined by Eric Evans - 2015 - [Domain Driven Design - Eric Evans](http://dddcommunity.org/book/evans_2003/)
