# Endpoints
An endpoint represents is an entity that can register with the Application Platform SIP Registrar and place and receive calls. This can be a device like a phone or a pad, or it can be a softphone on a computer.

### Base URL

`https://api.catapult.inetwork.com/v1/users/{userId}/domains/{domainId}/endpoints`

### Capabilities

| Verb                               | Path                                                                                           | about                             |
|:-----------------------------------|:-----------------------------------------------------------------------------------------------|:----------------------------------|
| <code class="get">GET</code>       | [`/v1/users/{userId}/domains/{domainId}/endpoints`](getEndpoints.md)                           | List all endpoints on a domain    |
| <code class="post">POST</code>     | [`/v1/users/{userId}/domains/{domainId}/endpoints`](postEndpoints.md)                          | Create a new endpoint on a domain |
| <code class="get">GET</code>       | [`/v1/users/{userId}/domains/{domainId}/endpoints/{endpointId}`](getEndpointsEndpointId.md)    | Get a single endpoint             |
| <code class="delete">DELETE</code> | [`/v1/users/{userId}/domains/{domainId}/endpoints/{endpointId}`](deleteEndpointsEndpointId.md) | Delete specific endpoint          |
| <code class="post">POST</code>     | [`/v1/users/{userId}/domains/endpoints/{endpointId}`](postEndpointsEndpointId.md)              | Update an endpoint                |

An endpoint is addressable using a unique SIP URI which is constructed using the endpoint's user name and the domain in which the endpoint exists.

There are no restrictions on the number of SIP clients that can be associated with an endpoint.  That is, an application can create one endpoint in the App Platform and give the SIP URI and credentials to as many of their own clients as it likes.  However, when a call is made to the SIP URI for that endpoint, all clients registered as that endpoint (using that SIP URI and credentials to register) will receive the call.  The call will be completed to the first client that answers.  If you're looking for a default simultaneous ringing application this would be a great solution.  If you have an endpoint that goes directly to voicemail though, you might wonder why your other devices ring but by the time you answer, there's no call.

If you don't want all your SIP clients to ring simultaneously, create an endpoint for each client.  You can still associate a single phone number with a group of clients, but the application has more control over which client will ring when that number is called.

## Where to Register
When an endpoint is created on Bandwidth, a unique SIP URI is created to identify that endpoint.  That SIP URI is used in both the `To` and `From` headers in the REGISTER message.  The Request URI of the REGISTER message must use the domain from the SIP URI of the client registering.  The domain is resolved via DNS to determine where to send the REGISTER message.

## Calls to a Client
When a new incoming call is to a number the application has associated with one, or some of its clients, the application can initiate an outbound call using the SIP URI.  Any client registered using the credentials associated with that SIP URI will receive the call.  The first one to answer will be connected, on the other clients the call will be canceled.  Once that outbound call is connected, the application can bridge the original inbound call with the newly created outbound call.

## Calls from a Client
When a client wants to initiate a call, it sends an INVITE with the called number in the user part of the SIP URI in the 'To' header.  The 'From' header will be the SIP URI associated with the endpoint.

An application must be associated with the endpoint representing the client in Bandwidth.  This is so Bandwidth can generate an event to the application to determine how a call should be handled.  If no application is associated with the endpoint, the client's call will be rejected.

Where the INVITE is sent is determined in the same way as the REGISTER.  The domain from the client's SIP URI is used in the Request URI for the INVITE message.
