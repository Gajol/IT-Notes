# DORA Report Webcast 2021
- [Google DevOps Webinar : GitLab DevOps](https://learn.gitlab.com/gtm-devops-consideration1-mgr/dora-report-webcast)
- [DevOps Considerations - Manager - Gitlab Webinar](https://learn.gitlab.com/gtm-devops-consideration1-mgr/dora-report-webcast).   Webinar of the metrics report.
  - Quality Documentation: Reliability & SRE practices and Security and Security in Supply Chain have a direct relationship to business performance.  Quality documentation plays a key role in key ways to up-levelling your business performance.  
  - Security : Shift-Left.  Integrate security in every stage of software chain.
  - App Modernization : [Container images, not all belongs in an app-container](https://youtu.be/bZOTj4iWX_4?t=1990).  Container orchestration (adopted kubernetes)
  - GitOps : more advanced deployment option.
- [GitLab Unified DevOps Platform](https://learn.gitlab.com/gtm-devops-consideration1-mgr/ten-key-devops-platf)
  - powerful collaboration : agile planning, version control, code review
  - multi-cloud ci/cd : deploy anywhere
  - security & monitoring : get security results on every code change
  - open source : everyone can contribute


[GitLab is GitHub’s largest competitor](https://www.tomshardware.com/news/alphabet-gitlab-microsoft-github-acquisition,37823.html).
- [Gitlabs comparison](https://about.gitlab.com/devops-tools/github-vs-gitlab/)

- [DevOps - How to Improve - Google Cloud](https://www.devops-research.com/models.html) - good graph with technical capabilities model

## Frank Ford from Insurance company

Before:

- Java, custom build scripts, multi-tech, multi-repo, maintained by DataCenter.  
- Do things by tickets,
- Deployment, write custom instructions on ticket and hand-off to change management team...

Problem
- hard to maintain big build scripts.  People did local builds from their IDE.
- code not checked in, no backups
- no way to audit code going to production

How to fix:
- bottom up : grass-roots do from bottom up
- top down : here's how to do business...
- standardize VCS (version control system) - Git, plus TFS migrated to Git
- adopt CI/CD pipelines - does not have to be all or nothing.   Start with CI and grow into CD.  Put artefact into repo (Jfrog, ..) and have another process to handle that (i.e., handle deployment later)

More Advanced
- application modernization
  - containers : make life easier. not necessarily one size fits all
  - container orchestration - kubernetes
- GitOps : more advanced deployment techniques.  (Do not allow people access to technology - GitOps allows insight...)

Cloud (the next iteration of the above)
- choose single cloud or multi-cloud
- hybrid cloud (things that must remain on-premise)
- infrastructure-as-code : terraform, ... (git be the single source of truth for a lot of deployments)

Automate, Automate
- manual tasks introduce opportunities for error
- automate builds, deployments, infrastructure provisioning
- reduce opportunity for error

## GitLab :
How GitLab fits into DevOps

- Discrepancy between low-performers and high-performers (organizations)
- Evolution in GitLab from teams trying to implement DevOps and best-practices.  
- Struggling with tooling, understanding how the tools fit together, and getting the tools to work together.

Move from "bring your own tools" of a DIY DevOps stitching together the tools to a DevOps platforms : Elite teams are simplifying the tools using a DevOps platform - increasing the frequency of testing and deploy.

Gitlab is the DevOps platform.  Idea of what to build, building secure and tested code, and deploying to production.
- elite performers mature DevOps practices using GitLab

DORA quick check cloud.google.com/DevOps (DORA quick check) - quick questions.

## SRE versus Availability
- Availability is a subset of Reliability.  There are many facets or reliability you can measure in addition to availability. This year's GitLab looked at:
- Do you define SLA for SRE
- Do you have error budgets for developers.

# DevOps - DZzone

[DZone - How to Become a DevOps Engineer](https://dzone.com/articles/how-to-become-devops-engineer) -

*A __weak__ article but at least has some categories to start getting organized (seems to be an IBM focused view)*

Plan, Develop (Code/Build), Test, Maintain, Document.   

|Skills Required|Description|Tools|
|--|--|--|
|Infrastructure management|A key aspect of DevOps is IaC (Infrastructure as a Code). In order to have the benefits of configurable infrastructure, one must be able to make changes, test the performance, and maintain the infrastructure in different environments. Puppet, Chef, Ansible, Terraform|
|Cloud|Cloud has replaced the need for physical infrastructure. As all the software needs are now being managed via various cloud services, it is important to know how to navigate and manage cloud needs.|AWS, Azure, GCP, IBM|
|Continuous Integration |Changes are rapidly added by development teams and tested to be pushed further for the users. This helps introduce new changes based on feedback and user needs faster.|Jenkins, GitLab, Bamboo|
|Deployment Automation |The DevOps model promotes automation. Automating pipelines for scheduled deployments is one such task.|Jenkins, Octupus Deploy, DeployBot|
|Maintenance and Troubleshooting |Maintaining the application infrastructure for a smooth, cost-effective performance is as important as adding new features.|Jenkins, Grafana, Splunk, Datadog|
|Security |With the use of cloud and other DevOps tools, an important aspect of modern-day applications is Security. This gave way to the rise of DevSecOps||
|Orchestration and Containers|Various methods are used to complete the integration of an application. Secure configuration and communication between different services is an important skill for a DevOps Engineer.|Kubernetes, Docker, Swarm|

# DevOps Best Practices for Enterprise
Reference [BMC - DevOps Best Practices for Enterprise Architecture - 2016](https://www.bmc.com/blogs/devops-best-practices-enterprise-architecture/)
- agile principles for development and ops
- [shift left testing](https://www.bmc.com/blogs/what-is-shift-left-shift-left-testing-explained/) (recall article is 2016 - in 2021 shift left refers to shifting security left - DevSecOps).   The shifting left of testing improves release cycle planning, allows more predictability on product quality and reliability
- increase re-usability : a well-defined technical roadmap and a single code-repository.
- dev and ops work together


## DevOps Practices
- Continuous Integration
- Continuous deployment
- Continuous Testing
- Continuous Monitoring : monitor for performance, - defects, security and compliance (compute, network, - storage, customer activities, security and IM policies)
- Infrastructure as Code
- Microservices



# Deployment Pipelines
[BMC Deployment Pipelines CI/CD](https://www.bmc.com/blogs/deployment-pipeline/)
Components of a pipeline:
- Build Automation / Continuous Integration
- Test automation
- Deploy automation

Pipeline tool cateogries:
- Source Control
- Build tools
- Containerisation
- Configuration management
- Monitoring



## Configuration management
[BMC Configuration Management](https://www.bmc.com/blogs/devops-configuration-management/)Configuration management occurs when a configuration platform is used to automate, monitor, design and manage otherwise manual configuration processes. System-wide changes take place across servers and networks, storage, applications, and other managed systems.

An important function of configuration management is defining the state of each system. By orchestrating these processes with a platform, organizations can ensure consistency across integrated systems and increase efficiency. The result is that businesses can scale more readily without hiring additional IT management staff. Companies that otherwise wouldn’t have the resources can grow by deploying a DevOps approach.

Configuration management is closely associated with change management, and as a result, the two terms are sometimes confused. Configuration management is most readily described as the automation, management, and maintenance of configurations at each state, while change management is the process by which configurations are redefined and changed to meet the conditions of new needs and dynamic circumstances.

# DevOps Tools & Chain

[Travis-CI](https://travis-ci.org/) - The simplest way to test and deploy your projects.

# Agile

Agile Manifesto

Backlog Grooming

Architecture Decision Logs - https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions

# spotify
DevOps : small, autonomous developer teams

[Backstage](https://engineering.atspotify.com/2021/03/16/happy-birthday-backstage-spotifys-biggest-open-source-project-grows-up-fast/)


# Automation

## Accenture - 4S Model
Simple, Seemless, Scalable, Sustaibable.
- [OneDrive - Accenture 4S Model Automation - 2021](https://1drv.ms/b/s!AkwXSmFk-_xpgocptgZ5ui1c7J7jcw?e=LDsK5l) - first step is to apply techniques like lean principles and six sigma.
  - Simple : Make automation simple by identifying the right opportunities/use cases with the biggest impact to business
  - Seamless : Make automation seam-less for use and adoption, so there is an ROI to the business
  - Scalable : Make automation scalable across the enterprise so there is full realization of the automation value for the business
  - Sustainable : Make automation sustainable and continuously evolving to ensure continuous value generation

# Deployment
- [Airbnb - Metric Deployment](https://medium.com/airbnb-engineering/airbnb-metric-computation-with-minerva-part-2-9afe6695b486)
- [Airbnb - Scale - A/B Testing](https://medium.com/airbnb-engineering/how-airbnb-achieved-metric-consistency-at-scale-f23cc53dea70)

# Principles
From [Coursera - DevOps Culture and Mindset](https://www.coursera.org/lecture/devops-culture-and-mindset/the-westrum-model-for-improving-organizational-culture-8HXtP)
1. Eliminate Waste : Don't code more features than needed.   Aligns with rationalization principle.\
1. Build Quality In : Quality is everyone's responsibility.  (Reference Deming) Verify quality is built into product and process.
1. Create Knowledge : Amplify learning.  Development is constant learning.
  - ideas: blogs, team-onboarding tutorials (like the Tableau)
1. Defer Commitment : Make decisions at the right time, with analysis and considerations.  Defer decisions until you have more information.  Understand impact of decisions.   *Take your time. When the decision is irreversible, give yourself time and space to think it through. When the decision is easily reversible, don't overthink it.*[Dries - Drupal - Decisions](https://dri.es/principles-for-life)
1. Deliver Fast : Ensure feedback received early and often allowing to change and adapt.  Deliver in smaller batches which will allow you to deliver faster.
1. Respect People : Lean and DevOps rely on a culture of respect.
1. Optimize the Whole : Employ Systems Thinking. (see ../Application/Architecture/SystemsThinking.). ![Systems Thinking](../Architecture/SystemsThinking.md)

# Lean's Wastes
In manufacturing the Lean wastes are identified as Inventory, Waiting, Defects, Overproduction, Motion, Transportation and Over-processing.   

Adopted to software developments, the Lean wastes are:
1. Partially Done Work
1. Extra Features
1. Revisiting Decisions
1. Handoffs
1. Delays
1. Task Switching
1. Defects

A ccomparison to different industrices by [Kanbanize](https://kanbanize.com/lean-management/value-waste/7-wastes-of-lean):

|Lean Waste|Manufacturing|Software Development|
|--|--|--|
|Transportation|moving parts and materials from one place to another|switching between tasks too often, countless interruptions from colleagues.|
|Inventory|undelivered products or parts|undelivered code or undelivered features|
|Motion|unnecessary movement of employees or machinery|unnecessary meetings or extra effort to find information|
|Waiting|waiting for goods to be delivered|waiting builds, for testing to complete, waiting for code review, and so on|
|Overproduction|oo many items produced “just in case|producing features that nobody is going to use|
|Over-processing |Spending a lot of time on a given task. Adding a feature that doesn’t bring value|unnecessary complex algorithms solving simple problems|
|Defects|broken parts or defective parts that need to be reworked|bugs|


## Thieves of Time
5 Thieves of Time, from [Making Work Visible, 2017.](https://www.safaribooksonline.com/library/view//9781457191428/?ar).  
1. Too much work in progress
1. Conflicting priorities
1. Unknown dependencies
1. Unplanned work
1. Neglected work

WIP - https://medium.com/hackernoon/wip-it-real-good-66aa710178fd

# Kaizen
Insane or Kaizen Habits
- Kaizen: Japanese for improvement.  A Kaizen culture is described as implementing behaviors that continuously show improvements. [reference](https://itrevolution.com/devops-culture-part-1/). [Kaizen definition Agile](https://www.agile-academy.com/en/agile-dictionary/)
- Insane: Albert Einstein said that the definition of insanity is doing the same thing over and over again and expecting different results.

# Culture
- The way to change culture is not to first change how people think, but instead to start by changing how people behave—what they do* - [reference: Google DORA Westrum Organizational Culture](https://cloud.google.com/architecture/devops/devops-culture-westrum-organizational-culture)

## TO DO - Read / Absorb / ETC
- [3 Principles of DevOps - 2012 Article: ](https://itrevolution.com/the-three-ways-principles-underpinning-devops/) - [OneDrive - 3 Principles of DevOps](https://1drv.ms/b/s!AkwXSmFk-_xpgoci2Ke4gezYoAf6xw?e=WDvG4h)
  1. Flow Thinking / Systems Thinking - emphasize the performance of the entire system versus silos.   The focus is on business value streams that are enabled by IT.   Seeking to achieve profound understanding of the system (Deming)
  1. Amplify Feedback Loops - process improvement goals to shorten feedback loops so corrections can be made
  1. Culture - Two Things:
     - Continual Learning and Experimentation : Taking risks and learning from failure .
     - Understanding that repetition and practice is the prerequisite to mastery.

- [Three Ways of Devops](https://thenewstack.io/the-most-important-tools-for-enabling-devops-in-your-company/): DevOps is a culture (not a team)
  - Flow: Flow is the ability to get changes into production quickly and then improve their quality and reliability.  Visibility & Managing the Size (Decomposition) help with Flow.  Visibility (see where unit of work is in the process, ...).  Decomposition, in which tasks are broken down into smaller units, is a common way to work more efficiently. Decomposing clarifies daily goals, enables quicker feedback and makes work seem more approachable and less overwhelming.
  - Feedback.  Feedback is simply information about the results of your processes and projects. For DevOps, this centers on feedback from teams downstream in the process and from production applications. Collaboration tools like Slack and Mattermost have instant-messaging functionality, enabling feedback from downstream and across the organization.   Since one of the central tenets of DevOps is to fix problems as far upstream in the creation process as possible, getting feedback from everyone that your work impacts can make a dramatic difference.  It’s critical to implement effective application performance monitoring (APM). [ Splunk Observability ]
  - Continuous learning and experimentation.  Focus on continual learning and experimentation.

- 2021 - [Puppet - State of DevOps](https://1drv.ms/b/s!AkwXSmFk-_xpgocjvf4axw0SIKhuNQ?e=3vGOyw)
- [Culture - DevOps](https://itrevolution.com/devops-culture-part-1/): *“You can’t directly change culture. But you can change behavior, and behavior becomes culture”*

# Training
- [Coursera - DevOps Culture and Mindset - U of California ](https://www.coursera.org/lecture/devops-culture-and-mindset/the-westrum-model-for-improving-organizational-culture-8HXtP)

# References
- [DeGrandis, Dominica and O’Reilly for Higher Education (Firm). Making Work Visible, 2017.](https://www.safaribooksonline.com/library/view//9781457191428/?ar).  

- [BMC DevOps History](https://www.bmc.com/blogs/devops-history/)
- [BMC DevOps Guide](https://www.bmc.com/blogs/devops-basics-introduction/)
- [Google DevOps](https://cloud.google.com/devops)
