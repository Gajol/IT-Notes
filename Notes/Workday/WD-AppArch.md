
- [ ] ?? I had another document with this stuff... - done when composing estimates for Sylvie Work Breakdown Structure.  

# Project Management

Workforce Strategy
How to measure success and PM earned-value (Agile Reverse Burn Chart)

## Skills Development
- [USA Learning Agenda](https://usaidlearninglab.org/library/establishing-learning-agenda-and-learning-agenda-template)
- [Establishing a Learning Agenda](https://usaidlearninglab.org/sites/default/files/resource/files/establishing_a_learning_agenda_guidance_and_template_201702.pdf)

# Solution Architecture

## Work Breakdown

Decisions
Legacy Data
1. Discussions on legacy data, and applications to access
1. Design to time-box legacy data
  [ ] - Need the term for vaulting data and application
1. Changes to Legacy Applications to support Read-Only activities.
1. Changes to Legacy Applications to remove user-group access
   1. ASU update to Software Centre
   1. ASU uninstall apps for employees desktosps


# PB Cloud
Identity Management
- Identity Impacts:
  1. Global ID : 9-digit - same ID on high & low
  1. Remove legacy-app "identity aspects" - HRMIS Supervisor, Name, etc .

identity
1. HRMIS changes / isolation / sandboxing / legacy-data
1. Identity AS-IS attributes: ..., TO-BE (Training to affect access, etc)


# Technology Thoughts
Feasibility of business workloads when the main entity is abstracted (PII de-identification).  Mitigations on the business side:
- directory / reverse-directory services
high & low side visualizations (not BI - but visualize data and data model) - aim is this is low-cost alternative to high-side HR applications.   Since, if you need high-side HR apps, why do you invest in a - low-side HR SaaS solution?   
- open-source HR - Orange HRM (propose a tech spike / sprint to show-case this to HR mod team)

- [ ] search "Clean Architecture"

## Identity
What are HRMIS attributes?
- language profile
- role
- gender
- Supervisor
- language qualifications
- visible minority, indigenous, ...  (what is outcome of Queen's issue in 2021-06 where they may/may not have accepted people as indigenous without any investigation?)

### De-Identification  
https://citizenlab.ca/2021/04/canadas-proposed-privacy-law-reforms-are-not-enough-improving-organizational-transparency-and-accountability-bill-c11/

[Bill C-11 2021 43rd Parliament - Consumer Privacy Protection Act (CPPA)](https://parl.ca/DocumentViewer/en/43-2/bill/C-11/first-reading)
- [Michael Geist - CPPA biggest Privacy Overhaul](https://www.michaelgeist.ca/2020/11/canadas-gdpr-moment-why-the-consumer-privacy-protection-act-is-canadas-biggest-privacy-overhaul-in-decades/)
- Ooops - California Consumer Protection Act - CCPA and GPDR.  [CCDA vs GPDR](./Assets/CCPA-GDPR-Chart.pdf)

## Agile
- Propose tech spikes to showcase core system components and business process suitability and understanding (communication and common-understadning goal)
- Agile - common problem is the ocst of uncovering further requirements (refactoring, rearchitecting designs, ...)

# Working Groups
Apparently their are HR WG with Mitch and Melanie F and they are keeping DCI "in-mind"

How would TM / Mitch's 9-box  work?   Text-fields (permitted, training, not-allwed, ...??)

# Technical Components:
DCI: GraphQL, Kafka(?),
eCDS
Low: Workday,
High: ?
Operations:  Low-SIEM, High-SIEM, Low-Monitor, High-Monitor

# Operations Components
CCC : How does user call for help?  How is ticket raised, and how does user receive ticket (high or low side)


# Milestones
Agile - incremental development, define milestones/use-cases...
1. Onboard employee - not recruitment but process once they are "hired" (manual steps in IT (IdM, Access), manual steps on low-HR)
1. Automated Onboard
1. Employee Address Change
1. Employee Name Change
1.  ...

# Work-Breakdown

Testing - QA
- Requirements : What are key areas where testing (QS) is required?
- Analysis : What is the test strategy based on these requirements?   What tools need to be developed?  What are the dependency on other teams for the development of these tools?   
  - For example, think about lessons-learned from previous projects where testing was impacted by the inability to be able to load / query the datasets and trust the quality/integrity of the data in the system.  How can QA pre-populate datasets across the low, high, dci environments?   How can QA validate the update/remove of data in these datasets?
- Development : Dev-teams creating tools, harnesses (APIs, scripts, etc) for testing/operations, ...
- Testing ( )

# Application Architecture


# Risks

## Usability
From NIST SP 800-63C](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-63c.pdf)
[ISO/IEC 9241-11](https://www.iso.org/standard/63500.html) defines usability as the “extent to which a product can be used by specified users to achieve specified goals with effectiveness, efficiency and satisfaction in a specified context of use.” This definition focuses on users, goals, and context of use as key elements necessary for achieving effectiveness, efficiency and satisfaction. A holistic approach considering these key elements is necessary to achieve usability.
- we already have user fatigue with:
  - identity management (different identities across various networks)
  - usability (disparate networks and the need for ECC and/or CDS to move information between systems)
  - inadequate tools to find user's identities in different systems

NIST usability considerations/guideliness with identity and authentication:
- minimize user burder (frustration, learning curve, ...)
- consistent experience between IdP and RP
- communication
- help, training


# Decisions to Make

Architecture
1. Architecture Model:  Modular Monolith -> Microservices
  - Why?  We are not ready for DevOps, Microservices and Containers.   We need to strategically plan for a DevOps workforce.  This requires a culture change (DevOps are empowered to choose and approve technology and deploy this production, compared to our multi-branch approach to technology IT, IM, IS).  Microservices require other toolsets to provide Observability.   Departments are re-organized around a DevOps culture.  ETC...
  - agility -> {modularity, deployability, testability} : We need to have modular, deployable components which can be tested, all in an automated manner.
  - new roles result from a DevOps mantra - (see email to Stevens ************)
1. Synchronous or Asynchronous Communication
1. Queues (ESB, API Gateway) vs Topics (Pub, Sub)
   - ETL, scheduled jobs (find scheduling blog...)
1. Data Model (High, Low)
1. Business Process - Ux High, Ux Low.
1. DCI Models - K-anonymity (reference UK GOV Multi-Party Computation / FHE)
   - Pattern: PCI Payment Card Industry - 2 different business parties (vs our same parties, different data on different networks, one process)
1. Major Components
   - High Side Data Model and API's (Guideline : Expose via APIs)
   - Low Side Data Model and API's
   - integration points

*Never shoot for the best architecture, but rather the least worst architecture.*
- Iterative: This suggests that architects should strive to design architecture to be as iterative as possible. If you can make changes to the architecture more easily, you can stress less about discovering the exact correct thing in the first attempt.
 - Agile Software Development: One of the most important lessons of Agile software development is the value of iteration; this holds true at all levels of software development, including architecture.

- Future Iterations:  API's -> API Gateways -> Pub/Sub Topics
  - How can you move from API's to Pub/Sub?
    - script through data model to publish all existing data.
    - service-layer pub's new events...



  explicit and implicit characteristics (from OReilly Fundamentals of Software Architecture)
  - explicit: appear in requirements
    - no requirements, but assume "DCI" is one, and DG HR "benefits of SaaS"
    - privacy, security,
    - accessibility, usability, ...
    - interoperability (legacy apps, IdAM) ?
  - implicit: derived from experience and knowledge
    - availability
    - security

# Approach - To Think About

"Risk-driven architecture" - [Just enough software architecture - George Fairbanks - 2010](https://www.georgefairbanks.com/book/ - ISBN 978-0-9846181-0-1
- risk-driven architecture : No meticulous designs when risks are small, nor excuse for sloppy designs when risks threaten project success
- democratizes architecture - make architecture relevant to software developers (not just architects)
- cultavates *declarative* language - The difference between procedure knowledge (knowing how) and declarative knowledge (knowing why)
- emphasises engineering - what developers do to ensure the system works - it's engineering - principled design tradeoffs.

# To Read / Think About

Building Data Pipeline - kinda dull, but has a DW and the key aspects - https://readwrite.com/2021/07/27/building-a-big-data-pipeline-the-right-way/
