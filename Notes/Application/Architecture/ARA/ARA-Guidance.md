
Major Guidance:

# Goal:  Composable Enterprise
1. Integrations / Messaging
Methodology: DDD / Bounded Context
!!! : what was the API guideline - do one thing - either a command or a query but not both...


# Goal:  Reduce technical debt.

1. Rationalization.
  - [... - Feature Selection - Start with No](https://basecamp.com/gettingreal/05.3-start-with-no)
    - reduce features, focus on the priorities
  - [Steve Jobs - Focus on Saying No - 1997](https://www.youtube.com/watch?v=H8eP99neOVs)
    - *Apple suffered from lousy engineering management* - Steve Jobs answering a negative question about a removed feature.  Focusing is about saying no.   *When you say no, you piss off people.*
  - [Basecamp - Priorities - Whats the Big Idea](https://basecamp.com/gettingreal/04.1-whats-the-big-idea)
    - Are we staying true to the vision?
  - [Basecamp - The Starting Line - Fix Time and Budget, Flex on Scope](https://basecamp.com/gettingreal/02.4-fix-time-and-budget-flex-scope)
    - Prioritize, Focus on what you really want to deliver), Flexibility : Scope flexibility.  It’s better to make half a product than a half-assed product (more on this later). *How does a project get to be a year behind schedule? One day at a time.* - [Fred Brooks 1979 Software Project Management - The Mythical man Month](https://en.wikipedia.org/wiki/The_Mythical_Man-Month). [the mythical man-month - 1975 - isbn](http://www.worldcat.org/isbn/0-201-00650-2)

1. Reuse / Buy / Build.   
- Reuse:  Attempt to reuse what we currently own, or what other government departments / partners are using.   
- Buy: Buy solutions and integrate into our enterprise architecture
- Build:  As a last resort, custom build a solution.  This should be limited to business capabilities and processes that are unique to our department.  Executive approval (Department Architecture Review Board) required.

1. Document & Exercise Backup & Recovery
All applications, regardless or criticality, must have a documented backup and recovery procedure.   This needs to be exercised on a regular basis (at least annually) and must be done prior to deployment to production.

Business critical applications require a BCP and DR plan to be documented and reviewed on a regular basis.
- [ ] Enterprise Architecture : Formally identify the criticality of applications and record this in the deparment's official configuration management database (CMDB).

# Goal: Reduce copied & cloned content.

Content is duplicated within applications and across technologies.  The causes of this have not been formally documented, however some factors leading to users copying content are the lack of trust in being able to access the content in the future.  This can be paraphrased as *I need a local copy for me or my team*.   This leads to copies of information on shared-drives and transitory and corporate applications.   Some historical examples that have led to this "clone-and-own" culture include:
- Link Rot:  Application upgrades making links to content fail.   [Deep Linking](https://en.wikipedia.org/wiki/Deep_linking) is the use of a hyperlink that links to a specific, generally searchable or indexed, piece of web content on a website.  For example, a link to a specific case, request or document.  
- Access:  Users are concerned that the content may disappear due to the content owner removing, renaming or modifying user-access.   This is difficult to address at the application layer, and requires enterprise information and access-management governance.

1. URL Lifecycle
 When supporting [Deep Linking](https://en.wikipedia.org/wiki/Deep_linking) design must take into account the lifecycle of the link, and its ability to function through upgrades.   Consider patterns such as [Permalink](https://en.wikipedia.org/wiki/Permalink) and Data Object Identifier [(DOI)](https://en.wikipedia.org/wiki/Digital_object_identifier).  When provide a link to a user for reference, identify this should be a trusted-link which survives upgrades/replacements.

 1. URL Design
 Define a URL strategy for the application, including an inventory or URL's provided.  Define the manner in which URLs are clean, friendly and pretty [Clean URL](https://en.wikipedia.org/wiki/Clean_URL); support *http://example.com/name* as opposed to *http://example.com/index.php?page=name*.

# References
*TODO* 37signals - use as support for guidelines
*TOD* CIO - use as support for guidelines

[Basecamp - The Starting  - Build Less](https://basecamp.com/gettingreal/02.1-build-less)
[...] less means:
  - Less features
  - Less options/preferences
  - Less people and corporate structure
  - Less meetings and abstractions
  - Less promises

[...] [Basecamp - Stay Lean - Less Mass:](https://basecamp.com/gettingreal/03.1-less-mass)
  - less "Thick process"
  - less "Long-Term Roadmaps"  (supported as by ITSS Study - Ian Lovsion 2017)
  - less of "The past ruling the future"

# GC Alignment
1. [CTO - Government of Canada Digital Standards](https://www.canada.ca/en/government/system/digital-government/government-canada-digital-standards.html) : Design with Users, Iterate and improve frequently, Work in the open by default, Use open standards and solutions, Address security and privacy risks, Build in accessibility from the start, Empower staff to deliver better services, Be good data stewards, Design ethical services, Collaborate widely

1. [Cloud Adoption](https://www.canada.ca/en/government/system/digital-government/digital-government-innovations/cloud-services/government-canada-cloud-adoption-strategy.html)
