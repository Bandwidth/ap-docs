{% method %}
## POST calls
Creates a new outbound phone call.

### Supported Parameters

| Parameter            | Description                                                                                                                                  | Mandatory |
|:---------------------|:---------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| from                 | A Bandwidth phone number on your account the call should come from (must be in E.164 format, like `+19195551212`).                           | Yes       |
| to                   | The number to call (must be either an E.164 formatted number, like `+19195551212`, or a valid SIP URI, like `sip:someone@somewhere.com`).    | Yes       |
| callTimeout          | Determine how long should the platform wait for call answer before timing out in seconds.                                                    | No        |
| callbackUrl          | The full server URL where the call events related to the Call will be sent to.                                                               | No        |
| callbackTimeout      | Determine how long should the platform wait for callbackUrl’s response before timing out in milliseconds.                                    | No        |
| callbackHttpMethod   | Determine if the callback event should be sent via `HTTP GET` or `HTTP POST`. Values are `GET` or `POST` (if not set the default is `POST`). | No        |
| fallbackUrl          | The full server URL used to send the callback event if the request to callbackUrl fails.                                                     | No        |
| bridgeId             | The id of the bridge where the call will be added.                                                                                           | No        |
| conferenceId         | Id of the conference where the call will be added. This property is required if you want to add this call to a conference.                   | No        |
| recordingEnabled     | Indicates if the call should be recorded after being created. Set to `true` to enable. Default is `false`.                                   | No        |
| recordingMaxDuration | Indicates the maximum duration of call recording in seconds. Default value is 1 hour.                                                        | No        |
| recordingFileFormat  | The file format of the recorded call. Supported values are `wav` (default) and `mp3`.                                                        | No        |
| transcriptionEnabled | Whether all the recordings for this call is going to be automatically transcribed.                                                           | No        |
| tag                  | A string that will be included in the callback events of the call.                                                                           | No        |
| sipHeaders           | Map of Sip headers prefixed by `X-`. Up to 5 headers can be sent per call.                                                                   | No        |

{% common %}
### Example: Create an outbound phone call

<aside class="notice">
The call resource returned in the "Location" header can be modified to change the call (for example, play audio files, transfer to a different number, or hang up).
</aside>

{% sample lang="bash" %}
```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/calls \
	-u {token}:{secret} \
	-H "Content-type: application/json" \
	-d \
	'
	{
		"from": "{fromNumber}",
		"to": "{toNumber}"
	}'
```

{% sample lang="js" %}
```js
client.Call.create({
	from: "{fromNumber}",
	to: "{toNumber}"
})
.then(function (id) {
	console.log(id);
})
```


{% sample lang="csharp" %}
```csharp
var call = await client.Call.CreateAsync(new CreateCallData{
	From = "{fromNumber}",
	To = "{toNumber}"
});
```


{% sample lang="ruby" %}
```ruby
call = Call.create(client, {:from => "{fromNumber}", :to => "{toNumber}"})
```

{% common %}

### Example: Create an outbound call to a SIP URI

Make a call to a SIP URI:

<aside class="notice">
* The support is based on SIP RFC 3261.
* If the INVITE fails (receive a non-2xx final response), an event will be generated to the application indicating the call has hung up.
* SIPS is not currently supported.
</aside>

{% sample lang="bash" %}{% sample lang="bash" %}
```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/calls \
	-u {token}:{secret} \
	-H "Content-type: application/json" \
	-d \
	'
	{
		"from": "{fromNumber}",
		"to": "{sip:someone@somewhere.com:}",
		"sipHeaders": {
			"X-Header-1": "value1",
			"X-Header-2": "value2"
		}
	}'
```

{% sample lang="js" %}
```js
client.Call.create({
	from: "{fromNumber}",
	to: "{sip:someone@somewhere.com}",
	sipHeaders: {
		"X-Header-1": "value1",
		"X-Header-2": "value2"
	}
})
.then(function (id) {
	console.log(id);
})
```


{% sample lang="csharp" %}
```csharp
var call = await client.Call.CreateAsync(new CreateCallData{
	From = "{fromNumber}",
	To = "sip:someone@somewhere.com",
	SipHeaders = new Dictionary<string, string> {
		{"X-Header-1", "value1"},
		{"X-Header-2", "value2"}
	}
});
```


{% sample lang="ruby" %}
```ruby
call = Call.create(client, {
	:from => "{fromNumber}",
	:to => "{sip:someone@somewhere.com}",
	:sip_headers => {
		"X-Header-1" => "value1",
		"X-Header-2" => "value2"
	}
})
```
{% common %}
### Example: Create call and start recording it

### Example: Create a call in a bridge

### Example: Create an outbound call with callback and fallback URL

### Example: Create an outbound call with tag property
{% endmethod %}
