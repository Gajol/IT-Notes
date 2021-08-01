
# gRPC

gRPC: Google Remote Procedure Call

# gRPC vs REST

gRPC
- faster
- payload uses Protcol Buffers
  - highly compressed format and reduces the messages' size.
  - binary; thus, it serializes and deserializes structured data in order to
    communicate and transmit it
  - strongly typed messages can be automatically converted from Protobuf to the client and server's programming language
- has an Interface Description Language.  gRPC expresses an RPC API in an [interface description language (IDL)](https://en.wikipedia.org/wiki/Interface_description_language)
- client-response communication model (based on HTTP 2) - allows for streaming communication and bidirectional support.
- [languages supported](https://grpc.io/docs/languages/): C#, C++, Dart, Go, Java, Kotlin, Node, Objective-C, PHP, Python, Ruby



REST
- RPC uses a client-server model.   
- follows a request-resonse model (typically built on HTTP 1.1)
- fully supported on all browsers (like the WWW, RESTs advantages are stability, uniformity, and universality)
- payload uses XML or JSON
  - human readable when using JSON


|Feature|gRPC|REST|
|--|--|--|
|HTTP 1.1 vs HTTP 2|Follows a client-response model of communication and is built on HTTP 2, which allows for: streaming communication and bidirectional support.|Follows a request-response model of communication and is typically built on HTTP 1.1.|
|Browser Support|Limited browser support. gRPC requires gRPC-web and a proxy layer to perform conversions between HTTP 1.1 and HTTP 2.|Universal browser support.|
|Payload Data Structure|gRPC uses Protocol Buffer by default to serialize payload data.|REST mainly relies on JSON or XML formats to send and receive data.|
|Code Generation Features|gRPC has native code generation features.|Developers must use a third-party tool like Swagger or Postman to produce code for API requests.|

When to use gRPC over REST
- due to low browser compatiblity, gRPC is limited to internal / private systems
- REST is the most-known API for connecting microservices, follows HTTP standards and universal browser support
- use gRPC for real-time streaming, IoT systesm, when fast light-weight messaging is requried  
- consider gRPC for mobile use as mobile apps do not need a browser and benefit from smaller messages

# [Goolge - Understanding gRPC, OpenAPI and REST - API Design](https://cloud.google.com/blog/products/api-management/understanding-grpc-openapi-and-rest-and-when-to-use-them)

Three significant and distinct approaches for building APIs that use HTTP.
1. REST
1. gRPC (and Apache Thrift and others)
1. OpenAPI (and its competitors)

## REST:
The least-commonly used API model is REST—only a small minority of APIs are designed this way, even though the word REST is used (or abused) more broadly. A signature characteristic of this style of API is that __clients do not construct URLs from other information__—they just use the URLs that are passed out by the server as-is.
- This is how the browser works—it does not construct the URLs it uses from piece parts, and it does not understand the website-specific formats of the URLs it uses; it just blindly follows the URLs that it finds in the current page received from the server, or that were bookmarked from previous pages or are entered by the user. The only parsing of a URL that a browser does is to extract the information required to send an HTTP request, and the only construction of URLs that a browser does is to form an absolute URL from relative and base URLs.
- If your API is a REST API, then your clients never have to understand the format of your URLs and those formats are not part of the API specification given to clients1.

REST APIs can be very simple. Lots of additional technologies have been invented for use with REST APIs—for example JSON API, ODATA, HAL, Siren or JSON Hyper-Schema and others—but you don't need any of those to do REST well

## gRPC:
A second model for using HTTP for APIs is illustrated by gRPC. gRPC uses
- HTTP/2 under the covers, but HTTP is not exposed to the API designer.
- gRPC-generated stubs and skeletons hide HTTP from the client and server too, so nobody has to worry how the RPC concepts are mapped to HTTP—they just have to learn gRPC.

The way a client uses a gRPC API is by following these three steps:
1. Decide which procedure to call
1. Calculate the parameter values to use (if any)
1. Use a code-generated stub to make the call, passing the parameter values

## OpenAPI
Probably the most popular way of designing RPC APIs that use HTTP is to use specification languages like OpenAPI (formerly known as the Swagger specification).

A signature characteristic of the OpenAPI style of API is that clients use the API by constructing URLs from other information. The way a client uses an OpenAPI API is by following these three steps:

1. Decide which OpenAPI URL path template to use [Swagger Path Templating](https://swagger.io/docs/specification/paths-and-operations/)
1. Calculate the parameter values to use (if any)
1. Plug the parameter values into the URL path template and send an HTTP request.

The OpenAPI method of using HTTP requires clients:
- to have detailed knowledge of the format of the URLs they use in requests
- to construct URLs that conform to that format from other information

This is the opposite of the way a REST API works, where clients are completely blind to the formats of the URLs they use, and never have to construct them.

## Combine Entity-Oriented Model with RPC
To use RPC in an entity-oriented style
- constrain the RPC method definitions to only those that map easily to the standard entity operations (Create, Retrieve, Update and Delete, often called CRUD3, plus __List__) for each resource type.
- reverse the usual RPC thought process—instead of starting with procedure definitions, you start by __defining your resource types__, and then make RPC method definitions corresponding to the common entity operations on those types plus any additional operations you find necessary
- Using RPC in an entity-oriented style depends on teaching people a constrained usage pattern
  - In practice we see that APIs that are designed this way are sometimes a blend of entity-oriented and procedure-oriented concepts, which undermines some of the benefits.

## Disadvantages of gRPC
According to [Google](https://cloud.google.com/blog/products/api-management/understanding-grpc-openapi-and-rest-and-when-to-use-them)
1. API calls can easily be made by simply typing URLs into a browser, or issuing cURL commands.  Programmers can access or implement an HTTP API using no more technology than a basic HTTP library
  - gRPC requires special software on both the client and the server. gRPC code must be built into the client and server.
  - this gRPC limitation maybe onerous to dynamic languages like Python, JavaScript, Node
1. A bot can crawl a REST API without metadata (similar to crawling entire HTML web)
  - RPC-style API's like gRPC do not allow this (regardless of whether it is described with gRPC or OpenAPI).  RPC gives each entity type a different API that requires custom-software (or metadata) to use it.  In practice, it is not criticl to write general-purpose API-clients.
1. HTTP APIs are often proxied to add __security features__, perform input validation, map data formats, and solve other problems.   This typically requires adding/removing headers, parsing and modifying the body.  Proxies use a combination of standard and custom headers for this.   
  - These features are commonly implemented using products like Apigee Edge that do not require traditional programming skills or the kind of software development environments that can easily integrate gRPC.   It would be much harder to do this proxying using gRPC.  
1. Using an entity-oriented approach with gRPC is mostly useful for new-builds—you won't find it easy to retrofit to an existing RPC API.
1. gRPC does not define a standard mechanism to prevent loss of data when two clients try to update the same resource at the same time, so if you use gRPC, you will likely have to invent your own. HTTP defines standard Etag and If-Match headers for this purpose—most of the HTTP APIs we design use these headers.
1. Nor does gRPC define a mechanism for making partial updates, so you will likely have to invent your own. HTTP defines a method—PATCH—for partial updates but does not say what a patch should look like or how to apply it. There are two additional IETF standards that fill this gap for JSON: [JSON merge patch - RFC 7386](https://tools.ietf.org/html/rfc7386) and [JSON patch - RFC 6902](https://tools.ietf.org/html/rfc6902). The first is simpler to use but does not handle all cases, particularly updates of arrays; the second handles more cases but is more complex to use. Most of the recent HTTP APIs I have built implement both standards and let the client choose; the Kubernetes API works this way too.




# Definitions

API : APIs stand for Application Programming Interfaces. These interfaces serve as a software intermediary that establishes specific determinations and rules for applications to interact and talk to each other. An API is responsible for delivering a response from a user to a system, which in turn is sent back from the system to the user.
