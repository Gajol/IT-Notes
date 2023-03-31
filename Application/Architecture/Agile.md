
# Agile

## [Agile Manifesto](https://agilemanifesto.org/)

Manifesto for Agile Software Development We are uncovering better ways of developing
software by doing it and helping others do it. Through this work we have come to value:

- Individuals and interactions over processes and tools
- Working software over comprehensive documentation
- Customer collaboration over contract negotiation
- Responding to change over following a plan

That is, while there is value in the items on the right, we value the items on the left more.   For example, Agile does not say do not document development.   [reference Salesforce podcast Why Writing Matters for Engineers](https://www.heroku.com/podcasts/codeish/118-why-writing-matters-for-engineers)

## Agile Principles

A simplified view of agile principles is [reference [Agile Deliver GOV UK](https://www.gov.uk/service-manual/agile-delivery/core-principles-agile)]:

- focus on user needs (human centred design)
- delivery iteratively
- keep improving how your team works
- fail fast and learn quickly[^RAT]
- keep planning

From the [Agile Manifesto's Principles](http://agilemanifesto.org/principles.html)

- **Continuous Delivery**: Our highest priority is to satisfy the customer through early and continuous delivery of valuable software.

- **Welcome Change**: Welcome changing requirements, even late in development. Agile processes harness change for the customer's competitive advantage.
- **Frequent Delivery**: Deliver working software frequently, from a couple of weeks to a couple of months, with a preference to the shorter timescale.
- **Business & Development**: Business people and developers must work together daily throughout the project.
- **Trust**: Build projects around motivated individuals. Give them the environment and support they need, and trust them to get the job done.
- **Face-to-Face**: The most efficient and effective method of conveying information to and within a development team is face-to-face conversation.
- **Working Software Focus**: Working software is the primary measure of progress.
- **Healthy & Sustainable Rate**: Agile processes promote sustainable development. The sponsors, developers, and users should be able to maintain a constant pace indefinitely.
- **Design Excellence**: Continuous attention to technical excellence and good design enhances agility.
- **Simplicity**: Simplicity--the art of maximizing the amount of work not done--is essential.
- **Self-Organizing Teams**: The best architectures, requirements, and designs emerge from self-organizing teams.
- **Retrospectives**: At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behaviour accordingly.

From the GC Agile Principles (reference [Agile in the Public Service](https://busrides-trajetsenbus.csps-efpc.gc.ca/en/ep-93-en)): 4 Agile Values:

1. Individuals and interactions over processes and tools.
2. Working software over comprehensive documentation.
3. Customer collaboration over contract negotiation.
4. Responding to change over following a plan.

## Agile Frameworks

- Scrum - [Scrum Definition](https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-US.pdf#zoom=100):
  Scrum is a lightweight framework that helps people, teams and organizations generate value through adaptive solutions for complex problems.  Roles: Product Owner, Scrum Master, Developers.
  In a nutshell, Scrum requires a Scrum Master to foster an environment where:
  1. A Product Owner orders the work for a complex problem into a Product Backlog.
  2. The Scrum Team turns a selection of the work into an Increment of value during a Sprint.
  3. The Scrum Team and its stakeholders inspect the results and adjust for the next Sprint.
  4. Repeat

1. 

## Agile Practices
from LEAN:
- short cycles
- non-negotiable quality
- regular retrospectives
- pulling work from a backlog

## Agile Terms
- MVP - Minimal Viable Product
- MVE - Minimal Viable Experiment
- MMF - Minimal Marketable Feature
- RAT - Riskiest Assumption Test[^RAT]

## Agile Methods

The most popular agile methods are scrum, kanban and lean; with scrum being the most widely used [[reference](https://www.gov.uk/service-manual/agile-delivery/agile-methodologies)].

### Scrum 

Scrum's origins are in software development.  Scrum is a framework utilizing an agile mindset for developing, delivering, and sustaining products in a complex environment,[1] with an initial emphasis on software development, although it has been used in other fields including research, sales, marketing and advanced technologies. 

- Scrum teams commit to completing an increment of work which is usually shippable (a sprint)
- The goal is to create learning loops, to gather and integrate user feedback
- Scrum has identified roles (unlike Kanban) including product owner, scrum master, development team

- [The Scrum Guide](https://www.scrum.org/resources/scrum-guide)d
  - in 2011 the term chicken and pigs was removed from the guide.  However, the concept of the roles of members within a scrum still follow the concepts exposed by this metaphor. [The Scrum Guide - Onedrie](https://1drv.ms/b/s!AkwXSmFk-_xpgoZ4uAsgORLY1W1rLw?e=FFnaUN)

Pillars: transparency, inspection and adaptation
- transparency: process and work must be visible to those doing the work, and those receive the work
- inspection: the Scrum artifacts and the progress toward agreed goals must be inspected frequently. (5 events???)
- adaptation: if process aspects deviate outside limits or the product is unacceptable the process or materials must be adjusted

Sprint: four formal events for inspection and adaptation in each sprint; (1) Daily Scrum, Sprint Review, Sprint Retrospective, Scrum Artifacts.

Scrum values: Commitment, Focus, Openness, Respect, Courage
Scrum team: Scrum Master, one Product Owner, Developers  (no hierarchy on the team)

- cross-functional: all the skills (and trust / access / authority / empowered ) to create value
- responsible for all product related activities {collaboration, verification, maintenance, operation, experimentation, research & development, etc }
  - Developers: create a plan for the Sprint, the Sprint Backlog.  Quality by adhering to DoD (Definition of Done), adapt plan each day to Sprint Goal, hold each other account as professionals.
  - Product Owner: Developing and communicating Product Goal, creating and communicating Backlog Items, Ordering Product Backlog items, ensuring Product Backlog is transparent, visible and understood.
  - Scrum Master: establish Scrum (establish Developers with authority), accountable for Scrum Team's effectiveness, focus team on high-value increments, remove blocks/impediments, ensure Scrum events are positive, productive and timeboxed.

  Increment:  The moment a Product Backlog item meets the Definition of Done, an Increment is born.  

### Kanban

Kanban is a way of visualising and improving your current working practices so that work flows through a system quickly.  Toyota created Kanban to focus on reducing waste and improving quality.  

Kanban establishes work in progress (WIP) limits.  Kanban visualizes work and maximizes efficiency (flow).  

- Kanban teams focus on reducing the time the project takes a user-story to go from start to finish.
- Kanban is a continuous flow (there is no sprint cycle)

Kanban helps: 

1. deliver value quickly and predictably
2. get early feedback to understand if product or service is meeting user needs

### Lean

Lean software development, like Kanban, is adapted from lean manufacturing principles like the Toyota Production System.  Lean's aim to have team focus on [reference - [The Lean Mindset](http://www.poppendieck.com/)]:

- reducing waste
- delivering quickly
- learning and improving
- using evidence and data to make decisions

### Choosing an Agile Method

| Scenario                                                     | Tool           |
| ------------------------------------------------------------ | -------------- |
| Buidling a new product or service                            | Scrum          |
| Enhancing an existing feature                                | Scrum          |
| Adding new features in each sprint                           | Scrum          |
| Find bottlenecks in processes                                | Kanban         |
| Control the amount of work you are doing, or, reduce context switching with WIP | Kanban         |
| Predict output based on actual delivery                      | Kanban         |
| Learning as quickly as possible                              | Lean           |
| Eliminate Waste and Measure Quality                          | Lean Six Sigma |



## Agile Tools and Techniques

From the [GOV UK Agile tools and techniques](https://www.gov.uk/service-manual/agile-delivery/agile-tools-techniques):

- daily stand-up
- sprint planning meetings
- team review (show and tell)
- retrospective meetings
- end-of-phase retrospectives  
- user stories
- the backlog
- team walls 

# SAFe - Scaled Agile Framework

The Scaled Agile Framework for Enterprise (SAFe) is agile @ Enterprise Scale.   SAFe is combination of:

- agile software development
- lean product development
- systems thinking

References:

- [Scaled Agile Framework - Enterprise (SAFe)](https://www.scaledagileframework.com/safe-lean-agile-principles/)
- [Atlassian SAFe Definition](https://www.atlassian.com/agile/agile-at-scale/what-is-safe) - three primary bodies of knowledge: agile software development, lean product development, and systems thinking.  Note, large companies like Spotify do not follow SAFe.  

### SAFe Principles

1. Take an economic view
1. Apply systems thinking
1. Assume variability; preserve options
1. Build incrementally with fast, integrated learning cycles
1. Base milestones on objective evaluation of working systems
1. Visualize and limit Work In Progress (WIP), reduce batch sizes and manage queue lengths  
1. Apply cadence, synchronize with cross-domain planning
1. Unlock the intrinsic motivation of knowledge workers
1. Decentralize decision-making
1. Organize around value

# Lean Six Sigma

[Lean Six Sigma](https://en.wikipedia.org/wiki/Lean_Six_Sigma) is a method that relies on a collaborative team effort to improve performance by systematically removing waste and reducing variation.

## Lean
The study of Toyota's Lean manufacturing in the 1940's led to the Lean Management methodology.  Toyota developed this methodology to eliminate all non-value adding activities from the work process.

Values: Lean management methodology has three values:
1. deliver from your customer's perspective
1. eliminate all workflow waste
1. continuously improve

Pillars: Lean's pillars are:
1. respect for all people
1. continuous learning and improvement

## Six Sigma (Motorola)
Six Sigma is from the 1980's and was established by Motorola's manufacturing business.  Primary aims were to:
1. identify and reduce process defects
1. keep a low variability of the manufacturing process

The phases of Six Sigma are [DMAIC](https://asq.org/quality-resources/dmaic):
1. Define: Define the problem, improvement activity, opportunity for improvement, the project goals, and customer (internal and external) requirements.
1. Measure: Measure process performance
1. Analyze: Analyze the process to determine root causes of variation and poor performance (defects).  Root-cause Analysis (RCA) and Failure-mode and effects analysis (FMEA) are common approaches.
1. Improve: Improve process performance by addressing and eliminating the root causes.  Design of Experiments (DOE) is an applied-statistical approach, and Kaizen for smaller changes empowering the people to innovate with ideas and stimulate motivation.
1. Control: Control the improved process and future process performance.  Quality Control Plan (QCP), 5S, Statistical Process Control (SPC) and Mistake Proofing.

There are synergies with ISO 9000 process-based quality management system; where ISO 9000 also defines the measure, analyze and improve steps.  

Motorola was the 1998 recipient of [MBNQA award 1998](https://en.wikipedia.org/wiki/Malcolm_Baldrige_National_Quality_Award#Baldrige_Award_Recipients).  


## Overview of Lean Six Sigma
Lean Six Sigma combines lean manufacturing/lean enterprise and Six Sigma to eliminate the eight kinds of waste (muda):
- Defects: the effort for inspecting and fixing defects
- Over-Production: production ahead of demand
- Waiting: waiting for the next production step
- Non-Utilized Talent: Waste of human potential cause usually when management is separated from employees.
- Transportation: moving products that are not actually required to perform the processing
- Inventory: all components, WIP, and finished product not being processed
- Motion: people or equipment moving more than is required
- Extra-Processing: resulting from poor tool or product design creating activity
-*(muda) is Japanese for "futility; uselessness; wastefulness"*

![Lean Waste - *muda*](./Assets/Read Technical leadership and the balance with agility _ Leanpub)

__Caution__: 

> "*Lean Six Sigma will be the largest continuous improvement and quality initiative in Nortel’s 110-year history.*” — Mike Zafirovski, President and CEO of Nortel [ref: IsixSigma](https://www.isixsigma.com/community/blogs/ellen-bovarnick-nortel-networks/).  

Lean Six Sigma learning Points: [[ref: IsixSigma](https://www.isixsigma.com/community/blogs/ellen-bovarnick-nortel-networks/)].  
1. Lean Six Sigma is powerful in improving the pace and quality of innovation
1. Focus on facts and data effectively neutralizes historical bias and emotional attachments
1. Involve product developers
1. Address known pain points, build credibility quickly
1. Consider the whole system first then customize to meet business and customer needs


Limitations of early Lean Six Sigma:
1. Still not appropriate for all problems
1. Does not incorporate routine problem solving
1. Does not provide a complete quality management system
1. Cannot efficiently handle large, complex, and unstructured problems
1. Does not take advantage of Big Data analytics
1. Does not address modern risk management issues

Lean Six Sigma Techniques:
1. __Kanban for Workflow Management__:  Visualization of work and limiting the work in progress (WIP).  Helps maintain efficiency and improve continuously.
1. __Kaizen__: A cultural shift towards self-development and continuous improvement
1. __Value Stream Mapping__ to analyse and optimize your process development steps
1. __5S Model__ for workplace optimization.

5S Model : [reference](https://kanbanize.com/lean-management/value-waste/what-is-5s-lean)
1. **Sort** : Separate required tools, materials, and instructions from those that are not needed. Remove everything that is not necessary from the work area.
1. **Set in Order** : Sort and organize all tools, equipment, files, data, material, and resources for quick, easy location, and use. Label all storage locations, tools, and equipment.
1. **Shine** : Set standards for cleanliness. Clean and remove all trash, grease, and dirt. Cleanliness provides a safe workplace and makes potential problems noticeable (e.g., equipment leaks, loose parts, loose paperwork, or materials).
1. **Standardize** : Engage the workforce to systematically perform steps 1, 2, and 3 above daily to maintain the workplace in perfect condition as a standard process. Establish schedules and set expectations for adherence.
1. **Sustain** : Build organizational commitment so that 5S becomes one of your organizational values so that everyone can turn it into a habit.

### Kanban

Kanban:  (Japanese: 看板, meaning signboard or billboard) is a lean method to manage and improve work across human systems. This approach aims to manage work by balancing demands with available capacity, and by improving the handling of system-level bottlenecks. [[Kanban - Wikipedia](https://en.wikipedia.org/wiki/Kanban_(development))]

#### Kanban - Metrics
Kanban helps with two (2) primary practices are to visualize your work and to limit work in progress (WIP).  Kanban metrics help manage and forecast work:
1. Velocity: Team velocity defines how many tasks a team can deliver in a given period of time, for example a week or iteration.
1. Time (Lead & Cycle): Lead and Cycle time defines the average time it takes to complete a task.
1. Prediction: Actionable Agile metrics use cycle time to better predict when each project item is going to be finished. [recent: 2015 concept]

### Six Sigma, Jack Welch and General Electric

An interesting article titled, [Jack Welch - Managerial Genius Who Made One Disastrous Mistake](https://www.forbes.com/sites/steveforbes/2020/03/03/jack-welch-managerial-genius-who-made-one-disastrous-mistake/?sh=57d2f7843749) is interesting.   The key mistake was who Jack Welch picked as his successor. GE's successor to Jack Welch lost a lot of money in the 2008 economic crises, and, GE did not adapt to high-tech.  In earlier market changes GE leveraged the market changes.  For example,  GE took advantage new financial instruments to transition from industrialization to financial markets with GE Capital.

Jack Welch's [Six Secretes to Success at Work](https://jackwelch.strayer.edu/winning/six-secrets-work-success/):
1. Find Where Your Work Passion and Skills Intersect
1. Make Your Boss Smarter
1. Know When to Leave a Bad Boss
1. Give Yourself a Deadline
1. Don’t Fear Failure
1. Never Stop Reinventing Yourself

## Lean Product Development
Lean at its outset was aimed at production.  Lean has been adopted for product development.   Product development's purpose is to design new products to improve the lives of customers.

Lean product development is more complex as value is hard to discern, and the effect of work may be separated by time and space.  Lean product development concepts include [reference Wikipedia](https://en.wikipedia.org/wiki/Lean_product_development#cite_note-8)]:
- Creation of re-usable knowledge. Knowledge is created and maintained so that it can be leveraged for successive products or iterations. [Knowledge Economy - Wikipedia](https://en.wikipedia.org/wiki/Knowledge_economy)
- Set-based concurrent engineering. Different stages of product development run simultaneously rather than consecutively to decrease development time, improve productivity, and reduce costs.
- Teams of responsible experts. Lean product development organizations develop cross-functional teams and reward competence building in teams and individuals.
- Cadence and pull. Managers of lean product development organizations develop autonomous teams, where engineers plan their own work and work their own plans.
- Visual management. Visualization is a main enabler of lean product development.
- Entrepreneurial system designer. The lean product development organization makes one person responsible for the engineering and aesthetic design, and market and business success, of the product.
- Flow management (see summary of the [Principles of product development - Flow - slideshare](https://www.slideshare.net/SebastianRadics/the-principles-of-product-development-flow-a-summary)).   Book [*The principles of product development flow : Lean Product Development - Donald Reinertsen*](https://worldcat.org/en/title/1319412387).
  - Achieve Flow by emphasising small batch transfers (reducing batch size accelerates feedback), rapid feedback, limited work in progress (WIP)
  - Need to understand the Cost of Delay to evaluate the cost of queues, value of excess capacity, benefit of smaller batch sizes and the vlaue of variability reduction. SJF (Shortest Job First).

### Agile Flow Metrics

- cycle time: the elapsed time (start to finish) for a work item
- work in progress: the number of started, unfinished work items
- throughput: the number of items finished in a period of time
- work item age: the elapsed time since a work item started

Atlassian's Jira, was not designed orginally to measure product development flow.  However, Atlassian proviides guidance on how to use Jira to measure Flow.  See ["Measuring the Flow of Value Using Flow Metrics"](https://community.atlassian.com/t5/Jira-Align-articles/Measuring-the-Flow-of-Value-Using-Flow-Metrics/ba-p/1490534).  Jira plugins like [Big Picture](https://bigpicture.one/jira-bigpicture-reports/) might provide easier to consume flow insights.

- flow velocity: the number of units of value that are completed in a specified time (visible in [Jira Work Tree](https://help.jiraalign.com/hc/en-us/articles/115004899168-10X-Work-Tree-Top-Down-View-from-Epic-) report)

- flow time: the elapsed time from start of work on a unit of value to when it is released to the customer. (visible in [Jira Process Step Time](https://help.jiraalign.com/hc/en-us/articles/115001314774-10X-Process-Step-Cycle-Time) report)
- flow load : measures the number of units of value in progress (known as the work in progress - WIP) - (visible in the [Jira Backlog - Kanban State View](https://help.jiraalign.com/hc/en-us/articles/115000154693-10X-Manage-the-Backlog))
- flow efficiency: measures proportion of time units of value are worked on compared to their flow time.   Low values indicate bottlenecks.

An agile team that focuses on flow prioritizes managing the queue.  Sprints are prioritized by weighted shortest job first (WSJF) (duration * cost of delay).

# Baldridge Excellence Framework
- supported by USA Patient Safety and Quality Improvement Act (2005)
- awarded by USA president for quality
- seven aspects of organizational management and performance
  1. Leadership
  1. Strategy
  1. Customers
  1. Measurement, analysis, and knowledge management
  1. Workforce
  1. Operations
  1. Results

- Motorola received the aware in 1988 for Six Sigma.  
- [NIST Baldridge Excellence Framework](https://www.nist.gov/baldrige/publications/baldrige-excellence-framework)
- [Malcolm Baldrige National Quality Award](https://en.wikipedia.org/wiki/Malcolm_Baldrige_National_Quality_Award#Baldrige_Award_Recipients)   
- [American Society for Quality](https://asq.org/quality-resources/malcolm-baldrige-national-quality-award).
- [Baldridge Excellence Builder](https://www.nist.gov/system/files/documents/2019/02/06/2019-2020-baldrige-excellence-builder.pdf) - [Builder - Onedrive](https://1drv.ms/b/s!AkwXSmFk-_xpgoZ8mHXY4xq9-z1b5w?e=7QAOKU)

Organizations that apply for the MBNQA are judged by an independent board of examiners. Recipients are selected based on achievement and improvement in seven areas, known as the Baldrige Criteria for Performance Excellence:
- __Leadership__: How upper management leads the organization, and how the organization leads within the community.
- __Strategy__: How the organization establishes and plans to implement strategic directions.
- __Customers__: How the organization builds and maintains strong, lasting relationships with customers.
- __Measurement, analysis, and knowledge management__: How the organization uses data to support key processes and manage performance.
- __Workforce__: How the organization empowers and involves its workforce.
- __Operations__: How the organization designs, manages, and improves key processes.
- __Results__: How the organization performs in terms of customer satisfaction, finances, human resources, supplier and partner performance, operations, governance and social responsibility, and how the organization compares to its competitors.

# Quality Standards
ISO 9000 - see [ASQ Standards](https://asq.org/quality-resources/standards-101)
The ISO 9000 family of standards addresses quality management. This means what the organization does to fulfill:
—the customer's quality requirements, and
—applicable regulatory requirements, while aiming to
—enhance customer satisfaction, and
—achieve continual improvement of its performance in pursuit of these objectives.

The ISO 14000 family addresses environmental management. This means what the organization does to:
—minimize harmful effects on the environment caused by its activities, and to
—achieve continual improvement of its environmental performance

# History TQM : Total Quality Management
[History of TQM](https://asq.org/quality-resources/total-quality-management/tqm-history)
- 1920: Scientific Management Principles
- 1930 - Shewhard develops SQC methods
- 1946 - ASQ - American Society fo Quality
- 1950 - TQM and Quality concepts developed
- 1968 - Quality Management Systems
- Today - Quality standards and QMS

[Quality Management History - OneDrive ../Quality](https://1drv.ms/b/s!AkwXSmFk-_xpgoc1Z6U8wcwQnoXv4w?e=F1xRxA))


## W. Deming 14-Points

1. Create constancy of purpose for improving products and services.
1. Adopt the new philosophy.
1. Cease dependence on inspection to achieve quality.
1. End the practice of awarding business on price alone; instead, minimize total cost by working with a single supplier.
1. Improve constantly and forever every process for planning, production and service.
1. Institute training on the job.
1. Adopt and institute leadership.
1. Drive out fear.
1. Break down barriers between staff areas.
1. Eliminate slogans, exhortations and targets for the workforce.
1. Eliminate numerical quotas for the workforce and numerical goals for management.
1. Remove barriers that rob people of pride of workmanship, and eliminate the annual rating or merit system.
1. Institute a vigorous program of education and self-improvement for everyone.
1. Put everybody in the company to work accomplishing the transformation.

A video of Deming describing these 14-points is available on [YouTube](https://www.youtube.com/watch?v=tsF-8u-V4j4&t=400s&ab_channel=DemingInstitute).   The video ends with Deming sharing a joke; *Murphy was an optimist...*

## Deming Cycle : Plan-Do-Check-Act (PDCA)

Use the PDCA cycle when:
- Starting a new improvement project
- Developing a new or improved design of a process, product, or service
- Defining a repetitive work process
- Planning data collection and analysis in order to verify and prioritize problems or root causes
- Implementing any change
- Working toward continuous improvement

The Plan-do-check-act Procedure
- Plan: Recognize an opportunity and plan a change.
- Do: Test the change. Carry out a small-scale study.
- Check: Review the test, analyze the results, and identify what you’ve learned.
- Act: Take action based on what you learned in the study step.

If the change did not work, go through the cycle again with a different plan. If you were successful, incorporate what you learned from the test into wider changes. Use what you learned to plan new improvements, beginning the cycle again.


# TODO
[ ]: Add Juran from : https://github.com/Gajol/Eloquent-JavaScript/blob/main/Notes/Application/Architecture/SystemsThinking.md

# References
- [Snee, Ronald D., and Roger Wesley Hoerl. Leading Holistic Improvement with Lean Six Sigma 2.0. Second edition. New York: Pearson Education, Inc, 2018.](http://www.worldcat.org/isbn/9780134299662)
- [Software Development Methodologies - Wikipedia](https://en.wikipedia.org/wiki/List_of_software_development_philosophies)
    - Agile, XP, RAD, RUP, Scrum, ..
- [Martin, Karen, and Mike Osterling. Value Stream Mapping: How to Visualize Work and Align Leadership for Organizational Transformation. New York: McGraw-Hill, 2014.](http://www.worldcat.org/isbn/9780071828918)
- Allen Holub's [Agility & Systems Thinking - Essential Reading](https://holub.com/reading/) : Identifies relationships to systems thinking with references to books and articles.
- [Reinertsen, Donald G. The Principles of Product Development Flow: Second Generation Lean Product Development. Redondo Beach, California: Celeritas Publishing, 2009](www.worldcat.org/isbn/978-1-935401-00-1): Discusses 175 principles across eight (8) themes.   Principles are backed up with mathematical equations marginal profit, Little's law, Markov processes, probability theory.  Identifies cardinal sins in product development.
1. Failure to correctly quantify economics.
1. Blindness to queues.
1. Worship of efficiency.
1. Hostility to variability.
1. Worship of conformance.
1. Institutionalization of large batch sizes.
1. Underutilization of cadence.
1. Managing timelines instead of queues.
1. Absence of WIP constraints.
1. Inflexibility.
1. Noneconomic flow control.
1. Centralized control.


# Continuous Improvement - 1939 - The Shehart Cycle
- [Oventhal - Innovation and Problem Solving](https://www.oventhal.com/blog/2019/2/13/the-evolution-of-the-shewhart-cycle)
- [OneDrive - The Shewhart Cycle](https://1drv.ms/b/s!AkwXSmFk-_xpgqsKCxNrZzYXFMdstA?e=ucedXf)

The PDCA cycle was based on the Shewhart Cycle.

Walter A. Shewhart, a noted statistician working at Bell Labs to develop the national telephone system. He created a three part cycle in 1939. This three-part cycle was a systematic process for continuous improvement. Shewhart wrote:

> These three steps must go in a circle instead of in a straight line, as shown . . . It may be helpful to think of the three steps in the mass production process as steps in the scientific method. In this sense, specification, production, and inspection correspond respectively to making a hypothesis, carrying out an experiment, and testing the hypothesis. The three steps constitute a dynamic scientific process of acquiring knowledge.

> These three steps must go in a circle instead of in a straight line, as shown . . . It may be helpful to think of the three steps in the mass production process as steps in the scientific method. In this sense, specification, production, and inspection correspond respectively to making a hypothesis, carrying out an experiment, and testing the hypothesis. The three steps constitute a dynamic scientific process of acquiring knowledge.

The Shewhart Cycle is: *Specification -> Production -> Inspection*.



[^RAT]: Riskiest Assumption Test, *what is the smallest experiment you can do to test your biggest assumption?* — Rik Higham Product Manager. How can we maximize learning with the minimum investment of resources (people, time and money)?  The Riskiest Assumption Canvas is often used to identify risks and assumptions.  The canvas is based on risk management concepts catalog risks, impact and probability, research/experiment to validate risks. [Reference [O'Reilly - Design a Better Business - Tool - Riskiest Assumption Canvas](https://learning.oreilly.com/library/view/design-a-better/9781119272113/c07-sec05.xhtml)]. See also [clutch.co RAT vs MVP difference](https://clutch.co/app-developers/resources/what-is-riskiest-assumption-test)
