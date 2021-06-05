
Observability

Business Process, and by inheritance/extrapolation/dependency/... the application spans two domains; high and low.   The connection between these two networks is a security-zone-transition (cross domain solution) that ensures sensitive information is not leaked to the low security zone.

[] picture business / application / technology layers

Problem:
How to observe transactions acorss this complexity?

Why observability (general)
- microservices and distributed architectures (high, low, cds, ...)
- separte codes bases (e.g, our high and low side code)

# 3 Pillars ++
pillars of observability: [these pillars must be challenged](https://www.infoq.com/news/2019/02/rethinking-observability/)
- metrics
- logs
- distributed tracing : Distributed tracing, also called distributed request tracing, is a method used to profile and monitor applications, especially those built using a microservices architecture. Distributed tracing helps pinpoint where failures occur and what causes poor performance.

monitoring vs observability: Briefly: monitoring is how you manage your *known-unknowns*, which involves checking values for predefined thresholds, creating actionable alerts and runbooks and so forth. Observability is how you handle *unknown-unknowns*, by instrumenting your code and capturing the right level of detail that lets you answer any question, understand any state your system has gotten itself into, without shipping new code to handle that state (since that would imply that you could have predicted it or understood it in advance, which would make it a known-unknown).
[Honeycomb - Building an Observability Tool](https://www.honeycomb.io/blog/so-you-want-to-build-an-observability-tool/)
- note Honeycomb uses a microservice DaemonSet [Sidecar vs DaemonSet](https://wecode.wepay.com/posts/scds-battle-of-containerization) sidecar pattern (adding a "blob" to a service-request, and allowing the service to populate with parameters.  An event might have 300-400 dimensions per event.  Then "honeycomb" can look for anomalies, etc...
- Observability requires high cardinality and high dimensionality
  - [DZone High Cardinality - TSDB](https://dzone.com/articles/what-is-high-cardinality).  Cardinality refers to the number of values in a set.  In the world of databases, cardinality refers to the number of unique values contained in a particular column, or field, of a database.



#### Containerized Patterns
Sidecars and DaemonSets [wecode - SideCars vs DaemonSet](https://wecode.wepay.com/posts/scds-battle-of-containerization)

# +++
It may not be as catchy as “three pillars”, but in order to claim your tool delivers observability, it should support/deliver the following: [Honeycomb - Building an Observability Tool](https://www.honeycomb.io/blog/so-you-want-to-build-an-observability-tool/)

1. Arbitrarily-wide structured raw events
1. Context persisted through the execution path
1. Without indexes or schemas
1. High-cardinality, high-dimensionality
1. Ordered dimensions for traceability
1. Client-side dynamic sampling
1. An exploratory visual interface that lets you slice and dice and combine dimensions
1. In close to real-time



# Steps to setting up Observability

 How to build an observable system?
