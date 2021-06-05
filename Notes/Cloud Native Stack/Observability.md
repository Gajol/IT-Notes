

# Podcast:
[The New Stack - Observability](https://castbox.fm/episode/What-Observability-Should-Do-for-Your-Organization-id4159091-id385544019?utm_source=website&utm_medium=dlink&utm_campaign=web_share&utm_content=What%20Observability%20Should%20Do%20for%20Your%20Organization-CastBox_FM)

- [CNCF Special Interest Group for Observability](https://github.com/cncf/tag-observability)

3 pillars of observability:
- metrics : emit signals (Google Site Reliability Engineering - SRE) - Logging does not solve reliability, rely on metrics. (start with metrics, then build up logging, tracing and profiling)
- flows
- Tracing

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
