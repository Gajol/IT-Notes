# API Gateway
A reverse proxy (e.g. [nginx](https://www.nginx.com/)) with features:
- load balancing
- health checks
- API versioning
- routing
- request authentication & authorization
- data transformation, anlaytics, logging
- SSL termination

Vendors Kong, Tyk, AWS API Gateway, Azura API Management, Google Cloud Endpoings

Benefits (from [Gateway vs Mesh vs MQ](https://arcentry.com/blog/api-gateway-vs-service-mesh-vs-message-queue/))
- powerful
- low complexity
- understood by IT professionals (web-services)
- layer of defense on public internet
- offload repetitive tasks (user authentication and data validation)

Cons:
- Centralized, horizontally scalable (but central registration for new API and configuration)
- single-team maintenance (centralized control)
- [see Service Mesh](# Service Mesh)

# Vendors

## NGINX "engine X"
[NGINX Products](https://www.nginx.com/products/nginx/)
- NGINX Plus : cloud-native, reverse proxy, load balance, API gateway.



## Microgateway

- IBM Strongloop: https://strongloop.com/projects/#mg.  [IBM OpenAPI-to-GraphQL](https://strongloop.com/projects/#mg)
- APIGee Microgateway: https://github.com/apigee-internal/microgateway [Official Docs Apigee Microgateway](https://docs.apigee.com/api-platform/microgateway/edge-microgateway-home)

## Umbrella / API Umbrella
[API Umbrella](https://apiumbrella.io/#features)
- API keys: Track API usage and control access to your APIs with API keys. API Umbrella provides an API key signup form that an be embedded on any website, or internal APIs you can leverage to create API keys programmatically.

- Rate Limiting: Control how many requests each user can make to your APIs to prevent abuse or define usage tiers. Flexible rate limits can be defined ranging from per-second to per-day limits. Different limits can be defined for different APIs or for specific users.

- Analytics: Understand how your API is being used with rich analytics about API requests. View high level summary data, or drill down into the specifics with a flexible analytics querying interface in the admin tool.

- Caching: API Umbrella integrates a standard HTTP caching layer in front of your APIs. Accelerating your APIs and offloading work from your API servers is as easy as setting standard Cache-Control headers.

- Unifying APIs: Provide a single, public entry point to all your APIs and microservices regardless of where your APIs might live behind the scenes or how many APIs you might have. API Umbrella can define how your public endpoints get routed to your API servers.

## Other features

- Consumer API Key : If you have multiple APIs, API Umbrella can simplify access for API consumers, with a single API key that can be used across different APIs. And by shifting common functionality, like API keys, rate limiting, and analytics outside of any individual API, API producers don't need to implement any of those details over and over again.

- Admin Web interface: An administrative web tool is available to manage all aspects of API Umbrella, including API routing configuration, user management, and viewing analytics.

- Admin REST APIs : programatically administer the system

- Multitenancy

## Netflix zuul
- [Netlflix Zuul Github](https://github.com/Netflix/zuul)
- [Netflix Zuul Medium](https://github.com/Netflix/zuul)
- [DZone Netflix Zuul - 2016](https://dzone.com/articles/spring-cloud-netflix-zuul-edge-serverapi-gatewayga)


# Microservice architecture

## Microservices benefits
Main benefits (rationale for microservices)
- Rapid Development:  Develop and deploy single services independently.  Development & operations focus on the service's repsonsiblity (not the entire systems or business application)
- Scalability: Using kubernetes each service can scale independently without impacting other services.

Other major benefits:
- Flexible: each service has flexibility (can use its own language, framework - polygot)
- Independent: services can have their own development cycle, delivery dates and priorities
- Full-Stack Teams: development of microservices suited for cross-functional teams
- Fault Isolation: improved fault isolation
- Stack Flexibility: eliminates long-term committment to a technology stack (debatable)

To use microservices effectively you must adopt and embrace DevOps:
- use Automation, that brings:
- reduce costs and effort
- brings operational efficiency

## Microservice Challenges:

There are challenges to using Microservices.   These can be overcome with experience.

- resliency : many instances of a given microservice (10's, 100's, 1000's) any of which might fail
- load balancing / auto-scaling : with many endpoints able to fulfil a request routing and scaling get more complicated ( effective routing and scaling can save costs in large deployments)
- service discovery : finding a service endpoint and establishing a communication channel gets more complicated with more endpoints
- tracing and monitoring : a single transaction might execute on many microservices.  Observing/tracing a transaction is more complicated.  When a service fails, identify the cause is difficult.
- versioning : updating an API while allowing older versions to be available
- inter-service communication : A microservice must use APIs to fetch data (versus simple service queries)
- testing microservice dependencies without a tool


Many of the above challenges relate to the distributed nature introduced by the use of microservices (many endpoints involved in a transaction, and many endpoints providing the service).  Microservices generally lead to more Ops (operations) overhead.   In the DevOps model this is sustainable as the same team providing development provides the operations (__DevOps__)

[BMC Microservices - Challenges to Avoid](https://www.bmc.com/blogs/microservices-challenges-when-to-avoid/)

Design
: Increased complexity with microservices.   Microservices create a distributed system, and the challenges of a distributed system must be understood and planned for.  Design considerations on the size of microservices, optimal boundaries, connection points, and a framework to integrate services.  Each microservice should define its resonsibilities.

Security
: Data in microservices is distributed.  It can be hard to maintain and comply with the CIA (confidentiality, integrity and availability) and __privacy__ of user data.  For example, respecting the authentication and authroisation model for a complex access model across all microservices can be difficult.   Designing, and configuring access controls and administering secured authentication to individual microservices is a technical challenge.  This also increases the attack surface for the people, processess and technology responsible for securing access.

Testing
: The standalone nature of microservices increases testing complexity.  One for testing a microservice without access to the other services (tooling requirement to test), and secondly for testing complex interactions between services (testing integration services, interdependencies, etc).

Increased Operational Compliexity
: Each microservice can decide to use and manage it (*not necessarily true*)
- traditional monitoring:  A request that traverses several micorservices can be a convulted/complex path.   Debugging issues without proper observability tools (and upfront design to provide observability) is a challenge.
- scalability: Successfully scaling microservices is a skill and a challenge
- optimizing and scaling require coordination: A sudden spike in usage of a business application may required coordinated scaling of multiple microservices.
- fault tolerance for all services: One microservice failure can impact an entire system.  Application avaibility can be reduced by poor fault-tolerance of underlying framework and microservices.

Communication
: The microservices must be able to communicate with each other (discover and communicate).  This adds latency and reduced speed/response to transactions on applications.
