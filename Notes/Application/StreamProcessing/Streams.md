
[ ] - see also - C:\Users\doug\OneDrive\Documents\GitHub\Eloquent-JavaScript\Notes\Streams

# Event Stream Processing Market
[ ] - Cloudera DataFlow (CDF) vs Confluent Platform.   CDF (Hadoop, NiFi, Kafka), Confluent Platform (Kafka, Kafka connect, Kafka stream, kql?)

# Stream Processing Benefits
1. fits distributed, loosely coupled mode (Event Driven Architecture)
1. react in real-time versus delays with ETL-approaches (see [Samza TripAdviors Case Study](https://samza.apache.org/case-studies/tripadvisor))

# Stream Processing Framework
collection : [Apache Flume](https://flume.apache.org/) : collect, aggregate and move large amounts of log data
transport : [Apache Kafka](https://kafka.apache.org/)
stream processing framework : [Apache Samza](https://samza.apache.org/) : pen-source distributed event streaming platform
- inputs:
  - Kafka
  - Kinesis
  - HDFS
  - Eventhubs  
  - Change Capture (CDC - Change Data Capture)

- [Samza - TripAdvisor Case Study](https://samza.apache.org/case-studies/tripadvisor)

![TripAdvisor Stream Processing Framework](Images/apache-samza-trip-advisor.svg "TripAdvisor Stream Processing Framework"). *The engineering team at TripAdvisor decided to replace the Hadoop solution with a multi-stage Samza pipeline.*:  [YouTube - TripAdvisor - Converting Batch to Streaming - Moving ETL from Hadoop to Samza](https://www.youtube.com/watch?v=KQ5OnL2hMBY&ab_channel=LinkedInEngineering)
- [Apache Kafka](https://kafka.apache.org/) - pen-source distributed event streaming platform
- [Apache Flume](https://flume.apache.org/)
- [Apache Samza](https://samza.apache.org/) - Stateful processing, Windowing, Kafka-integration
- [Amazone Redshift](https://aws.amazon.com/redshift/) - Data warehouse
- [Apache hadoop](https://hadoop.apache.org/) - a software library is a framework that allows for the distributed processing of large data sets across clusters of computers using simple programming models.  Includes [HDFS}(http://hadoop.apache.org/)]
- [Elasticsearch]()
- [Apache Hive](https://hive.apache.org/) - data warehouse software facilitates reading, writing, and managing large datasets residing in distributed storage using SQL. Structure can be projected onto data already in storage. A command line tool and JDBC driver are provided to connect users to Hive.



Flume:  Flume is a distributed, reliable, and available service for efficiently collecting, aggregating, and moving large amounts of log data. It has a simple and flexible architecture based on streaming data flows. It is robust and fault tolerant with tunable reliability mechanisms and many failover and recovery mechanisms. It uses a simple extensible data model that allows for online analytic application.


------

  Like Apache Kafka, Samza has its roots at LinkedIn. Back in 2012, we standardized on Kafka as the transport mechanism for all tracking data. With several terabytes of data generated daily into Kafka, our applications needed to obtain insights from it. These applications dealt with a common set of problems as they consumed messages from Kafka, such as checkpointing, management of local state, handling failures, scaling-out processing, etc. Apache Samza was built to tackle these fundamental problems in stream processing. [rf-2018](https://engineering.linkedin.com/blog/2018/11/samza-1-0--stream-processing-at-massive-scale)

# Disadvantages of Event Driven Architectures [ref](https://www.tiempodev.com/blog/disadvantages-of-event-driven-architecture/)
- Loosely Coupled Events Scope of Impact : Events may trigger events in other systems with little ability to control the event-action.   Each system is loosely coupled and therefore cannot predict  or anticipate events happening on other systems.  For example, see the difficulty in Zoom determining who joined a meeting [Zoom](https://medium.com/walmartglobaltech/preparing-event-driven-data-for-analysis-3010da7416d7)
- Documenting Anticipation of the Unknown : EDA learning curve is extensive.  Software evaluates events rather than objects, and must allow for unrecognized events, malformed events etc.  It is impossible to document this "input" unknowns.   In EDA/streaming, the events indicate what the producing-system has done.  This event is not a command for other systesm to do something.  Instead the other systems (consumers) have to analyze the event and determine what should be done.   In addition, the producer does know if there any consumers listening.
- Anticipate the Unforeseen : Testing is difficult, infinite loops between systems (event -> triggers event -> triggers same event)
- Error Handling Difficulties : Identifiying the root cause of failures is difficult.  As the number of events in the system-of-systems increases, and responsibilities amongst systems.  
- EDA is not a Panacea : Not every problem should be solved with an EDA approach.

- unanalyzed data in streams : event streams can remain uncorrelated mkaing it difficult to analyze.

- stream ordering : consumers often want to receive messages in the ordre that they are produced.  This is not always promised by stream processing technologes and must be solved at the application layer (protential producer - consumer coupling and complexity introduced)


## Application Problems (Consuming Streams)
[rf-2018](https://engineering.linkedin.com/blog/2018/11/samza-1-0--stream-processing-at-massive-scale)
- checkpointing
- management of local state
- handling failures
- scaling-out Processing
- etc

# Streaming Patterns
Aggregation : distributed architecture
Joining : Join customer with payment information, etc.
Windowing : [reference Conlfuent Stream Processing Tutorial](https://www.confluent.io/blog/stream-processing-part-1-tutorial-developing-streaming-applications/) - see [Databricks - Window Functions in Spark SQL - 2015](https://databricks.com/blog/2015/07/15/introducing-window-functions-in-spark-sql.html)

# Event Handling Patterns
- from Wikipedia [software design patterns](https://en.wikipedia.org/wiki/Software_design_pattern)

- [Reactor Pattern](https://en.wikipedia.org/wiki/Reactor_pattern) : The C10K problem.


  # TO CLEAN UP
  [ ] - align with Kakfa, Conlfuence training - CDC, etc....patterns
  [ ] - combine ./Streams/files
