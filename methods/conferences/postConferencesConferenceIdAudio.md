{% method %}

## Play audio in Conference
Speak a text or play audio in the conference

### Request URL

<code class="post">POST</code>`https://api.catapult.inetwork.com/v1/users/{userId}/conferences/{conferenceId}/audio`

---

### Supported Parameters

| Parameter   | Description                                                                                                                                                                                                                                                                                                                                                                                     | Mandatory |
|:------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| fileUrl     | The location of an audio file to play (WAV and MP3 supported). <br> <br> To **STOP AUDIO FILE PLAYBACK** send an empty string like: `{"fileUrl": ""}`                                                                                                                                                                                                                                           | No        |
| sentence    | The sentence to speak **MAXIMUM LENGTH 1000 CHARACTERS**. <br> <br> To **STOP SENTENCE PLAYBACK** send an empty string like: `{"sentence": ""}`                                                                                                                                                                                                                                                 | No        |
| gender      | The gender of the voice used to synthesize the sentence. It will be considered only if sentence is not null. The female gender will be used by default.                                                                                                                                                                                                                                         | No        |
| locale      | The locale used to get the accent of the voice used to synthesize the sentence. Currently audio supports: <br> - en\_US or en\_UK (English) <br> - es or es\_MX (Spanish) <br> - fr or fr\_FR (French) <br> - de or de\_DE (German) <br> - t or it\_IT (Italian) It will be considered only if sentence is not null/empty. The en\_US will be used by default.                                  | No        |
| voice       | The voice to speak the sentence. Audio currently supports the following voices: <br> - English US: Kate, Susan, Julie, Dave, Paul <br> - English UK: Bridget <br> - Spanish: Esperanza, Violeta, Jorge <br> - French: Jolie, Bernard <br> - German: Katrin, Stefan <br> - Italian: Paola, Luca It will be considered only if sentence is not null/empty. Susan’s voice will be used by default. | No        |
| loopEnabled | When value is `true` , the audio will keep playing in a loop. Default: `false`.                                                                                                                                                                                                                                                                                                                 | No        |
| tag         | A string that will be included in the events delivered when the audio playback starts or finishes.                                                                                                                                                                                                                                                                                              | No        |

<aside class="alert general small">
<p>
* For playing text-to-speech, sentence is required, for playing an audio file, fileUrl is required.
</p>
</aside>

{% common %}

### Example 1 of 4: Speak text in conference

{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/conferences/{conferenceId}/audio \
	-u {token}:{secret} \
	-H "Content-type: application/json" \
	-d \
	'
	{
		"sentence": "Hello everyone on the conference today",
		"gender": "female",
		"locale": "en_US",
		"voice": "kate"
	}'
```

{% sample lang="js" %}

```js
//Speak sentence in a conference
//Promise
client.Conference.speakSentence("conferenceID", "Hello From Bandwidth").then(function (res) {});
//Callback
client.Conference.speakSentence("conferenceID", "Hello From Bandwidth", function (err, res) {});

//Speak sentence with options
var options = {
	sentence : "hola de Bandwidth",
	gender   : "male",
	locale   : "es",
	voice    : "Jorge"
}
//Promise
client.Conference.playAudioAdvanced("conferenceId", options).then(function (res) {});

//Callback
client.Conference.playAudioAdvanced("conferenceId", options, function (err,res) {});
```

{% sample lang="csharp" %}

```csharp
// Speak sentence in a conference
await client.Conference.SpeakSentenceAsync("{conferenceId1}", "Hello From Bandwidth");

// Speak sentence with options
await client.Conference.PlayAudioAsync("{conferenceId1}", new PlayAudioData {
	Sentence = "hola de Bandwidth",
	Gender = Genger.Male,
	Voice = "Jorge",
	Locale = "es"
});
```

{% sample lang="ruby" %}

```ruby
conference.play_audio({
	:sentence => "hola de Bandwidth",
	:gender => "male",
	:voice => "Jorge",
	:locale => "es"
})
```

{% common %}

### Example 2 of 4: Interrupt/Stop a sentence from speaking

{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/conferences/{conferenceId}/audio \
	-u {token}:{secret} \
	-H "Content-type: application/json" \
	-d '{"sentence": ""}'
```

{% sample lang="js" %}

```js
//Speak sentence in a conference
//Promise
client.Conference.stopSpeaking("conferenceID").then(function (res) {});
//Callback
client.Conference.stopSpeaking("conferenceID", function (err, res) {});

//Speak sentence with options
var options = {sentence : ""}
//Promise
client.Conference.playAudioAdvanced("conferenceId", options).then(function (res) {});

//Callback
client.Conference.playAudioAdvanced("conferenceId", options, function (err,res) {});
```

{% sample lang="csharp" %}

```csharp
// Speak sentence in a conference
await client.Conference.SpeakSentenceAsync("{conferenceId1}", "");

// Speak sentence with options
await client.Conference.PlayAudioAsync("{conferenceId1}", new PlayAudioData {Sentence = ""});
```

{% sample lang="ruby" %}

```ruby
conference.play_audio({:sentence => ""})
```


{% common %}

### Example 3 of 4: Play audio in conference

{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/conferences/{conferenceId}/audio \
	-u {token}:{secret} \
	-H "Content-type: application/json" \
	-d \
	'
	{
		"fileUrl": "https://catapult.inetwork.com/.../media/{mediaName1}"
	}'
```

{% sample lang="js" %}

```js
//Play Audio file on conference
//Promise
client.Conference.playAudioFile("conferenceID", "http://myurl.com/file.mp3").then(function (res) {});
//Callback
client.Conference.playAudioFile("conferenceID", "http://myurl.com/file.wav", function (err, res) {});

//Play Audio File on loop
var options = {
	fileUrl     : "http://myurl.com/file.mp3",
	loopEnabled : true
}
//Promise
client.Conference.playAudioAdvanced("conferenceId", options).then(function (res) {});
//Callback
client.Conference.playAudioAdvanced("conferenceId", options, function (err,res) {});
```

{% sample lang="csharp" %}

```csharp
// Play audio file in a conference
await client.Conference.PlayAudioFileAsync("{conferenceId1}", "http://myurl.com/file.mp3");

// Play audio file with options
await client.Conference.PlayAudioAsync("{conferenceId1}", new PlayAudioData {
	FileUrl = "http://myurl.com/file.mp3",
	LoopEnabled = true
});
```

{% sample lang="ruby" %}

```ruby
conference.play_audio({
	:file_url => "http://myurl.com/file.mp3"
})
```

{% common %}

### Example 4 of 4: Stop an Audio File Playing in Conference

{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/conferences/{conferenceId}/audio \
	-u {token}:{secret} \
	-H "Content-type: application/json" \
	-d '{"fileUrl": ""}'
```

{% sample lang="js" %}

```js
//Promise
client.Conference.stopAudioFilePlayback("conferenceID").then(function (res) {});
//Callback
client.Conference.stopAudioFilePlayback("conferenceID", function (err, res) {});

var options = {
	fileUrl     : ""
}
//Promise
client.Conference.playAudioAdvanced("conferenceId", options).then(function (res) {});
//Callback
client.Conference.playAudioAdvanced("conferenceId", options, function (err,res) {});
```

{% sample lang="csharp" %}

```csharp
// Play audio file in a conference
await client.Conference.PlayAudioFileAsync("{conferenceId1}", "");

// Play audio file with options
await client.Conference.PlayAudioAsync("{conferenceId1}", new PlayAudioData {FileUrl = ""});
```

{% sample lang="ruby" %}

```ruby
conference.play_audio({:file_url => ""})
```

{% endmethod %}
