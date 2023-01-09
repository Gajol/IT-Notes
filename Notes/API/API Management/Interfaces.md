[Websocket](https://tools.ietf.org/html/rfc6455)
Web service
Web APIM
Webhook  [Apache Camel Polling vs Webhooks](https://camel.apache.org/components/latest/github-component.html)


Stateful / Stateless

text representation and Protocol Buffers [Open Metrics](https://openmetrics.io/)

|Technology|Characterisitic|Note
---|---|---
Websocket|Stateful
HTTP|Stateless
Rest|Stateless
ProtocolBuffer||Google
gRPC||Google


Message Broker
Service Mesh
API gateway
Message Queue
- Apache ServiceMix (ESB)
- IBM MessageQ
- Rabbit MQ : RabbitMQ is the most widely deployed open source message broker. With tens of thousands of users, RabbitMQ is one of the most popular open source message brokers.  "Messaging that just works."

- Apache Kafka :

# RabbitMQ vs Kafka
[vmWare - RabbitMQ vs Kafka 2020-11](https://tanzu.vmware.com/developer/blog/understanding-the-differences-between-rabbitmq-vs-kafka/) & [2017 Comparison Kafka and RabbitMQ](https://tanzu.vmware.com/content/blog/understanding-when-to-use-rabbitmq-or-apache-kafka)

## RabbitMQ
- open source
- distributed message broker
- written in Erlang
- efficient delivery in complex routing scenarios
- protocols (initial AMQP, ...)
- plug-in support
- reliability through distributing brokers across multiple servers

### Benefits
- where per-message guarantees are needed
- specific routing needs

## Apache kafka
- distributed event streaming protocol
- facilitates raw throughput (versus flexible routing)
- written in Scala, Java
- distributed append-only log (messages written to the end of the log that is persisted on disk)
- reliability through distributing kafka clusters across multiple servers
- [Confluent Kafka versus ESB](https://www.confluent.io/blog/apache-kafka-vs-enterprise-service-bus-esb-friends-enemies-or-frenemies/)


### Benefits
- append-only log allows developers access to history
- more direct stream processing  
- specific routing need
- [Kafka Streams](https://kafka.apache.org/documentation/streams/)
- [ksqlDB](https://ksqldb.io/)


## Decision Criteria for "Which one is better"
- what fits your use-cases
- what skills are needed to support them
- the Venn diagram is pretty tight (i.e., not much difference between the two unless there is a key driver) - see [vmWare Event Driven Architecture - EDA](https://tanzu.vmware.com/developer/patterns/eventing/)


# Apache Service Mix
- [Apache ServiceMix](https://servicemix.apache.org/): Apache ServiceMix is a flexible, open-source integration container that unifies the features and functionality of Apache ActiveMQ, Camel, CXF, and Karaf into a powerful runtime platform you can use to build your own integrations solutions. It provides a complete, enterprise ready ESB exclusively powered by OSGi.


## Enterprise Integration Patterns
[EIP Book 2003](https://www.enterpriseintegrationpatterns.com/gregor.html)

### Message Broker
[Apache CAMEL - Message Broker](https://camel.apache.org/components/latest/eips/message-broker.html): Using a central Message Broker is sometimes referred to as hub-and-spoke architectural style, which appears to be a descriptive name when looking at the diagram above.   How can you decouple the destination of a message from the sender and maintain central control over the flow of messages?  Use a central Message Broker that can receive messages from multiple destinations, determine the correct destination and route the message to the correct channel. Implement the internals of the Message Broker using the design patterns presented in this chapter.

[Message Bus](https://camel.apache.org/components/latest/eips/message-bus.html) vs [Message Broker](https://camel.apache.org/components/latest/eips/message-broker.html)
The message bus implies a common protocol spoken and understood by all participants. There is little to no logic in the bus. Usually the message is forwarded to all connected systems.

The hub-and-spoke architecture (or "message broker") has a central piece of software which understands the messages sent to it, can translate them, and forward them to the systems which need the information.  [StackOverlfow - Bus vs Broker - 2011](https://stackoverflow.com/questions/3144788/difference-between-message-bus-and-message-broker)



# gRPC
https://www.apiscene.io/lifecycle/rest-grpc-api-communication-in-microservices/

Engineer vs Programmer see Wikipedia Martin (Agile Manifesto, SOLID)


# API Choice
Is the API communicating (exchanging information) between [ref: rest/grp microservices communication](https://www.apiscene.io/lifecycle/rest-grpc-api-communication-in-microservices/):
- front-End vs back-end [front-end vs back-end](https://developer.squareup.com/docs/working-with-apis/frontend-versus-backend)
- back-end to external service
- external service
- downstream APIs


# Serialization
- Protocol Buffers
- Thrift
- Avro : [Apache Avro](https://avro.apache.org/)
- Java Serialization

## Avro
[Apache Avro](https://avro.apache.org/) provides:
- Rich data structures.
- A compact, fast, binary data format.
- A container file, to store persistent data.
- Remote procedure call (RPC).
- Simple integration with dynamic languages. Code generation is not required to read or write data files nor to use or implement RPC protocols. Code generation as an - optional optimization, only worth implementing for statically typed languages.
