
## GET calls/{callId}
Gets information about an active or completed call. No query parameters are supported.

### Example: Get Call Information

```shell
curl -v -X GET https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId} \
	-u {token}:{secret} \
	-H "Content-type: application/json"
```

```js
client.Call.get("{callId}")
.then(function (response) {
	console.log(respone);
});
```

```csharp
var call = await client.Call.GetAsync("{callId1}");
```

```ruby
call = Call.get(client, "{callId1}")
```

> The above command returns JSON structured like this:

```
{
		"activeTime": "2014-12-19T19:13:20Z",
		"callbackUrl": "https://example.com",
		"chargeableDuration": 60,
		"direction": "out",
		"endTime": "2014-12-19T19:13:22Z",
		"events": "https://.../calls/{callId}/events",
		"fallbackUrl": "https://example-fallback.com",
		"from": "{fromNumber}",
		"id": "{callId}",
		"recordingEnabled": false,
		"recordings": "https://.../calls/{callId}/recordings",
		"startTime": "2014-12-19T19:13:09Z",
		"state": "completed",
		"to": "{toNumber}",
		"transcriptionEnabled": true,
		"transcriptions": "https://.../calls/{callId}/transcriptions",
		"sipHeaders" : {
				"X-header" : "value"
		}
}
```

## POST calls/{callId}
Update properties of an active phone call.

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

### Example: Answer an Incoming Phone Call
### Example: Reject an Incoming Phone Call
### Example: Hang Up a Phone Call
### Example: Turn call recording ON
### Example: Turn call recording OFF
### Example: Transfer a call
### Example: Transfer a call using the caller Id of the party being transferred
### Example: Transfer a call and say something before bridging the calls
### Example: Transfer a call and say something before bridging the calls

## POST calls/{callId}/audio

Plays an audio file or speak a sentence in a phone call.

### Supported Parameters

| Parameter   | Description                                                                                                                                                                                                                                                                                                                                                                                     | Mandatory |
|:------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| fileUrl     | The location of an audio file to play (WAV and MP3 supported).                                                                                                                                                                                                                                                                                                                                  | No        |
| sentence    | The sentence to speak.                                                                                                                                                                                                                                                                                                                                                                          | No        |
| gender      | The gender of the voice used to synthesize the sentence. It will be considered only if sentence is not null. The female gender will be used by default.                                                                                                                                                                                                                                         | No        |
| locale      | The locale used to get the accent of the voice used to synthesize the sentence. Currently audio supports: <br> - en\_US or en\_UK (English) <br> - es or es\_MX (Spanish) <br> - fr or fr\_FR (French) <br> - de or de\_DE (German) <br> - t or it\_IT (Italian) It will be considered only if sentence is not null/empty. The en\_US will be used by default.                                  | No        |
| voice       | The voice to speak the sentence. Audio currently supports the following voices: <br> - English US: Kate, Susan, Julie, Dave, Paul <br> - English UK: Bridget <br> - Spanish: Esperanza, Violeta, Jorge <br> - French: Jolie, Bernard <br> - German: Katrin, Stefan <br> - Italian: Paola, Luca It will be considered only if sentence is not null/empty. Susan’s voice will be used by default. | No        |
| loopEnabled | When value is `true` , the audio will keep playing in a loop. Default: `false`.                                                                                                                                                                                                                                                                                                                 | No        |
| tag         | A string that will be included in the events delivered when the audio playback starts or finishes.                                                                                                                                                                                                                                                                                              | No        |

### Example: Speak a Sentence

```shell
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}/audio \
	-u {token}:{secret} \
	-H "Content-type: application/json" \
	-d \
	'
	{
		"gender": "female",
		"sentence": "Hello, thank you for calling.",
		"locale": "en_US",
		"voice": "julie"
	}'
```

```js
//Speak sentence with options
var options = {
	sentence : "hola de Bandwidth",
	gender   : "male",
	locale   : "es",
	voice    : "Jorge"
}
//Promise
client.Call.playAudioAdvanced("callId", options).then(function (res) {});

//Callback
client.Call.playAudioAdvanced("callId", options, function (err,res) {});

//Speak sentence in a call

//Promise
client.Call.speakSentence("callId", "Hello From Bandwidth").then(function (res) {});

//Callback
client.Call.speakSentence("callId", "Hello From Bandwidth", function (err, res) {});
```

```csharp
//Speak sentence with options
await client.Call.PlayAudioAsync("{callId1}", new PlayAudioData
{
	Sentence = "hola de Bandwidth",
	Gender = Genger.Male,
	Voice = "Jorge",
	Locale = "es"
});

//Speak sentence in a call
await client.Call.SpeakSentenceAsync("{callId1}", "Hello From Bandwidth");
```

