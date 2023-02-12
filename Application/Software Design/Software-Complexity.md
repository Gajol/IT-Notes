
# Semantic Software Design
From: [*Hewitt, Eben. Semantic Software Design: A New Theory and Practical Guide for Modern Architects, 2020.*](www.worldcat.org/isbn/978-1-4920-4594-6).  Available on [O'Reilly - Semantic Software Design](https://learning.oreilly.com/library/view/semantic-software-design)


## Simplexity

Fred Brooks is the famous architect and manager of the IBM System/360, and the author of the book The Mythical Man Month in the 1970s. He thought to write it after his exit interview from IBM in which Thomas J. Watson asked him why it was so much harder to manage software projects than hardware projects. In his paper “No Silver Bullet,” Brooks outlines two types of complexity:

Essential complexity
: This is the complexity inherent in the design problem. It cannot be reduced.

Accidental complexity
: This is the kind of complexity that is created by the developers themselves. It does not inhere in the concept itself. It is due to weak design, poor coding quality, or inattention to the problem.

The engine of a typical E-class Mercedes-Benz has three times as many parts than a typical Honda Accord. Which is the better engine? There’s one answer if you want to go 180 mph. What are you hoping for from the car? Access to a greater number of mechanics with fewer specialized skills might be a design goal. That offers a different answer.

When we go to design a software system for a Human Resources (HR) department to use, we ask what matters an HR department is concerned with. We decide they are concerned with humans: after all, it’s in the name.

But, alas, they are not.

# Terms use in book
Affordance :  The way you address ease of use is by considering affordance.

  - Norman doors got their name from the lovely book The Design of Everyday Things by Donald Norman. In the book, he recounts the design of a particular door he encountered: it had a handle on it, as doors do. But the way it was designed and installed meant it had to be pushed to open it. This is counterintuitive, and makes the door difficult to use. People see a handle and naturally pull, and their efforts to enter are thwarted, albeit temporarily. But the frustration is real and unnecessary. The handle, by its presence, affords pulling. It all but asks to be pulled. Pushing is not why we make handles. This is __bad design__ and must be avoided.

- Give Design Decisions at Least Two Justifications

- Design from Multiple Perspectives

- Create a Quarantine or Embassy : In software, when we want to do something innovative, but we are dealing with nontrivial legacy systems, we can create an embassy package, or more sharply, a quarantine package. We create space for the legacy mappings and adapters and business logic to work as they reliably have. But then you can have a standalone new system that is free from any such constraints within its many chambers.

  - This lets the new stay new and be different and allows one messy space for the legacy it must connect to, like the mudroom.

- Design for Failure

- Naming : Do not false advertise in the name .

- Start Opposite the User : Do everything in thinking about the user, the personas, their needs. Then forget about them for a while and move to other users like the maintainers.


- Platforms : Focus on creating the context, the place where the stated requirements could come to be true, not simply directly building the stated requirements themselves.

- Disappearing : Make your user the centre of the power, and not your software.

## Design Thinking
Chapter 4 of the book.

The steps in design thinking are:
1. Define the Problem
1. Make Observations : determine users, observe user's actions, create personas
1. Form Insights
1. Frame Opportunities
1. Generate Ideas
1. Refine Solutions
1. Try Prototypes

### Design thinking principles:
1. Human-centricity
1. Showing, not-telling
1. Clarification
1. Experimentation
1. Collaboration

Process is very important to success, and much of this book is devoted to how you can turn your work into a repeatable (almost standard) process to make a compelling product with an architecture practice.  It is critically important to keep your eyes on the goal of creating something of use to someone else.  *Do not get bogged down on process, but have a process.*

### Design Thinking Implementations
Tools:
- white-boards, smart boards, easels
- sticky-notes
- markers
- voting-stickers (dots-shaped stickers)

# Semantic Design Practices and Artifacts
- You must make the complex and abstract notions of your ~~architecture~~ design actionable, concrete, durable, precise.

1. [Design Principles](https://digitalprinciples.org/principles/)
1. Pair Designing / Pair Architecting : To capture your ideas and test their validity, their boundaries, and their value, try pair architecting.   From Kent Beck (JUnit / Extreme Programming - pair programming)
1. Murals : A wall which can include the items you have created during Design Thinking; namely Personas, Customer Journey Map, Pains, Gains, Outcomes, Metrics.   *Pushing yourself outside of what is comfortable and familiar to do this kind of work at this stage can mean the difference between making something mundane and forgettable and something truly special, useful, and exciting to your customers.*
1. Vision Box : Create the vision of the software succinctly.  Parallels this concept to the CD-box software came in with visualization and clear description of software.  Front of Box: Product Name, Main Objective, Graphic, 3-5 Key Selling Points.  Back of Box:  Description, List of Features, Operating Requirements
1. Mind Maps
1. Use Cases
1. Guidelines and Conventions
1. Approaches : short (3-10 pages) design definition documents (DDD). Approaches are meant to be written quickly and focused on a specific local problem. They are not used when designing an entire new system or process or strategy.
1. Design Definition Document (D3) : Covers questions to be answered in four main areas; business, application/services, data and infrastructure.  Its scope is the non-functional requirements of the system. The functional requirements are expected to be expressed elsewhere, say in the form of user stories derived from your use cases.

## D3 Template

The Domain Definition Document Template (D3 Template) document is long and often done by architects (chief architect, application architect and software design architects).   This document can be 50-200 pages when printed, but the content could evolve collaboratively/iteratively using modern wiki-pages (Confluence).
- Writing a hundred pages up front is not the answer.
- Make sure to visit all of these concerns, understanding that they will evolve.

### Program Name Definition
- Executive Summary
- Capabilities
- Strategic Fit
- Assumptions
- Constraints

  - Applicable Laws
  - Applicable Regulations

- Risks
- Impacts : How will the business need to change to support this.
- Stakeholders
- Governance: Framework to govern this project.

### Application Design

- Application Standards and Policies
- Guidelines and Conventions
- Patterns
- Services
- Security
- Availability
- Scalability and Performance
- Extensibility
- Testability
- Maintainability

### Data Design
- Database strategy
- Standards and Guidelines
- Technologies
- Import/Export
- Replication, Backup and Recovery
- Data versioning
- Data automation
- Data performance considerations
- Data warehousing, storage and management requirements
- Data maintenance
- Data migration
- Data volume
- Logging
- Reporting
- Auditing
- Analytics
- Caching Strategy
- Machine Learning

### Infrastructure Design
- Infrastructure Strategy
- Latency and Performance
- Infrastructure Security
- Maintenance
- Standards, Guidelines and Conventions
- Infrastructure as Code (IaC)
- Environment Guidelines
- Global Distribution
- Immutable Infrastructure
- Hybrid : Are there any necessary strategies for hybrid architectures (solutions that span on-premise and cloud)?
- SLA's : State SLAs that you must meet. Put them in mathematically testable terms, from a customer perspective. Include all of the customers, not only the end user.


#  The Business Aspect

Framework:
- Business Glossary
- Organizational Map
- Business Capability Map : score against good system design quality attributes {performance, scalability, stability, monitorability, extensibility, security}
- Process Maps
- Reengineer Processes : Consider [value streams](https://en.wikipedia.org/wiki/Value_stream).  Model process using BPMN.
- Inventory of Systems : capabilities, business owner, architect, rationalize the catalog/inventory.
- Define the metrics : You need to be able to measure and communicate them definitively
- Institute appropriate governance : Governance is a meta-process. In your value stream, ask how decisions are made, who the authorities are, what roles they have, and what relevant review boards are.   Operational scorecards.
- Business Architecture in Applications : What business strategy does this map to?  Why does this project/application matter?  What new capabilities are you creating?  What major uses cases are performed?  Who are the audiences?

With the above basic business building blocks draw connections by asking:
- What are the relevant regulations, applicable laws, rules or corporate policies that constrain the system?
- Who are the stakeholders?  Who owns the decisions?  When __events__ are generated when a decision is made?
- What other initiatives are in-play, and how are the aligned?
- What other products and services are listed in our APM?   
- What training is required for the organization (all user-bases; design, operations, user, ...)?
- What metrics will be measure how well we are doing toward achieving our desired outcome (during development, while in production, ...)

Template components:
- Major Features
- Strategic fit
- Business drivers
- Business Priorities
- Assumptions

# The Application Aspect

Applications should be service-oriented.   The core of the software-application build as services.
- services provide clarity, high-cohesion and the ability to Scale
- services improve portability and provide the basis for a platform

1. Embrace Constraints : Constraints can ground you, give your work a boundary.
1. Decouple User Interfaces :  Applications should be thought of as thin user interfaces on top of collections of services.  Design the web UI to work across mobile devices, tablets, and desktops at a minimum.
1. UI Packages:  A composable UI designed from the outset to be able to evolve to present information to any system by consuming a set of services.  
1. On Platform Design : Build services-first; exposed via an API.   Design the list of APIs for the application.
   - Platforms: AWS, Google Cloud Platform, Salesforce, Facebook...
   - Jeff Bezos quote ~2002 paraphrased; *“Make sure everything you write is a service. Only communicate with any other teams’ products through service APIs. I don’t care what the implementation language is. If you don’t do this, you’re fired. Have a nice day.”*
1. Service Resources and Representations : Start with the noun and then think of the verbs.
   - [Google API Explorer](https://developers.google.com/apis-explorer/)
   - [AWS EC2 API Reference](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/OperationList-query-ec2.html)
   - [Twitter API](https://developer.twitter.com/en/docs/twitter-api)

   - The concept of REST is to separate the representation from the resource.  Representation is the *presentation* of the resource; which could be in any common form XML, JSON, HTML.
   - Domain Language:  Define the terms for the APIs and be very clear.  See Twitter and Amazon examples.
1. API Guidelines : Identify the short-list of guidelines for the APIs.  Domain-naming conventions, cross-cutting concerns (security, etc), throttling.
   - General Guidelines [Microsoft RESTful web API design](https://docs.microsoft.com/en-us/azure/architecture/best-practices/api-design)
     - platform independence: standard protocols
     - service evolution : api can evolve independently from client applications.  
     - discoverable functionality: functionality should be discoverable so that client applications can fully use it.
     - organized around resources (orders, product, ...)
     - define operations in terms of HTTP methods {GET, POST, PUT, PATCH, DELETE} : Understand the different between POST, PUT, PATCH.  
     - conform to HTTP semantics: media, mime-types, content-header,
     - asynchronous
     - filter and paginate data
     - large binary resources : chunking
     - HATEOAS  to enable navigation of related resources.  HATEOAS is not standardized.
     - versioning API
     - [OpenAPI](https://www.openapis.org/) : opinionated guidelines
     - see also [IBM Watson API Guidelines](https://github.com/watson-developer-cloud/api-guidelines#bluemix-lifecycle)
1. Deconstructed Versioning : Versioning, use semantic versioning to communicate impacts to customers x.y.z .  A change in z has no impact (bug fix, etc), a change in y has minor impacts but is expected to be backwards compatible, a change in x is a major change with no backwards compatibility.
1. Cacheability and Idempotence.  Test to ensure services have separation of concerns.  Use *curl* to test URIs to be accessible and usable.   If the URis are available using *curl*, the API is bookmarkable; allow easier consumption by clients.
  - curl cannot be used with ProtoBuf or Avro.
  - idempotent:   A service API is idempotent if you can call it repeatedly and produce the same result (without side effects).  Exception is creationary functions.
1. Independently Buildable : The application can be built independently of the services/APIs.
1. Strategies and Configurable Services : Use the Gang of Four Strategy Pattern which allows a strategy to be specified through the API.  Business Logic can be abstracted as a strategy.   Changes in business logic, might create a new business logic strategy.  Author suggests [Lightbend](https://github.com/lightbend/config)
1. Application Specific Services : Avoid making a service/API for a specific application.   Avoid application-specific services.  
1. Communicate Through Services
   - communication is done only through service interfaces
   - Services must own their own data
   - no two services in our domain should overlap and do the same job
1. Expect Externalization : expect that any service you write will be publicly available, externalized from your own organization and applications and used by other business units, and exposed out on the open internet.
1. Design for Resilience : circuit breaking, rate limiting, retrying, ...
1. Interactive Documentation : Open API documentation / Confluence Open API / API catalog
1. Service Anatomy : Services must have high-cohesion.   *The overarching rule is that services must have high cohesion, so each one represents one important noun in the domain or performs only one meaningful action. A service API can have many functions, but they should all be related around a single idea from the domain perspective.*  Service types include:
   - UI Packages : display information, input and user interactions
   - Orchestrations : Orchestrations have the single purpose of representing a workflow and managing state for the end use. Designed from a _business_ perspective.
   - Engines : Perform calculations, execute algorithms, invoke data services to persist changes.   Engines should be stateless.
   - Data Accessors.  All data accessed through APIs.
1. Eventing: Pub/Sub.  Allows scalability, flexibility, extensibility, loose coupling and portability.   Reference [[Enterprise Integration Pattern](http://www.worldcat.org/isbn/0321200683)] - [[EAI online](https://www.enterpriseintegrationpatterns.com/)]
1. Contextual Services and Service Mixins: Ask what use cases this entity participates in, and in what contexts the entity might be required to store or share information. This helps to discover smaller, more specific related Personae services.  The example in the book refers to a hotel and a traveller.  Trying to create one service that manages all personas (business, vacation, mixed, ..) is complex.  Instead decompose into human, business, leisure and bleisure traveller.  
1. Performance Improvement Checklist : zip, minify, filter/sort/pagination, tune DB, CDN, ...
1. Spearating API from Implementation:  From the outset package the API to allow extensibility.
1. Languages : Bilingualism
1. Radical Immutability :  <atch your development environment as closely as possible to your production environment. Using containers such as Docker or a virtual box such as Vagrant. Use jFrog universal package manager.
1. Automated Testing: *In a modern system, we really must radically automate testing.*.  Unit Tests, Canary/Smoke tests, Integration, Regression, Load, Security/Penetration tests.

# The Data Aspect
- Business Glossary
- Semantic Data Modeling
- Polygot Persistence : Lots of database choices.

  - data is the rocket fuel of any modern application
  - data is the backbone of machine learning and AI
  - data is the point of any application
  - Applications are really simply window dressing on the data.
  - Assess a persistence scorecard {hosting, storage type, replication, modeling, transaction support, scaling model, ~~master/slave~~ chief/worker, controller/agent}

- multimodeling : design for evolution, for change, for fluidity.   A model for streams, events, cahche, services-data, logs-as-data, security-data-model, ...
- data models for streams.  Apache Kafka, others.  Consider data sources and sinks, data intervals, storage needs, durability requirements, scalablity and fault tolerance.  
- engineering for ML
- peer-to-peer persistent stores
- Graph databases
- data pipelines : *author seems to combine CI/CD pipelines and data pipelines*; ah, data in this sense is the build/deploy process.
- ML data pipelines : schedulre, pub/sub, workflow manager (tasks - pipeline collector, stager, indexer, optimizer), data source api
- metadata and service metrics : counts, response times, failure rate, availability, ...
- auditing
- accessibility


# Infrastructure Aspect
Brief summary here - only the table of contents:
- DevOps
- infrastructure as code
- metrics : latency, traffic, availability, incidents
- automated pipelines
- feature toggling : feature flags
- personalization, ML based recommendations : [Netflix Atwork Personalization @ Netflix - 2017](https://netflixtechblog.com/artwork-personalization-c589f074ad76?gi=c5f60ea2108c)
- design and documentation checklist : provider, cloud, ACLs/security groups, key management, scaling, DR, IaC, ...
- chaos : Netflix - introduce chaos and see what happens.  Chaos Monkey {Reousrce, state, Network, Request}
- stakeholder diversity
  - developers are the first user of the system:  invest in automation, leaders do everything to take bureaucracies away from developers, ..
  - network operations centre : monitoring is transparent and clear, log messages are clear


# Operations, Process and Management

## The Creative Director
Semantic Designer's Role: Role clarity is a challenge.  Clarity helps person invest in continuous learning, research best practices and improve.  What might a designer do differently (*note: skills and background in strategy, philosophy, aesthetics/the arts, teaching/mentoring, and data are a focus):
- strong understanding of the industry and business
- strategic thinker
- analytical thinker: philosophical understanding of logic, set theory, rhetoric, post-structuralism and ethics
- ability to communicate design
- design oriented
- data oriented thinker
- strong teaching and mentoring ability
- technical breadth across business, data, application and technology
- strong written and verbal skills
- effective formal presentation skills
- ability to lead directly and by influence
- skilled at planning and project management
- skilled at conflict resolution, customer negotiation and business development

Responsibilities:
- document current & future state designs
- solution consulting: respond to RFPs
- use data-driven methods to determine design decisions
- create clear communicative models for large-scale problems and solutions
- guide technical development teams through patterns, principles and guidelines
- creates vision and strategic direction to achieve common goals
- keeps abreast of trends in economy, politics, technology, media and industry
- create formal methods and innovate models for viewing concepts throughout the organization
- understands and negotiates trade-offs between people in technical disciplines

Architects must create value for customers:   You would not create mere taxonomies and classifications, and become devoted to making hair-splitting distinctions between the role of the solution architect versus the software architect and the application architect.  Rather, you would be in the business of creating value for customers, like the plucky and resilient creatives: by any means necessary.
- software is a creative process. Architects, as "creative directors" embrace this.
  - how will people work together
  - what process will be employed
  - what tools will people enjoy using and employ to realize the practices (with the least friction & waste)
  - what are the compliance and regulations we must adhere to
  - how does corporate strategy inform the way systems will be made
  - how can you help the organization grow, scale, differentiate and compete
  - how will you collaborate with internal and external stakeholders
  - how can you represent your organization in the press, in interviews and in speaking engagements.

The architect’s role is not particularly well understood.

## Management, Governance and Operations
### Management
- Strategy and Tooling
  - get the concept right; who cares about what JavaScript framework you use; let the programmers pick their tools
  - work at the level of "idea", the concept, and be ruthlessly pragmatic and detailed in your analysis.
  - architecture tool choice considerations; shift in direction to a new kind of technology (blockchain, ...)
- [Oblique Strategies](https://en.wikipedia.org/wiki/Oblique_Strategies)
  - be aware of confirmation bias.
  - use cards to help design.  Cards offer a generic  suggestion such as {Do something boring. Make a sudden, unpredictable, destructive action; incorporate. Emphasize differences.  Work at a different speed. Only one element of each kind. Would anybody want it? What would your closest friend do? } [Oblique Strategies - Wikipedia](https://en.wikipedia.org/wiki/Oblique_Strategies).
    - [web site with software design oblique strategies](https://www.obliquestrategies.app/)
      - take a break, do nothing for as long as possible, make
    - [Python Oblique Strategies - Brian Eno and Peter Schmidt - 1975](https://pypi.org/project/obliquestrategies/)
    - [Start Day with an Oblique Strategy](http://stoney.sb.org/eno/oblique.html)
 - Build/Buy/Partner    
 - Due Diligence : Assess the technology and operational aspects of the target company (when performing a buy):  Maintainability, Manageability, Portability, Security, Usability, Performance, Functional Suitability, ...
 - Architectural Definition Pattern
   - Agile is iterative, but it is not meant to be "Groundhog Day" where we replay the same problems.   Architecture decisions and goals need to be recorded formally; as Google does with PageRank, BigTable, Cassandra and other architectures.
   - The purpose of the Architecture Definition pattern is to express in clear, executable, measurable, testable, directive text what the non-functional requirements (NFRs), or quality requirements, of the system are.
 - Lateral Thinking : idea generation tools to generate ideas, provoke thinking, allow inconsistencies, welcome chance..
 - Code Reviews
 - Demos
 - Operational Scorecard : Roadblocks, Risk/Mitigations, Major misses, Major Accomplishments, Contracts/Budgets, 10X initiatives, Critical skills gaps, KPI / OKR (Objectives and Key Results) / MOB (Management by Business Objectives), ...
 - Service-Oriented Organization: find the right level of abstraction (not too many or too few groupings), consider what factors influence change and group items that change together.   
   - SOLID :  Apply software OOD SOLID to "people organization design":  Single responsibility, Open-Closed (open for extension, closed for modification), Liskov Substitution Principle (people can substitute for their leader/architect), interface segregation, Dependency Inversion Principle -Things must depend on abstractions, not on concretions.
   - Cross-Functional Teams : Business knowledge, Systems Design, UI/UX, API design and service creation, strategy awarenews, testing, automation, data, infrastructure, networking, security, accessibility, ...
- Scalable Business Machine:  Principles, Inputs, Processes, Outputs and Tools.  Similar to *Logic Models*

- Managing Modernization as a Program
  - Work plan, Staffing and Resource Plan
  - Risk management : pre-mortems, checklists to monitor, identify, analyse and remediate risks.
  - Quality management plan
  - Configuration Management
  - Change Management
  - Issue Management
  - Time and Schedule Management
  - Communications Management

  Writing the code is maybe 15% of a software project, and less if the project is a digital transformation effort.

- Change Management : author generally aligns with ADKAR (PROSCII) model:
  - Prepare for Change : assess readiness, engage stakeholders
  - Align the Organization : assess impact, map roles, communications plan, communicate vision, communicate milestones
  - Enable Transition : assess scope, develop capability, develop training, onboard trainers
  - Go to Market: Develop communications plan, external awareness, engagement, pilots

### Lateral  Thinking

| Vertical Thinking                            | Lateral Thinking                                             |
| -------------------------------------------- | ------------------------------------------------------------ |
| Selective                                    | Generative (reference Westrum culture process-oriented versus generative cultures) |
| Moves only if direction to move to           | Moves in order to generate a direction                       |
| Analytical                                   | Provacative                                                  |
| Sequential                                   | Makes Jumps                                                  |
| Fear : Must be correct at each step.         | Experimental: No need to be correct at each step             |
| Use the negative to block pathways           | No negatives                                                 |
| Conectnrate to exlcude what is irrelevant    | Welcome chance intrusions                                    |
| Fixed labels, classifications and categories | No fixed labels, categories                                  |
| Follows most likely happy path               | Explores least likely paths                                  |
| Finite process                               | Probablistic process                                         |

Tools

- Challenge Idea Tool.   Typcially ask why, and create fish-bone diagrams and root-cause analys excercise.   Alternative is to ask why in a non-threatening way about a current-state or process to help us innovate and remove inefficiences
- Bono's *Six Thinking Hats* - 1985

| Hat Colour | Area of Concern                                              |
| ---------- | ------------------------------------------------------------ |
| White      | data, definitions, facts, figures, neutral and objective     |
| Red        | Intuition, feeling, emotion                                  |
| Black      | logical, careful, cautious.  The "devil's advocate"          |
| Yellow     | Sunny and positive, finds reasons something will work        |
| Green      | Growth, creativity, new alternatives, provacaitons           |
| Blue       | Cool, the color of the sky, the meta-ht, organizing, looking at the process. |



### Governance

- Define goals of governance board: reduce training time, improve consistency, improve documentation, limit risk ...
- Define metrics : deployment time, availability, scalability, ..., maturity model, # internal/external clients, adoption percentage, cost savings/avoidance, # of services, # of APIs, transactions per second, growth rate, cost to operate, metrics for success of a service
- Service Portfolio : evangelize the product to other teams.  Tech organization best practices, cookbooks, checklists
- Service Inventory and Metadata : lifecycle of services, registry, events produced, ...

### __ARA__

- Service Design / Operations / Business Processes / Data / Errors / Performance / Security / QA / Deployment / Documentation Checklist : *good list of 14 items*

### When should architects be engaged:
1. When something is going to cross a data center or other significant network boundary
1. When something is going to cross system boundaries
1. Anything architecturally significant.   

[Architecturally significant requirements](https://en.wikipedia.org/wiki/Architecturally_significant_requirements) should involve architects to define the architecture definition pattern:
1. high business value
1. highly visible across teams
1. high technical risk
1. high risk of budget overruns or high business risk
1. outstanding questions or concerns from a key stakeholder or business leader.
1. component is new or first-of-a-kind to the organization
1. Quality of Service or SLA (service-level architecture) characteristics that deviate from all the ones that are already satisfied by the evolving architecture.


#### Architect Definition Document - Defense
The D3 (Domain Definition Document), and the Architecture Definition Document, must be communicated.   Talk to the teams, but with the document as a centrepiece for discussion.   


# Semantic Design Manifesto
Four Ideals:
1. Work in design concepts before designing software.
1. View is comprehensive; the organization, the project, the integrations, the documentation, the conversation, the data, the infrastructure.
1. Mode is De-centered, deconstructed.  Embrace imagination, diversity, context, complexity, contradiction and change.   The system is not rigid, but deconstructed.
1. Focus is on diverse customers.   Highly focused on outcomes.   


# References
- Design Centric Culture - 2015 : https://hbr.org/2015/09/design-thinking-comes-of-age
