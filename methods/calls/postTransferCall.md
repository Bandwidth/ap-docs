{% method %}
## Transfer active Call
Transfer a call to another phone number.  This is a subset of [update calls](postCallsCallId.md).

<aside class="alert general small">
<p>
The call to be transferred must have state set to: <code>active</code>
</p>
</aside>

### Request URL

<code class="post">POST</code>`https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}`

---

### Ensure call is `active`
To answer a call (or set active) be sure to do one of the following:
* All incoming calls to be auto-answered. Set [`{"autoAnswer": true}`](../applications/postApplicationsApplicationId.md) flag in your [`application`](../applications/applications.md).
* Update the individual Call by: <code class="post">POST</code> to the [{callId}](postCallsCallId.md) with [`{"state": "active"}`](postCallsCallId.md).

### Supported Parameters

| Parameter           | Description                                                                                                                                                                                                                                                                                                                                                                                          | Mandatory |
|:--------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| state               | `transferring` to transfer the incoming call to another line. <br> <br>*The Call must be `active`*                                                                                                                                                                                                                                                                                                   | Yes       |
| recordingEnabled    | Indicates if the call should be recorded. Values `true` or `false`. You can turn recording on/off and have multiple recordings on a single call.                                                                                                                                                                                                                                                     | No        |
| recordingFileFormat | The file format of the recorded call. Supported values are `wav` (default) and `mp3`.                                                                                                                                                                                                                                                                                                                | No        |
| transferTo          | Phone number or SIP address that the call is going to be transferred to.                                                                                                                                                                                                                                                                                                                             | No        |
| transferCallerId    | This is the caller id that will be used when the call is transferred. This parameter is only considered in transfer state.<br>- transferring an incoming call: allowed values are 1) `private` 2) the incoming call `from` number or 3) any Bandwidth number owned by user.<br>- transferring an outgoing call call: allowed values are 1) `private` or 2) any Bandwidth phone number owned by user. | No        |
| callbackUrl         | The server URL where the call events for the new call will be sent upon transferring.                                                                                                                                                                                                                                                                                                                | No        |
| whisperAudio        | Audio to be played to the caller that the call will be transferred to. See **Audio Parameters** below.                                                                                                                                                                                                                                                                                                                   | No        |
| diversionTreatment | Can be any of the following: <br> `none`: This is the default value. No diversion headers are sent on the outbound leg of the transferred call.<br> `propagate`: Copy the Diversion header from the inbound leg to the outbound leg. Ignored if there is no Diversion header present on the inbound leg.<br> `stack`: After propagating any Diversion header from the inbound leg to the outbound leg, stack on top another Diversion header based on the Request-URI of the inbound call. <br><br> If diversionTreatment is not specified, no diversion header will be included for the transfer even if one came with the inbound call. | No |
| diversionReason |  Can be any of the following values: <br> `unknown` <br> `user-busy` <br> `no-answer` <br> `unavailable` <br> `unconditional` <br> `time-of-day` <br> `do-not-disturb` <br> `deflection` <br> `follow-me` <br> `out-of-service` <br> `away` <br> This parameter is considered only when `diversionTreatment` is set to `stack`. | No. Default to `unknown`.

#### Audio Parameters

| Parameter   | Description                                                                                                                                                                                                                                                                                                                                                                                     | Mandatory |
|:------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| fileUrl     | The location of an audio file to play (WAV and MP3 supported).                                                                                                                                                                                                                                                                                                                                  | No        |
| sentence    | The sentence to speak.                                                                                                                                                                                                                                                                                                                                                                          | No        |
| gender      | The gender of the voice used to synthesize the sentence. It will be considered only if sentence is not null. The female gender will be used by default.                                                                                                                                                                                                                                         | No        |
| locale      | The locale used to get the accent of the voice used to synthesize the sentence. Currently audio supports: <br> - en\_US or en\_UK (English) <br> - es or es\_MX (Spanish) <br> - fr or fr\_FR (French) <br> - de or de\_DE (German) <br> - t or it\_IT (Italian) It will be considered only if sentence is not null/empty. The en\_US will be used by default.                                  | No        |
| voice       | The voice to speak the sentence. Audio currently supports the following voices: <br> - English US: Kate, Susan, Julie, Dave, Paul <br> - English UK: Bridget <br> - Spanish: Esperanza, Violeta, Jorge <br> - French: Jolie, Bernard <br> - German: Katrin, Stefan <br> - Italian: Paola, Luca It will be considered only if sentence is not null/empty.<br>Susan’s voice will be used by default. | No        |

{% common %}
### Example 1 of 3: Transfer a call using the caller Id of the party being transferred
{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}\
	-u {token}:{secret} \
	-H "Content-type: application/json" \
	-d \
	'
	{
		"state"     : "transferring",
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

{% sample lang="csharp" %}

```csharp
await client.Call.TransferAsync("callID", "+18382947878");
```

{% sample lang="ruby" %}

```ruby
call.update({:state => 'transferring', :transfer_to => '+18382947878' })
```


{% common %}
### Example 2 of 3: Transfer a call and play audio to the '838-294-7878' Line

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

{% sample lang="csharp" %}

```csharp
await client.Call.TransferAsync("callID", "+18382947878", "private", new WhisperAudio {
	Sentence = "You have an incoming call",
	Gender = "female",
	Voice = "julie",
	Locale = "en"
});
```

{% sample lang="ruby" %}

```ruby
call.update({
	:state => 'transferring',
	:transfer_to => '+18382947878',
	:transfer_caller_id => 'private',
	:whisper_audio => {
		:sentence => 'You have an incoming call',
		:gender => 'female',
		:voice => 'julie',
		:locale => 'en'
	}
})
```

{% common %}
### Example 3 of 3: Transfer with outbound Diversion header information

{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}\
	-u {token}:{secret} \
	-H "Content-type: application/json" \
	-d \
	'
    {
        "state":"transferring",
        "transferTo":"+19195554444",
        "diversionTreatment": "stack",
        "diversionReason":"do-not-disturb"
	}'
```

{% sample lang="js" %}

```js
Coming soon
```

{% sample lang="csharp" %}

```csharp
Coming soon
```

{% sample lang="ruby" %}

```ruby
Coming soon
```

{% endmethod %}
