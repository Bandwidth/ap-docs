# Messages
The Messages resource lets you send SMS/MMS messages and view messages that were previously sent or received.

<aside class="alert general small">
<p>
Read More about Messaging in the <a href="http://dev.bandwidth.com/faq/#messaging">FAQ</a>
</p>
</aside>

### Base URL

`https://api.catapult.inetwork.com/v1/users/{userId}/messages`

### Capabilities

| Verb                           | Path                                                                 | about                           |
|:-------------------------------|:---------------------------------------------------------------------|:--------------------------------|
| <code class="get">GET</code>   | [`/v1/users/{userId}/messages`](getMessages.md)                      | Get a list of previous messages |
| <code class="post">POST</code> | [`/v1/users/{userId}/messages`](postMessages.md)                     | Send message                    |
| <code class="get">GET</code>   | [`/v1/users/{userId}/messages/{messageId}`](getMessagesMessageId.md) | Get information about a message |

### Receive Incoming Messages
To recieve [callbacks](../../apiCallbacks/messagingEvents.md) for incoming text messages (both SMS and MMS). You need to have [set up your account](http://dev.bandwidth.com/howto/incomingCallandMessaging.html) to point to your callback Url.