

# Kafka

## DataHub - Metadata Management
[Aug 2019 - DataHub: A generalized metadata search & discovery tool](https://engineering.linkedin.com/blog/2019/data-hub)
[Feb 2020](https://engineering.linkedin.com/blog/2020/open-sourcing-datahub--linkedins-metadata-search-and-discovery-p)
 - metadata search and discovery platform


- replaces [WhereHow] 2-16(https://engineering.linkedin.com/blog/2016/03/open-sourcing-wherehows--a-data-discovery-and-lineage-portal):  WhereHows is a central metadata repository and portal for datasets. The type of metadata stored includes both technical metadata (e.g., location, schema, partitions, ownership) and process metadata (e.g., lineage, job execution, lifecycle information). WhereHows also featured a search engine to help locate the datasets of interest.

Uses:
1. {Pegasus](https://linkedin.github.io/rest.li/DATA-Data-Schema-and-Templates} - LinkedIn's open-source data schema language. Pegasus doesn’t provide an explicit way to model relationships or associations, LinkedIn introduced some custom extensions to support these use cases.


## Wherehow - Examples
[AirBnb’s Dataportal](https://medium.com/airbnb-engineering/democratizing-data-at-airbnb-852d76c51770)
[Uber’s Databook](https://eng.uber.com/databook/)
[Netflix’s Metacat](https://medium.com/netflix-techblog/metacat-making-big-data-discoverable-and-meaningful-at-netflix-56fb36a53520)
[Lyft’s Amundsen](https://eng.lyft.com/amundsen-lyfts-data-discovery-metadata-engine-62d27254fbb9)
[Google’s Data Catalog](https://cloud.google.com/data-catalog/)

### Lessons Learned from WhereHow [[ref]](https://engineering.linkedin.com/blog/2019/data-hub)
1. __Push is better than pull__: While pulling metadata directly from the source seems like the most straightforward way to gather metadata, developing and maintaining a centralized fleet of domain-specific crawlers quickly becomes a nightmare. It is more scalable to have individual metadata providers push the information to the central repository via APIs or messages. This push-based approach also ensures a more timely reflection of new and updated metadata.
1. __General is better than specific__: WhereHows is strongly opinionated about how the metadata for a dataset or a job should look like. This results in an opinionated API, data model, and storage format. A small change to the metadata model will lead to a cascade of changes required up and down the stack. It would have been more scalable had we designed a general architecture that is agnostic to the metadata model it stores and serves. This in turn would have allowed us to focus on onboarding and evolving strongly opinionated metadata models without worrying about the lower layers of the stack.
1. __Online is as important as offline__: Once the metadata has been collected, it’s natural to want to analyze that metadata to derive value. One simple solution is to dump all the metadata to an offline system, like Hadoop, where arbitrary analyses can be performed. However, we soon discovered that supporting offline analyses alone wasn’t enough. There are many use cases, such as access control and data privacy handling, that must query against the latest metadata online.
1. __Relationships really matter__: Metadata often conveys important relationships (e.g., lineage, ownership, and dependencies) that enable powerful capabilities like impact analysis, data rollup, better search relevance, etc. It is critical to model all these relationships as first-class citizens and support efficient analytical queries over them.
1. __Multi-center universe__: We realized that it is not enough to simply model metadata centered around a single entity (a dataset). There is an entire ecosystem of data, code, and human entities (datasets, data scientists, teams, code, microservice APIs, metrics, AI features, AI models, dashboards, notebooks, etc.) that need to be integrated and connected through a single metadata graph.


## Kafka

## samza
https://samza.apache.org/



# Metadata collection
- reference:
  - CSIS (Canada) issues with metadata collection
  - Internet "Cookies" modernization as a result of GPDR and other pressues. See [The Trade Desk - Unified ID 2.0](https://www.thetradedesk.com/us/about-us/industry-initiatives/unified-id-solution-2-0) and major advertising companies [Google Delays Third Party Cookiess to 2023] (https://www.engadget.com/google-delay-third-party-cookie-150034054.html) and [Google Privacy Sandbox](https://www.engadget.com/2019-08-22-google-proposes-privacy-sandbox.html) to replace 3rd party cookies.
we have also been busy expanding our scope of metadata collection to power new use cases while preserving fairness, privacy, and transparency. However, we came to realize WhereHows had fundamental limitations that prevented it from meeting our evolving metadata needs. Here is a summary of the lessons we learned from scaling WhereHows:
