

# Containers

Docker : Container
Kubernetes : Container Orchestration
[Rancher](https://rancher.com/) : Kubernetes management


the official distribution file keycloak-<VERSION>.[zip|tar.gz] within a local runtime
the official docker image within a docker host runtime
the official docker image within OpenShift runtime


Runtimes :
OpenShift
Kubernetes
Docker EE
https://containerjournal.com/topics/container-ecosystems/openshift-kubernetes-and-docker-a-quick-comparison/

# Terms:

Kubernetes:
- pod
- nodes : pods are assigned to nodes
- container resource requests
- container scheduling requests


# Container Patterns
[RedHat Container Patterns](https://developers.redhat.com/blog/2020/05/11/top-10-must-know-kubernetes-design-patterns)

Types of patterns are groupd by Functional, Structural, Behavioural and High-Level.

## Functional Patterns
|Name|Description|
|--|--|
|Health Probe pattern|Health Probe dictates that every container should implement specific APIs to help the platform observe and manage the application in the healthiest way possible. To be fully automatable, a cloud-native application must be highly observable by allowing its state to be inferred so that Kubernetes can detect whether the application is up and ready to serve requests. These observations influence the life-cycle management of Pods and the way traffic is routed to the application.|
|Predictable Demands|Predictable Demands explains why every container should declare its resource profile and stay confined to the indicated resource requirements. The foundation of successful application deployment, management, and coexistence on a shared cloud environment is dependent on identifying and declaring the application's resource requirements and runtime dependencies. This pattern describes how you should declare application requirements, whether they are hard runtime dependencies or resource requirements. Declaring your requirements is essential for Kubernetes to find the right place for your application within the cluster.|
|Automated Placement|Automated Placement explains how to influence workload distribution in a multi-node cluster. Placement is the core function of the Kubernetes scheduler for assigning new Pods to nodes satisfying container resource requests and honoring scheduling policies. This pattern describes the principles of Kubernetes’ scheduling algorithm and the way to influence the placement decisions from the outside.|

## Structural Patterns
|Name|Description|
|--|--|
|Init Container pattern|Init Container introduces a separate life cycle for initialization-related tasks and the main application containers. Init Containers enable separation of concerns by providing a separate life cycle for initialization-related tasks distinct from the main application containers. This pattern introduces a fundamental Kubernetes concept that is used in many other patterns when initialization logic is required.|
|Sidecar patterns|Sidecar describes how to extend and enhance the functionality of a pre-existing container without changing it. This pattern is one of the fundamental container patterns that allows single-purpose containers to cooperate closely together.|

## Behavioural  Patterns
|Name|Description|
|--|--|
|Batch Job patterns|Batch Job describes how to run an isolated, atomic unit of work until completion. This pattern is suited for managing isolated atomic units of work in a distributed environment.|
|Stateful Service patterns|Stateful Service describes how to create and manage distributed stateful applications with Kubernetes. Such applications require features such as persistent identity, networking, storage, and ordinality. The StatefulSet primitive provides these building blocks with strong guarantees ideal for the management of stateful applications.|
|Service Discovery pattern|Service Discovery explains how clients can access and discover the instances that are providing application services. For this purpose, Kubernetes provides multiple mechanisms, depending on whether the service consumers and producers are located on or off the cluster.|

## Behavioural  Patterns
|Name|Description|
|--|--|
|Controller pattern|Controller is a pattern that actively monitors and maintains a set of Kubernetes resources in a desired state. The heart of Kubernetes itself consists of a fleet of controllers that regularly watch and reconcile the current state of applications with the declared target state. This pattern describes how to leverage this core concept for extending the platform for our own applications.|
|Operator pattern|An Operator is a Controller that uses a CustomResourceDefinitions to encapsulate operational knowledge for a specific application in an algorithmic and automated form. The Operator pattern allows us to extend the Controller pattern for more flexibility and greater expressiveness. There are an increasing number of Operators for Kubernetes, and this pattern is turning into the major form of operating complex distributed systems.|


# Kubernetes
- [Docker Runtime](https://kubernetes.io/blog/2020/12/02/dont-panic-kubernetes-and-docker/)
