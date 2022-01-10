# Gartner - How to Document Application Architecture

Reference: [Gartner 2021 - How to Document Application Architecture - G00750245](https://www.gartner.com/document/4008341) - mentions C4model .

## Overview
This document addresses the problem of how to create useful application, system and solution documentation.
### Key Findings:
- __Valuable__: Architecture decisions must be captured for future reference.  Agile manifesto supports this. *Valuing working software over documentation is a good thing. Completely avoiding documentation is not.*
- __Quality__: Low quality architecture documentation (incoherent, inaccurate, inaccessible) increases the risk for misunderstandings, poor decisions, and costly assumptions
- __Specific Audience__: Architecture for no specific audience (or for disparate audiences) has little or no value

## Recommendations:
1. __Formal Documentation__:  Create formal architecture documentation for applications, systems, and solutions.   Capture design intent and significant decisions.
1. __Identify Audience__:  Identify audience for the documentation and target the content accordingly.
1. __Minimal & Organized__: Create only the minimal amount of documentation and publish it so it is discoverable and accessible.  Increases utilization and understanding of the system.

## Documentation Approach
1. Target a Primary Audience
1. Create only what the Audience Needs
1. Make documentation discoverable and accessible
1. Keep documentation up-to-date

### Foundation for Excellent Documentation
- Architectural Frameworks
- Standards
- Diagramming Tools
- Patterns
- Templates
- Glossaries of Common Terms

Architectural Frameworks
1. [4+1 Architectural View Model](https://en.wikipedia.org/wiki/4%2B1_architectural_view_model) : Logical, Development, Process, Physical and Scenarios to describe software architecture.  Created by [Kruchten, 1995](https://www.cs.ubc.ca/~gregor/teaching/papers/4+1view-architecture.pdf).  
  - O'Reilly Book, [Documenting Software Architectures: Views and Beyond - ISBN 9780132488617](https://learning.oreilly.com/library/view/documenting-software-architectures)
  - O'Reilly Book, [Software Systems Architecture - 2005 - ISBN 9780321580207](https://learning.oreilly.com/library/view/software-systems-architecture/9780321580207/fm.html)
1. [c4model](c4model.com): System __C__ontext, __C__ontainer, __C__omponent, __C__ode to descirbe software architecture
1. [Views and Beyond](https://resources.sei.cmu.edu/library/asset-view.cfm?assetid=513862)

## 4+1 Architectural Model View
- O'Reilly Book, [Documenting Software Architectures: Views and Beyond - ISBN 9780132488617](https://learning.oreilly.com/library/view/documenting-software-architectures):  Book answers the question, "How do you document an architecture so that others can successfully use it, maintain it, and build a system from it?" - Endorsed by Grady Booch.   SOA-era.  Document styles, components, interfaces, behaviour, ... Use UML.  Choose set of views, document views and have a review strategy.

Relates to IEEE 40210 - Architectural Description.

### Views
- Determine Views:  Inputs ( People and Skills available, standards you must comply with, budget on hand, schedule constrainsts, information needs of stakeholders for the architecture)
  - Module views
  - Component and Connector Views
  - Allocation Views
  - Top Level Context : top-level context diagrams showing interacting systems and system overview and purpose

### Audience
  Audience:
  - Project Managers : allocation views for deployment and work assignment, module views for uses
  - Developers : module, c&c views,
  - Testers :
  - Maintainers :

### Document Views
Document:  
1. Top-level context, Element Catalog, Context Diagram, ADD (Attribute Driven Design)
- can have multiple top-level contexts - to avoid complexity and convey information clearly (trick is to avoid repetition)
- a pure context-diagram does not show the internals of the system (black box)

### Document Beyond Views
1. Information about the Architecture Documentation: How the information is organized so people can find relevant information.  Examples:
  - Documentation Roadmap
  - How a View is Documented
1. Information about the Architecture:
  - System Overview
  - Mapping Between Views (e.g., C&C names to Module names)
  - Rationale
  - Directory : Index, Glossary, acronyms

## Review

Project Phase (Lifecycle) and Architecture Review

|Project Phase|Typical Activiities|Review Architecture For|
|--|--|--|
|Concept|Identify stakeholder needs, explore concepts, propsoe viable solutions|Capture key SH concerns|
|Development|Refine requirements, create solution description, buidling system(s), verifying and validating system|Support for conformance to standards & specifications, Support for evaluation, development, input to generation and anlaysis tools, judging conformance to architecture, for project planning|
|Utilization|Operating system to satisfy user needs|Support for help in tracking down errors|
|Support|Providing sustained system capability|Support for system evolution with the architecture and business planning for evolution|


## Software System Architecture - 2005
- O'Reilly Book, [Software Systems Architecture - 2005 - ISBN 9780321580207](https://learning.oreilly.com/library/view/software-systems-architecture/9780321580207/fm.html)

### Fundaments
S/W Architecture Concepts, Viewpoints and Views, Perspectives, Role of S/W Architect

### Process
 - Definition, Scope, Concerns, Principles & Constraints
 - Identify and Engage Stakeholders
 - Identify and Use Scenarios
 - Using Styles and Patterns
 - Producing Architectural Models
 - Creating the Architectural Description
 - Validating the Architecture

### Viewpoint Catalog
 - Functional, Information, Concurrency, Development, Deployment, Operational
 - Achieve consistency across the views

 - Functional: The functional view documents the system’s functional elements, their responsibilities, interfaces, and primary interactions. A functional view is the cornerstone of most architecture documents and is often the first part of the documentation that stakeholders try to read. It drives the shape of other system structures such as the information structure, concurrency structure, deployment structure, and so on. It also has a significant impact on the system’s quality properties, such as its ability to change, its ability to be secured, and its runtime performance.

 - Information: The information view documents the way that the architecture stores, manipulates, manages, and distributes information. The ultimate purpose of virtually any computer system is to manipulate information in some form, and this viewpoint develops a complete but broad view of static data structure and information flow. The objective of this analysis is to answer the important questions around content, structure, ownership, latency, references, and data migration.

 Concurrency: The concurrency view describes the concurrency structure of the system and maps functional elements to concurrency units to clearly identify the parts of the system that can execute concurrently and how this is coordinated and controlled. This entails the creation of models that show the process and thread structures that the system will use and the interprocess communication mechanisms used to coordinate their operation.

 Development: The development view describes the architecture that supports the software development process. Development views communicate the aspects of the architecture of interest to those stakeholders involved in building, testing, maintaining, and enhancing the system.

 Deployment: The deployment view describes the environment into which the system will be deployed, including capturing the dependencies the system has on its runtime environment. This view captures the hardware environment that the system needs, the technical environment requirements for each element, and the mapping of the software elements to the runtime environment that will execute them.

 Operational: The operational view describes how the system will be operated, administered, and supported when it is running in its production environment. For all but the simplest systems, installing, managing, and operating the system is a significant task that must be considered and planned at design time. The aim of the operational view is to identify system-wide strategies for addressing the operational concerns of the system’s stakeholders and to identify solutions that address these.



Perspective Catalog
- Security
- Performance and Scalability
- Availability and Resilience
- Evolution
- Other (Legal, Mandate, )
  - Accessibility
  - Development Resource : Ensures can be built with __known__ constraints on people, budget, time and material
  - Internationalization : language, country, cultural
  - Location : location-specifics, distances, ...
  - Regulation  
  - Usability
  - From DoD AF(https://dodcio.defense.gov/Library/DoD-Architecture-Framework/): Capability, Data & Information, Operational, Project, Services, Standards, Systems Viewpoint


  Decide most relevant perspectives and time to invest in apply to views.

  Accessibility Perspective:
  |Topic|Comment|
  |--|--|
  |Desired Quality|The ability of the system to be used by people with disabilities|
  |Applicability|Any system that may be used or operated by people with disabilities or may be subject to legislation regarding disabilities|
  |Concerns|Types of disability, functional availability, and disability regulation|
  |Activities|Identification of system touch points, device independence, and content equivalence|
  |Architectural Tactics|Assistive technologies, specialied input devices, voice recognition|
  |Problems and Pitfalls|Ignoring these needs until too late, lack of knowledge about regulation and legislation, and lack of knowledge about suitable solutions|
