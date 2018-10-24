{% method %}

## Create Call
Creates a new outbound phone call.

### Request URL

<code class="post">POST</code>`https://api.catapult.inetwork.com/v1/users/{userId}/calls`

---

### Supported Parameters

| Parameter            | Description                                                                                                                                                                                                        | Mandatory |
|:---------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| from                 | A Bandwidth phone number on your account the call should come from (must be in E.164 format, like `+19195551212`).                                                                                                 | Yes       |
| to                   | The number to call (must be either an E.164 formatted number, like `+19195551212`, or a valid SIP URI, like `sip:someone@somewhere.com`).                                                                          | Yes       |
| callTimeout          | Determine how long should the platform wait for call answer before timing out in seconds.                                                                                                                          | No        |
| callbackUrl          | The full server URL where the call events related to the Call will be sent to.                                                                                                                                     | No        |
| callbackTimeout      | Determine how long should the platform wait for callbackUrl’s response before timing out in milliseconds. <br> **Default** Time: `10000` (10s) <br> **Maximum** Time: `10000` (10s)                                | No        |
| callbackHttpMethod   | Determine if the callback event should be sent via `HTTP GET` or `HTTP POST`. Values are `GET` or `POST` (default is `POST`). | No        |
| fallbackUrl          | The full server URL used to send the callback event if the request to callbackUrl fails.                                                                                                                           | No        |
| bridgeId             | The id of the bridge where the call will be added.                                                                                                                                                                 | No        |
| conferenceId         | Id of the conference where the call will be added. This property is required if you want to add this call to a conference.                                                                                         | No        |
| recordingEnabled     | Indicates if the call should be recorded after being created. Set to `true` to enable. Default is `false`.                                                                                                         | No        |
| recordingMaxDuration | Indicates the maximum duration of call recording in seconds. Default value is 1 hour.                                                                                                                              | No        |
| recordingFileFormat  | The file format of the recorded call. Supported values are `wav` (default) and `mp3`.                                                                                                                              | No        |
| transcriptionEnabled | Whether all the recordings for this call is going to be automatically transcribed.                                                                                                                                 | No        |
| tag                  | A string that will be included in the callback events of the call.                                                                                                                                                 | No        |
| sipHeaders           | Map of Sip headers prefixed by `X-`. Up to 5 headers can be sent per call.                                                                                                                                         | No        |

{% common %}

### Example 1 of 6: Create an outbound phone call

<aside class="alert general small">
<p>
The call resource returned in the "Location" header can be modified to change the call (for example, play audio files, transfer to a different number, or hang up).
</p>
</aside>

