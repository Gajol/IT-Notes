

# Problem:

# Register FN

## Source / Publisher
1. C working on an objected owned by P
1. realizes P is missing an attribute
1. calls a Service-E to get the attribute
1. is now responsible for updating P with the attribute

## Properties of pattern
1. Unordered:  The order of updating P with the attribute is not relevant.
1. Time Insensitive / Eventual Consistency:  The time before the P-app is updated is not critical (greater than 1 hour is acceptable)
1. Low Volume:  Event happens as a result of human action (drag-and-dropping object from P to C where the object is lacking the attribute.  Estimate 10/day?  For sure it is not
   100's/second.

# Design Principles
Architecture principles for API's / integrations:
1. loose coupling
1. high cohesion [Cohesion - Wikipedia](https://en.wikipedia.org/wiki/Cohesion_(computer_science))
1. single-responsibility

Obvious ones:
1. use open standards
1. use open source

## Tech Problems
1. Lacking Middleware: We don't have any.  Apache ServiceMix (unsupported, removing)

## Service Design
1. A Java Spring Boot service on a VM.
  - HA by VM two-servers and cross-fingers.

# Solution Options / Patterns

1. Any of the existing "applications" involved in the process could do this.:
  1. IM Ledger system
  1. Create FN service
  1. C-app
  1. P-app

1. Which team should do it?
  - C team : "I do compliance"
  - E team : "I do corporate apps and manage ECM / IM applications"
  - O team : "I provide data to an analytics platform"
  - DS team : "I provide development services and own integration services"
  - V team : "I visualize data"




- solve any software problem by adding a layer of abstraction

|Option|Pros|Cons|
|--|--|--|
|REST point-to-point|quick & dirty|tightly coupled, source/producer must support messaging queueing features - store and forward, etc|
|Message Processing|Robust, survives failures, reasonable decoupling|Notification is to a single endpoint. [ref Dzone](https://dzone.com/articles/best-practices-for-event-driven-microservice-archi)|
|Stream Processing|Flexible consumer model. Decoupled systems.|Too complicated for this need.  But what would this based *stream processing* middleware be a foundation for our EA-roadmap (microservices, etc)?|
