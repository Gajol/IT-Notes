

# API Guidance
API's should be lightweight.  If the API contains a significant amount of business logic, the API likely needs to be decomposed into smaller APIs (service normalization)

# Integration Services Layer

## Terminology
- Full Stack Teams : Team owns visualization code/software, integration/API software/code, the database code and the infrastructure code.
- Event Driven Architecture (EDA) : Systems are loosely coupled and communicate through the generation and consumption of events.  Streams (see Streams.md document)
- Message Oriented Middleware (MOM) : The services integration layer.  Choose a technology and ensure we have a team to fully support the technology (both reliablity/integrity and availability).  Choices include Apache ServiceMix, RabbitMQ, Nats.io, Kafka, etc.   


## Patterns
- BFF - Back-End for Front-End

# References
Conway's Law (1967): *Any organization that designs a system (defined broadly) will produce a design whose structure is a copy of the organization's communication structure.* [Conway's Law - Wikipedia](https://en.wikipedia.org/wiki/Conway's_law)

Jon Postel Law ([RFC 760](https://datatracker.ietf.org/doc/html/rfc791)): *an implementation should be conservative in its sending behavior, and liberal in its receiving behavior.*

GraphQL & REST :
