

# Podcast:
[The New Stack - Observability](https://castbox.fm/episode/What-Observability-Should-Do-for-Your-Organization-id4159091-id385544019?utm_source=website&utm_medium=dlink&utm_campaign=web_share&utm_content=What%20Observability%20Should%20Do%20for%20Your%20Organization-CastBox_FM)

- [CNCF Special Interest Group for Observability](https://github.com/cncf/tag-observability)

# Observability

3 pillars of observability:
- metrics : A value (measurement) measured over intervals of time that helps identify the status of the system.  Metrics better suited to report the overall health of a system
- event logs :
- Tracing : A trace is a representation of a series of causally related distributed events that encode the end-to-end request flow through a distributed system.  Traces are application teams (DevOps) to measure and identify the least performant calls in the code, or during troubleshooting to identify a dependency that’s behaving in an unusual fashion.
  - [Istio Distributed Tracing](https://istio.io/latest/docs/tasks/observability/distributed-tracing/): *Distributed tracing enables users to track a request through mesh that is distributed across multiple services. This allows a deeper understanding about request latency, serialization and parallelism via visualization.*





Other operational data:
- Alerts:  Alerts are events (changes in system state).  Typically an alert needs to actioned (either programmatically or manually).  Alerts maybe sent to a central system for monitoring like a Network Operations Centre (NOC).  Examples include SNMP trap, resource availability (network, storage, compute), ... . Datadog describes alerting as; *Monitoring all of your infrastructure in one place wouldn’t be complete without the ability to know when critical changes are occurring. Datadog gives you the ability to create monitors that actively check metrics, integration availability, network endpoints, and more.* - [Dataog - Alerts](https://docs.datadoghq.com/monitors/)

## Futher Reading on Observability
- [Google Site Reliability Engineering - SRE](https://sre.google/) - Logging does not solve reliability, rely on metrics. (start with metrics, then build up logging, tracing and profiling)]
- [Microsoft Observability Patters](https://docs.microsoft.com/en-us/dotnet/architecture/cloud-native/observability-patterns): Cloud Native Applications require (1) Centralized Logs with Correlation IDs, (2) Monitoring tools to collect and query information on applications health (microservice level) (3) Alerts and reducing unwarranted alerts.
- [Distributed Systems Observabilty](https://learning.oreilly.com/library/view/distributed-systems-observability/9781492033431)

CNCF TAG - Technical Advisory Group

- microservices in cloud : more observability
- legacy system on-premise : less observability

Network, Application, Database, ...: the spec which makes your service:  Complete overview of your service (latency and drill-down to compute-stack)

Observability Platform

Cloud Native : large cloud platforms are as big as the internet 20-years ago (similar problems to solve which were solved)

## metrics
[Freecodecamp Metrics](https://www.freecodecamp.org/news/microservice-observability-metrics/)

Examples:  (metrics are a number)
- availability
- health - periodic pings
- request rate
- saturation - queue depth, available memory, ..
- utilization - cpu load
- error rate: rate of errors on system
- latecny : response time of system

- [Open Metrics - netrics specific extending Prometheous](https://github.com/OpenObservability/OpenMetrics)
- [Prometheous Exposition Formats](https://prometheus.io/docs/instrumenting/exposition_formats/)
