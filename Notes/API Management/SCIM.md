# SCIM

https://datatracker.ietf.org/doc/html/rfc7644
System for Cross-domain Identity Management: Protocol [IETF RFC7644](https://datatracker.ietf.org/doc/html/rfc7644)

## Abstract

The System for Cross-domain Identity Management (SCIM) specification
is an HTTP-based protocol that makes managing identities in multi-
domain scenarios easier to support via a standardized service.
Examples include, but are not limited to, enterprise-to-cloud service
providers and inter-cloud scenarios.  The specification suite seeks
to build upon experience with existing schemas and deployments,
placing specific emphasis on simplicity of development and
integration, while applying existing authentication, authorization,
and privacy models.  SCIM's intent is to reduce the cost and
complexity of user management operations by providing a common user
schema, an extension model, and a service protocol defined by this
document.

# Identity providers

## Okta

[Okta SCIM Overview](https://www.okta.com/blog/2017/01/what-is-scim/) : SCIM is a REST and JSON-based protocol that defines a client and server role. A client is usually an identity provider (IDP), like Okta, that contains a robust directory of user identities. A service provider (SP) is usually a SaaS app, like Box or Slack, that needs a subset of information from those identities. When changes to identities are made in the IdP, including create, update, and delete, they are automatically synced to the SP according to the SCIM protocol. The IdP can also read identities from the SP to add to its directory and to detect incorrect values in the SP that could create security vulnerabilities. For end users, this means that they have seamless access to applications for which they’re assigned, with up-to-date profiles and permissions.
