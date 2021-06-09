# API management
<details>
<summary>Excerpt</summary>
This article discusses API management, some API management vendors and open-source and a comparison to other technologies.

- [API Management](./API-Terms.md)
</details>

## Overview
 API management is the process of creating and publishing web application programming interfaces (APIs), enforcing their usage policies, controlling access, nurturing the subscriber community, collecting and analyzing usage statistics, and reporting on performance. API Management components provide mechanisms and tools to support developer and subscriber community ([Wikipedia - API Management](https://en.wikipedia.org/wiki/API_management))

## Why API management?
A single point of entry for all connected systems and services.  Helps developers (IT, client-external, business-citizen) develop to APIs.

- [CMS Wire - Why API Management](https://www.cmswire.com/information-management/what-is-api-management-and-why-do-i-need-it/).   See the below informaation for the featres of API management.

- [Use Cases for API Management - Confluent Kafka](https://www.kai-waehner.de/blog/2020/05/25/api-management-gateway-apache-kafka-comparison-mulesoft-kong-apigee/)
- Open API: Developer portal and API Gateway
- Partner Gateway: Access control for well-known external parties
- Mobile App Gateway: Access control for apps deployed externally
- Cloud Integration Gateway: Governance and mediation control for SaaS
- Internal Governance: Manage, monetize and bill internal services and applications

### API Strategy
__2013__: See *2013 API Strategy Conference* - [John Musser - API Business Models - 2013](https://www.slideshare.net/jmusser/j-musser-apibizmodels2013) - [ John Musser Video API Science ](https://www.youtube.com/watch?v=gfguGS8HYvM)

#### API Strategy - Why?
Drive innovation, Extend product, Content acquisition, ...

1. Why? First think about Why?
1. Who? Who is the API?   Who is consumer.  Us, Customer/Partner, OpenAPI.
1. What? What am I selling?  What is the service?  What is the value (data, audience, function)?

- Twilio - Cloud API
- Salesforce - 50% of transactions that go into Salesforce come from the API
- Facebook - free to obtain social media knowledge
- Paypal - transaction-fee
- Amazon - pay-as-you-go

#### API Business Model - ? How ?
__2005__: API Universe.  Google Maps API, "web mashup" phrase. Free, Develop gets paid, Developer pays, indirect
__2013__: 30+ business models.  More ways to monetize API's. build, provision, support - need money.

## Wikipedia - API management
[Wikipedia API Management](https://en.wikipedia.org/wiki/API_management)
Features:
- gateway: API front-end, receives requests, enforces throtting & security policies, passess requests to the back-end, and then passes response back to requestor
  - transformation engine: orchestrate and modify request and responses on the fly
  - collect analytics data
  - provide caching
  - authentication, authorization, security, audit, regulatory compliance
  - "reverse proxy"
- publishing tools: tools to define APIs, (e.g. [OpenAPI](https://en.wikipedia.org/wiki/OpenAPI_Specification)or [RAML](https://en.wikipedia.org/wiki/RAML_(software))), generate API documentation, govern API usage via access/usage policies, *test* and *debug* API (including security testing and automated test generation/test suites), deploy APIs to production/staging/test, coordinate API lifecycle
- developer API store: community site (usually branded by the API provider) - documentation, tutorials, sample code, SDK, interactive API console, ...
- reporting and analytics: monitor API usage and load (hits, transactions, data objects returned, compute time, ..)
- monetization : billing for use


## Questions
1. OpenAPI : How does OpenAPI work within the API Management ecosystem?
  - I assume the API Management solution is the service catalog for APIs (e.g, the branded API catalog with API specfication, documentation, code samples, etc)

### Gartner References
- [Gartner - Successfully Implement API Management](https://1drv.ms/b/s!AkwXSmFk-_xpgfctpiuj_lCQhvddBg?e=drwPlQ)

- [Gartner API Stategy Maturity](https://1drv.ms/b/s!AkwXSmFk-_xpgfcr7z2XsKpYCAugwQ?e=7aprjP)

- [Gartner Ensure API Management includes Cloud and Microservices](https://1drv.ms/b/s!AkwXSmFk-_xpgfcsgjdWFv2I6bIgDQ?e=JhBkfi)

- [Gartner Magic Quadrant - Full Lifecycle API Management](https://1drv.ms/b/s!AkwXSmFk-_xpgfcuxbMGU99AXAp6Vw?e=QjdZOd)

- [Gartner HCM Integration Strategy - 2020](https://1drv.ms/b/s!AkwXSmFk-_xpgfgLA3GjpRzExHTf4A?e=mEUs6W)

- [Gartner Choose Integration Technology - 3 Patterns](https://1drv.ms/b/s!AkwXSmFk-_xpgfgPsUqHLZZfvh4Xqw?e=uweb4l)

## API Management vs Service Message
- [Cloud Native Foundation - API Management vs Service Mesh](https://www.cncf.io/blog/2020/03/06/the-difference-between-api-gateways-and-service-mesh/)
- [CNF - Cheat Sheat API-M vs Service Mesh Cheat Sheet](https://konghq.com/blog/the-difference-between-api-gateways-and-service-mesh/#cheatsheet)

### History
1. __2003__:  EIP : Enterprise Integration Patterns ([EIP - 2003](https://en.wikipedia.org/wiki/Enterprise_Integration_Patterns)).  Apache CAMel and Apache ServiceMix (ESB).  Many vendors have products in the ESB space (Oracle Fusion / Oracle SOA Suite, IBM Websphere, ...).  The SOA timeframe (Service Oriented Architecture) which replaced the 3-tier architecture.  Note, EIP has many patterns include "data flow" which ESB's provided and more recently products like Apache Nifi
2. __2010__: API Management : Came around 2010 (I'm guessing before microservices and containers).  API Management (and __API Gateways__) - runtime features (connect, secure and govern API traffice), plus, non-functionals (creating, testing, documenting, monetizing(billing), monitoring, user personas, ..)
3. __2017__: Service Mesh : A pattern for monoliths or microservices on any platform (VMs, containers, kubernetes).  APIM has a role in service meshs (high similarity in functionality).  With the service mesh pattern, we are outsourcing the network management of any inbound or outbound request made by any service (not just the ones that we build but also third-party ones that we deploy) to an out-of-process application (the proxy) that will manage every inbound and outbound network request for us, and because it lives outside of the service, it is by default portable and agnostic in order to support any service written in any language or framework. [CNF Difference Between Service Mesh and API Gateway](https://www.cncf.io/blog/2020/03/06/the-difference-between-api-gateways-and-service-mesh/).  See the [cheat sheet](https://konghq.com/blog/the-difference-between-api-gateways-and-service-mesh/#cheatsheet) "Most likely, the organization will have both of these use cases, and therefore an API gateway and service mesh will be used simultaneously."

- __2004__: Event Streaming History: PIPES - *A Public Infrastructure for Processing and Exploring Streams* [PIPES - University of Marburg DOI](http://dx.doi.org/10.1145/1007568.1007699)

  <details>
  <summary>
  Abstract
  </summary>
  PIPES is a flexible and extensible infrastructure providing fundamental building blocks to implement a data stream management system (DSMS). It is seamlessly integrated into the Java library XXL [1, 2, 3] for advanced query processing and extends XXL's scope towards continuous data-driven query processing over autonomous data sources.
  </details>


# When to Use API Management
There are many technologies to integration applications and expose APIs.   When should one use API-Management:
- improved developer experience of creating, versioning, releasing and documenting APIs.   

Other technologies include ESB, Streaming (Kafka, ), Service Mesh, Message Queue, ..

|Technology|Main Uses Cases|Examples|Tech Examples
|--|--|--|--|
|Point-to-Point Messaging|||Message Queue (Rabbit MQ or IBM MessageQ)|
|Managed File |TransferTransfer Large Files: sharing databases, videos, datasets|backups, open data, ...|JSCape, Axway, ...|
|API Management|Manage APIs, Develop APIs, Monetize APIs||Microsoft APIM, apigee microgateway(https://github.com/apigee-internal/microgateway), [Google apigee](https://cloud.google.com/apigee)|
|[Message Oriented Middleware](https://en.wikipedia.org/wiki/Message-oriented_middleware)|||[Jakarta - JMS (Java)](https://en.wikipedia.org/wiki/Jakarta_Messaging)|
|Event Streaming|stream events at scale (IoT)|Social Media streams (LinkedIn)|Kafka|
|Service Mesh|Orchestrate Kubernetes Containers||*TODO better list of Service Mesh* [NGINX Ingress Controller](https://www.nginx.com/products/nginx-ingress-controller/)|
|[Tightly Coupled Communication]()|*not recommended*|1990's|CORBA, [Java Messaging Interface](https://en.wikipedia.org/wiki/Java_remote_method_invocation)|

Good article: [Kafka and Mulesoft](https://www.kai-waehner.de/blog/2020/05/25/api-management-gateway-apache-kafka-comparison-mulesoft-kong-apigee/)
> To be fair, Kafka is not the best solution for every problem. If you need point-to-point messaging, use something like RabbitMQ or IBM MQ. If you need to transfer large files, evaluate the market for MFT (Managed File Transfer) products. And… If you need to manage and monetize APIs, then evaluate API Management solutions.

## Problem Space .
Integrate in the easiest way to have the most flexibilty.

producer-consumer problem: [Wikipedia - "bounded-buffer problem"](https://en.wikipedia.org/wiki/Producer%E2%80%93consumer_problem): producers, consumers, queue, limited buffer, ..)

### Goal
- loosely coupled, distributed communication [JMS - Wikipedia](https://en.wikipedia.org/wiki/Jakarta_Messaging)

### Models
- point-to-point model: With point-to-point messaging system, messages are routed to individual consumers who maintain queues of incoming messages. This messaging type is built on the concept of message queues, senders, and receivers.

- publish-subscriber model: The pub-sub model  supports publishing messages to a particular message "topic". Subscribers may register interest in receiving messages published on a particular message topic. In this model, neither the publisher nor the subscriber knows about each other. A good analogy for this is an anonymous bulletin board.


# Vendors
Vendors include Mulesoft, Azura API Management, Axway, TIBCO...
- [TIBCO](https://www.tibco.com/)

- Amazon : [Amazon API] Gateway(https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html)
- Google : APIGee
- [Google API Endpoints](https://cloud.google.com/endpoints/)
- Microsoft : API Management

## Amazon API Gateway
[Amazon API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html#api-gateway-overview-aws-backbone)

Features:
- support stateful and stateless - APIs
- flexible authentication mechanisms
- developer portal for publishing - APIs
- Canary Release (for safely rolling - out API)
- Logging for API usage and changes - (AWS Cloudtrail)
- CloudWatch : Logging
- Cloud Formation : template driven - API creation.
- Firewall : protection against - common threats (Web Application Firewall)

Accessing:
- Management console
- SDK
- CLI


## Azura APIM
[Microsoft APIM - 2017[(https://docs.microsoft.com/en-us/azure/api-management/api-management-key-concepts)
Features:
- API keys
- DOS Attack Throttling, Advanced Security - Policies - JWT Token Validatoin

Benefits:

- Secure Mobile Infrastructure : gate access - with API keys, prevent DOS attackes, - advanced security with JWT token - validation.
- Partner Integration Ease: Fast partner - onboarding with developer portal, buidling - API facade to decouple internal - implementations that are not released.
- Internal API Program: Centralized location - for communication about API availability - and changes, gate access based on - organization accounts, foundation of - secure channel from API gateway to backend.

Components
- API Gateway: accepts API calls, routes to backend.  Verifies API keys, JWT toekns, certificates, and other credentials,  enforce policy (quotas, rate limits), transform API, cache resonses, logs for analytics (metadata)
- Admin Portal (Azure Portal)- define API schema, package APIs into products, policies (quotas, transformations, ..), analytics, manage users
- Developer Portal : read API documentation, try API through console, create account, get API keys, view usage analystics

See Microsoft's article on
- [The API Gateway Pattern versus the Direct client-to-microservices communication](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/architect-microservice-container-applications/direct-client-to-microservice-communication-versus-the-api-gateway-pattern).  
- [Azure Application Gateway - 2020](https://docs.microsoft.com/en-us/azure/application-gateway/overview) - Microsoft is not too clear in documenting the difference between their API-M and their Application Gateway [Microsoft Blog Q&A](https://docs.microsoft.com/en-us/answers/questions/35787/what-is-difference-between-api-gateway-provided-by.html)

## Google API Endpoints
[Google API Endpoints](https://cloud.google.com/endpoints/) features:
API Proxy; why use it:
- manage your APIs
- protect your APIs
- Fast
- World Class monitoring

Features:
- API keys
- user authenitcation
- Automated deployment
- Integration (Google [Cloud Endpoints Framework web framework for AppEngine](https://cloud.google.com/endpoints/docs/frameworks/about-cloud-endpoints-frameworks) or add OpenAPI specfication)
  - API management via [Google Estensible Service Proxy - ESP](https://cloud.google.com/endpoints/docs/frameworks/about-cloud-endpoints-frameworks#python).  Supports both [gRPC](https://grpc.io/) and [OpenAPI]() endpoints.
- Logging and monitoring
