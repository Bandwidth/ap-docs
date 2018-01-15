{% method %}

## Create Conference
Creates a conference with no members.

### Request URL

<code class="post">POST</code>`https://api.catapult.inetwork.com/v1/users/{userId}/conferences`

---

### Supported Parameters

| Parameter          | Description                                                                                                                                                                                                                                                                                                                                                | Mandatory |
|:-------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| from               | The phone number that will host the conference.                                                                                                                                                                                                                                                                                                            | Yes       |
| callbackUrl        | The complete URL where the events related to the Conference will be sent to.                                                                                                                                                                                                                                                                               | No        |
| callbackHttpMethod | Determine if the callback event should be sent via `HTTP GET` or `HTTP POST`. Values are <code class="get">GET</code> or <code class="get">POST</code>, default: <code class="get">POST</code>.                                                                                                                                                            | No        |
| callbackTimeout    | Determine how long should the platform wait for callbackUrl’s response before timing out in milliseconds. <br> Maximum Time: `10000` (10s)                                                                                                                                                                                                                 | No        |
| fallbackUrl        | The URL used to send the callback event if the request to callbackUrl fails.                                                                                                                                                                                                                                                                               | No        |
| profile            | The conference profile that determines how DTMF is used. Values are:<br/>- `interpret_digits`: the conference will handle DTMF with the [default behavior](conferences.md#default-button-presses-dtmf-during-conferences) <br/>-`passthru_digits`: allows the application to receive DTMF events and use the `gather` API.<br/>Default: `interpret_digits` | No        |
| tag                | A string that will be included in the callback events of the conference.                                                                                                                                                                                                                                                                                   | No        |

{% common %}

### Example 1 of 3: Create conference call

{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/conferences \
	-u {token}:{secret} \
	-H "Content-type: application/json" \
	-d \
	'
	{
		"from": "{number}"
	}'
```

{% sample lang="js" %}

```js
// Promise
client.Conference.create({from: "+1234567890"}).then(function(conference){});
// Callback
client.Conference.create({from: "+1234567890"}, function(err, conference){});
```

{% sample lang="csharp" %}

```csharp
var conferenceId = await client.Conference.CreateAsync(new CreateConferenceData {From = "+1234567890"});
Console.WriteLine($"Created conference with id {conferenceId}");
// Created conference with id c-1234
```


{% sample lang="ruby" %}

```ruby
conference = Conference.create(client,  {:from => "+1234567890"})
```

{% common %}

> The above command returns HTTP Header structured like this:

```
HTTP/1.1 201 CREATED
Location: /v1/users/{userId}/conferences/{conferenceId}
```

### Example 2 of 3: Create conference with callback, 2 seconds callback's timeout, and fallback

{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/ \
	-u {token}:{secret} \
	-H "Content-type: application/json" \
	-d \
	'
	{
		"from": "{number}",
		"callbackUrl":"http://my.callback.url",
		"callbackTimeout":"2000",
		"fallbackUrl":"http://my.fallback.url"
	}'
```

{% sample lang="js" %}

```js
var params = {
	"from": "{number}",
	"callbackUrl":"http://my.callback.url",
	"callbackTimeout":"2000",
	"fallbackUrl":"http://my.fallback.url"
};

// Promise
client.Conference.create(params).then(function(conference){});
// Callback
client.Conference.create(params, function(err, conference){});
```

{% sample lang="csharp" %}

```csharp
var conference = await client.Conference.CreateAsync(new CreateConferenceData {
	From = "{number}",
	CallbackUrl ="http://my.callback.url",
	CallbackTimeout = 2000,
	FallbackUrl ="http://my.fallback.url"
});
```

{% sample lang="ruby" %}

```ruby
conference = Conference.create(client,  {
	:from => "+1234567890",
	:callback_url => "http://my.callback.url",
	:callback_timeout => 2000,
	:fallback_url => "http://my.fallback.url"
})
```

{% common %}

> The above command returns HTTP Header structured like this:

```
HTTP/1.1 201 CREATED
Location: /v1/users/{userId}/conferences/{conferenceId}
```

### Example 3 of 3: Create conference with callback, 2 seconds callback's timeout, fallback, and profile

{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/ \
	-u {token}:{secret} \
	-H "Content-type: application/json" \
	-d \
	'
	{
		"from": "{number}",
		"callbackUrl":"http://my.callback.url",
		"callbackTimeout":"2000",
		"fallbackUrl":"http://my.fallback.url",
		"profile": "passthru_digits"
	}'
```

{% sample lang="js" %}

```js
var params = {
	"from": "{number}",
	"callbackUrl":"http://my.callback.url",
	"callbackTimeout":"2000",
	"fallbackUrl":"http://my.fallback.url",
	"profile": "passthru_digits"
};

// Promise
client.Conference.create(params).then(function(conference){});
// Callback
client.Conference.create(params, function(err, conference){});
```

{% sample lang="csharp" %}

```csharp
var conference = await client.Conference.CreateAsync(new CreateConferenceData {
	From = "{number}",
	CallbackUrl ="http://my.callback.url",
	CallbackTimeout = 2000,
	FallbackUrl ="http://my.fallback.url",
	Profile ="passthru_digits"
});
```

{% sample lang="ruby" %}

```ruby
conference = Conference.create(client,  {
	:from => "+1234567890",
	:callback_url => "http://my.callback.url",
	:callback_timeout => 2000,
	:fallback_url => "http://my.fallback.url",
	:profile => "passthru_digits"
})
```

{% common %}

> The above command returns HTTP Header structured like this:

```
HTTP/1.1 201 CREATED
Location: /v1/users/{userId}/conferences/{conferenceId}
```
{% endmethod %}
