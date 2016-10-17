{% method %}
## GET calls/{callId}/transcriptions
Retrieve all transcriptions related to the call.

{% common %}
### Example: Retrieve all transcriptions related to the call.

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
```

{% sample lang="ruby" %}
```ruby
transcriptions = call.get_transcriptions()
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
