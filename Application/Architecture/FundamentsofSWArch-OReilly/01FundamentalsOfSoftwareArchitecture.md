Fundamentals of Software Architectures
ISBN: 9781492043454
[Richards, Mark. & Ford, Neil. Fundamentals of software architecture: an engineering approach. (O’Reilly, 2020)]


# 1. Introduction
First Law of Software Architecture : Everything in software architecture is a trade-off.
Second Law of Software Architecture : Why is more important than how.



# 2. Four Aspects to Thinking Like an Architect
1.  Understand difference between design and architecture
1.  Have a wide breadth of technical knowledge with some technical depth.    Allows architect to see solutions and options others don't see
1.  Understanding, Analysing and Reconciling Trade-Offs Between Solutions and Technologies
1.  Understanding importance of "business drivers" and how they translate to architectural concerns.


## Difference between design and architecture
Architect responsible for:
- analysing business requirements to extract and define the architectural characteristics
- selecting which architecture patterns and styles would fit the problem domain
- and creating components (the building blocks of the system)

Designers:
- receive architectural artefacts
- responsible for creating class diagrams for each component,
- creating user interface screens, and
- developing and testing source code

The above is a high-level model, but this seldom works in practice due to the uni-directional conversation mode and waterfall approach.   Although the above ownership of artefacts is consistent, the model works much better with:
- collaboration between architect and design
- leadership
- mentoring

## Technical Breadth
- Pyramid of all knowledge : Stuff you know.  Stuff you don't know. Stuff you don't know you don't know.   The technical breadth of an architect includes both the stuff you know, and the stuff you know you don't know.   In other words, being aware of a knowledge gap is an asset.
- For an architect, the "stuff you know" is also the "stuff you must maintain" and put effort into maintain knowledge in.   Ignoring the technology for 1-2 years means you are no longer an expert.   The "stuff you know" is your technical depth.

Frozen-Caveman Anti-Pattern: Architects had become obsessed about this particular architectural characteristic although the chances/risk are extremely small.   Frozen-Caveman can arise from architects who rely on ancient, stale expertise/criteria and affirming this knowledge is modern and cutting-edge.   *The frozen-caveman anti-pattern manifests as stale expertise – the mistaken sensation that outdated information is still cutting edge. Seen often in large companies where the developers who founded the company have moved into leadership roles yet still make technology decisions using ancient criteria.* - Neal Ford.

## Analysing Trade-Offs
*Architecture is the stuff you can’t Google.* (Mark Richards)
The answer to any architecture question is "it depends".   (The answer to any software problem is another layer of abstraction.)

It depends on environment, situation, problem, ..:
- environment
- business drivers,
- company culture
- budgets
- timeframes
- developer skill set
- ...

*There are no right or wrong answers in architecture—only trade-offs.*
*Programmers know the benefits of everything and the trade-offs of nothing. Architects need to understand both* - Rich Hickey creator of Clojure

## Understanding Business Drivers
The architect must understand the business drivers that are required for the success of the system and translating those requirements into architecture characteristics (such as scalability, performance, and availability)

## Balancing Architecture and Hands-On Coding
Architects should code, but should not delay projects by being a bottleneck.  Benefits:
- gain hands-on experience
- workload distributed across team
- develop ability to identify with development team

How to code as a architect if you cannot contribute to the core project (and you want to avoid coding from home):
- develop proof-of-concepts (POCs) - if the architect is stuck trying to decide between two options, develop a working example in each and compare the results, and compare the architectural characteristics.
- tackle technical-debt stories - low-priority stories
- create automation tasks, etc
- participate in code reviews

