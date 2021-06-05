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
