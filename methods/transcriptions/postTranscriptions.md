{% method %}
## POST recordings/{recording-id}/transcriptions
Request the transcription process to be started for the given recording id.

{% common %}

### Example: Start Transcription process

{% sample lang="bash" %}
```bash
# Note: Body is empty
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/recordings/{recording-id}/transcriptions \
	-u {token}:{secret} \
	-H "Content-type: application/json" \
		-d \
	'
	{

	}'
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