```ruby
call.play_audio({
	:sentence => "hola de Bandwidth",
	:gender => "male",
	:voice => "Jorge",
	:locale => "es"
})
```


### Example: Interrupt/stop a sentence from speaking.
```shell
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}/audio \
	-u {token}:{secret} \
	-H "Content-type: application/json" \
	-d '{"sentence": ""}'
```

```js
// coming soon
//Speak sentence in a call

//Promise
client.Call.speakSentence("callId", "").then(function (res) {});

//Callback
client.Call.speakSentence("callId", "", function (err, res) {});
```

```csharp
await client.Call.SpeakSentenceAsync("{callId1}", "");
```

```ruby
call.play_audio({
	:sentence => ""
})
```


### Example: Speak a Sentence with male gender voice
### Example: Speaking a sentence with a given locale, gender and voice.
### Example: Speaking a sentence with a break
### Example: Play an Audio File
```shell
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}/audio \
	-u {token}:{secret} \
	-H "Content-type: application/json" \
	-d '{"fileUrl": "http://example.com/audio.mp3"}'
```

```js
//Play Audio file on call

//Promise
client.Call.playAudioFile("callId", "http://myurl.com/file.mp3").then(function (res) {});

//Callback
client.Call.playAudioFile("callId", "http://myurl.com/file.wav", function (err, res) {});
```

```csharp
await client.Call.PlayAudioFileAsync("{callId1}", "http://myurl.com/file.wav");
```

```ruby
call.play_audio({
	:file_url => "http://myurl.com/file.wav"
})
```


### Example: Stop an Audio File Playing
```shell
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}/audio \
	-u {token}:{secret} \
	-H "Content-type: application/json" \
	-d '{"fileUrl": ""}'
```

```js
// coming soon in the mean time:
//Stop Audio file on bridge

//Promise
client.Call.playAudioFile("callId", "").then(function (res) {});

//Callback
client.Call.playAudioFile("callId", "", function (err, res) {});
```

```csharp
await client.Call.PlayAudioFileAsync("{callId1}", "");
```

```ruby
call.play_audio({
	:file_url => ""
})
```


## POST calls/{callId}/dtmf
Send DTMF (phone keypad digit presses).

### Supported Parameters

| Parameter | Description                                                 | Mandatory |
|:----------|:------------------------------------------------------------|:----------|
| dtmfOut   | String containing the DTMF characters to be sent in a call. | No        |

### Example: Send the digits "9193334444"

```shell
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}/dtmf \
	-u {token}:{secret} \
	-H "Content-type: application/json" \
	-d '{"dtmfOut": "9193334444"}'
```

```js
// Promise
client.Call.sendDtmf(callId, "9193334444").then(function () {});
// Callback
client.Call.sendDtmf(callId, "9193334444", function (err) {});
```

```csharp
await client.Call.SendDtmfAsync("{callId1}", new SendDtmfData{DtmfOut = "9193334444"});
```

```ruby
call.set_dtmf("9193334444")
```


## GET calls/{callId}/events
Gets the events that occurred during the call. No query parameters are supported.

### Event Properties

| Property | Description                  | Mandatory |
|:---------|:-----------------------------|:----------|
| id       | The call event id.           | No        |
| time     | The time the event occurred. | No        |
| name     | The name of the event.       | No        |
| data     | Data about event.            | No        |

### Example: Get events for a call.

```shell
curl -v -X GET https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}/events \
	-u {token}:{secret} \
	-H "Content-type: application/json"
```

```js
// Promise
client.Call.getEvents(callId).then(function (events) {});
// Callback
client.Call.getEvents(callId, function (err, events) {});
```

```csharp
var events = client.Call.GetEvents("{callId1}");
```

```ruby
events = call.get_events()
```


> The above command returns JSON structured like this:

