{% method %}

## Play audio in Bridge

Play an audio file or speak a sentence in a bridge.

### Request URL
<code class="post">POST</code>`https://api.catapult.inetwork.com/v1/users/{userId}/bridges/{bridgeId}/audio`

---

### Supported Parameters

| Parameter | Description                                                                                                                                                                                                                                                                                                                                                                                     | Mandatory |
|:----------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| fileUrl   | The location of an audio file to play (WAV and MP3 supported).  <br> <br>To **STOP AUDIO FILE PLAYBACK** send an empty string like: `{"fileUrl": ""}`                                                                                                                                                                                                                                           | No        |
| sentence  | The sentence to speak **MAXIMUM LENGTH 1000 CHARACTERS**.  <br> <br> To **STOP SENTENCE PLAYBACK** send an empty string like: `{"sentence": ""}`                                                                                                                                                                                                                                                | No        |
| gender    | The gender of the voice used to synthesize the sentence. It will be considered only if sentence is not null. The female gender will be used by default.                                                                                                                                                                                                                                         | No        |
| locale    | The locale used to get the accent of the voice used to synthesize the sentence. Currently audio supports: <br> - en\_US or en\_UK (English) <br> - es or es\_MX (Spanish) <br> - fr or fr\_FR (French) <br> - de or de\_DE (German) <br> - t or it\_IT (Italian) It will be considered only if sentence is not null/empty. The en\_US will be used by default.                                  | No        |
| voice     | The voice to speak the sentence. Audio currently supports the following voices: <br> - English US: Kate, Susan, Julie, Dave, Paul <br> - English UK: Bridget <br> - Spanish: Esperanza, Violeta, Jorge <br> - French: Jolie, Bernard <br> - German: Katrin, Stefan <br> - Italian: Paola, Luca It will be considered only if sentence is not null/empty. Susan’s voice will be used by default. | No        |

{% common %}

### Example 1 of 4: Play an Audio file

{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/bridges/{bridgeId}/audio \
	-u {token}:{secret} \
	-H "Content-type: application/json" \
	-d '{"fileUrl": "http://example.com/audio.mp3"}'
```

{% sample lang="js" %}

```js
//Play Audio file on bridge

//Promise
client.Bridge.playAudioFile("bridgeID", "http://myurl.com/file.mp3").then(function (res) {});

//Callback
client.Bridge.playAudioFile("bridgeID", "http://myurl.com/file.wav", function (err, res) {});
```

{% sample lang="csharp" %}

```csharp
await client.Bridge.PlayAudioFileAsync("bridgeID", "http://myurl.com/file.wav");
```

{% sample lang="ruby" %}


```ruby
bridge.play_audio({:file_url => "http://myurl.com/file.wav"})
```

{% common %}

### Example 2 of 4: Stop an Audio File Playing
{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/bridges/{bridgeId}/audio \
	-u {token}:{secret} \
	-H "Content-type: application/json" \
	-d '{"fileUrl": ""}'
```

{% sample lang="js" %}

```js
// coming soon in the mean time:
//Stop Audio file on bridge

//Promise
client.Bridge.stopAudioFilePlayback("bridgeID").then(function (res) {});

//Callback
client.Bridge.stopAudioFilePlayback("bridgeID", function (err, res) {});
```

{% sample lang="csharp" %}

```csharp
await client.Bridge.PlayAudioFileAsync("brg-65dhmbasiei", "");
```

{% sample lang="ruby" %}

```ruby
bridge.play_audio({:file_url => ""})
```

{% common %}


### Example 3 of 4: Speak a Sentence
{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/bridges/{bridgeId}/audio \
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
client.Bridge.playAudioAdvanced("bridgeId", options).then(function (res) {});

//Callback
client.Bridge.playAudioAdvanced("bridgeId", options, function (err,res) {});

//Speak sentence in a bridge

//Promise
client.Bridge.speakSentence("bridgeID", "Hello From Bandwidth").then(function (res) {});

//Callback
client.Bridge.speakSentence("bridgeID", "Hello From Bandwidth", function (err, res) {});
```

{% sample lang="csharp" %}

```csharp
await client.Bridge.SpeakSentenceAsync("brg-65dhmbasiei", "Hello From Bandwidth");
```

{% sample lang="ruby" %}


```ruby
#coming soon
```

{% common %}


### Example 4 of 4: Stop a Sentence
{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/bridges/{bridgeId}/audio \
	-u {token}:{secret} \
	-H "Content-type: application/json" \
	-d '{"sentence": ""}'
```

{% sample lang="js" %}

```js
// coming soon
//Speak sentence in a bridge

//Promise
client.Bridge.stopSpeaking("bridgeID").then(function (res) {});

//Callback
client.Bridge.stopSpeaking("bridgeID", function (err, res) {});
```
{% sample lang="csharp" %}

```csharp
await client.Bridge.SpeakSentenceAsync("brg-65dhmbasiei", "");
```

{% sample lang="ruby" %}

```ruby
bridge.play_audio({:sentence => ""})
```

{% common %}


{% endmethod %}
