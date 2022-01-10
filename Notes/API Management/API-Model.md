

[Three Mental Models of APIs - Alex Moore - 2016](https://mooreniemi.github.io/3_models_of_apis/#/) - [Alex's Moores GitHub page](https://github.com/mooreniemi)

- Persistence Layer : REST, GraphQL, Graph APIs generally
- Namespace of Functions : RPC, gRPC
- State Machine: REST

What is best model?
What abstraction level should be exposed to clients / consumers for this function ?
Are there compete wants/needs from consumers/clients?

__Application__ Programming Interface : API likely has a bit of all three (3) models.
1. __Generic Data Exposure__: Think Clients likely want a generic data exposure like REST or GraphQL .
1. __Unsequenced Commands__: Clients need __RPC__.   (Clients choose presentation, but you implement - i.e,. you can't release as a local module) - ???
1. __Sequenced Workflows__ (i.e. Business Processes): REST with [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS)

[REST Maturity Model](http://amundsen.com/talks/2016-11-apistrat-wadm/2016-11-apistrat-wadm.pdf)
- fully mature REST respects hypermedia constraint
  - resource state (the server's state - client has no access to the resource state),
  - application state (the client's state - the server has no access to the application state),
  - and the implicit program state based on these two states (client, server)
  - state machine (state and event) versus entity relations (one to one, zero to one, ...) : think more in terms of application state (client side view)

most popular hypermedia JSON type right now is probably JSON:API
- what about Siren  (vnd.siren+json) - https://github.com/kevinswiber/siren#example
- Hypermedia means adding controls to a representation of data

## Affordances
Imagine a slide with a picture of a "Chair" (easy to understand the affordances) and a "Tree" (hard to understand the affordances).  
- So you can take a motto from this that data with affordances is better than data without affordances. Fully "mature" REST, with hypermedia, is just about providing responses with affordances that help a user understand where they are in the application, and what they can do. If you're a client developer, I want you to be asking me for affordances with data. If you're a server developer, I want you to be providing affordances with data. Why? Because that way we'll have a shared understanding of what the semantics of the application are in total, in the space between the client and server where our real program exists a little amorphously.

## References
- RESTful Web APIs by Richardson and Amundsen.
- APIStrat Darrel Miller *API specification is in conflict with hypermedia.*  (Working on OpenAPI specification)
  - hypermedia gives REST the constraint that allows building state machines
- [The Ecological Approach to Visual Perception - James J. Gibson](http://cs.brown.edu/courses/cs137/readings/Gibson-AFF.pdf): *The child begins, no doubt, by perceiving the affordances of things for her, for her own personal behavior. She walks and sits and grasps relative to her own legs and body and hands. But she must learn to perceive the affordances of things for other observers as well as for herself.*

## Questions:
  How does this adapt (fit with) CNA and microservices and the desire to be stateless??
