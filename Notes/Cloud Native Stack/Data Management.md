# Data Management in Kubernetes Age

Cassandra
Sam Chief Data Strategy - DataStax

[The New Stack](https://castbox.fm/episode/What-is-Data-Management-in-the-Kubernetes-Age--id4159091-id384730174?utm_source=website&utm_medium=dlink&utm_campaign=web_share&utm_content=What%20is%20Data%20Management%20in%20the%20Kubernetes%20Age%3F-CastBox_FM)

[Datastax NoSQL](https://www.datastax.com/)

Apache Cassandra  
DataStax

2000 - Scale-out networking.  Andy Bikelshiem - Addressable Network Space to talk to billions of devices

2010 - Docker standardize containers on Linux.  Kubernetes standardizing how to manage Docker cotaiers.  Linux.  Comput simplification.  Answers question of what it looks like when you build software - Docker is the standard artifact.   Kubernetes is the standard way to manager.  Stateless services.

2020 - Decade of Data.  Building on large billion element scaling systems.  Kubernetes and Cloud Native.  Ready to tackle staeful services management on Kubernetes.

CSI - Contain Storage interface
CNI - Container Network Interface

Kubernetes:  Google large scale.
Solomon Hikes - 2009 - Linux Containers (2007) - Google contributing C-groups to Linux kernel.  "Borg" internal system at Google.   Google open-source of "Borg" is Kubernetes [no parallel to storage that Borg had]


# Kubernetes Terms
- operator
- pod : re-bouncing pods
- cluster
- recipes
- automation  
- container start-up time (vs VM startup time)

# Kubernetes Challenges
- managed k8n service that you can trust (pay for it), or, it takes a lot of work
- need operator pattern for managing data stores on kubernetes.  Today are good at deploying cluster, scaling and recovering.  Cassandra - activity around next features - *backups automatived*, *metrics* built into the operator.
CoreOS created operator pattern: enablement (day 1), (day 2) will it stay up for days, months.  Backup, restore, components around databases (large scale, multi-tenant, )
- __Cassandra__:  Astra [DataStax Astra - Cassandra-based](https://auth.cloud.datastax.com/) - large scale cloud-based Cassandra on kubernetes. Ecosystem of projects, packaging into distribution __*K*assandra__ includes (Medusa, Reeper, Metrics collectors, signals raised to kubernetes and beyond, db is no longer a monolith).  Invert, cluser-management obvious, wait for kubernetes to pass you control, db-kernel features to scale database. [Apache Cassandra](https://cassandra.apache.org/)
  - [DataStax - What is Cassandra](https://www.datastax.com/cassandra)
  - [DataStax - Blog - Sam Ramji, chief strategy officer at Datastax](https://www.datastax.com/blog)

## gRPC

Distributed Systems Architecture: gateway's are helpful.  Envoy is a service-proxy for microservices.  Place to attached to service meshes (Kuma, Istio or anything following [SMI - service message interace](https://cloudblogs.microsoft.com/opensource/2019/05/21/service-mesh-interface-smi-release/), edit lavine @ solo)
- a gateway (service control plane, service mesh) connect in via a service-proxy (Envoy)
- think about data meshes
  - apple, netflix, ...
  - wrote one way, but address another
  - datastax (stargate): give me JSON document view, a REST view, a gRPC view, a graphQL view.  For wide???-scale a gRPC view  (personalities)
  - gRPC - load balancing - can replace data-plane component of service-mesh.
    - performance: speed
    - performance: handle high-volumes of data fast  (Cassandra works well)
    - stubs (no need for SDK at DB layer for each language). Harmony with gRPC and Cassandra.  Kafka, Relic DB [NRDB - Time series DB - Telemetry](https://newrelic.com/platform/telemetry-data-platform)

## Helm Charts - Kubernetes
Application awareness as defined by [Helm charts](https://helm.sh/docs/topics/charts/)
- Helm uses a packaging format called charts. A chart is a collection of files that describe a related set of Kubernetes resources. A single chart might be used to deploy something simple, like a memcached pod, or something complex, like a full web app stack with HTTP servers, databases, caches, and so on.

If you can't read the Helm chart, then you don't understand the exploded application topology, then you cannot understand what to backup (cardinality, when in a restore situation - application architecture awareness)

## Microservices 1.0
Problems arose due to team-go-wild:
   - data sprawl
   - service level objectives problems, uptime
   - need to work with platform engineers for scale and uptime



# Problem - Cloud Data Management with Kubernetes

How to manage data in cloud and kubernetes versus a traditional data centre.  More opportunities for automation.

- manage state in k8n way (otherwise, ) - otherwise segregating and piping state in.
  - cloud foundry servie broker api - open-source "Open Service Broker API" (cats not cattle)
  - don't have two worlds (service broker).  Have a data plane that is application aware.

## Data Management:
- DB, Redis Cache
- teraform, YAML, ...
- want all packaged up and operate in isolated way.
- developer - mulitiple datastores in each service.  Data store layer that must be managed.  Separation of concerns (a good developer is not an expert at everything).  Select, install, manage, deploy, operate data stores (SQL, NoSQL, time series, graph, ).
  - you start to build a data platform.  Google only 5% of develpers build stateful services.  You cannot roll-your-own data scaling, audit, scaling by school of *skin, knees and bruises* can put company at risk.  Separate compentency into a data platform team is a pattern widely uses.  
- backups: cattle, can't get too attached to data living in the same cluster.  Must backup in S3, for recovery, migrations.

# Distributed System - CAP  
[Wikipedia CAP Theorem](https://en.wikipedia.org/wiki/CAP_theorem)
C - Consistency
A - Availability
P - Partition Tolerance

Cassandra : invented 2008 (12 years ago) by Facebook to replace Outlook.  Facebook Inbox.  Problem with availability with Microsoft Outlook emails.  iPhone email (world standard - offline email client, tied to exchange which does caching).   Facebook, to compete with Outlook, needed hyper-availability.

Took:
- AWS Dynamo - build a coordination layer that looks like Dynamo
- Google Big Tables - write-privilege-system as quick as reads.
[] and __Created Cassandra__.  Consistency issues.   Tools in Cassandra for repair (anti-entropy for consistency and repair).  Process that runs every so often to check, audit and resolve-entropy.

Maching Learning (ML) a big part of distributed systems.
- volume of data to manage (training data, ...)
- V's - volume, velocity, varitey, ...

- MAP Reduce : worker nodes, reduce, ...
- Stream-based APIs inside gRPC - more efficient access to data at DB layer and processing.  Can you feed gRPC at rate the clients can consume (data stack, kubernetes pattern)
- Tensor Processing Unit (TPU).  All about ML.  Training time reduction by orders of magnitude.  Limiting factor can be data throughput.  6-10Gbps.
  - geospatial, multi-dimensional.  Train model fast enough.  Flow process.  Kube-flow (Tensor flow on kubernetes clusters).  CI/CD - how to iterate improvements on model.  How does systems pull on similar classes and speeds of data.  Try to harmonize operation/analytical systems (not a crazy data lake export).  Data engineers, MLops, DataOps - standarize on kubernetes, what is a container for data, and how to make it an order-of-magnitude simpler (speed & consistency)

# StarGate - DataStax just released
[Startgate](https://stargate.io/open-source) API data gateway to talk to any backend - Cassandra
- graphQL, JSON
- pattern at Netflix / Apple.
- range of application dev communities, different API styles to talk data through, how to get there (computer science - any problem can be solved by adding one layer of indirection - that's how virtualization works) - service-proxy, data-proxy.
- Stargate - proxy - modularly add new personalities/modalities - do a WASM/Rust module talk to datastore and how to render.  (gRPC support??)

"land and be useful, you don't want to launch. more important to land and be uefule."
"pattern of writing a microservice infront of cassandra so you can render the data that should be rendered automatically, doesn't seem like a great use of people's irreplaceable heart beats"


# Podcast: Running DB in Kubernetes
[Running DB in Kubernetes with Couchbase](https://castbox.fm/episode/Running-Databases-on-Kubernetes-id1245401-id379520605?country=ca)
