
## Common Patterns in Distributed Computing
[Netflix Zuul - Spring Cloud](https://spring.io/projects/spring-cloud):provides tootls for developers to quickly build common patterns in distributed systems:
- configuration management
- service discovery
- circuit breakers
- intelligent routing
- micro-proxy
- control bus
- one-time tokens
- global locks
- leadership election (CAP Theorem???)
- distributed sessions
- cluster state

boiler plate patterns : by coorindating distributed systems you will get boiler plate patterns.   Spring Cloud developers can stand-up services and applications using these patterns.  Supported on any environment:
- develpoer laptor
- bare meta data centres
- managed platforms such as Cloud Foundry



## 8 Fallacies of Distributed systems
[Wikipedia - Fallacies of Distributed Computing - Deutsch and Gosling](https://en.wikipedia.org/wiki/Fallacies_of_distributed_computing)
[Simple Oriented Architecture - 8 Fallacies](https://www.simpleorientedarchitecture.com/8-fallacies-of-distributed-systems/)
1. The network is reliable
1. Latency is zero
1. Bandwidth is infinite
1. The network is secure
1. Topology doesn’t change
1. There is one administrator
1. Transport cost is zero
1. The network is homogeneous

- The network is reliable: Software applications are written with little error-handling on networking errors. During a network outage, such applications may stall or infinitely wait for an answer packet, permanently consuming memory or other resources. When the failed network becomes available, those applications may also fail to retry any stalled operations or require a (manual) restart.

- Latency is zero: Ignorance of network latency, and of the packet loss it can cause, induces application- and transport-layer developers to allow unbounded traffic, greatly increasing dropped packets and wasting bandwidth.

- Bandwidth is infinite: Ignorance of bandwidth limits on the part of traffic senders can result in bottlenecks.

- The network is secure: Complacency regarding network security results in being blindsided by malicious users and programs that continually adapt to security measures.[2]

- Topology doesn’t change: Changes in network topology can have effects on both bandwidth and latency issues, and therefore can have similar problems.

- There is one administrator: Multiple administrators, as with subnets for rival companies, may institute conflicting policies of which senders of network traffic must be aware in order to complete their desired paths.

- Transport cost is zero: The "hidden" costs of building and maintaining a network or subnet are non-negligible and must consequently be noted in budgets to avoid vast shortfalls.

- The network is homogeneous: If a system assumes a homogeneous network, then it can lead to the same problems that result from the first three fallacies.
