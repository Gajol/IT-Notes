Where are older notes on Devops
- https://www.bmc.com/blogs/devops-history/
- ...history....



https://cloud.google.com/devops


# DORA Report Webcast 2021
Google DevOps Webinar : GitLab DevOps
https://learn.gitlab.com/gtm-devops-consideration1-mgr/dora-report-webcast

https://learn.gitlab.com/gtm-devops-consideration1-mgr/dora-report-webcast

[GitLab Unified DevOps Platform](https://learn.gitlab.com/gtm-devops-consideration1-mgr/ten-key-devops-platf)
- powerful collaboration : agile planning, version control, code review
- multi-cloud ci/cd : deploy anywhere
- security & monitoring : get security results on every code changes
- open source : everyone can contribute


[GitLab is GitHub’s largest competitor](https://www.tomshardware.com/news/alphabet-gitlab-microsoft-github-acquisition,37823.html).
- [Gitlabs comparison](https://about.gitlab.com/devops-tools/github-vs-gitlab/)

- [DevOps - How to Improve - Google Cloud](https://www.devops-research.com/models.html) - good graph with technical capabilities model

## Frank Ford from Insurance company

Before
Java, custom build scripts, multi-tech, multi-repo, maintained by DataCenter.
Do things by tickets,
Deployment, write custom instructions on ticket and hand-off to change management team...

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
Discrepancy between low-performers and high-performers (organizations)
Evolution in GitLab from teams trying to implement DevOps and best-practices.  Struggling with tooling, understanding how the tools fit together, and gettin the tools to work together.

Move from "bring your own tools" to a DIY DevOps stitching together the tools.  To the move to a DevOps platforms : Elite teams are simplying the tools using a DevOps platform - increasing the frequency of testing and deploy.

Gitlab is the DevOps platform.  Idea of what to build, building secure and tested code, and deploying to production.
- elite performers mature DevOps practices using GitLab

DORA quick check cloud.google.com/DevOps (DORA quick check) - quick questions.

## SRE versus Availability
- Availability is a subset of Reliability.  There are many facets or reliability you can measure in addition to availability. This year's GitLab looked at:
- Do you define SLA for SRE
- Do you have error budgets for developers.

# DevOps - DZzon

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