```json
[
	{
		"id": "{callEventId1}",
		"time": "2012-09-19T13:55:41.343Z",
		"name": "create"
	},
	{
		"id": "{callEventId2}",
		"time": "2012-09-19T13:55:45.583Z",
		"name": "answer"
	},
	{
		"id": "{callEventId3}",
		"time": "2012-09-19T13:55:45.583Z",
		"name": "CHANNEL_EXECUTE",
		"data": "{\"applicationName\":\"park\"}"
	},
	{
		"id": "{callEventId4}",
		"time": "2012-09-19T13:55:51.283Z",
		"name": "CHANNEL_EXECUTE",
		"data": "{\"applicationName\":\"playback\",\"applicationData\":\"test.mp3\"}"
	},
	{
		"id": "{callEventId5}",
		"time": "2012-09-19T13:55:45.583Z",
		"name": "playback",
		"data": "start"
	},
	{
		"id": "{callEventId6}",
		"time": "2012-09-19T13:55:45.583Z",
		"name": "playback",
		"data": "done"
	},
	{
		"id": "{callEventId7}",
		"time": "2012-09-19T13:55:55.503Z",
		"name": "CHANNEL_EXECUTE_COMPLETE",
		"data": "{\"applicationName\":\"playback\",\"applicationData\":\"test.mp3\"}"
	},
	{
		"id": "{callEventId8}",
		"time": "2012-09-19T13:55:58.323Z",
		"name": "hangup",
		"data": "NORMAL_CLEARING"
	},
	{
		"id": "{callEventId9}",
		"time": "2012-09-19T13:55:58.343Z",
		"name": "CHANNEL_EXECUTE_COMPLETE",
		"data": "{\"applicationName\":\"playback\",\"applicationData\":\"test.mp3\"}"
	}
]
```

## GET calls/{callId}/events/{callEventId}

Gets information about one call event. No query parameters are supported.

```shell
curl -v -X GET https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}/events/{eventId} \
	-u {token}:{secret} \
	-H "Content-type: application/json"
```

```js
// Promise
client.Call.getEvent(callId, eventId).then(function (callEvent) {});
// Callback
client.Call.getEvent(callId, eventId, function (err, callEvent) {});
```

```csharp
var callEvent = async client.Call.GetEventAsync("{callId1}", "{eventId1}");
```

```ruby
call_event = call.get_event("{eventId1}")
```


> The above command returns JSON structured like this:

```
{
		"id": "ce-qg4vz6anrfogri7hhduqlgq",
		"time": 1419032854964,
		"name": "hangup",
		"data": ""
}
```

## GET calls/{callId}/recordings
Retrieve all recordings related to the call.

### Example: Get recordings for a call Id.

```shell
curl -v -X GET https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}/recordigns \
	-u {token}:{secret} \
	-H "Content-type: application/json"
```

```js
// Promise
client.Call.getRecordings(callId).then(function (list) {});
// Callback
client.Call.getRecordings(callId, function (err, list) {});
```

```csharp
var recordings = client.Call.GetRecordings("{callId1}");
```

```ruby
recordings = call.get_recordings()
```


> The above command returns JSON structured like this:

```json
[
	{
		"endTime": "2013-02-08T12:06:55.007Z",
		"id": "{recordingId1}",
		"media": "https://.../v1/users/.../media/{callId}-1.wav",
		"call": "https://.../v1/users/.../calls/{callId}",
		"startTime": "2013-02-08T12:05:17.807Z",
		"state": "complete"
	},
	{
		"endTime": "2013-02-08T13:15:65.887Z",
		"id": "{recordingId2}",
		"media": "https://.../v1/users/.../media/{callId}-2.wav",
		"call": "https://.../v1/users/.../calls/{callId}",
		"startTime": "2013-02-08T13:15:55.887Z",
		"state": "complete"
	}
]
```

## GET calls/{callId}/transcriptions
Retrieve all transcriptions related to the call.

### Example: Retrieve all transcriptions related to the call.

```shell
curl -v -X GET https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}/transcriptions \
	-u {token}:{secret} \
	-H "Content-type: application/json"
```

```js
// Promise
client.Call.getTranscriptions(callId).then(function (list) {});
// Callback
client.Call.getTranscriptions(callId, function (err, list) {});
```

```csharp
var transcriptions = client.Call.GetTranscriptions("{callId1}");
```

```ruby
transcriptions = call.get_transcriptions()
```


## POST calls/{callId}/gather
Collects a series of DTMF digits from a phone call with an optional prompt. This request returns immediately. When gather finishes, an event with the results will be posted to the callback URL.

### Supported Parameters

