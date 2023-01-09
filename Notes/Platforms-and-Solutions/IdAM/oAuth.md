# oAuth

## Scopes
https://oauth.net/2/scope/
Scope is a mechanism in OAuth 2.0 to limit an application's access to a user's account. An application can request one or more scopes, this information is then presented to the user in the consent screen, and the access token issued to the application will be limited to the scopes granted.

The OAuth spec allows the authorization server or user to modify the scopes granted to the application compared to what is requested, although there are not many examples of services doing this in practice.

OAuth does not define any particular values for scopes, since it is highly dependent on the service's internal architecture and needs.

[Google Scopes](https://developers.google.com/identity/protocols/oauth2/scopes)

Google Identity site also has:
- cross-client identity
- access to api's (google apis)
  - server-side web apps
  - JavaScript web apps
  - mobile & desktop apps
  - service accounts

  - [Open ID Connect - Google's OAuth 2.0 APIs](https://developers.google.com/identity/protocols/oauth2/openid-connect) can be used for both authentication and authorization. This document describes our OAuth 2.0 implementation for authentication, which conforms to the OpenID Connect

# NIST Federation and Assertions

- [NIST Digital Identity Guidelines - C - Federation and Assertions](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-63c.pdf)
  - SAML, OIDC (OpenID COnnect ID Token) - JWT / JWE - JSON Web Encryption
    = IdP - Identity Provider, Subscriber, Relying Party (RP)
  - ? Authenticator ?
  - SAML, Kerberos and oAuth examples


## UserInfo Endpoint

In addition to the ID Token, the IdP also issues the client an OAuth 2.0 access token which can
be used to access the UserInfo Endpoint at the IdP. This endpoint returns a JSON object
representing a set of attributes about the subscriber, including but not limited to their name,
email address, physical address, phone number, and other profile information.

While the information inside the ID Token is reflective of the authentication event, the information in the
UserInfo Endpoint is generally more stable and could be more general purpose. Access to
different attributes from the UserInfo Endpoint is governed by the use of a specially-defined set
of OAuth *scopes, openid, profile, email, phone, and address*.

An additional scope, offline_access,
is used to govern the issuance of refresh tokens, which allow the RP to access the UserInfo
Endpoint when the subscriber is not present. Access to the UserInfo Endpoint is structured as an
API and may be available when the subscriber is not present. Therefore, access to the UserInfo
Endpoint is not sufficient for proving a subscriber’s presence and establishing an authenticated
session at the RP.
