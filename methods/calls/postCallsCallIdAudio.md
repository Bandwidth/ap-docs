{% method %}

## Play audio in active Call

Plays an audio file or speak a sentence in a phone call.

### Request URL

<code class="post">POST</code>`https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}/audio`

---

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
{% common %}

### Example: Speak a Sentence

{% sample lang="bash" %}

```bash
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

{% sample lang="js" %}

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

{% sample lang="csharp" %}

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

{% sample lang="ruby" %}

```ruby
call.play_audio({
	:sentence => "hola de Bandwidth",
	:gender => "male",
	:voice => "Jorge",
	:locale => "es"
})
```

{% common %}

### Example: Interrupt/stop a sentence from speaking.
{% sample lang="bash" %}


```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}/audio \
	-u {token}:{secret} \
	-H "Content-type: application/json" \
	-d '{"sentence": ""}'
```

{% sample lang="js" %}

```js
// coming soon
//Speak sentence in a call

//Promise
client.Call.speakSentence("callId", "").then(function (res) {});

//Callback
client.Call.speakSentence("callId", "", function (err, res) {});
```

{% sample lang="csharp" %}

```csharp
await client.Call.SpeakSentenceAsync("{callId1}", "");
```

{% sample lang="ruby" %}

```ruby
call.play_audio({
	:sentence => ""
})
```

{% common %}

### Example: Play an Audio File

{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}/audio \
	-u {token}:{secret} \
	-H "Content-type: application/json" \
	-d '{"fileUrl": "http://example.com/audio.mp3"}'
```

{% sample lang="js" %}

```js
//Play Audio file on call

//Promise
client.Call.playAudioFile("callId", "http://myurl.com/file.mp3").then(function (res) {});

//Callback
client.Call.playAudioFile("callId", "http://myurl.com/file.wav", function (err, res) {});
```

{% sample lang="csharp" %}

```csharp
await client.Call.PlayAudioFileAsync("{callId1}", "http://myurl.com/file.wav");
```

{% sample lang="ruby" %}

```ruby
call.play_audio({
	:file_url => "http://myurl.com/file.wav"
})
```


### Example: Stop an Audio File Playing
{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}/audio \
	-u {token}:{secret} \
	-H "Content-type: application/json" \
	-d '{"fileUrl": ""}'
```

{% sample lang="js" %}

```js
// coming soon in the mean time:
//Stop Audio file on bridge

//Promise
client.Call.playAudioFile("callId", "").then(function (res) {});

//Callback
client.Call.playAudioFile("callId", "", function (err, res) {});
```

{% sample lang="csharp" %}

```csharp
await client.Call.PlayAudioFileAsync("{callId1}", "");
```

{% sample lang="ruby" %}

```ruby
call.play_audio({
	:file_url => ""
})
```

{% endmethod %}
