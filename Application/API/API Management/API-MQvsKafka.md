# When to use MQ.

https://www.upsolver.com/blog/kafka-versus-rabbitmq-architecture-performance-use-case

MessageQueues, like RabbitMQ, are generally message brokers.  Message brokers [ref](https://www.simplilearn.com/kafka-vs-rabbitmq-article):
- validate, route, store, and deliver messages to the designated recipients.
- a queue
- brokers operate as gateways (intermediaries) between other applications.
- senders issue messages without knowing the consumers’ locations, whether they’re active or not, or even how many of them exist.

Publish/Subscriber:
- a topic: broadcast style distribution model (topic)
- one-to-many relationship between the publisher and the consumers

Use a MQ like RabbitMQ in these cases [ref](https://www.simplilearn.com/kafka-vs-rabbitmq-article):

|Workload|Examples|
|--|--|
|high-throughput and reliable background jobs||
|web services needed rapid request/response|MQ shares loads between workers|
|integration and intercommunication within applications|*job-request* type communicate vs event-notification|
|complex routing to consumers|integrate multiple applications and services with non-trivial routing logic|
|long-running tasks|PDF conversion, file scanning or image scaling|
|low number of messages|? not sure why not kafka ? Kafka is difficult to build a complex pipeline and transformations. ([ref](https://www.upsolver.com/blog/apache-kafka-use-cases-when-to-use-not)).  Might be simpler to not even use a messaging system.  That is use point-to-point RESTapi.|

Risks / Future Concerns:
- there should be limited risk of future consumers (either new consumers for new applications where a replay historical is required, the need to send to a second consumer))

# Why Kafka over RabbitMQ

From [Quora Why Kafka is more popular than RabbitMQ](https://www.quora.com/Why-Apache-kafka-is-more-popular-than-RabbitMQ)

1. Kafka has more flexible and agile consumer patterns.  

  - __Consumer is in Control__:
    - Consumer does can subscribe to the queue (topic) after the messages have been produced.
    - Consumer can subscriber to the topic months or days and have access to old messages.
    - Consumer can define how and when it consumes messages
    - Consumer pull-based approach (get messages in batches by offset)

  - __Event Notification__: Kafka messages are more an "event notification" - *this just happened* versus a command to execute a job or function.  Supports event driven architecture (low coupling)

  - __Decoupled__: better separation between producer and consumer since messages are persisted *forever*.  Producer can forget about past published messages (events)

  - __New Consumers for New Applications__: Solutions can create new consumers for new roles at any time in event-lifecycle and process/reprocess messages.  Append-only log allows replaying events.

1. Kafka is very good at handling multiple consumers
1. Kafka is very good at supporting unreliable consumers
1. Dev/Prod Use Cases.   Dev environment can consumer Prod events.

Kafka challenges:
1. Administration difficulties
1. Upfront investment (infrastructure)
1. tendancy to over-engineer separation of concerns (vs allowing some tight-coupling) [ref](https://dzone.com/articles/best-practices-for-event-driven-microservice-archi)
1. transaction management : because of their asynchronous nature (publish event, and consumers may or may not have processed the event) there are inconsistent data between systems/services(microservices).  Event driven systems must handle data inconsistencies, incompatible versions, eventual consistency paradigm is harder to track and debug (verus ACID transaction type systems) [ref](https://dzone.com/articles/best-practices-for-event-driven-microservice-archi)
1. Zookeeper use

## Characteristics of Message Brokers, Messaging Services

RabbitMQ and other "old style" messaging services (Message Oriented Middleware)
1. __Producer-focused__: focused on producer
1. __Delivery-model__: guaranteed delivery, guarantted single execution
1. __Right-Now Execution__:  aimed at ESB-type use-cases guaranteed (right now) single delivery (*reset password, update customer account across multiple systems, ... *)
1. __Limited Storage / Undeliverable Complexity__: typically remove message from queue once processed (i.e., once the delivery guarantee has been met).  Problems are moved to a "dead letter" queue which requires special handling (more development software and complexity)
1. __No multiple consumers support__: Not recommended to have multiple consumers to a RabbitMQ queue. [Rabbit MQ Consumers](https://www.rabbitmq.com/consumers.html).  If there are multiple consumers, only once consumers gets a message (message is removed from queue).

# REST Web Interface - When to Use [Ref](https://dzone.com/articles/best-practices-for-event-driven-microservice-archi)
1. You need an asynchronous request/reply interface.
1. You need support for strong transactions.
1. Your API is available to the public.
1. Your project is small (REST is much simpler to set up and deploy).



# Messaging Features (file / write somehwere lese - add to other list )
__TODDO__
Guaranteed Messaging (a.k.a.  Persistent Messaging or store-and-forward messaging

# Event Streaming Options

## Kafka
- 2011 - Event Driven Architecture, microservices, cloud scalability

## Dzone EDA
[EDA - Best Practices - Dzone 2019](https://dzone.com/articles/best-practices-for-event-driven-microservice-archi)


# MQ options
- [RabbitMQ](https://www.rabbitmq.com/)
- [Apache MQ Classic](https://activemq.apache.org/) - JMS, Long established, endlessly pluggable architecture serving many generations of applications.
- [ApacheMQ Artemis](https://activemq.apache.org/components/artemis/documentation/) - JMS 1.1 & 2.0 with full client implementation including JNDI


## [RabbitMQ](https://www.rabbitmq.com/)
- 2007, era of SOA systems
- open-source
- supports MQTT, AMQP, and STOMP
  - [MQTT](https://mqtt.org/)
  - AMQP
  - STOMP


### MQTT - Message Queuing Telemetry Transport (IoT ecosystem)
  - 1999 OASIS Standard messaging protocol
  - marketing is IoT based protocol
  - publish-subscriber  
  - usually TCP/IP (ordered, lossless, bi-direction connections)
  - small code footprint
  - designed for systems with less computing power
  - designed for systems with limited network bandwidth
  - [MQTT](https://mqtt.org/) - [Wikipedia](https://en.wikipedia.org/wiki/MQTT)

  The Message Queuing Telemetry Transport (MQTT) is a lightweight, publish-subscribe network protocol that transports messages between devices. The protocol usually runs over TCP/IP; however, any network protocol that provides ordered, lossless, bi-directional connections can support MQTT.[1] It is designed for connections with remote locations where a "small code footprint" is required or the network bandwidth is limited. The protocol is an open OASIS standard and an ISO recommendation (ISO/IEC 20922).

Features of MQTT (from [DZone](https://dzone.com/articles/comparison-of-asynchronous-messaging-technologies))
- Stream oriented, low memory consumption
- Designed to be used for small dumb devices sending small messages over low bw networks
- No long lived store and forward support
- Does not allow fragmented messages (hard to send large messages)
- Supports publish-subscribe for topics
- No transactional support (only basic acknowledgements)
- Messaging is effectively ephemeral (short lived)
- Simple username, password based security without enough entropy
- No connection security supported
- Message is opaque
- Topic is global (one global namespace)
- Ability to support Last Value Queue (LVQ)
- Client and server are asymetric
- Not possible to extend


### AMQP - Advanced Message Queuing Protocol
- [AMQP](https://en.wikipedia.org/wiki/Advanced_Message_Queuing_Protocol)
- message orientation,
- queuing,
- routing (including point-to-point and publish-and-subscribe),
- reliability
- security

Interoperability of AMQP [ref](https://en.wikipedia.org/wiki/Advanced_Message_Queuing_Protocol)
AMQP mandates the behavior of the messaging provider and client to the extent that implementations from different vendors are interoperable, in the same way as SMTP, HTTP, FTP, etc. have created interoperable systems.
- Previous standardizations of middleware have happened at the API level (e.g. JMS) and were focused on standardizing *programmer interaction* with different middleware implementations, rather than on providing interoperability between multiple implementations.
- AMQP, unlike JMS, which defines an API and a set of behaviors that a messaging implementation must provide, AMQP is a wire-level protocol.
  - A wire-level protocol is a description of the format of the data that is sent across the network as a stream of bytes. Consequently, any tool that can create and interpret messages that conform to this data format can interoperate with any other compliant tool irrespective of implementation language.

  AMQP supports monitoring of messages in a queue for a specific consumer.  The Advanced Message Queuing Protocol (AMQP) can support programmatic load balancing and monitoring because of the separation between an exchange (what the producer sends to) and a queue (what the consumer listens to). [ref: OReilly Fundamentals of Software Architecture - ISBN 978-1-4920-4345-4 ](https://learning.oreilly.com/library/view/fundamentals-of-software/9781492043447/)



### [STOMP](https://stomp.github.io/)
Simple Text Oriented Messaging Protocol / Streaming Text Oriented Messaging Protocol
- latest version is 2012 - so likely not worth considering for new developments

# JMS
> from [Dzone](https://dzone.com/articles/comparison-of-asynchronous-messaging-technologies)

- Standard messaging API for JAVA platform
- Interoperability is only within Java and JVM languages like Scala, Groovy
- Does not worry about the wire level protocol
- Supports 2 messaging models with queues and topics
- Supports transactions
- Defines the message format (headers, properties and body)


# When to use Point-to-Point Messaging

# Terms
asynchronous
wire-level protocol
Asynchronous Messaging Technologies [Dzone 2016: JMS, AMQP, MQTT](https://dzone.com/articles/comparison-of-asynchronous-messaging-technologies)
last value queue: Last-Value queues are special queues which discard any messages when a newer message with the same value for a well-defined Last-Value property is put in the queue. In other words, a Last-Value queue only retains the last value.
