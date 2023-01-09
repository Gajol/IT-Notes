# GOV UK API Standards

https://www.gov.uk/guidance/gds-api-technical-and-data-standards#iterate-your-api

## UK Public Sector APIs
API Catalogue: https://www.api.gov.uk/#uk-public-sector-apis 

## API First 

### 
Practice API-first design
API first is the practice of designing software with an API as the first interface to your data - and then having further interfaces such as web or mobile use that API as a way to access the data.

Developing the API before the rest of the service means a platform or service can be built around the API. This would reduce the need to repeat work later if an external API is required.

APIs are often an afterthought, built when a service already exists as a way for other services to access its data. If you’re building an API to a legacy system, that may be your only choice, but you should still think about the user needs for your API.

Developing your API before any other interfaces has other advantages. These include:

- other services being able to use your API

- stress-testing of your API by your own internal services, allowing you to make continuous improvements to it and improve it for external users - this will improve developer experience by exposing the complexities of the API and making sure, for example, that documentation is fit for purpose
- improved modularity and reuse of code, as the API will not have to be customised to fit an existing service - this leads to more consistent interfaces, meaning developers can be more comfortable with your API and can speed up integration
- the underlying data structures of your API will be fit for purpose - starting with the API means that the design of the underlying data store must be considered from the beginning, and separated from the business logic of the service (see below ‘Abstract away your processes’)

# API Technical and Data Standards
https://www.gov.uk/guidance/gds-api-technical-and-data-standards#when-iterating-your-api

- [Manage Authorizations - API Gateway](https://www.gov.uk/guidance/defining-an-api-management-strategy#managing-operations-with-an-api-gateway)

- [Versioning - Taking your API Out-of-Service](https://www.gov.uk/guidance/defining-an-api-management-strategy#taking-your-api-out-of-service)

# Google Tag Manager
Used in GOV UK's data warehouse.
https://marketingplatform.google.com/about/tag-manager/features/ 


# Structuring, Designing and Publishing your API
https://www.gov.uk/guidance/how-to-document-apis


# Cyber Security Design Principles
https://www.ncsc.gov.uk/collection/cyber-security-design-principles

## OWASP Top 10 Security Risks for APIs 
https://owasp.org/www-project-api-security/
