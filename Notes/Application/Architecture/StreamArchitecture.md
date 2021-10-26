
# Definition - Stream Architecture
Streaming data refers to data that is continuously generated, usually in high volumes and at high velocity. A streaming data source would typically consist of a stream of logs that record events as they happen – such as a user clicking on a link in a web page, or a sensor reporting the current temperature.

A streaming data architecture is a framework of software components built to ingest and process large volumes of streaming data from multiple sources. While traditional data solutions focused on writing and reading data in batches, a streaming data architecture consumes data immediately as it is generated, persists it to storage, and may include various additional components per use case – such as tools for real-time processing, data manipulation and analytics. [ref:upsolver.com/blog](https://www.upsolver.com/blog/streaming-data-architecture-key-components)


## Alternative - Legacy Pattern
Batch Processiong : Also an ETL based pattern, but generally relies on creating a large batch-file from a source system (extract), transforming this large file (transform) and then loading the file (load) into one or more destination systems.   

General design challenges with the batch processing pattern are:
- latency:  the ETL process by nature introduces latency as the entire source system is extracted, transformed and loaded.  
- scalability: this pattern is not scalable for big data, distributed application architectures.  The more data, systems and transformations involved add incremental latency.
- coupling / cohesion : the ETL process is often not associated with the core business logic and data models.  This coupling introduces friction to change.


# components
Stream processing adds the concept of building blocks allowing scaling and performance to be architected where needed. ([ref: Upsolver.com](https://www.upsolver.com/blog/streaming-data-architecture-key-components))
1. Message Broker : Traditionly RabbitMQ / Apache ActiveMQ.  Modern can be Apache Kafka and Amazon Kinesis Data.   A message broker recieves messages from a producer, converts it to a standard format, and streams it.
1. Batch & Real-Time ETL Tools : Receiving messages from 1+ message brokers, aggregating, transforming and storing in databases (SQL).  The result can be an API call, an action, an alert, a visualization, and/or a new data stream.  This is component of the building block nature of a flexible stream processing architecture.
1. Data Analytics / Serverless Query Engine : Use one or more streaming data analytics tools (Apache Spark, Amazon Athena, Splunk, ElasticSearch/ELK, ..)
1. Streaming Data Storage : Depending on benefit, store the streaming data (Kafka persisent storage, Amazon S3, DB (PostgreSQL), Amazon RedShift (RDBMS)).

# Benefits of Streaming Architecture
- endless streams of data:  stream processing allows applications to deal with never ending streams of data.  Insights can be gathered in real-time from these streams (difficult, but possible)
- real-time processing (near-real time) : Real time analytics can be provided without the need for a high-performance database system
- time-series data & patterns : data is continuously processed and is not segented across batches.  Stream processing is effective for time-series data as there are no batch-induced time bounderies impacting analysis.
scalability : stream processing can scale with the demand.

As a result, a streaming architecture can:
- eliminate the need for large data architecture projects
- provide built-in performance, high availability and fault tolerance
- flexiblity for multi-use cases
- if in cloud, quick deployments

# Stream Patterns

## Pub / Sub ++ for Streams
Based on __FLow Architecture__[O'Reilly] some key patterns in a modern Flow Architecture are:
- Collector : Many producers : Few consumers
- Distributor : Few producers : Many consumers
- Signal Processor : Many/Many producers/consumers (ESB-like direct message to appropriate consumer(s))
- Facilitator : Many/many producers(supply)/consumers(demand) (connect sellers to buyers - smarts in the middle layer)

# Open Source Projects
Streaming data open-source projects from Apache include:
- Apache Kafka and Apache Pulse for log-based queueing
- Apache Beam, Flink, Heron, Nifi, Samza, and Storm for stream processing
- Apache Druid as a “stream-native” database

CNCF (Linux Foundation based organization) includes:
- [gRPC](), which is an increasingly popular RPC framework that could very well play a key role in any future flow interface
- [NATS.io](https://nats.io/), a cloud-native messaging platform for edge and distributed systems
- [Argo](https://argoproj.github.io/), a Kubernetes-based workflow manager that theoretically could act as the core of an event-driven process automation bus
- [CloudEvents standard specification](https://cloudevents.io/): A specification for describing event data in a common way

Kafka vs Nats.io
- Kafka is an Event Streaming Platform, whereas Nats.io is a Message Queue
- Kafka is for Event Driven Architectures pub/sub with added ordering and persistence features (replay)
-  whereas Nats.io optimized pub-sub for decoupling systems  ([nats.io docs](https://docs.nats.io/))
- see ..Assets/Contrasting Nats to Kafka

TL;DR Kafka is an Event Streaming Platform, while NATS is a closer to a conventional Message Queue. Kafka is optimised around the unique needs of emerging Event-Driven Architectures, which enrich the traditional pub-sub model with strong ordering and persistence semantics. Conversely, NATS is highly optimised around pub-sub topologies, and is an excellent platform for decoupling systems where message order and reliable delivery is a non-issue.

# References
- [Flow Architecture - James Urquhart - ISBN 978-1-4920-7589-9](https://learning.oreilly.com/library/view/flow-architectures/9781492075882/)
  - [Flow Architecture - Slideshare](https://www.slideshare.net/jurquhart/flow-architectures-an-introduction)
