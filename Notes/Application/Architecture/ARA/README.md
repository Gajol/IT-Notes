2022-01-25

<a name="generate-table-of-contents"></a>
# Generate table of contents
* [Generate table of contents](#generate-table-of-contents)
* [ARA](#ara)
* [Introduction](#introduction)
* [Out-of-Scope](#out-of-scope)
* [Business](#business)
    * [Introduction](#business-introduction-1)
* [Discovery](#discovery)
* [DOUG H3 in 2-Business](#doug-h3-in-2-business)
    * [Intro 2](#doug-h3-in-2-business-intro-2)
    * [Technology Environment](#doug-h3-in-2-business-technology-environment)



<a name="ara"></a>
# ARA
<a name="introduction"></a>
# Introduction
This document outlines the Application Reference Architecture (ARA) as it applies to our department.  What is architecture?  

```
Architecture is the stuff you can’t Google. - Mark Richards.   
```

The Application Reference Architecture (ARA) borders on what many would consider an enterprise reference architecture.  This document, the ARA,  attempts to provide an overview of the enterprise environment with a focus on application architecture elements.
- Enterprise architecture documents the whole architecture and all important elements of the respective organisation, covering relevant domains such as business, digital, physical, or organisational; and ii) the relations and interactions between elements that belong to those domains, such as processes, functions, applications, events, data, or technologies." - [[Wikipedia - Enterprise Architect]](https://en.wikipedia.org/wiki/Enterprise_architecture).  
- Application architecture describes the behaviour of applications used in a business, focused on how they interact with each other and with users. It is focused on the data consumed and produced by applications rather than their internal structure. In application portfolio management, applications are mapped to business functions and processes as well as costs, functional quality and technical quality in order to assess the value provided." - [[Wikipedia - Application Architect]](https://en.wikipedia.org/wiki/Applications_architecture#Application_architect).

This document documents:
- existing application architecture within our department
- guidelines for technical leaders

This document is intended for:
- technical design leads

<a name="out-of-scope"></a>
# Out-of-Scope
- This document is neither a vision, nor a strategy nor a roadmap document.   
- This document is neither a strategy, nor a department culture nor execution/process document.
  - Strategy: What will and will not do, and how govern resources.
  - Culture: People, Processes (Organization / Teams), Communication
  - Execution: Processes, Tools


<a name="business"></a>
# Business

<a name="business-introduction-1"></a>
## Introduction

Let's include ARA-Test.md (within a ## / H2 and see what happens)
<a name="discovery"></a>
# Discovery

There are many initiatives within our department that require enterprise and domain architecture effort to recommend the path forward.

1. Identity and Access Management (IdAM):  
Analyze existing identity and access management options to provide multi-domain identity and access to compartmentalized information.


1. Enterprise Integrations & Interoperability:  
Analyze steps to mature our ability create a composable enterprise [Gartner] with an focus on leveraging modern API concepts (API management, API catalog, API developer experience - sandbox, versioning, ...).


1. Enterprise Search:  
Gartner calls the broader enterprise search an Insight Engine. [Gartner - Critical Capabilities for an Insight Engine](https://www.gartner.com/document/4000026?ref=solrAll&refval=312773615).  [[Gartner Magic Quadrant - Insight Engines]](https://www.gartner.com/document/3999454?ref=ddisp&refval=4000026).  Key terms include; connectors, touch points, integrations.  Popular open-source solutions like Solr and Elastic support API integrations for adding and removing content with structured-metadata.   A key to the success of enterprise search is the ability to structure the index information with metadata.  This enables discover and faceted searches.
  - [ ] Enterprise Taxonomy : A deliverable within the Information Management Modernization program (IMmod)


1. Multi-Security Zone Applications:  
Our directorate has been asked to to move workloads to lower security zones.  As a consequence business processes may span security zones.  The cross-domain-solution has been identified as an enabler technology.  What overall application, data, information and security architecture is needed to realize these benefits.    

1. Managing Media
Our department manages multimedia (images, audio and video files) as well as file-types on a diverse range of applications.  Media management can be addressed be a Media Management Platform and a Digital Experience Platform (DXP).  Industry leaders include OpenText, Oracle and Salesforce.  While some Content Management Systems (CMS) also support DXP features many new market entrants are SaaS-based and require cloud connectivity (e.g, Sanity.io).   OpenText DXP() is not in the top-magic quadrant; however it deserves consideration due to GCdocs.
- [OpenText DXP](https://www.opentext.com/products-and-solutions/products/customer-experience-management/digital-experience-platform)
- [Opentext Why you Need a DXP](https://blogs.opentext.com/digital-experience-platform/): *Orchestrating a cohesive, contextual experience that meets brand standards, achieves business goals across all channels and touchpoints, while it delights the recipient, is a massively difficult task.*

Features of a DXP:
- Content Management System
- Media Asset Management
- Digital Asset Management (media and non-media content)
- Headless DXP / CMS : Provide back-end features expose media assets via API's.


TODO - reference Confluence ITOD Dependencies document
TODO - Add Enterprise Interoperability to ITOD Dependencies


<a name="doug-h3-in-2-business"></a>
# DOUG H3 in 2-Business

<a name="doug-h3-in-2-business-intro-2"></a>
### Intro 2
Our department has a Business Capabiltiy Map (BCM) describing the main capabiliies required to fullfil our mandate.   To help support the busines our technology teams provide a broad range of IT capabilities.   Our IT department supports many networks both nationally and internationally.  Within the IT department, our software development team supports an extensive catalog of applications.

The health of our portfolio needs to improve as identified in our Corporate Risk Profile (CRP).   Several leadership principles have been established over the years to provide guidance when addressing business needs.   Key principles relating to directing architecture and design are:

1. Rationalization:  We have an long queue of valuable business requests and opportunities.   During the software development phase, requirements must be rationalized against the original approved project scope and other compete busines needs.  The costs of increment application development, both in project costs and ongoing costs must be carefully understood.  This is the process of rationalizing business needs and can include the senior management team when necessary.  [See Guidance - Rationalization for more informatoin - !!!]

1. Executive Lead / Change Management:  Projects and programs need executive sponsors who are committed to the change management and ratinalization required to allow IT to develop a product.

1. Business Architecture and Artefacts:  The business plays a key role in shaping the application.  For effective analysis of the business needs during application development the business should provide key business architecture input.  These are essential for a successful application and if unavailable will result significant architecture and design waste.  

  The following are useful:
  - Business Capability Model (BCM) - [[Wikipedia - Business Capability Model]](https://en.wikipedia.org/wiki/Business_capability_model) : A diagram that identifies the business capabilities with regards to the application being developed.   The GC BCM is a reference, and our department has an internal BCM.   The BCM traditional is decomposed into 3-4 levels with descriptions of each level.    The application requirements are mapped to the respective BCM capabilities.
  - Value Streams - [[Wikipedia - Value Streams]](https://en.wikipedia.org/wiki/Value_stream) : Introduced in Lean (1950's) a value stream is a set of actions (workflow) to produce value.  Value Stream Mapping [[Wikipedia - Value Stream Mapping]](https://en.wikipedia.org/wiki/Value-stream_mapping) is visual tool introduced in Lean Management methodology to display the value stream with define icons to show delays and inventory stages.   An example value stream might be recruitment "street to seat" or "hire to retire".  
  - Information Flows [[Wikipedia - Information Flow Diagram]](https://en.wikipedia.org/wiki/Information_flow_diagram) is a business view of how information flows between business responsiblity centres. *The main purpose of an information flow diagram is so that sources that send and receive information can be displayed neatly and analysed.*
  - Organization Model / Operating Model [[Wikipedia - Operating Model]](https://en.wikipedia.org/wiki/Operating_model)- An operating model is both an abstract and visual representation (model) of how an organization delivers value to its customers or beneficiaries as well as how an organization actually runs itself.  The elements that make up the Operating Model are People, Process and Technology (PPT).  

  1. Business Requirements:  Business requirements for IT analysis, prioritization and design.  Business requirements should attempt to be specific, measurable, achievable, realistic/relevant and time-based [(SMART)](https://en.wikipedia.org/wiki/SMART_criteria).  By being SMART, this affords the technology project the ability to effectively plan and analyse.

<a name="doug-h3-in-2-business-technology-environment"></a>
## Technology Environment
Our IT operates in a complex constrained environment.   
!!! - add on corporate production details !!!

