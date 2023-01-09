
- TODO - see ../Streams/stream.md

[Wikipedia - Event Stream Processing](https://en.wikipedia.org/wiki/Event_stream_processing) - gives SQL query example *INTERVAL '1' SECOND*

- __2004__: Event Streaming History: PIPES - *A Public Infrastructure for Processing and Exploring Streams* [PIPES - University of Marburg DOI](http://dx.doi.org/10.1145/1007568.1007699)

  <details>
  <summary>
  Abstract
  </summary>
  PIPES is a flexible and extensible infrastructure providing fundamental building blocks to implement a data stream management system ([DSMS](https://en.wikipedia.org/wiki/Data_stream_management_system)). It is seamlessly integrated into the Java library XXL [1, 2, 3] for advanced query processing and extends XXL's scope towards continuous data-driven query processing over autonomous data sources.
  </details>

  # vendors

  |Name or Company|Type|Notes
  |--|--|--|
  |[Apache Kafka](https://kafka.apache.org/)|open-source|Confluent|
  |[Apache Flink](https://en.wikipedia.org/wiki/Apache_Flink)|
  |[Apache Pulsar](https://pulsar.apache.org/)|open-source	|newer than Kafka, streams and queues, feature-rich and complex|
  |[IBM Streams](https://www.ibm.com/cloud/streaming-analytics)|commercial|any using IBM streams?|
  |Google|[Dataflow](https://cloud.google.com/dataflow/)|*TODO*|
  |AWS|[Lambda](https://aws.amazon.com/lambda/)|*TODO*|
  |[NATS](https://nats.io/)||send small frequent messages with low latency (allows data loss)|

  # Flink vs Kafka
  [Confluent - Flink vs Kafka 2 - 2016](https://www.confluent.io/blog/apache-flink-apache-kafka-streams-comparison-guideline-users/)  (same article on [Data Artisans blog](https://data-artisans.com/blog/apache-flink-apache-kafka-streams))
  // TODO
  - Flink - no data storage

## other
- [0MQ](https://zeromq.org/) - ZeroMQ (also known as ØMQ, 0MQ, or zmq) looks like an embeddable networking library but acts like a concurrency framework. It gives you sockets that carry atomic messages across various transports like in-process, inter-process, TCP, and multicast. You can connect sockets N-to-N with patterns like fan-out, pub-sub, task distribution, and request-reply. It's fast enough to be the fabric for clustered products. Its asynchronous I/O model gives you scalable multicore applications, built as asynchronous message-processing tasks. It has a score of language APIs and runs on most operating systems.
- [tinymsg](https://github.com/iamso/tinymsg) - Tiny real-time messaging server (?? What was the tiny___ open-source messaging tool??)



# Event Streaming vs Traditional API
Event Streaming:
- more scalable
- more reliable
- decoupled
- real-time

TODO - Need to defend the above, as most would say APIs with ESB have all those characterists.
__2021__ : Handle data at scale.  REST APIs are not ideal (maybe not even possible) due to limitations with scalability.

##  Comparison to API [Ref: Blog](https://www.kai-waehner.de/blog/2020/05/25/api-management-gateway-apache-kafka-comparison-mulesoft-kong-apigee/)
### Request-Response communication has the following characteristics:
- Low latency
- Typically synchronous
- Point-to-point
- “Bespoke API”
- e.g. HTTP, SOAP, gRPC

### Event streams are based on these concepts:
- Messaging / Pub Sub (sending data from A to B and C)
- Continuous data processing (filtering, transformations, aggregations, business logic)
- Often asynchrounous
- Event-driven, supporting patterns like Event Sourcing and CQRS
- General-purpose events
- e.g. Apache Kafka

[Starbucks does not use two-phase commit - 2004](https://www.kai-waehner.de/blog/2020/05/25/api-management-gateway-apache-kafka-comparison-mulesoft-kong-apigee/)


# Kafka History
1. Initial: de-facto storage layer for storing and moving possibly large volumes of streaming data with low latency .
1. __2016__ Kafka Streams ([2016 announcement](https://www.confluent.io/blog/introducing-kafka-streams-stream-processing-made-simple))([Streams](https://kafka.apache.org/documentation/streams/))
1. Kafka Connect (https://www.confluent.io/blog/announcing-kafka-connect-building-large-scale-low-latency-data-pipelines):

## Kafka streams
Java API Library:  A library that helps you build a streaming application (input Kafka topics and output Kafka topics).  Orginally, with Kafka, you had to use the Kafka [producer](https://kafka.apache.org/090/javadoc/index.html?org/apache/kafka/clients/producer/KafkaProducer.html) and [consumer](https://kafka.apache.org/090/javadoc/index.html?org/apache/kafka/clients/consumer/KafkaConsumer.html) APIs directly.

Kafka Streams:
- [load balances - parallism model](https://docs.confluent.io/platform/current/streams/architecture.html#parallelism-model): balances the processing load as new app-instances are added (or existing ones crash)
- [maintains local state](https://docs.confluent.io/platform/current/streams/architecture.html#state) for tables
- [fault tolerancy - recover from failurs](https://docs.confluent.io/platform/current/streams/architecture.html#fault-tolerance)
- Java language (good if you know Java, bad if you are a DBA.  Hence, ksqldb)

Features/Solves:
- Event-at-a-time processing (not microbatch) with - millisecond latency
- Stateful processing including distributed joins - and aggregations
- A convenient DSL (domain specific language)
- Windowing with out-of-order data using a - DataFlow-like model
- Distributed processing and fault-tolerance with - fast failover
- Reprocessing capabilities so you can recalculate - output when your code changes
- No-downtime rolling deployments

Deployed:
- Kafka Streams apps can be deployed using classic ops-tools like Puppet, Chef, Salt, or cli
- Kafka Streams apps can be packaged as a Docker image (or as a WAR)

Alternatives: a host of framewworks to make application more dynamic [reference](https://www.confluent.io/blog/introducing-kafka-streams-stream-processing-made-simple/):
- [Apache Mesos](http://mesos.apache.org/) with a framework like [Marathon](https://mesosphere.github.io/marathon/)
- [Kubernetes](http://kubernetes.io/)
- [YARN](http://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/YARN.html) with something like Slider
- [Swarm](https://www.docker.com/products/docker-swarm) from Docker
- Various hosted container services such as [ECS](https://aws.amazon.com/ecs/) - from Amazon
- [Cloud Foundry - Pivotal](http://pivotal.io/platform)

### Streams vs Apache Flink
[reference](https://www.confluent.io/blog/apache-flink-apache-kafka-streams-comparison-guideline-users/)
- Streams API is out-of-the-box stream processing solution
- highly scalable, elstic, fault-tolerant, distrubted
- simple to build (Java) - Streams make kafka accessible as a mainstream application programming model
- fills gap of building core applications and microservices that process data streams (verus analytics focused domain)

|Workload|Tool|
|--|--|
|Process Data Stream|Kafka Streams|
|Data Analytics|?? - Apache Spark, ...|

Why use Streams? [Confluent Kafka vs Flink](https://www.confluent.io/blog/apache-flink-apache-kafka-streams-comparison-guideline-users/)
1. embeddable library (with Kafka cluster).  No need to build a separate cluster.  Integrates with existing packaging, deployment, monitoring and operations tooling.
2. Integrated with core Kafka abstraction.  Therefore benefits from kafka failover, elasticity, fault-tolerance, scalability and security
1. Hardened:  Widely deployed by 1,000's of companies.
1. New Stream Processing Concepts:  Integrating the abstraction of streams and tables (highly [performance joins](https://www.confluent.io/blog/distributed-real-time-joins-and-aggregations-on-user-activity-events-using-kafka-streams) and continuous queries)

[Flink Concepts](https://ci.apache.org/projects/flink/flink-docs-release-1.1/concepts/concepts.html)


## Kafka Connect
- provides a scalable and resilient integration between Kafka and other systems (databses)
- Added in 0.9.

Articles:
- [Confluent - No More Silos](https://www.confluent.io/blog/no-more-silos-how-to-integrate-your-databases-with-apache-kafka-and-cdc/) - from [Confluent Pipelines](https://www.confluent.io/blog/category/pipelines/) article category.

Features:
- handles the *tricky* features/business of integration, including:
  - Scaleout of ingest and egress across nodes for greater throughput
  - Automatic restart and failover of tasks in the event of node failure
  - Automatic offset management
  - Automatic preservation of source data schema
  - Utilisation of data’s schema to create target objects (e.g. Hive tables when streaming to HDFS, RDBMS tables when streaming to a database)
  - Schema evolution and compatibility support (in conjunction with the Confluent Schema Registry)
  - Automatic serialisation and deserialisation of data
  - Single Message Transformations
  - Exactly once processing semantics (on supported connectors)

Configuration File Driven:
```JS
{
  "name": "jdbc_source_mysql_foobar_01",
  "config": {
                "connector.class": "io.confluent.connect.jdbc.JdbcSourceConnector",
                "connection.url": "jdbc:mysql://localhost:3306/demo?user=rmoff&password=rmoff",
                "table.whitelist": "foobar",
                "mode": "incrementing",
                "incrementing.column.name": "foobar_pk"
        }
}
```
Connectors:
- [SQL Servier](https://docs.confluent.io/cloud/current/connectors/cc-microsoft-sql-server-sink.html)
- [Teradata](https://docs.confluent.io/kafka-connect-teradata/current/sink-connector/index.html)

##  Methodology:
CDC : Change-Data-Capture (Log-Based)

### JDBC - Good to start with...Methodology & Technology:
- JDBC, polls based on *poll.interval.ms*.  Not the best scaling.  Choose other connector-types.
- Doesn’t give true CDC (capture delete records, want before/after record versions)
- Latency in detecting new events
- Impact of polling the source database continually (and balancing this with the desired latency)
- Unless you’re doing a bulk pull from a table, you need to have an ID and/or timestamp that you can use to spot new records. If you don’t own the schema, this becomes a problem.

|Workload|Method|Pros|Cons|
|--|--|--|--|
|Development|JDBC|good for prototyping, quick to develop for small data|not scalable|
|Incremental streaming of data|JDBC with incrementing column or timestamp needed on SQL DB|cannot fetch deleted rows|
|CDC - Change Data Capture|Use DB's log-stream|Stream every single event from a database from the transaction log.  CDC tools extract at very low latency and low impact the events that are occurring on the database (or a schema/table within it. [Ref](https://www.confluent.io/blog/no-more-silos-how-to-integrate-your-databases-with-apache-kafka-and-cdc/)||

Know your requirements for data:
- simple streaming data so it can be used for analytics and ETL
- building event-driven applications (necessitates a log-based CDC approach) since you need all events (deletes, ...)

see [Streams/CDC](../Streams/CDC.md)
