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

declarative api: new APIs developers call an API to achieve an outcome (not perform an action)
- Declarative APIs encapsulate common design patterns and best practices. Developers tell these APIs what they want to do, not how to do it. Twilio is responsible for the heavy lifting, for writing the efficient algorithms, and for employing the best security practices. Declarative APIs free developers from reinventing the wheel so that they can focus on creative problems and competitive differentiation. [ref: Twilio](https://www.twilio.com/blog/2017/05/declarative-apis.html).   Declaractive is the opposite of imperative.  *Imperative*, "imperative type approach to management, meaning specific instructions are sent to the infrastructure and executed, if it’s not correct, further instructions and commands are sent to perform some other action"

comes from *declarative programming* where in declarative programming, developers tell an application what they are trying to achieve. Contrast this to imperative programming, where a developer specifies exactly how to do it. [ref: API design](http://wiki.apidesign.org/wiki/Declarative_Programming)

- This is important as cloud and microservices are now standing up to take on the brunt of our workloads, providing small, reusable chunks of code that assemble themselves in unity to deliver large, complex applications. (i.e., the Cloud Native Application and Distributed Architecture models)
  - Rather than managing workloads at an application-level, they can now be broken down into small, ephemeral pieces. When a service becomes unavailable, another simply takes its place — when the need to scale occurs, distributed file systems allow multiple nodes to work in harmony, providing more resources to the overall applications.
  - RESTful APIs provide a standardized, stateless architecture that allows us to integrate and automate these disparate and separate software solutions, bringing all applications down to a common ground.
  - Coupling this with abstracted management and operation layers, APIs provide a means to deliver a highly automated, scale-out solution. [ref: the new stack](https://thenewstack.io/the-declarative-power-of-apis/)


affordance: A potential action that is made possible by a given object or environment; especially, one that is made easily discoverable.  The qualities or properties of an object that define its possible uses or make clear how it can or should be used.  [Roy Fielding - an author of HTTP specification, defined REST as key principle of WWW](https://en.wikipedia.org/wiki/Roy_Fielding).  See [Three Mental Models of APIs](https://mooreniemi.github.io/3_models_of_apis/#/) and [WADM - Web API Design Maturity Model](http://amundsen.com/talks/2016-11-apistrat-wadm/2016-11-apistrat-wadm.pdf)

web api maturity model: [WADM](http://amundsen.com/talks/2016-11-apistrat-wadm/2016-11-apistrat-wadm.pdf) Database Centric -> Object Centric -> Resource Centric -> Affordance Centric .  See alse [3 Models of APIS - 2016](https://mooreniemi.github.io/3_models_of_apis)
