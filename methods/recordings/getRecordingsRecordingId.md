{% method %}

## Fetch Recording Information
Retrieve a specific call recording information in JSON format, identified by recordingId. For more details on how to retrieve the recorded media file, please access [Media documentation](../media/media.md).

See the [faq](https://dev.bandwidth.com/faq/voice/callRecordings.html) for more information about Recordings and storage.

### Request URL

<code class="get">GET</code>`https://api.catapult.inetwork.com/v1/users/{userId}/recordings/{recordingId}`

---

### Properties

| Property  | Description                                                                                                                                                               |
|:----------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| id        | The unique id of the recordings resource.                                                                                                                                 |
| startTime | Date/time when the recording started. Timestamp follows the ISO8601 format (UTC).                                                                                         |
| endTime   | Date/time when the recording ended. Timestamp follows the ISO8601 format (UTC).                                                                                           |
| call      | The complete URL to the call resource this recording is associated with.                                                                                                  |
| media     | The complete URL to the media resource this recording is associated with.                                                                                                 |
| state     | The state of the recording, values are <br> `recording` <br> *`complete`<br> *`saving` <br> *`error`                                                                      |

### Recording States
| State     | Description                                                    |
|:----------|:---------------------------------------------------------------|
| recording | Recording is currently active.                                 |
| saving    | Recording is complete but it is not available to download yet. |
| error     | Recording could not be uploaded.                               |
| complete  | Recording complete and available for downloading or playing.   |

{% common %}


### Example 1 of 1: Get recording properties

{% sample lang="bash" %}

```bash
curl -v -X GET https://api.catapult.inetwork.com/v1/users/{userId}/recordings/{recordingId} -u {token}:{secret} -H "Content-type: application/json"
```

{% sample lang="js" %}

```js
//Promise
client.Recording.get("{recordingId}")
.then(function (recording) {
	console.log(recording);
});

//Callback
client.Recording.get("{recordingId}", function (err, recording) {
	if(err) { console.log(err); }
	else {
		console.log(recording);
	}
});
```

{% sample lang="csharp" %}

```csharp
var recording = await client.Recording.GetAsync("{recordingId}");
Console.WriteLine(recording.MediaName);
// c-bonay3r4mtwbplurq4nkt7q-1.wav
```

{% sample lang="ruby" %}

```ruby
recording = Recording.get(client, "{recordingId}")
state = recording[:state]
```

{% common %}


> The above command returns JSON structured like this:

```
{
  "endTime": "2013-02-08T13:17:12.181Z",
  "id": "{recordingId}",
  "media": "https://.../v1/users/.../media/c-bonay3r4mtwbplurq4nkt7q-1.wav",
  "call": "https://.../v1/users/.../calls/{callId}",
  "startTime": "2013-02-08T13:15:47.587Z",
  "state": "complete"
}
```
{% endmethod %}
