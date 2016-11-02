{% method %}

## List all Call Recordings
Retrieve all recordings related to the call.

### Request URL

<code class="get">GET</code> `https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}/recordings`

{% common %}

### Example: Get recordings for a call Id.

{% sample lang="bash" %}

```bash
curl -v -X GET https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}/recordigns \
	-u {token}:{secret} \
	-H "Content-type: application/json"
```

{% sample lang="js" %}

```js
// Promise
client.Call.getRecordings(callId).then(function (list) {});
// Callback
client.Call.getRecordings(callId, function (err, list) {});
```

{% sample lang="csharp" %}

```csharp
var recordings = client.Call.GetRecordings("{callId1}");
var firstRecordingState = recordigns.First().State;
```

{% sample lang="ruby" %}

```ruby
recordings = call.get_recordings()
first_recording = recordigns[0]
first_recording_state = first_recording[:state]
```

{% common %}

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
{% endmethod %}

