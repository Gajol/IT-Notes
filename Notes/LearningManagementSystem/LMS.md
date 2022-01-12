

## Moodle
- [Moodle](https://moodle.org/)
- [Mooodle Workplace](https://moodle.com/workplace/)
- [Install Overview](https://products.containerize.com/lms/moodle/)
- [Moodle - Github](https://github.com/moodle/moodle) - not this version does __not__ business needs
  - PHP, plus JS, [cucumber/Gherkin](https://cucumber.io/) - for testcases,
- Moodle is "open core" meaning a basic offering is free and open-source.   The [Moodle Workplace](https://moodle.com/workplace/) (desired by our L&D policy centre) is neither free nor open-source.   Moodle Workplace is licensed software only available via our Certified Service Providers
- [Moodle Product Comparison](https://moodle.com/wp-content/uploads/2020/05/Product_Comparison_MoodlevsWorkplace-1.pdf)

## Ilias
Ilias - used by 80-90 police services in Canada
https://products.containerize.com/lms/ilias/
[Ilias - Github](https://github.com/ILIAS-eLearning/ILIAS) : open-source, php
- PHP based

# Quality Requirements - Non-Functional
Many of our projects are delayed, paused or cancelled due to non-functional requirements.  The root cause of these has not been discussed or documented as part of lessons-learned.   One possible cause is the difficulties in standing-up technology in an air-gapped environmented disconnected from the internet.  The following is a brief list of quality requirements that often de-rail projects progress.   These should be considered when doing options analysis and during the project lifecycle.
1. Classified Training : Training available on a TS-network.   Assume security categorization is TSMM.
1. Bilingual : Training in both official languages.
1. Accessible : Training regardless of accessibility as we often get our business-requirements phrased as.   Assume WCAG 2.0 at a minimum.
1. IM : Export-as-PDF (PER - non-LMS requirement, ???)
1. IM : Disposition - ability to set retention time on information.
1. IM : unknowns...
1. IM Privacy : should not be an concern on (C) network.
1. IT : SSO, ...
1. Performance Management : Data and Analytics

## LMS Standards
Not sure we need to be compliant with these, but these are easily googleable standards within the learning management system domain.
1. - [SCORM (Sharable Content Object Reference Model)](https://en.wikipedia.org/wiki/Sharable_Content_Object_Reference_Model) compliance to be useable on multiple LMS systems (SCORM 1.2 / SCORM 2005)
1. [Learning Tools Interoperability - LTI](https://www.imsglobal.org/activity/learning-tools-interoperability)
  - [Deep Linking](https://en.wikipedia.org/wiki/Deep_linking) : Ability to link in a reliable manner to content witin a web-site.  Many trickle-on requirements of deep-linking (sharing, access, ...).  See also [Persistent URLs](https://purl.imsglobal.org/spec/clr/v1p0/schema/openapi/3.0/clr.json).
  - [LTI 1.3 Specification](https://www.imsglobal.org/spec/lti/v1p3/)
  - LTI : The specification allows and specifies a method for the exchange of data between the LMS and external tools (see Learning Tools Interoperability, IMS Global Learning Consortium [IMS Global/IMS]).
  - Not relevant as we do not have other learning tools to integrate to.
1. [LMS - Comprehensive Learner Record - CRL](https://www.imsglobal.org/activity/comprehensive-learner-record).  See the [LMS CRL OpenAPI specification](https://purl.imsglobal.org/spec/clr/v1p0/schema/openapi/). See [7 Things to Know About CLRs](https://credentialengine.org/wp-content/uploads/2019/01/Educause_Comprehensive-Learner-Record.pdf) by [Credential Engine - Making All Credentials Transparent](https://credentialengine.org/)


# What others are doing

## 5EE's
- What are 5EE's doing?
- Brits - Saba : likely on their OneIT cloud (???)

## Canada
- SSC - Saba on PB cloud  
- NSA on Saba (on cloud ?) : likely on their cloud offering (???)
- Saba had high-security organizations (banks, IC, ...)

# Features
- Launch Course : based on attributes (e.g., ops-user) - for 1,000's of people
- [SCORM (Sharable Content Object Reference Model)](https://en.wikipedia.org/wiki/Sharable_Content_Object_Reference_Model) compliance to be useable on multiple LMS systems (SCORM 1.2 / SCORM 2005)

## Features
- From [Moodle Product Comparison](https://moodle.com/wp-content/uploads/2020/05/Product_Comparison_MoodlevsWorkplace-1.pdf):
1. Organized learning  - Organizational Structure
  - Positions
  - Competencies
  - Import / Export Competency Structure
  - Automated Workflows
  - Dynamic Rules based Conditions and Actions (ITTT)
1. Enrollment Management
  - Manual enrollment
  - Automated enrollment
  - Courses self-enrollment
  - Cohort and gorup based enrollment
  - Competency based enrollment
1. Personalized Learning
  - Program Management
  - Certification and Compliance Tracking
  - Re-Certification Management
  - User Dashboard
  - Learning Progress
  - Coort tailored notifications and tasks
  - Alerts and Notifications
1. Mobile App / Multi-Tenant / ...


# References
## Gartner
- [Gartner - Market Guide for Higher Education Learning Management Systems](https://1drv.ms/b/s!AkwXSmFk-_xpgplNUdMgtCjoAPBIvQ?e=reW7Q3)
- [Gartner - Should Workplace Collaboration Tools Displace the Higher Education LMS? - 2021-03]()
](https://1drv.ms/b/s!AkwXSmFk-_xpgplOCdnaprPEzODEbQ?e=SGMfrk)
- [Gartner - Education Review, Refocus, Rebuild](https://www.gartner.com/document/40084680)

## Wikipedia
- [Learning Technology - Wikipedia](https://en.wikipedia.org/wiki/Educational_technology)
- [Learning - Authoring System](https://en.wikipedia.org/wiki/Authoring_system)

# Other Open Source
Chamilo : https://products.containerize.com/lms/chamilo/
Canvas : https://products.containerize.com/lms/canvas/
