
To learn
- [ ] Kerberos Authentication
- [ ] Windows NTLM

# OpenID
OpenID Connect implicit flow in an angular app, and

## Angular

https://www.taithienbo.com/pass-users-identity-and-authorization-from-a-client-application-to-a-web-api-to-another-web-api-using-oauth-2-0-on-behalf-of-flow/
The OAuth 2.0 On-Behalf-Of flow (OBO) serves the use case where an application invokes a service/web API, which in turn needs to call another service/web API. The idea is to propagate the delegated user identity and permissions through the request chain.

2019 - Web API chains (On-Behalf-Of) is not supported by Azure AD B2C. – Many architectures include a web API that needs to call another downstream web API, both secured by Azure AD B2C. This scenario is common in clients that have a web API back end, which in turn calls a another service. This chained web API scenario can be supported by using the OAuth 2.0 JWT Bearer Credential grant, otherwise known as the On-Behalf-Of flow. However, the On-Behalf-Of flow is not currently implemented in Azure AD B2C [ref](https://www.taithienbo.com/pass-users-identity-and-authorization-from-a-client-application-to-a-web-api-to-another-web-api-using-oauth-2-0-on-behalf-of-flow/)

[MSFT oAuth OBO](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-on-behalf-of-flow#example)


oAuth2 - Client Credentials Flow (lose track of original user)
https://www.taithienbo.com/oauth2-client-credentials-grant/



# ASP.Net
 MVC - httpClient, webCient (pass authentication, serialize JSON data)
 On-Behalf-Of (OBO) flow in ASP.NET core backend APIs.

# HTTP Basic Authentication (header)

No longer supported by IE, Chrome, Firefox, ... (2014..)[chrome kb reference](https://bugs.chromium.org/p/chromium/issues/detail?id=123150)

 http://username:password@example.com/ -- this sends the credentials in the standard HTTP "Authorization" header.


 # Books
 [OReilly - API Security in Action](https://www.oreilly.com/library/view/api-security-in/9781617296024/)


 
