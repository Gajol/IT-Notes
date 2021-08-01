

Principles:
Reuse, Buy, Build
- Reuse : internal, partners and GC...

# DevOps
TODO: describe mature curve towards DevOps culture; set vision, strategy, pillars.

[Google - DevOps measurement - Monitoring and Observability](https://cloud.google.com/architecture/devops/devops-measurement-monitoring-and-observability)

- Microservices - see [ 2011 Continuous delivery: reliable software releases through build, test, and deployment automation](https://continuousdelivery.com/)


## Modular Monolith - Steps to Microservices
- see [../Assets/devnexus2016-modular-monoliths.pdf](http://static.codingthearchitecture.com/presentations/devnexus2016-modular-monoliths.pdf)
- well-defined, in-process components is a stepping stone to out-of-process components (i.e.) microservices
- *Choose microservices for the benefits, not because your monolithic codebase is a mess* - [Simon Brown @ Coding the Architecture](https://codingthearchitecture.com/)

Modular Monolith - Components (features):
- high cohesion
- low coupling
- focussed on a business capability
- bonded context or aggregate
- encapsulated data
- substitutable
- composable

From Components to Microservices (benefits of components - above) plus:
- individually deployable
- individually upgradeable
- individually replaceable
- individually scalable
- heterogeneous technology stacks

## Continuous Delivery
###  Principles [Continuous Delivery](https://continuousdelivery.com/principles/)
There are five principles at the heart of continuous delivery:
1. Build quality in
1. Work in small batches
1. Computers perform repetitive tasks, people solve problems
1. Relentlessly pursue continuous improvement
1. Everyone is responsible

Software

Code Quality:
Code Inspection vs Peer Programming

Static Code Analysis:  
Why?  (Archs always say "Why!")
  - help develop understanding of complexity of code and associated costs to code complexity (QA, testing, continuous deployment, ..>).
  - can help QA estimate time to validate software
  - can help management understand scope.
  - CRAP - Change Risk Analysis and Predictions
software_design_complexity.pdf


Style:  
Test-Driven Development : have the accidental (but positive) side effect of generating smaller, less complex methods on average for a given problem domain
Lean Movement : Kaizen; Don’t treat transformation as a project to be embarked on and then completed so we can return to business as usual. The best organizations are those where everybody treats improvement work as an essential part of their daily work, and where nobody is satisfied with the status quo. [Continuous Delivery](https://continuousdelivery.com/principles/)

Approach:
Domain-Driven Design: https://domaindrivendesign.org/ddd-domain-driven-design/
Domain-driven design (less often, domain-driven design, DDD) is a set of principles and schemes aimed at creating optimal systems of objects. The development process boils down to creating software abstractions called domain models. These models include business logic that links the actual conditions of a product’s application to the code.

Techniques:
Event Storming: Event storming is a collaborative brainstorming technique used to identify domain events. Event storming can be used as a precursor to more in-depth domain modeling exercises, to assess the team’s current understanding of the domain, and to identify risks and open questions in an existing domain model. Event storming is described fully in Introducing Event Storming: An Act of Deliberate Collective Learning [Bra17] by Alberto Brandolini. Similar to User Story Mapping - see [O'Reilly Design It! - Event Storming](https://learning.oreilly.com/library/view/design-it/9781680502923/f_0132.xhtml#recipe.event.storming)



# Principles
[ref: ](https://hackernoon.com/5-essential-software-architecture-design-principles-l73x3win)

## SOLID
SOLID Principles:

1. Single-responsibility principle - A class should only have a single responsibility, that is, only changes to one part of the software's specification should be able to affect the specification of the class.

1. Open–closed principle - Software entities ... should be open for extension, but closed for modification.

1. Liskov substitution principle - Objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program. Design by Contract.

1. Interface segregation principle - Many client-specific interfaces are better than one general-purpose interface.

1. Dependency inversion principle - One should "depend upon abstractions, [not] concretions.

## KISS (Keep it simple)
Everything should be made as simple as possible.

## YAGNI (You aren’t gonna need it)
Do not build it until it is needed.

## Opportunity Cost Principle
Opportunity costs define what we have to give up in getting that value. For the highest value, we should always opt for the option that offers maximum benefits at the lowest cost.

Always weigh down different options against one another. Choose a path that adds maximum value to the project.

## Don't repeat yourself (DRY)
Avoid specifying behaviour related to a particular concept in multiple places within an application. As this will lead to a frequent source of errors. At some point, a change in requirements will require changing this behaviour. It's likely that at least one instance of the behaviour will fail to be updated, and the system will behave inconsistently.

Rather than duplicating logic, encapsulate it in a programming construct. Make this construct the single authority over this behaviour, and have any other part of the application that requires this behaviour to use the new construct.


# Perspectives in Architecture
- Technical Architecture
- Data Architecture
- Security Architecture - see Refactoring Databases book??
- Domain Architecture (Business Domain) - see Domain Driven Design books
