
# Terms

# Architecture

Principles : Principles are propositions. They assert a set of beliefs about the world. They act as a substrate to a system of values. They serve to guide decision making across your entire organization.
  - Proposition: something offered for consideration or acceptance
  - Your principles should be thoughtfully constructed, publicly stated, and often referred to.
  - Examples: [Digital Principles](https://digitalprinciples.org/principles/), [TOGAF Architecture Principles - How to Create Principles](https://pubs.opengroup.org/architecture/togaf8-doc/arch/chap29.html) - {Name, Statement, Rationale, Implications}


# Codifying Terms
[Wikipedia Glossary](https://en.wikipedia.org/wiki/Wikipedia:Glossary).  What features do you want beyond this?
- metadata for each term to allow facet-searching,
- authoring content:  (assume "markdown" and not "asciidoc")
  - auto-inclusion to web-content.
  - authoring reference: easy ability to hyperlink to referenced-term (and a trust that this link will exist in the future)
  - build/generation: referenced-content (e.g., links included in an authored document) can generate a "terms" section in content. For example, templating language to (@ build-time / presentation-time) generate a terms section.
    - use [Shopify's Liquid](https://shopify.github.io/liquid/)?
    - use good-ole Freemarker?
    - using markdown - so a markdown preprocessor in the build / github actions -
      - Seems Basic: [Markdown Python Preprocesor](https://jreese.sh/projects/markdownpp); has TOC, Ref,
      - [Preprocess for Git Hub Pages](https://www.npmjs.com/package/markdown-preprocessor) - [md-pp runkit](https://npm.runkit.com/markdown-preprocessor)
      - https://github.com/gajus/gitdown

API : An API (application programming interface) is a computing interface which defines interactions between multiple software intermediaries. It defines the kinds of calls or requests that can be made, how to make them, the data formats that should be used, the conventions to follow, etc.

DAM : Digital Asset Management. Digital Asset Management software allows storing, organizing, accessing, cataloging, and retrieving of your digital asset or content. It adds metadata to each content and searches for digital files easy. It can deliver content on multiple devices in various formats. It can integrate with other external tools and platforms to provide services like sending bulk data to external partners in a secure way.  (How does DAM relate to ECM and CMS?)

# Data Lake
- [Data Lake (Amazon Definition)](https://aws.amazon.com/big-data/datalakes-and-analytics/what-is-a-data-lake/?nc1=h_ls) : A data lake is a centralized repository that allows you to store all your structured and unstructured data at any scale. You can store your data as-is, without having to first structure the data, and run different types of analytics — from dashboard and visualizations to big data processing, real-time analytics, and machine learning to guide better decisions.

|Characteristics|Data Warehouse|Data Lake|
|--|--|--
|Data|Relational from transactional systems, operational databases, and line of business applications|Non-relational and relational from IoT devices, web sites, mobile apps, social media, and corporate applications|
|Schema|Designed prior to the DW implementation (schema-on-write)|Written at the time of analysis (schema-on-read)|
|Price/Performance|Fastest query results using higher cost storage|Query results getting faster using low-cost storage|
|Data Quality|Highly curated data that serves as the central version of the truth|Any data that may or may not be curated (ie. raw data)|
|Users|Business analysts|Data scientists, Data developers, and Business analysts (using curated data)|
|Analytics|Batch reporting, BI and visualizations|Machine Learning, Predictive analytics, data discovery and profiling|

Essential elements of a Data Lake and Analytics solution:
- Data movement: Data Lakes allow you to import any amount of data that can come in real-time. Data is collected from multiple sources, and moved into the data lake in its original format. This process allows you to scale to data of any size, while saving time of defining data structures, schema, and transformations.

- Securely store, and catalog data: Data Lakes allow you to store relational data like operational databases and data from line of business applications, and non-relational data like mobile apps, IoT devices, and social media. They also give you the ability to understand what data is in the lake through crawling, cataloging, and indexing of data. Finally, data must be secured to ensure your data assets are protected.

- Analytics: Data Lakes allow various roles in your organization like data scientists, data developers, and business analysts to access data with their choice of analytic tools and frameworks. This includes open source frameworks such as Apache Hadoop, Presto, and Apache Spark, and commercial offerings from data warehouse and business intelligence vendors. Data Lakes allow you to run analytics without the need to move your data to a separate analytics system.

- Machine Learning: Data Lakes will allow organizations to generate different types of insights including reporting on historical data, and doing machine learning where models are built to forecast likely outcomes, and suggest a range of prescribed actions to achieve the optimal result.

Challenges of a Data Lake: The main challenge with a data lake architecture is that raw data is stored with no oversight of the contents. For a data lake to make data usable, it needs to have defined mechanisms to catalog, and secure data. Without these elements, data cannot be found, or trusted resulting in a “data swamp." Meeting the needs of wider audiences require data lakes to have governance, semantic consistency, and access controls.

The value of a Data Lake: The ability to harness more data, from more sources, in less time, and empowering users to collaborate and analyze data in different ways leads to better, faster decision making. Examples where Data Lakes have added value include:
- Improved customer interactions: A Data Lake can combine customer data from a CRM platform with social media analytics, a marketing platform that includes buying history, and incident tickets to empower the business to understand the most profitable customer cohort, the cause of customer churn, and the promotions or rewards that will increase loyalty.

- Improve R&D innovation choices: A data lake can help your R&D teams test their hypothesis, refine assumptions, and assess results—such as choosing the right materials in your product design resulting in faster performance, doing genomic research leading to more effective medication, or understanding the willingness of customers to pay for different attributes.

- Increase operational efficiencies: The Internet of Things (IoT) introduces more ways to collect data on processes like manufacturing, with real-time data coming from internet connected devices. A data lake makes it easy to store, and run analytics on machine-generated IoT data to discover ways to reduce operational costs, and increase quality.  








## Links, URLs - Usability, Reliability, Integrity, Confidentiality.
Persistent URL
https://en.wikipedia.org/wiki/Persistent_uniform_resource_locator

## PURL resolvers (one operated by US Government Printing)
[Federal Depository Library Program](https://purl.fdlp.gov/index.html)
The U.S. Government Publishing Office (GPO) operates the Federal Depository Library Program (FDLP), which was established by Congress to ensure that the American public has access to its Government’s information. As part of its mission, the FDLP acquires and distributes federal information to the American public both online and through Federal Depository Libraries located in the 50 states, the District of Columbia, and U.S. territories.

As part of the online dissemination of federal information, the FDLP uses persistent uniform resource locators (PURLs) to provide stable URLs to online federal information. When a user clicks on a PURL, the request is routed to the federal publication. As federal agencies redesign and remove information from their sites, GPO staff reroute PURL entries to the appropriate location.
Includes a [catalog to search PURLS](https://catalog.gpo.gov/F?RN=188854198)

## Comparing with permalink
Both [permalink](https://en.wikipedia.org/wiki/Permalink) and PURL are used as permanent/persistent URL and redirect to the location of the requested web resource. Roughly speaking, they are the same. Their differences are about domain name and time scale:

- A permalink usually does not change the URL's domain, and is designed to persist over years.
- A PURL domain name is independently changeable, and is designed to persist over decades.

## Friendly URLs / Clean URLs / Pretty URLs
[Clean URLs](https://en.wikipedia.org/wiki/Clean_URL)

## Link Awareness
- Not widely used.
- [Link Awareness - Wikipedia](https://en.wikipedia.org/wiki/Link_awareness) : Link awareness is defined as the ability to discover, view, search and update global hyperlink information about any resource with a URL on the World Wide Web. This global link information is a shared information resource.

## Backlinks
Kinda a stale topic, but the ability to surf a site backwards.  very useful for discovery on content management systems where you can find relevant content that refers to the content you are currently consuming.

[Backlinks - Wikipedia](https://en.wikipedia.org/wiki/Backlink) :  ??? I do not know if there are modern headers/metadata standards to provider referrer attributes within http-requests.
-
A backlink for a given web resource is a link from some other website (the referrer) to that web resource (the referent).[1] A web resource may be (for example) a website, web page, or web directory.[1]
- A backlink is a reference comparable to a citation.[2] The quantity, quality, and relevance of backlinks for a web page are among the factors that search engines like Google evaluate in order to estimate how important the page is.  (think PageRank)
- Some other words for backlink are incoming link, inbound link, inlink, inward link, and citation.[1]

## Open Graph
[Open Graph](https://w3techs.com/technologies/details/da-opengraph) : Created by FaceBook used to treat a webpage as an object on a social graph.  can be used to embed pages (e.g., sharing content and embedding rich-preview link).  See also oEmbed, etc.  "Open Graph is an internet protocol that was originally created by Facebook to standardize the use of metadata within a webpage to represent the content of a page." - There are other standards, what one is the best, is TBD ([FBI Data Explore uses Open Graph](https://crime-data-explorer.fr.cloud.gov/))


## Deep Links
[Deep Linking](https://en.wikipedia.org/wiki/Deep_linking)  is the use of a hyperlink that links to a specific, generally searchable or indexed, piece of web content on a website (e.g. "http://example.com/path/page"), rather than the website's home page.

## DOI - Data Object Identifier (used by IEEE)
https://en.wikipedia.org/wiki/Digital_object_identifier
https://www.doi.org/
registry-controlled scheme


# Semantic Interoperability
https://en.wikipedia.org/wiki/Semantic_interoperability
Semantic interoperability is the ability of computer systems to exchange data with unambiguous, shared meaning. Semantic interoperability is a requirement to enable machine computable logic, inferencing, knowledge discovery, and data federation between information systems.

# Semantic Versioning
[Semantic versioning](https://semver.org/): Given a version number MAJOR.MINOR.PATCH, increment the:
- MAJOR version when you make incompatible API changes,
- MINOR version when you add functionality in a backwards compatible manner, and
- PATCH version when you make backwards compatible bug fixes.
Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

# EDA
- [AsynchAPI](https://www.asyncapi.com/) : AsyncAPI is an open source initiative that seeks to improve the current state of Event-Driven Architectures (EDA). Our long-term goal is to make working with EDAs as easy as it is to work with REST APIs. That goes from documentation to code generation, from discovery to event management. Most of the processes you apply to your REST APIs nowadays would be applicable to your event-driven/asynchronous APIs too.  To make this happen, the first step has been to create a specification that allows developers, architects, and product managers to define the interfaces of an async API. Much like [OpenAPI](https://github.com/OAI/OpenAPI-Specification) (fka Swagger) does for REST APIs.



# Identity
- identity: The information and processes by which a person, device, organization or application can be differentiated from all others at a computing level is known as a digital identity.  Proving __digital identity__ is critical to properly assigning __access levels__ for applications, service and data. This assignment of access based on a digital identity is known as __identity management__.


- identity management: Identity management typically consists of the following processes:
  - network and application access control
  - authentication
  - identity governance
  - single sign-on (SSO)
  - identity analytics
  - password management


- authorization:  Authorization verifies true user identities and applies the appropriate security access to company data.  Authorization relies on identity management.


- Authentication: Authentication is the process of proving the digital identity of a person, device or other entity in order to grant the appropriate level of authorization.

# Security

National Security System : https://csrc.nist.gov/glossary/term/national_security_system



# Observability
Logs:
Metrics:
Events:
Traces:

Traceability : [Wikipedia - Traceability](https://en.wikipedia.org/wiki/Traceability) - Traceability is the capability to trace something. In some cases, it is interpreted as the ability to verify the history, location, or application of an item by means of documented recorded identification.   Traces are typically used by application developers when looking to measure and identify the least performant calls in the code, or during troubleshooting to identify a dependency that’s behaving in an unusual fashion.  
- Specific to our environment, traceability includes tracing within an application, between applications and across-security-domains (multi-domain solutions like data attribution and HR modernization.)

# Other
- dark social(https://en.wikipedia.org/wiki/Dark_social_media): Dark social media, dark social, or dark traffic, are social shares that do not contain any digital referral information about the source. The idea is generally used by web analytics as well as in online advertising. In contrary to the sharing on social networking service like Facebook, which is done publicly, Dark social is done privately through IRC channels, emails, SMS or simply copy-and-paste and other ways of private sharing. Not to confuse with deep web, dark social media is not about the content but the traffic of online sharing. These sharing activities will often come up under the name of direct, typed/bookmarked or other similar form in today's web analytic services. And in 2014, it is believed that Dark Social consisted of 69% of sharing activities globally, whereas Facebook only holds 23%.
