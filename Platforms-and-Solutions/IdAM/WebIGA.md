# Identity, Access and Governance (IAG)

Modern web authentication and authorization.


https://medium.com/devops-dudes/what-the-heck-are-oauth-and-jwt-3af3b4300b7

oAuth / JWT

## [Keycloak](https://www.keycloak.org/)

Background:
- [Authorisation Services](https://www.keycloak.org/docs/latest/authorization_services/)
- [Keycloak - Wikipedia](https://en.wikipedia.org/wiki/Keycloak)
- [Keycloak - Tutorials](https://keycloak.ch/keycloak-tutorials/)

Features / Focus:
- [Identity and Access Management](https://en.wikipedia.org/wiki/Identity_and_Access_Management) and SSO with IdAM.
- User Registration
- [Social Login](https://en.wikipedia.org/wiki/Social_login)
- [SSO](https://en.wikipedia.org/wiki/Single_sign-on) to applications in same Realm
- [2-factor authentication](https://en.wikipedia.org/wiki/Multi-factor_authentication)
- [LDAP Integration](https://en.wikipedia.org/wiki/Lightweight_Directory_Access_Protocol)
- [Kerberos broker](https://en.wikipedia.org/wiki/Kerberos_(protocol))
- tenancy with per-realm customizable skin


Attributes:
- open-source ([Redhat github repo](https://github.com/keycloak/keycloak))
- 2 main components: Keycloak server, Keycloak application adaptor
- client adaptors: Keycloak client adapters are libraries that make it very easy to secure applications and services with Keycloak. We call them adapters rather than libraries as they provide a tight integration to the underlying platform and framework. This makes our adapters easy to use and they require less boilerplate code than what is typically required by a library.

## [Client Adaptors](https://www.keycloak.org/docs/latest/securing_apps/#_token-exchange)
  - [OpenID Connect](https://openid.net/connect/) on platforms Java {JBoss, WildFly, Fuse, Tomecat, Jetty 9, Servlet Filter, Spring Boot, Spring Security}, JavaScript {Client: JavaScript, Service: Node.js}, C# {OWIN}, Python {oidc}, iOS {AppAuth}, Apache HTTP Server }mod_auth_openidc}
  - [SAML] [SAML - Wikipedia](https://en.wikipedia.org/wiki/Security_Assertion_Markup_Language) on platforms Java, Apache HTTP Server

### [Supported Protocols](https://www.keycloak.org/docs/latest/securing_apps/#supported-protocols)
- OpenID Connect
- SAML 2.0
- [OpenID Connect vs SAML](https://www.keycloak.org/docs/latest/securing_apps/#openid-connect-vs-saml)
  - preference is for OpenID
  - Open ID Connect is designed for the web from the start (SAML was retrofitted to work on the web)
  - OpenID Connect is less-verbose than SAML
  - OpenID Connect is suited for HTML5/JS applications.  Easier to implement on client-side; JS friendly (token is in JSON).  e.g., check [iframe trick for user logged in](https://openid.net/specs/openid-connect-session-1_0.html#ChangeNotification)



Used-By:
- RedHat for their [RH-SSO](https://access.redhat.com/products/red-hat-single-sign-on) JBoss/Wildfly based.
- started in 2013

History:
- Redhat JBoss SSO (open-source)
## [Okta](https://www.okta.com/)

[OWASP](https://fr.wikipedia.org/wiki/Open_Web_Application_Security_Project)


# Tutorials
- [Keycloak Tutorials]
  - Minimum System Requirements:
    - Java 8 JDK, 512 RAM, 1G disk
    - External DB (PostgreSQL, MySQL, ....) - External DB required if Keycloak cluster desired.
    - Network multicast support (if Keycloak cluster desired)


## SAML
https://www.oracle.com/technical-resources/articles/enterprise-architecture/saml.html


# System Integrators
[Ernst&Young - EY Identity Managemnet](https://www.ey.com/en_ca/consulting/digital-identity)

# Identity Managers
List from EY experience [article](https://www.ey.com/en_ca/consulting/digital-identity):
- SailPoint
- CyberArk
- OneIdentity
- Savyint
- Okta
- Radiant Logic
- ForgeRock
- Ping Identity
- Axiomatics
- Plain ID
- IBM Security Identity Manager (ISIM/ISAM)
- RSA Aveksa RSA Identity Governance and Lifecycle
- Oracle Identity Management (OIM)
