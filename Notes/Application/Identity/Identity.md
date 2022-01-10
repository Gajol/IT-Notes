


[NIST Digital Identity Guidelines - *Authentication and Lifecycle Management*](https://pages.nist.gov/800-63-3/sp800-63b.html)
- 2021-06-10 - NIST updates to guidelines [ref:](https://www.hipaajournal.com/nist-updates-digital-identity-guidelines-and-tweaks-password-advice-8935/)


## Definitions:
- authentication  - authentication provides reasonable risk-based assurances that the subject accessing the service today is the same as the one who accessed the service previously

- secure delegated access -
  - [delegation](https://en.wikipedia.org/wiki/Delegation_(computer_security) - delegation at Authentication/Identity Level and delegation at Authorization/Access Control level.
  - delegated authorization scenarios:  e.g., when you allow an application to post on social media (FaceBook, Twitter, ...) as if it was you without sharing a password..


- step-up authentication - Step-up authentication is generally static and is based on predefined risk levels of resources and users. It focuses on the sensitivity and value of different resources, limiting them to users who can provide credentials that prove their claims for access.

History (?? check accuracy ??)
1. local passwords
1. authentication protocols - Kerberos - authentication centralized at domain controller (DC) meaning users, apps and services needed to be in the same organization
1. SAML (2001) - user @ company A can consumer service @ company B without sharing identity.  SAML, XML, verbose and fragile (invalidated tokens).  Reference: The OASIS Security Services Technical Committee (SSTC)
1. oAuth (2007), oAuth 2.0 (2010).   Created to handle delegated authorization scenarios.  Widely use, used for end-user authenticatoin (although not its original intent)
1. openID Connect (OIDC) - standard protocol for authenticating end-uses derived on top of oAuth 2.0 protocol.  Called a profile of oAuth 2.0.   Extends oAuth 2.0:
  - allows retrieval of identity information and information about the authentication event






# Identity

## Identity Principles
Based on the vision of "security, privacy, convenience"
1. Less is More:   
Only as for what is absolutely necessary, do not keep information for longer than necessary.
1. Be Transparent:
Be transparent with what you know about a person and why.
1. self-service account management
1. avoid asking for credentials.  Instread provide SSO and step-up authentication

## Identity Providers  

[Digidentity](https://www.digidentity.eu/en) - used by GOV.UK Verify(https://www.gov.uk/government/publications/introducing-govuk-verify/introducing-govuk-verify)
[Post Office - UK](http://www.postoffice.co.uk/government-verify) - used by GOV.UK Verify(https://www.gov.uk/government/publications/introducing-govuk-verify/introducing-govuk-verify)
[auth0 - acquired by Okta 2021-05](https://auth0.com/) - authentication and authorization
[Okta](https://www.okta.com/)

## Identity Management
- Anti-Money Laundering - [Identity Management - Digital Identification - Principles](https://www.acamstoday.org/digital-identity-the-integrity-of-information/)

- [EU Electronic Identification and Trust Services](https://digital-strategy.ec.europa.eu/en/policies/eidas-regulation)
- [UK Verify - Prove Who You Are Online](https://www.gov.uk/government/publications/introducing-govuk-verify/introducing-govuk-verify)

## Identity Attributes

[IBM Standard Identity Attributes](https://www.ibm.com/docs/en/cip?topic=api-user-identity-attributes) - standard attributes in LDAP attributes (specified in inetOrgPerson, organizationalPerson, person, and ePerson object classe)
- accountHint, accessHint, audio, businessCategory, c:country, carLicense, cn:commonName, departmentNumber, description, destinationIndicator(address), displayName, employeeNumber, employeeType, generationQualifier, homePhone, initials, internationalISDNNumber/e.164, mail/email, manager, middleName, mobile, roomNumber, title, ...

name attributes:
common name: ldap:cn
display name :
generationQualifier : Charles "the 3rd"
givenName :
middleName :
personalTItle: Mr, Ms, ..



# OpenID
[OpenID Primer - Okta](https://developer.okta.com/blog/2017/07/25/oidc-primer-part-1)
[Okta - Identity Claims and Tokens - OpenID Connect Primer](https://developer.okta.com/blog/2017/07/25/oidc-primer-part-1)


# OpenID Connect

## Vendors
[IBM Security Verify Access](https://www.ibm.com/docs/en/sva)
- [IBM OpenID Connect with Applicatoins](https://www.ibm.com/blogs/security-identity-access/open-id-connect-sharing-identity-information-with-applications/)


# References
References
- [NIST Digital Identity Guidelines - C - Federation and Assertions](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-63c.pdf)
  - SAML, OIDC (OpenID COnnect ID Token) - JWT / JWE - JSON Web Encryption
  = IdP - Identity Provider, Subscriber, Relying Party (RP)
  - ? Authenticator ?
  - SAML, Kerberos and oAuth examples


# Terms
Identity: “Identity is the critical point when you are thinking about connecting people and technology,” said McKinnon. “In the post-firewall world, we need to be able to free our technology from the datacenter. Everything today is connected. The value that all these identity connections have to the people that use them is now a component of business value itself. As we approach the point where data becomes an identifiable unit on the corporate balance sheet, identity will help validate that information value.” - [[CEO Okta - Todd McKinnon 2018]](https://www.forbes.com/sites/adrianbridgwater/2018/04/04/inside-privacy-okta-ceo-takes-hardcore-line-on-identity-management)
