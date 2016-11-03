{% method %}
## Update active Call
Update properties of an active phone call.

### Request URL

<code class="post">POST</code>`https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}`

---

### Supported Parameters

| Parameter           | Description                                                                                                                                                                                                                                                                                                                                                                                          | Mandatory |
|:--------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| state               | The call state. Possible values: <br> `rejected` to reject not answer<br> `active` to answer the call<br>`completed` to hangup the call<br>`transferring` to start and connect call to a new outbound call.                                                                                                                                                                                          | No        |
| recordingEnabled    | Indicates if the call should be recorded. Values `true` or `false`. You can turn recording on/off and have multiple recordings on a single call.                                                                                                                                                                                                                                                     | No        |
| recordingFileFormat | The file format of the recorded call. Supported values are `wav` (default) and `mp3`.                                                                                                                                                                                                                                                                                                                | No        |
| transferTo          | Phone number or SIP address that the call is going to be transferred to.                                                                                                                                                                                                                                                                                                                             | No        |
| transferCallerId    | This is the caller id that will be used when the call is transferred. This parameter is only considered in transfer state.<br>- transferring an incoming call: allowed values are 1) `private` 2) the incoming call `from` number or 3) any Bandwidth number owned by user.<br>- transferring an outgoing call call: allowed values are 1) `private` or 2) any Bandwidth phone number owned by user. | No        |
| whisperAudio        | Audio to be played to the caller that the call will be transferred to. See /audio.                                                                                                                                                                                                                                                                                                                   | No        |
| callbackUrl         | The server URL where the call events for the new call will be sent upon transferring.                                                                                                                                                                                                                                                                                                                | No        |

{% common %}
### Example: Answer an Incoming Phone Call
### Example: Reject an Incoming Phone Call
### Example: Hang Up a Phone Call
### Example: Turn call recording ON
### Example: Turn call recording OFF
### Example: Transfer a call
### Example: Transfer a call using the caller Id of the party being transferred
### Example: Transfer a call and say something before bridging the calls
### Example: Transfer a call and say something before bridging the calls
{% endmethod %}
