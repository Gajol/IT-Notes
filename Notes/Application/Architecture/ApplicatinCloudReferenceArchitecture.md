
- [ ] Cloud Native Application
- [ ] CNCF
- [ ] [Google Cloud Application Development](https://cloud.google.com/blog/products/application-development/13-popular-application-architectures-for-google-cloud)
- [ ] IOD Impacts : CNA impacts (monitoring, etc) + list from Tracy



# History
Nature of software development is changing:
- Waterfall : deliver software like other technologies (civil, hardware)
- Agile : smaller changes, fail-fast
- DevOps : automation
- Cloud Native : dynamic environments


# [GitLab - Commit at KubeCon DevOps 2021 - The Next Iteration of DevOps](https://www.youtube.com/watch?v=c_Sd2mY2_kQ&list=PLFGfElNsQthbbMijH56GtkIOpb3QCYibM)
User application is always on, and can be anywhere (mobile, IoT, ...).

DevOps : developers have more tools to work with per project
- source-code,
- CI,
- this tool, this tool, : grows and grows with complexity
modern microservices architectures : increases the number of projects : exponential leap in complexity.  
- Proliferation of projects - each DevOps tools must interface with each project.  Interface between each tool and each service adds complexity.  [GitLab - Commit at KubeCon DevOps 2021 - The Next Iteration of DevOps](https://www.youtube.com/watch?v=c_Sd2mY2_kQ&list=PLFGfElNsQthbbMijH56GtkIOpb3QCYibM)
- becomes unmanageable.  DevOps starts buidling silos (against its orginal goal)

Four (4) Phases of DevOps
1. Disparate Set of Tools: Bring Your Own DevOps : Not a lot of cross-team communication.  Meeting localized need.
1. Standarized Toolchain: Best in class DevOps. Tools aren't talking to each other, so you are still siloed, and not really doing DevOps (or immature version of DevOps)
1. Custom Integration: DIY DevOps.  Unified system that works together, visibility, things are working cohesively.  Hard to see across DevOps, audits across different tools, data of tools not normalized.
1. DevOps Platform: Single Application.  Plan, Create, Verify, Package, Secure, Rlease, Configure, Monitor, Portect, Manage in a single application.    Supported by Gartner, "By 2023, organizations will have switched from multiple point solutions to DevOps value stream delivery platforms to streamline application delivery" - [Gartner Market Guide for DevOps Value Stream Delivery Platform - 2021 - G00736295](https://www.gartner.com/document/4007023).  The need to consolidate tooling, and move off of a toolchain and onto a platform.

GitLab - all-in-one DevOps Platform
- starting, planning,
- source-code management
- ci/cd
- security - shifted-left, forethought not an afterthought, - entire supply chain of software
- monitor software

GitLab partners with services to complete DevOps journey:
- Cloud, On-Premise, K8s, Hybrid: AWS, Digital Ocean, Azure, Oracle, IBM, vmWare, RedHat, ..., Rancher, Hashicorp, Docker,
- Integration Partners : Spring, HasiCorp, servicenow, ...
- Global Services : Rackspace Sentify, ...

Start Where you need to: Stages:
1. Create
1. Verify
1. Package
1. Secure
1. Release
1. ...

# CNA

## Google CNA 5 Principles
[Google CNA 5 Principles](https://cloud.google.com/blog/products/application-development/5-principles-for-cloud-native-architecture-what-it-is-and-how-to-master-it)
1. Design for Automation
1. Be Smart with State
1. Favor Managed Services
1. Practise Defense in Depth
1. Always be Architecting

CNA : A well-architected cloud native system, on the other hand, should be largely self-healing, cost efficient, and easily updated and maintained through Continuous Integration/Continuous Delivery (CI/CD).

The principle of architecting for the cloud, a.k.a. cloud-native architecture, focuses on how to optimize system architectures for the unique capabilities of the cloud.

### Design for Automation
Automate infrastructure and components.

|Automation Area|Google Components|Microsoft Azure, or other productive|
|--|--|--|
|Infrastructure|Automate creation and updates to infrastructure|[Terraform](https://www.terraform.io/docs/providers/google/index.html), [Google Cloud Deployment Manager](https://cloud.google.com/solutions/infrastructure-as-code/)|[Azure Blueprints](https://docs.microsoft.com/en-us/azure/governance/blueprints/)|
|CI/CD|Automate the build, testing and deployment of packages that make up the system.  Automate deployment and automate other processes like [canary testing and rollback](https://cloud.google.com/solutions/automated-canary-analysis-kubernetes-engine-spinnaker)|[Google Cloud Build]()|Jenkins, Spinnaker.||
|Scale up, Scale down|Automate scaling of system based on load, scale to zero.  Planet Scale is scaling with zero operational (people) impact|||
|Monitoring and Automated Recovery|Monitor & log at the outset|[Monitoring Distributed Systems](https://landing.google.com/sre/sre-book/chapters/monitoring-distributed-systems/).  [Attach automation to monitoring - scaling, etc](https://landing.google.com/sre/sre-book/chapters/eliminating-toil/)||

### Be Smart with State
Distributed architects make storing state a complex (difficult, error prone) activity.
- user data : items in cart, employee number, ..
- system state : instances of job, versions of code, ...

Stateless components are easier to:
1. scale: Scale up with more instances, scale down by terminate instance once task is complete
1. repair: terminate/restart to repair to known "state"
1. roll-back: bad deployments can be rolled-back by terminate gracefully and spinup a replacement
1. load-balancing: any instance can handle any request so there is not need to manage sessions (e.g., to handle all requests from a specific user)

### Favor Managed Services
Using a managed services avoids the need to provide the back-end (potentially saving money and people/skillsets)
Managed services include data warehouses ([Google BigQuery](https://cloud.google.com/bigquery/), [Azure Synapse Analytics - DW + Big Data Analytics](https://docs.microsoft.com/en-us/azure/synapse-analytics/)
- managed open-source : [Google Cloud SQL - MySQL](https://cloud.google.com/sql/docs/mysql/features) and open-source compatible interfaces : [Google Cloud BigTable](https://cloud.google.com/bigtable/docs/hbase-bigtable)
- managed services with high operational savings

### Practice Defense in Depth
Traditional (non CNA) focused on perimeter security (with trusted components on the inside).  This would often see unencrypted communication and in-the-open username/password credentials.

CNA are internet facing services.   The architecture must address external attacks.   [Google Defense-in-Depth](https://cloud.google.com/security/overview/whitepaper#technology_with_security_at_its_core).    Minimize trust (*zero trust*) between componetns.   Adopt the "no inside, no outside" mindset [ Google's zero-trust model - BeyondCorp](https://cloud.google.com/security/overview/whitepaper#technology_with_security_at_its_core).
 - Single Sign-On
 - Access Control Policies
 - Access Proxy
 - User-and-Device based authentication and authorization
- Access to services is based on contextual factors from the user and their device
- access to services must be authenticated, authorized and encrypted.

### Always be Architecting
Seek to refine, simplify and improve the architecture of the system (as organization needs change, IT landscape changes, cloud provide capabilities change). *the only constant is change*

## Migrating Monolithic to Cloud (GCP)
[Migrating Monolithic Application to Micoservices on GKE - Google Kubernetes Engine](https://cloud.google.com/architecture/migrating-a-monolithic-app-to-microservices-gke).
See [Microservices article by James Lewise, Martin Fowler, and Sam Newman](https://martinfowler.com/articles/microservices.html)
Why:
1. microservices can be independently tested and deployed
1. microservices can use language and framework of choice
1. microservices can be managed by different teams
1. moving to microservices loosens dependencies between teams.  teams care about APIs of the microservices they depend on
1. easier to design for the future.  Clear service boundaries, easier to determine what to do if service is down.

Why Keep a Monolith:
1. Microservices have a higher overall complexity.  A network of different services interacting with each other.
1. Potential security concern of the communication over a network (API).   [Istio](https://cloud.google.com/istio), a service-mesh, automatically encrypts traffic between microservices.
1. Performance:  Hard to achieve the same level of performance due to latencies between services.

In the target cloud architecture:
- run microservices in Google KBE (k8n engine).  
- each microservice runs in its own container (containers are a way of packaging and running code)
- microservices can call backend services through a secure network (VPN) (e.g., using Google Cloud Interconnect / CloudVPN)
- microservices can interface with Google Cloud products (storage, SQL, ...), pub/sub [Google Pub/Sub](https://cloud.google.com/pubsub)
- application is exposed to internet via:
  - Google Load Balancer for assets (images, pages, ...) and
  - [Apigee (for public APIs)](https://apigee.com/api-management/)
  - deciding how to handle communication between microservices and legacy on-premise systems.  Two main solutions:
    - co-exist: api-communication based on a private connection
    - API management:  use Apigee (or Microsoft API-M) as a proxy between the two environments.   Allows control of what portions of legacy system are exposed.

### Best Practices for Designing Microservices
- __Bounded-Context__: Follow a design pattern that allows for determing the context and boundary for each microservice.  Prevents unnecessary fragmentation of microservices.  Example design pattern is [Domain Drive Design - DDD](https://wikipedia.org/wiki/Domain-driven_design),  [Microsoft - Identifying Microservice Boundaries](https://docs.microsoft.com/en-us/azure/architecture/microservices/model/microservice-boundaries) and [Microsoft Design a Microservice Architecture](https://docs.microsoft.com/en-us/azure/architecture/microservices/design/)
- __API Contracts__:  Each microservice is invoked by a set of interfaces.  Each interface should be clearly defined by a contract using an API definition language.   Use the [OpenAPI Initiative specfication](https://www.openapis.org/) - previously Swagger. [RAML](https://raml.org/) is another standard.  
- __Managing Changes__ / Breaking API Contracts:  APIs __must__ be versioned to minimize effort in refactoring efforts when an API contract must be broken.  The alternative is to introduce a new microservice which can become operational difficult to manage.  Use semantic versioning x.y.z; where changes in z a.   Adopt [Kubernetes Versioning Scheme](https://kubernetes.io/docs/concepts/overview/kubernetes-api/#api-versioning).   Understand if you are using Global Versioning (in the API level - /api/v1/entities) or Resource Versioning (in an HTTP request header - Accept: application/tld.domain.entities.v2+json).


# Refernces



## [Securing Kubernetes Workloads @ Financial Acme - The Kubernets Security and Observability Summit 2021](https://www.tigera.io/lp/kubernetes-security-and-observability-summit-2021/securing-kubernetes-workloads-at-discover-financial-services/)
Starting down the path to securing your workloads running on Kubernetes in the cloud can be a daunting task. There is no shortage of vendors with great tools in the cloud security space. There are a multitude of domains that must be accounted for, along with internal challenges in transitioning an organization into new ways of thinking. - Keith Nielsen, Director Cloud Architecture, Discover Financial Services (University of Manitoba Graduate).  Tiger.io.

Notes:
role : director of cloud arch.  Role (Discover 3 LOBs : Credit Card, Banking: Personal Lending (Studend and Personal), Payment Networks around globe (regulations))
  - ensure we have a cloud strategy that articulates our position on public cloud adoption (vs private cloud) across all public cloud provides
  - governance and oversight for teams wishing to leverage the cloud : well architected and aligns to strategy across all cloud providers ultimately allowing us to deliver business value .
  - 5-years cloud, kubernetes (prior distributed platforms)
  - journey is most exciting and challenging
  - Northstar "Vision"
   - A hybrid cloud, fit for purpose, that delivers a flexible ecosystem allowing for rapid innovation, provides consistent (across cloud providers), common patterns for security, networking, and physical/virtual resources across cloud providers, unencumbered by legacy processes.
     - cloud footprint: 7-9 clouds in USA, Turkey, Tokyo, Mumbai
     - accommodate increasing regulations : country data sovereignty
     - edge scenarios : major cloud providers do not have a POP (co-locations and edge-computing solutions)
     - data centre to cloud : do not want dev-experience to be different across providers (data centre and cloud)
       - we can't scale organizzation skillsets to accommodate all cloud providers (nuances)
       - DC-in-a-box : with k8s create a shim over public cloud providers
       - consistent for interacting with a public cloud

Major domains on delivering shim over public cloud providers
monitoring : health an performance, metrics, logs/issues, network policy impacts, security/compliance issues, application costs
- what is app runtime
- what type of storage do you need
- what services do you want
- what network connectivity do you need
- what cloud do you want to deploy to
- what are auto-scale conditions

Cloud-Native or abstraction over cloud-providers?   Question to answer.
- not wanting disparate solutions and known CSPs are not in every location .
- early phases on a single cloud provider with mutually exclusive clusters (no federation to other clusters).  Started with managed cloud-native services.  With scale and demand we could not meet that with services running on kubernetes.  Services included data services, ML/AI platforms (were immature to run in k8s)
- maturing: (now)
  - K8s clusters in multiple cloud providers
  - Kubernetes hosted services
  - federated services via a mesh (federated communication between k8 clusters across multiple cloud platforms): discovery and awareness of applications in any region of the world on any cloud provider on any cluster.   Look it up, fail-over seamlessly, secure it.  Service Mesh.
  - App teams don't have to understand where they are running or securing. (workload and storage movement)
  - measured approach to creating/running k8-hosted services:  decouples from cloud service provider (applications are not tied to a CSP).  Lower stickiness to a CSP.
- cloud governance:  
  - 75% work is how to secure workloads and data (data is our crown jewel)
  - Keith is not in cyber security organization (but as cloud director rolling out capabilities must address security)
  - Security Domains
    - Infrastructure : how provisioned across public and private clouds
    - Data : protect data, compromise is intolerable
    - Services : microservices, applications (discover, secure distributed services in a global footprint)
    - Workloads :
    - Users :

## Infrastructure Management
Design elements (principles/directives) :
      - everything is code, automation (no snowflakes) : governance cannot deploy to production without using a pipeline
      - single purpose, idempotent operation systems, no patching, no human hands
      - compliance as code, no misconfigurations of cloud resources
      - standardized delivery mechanisms : terraform, jenkins (but not multiple paths to delivery)
Relevant technologies
      - kubernetes cluster configuration management (CCM) : policy driven cluster lifecycle management.  Not dependent on a person making a decision.  Well-defined enforced policies.
      - Kubernetes & Cloud Native services delivered via standardized operators
      - Continuous Compliance Engines integrated into pipelines, operators
      - kubernetes worker node taints, strict isolation policies: manage infrastructure, very specific infrastructure for specific workloads

## Data Managmenent
      - most critical part of business.
Design elements:
        - all sensitive data (PII, PCI) data at rest must have two forms of obfuscation.  Public Cloud provide KMS (some allow BYO keys) plus another form (tokenization or encryption)
        - all data in transit must be secured via a transport level security.  TLS regardless of the protocol.
        - all data transfers between clouds must traverse a clearinghouse. The clearinghouse inspects and secures the data through common approved patterns.  Public Cloud is more dangerous than Private Cloud.  Understanding what data is moving and where it is going is imperative to controlling and securing the data.   Clearinghouse interrogates data through technologies and potentially tokenizing / encrypting.
        - any in clear-processing must be done in memory with physical and logical isolation (see workload isolation)
Relevant technologies:
        - data loss prevention tools for detection & scrubbing : ensures data is not residing unprotected
        - tokenization and encryption tools
        - secure file transfer platform with full audit capabilities : aware of when data (people) are moving data to/from cloud
        - secure, network isolated landing zones via declarative network policy, taints & tolerations

## Service Management
Design elements:
      - multiple controls at trust boundaries : cluster, cloud level.  one layer of network control is not sufficient.
      - service registration with service producers and consumer relationships : who is calling whom and the relationships.
      - service trust via tokens/certificates issued by trusted parties : PKI, token issuance
      - service isolation for APIs handling sensitive information : secure enclaves
Relevant technologies:
      - Layer 3 Host & Pod network ingress/egress policies with Layer 7 API AuthN/Z via Mesh (authentication and contract between services )
      - __API Governance Portal__ with service registration, relationship identification & token issuance to each service (strict registration process so services are not thrown out into the world without governance)
      - Mesh for issuance of certificates from trusted PKI provider : centralized governance is a must on top of services mesh.  Mesh trust and routability.  Governance and registration is critical on top of the mesh.

## Workload Management:
Must know who is trying to deploy and characteristics of the workload.

Design elements:
      - Mutation of workloads with metadata based on application portfolios
      - physical & logical isolation of workloads based on application characteristics (e.g., sensitive data, PCI, Builds, R&D): based on this place into different segments, nodes, ...
      - Rejection of workloads that don't align to application portfolio metadata or label taxonomy
Relevant Technologies:
      - APM for application metadata : central trust authority
      - K8s Mutating & Validating Admission Controllers to apply application metadata : teams do not apply their own metadata.  This is centralized (mutated and labelled) from what is provided.
      - K8s Taints & Tolerations for workload isolation based on security & compliance requirements : Certain nodes will repel certain workloads.  
      - Declarative K8s network  policies for micro-segmentation : Cyber micro-segmentation (service a can only talk to d, e, f through declaration) - visibility tools that support micro segmentation and network policy are critical to our security to understanding the network flows within and outside our environments.

## User Management
Design Elements:     
- __MFA__: Access to environments must be protected with multiple authentication factors
- __Least Privilege__: K8s platform administrators should not have access to application services (??>least privileges / two-person rule)
- __PAM__: All administrative activities only through call after access with short lived tokens
- __Enclaves__: Highly sensitive workloads must run in restricted environments with __no__ human access.  Locked-down.
Relevant Technologies:  
- __MFA__: MFA providers
- __Secrets__: Externalization of secrets from K8s with secrets vault providers.  A principle is k8s secrets "arent' secret".  They are externalized with external vault providers.
- __Short TTL & SIEM__: short-lived tokens issued and tracked via secrets vault providers with full integration into SIEM tools
- __Segregration__: public-cloud providers account segregation controlled with coarser grained security groups and fine-grained k8s network policies, with break glass user access only.

## Lessons Learned

|Lesson|Learned|
|--|--|
|Philosophical differences (e.g, cloud native vs cloud agnostic)|Understand business drives and align to an architecture that supports it.  Find an __executive champion__; otherwise you will founder for years with compete visions of the future. |
|Bifurcated production ownership, slows the delivery during critical development and adoption phase|__Centralize product ownership__ for the ecosystem during adoption phase.  Pivot once products are well established.|
|Skills gaps, many concepts will be foreign to your traditional data center teams|Provide long ramp up time, slowly introduce individuals into new products.   Be aggressive with outside hires.|
|Public cloud gaps, some capabilities are missing, immature or cost prohibitive|Weigh the pros of going all in with a particular provider vs best of breed approach.|
|Technology explosion, so many choices, analysis paralysis extends timelines|Deciding on what not to do is more important than deciding what you will do.  __Stay focused__, don't get distracted.  There will be a proper time to pivot (without assessing myriads of technologies).  Layout your strategy and layout your architecture and try to execute without too many distractions.   |

Business Drivers: Understand business drivers.  Spotify and streaming music has a different business driven than a bank.  Requirements and regulations will be different.  Business drivers will drive your architecture. j
