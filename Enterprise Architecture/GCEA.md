# GC EA Framework
[GC EA Framework](https://www.canada.ca/en/government/system/digital-government/policies-standards/government-canada-enterprise-architecture-framework.html) defines architectures for BAITS (Business, Application, Technology, Information and Security).

## Business:
1. Design services digitally from end‑to‑end to meet the Government of Canada users and other stakeholders’ needs

     - identify internal and external users and stakeholders.  

     - identify their needs for each policy, program and business service  

     - include policy requirement applying to specific users and SH groups (accessibility, gender-based plus analysis and official languages in the creation of the service)

     - perform Algorithmic Impact Assessment (AIA) to support risk mitigation activities when deploying automated decision system (Directive on Automated Decision Making)

     - model end-to-end business service delivery

2. Architect to be outcome‑driven and strategically aligned to the department and to the Government of Canada

3. Promote horizontal enablement of the enterprise
## Information
1. Collect data to address the needs of the users and other stakeholders
1. Manage and reuse data strategically and responsibly
1. Use and share data openly in an ethical and secure manner
1. Design with privacy in mind for the collection, use and management of personal Information

## Application
1. Use open source solutions hosted in public cloud
1. Use software as a service (SaaS) hosted in public cloud
1. Design for Interoperability

## Technology
1. Use cloud first
1. Design for performance, availability and scalability
1. Follow DevSecOps principles

## Security
1. Build security into the system life cycle across all architectural layers ( [GC Patch Management Guidance](https://www.canada.ca/en/government/system/digital-government/online-security-privacy/patch-management-guidance.html) )
1. Ensure secure access to systems and services
1. Maintain secure operations

# GC Directives
1. [Policy on Service and Digital](https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32603)
1. [GC Digital Operations Strategic Plan - DOSP](https://www.canada.ca/en/government/system/digital-government/digital-operations-strategic-plan-2018-2022.html)
1. [Policy on Government Security](https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=16578)
1. [Directive on Security Management](https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32611)
1. [CCCS - Canadian Centre for Cyber Security - Alerts & Advisories](https://cyber.gc.ca/en/alerts-advisories)
1. [GC Cyber Event Management Plan](https://www.canada.ca/en/government/system/digital-government/online-security-privacy/security-identity-management/government-canada-cyber-security-event-management-plan.html)


# Releated

## GC Patch Management Guidance
[GC Patch Management Guidance](https://www.canada.ca/en/government/system/digital-government/online-security-privacy/patch-management-guidance.html) provides an overview of patch management, defines the patch management lifecycle, emergency patch definition and management, operational environments (self-managed data centre, SSC, cloud, ...), and key performance indicators (KPI).  

### Key Performance Indicators (KPI) for Patch Management
Coverage:
The percentage of systems and applications within the organization inventoried and covered by automated patch management
Efficiency and effectiveness:
1. How often hosts are automatically checked for compliance
1. How often asset inventories are automatically updated
1. The minimum/average/max time to patch X percentage of hosts
1. The percentage of systems patched within X, Y, Z days after deployment
1. The percentage of operational hosts within the organization fully patched at any given time
1. The number of extreme impact, high impact, medium impact, low impact hosts and/or unpatched vulnerabilities on organizational hosts at any given time
1. Average time elapsed between a patch’s availability and its production implementation per level of rating
1. The percentage of hosts patched automatically vs. partially (in the case of patches bundled in a package) vs. manually
The percentage of patches deployed within the suggested deployment schedule

Regular reporting on KPIs will enable the organization to establish a baseline of the performance of their patch management process and to quickly mature it.




# GCcollab - EA

https://wiki.gccollab.ca/GC_Enterprise_Architecture/Enterprise_Solutions

- with many links to gcconnex which requires GC network (SCnet)



https://gcconnex.gc.ca/file/view/65557445/gc-earb-2020-06-18-02-pspc-isst-follow-up-to-june-18-2020-gc-earb-pdf?language=en

SSC ITSM
https://gcconnex.gc.ca/download/61354090

Stats Canada - Drupal
https://gcconnex.gc.ca/file/view/59227335/gc-earb-2020-01-17-03-stats-canada-drupal-reference-cloud-architecture-pptx?language=en
- slides promise a presentation in 2021 on Drupal as MWS replacement (MediaWiki??)
- OneGC endorsed CMS Cluster to explore Web Content Management needs for the GC
- [Drupal WxT Distribution](http://drupalwxt.org/) : The Drupal WxT distribution has been tailored for organizations that need to comply with standards for accessibility and bilingualism, and integrates extensively with the WET-BOEW jQuery Framework.

CBSA - Enterprise Capabilities
https://gcconnex.gc.ca/file/view/59833201/gc-earb-2020-01-31-04-cbsa-investing-in-enterprise-capabilities-at-cbsa-pdf?language=en


# [GC Digital Standards](https://www.canada.ca/en/government/system/digital-government/government-canada-digital-standards.html)
Design with Users
Iterate and Improve Frequently
Work in the open by default
Use open standards and solutions
Address security and privacy risks
Build in accessibility from the start
Empower staff to deliver better services
Be good data stewards
Design ethical services
Collaborate widely
- Note GC Digital Hierarchy Model
  - Strategic: GC Digital Standards: A set of high level principles to guide the TC in digital transformation and augmented service delivery (Audience: GC service providers, program areas)
  - Tactical: Digital Architectural Checklist : Build it Right.  (Audience CIOs, Solution Architects, Enterprise Architects, Technical Leads)
  - Operational : [Digital Playbook](https://www.canada.ca/en/government/system/digital-government/government-canada-digital-standards.html) : Here's How : Detailed methodologies to implement the digital solutions  (Audience GC practitioners, designers, developers, front-line staff)
