# Kafka
- [Apache Kafka](https://cwiki.apache.org/confluence/display/KAFKA/Index)
- [Kafka Project Home](http://kafka.apache.org/)

## History
Started by LinkedIn Jay Kreps who also created the key-value store Voldemort.  Kreps left LinkedIn in 2010 and started Confluent which provides development, enterprise support and training for Apache Kafka.

## Technology
What open-source projects does kafka use for:
- database:
  - Kafka & Cassandra:  Used together in microservices architecture [DataStax - Skill Page - Patterns for integrating Kafka and Cassandra](https://www.datastax.com/dev/kafka)
- messaging: [Kafka Connect *???*][https://docs.confluent.io/platform/current/connect/index.html]

- configuration information: [Apache ZooKeeper](https://zookeeper.apache.org/), [ZooKeeper Wiki](https://cwiki.apache.org/confluence/display/ZOOKEEPER/Index) : an open-source server which enables highly reliable distributed coordination

### Kafka Add-Ons
Tiered Storage
ksql : an event streaming database


# streams
In computer science, a stream is a sequence of data elements made available over time. A stream can be thought of as items on a conveyor belt being processed one at a time rather than in large batches.[Streams (data computing) - Wikipedia](https://en.wikipedia.org/wiki/Stream_(computing))


# Why Streams and Kafka?
Tried messaging applications, ETL and log aggregation.  None did what was wanted.
- went against storing piles of data like relational dbs, key-value stores, searhc indexes and caches
- treat data as continually evolving and ever growing stream
- build a new system and data architecture around the above idea. [Kafka The Definitive Guide - O'Reilly](https://1drv.ms/b/s!AkwXSmFk-_xpgbc9OltYdNj5_os-3Q?e=TNZ4W0)

Kafka is a streaming platform:
- a system that lets you publish and subscribe to streams of data
- store them, and process them

Kafka (streaming) is compared to other technology cateogories:
- enterprise messaging systems
- big data systems (like Hadoop)
- data integration and ETL tools

1. Modern distributed system.  Runs as cluster and can scale.  Compared to brokers where you run dozens of message brokers, configured to apps.
1. Kafka is a true storage system built to store data for as long as you like.
1. Streaming raises the abstraction significantly.  Systems use stream processing capabilities to compute derived streams and datasets dynamically off your streams.  Far less code is needed to do this.

## Comparisons to:
### Not Just Another Queue (ESB)
Like a real-time version of Hadoop.
- Hadoop lets you store and periodically process file data at a very large scale.
- Kafka lets you store and continuously
process streams of data, also at a large scale.

### Big Data (Hadoop)
Some processes in Hadoop are batch processing using various Hadoop processing layers. (Application Layer - MapReduce, ..., Resource Management Layer - YARN, .., Storage Layer - HDFS).  Usually not low-latency.  Whereas, Kafka is low-latency by nature. [Ref: Forward of *Kafka The Definitive Guide* ]

### ELT / Data Integration Tools
Kafka inverts the problem.  Rather than a tool scrpaing data and inserting into another, Kafka is a platform focused on real-time streams of events.
- can connect COTS and data systems
- can power applications built to trigger off the same data streams

### Pub/Sub Messaging Systems
Apache Kafka is a good choice since:
- multiple producers: clients can use many topics or the same topic.  Use case: Aggregating data from many frontend systems and making it consistent.
- multiple consumers: many consumers can read from the same stream of messages (topic).  Versus some messaging systems, once a message is consumed by one client it is not available to any other client.
- disk-based retention: consumers do not need to consume in real-time (*store-and-forward* concept).  Applications (consumers) can be offline (outage, maintenance, etc) with no concern about message-loss.
- scalable: Kafka scalability allows it to handle any amount of data.  Scaling can occur while online/live.
- high performance: excellent performance under high load of the pub/sub messaging system
- data ecosystem:




### Splunk ???


# Kafka Terms & Settings
broker : a single Kafka server
cluser : Kfka brokers are designed to operate as part of a cluster.  One broker will operate as the cluster controller (elected)
partition : a partition is owned by a single broker in a cluster.  This broker is called the leader.
leader : the broker which is the owner of a partition.
Topic : retention {forever, }
Producer :
Consumer :
Consumer Group :
retention : the durable storage of messages for some period of time
Log : compaction [Kafka Log Compaction](https://kafka.apache.org/documentation.html#compaction)

## Clusters
Separate clusters maybe defined for:
- segregation of types of data
- isolation for security requirements
- multiple datacenters (disaster recover)

Obviously a development, testing and production will be separate clusters [Confluent - 15 Things Apache Kafka Engineers Should Know About Confluent Replicator](https://www.confluent.io/blog/15-facts-about-confluent-replicator-and-multi-cluster-kafka-deployment/)



## Broker settings
- retention : default for topics

## Topic settings
- retention ( time and/or size )
- log compacted [Kafka Log Compaction](https://kafka.apache.org/documentation.html#compaction)



# Kafka Ecosystem
Confluent ? Professional Service.   Managed clusters...

## Skills Need to Manage Kafka
...

# References
[Mastering Kafka Streams and kSQL - O'Reilly](https://1drv.ms/b/s!AkwXSmFk-_xpgfddWyd0i8PrENhI9Q?e=hw7Gvj)

[Kafka The Definitive Guide - O'Reilly](https://1drv.ms/b/s!AkwXSmFk-_xpgbc9OltYdNj5_os-3Q?e=TNZ4W0)

[?? Sreaming Data Architecture](https://1drv.ms/b/s!AkwXSmFk-_xpgfgdA-rMbcrTdog9_g?e=AckpoY)
