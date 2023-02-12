# Gartner - Defining Architecture for IT

Reference: [Gartner 2002 - Defining Architecture for IT - #109081](https://www.gartner.com/document/366198?ref=solrAll&refval=309270187) - Bricks, ...

Modern Reference (__not summarized her__)
- [Gartner 2021 - How to Document Application Architecture - G00750245](https://www.gartner.com/document/4008341) - mentions C4model .


# Definitions
Architecture:
1. Abstraction:  "an abstraction or design of a system, its
structure, components and how they interrelate".  _Generally used to describe a system __after__ it has been establishing_a_learning_agenda_guidance_and_template_201702
2. Guidelines: A family of guidelines (concepts, principles, rules, patterns, interfaces and standards) to use when building a new IT capability.  _Best used to help guide building a system, aiding in the design process and decision making_.  Goal is to develop guidelines for use, and less about systems in place or planned.

? where is the definition "O'Reilly" where architecture is the things you cannot google...


# Gartner -
Architecture includes:
- family of guidelines: help follow consistent rules, standards, reference models and design patterns
- family of system design patterns

Scope of Guidelines
- identify and describe the breadth of the guideline (broad - designing business processes, to narrow specifics of describing encryption encoding)
- 4 levels (at least)
  1. Multienterprise Grid : Containing enterprises
  1. Enterprise Architecture Styles : the business processes and their styles
  1. Design Pattern : containing building blocks called "bricks"
  1. Bricks : core building blocks

  - Multi-enterprise Grid : access, componentization, interoperability, interconnection
  - Enterprise Architecture Styles : ERP, CRM, SCM, and common services (human resources and accounting)
  - Design patterns:  Proven ways to organzing data, processing or communication methods.  
  - Bricks : Core technology building blocks, which we call bricks, are foundational architectural elements, such as operating systems or databases. These bricks are assembled in accordance with design patterns to provide a technology function. Each of these building blocks has a scope of use, tactic, strategy and life cycle in its role within the enterprise architecture. We call the documentation of each core technology and its use an "architectural brick."

  ## Brick Lifecycle
  - Baseline: The current technology or process element in use by an organization
  - Retirement: Technology or process elements targeted for de-investment during the architecture
planning horizon (for example, three years)
  - Containment: Technology or process elements targeted for limited (maintenance or current
commitment) investment during the architecture planning horizon
 - Mainstream: Technology or process elements targeted as the primary deployment/investment
option for new systems or legacy system migration over the architecture planning horizon
 - Emerging: Technology or process element to be evaluated for future integration into the target
architecture (for example, mainstream)

  |Business|Technololgy|
  |--|--|
  |World Commerce|Multi-Enterprise Grid|
  |Value Chain|Application Networks & Common Services|
  |Business Processes|Applications & Infrastructure|
  |Business Process Styles|Architecture Styles|
  ||Patterns|
  ||Bricks|
