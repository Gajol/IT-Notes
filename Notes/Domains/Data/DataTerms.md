# Terms


RDD: Resilient Distributed Dataset [Datastack - RDD SPark](https://databricks.com/glossary/what-is-rdd)
RDD was the primary user-facing API in Spark since its inception. At the core, an RDD is an immutable distributed collection of elements of your data, partitioned across nodes in your cluster that can be operated in parallel with a low-level API that offers transformations and actions.

Data Lineage: [Wikipedia - Data Lineage](https://en.wikipedia.org/wiki/Data_lineage)

Schema Registry:

Data Repositories:  

# Comparisons
TODO
*TODO*

Maturity of knowledge: (DJN's maturity - *TODO* find one:)
- Learn
- Comprehend - Study - Pass exam
- Understand - Teach
- Expert (?) - Lead


Data Catalog vs [Schema Registry](https://www.confluent.io/blog/tag/schema-registry/)

API
developers are the new king makers [The New Kingmakers - 2013 - ](https://thenewkingmakers.com/) from [ Databricks What is RDD](https://databricks.com/glossary/what-is-rdd)
- simple
- declarative
- intuitive

CQRS: Command Query Responsibility Segregation
- [CQRS Wikipedia](https://en.wikipedia.org/wiki/Command%E2%80%93query_separation#Command_query_responsibility_segregation)
- separate return state from changing state.
- Even in single-threaded programs, it is sometimes arguably significantly more convenient to have a method that is a combined query and command. Martin Fowler cites the pop() method of a stack as an example.[5]
- [Martin Fowler CQS - Command Query Separation - 2005](https://martinfowler.com/bliki/CommandQuerySeparation.html)

[Event Sourcing](https://dzone.com/articles/introduction-to-event-sourcing) - see [Dzone EDA Microservices Best Practices](https://dzone.com/articles/best-practices-for-event-driven-microservice-archi)
  - In Event Sourcing, updates and deletes are never performed directly on the data; rather, state changes of an entity are saved as a series of events.
