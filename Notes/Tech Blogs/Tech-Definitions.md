
# Terms

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








# Persistent URL
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



DOI - Data Object Identifier (used by IEEE)
https://en.wikipedia.org/wiki/Digital_object_identifier
https://www.doi.org/
registry-controlled scheme


Semantic Interoperability
https://en.wikipedia.org/wiki/Semantic_interoperability
Semantic interoperability is the ability of computer systems to exchange data with unambiguous, shared meaning. Semantic interoperability is a requirement to enable machine computable logic, inferencing, knowledge discovery, and data federation between information systems.
