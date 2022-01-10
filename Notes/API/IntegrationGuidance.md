TO DO
- to IdAM
  - see Okta build vs buy (..OneDrive\Documents\Technical\IdAM)


TO DESCRIBE
- distributed architecture : why popular (CNA, ...)
- event driven application : why popular (loosely coupled, back pressure / "queuing", ...)
- api standards
  - REST, ...
  - (OpenAPI, ...)
- authentication standards (OIDC, oAuth, ), providers (keycloak)...
- tokens : JWT
- api platforms
  - 2014-2020 - boomi (saas) - now Dell Boomi
  - esb : enterprise service bus
  - kafka : streaming
    - open source kafka vs Confluent Cloud (kafka, ksql, kafka connect, ...)
  - nifi : file movement
  - event brokers
  - api gateway
  - GC CDXP (with Solace PubSub+)

- authentication / authorization - best practices (OWASP???)
  - secrets management: "policy?" secrets how to store, where to store, who has access (s2s/m2m server/machine api)
    - Centralized secrets management simplifies application development with secure access control across tools, applications, and cloud environments.  [ref: [CyberArk Conjur](https://www.conjur.org/solutions/secrets-management/)] - see [DevOps Security at Scale - 6 Core Principles @ OneDrive/../Technical/DevOps/](https://1drv.ms/b/s!AkwXSmFk-_xpgoNkK5Wm2_NaLdiBaQ?e=GGxIq8)
    - Microsoft Power Secrets Management [ref](https://devblogs.microsoft.com/powershell/secrets-management-development-release/) - see [Microsoft Authenication - Credentials Manager](https://docs.microsoft.com/en-us/windows/win32/secauthn/authentication-portal)


  REST API Terms
  Header
  Body
  Scheman : JSON / XML

- tools
  - postman / openapi
  - swagger
  - ?? catalog / portal of apis / sourcing standard (github)


|Vendors|Technology|Comment|
|--|--|--|
|[Kong - Insomnia](https://insomnia.rest/)|REST API dev|Collaborative API Client and Design Tool|
|[CyberArck Conjur](https://www.conjur.org/blog/how-to-build-your-secrets-management-rest-apis-into-postman/)|Secrets Management - opensource | A seamless open source interface to securely authenticate, control and audit non-human access across tools, applications, containers and cloud environments via robust secrets management.|
|[Solace](https://docs.solace.com/)|PubSub Cloud|GC CDXP Standard|


# References
EU - EIRA - Interoperability Layers [EIRA 2.0 2017](https://joinup.ec.europa.eu/sites/default/files/distribution/access_url/2017-10/eira_v2_0_0_overview.pdf) based on TOGAF.
- Political Context : Cooperating partners with compatible visions, aligned priorities, and focused objectives
- Legal Interoperability : Legislative Alignment : Aligned legislation so that exchanged data is accorded proper legal weight.
- Organisational Interoperability : Organisation and Process Alignment : Coordinated processes in which different organisations achieve a previously agreed and mutually beneficial goal
- Semantic Interoperability : Semantic Alignment : Precise meaning of excanged information which is preserved and understood by all parties
- Technical Interoperability : Interaction & transport : Planning of technical issues involved in linking computer systems and services