{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/calls 	-u {token}:{secret} 	-H "Content-type: application/json" 	-d 	'
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
Console.WriteLine($"Created call with id {call.Id}");
// Created call with id c-1234
```


{% sample lang="ruby" %}

```ruby
call = Call.create(client, {:from => "{fromNumber}", :to => "{toNumber}"})
```

{% common %}


### Example 2 of 6: Create an outbound call to a SIP URI

Make a call to a SIP URI:

<aside class="notice">
<p>
* The support is based on SIP RFC 3261.
* If the INVITE fails (receive a non-2xx final response), an event will be generated to the application indicating the call has hung up.
* SIPS is not currently supported.
</p>
</aside>

{% sample lang="bash" %}
{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/calls 	-u {token}:{secret} 	-H "Content-type: application/json" 	-d 	'
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
Console.WriteLine($"Created call with id {call.Id}");
// Created call with id c-1234
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

### Example 3 of 6: Create call and start recording it
{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/calls 	-u {token}:{secret} 	-H "Content-type: application/json" 	-d 	'
	{
		"from": "{fromNumber}",
		"to": "{toNumber}",
		"recordingEnabled": "true"
	}'
```

{% sample lang="js" %}

```js
client.Call.create({
	from: "{fromNumber}",
	to: "{toNumber}",
	recordingEnabled: true
})
.then(function (id) {
	console.log(id);
})
```

{% sample lang="csharp" %}

```csharp
var call = await client.Call.CreateAsync(new CreateCallData{
	From = "{fromNumber}",
	To = "{toNumber}",
	RecordingEnabled = true
});
Console.WriteLine($"Created call with id {call.Id}");
// Created call with id c-1234
```


{% sample lang="ruby" %}

```ruby
call = Call.create(client, {
	:from => "{fromNumber}",
	:to => "{toNumber}",
	:recording_enabled => true
})
```

{% common %}
### Example 4 of 6: Create a call in a bridge

{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/bridges/     -u {token}:{secret}     -H "Content-type: application/json"     -d '{"bridgeAudio": "true" }'
```

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/calls     -u {token}:{secret}     -H "Content-type: application/json"     -d     '
    {
        "from": "{fromNumber}",
        "to": "{toNumber}",
        "bridgeId": "{bridgeId}"
    }'
```

{% sample lang="js" %}

```js
client.bridge.create({
	bridgeAudio: true
})
.then(function (bridgeId) {
	return client.Call.create({
		from: "{fromNumber}",
		to: "{sip:someone@somewhere.com}",
		bridgeId: bridgeId.id
	})
})
.then(function (callId) {
	console.log(callId);
})
```

{% sample lang="csharp" %}

```csharp
var call = await client.Call.CreateAsync(new CreateCallData{
	From = "{fromNumber}",
	To = "{sip:someone@somewhere.com}",
	BridgeId = "bridgeId"
});
Console.WriteLine($"Created call with id {call.Id}");
// Created call with id c-1234
```


{% sample lang="ruby" %}

```ruby
call = Call.create(client, {
	:from => "{fromNumber}",
	:to => "{sip:someone@somewhere.com}",
	:bridge_id => "bridgeId"
})
```


{% common %}
### Example 5 of 6: Create an outbound call with callback and fallback URL


{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/calls 	-u {token}:{secret} 	-H "Content-type: application/json" 	-d 	'
	{
		"from": "{fromNumber}",
		"to": "{toNumber}",
		"callbackUrl" : "http://google.com",
		"callbackHttpMethod": "GET",
		"fallbackUrl" : "http://bing.com"
	}'
```

{% sample lang="js" %}

```js
client.Call.create({
	from: "{fromNumber}",
	to: "{toNumber}",
	callbackUrl : "http://google.com",
	callbackHttpMethod: "GET",
	fallbackUrl : "http://bing.com"
})
.then(function (id) {
	console.log(id);
})
```

{% sample lang="csharp" %}

```csharp
var call = await client.Call.CreateAsync(new CreateCallData{
	From = "{fromNumber}",
	To = "{toNumber}",
	CallbackUrl = "http://google.com"
	CallbackHttpMethod = "GET",
	FallbackUrl = "http://bing.com"
});
Console.WriteLine($"Created call with id {call.Id}");
// Created call with id c-1234
```


{% sample lang="ruby" %}

```ruby
call = Call.create(client, {
	:from => "{fromNumber}",
	:to => "{toNumber}",
	:callback_url => "http://google.com",
	:callback_http_method => "GET",
	:fallback_url => "http://bing.com"
})
```

{% common %}
### Example 6 of 6: Create an outbound call with tag property


{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/calls -u {token}:{secret} -H "Content-type: application/json" -d
    '
	{
		"from": "{fromNumber}",
		"to": "{toNumber}",
		"tag" : "{ \"context\": \"key\" }"
	}
    '
```


{% sample lang="js" %}

```js

var context = {
	key: "value1",
	pair: "set",
	username: "steve",
	phonenumber: "+1918111333"
}

client.Call.create({
	from: "{fromNumber}",
	to: "{toNumber}",
	callbackUrl : "http://google.com",
	callbackHttpMethod: "GET",
	tag : JSON.stringify(context)
})
.then(function (id) {
	console.log(id);
})
```

{% sample lang="csharp" %}

```csharp
var call = await client.Call.CreateAsync(new CreateCallData{
	From = "{fromNumber}",
	To = "{toNumber}",
	CallbackUrl = "http://google.com"
	CallbackHttpMethod = "GET",
	Tag = "Tag"
});
Console.WriteLine($"Created call with id {call.Id}");
// Created call with id c-1234
```


{% sample lang="ruby" %}

```ruby
call = Call.create(client, {
	:from => "{fromNumber}",
	:to => "{toNumber}",
	:callback_url => "http://google.com",
	:callback_http_method => "GET",
	:tag => "tag"
})
```

{% endmethod %}
