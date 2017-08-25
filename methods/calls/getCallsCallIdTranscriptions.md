{% method %}

## List all Call Transcriptions
Retrieve all transcriptions related to the call.

### Request URL

<code class="get">GET</code>`https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}/transcriptions`

{% common %}

### Example 1 of 1: Retrieve all transcriptions related to the call.

{% sample lang="bash" %}

```bash
curl -v -X GET https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}/transcriptions \
	-u {token}:{secret} \
	-H "Content-type: application/json"
```

{% sample lang="js" %}

```js
// Promise
client.Call.getTranscriptions(callId).then(function (list) {});
// Callback
client.Call.getTranscriptions(callId, function (err, list) {});
```

{% sample lang="csharp" %}

```csharp
var transcriptions = client.Call.GetTranscriptions("{callId1}");
var firstTranscription = transcriptions.First();
Console.WriteLine($"{firstTranscription.Id} - {firstTranscription.State}");
// tr-1234 - Completed
```

{% sample lang="ruby" %}

```ruby
transcriptions = call.get_transcriptions()
first_transcription_state = transcriptions[0][:state]
```

{% common %}

> The above command returns JSON structured like this:

```json
[
    {
        "chargeableDuration": 60,
        "id": "{transcription-id}",
        "state": "completed",
        "time": "2014-10-09T12:09:16Z",
        "text": "{transcription-text}",
        "textSize": 3627,
        "textUrl": "{url-to-full-text}"
    },
    {
        "chargeableDuration": 60,
        "id": "{transcription-id}",
        "state": "completed",
        "text": "{transcription-text}",
        "time": "2014-10-09T14:04:44Z",
        "textSize": 72,
        "textUrl": "{url-to-full-text}"
    }
]
```
{% endmethod %}
