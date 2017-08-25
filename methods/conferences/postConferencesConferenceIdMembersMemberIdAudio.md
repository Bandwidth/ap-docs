{% method %}

## Play audio to Member
Speak text or play audio to **ONLY** a single conference member.

### Request URL

<code class="post">POST</code>`https://api.catapult.inetwork.com/v1/users/{userId}/conferences/{conferenceId}/members/{memberId}/audio`

---

### Supported Parameters
| Parameter   | Description                                                                                                                                                                                                                                                                                                                                                                                     | Mandatory |
|:------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| fileUrl     | The location of an audio file to play (WAV and MP3 supported).                                                                                                                                                                                                                                                                                                                                  | *         |
| sentence    | The sentence to speak.                                                                                                                                                                                                                                                                                                                                                                          | *         |
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

### Example 1 of 2: Speak text to a conference member

{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/conferences/{conferenceId}/members/{memberId}/audio \
	-u {token}:{secret} \
	-H "Content-type: application/json" \
	-d \
	'
	{
		"sentence": "Hi there member, I have a message only for you",
		"gender": "female",
		"locale": "en_US",
		"voice": "kate"
	}'
```

{% sample lang="js" %}

```js
//Speak sentence
//Promise
client.Conference.speakSentenceToMember("conferenceID", "memberID", "Hello From Bandwidth")
 .then(function (res) {});
//Callback
client.Conference.speakSentenceToMember("conferenceID", "memberID", "Hello From Bandwidth",
	function (err, res) {});

  //Speak sentence with options
  var options = {
  	sentence : "hola de Bandwidth",
  	gender   : "male",
  	locale   : "es",
  	voice    : "Jorge"
  }
  //Promise
  client.Conference.playAudioAdvancedToMember("conferenceId", "memberId", options)
    .then(function (res) {});

  //Callback
  client.Conference.playAudioAdvanced("conferenceId", options, function (err,res) {});
```

{% sample lang="csharp" %}

```csharp
//Speak sentence with options
await client.Conference.PlayAudioToMemberAsync("{conferenceId1}", "{memberId1}", new PlayAudioData
{
	Sentence = "hola de Bandwidth",
	Gender = Genger.Male,
	Voice = "Jorge",
	Locale = "es"
});

//Speak sentence in a conference
await client.Conference.SpeakSentenceToMemberAsync("{conferenceId1}", "{memberId1}", "Hello From Bandwidth");
```

{% sample lang="ruby" %}

```ruby
# coming soon
```

### Example 2 of 2: Play audio to a conference member

{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/conferences/{conferenceId}/members/{memberId}/audio \
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
//Play Audio file

//Promise
client.Conference.playAudioFileToMember("conferenceID", "memberId", "http://myurl.com/file.mp3")
  .then(function (res) {});

//Callback
client.Conference.playAudioFileToMember("conferenceID", "memberId", "http://myurl.com/file.wav",
   function (err, res) {});

//Play Audio File on loop
var options = {
	fileUrl     : "http://myurl.com/file.mp3",
	loopEnabled : true
}
//Promise
client.Conference.playAudioAdvancedToMember("conferenceId", "memberId", options)
 .then(function (res) {});

//Callback
client.Conference.playAudioAdvancedToMember("conferenceId", "memberId", options,
  function (err,res) {});
```

{% sample lang="csharp" %}

```csharp
//Play audio file with options
await client.Conference.PlayAudioToMemberAsync("{conferenceId1}", "{memberId1}", new PlayAudioData
{
	FileUrl = "http://myurl.com/file.mp3",
	LoopEnabled = true
});

//Speak sentence in a conference
await client.Conference.PlayAudioFileToMemberAsync("{conferenceId1}", "{memberId1}", "http://myurl.com/file.mp3");
```

{% sample lang="ruby" %}

```ruby
# coming soon
```
{% endmethod %}
