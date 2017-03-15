{% method %}
## Transfer active Call
Transfer a call to another phone number.  This is a subset of [update calls](postCallsCallId.md).

### Request URL

<code class="post">POST</code>`https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}`

---

### Supported Parameters

| Parameter           | Description                                                                                                                                                                                                                                                                                                                                                                                          | Mandatory |
|:--------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| state               | `transferring` to transfer the incoming call to another line. <br> *THE CALL MUST BE ANSWERED*                                                                                                                                                                 | No        |
| recordingEnabled    | Indicates if the call should be recorded. Values `true` or `false`. You can turn recording on/off and have multiple recordings on a single call.                                                                                                                                                                                                                                                     | No        |
| recordingFileFormat | The file format of the recorded call. Supported values are `wav` (default) and `mp3`.                                                                                                                                                                                                                                                                                                                | No        |
| transferTo          | Phone number or SIP address that the call is going to be transferred to.                                                                                                                                                                                                                                                                                                                             | No        |
| transferCallerId    | This is the caller id that will be used when the call is transferred. This parameter is only considered in transfer state.<br>- transferring an incoming call: allowed values are 1) `private` 2) the incoming call `from` number or 3) any Bandwidth number owned by user.<br>- transferring an outgoing call call: allowed values are 1) `private` or 2) any Bandwidth phone number owned by user. | No        |
| whisperAudio        | Audio to be played to the caller that the call will be transferred to. See /audio.                                                                                                                                                                                                                                                                                                                   | No        |
| callbackUrl         | The server URL where the call events for the new call will be sent upon transferring.                                                                                                                                                                                                                                                                                                                | No        |

{% common %}
### Example: Transfer a call using the caller Id of the party being transferred
{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}\
	-u {token}:{secret} \
	-H "Content-type: application/json" \
	-d \
	'
	{
		"state".    : "transferring",
		"transferTo : "+19192223333"
	}'
```

{% sample lang="js" %}

```js
var transferPayload = {
	transferTo       : "+18382947878",
};
//Using Promises
client.Call.transfer("callId", transferPayload).then(function (res) {});
```

{% common %}
### Example: Transfer a call and play audio to the '838-294-7878' Line

{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}\
	-u {token}:{secret} \
	-H "Content-type: application/json" \
	-d \
	'
	{
		"state":"transferring",
		"transferCallerId": "private"
		"transferTo": "+18382947878",
		"whisperAudio": {
			"sentence" : "Hello! You have an incoming call"
		}
	}'
```

{% sample lang="js" %}

```js
//Transfer call
var speakSentence = {
	transferTo       : "+18382947878",
	transferCallerId : "private",
	whisperAudio     : {
		sentence : "You have an incoming call",
		gender   : "female",
		voice    : "julie",
		locale   : "en"
	}
};

//Using Promises
client.Call.transfer("callId", speakSentence).then(function (res) {});

```
{% endmethod %}