# 3. Modularity
- *A system is never the sum of its parts. It is the product of the interactions of its parts.*[Dr Russell Ackoff - pioneer  in the field of operations research, systems thinking and management science.](https://en.wikipedia.org/wiki/Russell_L._Ackoff)
- Modularity:  The dictionary defines module as “each of a set of standardized parts or independent units that can be used to construct a more complex structure.” We use modularity to describe a logical grouping of related code, which could be a group of classes in an object-oriented language or functions in a structured or functional language.
  - it is a useful to think of modularity separate from the concept of physical separation forced or implied by a particular platform.
  - coupling
  - loose partitioning : a modular monolith may have loose partitioning since the code-based is shared and breaking integration points (contracts) is easy.  As a result, this loose partitioning results in friction when trying to break the monolith apart.

## Measuring modularity
cohesion: Cohesion refers to what extent the parts of a module should be contained within the same module. In other words, it is a measure of how related the parts are to one another. Ideally, a cohesive module is one where all the parts should be packaged together, because breaking them into smaller pieces would require coupling the parts together via calls between modules to achieve useful results.
- Functional cohesion
- Sequential cohesion
- Communicational cohesion
- Procedural cohesion
- Temporal cohesion
- Logical cohesion
- Coincidental cohesion

coupling:
- tools to analyze coupling in code bases, based in part on graph theory
- Afferent coupling measures the number of incoming connections to a code artifact (component, class, function, and so on).
- Efferent coupling measures the outgoing connections to other code artifacts

Abstractness is the ratio of abstract artifacts (abstract classes, interfaces, and so on) to concrete artifacts (implementation). It represents a measure of abstractness versus implementation. For example, consider a code base with no abstractions, just a huge, single function of code (as in a single main() method). The flip side is a code base with too many abstractions, making it difficult for developers to understand how things wire together (for example, it takes developers a while to figure out what to do with an AbstractSingletonProxyFactoryBean).

Connasence: *Two components are connascent if a change in one would require the other to be modified in order to maintain the overall correctness of the system.* [What Every Programmer Should Know About Object-Oriented Design](https://www.amazon.com/Every-Programmer-Should-Object-Oriented-Design/dp/0932633315).
- Names of methods represents the most common way that code bases are coupled and the most desirable, especially in light of modern refactoring tools that make system-wide name changes trivial.
- hierarchy of connasense (desirable : highly coupled) {name, type, meaning, algorithm, position, execution, timing, value, identity}

Guidelines of using connascence to improve system modularity:
1. Minimize overall connascence by breaking the system into encapsulated elements
1. Minimize any remaining connascence that crosses encapsulation boundaries
1. Maximize the connascence within encapsulation boundaries

![Coupling and Connasence](../Assets/Coupling-Connascence.png)

Problems with using coupling, connascence metrics:
- assesses code at a low-level, versus looking at the overall architecture
- doesn't address fundamental architecture decisions; synchronoous vs asynchronous communications in distributed architecture


# 4. Architecture Characteristics
An architect defines, discovers and analyzes aspects the software must do that isn't directly related to domain functionality; architectural Characteristics. (non-functional requirements - but this term is self-denigrating and has a negative impact).  Use *quality attributes*!  An architecture characteristic meets three criteria triangle:
- specifies a non-domain design consideration  (Explicit)
- influences some structural aspect of the design (Implicit)
- is critical or important to the application success (Architecture Characteristic)

Some Architecture Characteristics

|Category|Characteristic|
|--|--|
|Operational|Availability : RTO, RPO, RLO, ...|
|Operational|Continuity : Disaster recovery|
|Operational|Performance : |
|Operational|Recoverability :|  
|Operational|Reliability/Safety :|
|Operational|Robustness : |
|Operational|Scalability : |
|Operational|Elasticity|
|Structural|Configurability : handle bursts|
|Structural|Extensibility|
|Structural|Installability|
|Structural|Leverageability-reuse|
|Structural|Localization|
|Structural|Maintainability|
|Structural|Portability|
|Structural|Supportability|
|Structural|Upgradeability|
|Cross-Cutting|Accessibility|
|Cross-Cutting|Archivability|
|Cross-Cutting|Authentication|
|Cross-Cutting|Authorization|
|Cross-Cutting|Legal|
|Cross-Cutting|Privacy|
|Cross-Cutting|Security|
|Cross-Cutting|Supportability|
|Cross-Cutting|Usability, Achievability : mobile, ...|
|Cross-Cutting|Compatibility|
|Cross-Cutting|Interoperability|
|Cross-Cutting||

See __[Wikipedia Software Quality Attributes](https://en.wikipedia.org/wiki/List_of_system_quality_attributes). "*Within systems engineering, quality attributes are realized non-functional requirements used to evaluate the performance of a system. These are sometimes named "ilities" after the suffix many of the words share. They are usually Architecturally Significant Requirements that require architects' attention.*" [referenced in Neal Ford's presentation 2017](http://nealford.com/downloads/Evolutionary_Architectures_by_Neal_Ford.pdf)

An evolutionary architecture supports incremental, guided change as a first principle across multiple dimensions. [referenced in Neal Ford's presentation 2017](http://nealford.com/downloads/Evolutionary_Architectures_by_Neal_Ford.pdf)

## Functional suitability
This characteristic represents the degree to which a product or system provides functions that meet stated and implied needs when used under specified conditions. This characteristic is composed of the following subcharacteristics:

__Functional completeness__
Degree to which the set of functions covers all the specified tasks and user objectives.

__Functional correctness__
Degree to which a product or system provides the correct results with the needed degree of precision.

__Functional appropriateness__
Degree to which the functions facilitate the accomplishment of specified tasks and objectives. These are not architecture characteristics but rather the motivational requirements to build the software. This illustrates how thinking about the relationship between architecture characteristics and the problem domain has evolved. We cover this evolution in Chapter 7.


## Ambiguity in Software Architecture:
Leverage concepts in domain-driven design to establish and use a ubiquitous language amongst fellow employees to help ensure fewer term-based misunderstandings.  (IM Controlled Vocabulary)

*Never shoot for the best architecture, but rather the least worst architecture.*
- Iterative: This suggests that architects should strive to design architecture to be as iterative as possible. If you can make changes to the architecture more easily, you can stress less about discovering the exact correct thing in the first attempt.
  - Agile Software Development: One of the most important lessons of Agile software development is the value of iteration; this holds true at all levels of software development, including architecture.

# 5. Identifying Architecture Characteristics  
Domain Concerns:
- time-to-market : agility, testability, deployability
- mergers and acquisitions : interoperability, scalability, adaptability, extensibility
- user satisfaction : performance, availability, fault tolerance, testability, deployability, agility, security
- competitive advantage : agility, testability, deployability, scalability, availability, fault tolerance
- time and budget : simplicity and feasibility

[Architecture Katas](https://archkatas.herokuapp.com/) : A place to practice architecture.  __site seems down__ : tried on Firefox and Chrome.


# 6. Measuring and Governing Architecture Characteristics
Architects deal with a wide variety of architecture characteristics across different aspects of software projects:
 - operational aspects: performance, elasticity, scalability, observability.

 Difficult to measure architecture since:
 - characteristics have vague meanings : performance vs capacity vs elasticity.
 - common definitions and understandings are rare across developers, architects and operations
 - composite characteristics : some characteristics can be de-composed into other ones (e.g. agility -> {modularity, deployability, testability})

## Operational Measures
Many flavours of performance:
- response time (average less than 1sec), but what about outliers and the impact of a few slow response times to the overall system
   - Ux norm of showing user-interface "sign of progress" within 0.5s otherwise user experience diminishes
   - Page Weight budget for faster load times [k-weight budgets](K-weight budgets). A page weight budget is literally a budget of how much a webpage can weigh. Not in grams of course, but in kilobytes or megabytes of files. Specifically, it is the size of files transferred over the internet when a webpage is loaded.  Base definitions on statistical analysis.

## Structural Measures
- Structural characteristics like well-defined modularity.  
- Comprehensive tools for code quality do not exists.  Some tools do exist:
  - Cyclometric Complexity (CC): CC is a code-level metric designed to provide an object measure for the complexity of code, at the function/method, class, or application level, developed by Thomas McCabe, Sr., in 1976.  Applies graph theory to code.
- Some code measures:
  - lines of code,
  - number of parameters,
  - cyclomatic complexity,
  - cyclomatic density,
  - Halstead complexity measures,
  - the maintainability index,
  - first-order density,
  - change cost and
  - core size.
  - see [../Assets/software_design_complexity.pdf]

### Static Code Analysis Tools
|Language|Tool|Comments|
|--|--|--|
|JavaScript|[JSHint](https://jshint.com/)||
|Java|[Crap4J](http://www.crap4j.org/)|CRAP - Change Risk Analysis and Predictions|
|Java|[ArchUnit](https://www.archunit.org/)|[Examples](https://github.com/TNG/ArchUnit-Examples|)

## Process Measures
Some architectural characteristics (e.g., agility) intersect with software development processes.   Agility can be decomponsed into features such as testability, observability and deployability:
- testability: Testability is measurable through code coverage tools for virtually all platforms that assess the completeness of testing
- observability: Observability is tooling or a technical solution that allows teams to actively debug their system. Observability is based on exploring properties and patterns not defined in advance.  [Google - DevOps measurement - Monitoring and Observability](https://cloud.google.com/architecture/devops/devops-measurement-monitoring-and-observability)
- deployability: Teams can measure deployability via a variety of metrics: percentage of successful to failed deployments, how long deployments take, issues/bugs raised by deployments, and a host of others

[See Neal Ford's Presentation with List of Quality Attributes](http://nealford.com/downloads/Evolutionary_Architectures_by_Neal_Ford.pdf)
