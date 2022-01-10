7. Scope of Architecture Characteristics
Scope has changed over time.
- Past (monoliths) - The scope of architecture discussion was "the system".   Can the system scale, etc.
- Today (microservices, etc) - The scope of architectural characteristics has narrowed considerably

architecture quantum (defined in Building Evolutionary Architectures(O'Reilly ISBN 978-1-4919-8636-3))
- must first understand "connascence" : Two components are connascent if a change in one would require the other to be modified in order to maintain the overall correctness of the system.  Two types of connascence; static, discoverable via static code analysis, and dynamic, concerning runtime behaviour.
  - For dynamic connascence, we define two types: synchronous and asynchronous. Synchronous calls between two distributed services have the caller wait for the response from the callee. On the other hand, asynchronous calls allow fire-and-forget semantics in event-driven architectures, allowing two different services to differ in operational architecture
- component level coupling is only one way that binds software together (i.e., coupling that can be measured with static code analysis tools).  Business concepts can semantically bind system parts together.

Architecture quantum: An independently deployable artifact with high functional cohesion and synchronous connascence. [copied from OReilly book](https://learning.oreilly.com/library/view/fundamentals-of-software/9781492043447/ch07.xhtml#going-going-gone)
- Independently deployable: An architecture quantum includes all the necessary components to function independently from other parts of the architecture. For example, if an application uses a database, it is part of the quantum because the system won’t function without it. This requirement means that virtually all legacy systems deployed using a single database by definition form a quantum of one. However, in the microservices architecture style, each service includes its own database (part of the bounded context driving philosophy in microservices, creating multiple quanta within that architecture.
- High functional cohesion: Cohesion in component design refers to how well the contained code is unified in purpose. For example, a Customer component with properties and methods all pertaining to a Customer entity exhibits high cohesion; whereas a Utility component with a random collection of miscellaneous methods would not.  
High functional cohesion implies that an architecture quantum does something purposeful. This distinction matters little in traditional monolithic applications with a single database. However, in microservices architectures, developers typically design each service to match a single workflow (a bounded context).
- Synchronous connascence: Synchronous connascence implies synchronous calls within an application context or between distributed services that form this architecture quantum. For example, if one service in a microservices architecture calls another one synchronously, each service *cannot exhibit extreme differences in operational architecture characteristics*. If the caller is much more scalable than the callee, timeouts and other reliability concerns will occur. Thus, synchronous calls create dynamic connascence for the length of the call—if one is waiting for the other, their operational architecture characteristics must be the same for the duration of the call.


# 8. Component Based Thinking
Components form the fundamental modular building block in architecture, making them a critical consideration for architects.
- components : the physical packaging of modules
- a primary decision an architect makes is the top-level partitioning of components in the architecture.   A microservice may be so small that components aren't necessary.

Architect role:
- define, refine, manage and govern the components within an architecture
- in collaboration with business analysts, SMEs, developers, QA, operations and Enterprise Architects.
- generally a "component" is the lowest level of a system an architect interacts with

## Architecture Partitioning
Recall, the frist law of software architecture that everything is a trade-off.  Some styles include:
- layered archtecture
- modular monolith - see Simon Brown books

modular monolith, a single deployment unit associated with a database and partitioned around __domains__ rather than __technical capabilities__.
- Technical Partitioning:  Presentation, Business Rules, Service, Persistence, ... . Technically partitioned architectures separate top-level components based on technical capabilities rather than discrete workflows.
  - pros: clearly separates customization code, aligns closely with layered architecture pattern
  - cons: high degree of global coupling - changes to common / local components affect all other components, duplicate domain concepts in common / local components, higher coupling at data layer (single database likely)
- Domain Partitioning: CatalogCheckout, ShipToCustomer, Analytics, UpdateInventory, Reporting, UpdateAccounts.  In DDD, the architect identifies domains or workflows independent and decoupled from each other.  Domain-partitioned architectures separate top-level components by workflows and/or domains.
  - pros:  follows business model closely, can use Inverse Conway maneuver to build cross-functional teams around domains, aligns to modular monolith and microservices architecture, message flow matches problem domain, easy to migrate componetns to distributed architecture
  - cons:  customization code appears in multiple components

Layered Monolith Architecture Side-Effects
- organization structure follows technical capabilities - backend-developers on one team, DBAs on a team, presentation team, ... - following Conway's Law from the 1960's of *Organizations which design systems … are constrained to produce designs which are copies of the communication structures of these organizations.*

- The inverse to Conway's Law, prooposd in 2010's Jonny Leroy' Inverse Conway Maneuver *Evolve team and organizational structure together to promote the desired architecture*.  

## Component Identification Flow
Iterative process:
- identify initial components
- assign requireds to components
- analyze roles and responsibilities
- analyze architecture characteristics
- restructure components (repeat)

## Component Granularity
- too fine leads to too much communication
- too course leads to high-level coupling lowering quality characteristics like deployability, testability and agility.

## Discoverying Components
Anti-Pattern - Entity Trap : For each entity creating an CRUD (Create, Browse, Display, Upload, Place, ...). The entity trap anti-pattern arises when an architect incorrectly identifies the database relationships as workflows in the application.

### Tools - How to find components?
__Actor / Actions Approach__: Map requirements to componetns. From the [Rational Unfiied Process - 1998](https://en.wikipedia.org/wiki/Rational_Unified_Process)
- identify actors that perform activities and the actions those actors perform
- a technique for discovering the typical users of the system, and what things/actions they might do with the system
- useful when more upfront design is required, or, where requirements feature distinct roles and kinds/categories of actions they perform
- suitable for all types of systems: monolithic or distributed

__Event Storming__: From the Domain Drive Design practice and microservices.  
- Assume the project will use messages and/or events to communicate between various components
- Team tries to determine which events occur in the based on requirements and identified Roles
- Team builds components aound the events and message handlers
- suitable for distributed architectures like microservices .

__Workflow Approach__: More generic approach than event storming.   The workflow approach models the components around workflows, much like event storming, but without the explicit constraints of building a message-based system.
- identify key roles
- determins the kinds of worklows these roles engage in
- builds components around the identified activities 


## Choosing Monolithic versus Distributed Architecture - Architecture Quantum
Using Architecture Quantum of each component identify if monolight is preferred over distributed.   (Recall: Architecture quantum: An independently deployable artifact with high functional cohesion and synchronous connascence.).
- if there are varying quantum's then a distributed architecture is preferred (to accommodate differing architecture characteristics).  For example, if one component is streaming (read-only) and another must scale for high-scale updates.
