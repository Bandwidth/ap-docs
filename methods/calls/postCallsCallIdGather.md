{% method %}

## Create Gather on active Call
Collects a series of DTMF digits from a phone call with an optional prompt. This request returns immediately. When gather finishes, an event with the results will be posted to the callback URL.

### Request URL

<code class="post">POST</code>`https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}/gather`

---

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

{% common %}

### Example 1 of 1: Play a prompt sentence
Play a prompt sentence, then wait until 5 digits are pressed. Stop gathering digits if * is pressed, or if 7 seconds pass with no digits pressed.

{% sample lang="bash" %}

```bash
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

{% sample lang="js" %}

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

{% sample lang="csharp" %}

```csharp
var gather = await client.Call.CreateGatherAsync("{callId1}", new CreateGatherData {
	MaxDigits = "5",
	TerminatingDigits = "*",
	InterDigitTimeout = "7",
	Prompt = new GatherPrompt {
		Sentence = "Please enter your 5 digit code"
	}
});

Console.WriteLine($"Created gather with id {gather.Id}");
// Created gather with id g-1234

```

{% sample lang="ruby" %}

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
{% endmethod %}
