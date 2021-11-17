# express API REST

## 6 constraints to be RESTful:

Uniform Interface: 

Maintain uniformity, consistency, a pattern in the construction of the interface. Our API needs to be consistent for whoever is going to consume it. It needs to make sense to the customer and not be confusing. Such things as the correct use of HTTP verbs, coherent endpoints (all endpoints in the plural, for example), use only one communication language (JSON) and not several simultaneously; always sending responses to customers; are examples of applying a uniform interface.

Client-server: 

Separation of client and data storage (server), this way, we can have portability of our system, using React for WEB and React Native for smartphones, for example.

Stateless: 

Each request that the client makes to the server must contain all the information necessary to understand and respond (RESPONSE) to the request (REQUEST). Example: The user session must be sent in all requests to know if that user is authenticated and can use the services. The server cannot remember that the client was authenticated in the previous request. In our courses, we default to using tokens for communications.

Cacheable: 

The responses to a request must be explicit when saying whether the client can cache that request or not.

Layered System: 

The client accesses an endpoint without knowing the complexity, what steps are necessary for the server to respond to the request, or what other layers the server will be dealing with so that the request is answered.

Code on demand (optional): 

It gives our application the possibility to get codes, such as javascript, for example, and execute it on the client.

Resource is a object, has data e relationship.

Good pratices:
1 - Use verbs HTTP.
2 - Dont use / in the end of endpoint
3 - Use always the same endpoint (pattern)
4 - Always have response to a client

HTTP Verbs: 


GET - receive data from resource 
POST - send data to be process
PUT - update data
DELETE - delete a resource

Response Status:

1xx: Information
2xx: Sucess
     200: OK
     201: CREATED
     204: Don't have content in PUT POST DELETE
3xx: Redirection
4xx: Client Error
     400: Bad Request
     404: Not Found!
5xx: Server Error 500: Internal Server Error

https://localhost:3000/clients  endpoint clients (resource), URI - https://localhost:3000/clients

data from https://jsonplaceholder.typicode.com/users
