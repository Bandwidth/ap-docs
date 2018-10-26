{% method %}

## Create new Transcription on an existing Recording
Request the transcription process to be started for the given recording id.

### Request URL

<code class="post">POST</code>`https://api.catapult.inetwork.com/v1/users/{userId}/recordings/{recordingId}/transcriptions/`

{% common %}

### Example 1 of 1: Start Transcription process

{% sample lang="bash" %}

```bash
# Note: Body is empty
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/recordings/{recording-id}/transcriptions -u {token}:{secret} -H "Content-type: application/json" -d
    '
	{

	}
    '
```

{% sample lang="js" %}

```js
// Promise
client.Recording.createTranscription(recordingId).then(function(transcription){});

// Callback
client.Recording.createTranscription(recordingId, function(err, transcription){});
```

{% sample lang="csharp" %}

```csharp
var transcription = await client.Transcription.CreateAsync("{recordingId}");
Console.WriteLine($"Created transcription with id {transcription.Id}");
// Created transcription with id tr-1234

```

{% sample lang="ruby" %}

```ruby
transcription = recording.create_transacription()
```

{% common %}


> The above command returns HTTP Header structured like this:

```
HTTP/1.1 201 Created
Location: /v1/users/{user-id}/recordings/{recording-id}/transcriptions/{transcription-id}
```
{% endmethod %}
