{% method %}
## Update active Call
Update properties of an active phone call.

For more information about recording and transcribing calls, see the <a href="http://dev.bandwidth.com/faq/#voice">FAQ</a>

### Request URL

<code class="post">POST</code>`https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}`

---

### Supported Parameters

| Parameter           | Description                                                                                                                                                                                                                                                                                                                                                                                          | Mandatory |
|:--------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| state               | The call state. Possible values: <br><br> `rejected` to reject not answer<br> `active` to answer the call<br>`completed` to hangup the call<br><br>`transferring` to transfer the incoming call to another line. [See the docs specific for transferring](postTransferCall.md)                                                                                                                                                          | No        |
| recordingEnabled    | Indicates if the call should be recorded. Values `true` or `false`. You can turn recording on/off and have multiple recordings on a single call.                                                                                                                                                                                                                                                     | No        |
| recordingFileFormat | The file format of the recorded call. Supported values are `wav` (default) and `mp3`.                                                                                                                                                                                                                                                                                                                | No        |
| transferTo          | Phone number or SIP address that the call is going to be transferred to.                                                                                                                                                                                                                                                                                                                             | No        |
| transferCallerId    | This is the caller id that will be used when the call is transferred. This parameter is only considered in transfer state.<br>- transferring an incoming call: allowed values are 1) `private` 2) the incoming call `from` number or 3) any Bandwidth number owned by user.<br>- transferring an outgoing call call: allowed values are 1) `private` or 2) any Bandwidth phone number owned by user. | No        |
| whisperAudio        | Audio to be played to the caller that the call will be transferred to. See /audio.                                                                                                                                                                                                                                                                                                                   | No        |
| callbackUrl         | The server URL where the call events for the new call will be sent upon transferring.                                                                                                                                                                                                                                                                                                                | No        |

{% common %}
### Example 1 of 5: Answer an Incoming Phone Call
{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}\
	-u {token}:{secret} \
	-H "Content-type: application/json" \
	-d \
	'
	{
		"state":"active"
	}'
```

{% sample lang="js" %}

```js
//Promise
client.Call.answer("callID").then(function () {});

//Callback
client.Call.answer("callID", function (err) {});
```

{% sample lang="csharp" %}

```csharp
await client.Call.AnswerSync("callID");
```

{% sample lang="ruby" %}

```ruby
call.answer_on_incoming()
```


{% common %}
### Example 2 of 5: Hang Up a Phone Call

{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}\
	-u {token}:{secret} \
	-H "Content-type: application/json" \
	-d \
	'
	{
		"state":"completed"
	}'
```

{% sample lang="js" %}

```js
//Promise
client.Call.hangup("callID").then(function () {});

//Callback
client.Call.hangup("callID", function (err) {});
```

{% sample lang="csharp" %}

```csharp
await client.Call.HangupAsync("callID");
```

{% sample lang="ruby" %}

```ruby
call.hangup()
```


{% common %}
### Example 3 of 5: Turn call recording ON

{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}\
	-u {token}:{secret} \
	-H "Content-type: application/json" \
	-d \
	'
	{
		"recordingEnabled":"true"
	}'
```

{% sample lang="js" %}

```js
//Turn on recording

//Promise
client.Call.enableRecording("callId").then(function (res) {});

//Callback
client.Call.enableRecording("callId", function (err, res) {});
```
{% sample lang="csharp" %}

```csharp
await client.Call.TurnCallRecordingAsync("callID", true);
```

{% sample lang="ruby" %}

```ruby
call.recording_on()
```

{% common %}
### Example 4 of 5: Turn call recording OFF
{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}\
	-u {token}:{secret} \
	-H "Content-type: application/json" \
	-d \
	'
	{
		"recordingEnabled":"false"
	}'
```

{% sample lang="js" %}

```js
//Turn off recording
//Promise
client.Call.disableRecording("callId").then(function (res) {});

//Callback
client.Call.disableRecording("callId", function (err, res) {});
```

{% sample lang="csharp" %}

```csharp
await client.Call.TurnCallRecordingAsync("callID", false);
```

{% sample lang="ruby" %}

```ruby
call.recording_off()
```


{% common %}
### Example 5 of 5: Reject an Incoming Phone Call

{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}\
	-u {token}:{secret} \
	-H "Content-type: application/json" \
	-d \
	'
	{
		"state":"completed"
	}'
```

{% sample lang="js" %}

```js
//Promise
client.Call.reject("callID").then(function () {});

//Callback
client.Call.reject("callID", function (err) {});
```

{% sample lang="csharp" %}

```csharp
await client.Call.RejectAsync("callID");
```

{% sample lang="ruby" %}

```ruby
call.reject_incoming()
```

{% endmethod %}
