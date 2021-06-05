
- []# Lyfts Dashboard in 60 seconds](https://blog.envoyproxy.io/lyfts-envoy-dashboards-5c91738816b1)
- In order to provide some context into what is being shared, I will very - briefly describe Lyft’s observability and dashboard stack.
- All Envoys write stats in statsd format.
- We run statsrelay on each host.
- All of our stats are funneled to a pre-aggregation pipeline.
- The pre-aggregation pipeline ultimately writes stats out to Wavefront.
- Developers at Lyft look at dashboards in Grafana (we have a Wavefront plugin - that pulls TSD).
- All dashboards at Lyft are created from SaltStack code (the Grafana SaltStack - module is an approximation of what we use internally).
- We pre-generate dashboards for every service and also allow developers to add - custom rows for business logic, etc.

## statsd Format
used by Lyft Envoy (to write stats for dashboards) [Envoy Dashboards](https://blog.envoyproxy.io/lyfts-envoy-dashboards-5c91738816b1)
