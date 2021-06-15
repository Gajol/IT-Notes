See
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
