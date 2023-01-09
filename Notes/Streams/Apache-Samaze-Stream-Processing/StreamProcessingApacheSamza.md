
# Apache Samza - Open Source
- [Apache Samza](https://samza.apache.org/) -
  - [LinkedIn Usage](https://engineering.linkedin.com/blog/2018/11/samza-1-0--stream-processing-at-massive-scale) - *We also present the key features in Samza 1.0: a rich high-level API, event-time-based processing, integration with Apache Beam, Samza SQL, a standalone mode to run Samza without YARN, and a new test framework for Samza applications*

## [Background](http://samza.apache.org/learn/documentation/latest/introduction/background.html)

Messaging Systems:  Messaging systems are a popular way of implementing near-realtime asynchronous computation. Messages can be added to a message queue (ActiveMQ, RabbitMQ), pub-sub system (Kestrel, Kafka), or log aggregation system (Flume, Scribe) when something happens. Downstream consumers read messages from these systems, and process them or take actions based on the message contents.

### Features:
Samza is a stream processing framework with the following features:

1. __Simple API__
: Unlike most low-level messaging system APIs, Samza provides a very simple callback-based “process message” API comparable to MapReduce.
1. __Managed state__: Samza manages snapshotting and restoration of a stream processor’s state. When the processor is restarted, Samza restores its state to a consistent snapshot. Samza is built to handle large amounts of state (many gigabytes per partition).
1. __Fault tolerance__: Whenever a machine in the cluster fails, Samza works with YARN to transparently migrate your tasks to another machine.
1. __Durability__: Samza uses Kafka to guarantee that messages are processed in the order they were written to a partition, and that no messages are ever lost.
1. __Scalability__: Samza is partitioned and distributed at every level. Kafka provides ordered, partitioned, replayable, fault-tolerant streams. YARN provides a distributed environment for Samza containers to run in.
1. __Pluggable__: Though Samza works out of the box with Kafka and YARN, Samza provides a pluggable API that lets you run Samza with other messaging systems and execution environments.
1. __Processor isolation__: Samza works with Apache YARN, which supports Hadoop’s security model, and resource isolation through Linux CGroups.

### Differentiators from Alternatives
- [Ref: Samza](http://samza.apache.org/learn/documentation/latest/introduction/background.html)
Samza’s main differentiators are:

Samza supports fault-tolerant local state. State can be thought of as tables that are split up and co-located with the processing tasks. State is itself modeled as a stream. If the local state is lost due to machine failure, the state stream is replayed to restore it.
Streams are ordered, partitioned, re
playable, and fault tolerant.
YARN is used for processor isolation, security, and fault tolerance.
Jobs are decoupled: if one job goes slow and builds up a backlog of unprocessed messages, the rest of the system is not affected.

# Alternatives to Samza
[Samza Comparison - by Samza](http://samza.apache.org/learn/documentation/latest/comparisons/introduction.html)
Stream Model
- streams are the inputs and outputs to Samza jobs (message exchange via streams)
- a stream in Samza is:
  - partitioned
  - ordered-per-partition
  - replayable
  - multi-subscriber
  - lossless sequence of messages
- Streams are not just inputs and outputs to the system, but also buffers that isolate processing stages from each other.

Writes.
MapReduce criticized for writing to disk more than necessary.  But think of the "stream model" problem compared to the "process large historical collections of data in s short time period" problem:
- stream processing mostly needs to *keep up* with a steady-state flow of data.  Process 10-minutes of data in 10-minutes.
- batch processing large data quickly is orders of magnitude more processing.  *"Process last months logs in 10-minutes".

## MUPDB
Created by Walmart.  No longer active (end of life 6-years ago)
[Samza's Comparison to MUPDB](http://samza.apache.org/learn/documentation/latest/comparisons/mupd8.html)
- Durability:  MUPDB makes no durability or delivery guarantees
- Ordering: MUPDB provides same guarantee as Kafka and Samza
- Buffering: MUPDB is in-memory buffers and developers must drop or block when full.  Samza can use Kafka's broker as a remoe buffer. Kafka disks are the buffer (highly scalable and available v0.8)
- State Management: MUPDB uses write-back startegy to manage in-memory state that is periodically written to Casandra.
- Deployment & Execution : MUPDB is custom-framework.  Samza use YARN to deploy user code and execute it in a user environment.