| Parameter          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Mandatory |
|:-------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| maxDigits          | The maximum number of digits to collect, not including terminating digits (maximum 30).                                                                                                                                                                                                                                                                                                                                                                                             | No        |
| interDigitTimeout  | Stop gathering if a DTMF digit is not detected in this many seconds (default 5.0; maximum 30.0).                                                                                                                                                                                                                                                                                                                                                                                    | No        |
| terminatingDigits  | A string of DTMF digits that end the gather operation immediately if any one of them is detected (default “\#”; an empty string means collect all DTMF until maxDigits or the timeout).<br>Example:<br>`#` : The gather ends if \# is detected (this is the default behavior if the terminatingDigits property is not specified)<br>`0#*` : The gather ends if either 0, \#, or \* is detected<br>Don’t forget to encode keypad digits that have special meaning in a URL, like \#. | No        |
| tag                | A string you choose that will be included with the response and events for this gather operation.                                                                                                                                                                                                                                                                                                                                                                                   | No        |
| prompt.sentence    | The text to speak for the prompt (uses the call audio resource defaults). NOTE: encode special characters in the sentence.                                                                                                                                                                                                                                                                                                                                                          | No        |
| prompt.gender      | The gender to use for the voice reading the prompt sentence (uses the call audio resource defaults).                                                                                                                                                                                                                                                                                                                                                                                | No        |
| prompt.locale      | The language and region to use for the voice reading the prompt sentence (uses the call audio resource defaults).                                                                                                                                                                                                                                                                                                                                                                   | No        |
| prompt.loopEnabled | When value is true, the audio will keep playing in a loop. Default: false                                                                                                                                                                                                                                                                                                                                                                                                           | No        |
| prompt.bargeable   | Make the prompt (audio or sentence) bargeable (will be interrupted at first digit gathered). Default: true                                                                                                                                                                                                                                                                                                                                                                          | No        |
| prompt.fileUrl     | The location of an audio file to play (WAV and MP3 supported).                                                                                                                                                                                                                                                                                                                                                                                                                      | No        |

### Example: Play a prompt sentence
Play a prompt sentence, then wait until 5 digits are pressed. Stop gathering digits if * is pressed, or if 7 seconds pass with no digits pressed.

```shell
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/ \
	-u {token}:{secret} \
	-H "Content-type: application/json" \
		-d \
	'
	{
		"maxDigits":"5",
		"terminatingDigits":"*",
		"interDigitTimeout":"7",
		"prompt": {
			"sentence": "Please enter your 5 digit code"
		}
	}'
```

```js
//Create Gather
//The gather ends if either 0, #, or * is detected
var options = 	{
	"maxDigits":"5",
	"terminatingDigits":"*",
	"interDigitTimeout":"7",
	"prompt": {
		"sentence": "Please enter your 5 digit code"
	}
};
//Promise
client.Call.createGather("callId", options).then(function(res) {});

//Callback
client.Call.createGather("callId", options, function(err, res) {});
```

```csharp
var gather = await client.Call.CreateGatherAsync("{callId1}", new CreateGatherData {
	MaxDigits = "5",
	TerminatingDigits = "*",
	InterDigitTimeout = "7",
	Prompt = new GatherPrompt {
		Sentence = "Please enter your 5 digit code"
	}
});
```

```ruby
gather = call.create_gather({
	:max_digits => "5",
	:terminating_digits => "*",
	:inter_digit_timeout => "7",
	:prompt =>  {
		:sentence => "Please enter your 5 digit code"
	}
})
```


## GET calls/{callId}/gather/{gatherId}
Get the gather DTMF parameters and results.

```shell
curl -v -X GET https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}/gather/{gatherId} \
	-u {token}:{secret} \
	-H "Content-type: application/json"
```

```js
client.Call.getGather("{callId}", "{gatherId}")
.then(function (res) {
  console.log(res);
});
```

```csharp
var gather = await client.Call.GetGatherAsync("{callId1}", "{gatherId1}");
```

```ruby
gather = call.get_gather("{gatherId1}")
```


> The above command returns JSON structured like this:

```
{
  "id": "{gatherId}",
  "state": "completed",
  "reason": "max-digits",
  "createdTime": "2014-02-12T19:33:56Z",
  "completedTime": "2014-02-12T19:33:59Z",
  "call": "https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}",
  "digits": "123"
}
```

## POST calls/{callId}/gather/{gatherId}
Update the gather.
<aside class="notice">
The only update allowed is state:completed to stop the gather.
</aside>

### Example: Stop the gather DTMF

```shell
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}/gather/{gatherId} \
  -u {token}:{secret} \
	-H "Content-type: application/json" \
    -d \
	'
	{
		"state": "completed"
	}'
```

```js
client.Call.completeGather("{callId}", "{gatherId}")
.then(function () {});
```

```csharp
await client.Call.UpdateGatherAsync("{callId1}", "{gatherId1}", new UpdateGatherData {State = CallGatherState.Completed});
```

```ruby
call.update_gather("{gatherId1}", {:state => "completed"})
```
