EA Book - 
O'Reilly EA Book - https://learning.oreilly.com/library/view/enterprise-architecture-for/9781098121440/ch02.html#what_did_infrastructure_look_like_befor

[Technical Building Blocks:](https://doi.org/10.1007/978-1-4842-8658-6_4)
[Technical Building Blocks - O'Reilly](https://learning.oreilly.com/library/view/technical-building-blocks/9781484286586)

CDXP
IRCC


# Software Engineering Books

https://blog.tryexponent.com/the-top-12-best-software-engineering-books-you-need-to-read/#the-mythical-man-month

https://blog.tryexponent.com/the-top-12-best-software-engineering-books-you-need-to-read/#the-mythical-man-month
Clean Code
The Pragmatic Programmer
The Mythical Man-Month
Design Patterns: Elements of Reusable Object-Oriented Software
Refactoring: Improving the Design of Existing Code
Code Complete: A Practical Handbook of Software Construction
Domain-Driven Design: Tackling Complexity in the Heart of Software
Working Effectively With Legacy Code
Test-Driven Development: By Example
Peopleware: Productive Projects and Teams
Cracking the Coding Interview: 150 Programming Questions and Solutions
Code: The Hidden Language of Computer Hardware and Software



# Mythical Man Month

Brooks Law: 

- asdf

[Brook's Law](https://en.wikipedia.org/wiki/Brooks%27s_law): Brooks' law is an observation about software project management according to which adding manpower to software project that is behind schedule delays it even longer.

[Software Design Patterns](https://en.wikipedia.org/wiki/Software_design_pattern)

[Design Patterns](https://en.wikipedia.org/wiki/Design_Patterns) : Gang of Four Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides, with a foreword by Grady Booch. 


# Programming Styles

## Reactive Programming

Reactive programming is a subset of functional programming. In functional programming, you can't rely on variables you've set previously. Every function you write must stand on its own, receive its own set of inputs and return a result without being influenced by the state of an outer function or class. Functional programming supports Test Driven Development (TDD) very well because every function is a unit that can be tested in isolation. As such, every function you write becomes composable. So, you can mix, match, and combine any function you write with any other and construct a series of calls that yield the result you expect.

Reactive programming adds a twist to functional programming. You no longer deal with pure logic, but an asynchronous data stream that you transform and mold into any shape you need with a composable set of functions. So, when you subscribe to an event in a reactive stream, then you're shifting your coding paradigm from reactive programming to imperative programming.


## Metaprogramming
https://en.wikipedia.org/wiki/Metaprogramming




# Virtualization


[CEPH](https://en.wikipedia.org/wiki/Ceph_(software)) and [Redhat CEPH Storage](https://www.redhat.com/en/technologies/storage/ceph)

Red Hat® Ceph® Storage is an open, massively scalable, simplified storage solution for modern data pipelines. Engineered for data analytics, artificial intelligence/machine learning (AI/ML), and emerging workloads, Red Hat Ceph Storage delivers software-defined storage on your choice of industry-standard hardware.

With Red Hat Ceph Storage, you can:

- Scale your operations and move to market faster.
- Bridge the gaps between application development and data science.
- Gain deeper insights into your data.

# Python

Fluent Python: [Ramalho Luciano. 2022. Fluent Python : Clear Concise and Effective Programming (version 2nd edition). 2nd ed. Sebastopol California: O'Reilly Media. https://www.oreilly.com/library/view/-/9781492056348/.](https://worldcat.org/en/title/1308979387)

[O'Reilly Python Developer Track](https://learning.oreilly.com/courses/python-developer/)


https://www.brianheinold.net/ 
https://www.brianheinold.net/books.html

## doctest 
https://realpython.com/python-doctest/



The Littlest Jupyter Hub
https://tljh.jupyter.org/en/latest/


Jupyter Hub - Amazon
https://tljh.jupyter.org/en/latest/install/amazon.html
t3.small
General Purpose SSD (gp2) : $0.10/GB/mth

On Demand Prices
https://instances.vantage.sh/


Board Game - Pickomino
https://boardgamegeek.com/thread/74781/review-pickomino

t3.small : $0.02/hour


# Science vs Engineering 

https://www.differencebetween.com/difference-between-science-and-vs-engineering/

https://www.indeed.com/career-advice/career-development/science-vs-engineering
https://www.indeed.com/career-advice/career-development/engineering-design-process

Engineering Design Process:
1. Define the Problem
1. Conduct Research 
1. Brainstorm and Conceptualize
1. Create a Prototype
1. Select & Finalize
1. Product Analysis
1. Improve

List the purpose and limitations of the product you want to create.
Research problems that you may encounter.
Brainstorm ideas and identify as many solutions as you can.
Review all ideas and agree on a solution.
Produce a prototype.
Test the prototype and examine the results.
Make improvements and redesigns when necessary.

## Problem Solving Skills 
https://www.indeed.com/career-advice/resumes-cover-letters/problem-solving-skills

Active listening
Analysis
Research
Creativity
Communication
Decision-making
Team-building

# Digital Transformation 


3 key capabilities for a modern app:
Automatable

- The ability to operate as autonomously as possible becomes an imperative as resources become not only more distributed but also mobile. The ability to easily migrate workloads across environments is rapidly approaching. This will introduce the ability to make deployment and policy decisions based on a variety of factors, including real-time performance and cost. This requires that app delivery services can be harnessed to automation pipelines driven by data to reduce the operators needed to maintain the core and enable greater innovation.

Observable

- App delivery services should be natively instrumented to provide the data needed to adjust operating and security policies automatically as traditional methods of monitoring and generating this data add operational overhead that decreases the adaptability ratio. Observability is a key capability to a digital business that must permeate every domain, as the insights needed to drive autonomous capabilities cannot be achieved without sufficiently robust data.

Portable

- Workloads will be distributed across the cloud, data center, edge, and endpoints. App delivery services should be able to be inserted into the delivery path based on a balance of cost and value to the business as measured by the ability to generate desired business outcomes in any environment, irrespective of the underlying infrastructure. Liberating app delivery from its traditional tether to networking and the technical domain in the enterprise architecture opens new operational models through which the enterprise can accelerate digital delivery and align with desired business outcomes if that architecture incorporates these key capabilities.

## Value of Observability and Automation

Metrics, Tracing and Logging

> Architecture represents the significant decisions, where significance is measured by cost to change. — Grady Booch
 
https://en.wikipedia.org/wiki/Digital_transformation
Digital transformation (DX) is the adoption of digital technology by an organization. Common goals for its implementation are to improve efficiency, value or innovation.

# EA 
O'Reilly Video https://learning.oreilly.com/videos/system-design-fundamentals/9780136836513/9780136836513-SDF1_01_01_01/

building blocks, components, modules, services, classes : unit of modulatiry

1. Avoid Functional Decomposition
- based on required functionality (architecture will follow requirements) - and project will fail.  Why is it wrong?
  - once you discuss the right way of doing something then FD will become clear.
  - FD is alway time decomposition A->B->C.   What if B is needed in another system, you have the A & C dependencies, and you cannot reuse components
  - want to lift and shift into another business system 
  - FD always leads to enourmous duplication of functionlaity across systems and sub-systems 
  - high cost to integrate all the smaller components 
  - building blocks grow as more functions add to them 
  - internal complexiities 
  - FD resides to business logic in the client (orchestration within client) 
  - good design minimizers number of points of entries 
  - FD leads to explosion of services, bloating of services 
  - code bases cylcomatic complexity analysis
  - Moore's Cycle: clients stiching services, you pollute the client 
  - 
  
  

# Terms

REPL: read-eval-print loop