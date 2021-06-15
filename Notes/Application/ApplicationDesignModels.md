

Event Driven Architecture - EDA
- [The Queue vs the Log](https://jack-vanlightly.com/blog/2018/5/20/event-driven-architectures-the-queue-vs-the-log)
- https://jack-vanlightly.com/blog/2018/5/21/event-driven-architectures-queue-vs-log-case-study
- [Eventual Consistency](https://en.wikipedia.org/wiki/Eventual_consistency) vs ACID

## EDA Problems
- see [Dzone Article](https://dzone.com/articles/best-practices-for-event-driven-microservice-archi)

1. Discovering Event Information:  Where is the catalog?  Who owns the events?   Where are the event descriptions, event reason and details?
1. Dealing with Change: How do you change an event schema without breaking other services?  How can schema change and new consumers can replay entire event history? Event consumers must code for change.  Producers need to document events clearly and design events carefully.  (versus OpenAPI / APIM have a development model for versioning REST APIs)
1. On-Premise vs Hosted:  Apache Kafka on Heroku.

### Anti-Patterns [ref](https://dzone.com/articles/best-practices-for-event-driven-microservice-archi)
1. Too much of a good thing.  Don't create too many events.  Developer challenge to comprehend all, and complexity betwen services.
1. Generic Events. Events should have a single-purpose and be named accordingly.
1. Complex Dependency Graphs. Watch out for services that depend on one another and create complex dependency graphs or feedback loops. Each network hop adds additional latency to the original request, particularly north/south network traffic that leaves the datacenter.
1. Depending on Guaranteed Order. Most products start off small and grow over time. While you may dream of future needs to scale to a large complex organization, if your team is small then the added complexity of event-driven architectures may actually slow you down. Instead, consider designing your system with a simple architecture but include the necessary separation of concerns so that you can swap it out as your needs grow.






https://blog.rabbitmq.com/


Observability - https://jack-vanlightly.com/blog/2020/5/26/with-great-observation-comes-great-insight


[Domain Driven Design](https://en.wikipedia.org/wiki/Domain-driven_design)

__OneDrive ../Technical/Application/Models/...__
