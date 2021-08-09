
see ../API/ServiceMesh.md

# Istio Explained
[O'Reilly Istio Service Mesh Explained](https://learning.oreilly.com/library/view/istio-explained)
[Istio Explained - Github](https://github.com/istio-explained/)

Microservices: Microservices are an architecture and development approach that breaks down business functions into individually deployable and managed services. We view microservices as loosely coupled components of an application that communicate with each other using well-defined APIs. A key characteristic of microservices is that you should be able to update them independent of one another, which enables smaller and more frequent deployments.

Service Mesh: A service mesh is a programmable framework that allows you to observe, secure, and connect microservices. It doesn’t establish connectivity between microservices, but instead has policies and controls that are applied on top of an existing network to govern how microservices interact. Generally a service mesh is agnostic to the language of the application and can be applied to existing applications usually with little to no code changes.

Proxy Behavior:
- Traffic shaping ​with dynamic routing controls between services
- Resiliency support for service communication such as circuit breakers, timeouts, and retries
- Observability of traffic between services
- Tracing of communication flows
- Secure communication between services (services do not communicate directly)

# Service Mesh Options ( The Eco System )
[Istio](https://istio.io/):
- part of [CNCF](https://landscape.cncf.io/) un service mesh category
- cofounders: Google, IBM and Lyft
- contributors: VMware, Cisco, Huawei
- tech approach:  extend Kubernetes API and use the [Envoy proxy](https://envoyproxy.io/)
- based on: Istio itself builds upon many other open source projects such as Envoy, Kubernetes, Jaeger, and Prometheus
- other open-source projects supporting Istio:
  - [Knative](https://knative.dev/): provides tools and capabilities to build, deploy, and manage serverless workloads

[Consul Connect](https://oreil.ly/ae6Eq)
- by HashiCorp
- features: service discovery as a primary feature as well as other built-in features such as a key-value store, health checking, and service segmentation for secure TLS communication between services
- part of [CNCF](https://landscape.cncf.io/) un service mesh category, although has not contributed to CNFC
- tech approach: uses Envoy proxy as the sidecar proxy

[Linkerd](https://linkerd.io/)
- ultralight service message offering
- open source project
- CNCF *incubating* project
- capabilities: has key capabilities of a service mesh, including observability using Prometheus and Grafana, secure mTLS communication, and—recently added—support for service traffic shifting

[App Mesh](https://aws.amazon.com/app-mesh)
- AWS Service mesh with application-level networking support for compute services within AWS such as Amazon ECS, AWS Fargate, Amazon EKS, and Amazon EC2
- closed sourced managed control plane that is proprietary to AWS
- tech approach: Envoy proxy for the sidecar proxies within the mesh

[Kong](https://oreil.ly/xwokZ)
- open-source; majority of contributions by Kong
- extend's Kong's edge API management capabilities
- extensible

[Aspen Messh](https://aspenmesh.io/)
- supported distribution of the Istio project
- paid offering, parts hosted by Aspen Mesh

[Service Mesh Interface](https://smi-spec.io/)
- Microsoft, announced at KubeCon 2019
- backing partners: Linkerd, HashiCorp, Solo.io, and VMware
- not a service mesh offering, but attempting to be a common interface or abstraction for other service mesh implementations

# 2. Introducting Istio
## WHy Istio (according to Authors)
- cause we are the creators
- benefits:
  - Istio is a mature service mesh implementation
  - Istio allows you to break down the complexity of distributed cloud native deployments by taking complex functionality out of the application code and moving it into the network.
  - Istio is the most feature rich
  - Istio is built to serve the enterprise use cases most like those that we see in our day-to-day jobs.
  - Istio provides secure communication, monitoring, version-based load balancing
  - Istio works with cloud native applications because it requires little to no code changes with automatic sidecar proxy injection
  - Istio Control Plane - declarative API for defining your service configurations and policies

  Features to solve challenge of using cloud and microservices:
  - provides metrics and network tracing between services
  - provides metrics and network tracing of inbound/outbount communication with external clients and services
  - rule-based traffic routing and control.  Load balancing for HTTP, gRPC, WeBSocket and TCP traffic
  - automatic mTLS maanagement for secure TLS  service-to-service communication using identity-based authenication and authorization
  - service communication resilicienc: retries, circuit-breaking fail-over and fault-injection

  ## Istio Features
  - Observability: tracing, monitoring and logging
    - [Jaeger for trace flow](https://www.jaegertracing.io/)
    - [Kiali for traffic flows](https://github.com/kiali/kiali)
  - Traffic Management  
    - easy to configure rules
    - fine-grained control @ Application (Layer 7) and Network (Layer 4)
    - rules based on {source client id, client input type, % distribution, geography, ..}
    - deployment patterns {canaary, A/B testing, ...}
  - Security: (very difficult feature in distributed cloud application is to secure the communication between services, data encryption and authentication)
    - challenging since coding the logic each service is complicated.
    - Istio has a feature that establishes secure channel between services (managing service id, certificates and mTLS handshaking)
    - Istio uses first class identity such as a Kubernetes service account to determine the identity of a service
    - declarative API
    - selective permissive channels

  ## Istio Architecture
  - data plane & control plane
  - data plane is componsed of:
    - a Envoy sidecar proxy (running in same network space as each service)
    - a Mixer: extensible policy evaluation between services
  - control plane: responsible for API's used to configure the proxies and Mixer
    - Pilot - programs Envoy sidecars
    - Citadel - manage certificates and service identities
    - Mixer - enforces access control and usage politicies, collects telemetry data from sidecare proxies
    - Galley - manages configuration (validates, ingests, processes and distributes Istio configuration)

  ## Installation
  - installed on Kubernetes cluser.  See [Istio Platform setup](https://oreil.ly/3aKFi) for how to prepare Kubernetes platform first on Alibaba, Azure, Docker Desktop, Gogle Kubernetes Engine, Huawei Cloud, IBM Cloud, kind, Kops, Kubernetes Gardener, KubeSphere Container Platform, MicroK8s, [__Minikube__](https://minikube.sigs.k8s.io/docs/tutorials/multi_node/), OpenShift, Oracle Cloud Infrastructure.
  - Install Control Plane
    - install Istio CRD (custom resource definitions)


  # 3. Adding Services to the Mesh
