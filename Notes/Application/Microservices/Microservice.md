

Are microservices intended to be stateless and dumb to improve independency and scalability?   What else does it improve?

Is functional programming "stateless and dumb" like Microservices (assuming microservices are stateless and dumb)


# History

Microservices based on Containers:
- new functionality added to a microservice by replacing them (versus in SOA/monolith patching files)
- each microservices exposes an API that enables developers to programmatically connect microservices together to construct an application
- possible benefits:
  - simplify ongoing maintenance (each microservice is a smaller codebase making development easier, roles clearly defined and technology-flexibility for different architect components addressed by unique microservices) - [ref IBM Why use Microservices](https://developer.ibm.com/articles/why-should-we-use-microservices-and-containers/)
  - enhance overall application security
- challenge
  - building and maintaining a series of microservices based on containers
  - orchestrating containers running in distributed computing environments (many technical options)



  Video - Path to Microservices 2020-09
  https://www.gartner.com/webinar/virtualevent/3989703?ref=gfeed
