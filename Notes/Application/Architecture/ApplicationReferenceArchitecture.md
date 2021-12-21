

- [ ] : Enterprise Reference Architectures
- [ ] : Enterprise Application Reference Architecture
- [ ] : [c4model](https://c4model.com/) - system __c__ontext, __c__container, c__omponent, __c__ode
- [ ] : Scope/Audience : identify scope (Gartner How to Doc App Arch recommendation)
- [ ] - Developer Experience : How can archtecture improve Developer Experience (modern technology, known expecations, concern resolution channels, ...)
- [ ] - Interrogatives What-Date, How-Function, Where-Network, Who-People, When-Time, Why-Motivation. Refer to [DoD AF](https://dodcio.defense.gov/Library/DoD-Architecture-Framework/dodaf20_interrogatives/)
- [ ] - Applicability to Agile - from [Gartner 2021 - How to Document Application Architecture - G00750245](https://www.gartner.com/document/4008341) *Which framework you use matters less than using a framework in the first place. Bear in mind that the more heavyweight and prescriptive the framework is, the less well-suited it is to agile development. If your internal processes call for you to create detailed architecture documentation in the early phases of a development effort, then they’re not agile.*
- [ ] GC Cloud Guidance : NO longer "Cloud First", but Cloud ???
- [ ] GC Digital Standards


Architecture: (from Gartner)
Concepts:,
Principles:
Rules:
Patterns:
Interfaces:
Standards:
Reference Models:

Software / Code Quality: (from Gitlab) : code quality, SAST & container scanning

Architecture: [([from Google)](https://cloud.google.com/blog/products/application-development/5-principles-for-cloud-native-architecture-what-it-is-and-how-to-master-it)
- functional Requirements
- non-functional requirements (some call these quality requirements)
- constraints


@Work:
Directives, Guidelines, Standards, Processes, Prodedures, ...


# ------------------------------
# Reference Architecture Outline:

1. Forward
1. introduction
1. Guidelines
1. Terms
1. References
1. Templates

# Forward
- discuss "agile vs documentation"
- discuss imposter syndrome : review is for collaboration not to pass/fail
  - [Your insecurities aren't what you think they are - Adam Grant](https://www.ted.com/talks/worklife_with_adam_grant_your_insecurities_aren_t_what_you_think_they_are/up-next)
    - Don't only take on tasks where you know you can succeed
    - Understand failing does not translate to being a failure
    - Focus on intrinsic motivation vs extrinsic, don't always go looking for external validation, there will always be someone that takes issue with what you have done
    - Focus on getting better not looking good
# Introduction

# Guidelines

## UX Design
- follow GC User Centric Design
- see deisgn mothers for Ux - on CW - [UK 18F Methods](https://methods.18f.gov/) - referenced by GC standards - [18f technoloyg and design company - USA ](https://18f.gsa.gov/)
- http://uxdesign.uw.edu/
j -[Usability.gov - User Centric Design](https://www.usability.gov/what-and-why/user-centered-design.html)

# Terms
- Application:
- System:
- Solution:

## CNA
- CNA: Cloud-native architecture and technologies are an approach to designing, constructing, and operating workloads that are built in the cloud and take full advantage of the cloud computing model.
- Kubernetes is a platform to manage, host, scale, and deploy containers.
- Containers are a portable way of packaging and running code. They are well suited to the microservices pattern, where each microservice can run in its own container.

# References
## Gartner

## GC
1. [Directive on Service & Digital - Appendix B - Mandatory Procedures](https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32604)
## Wikipedia
1. [View Model](https://en.wikipedia.org/wiki/View_model)
1. [USA Federated Enterprise Architecture](https://en.wikipedia.org/wiki/Federal_enterprise_architecture) : Viewpoints of Enterprise, Information, Functional, Physical, Engineering, Technology.  6 Reference Models : Performance, Business, Data, Application, Infrastructure, Security.
1. [USA NIST Enteprise Architecture Model](https://en.wikipedia.org/wiki/NIST_Enterprise_Architecture_Model) - 1980's no longer relevant

## Documentation

- [Google DORA State of DevOps - 2021](https://services.google.com/fh/files/misc/state-of-devops-2021.pdf)
- [IEEE Software Documentation Issues Unveiled - ISBN 978-1-7281-0869-8 - 2019](https://ieeexplore.ieee.org/document/8811931)
- [IEEE The Value of Software Quality - ISBN 978-1-4799-7198-5 - 2014](https://ieeexplore.ieee.org/document/6958422)

## Standards Bodies
1. [IEEE 42010] - Systems and Software Engineering - Architecture Description (2011 $150)
  - [The Journal of Systems and Software - Overview of Architecture Description - Documenting Decisions - IEEE 42010](http://www.cs.rug.nl/paris/papers/JSS11c.pdf)

## Frameworks
TOGAF
Archimate
Zachman
### USA
[DoD Architecture Framework](https://dodcio.defense.gov/Library/DoD-Architecture-Framework/) - massive framework


# Templates
This section addresses the lack of standards, templates and clear requirements for documentation.

# Goal
- *At the end of the day, I want my artifacts to be enduring. My goal is to create a prescriptive, semi-formal architectural description that can be used as a basis for setting department priorities, parallelizing development, [managing] legacy migration, etc.*
