
From Google https://cloud.google.com/blog/products/api-management/understanding-grpc-openapi-and-rest-and-when-to-use-them
OpenAPI
Probably the most popular way of designing RPC APIs that use HTTP is to use specification languages like OpenAPI (formerly known as the Swagger specification).

A signature characteristic of the OpenAPI style of API is that clients use the API by constructing URLs from other information. The way a client uses an OpenAPI API is by following these three steps:

Decide which OpenAPI URL path template to use

Calculate the parameter values to use (if any)

Plug the parameter values into the URL path template and send an HTTP request.

It should be immediately obvious that an API that works this way is not a REST API. The OpenAPI method of using HTTP requires clients to have detailed knowledge of the format of the URLs they use in requests and to construct URLs that conform to that format from other information. This is the opposite of the way a REST API works, where clients are completely blind to the formats of the URLs they use, and never have to construct them. The model supported by OpenAPI is very popular and successful and is one of the most important options available to API designers—the fact that the OpenAPI model is not REST does not diminish its usefulness or importance.

Questions:
1. How is REST API URL composed?
1. Clear URL vs URI understanding.   REST resource ...
  - Use Nouns in URL and Avoid CRUD verbs in URL (the HTTP methods PUT, GET, POST, DELETE) define the action.  Therefore verbs like add, delete, read should not be in the URL
