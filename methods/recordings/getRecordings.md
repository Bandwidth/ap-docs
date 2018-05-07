{% method %}

## List Recordings
List all users' call recordings. Since this operation uses HTTP GET, all the properties are specified as HTTP request parameters.

See the [faq](https://dev.bandwidth.com/faq/voice/callRecordings.html) for more information about Recordings and storage.

### Request URL

<code class="get">GET</code>`https://api.catapult.inetwork.com/v1/users/{userId}/recordings/`

---

### Supported Parameters
| Parameter | Description                                                                                                                                                 | Mandatory |
|:----------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| page      | Used for pagination to indicate the page requested for querying a list. If no value is specified the default is 0.                                          | No        |
| size      | Used for pagination to indicate the size of each page requested for querying a list. If no value is specified the default value is 25. (Maximum value 1000) | No        |

### Properties

| Property  | Description                                                                                                                                                               |
|:----------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| id        | The unique id of the recordings resource.                                                                                                                                 |
| startTime | Date/time when the recording started. Timestamp follows the ISO8601 format (UTC).                                                                                         |
| endTime   | Date/time when the recording ended. Timestamp follows the ISO8601 format (UTC).                                                                                           |
| call      | The complete URL to the call resource this recording is associated with.                                                                                                  |
| media     | The complete URL to the media resource this recording is associated with.                                                                                                 |
| state     | The state of the recording, values are <br> `recording` <br> *`complete`<br> *`saving` <br> *`error`                                                                      |
| page      | Used for pagination to indicate the page requested for querying a list of recordings. If no value is specified the default is 0.                                          |
| size      | Used for pagination to indicate the size of each page requested for querying a list of recordings. If no value is specified the default value is 25. (Maximum value 1000) |

### Recording States
| State     | Description                                                    |
|:----------|:---------------------------------------------------------------|
| recording | Recording is currently active.                                 |
| saving    | Recording is complete but it is not available to download yet. |
| error     | Recording could not be uploaded.                               |
| complete  | Recording complete and available for downloading or playing.   |

{% common %}


### Example 1 of 1: List all recordings

{% sample lang="bash" %}

```bash
curl -v -X GET https://api.catapult.inetwork.com/v1/users/{userId}/recordings \
	-u {token}:{secret} \
	-H "Content-type: application/json"
```

{% sample lang="js" %}


```js
//Promise
client.Recording.list({}).then(function (recordings) {});

//Callback
client.Recording.list({}, function (err, recordings) {
	if (err) { console.log(err); }
	else {
		console.log(recordings);
	}
});
```

{% sample lang="csharp" %}

```csharp
var recordings = client.Recording.List();
var firstRecording = recordings.First();
Console.WriteLine($"{firstRecording.Id} - {firstRecording.State}");
// r-1234 - Complete
```

{% sample lang="ruby" %}

```ruby
recordings = Recording.list(client)
first_recording = recordings.next
first_recording_id = first_recording[:id]
```

{% common %}


> The above command returns JSON structured like this:

```json
[
{
    "endTime": "2013-02-08T13:17:12.181Z",
    "id": "{recordingId1}",
    "media": "https://.../v1/users/.../media/{callId1}-1.wav",
    "call": "https://.../v1/users/.../calls/{callId1}",
    "startTime": "2013-02-08T13:15:47.587Z",
    "state": "complete"
  },
  {
    "endTime": "2013-02-08T14:05:15.587Z",
    "id": "{recordingId2}",
    "media": "https://.../v1/users/.../media/{callId1}-2.wav",
    "call": "https://.../v1/users/.../calls/{callId1}",
    "startTime": "2013-02-08T14:03:47.587Z",
    "state": "complete"
  },
  {
    "endTime": "2013-02-08T13:34:07.507Z",
    "id": "{recordingId3}",
    "media": "https://.../v1/users/.../media/{callId2}-1.wav",
    "call": "https://.../v1/users/.../calls/{call2}",
    "startTime": "2013-02-08T13:28:47.587Z",
    "state": "complete"
  }
]
```
{% endmethod %}
