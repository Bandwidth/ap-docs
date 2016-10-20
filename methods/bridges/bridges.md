# Bridges
The Bridges resource allows you to bridge two calls together allowing for two way audio between them. A common example is bridging an incoming phone call together with a outgoing phone call.

| Verb                           | Method                                                                       | about                                                                   |
|:-------------------------------|:-----------------------------------------------------------------------------|:------------------------------------------------------------------------|
| <code class="get">GET</code>   | [`/v1/users/{userId}/bridges`](getBridges.md)                                | Get a list of previous bridges                                          |
| <code class="post">POST</code> | [`/v1/users/{userId}/bridges`](postBridges.md)                               | Create a bridge                                                         |
| <code class="get">GET</code>   | [`/v1/users/{userId}/bridges/{bridgeId}`](getBridgesBridgeId.md)             | Get information about an specific bridge                                |
| <code class="post">POST</code> | [`/v1/users/{userId}/bridges/{bridgeId}`](postBridgesBridgeId.md)            | Add one or two calls in a bridge and also put the bridge on hold/unhold |
| <code class="get">POST</code>  | [`/v1/users/{userId}/bridges/{bridgeId}/audio`](postBridgesBridgeIdAudio.md) | Play an audio or speak a sentence in a bridge                           |
| <code class="get">GET</code>   | [`/v1/users/{userId}/bridges/{bridgeId}/calls`](getBridgesBridgeIdCalls.md)  | Get the calls that are on the bridge                                    |
