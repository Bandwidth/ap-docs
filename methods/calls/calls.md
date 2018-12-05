# Calls
The Calls resource lets you make phone calls and view information about previous inbound and outbound calls.

<aside class="alert general small">
<p>
Read More about Calls and Voice in the <a href="https://dev.bandwidth.com/faq/#voice">FAQ</a>
</p>
</aside>

### Base URL

`https://api.catapult.inetwork.com/v1/users/{userId}/calls/`

### Capabilities

| VERB                           | Path                                                                                      | Description                                                                                                                     |
|:-------------------------------|:------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------|
| <code class="get">GET </code>  | [`/v1/users/{userId}/calls`](getCalls.md)                                                 | Get a list of previous calls that were made or received                                                                         |
| <code class="post">POST</code> | [`/v1/users/{userId}/calls`](postCalls.md)                                                | Create an outbound phone call                                                                                                   |
| <code class="get">GET </code>  | [`/v1/users/{userId}/calls/{callId}`](getCallsCallId.md)                                  | Get information about a call that was made or received                                                                          |
| <code class="post">POST</code> | [`/v1/users/{userId}/calls/{callId}`](postCallsCallId.md)                                 | Manage an active phone call (e.g. answer an incoming call, reject an incoming call, turn on / off recording, transfer, or hang up). |
| <code class="post">POST</code> | *TRANSFER* [`/v1/users/{userId}/calls/{callId}`](postTransferCall.md)                     | Transfer an active phone call                                                                                                   |
| <code class="post">POST</code> | [`/v1/users/{userId}/calls/{callId}/audio`](postCallsCallIdAudio.md)                      | Play an audio or speak a sentence in a call                                                                                     |
| <code class="post">POST</code> | [`/v1/users/{userId}/calls/{callId}/dtmf`](postCallsCallIdDTMF.md)                        | Send DTMF (phone keypad digit presses)                                                                                          |
| <code class="get">GET </code>  | [`/v1/users/{userId}/calls/{callId}/events`](getCallsCallIdEvents.md)                     | Gets the list of call events for a call                                                                                         |
| <code class="get">GET </code>  | [`/v1/users/{userId}/calls/{callId}/events/{callEventId}`](getCallsCallIdEventsEventId)   | Gets information about one call event                                                                                           |
| <code class="get">GET </code>  | [`/v1/users/{userId}/calls/{callId}/recordings`](getCallsCallIdRecordings.md)             | Retrieve all recordings related to the call                                                                                     |
| <code class="get">GET </code>  | [`/v1/users/{userId}/calls/{callId}/transcriptions`](getCallsCallIdTranscriptions.md)     | Retrieve all transcriptions related to the call                                                                                 |
| <code class="post">POST</code> | [`/v1/users/{userId}/calls/{callId}/gather`](postCallsCallIdGather.md)                    | Gather the DTMF digits pressed                                                                                                  |
| <code class="get">GET </code>  | [`/v1/users/{userId}/calls/{callId}/gather/{gatherId}`](getCallsCallIdGatherGatherId.md)  | Get the gather DTMF parameters and results                                                                                      |
| <code class="post">POST</code> | [`/v1/users/{userId}/calls/{callId}/gather/{gatherId}`](postCallsCallIdGatherGatherId.md) | Update the gather (Stop Gather)                                                                                                 |

### Receive Incoming Calls
To receive [callbacks](../../apiCallbacks/voiceEvents.md) for incoming calls. You need to have:

* A [Bandwidth Application](../applications/applications.md) configured to send callbacks to your server.
* Assign the [phone number](../phoneNumbers/postPhoneNumbersNumberId.md) to that application.
