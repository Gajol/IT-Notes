# API Terms

api:
An API (application programming interface) is a computing interface which defines interactions between multiple software intermediaries. It defines the kinds of calls or requests that can be made, how to make them, the data formats that should be used, the conventions to follow, etc.


api technology: REST (HTTP), SOAP (XML), API Gateways and API Management support *api technology*

idempotent:
An API call or operation is idempotent if it has the same result no matter how many times it is applied.[def:square idempotent](https://developer.squareup.com/docs/working-with-apis/idempotency)

synchronous request/response

asynchronous communication:

message oriented middleware (MOM) [ApacheMQ Artmeic - Messaging Concepts](https://activemq.apache.org/components/artemis/documentation/1.0.0/messaging-concepts.html)})

publish-subscriber pattern features [from ApacheMQ](https://activemq.apache.org/components/artemis/documentation/1.0.0/messaging-concepts.html)
- delivery guarantees (once and only once, at least once, ...)
- transactions : large global transactions (Apache MQ uses [Java JTA - Java Transaction Api](https://www.progress.com/tutorials/jdbc/understanding-jta))
- durability / non-durable (survive server failure and restart)
- messaging APIs : JMS, system-specific APIs, RESTful API, STOMP, AMQP, ...
- High-Availability
- Clusters


promise : [JS promise](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises)
