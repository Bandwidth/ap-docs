{% method %}
## POST conferences
Creates a conference with no members.

### Supported Parameters

| Parameter          | Description                                                                                                                                                                                     | Mandatory |
|:-------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| from               | The phone number that will host the conference.                                                                                                                                                 | Yes       |
| callbackUrl        | The complete URL where the events related to the Conference will be sent to.                                                                                                                    | No        |
| callbackHttpMethod | Determine if the callback event should be sent via `HTTP GET` or `HTTP POST`. Values are <code class="get">GET</code> or <code class="get">POST</code>, default: <code class="get">POST</code>. | No        |
| callbackTimeout    | Determine how long should the platform wait for callbackUrl’s response before timing out in milliseconds.                                                                                       | No        |
| fallbackUrl        | The URL used to send the callback event if the request to callbackUrl fails.                                                                                                                    | No        |
| tag                | A string that will be included in the callback events of the conference.                                                                                                                        | No        |

{% common %}
### Example: Create conference

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
var conference = await client.Conference.CreateAsync(new CreateConferenceData {From = "+1234567890"});
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

### Example: Create conference with callback and fallback and 2 seconds callback's timeout

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
{% endmethod %}
