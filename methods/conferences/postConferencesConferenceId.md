{% method %}

## Update Conference
Change the conference properties and/or status.

### Request URL

<code class="post">POST</code>`https://api.catapult.inetwork.com/v1/users/{userId}/conferences/{conferenceId}`

---

### Supported Parameters

| Parameter          | Description                                                                                                                                                                                   | Mandatory |
|:-------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| state              | Conference state. Possible state values are: `completed` to terminate the conference.                                                                                                         | No        |
| hold               | If `true`, all member can’t hear or speak in the conference. If `false`, all members can hear and speak in the conference (unless set at the member level).                                   | No        |
| mute               | If `true`, all member can’t speak in the conference. If `false`, all members can speak in the conference (unless set at the member level).                                                    | No        |
| callbackUrl        | The complete URL where the events related to the Conference will be sent to.                                                                                                                  | No        |
| callbackHttpMethod | Determine if the callback event should be sent via HTTP GET or HTTP POST. Values are <code class="get">GET</code> or <code class="post">POST</code>, default: <code class="post">POST</code>. | No        |
| callbackTimeout    | Determine how long should the platform wait for callbackUrl’s response before timing out in milliseconds.                                                                                     | No        |
| fallbackUrl        | The URL used to send the callback event if the request to callbackUrl fails.                                                                                                                  | No        |
| tag                | A string that will be included in the callback events of the conference.                                                                                                                      | No        |


{% common %}

### Example 1 of 2: Terminate Conference

{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/conferences/{conferenceId} \
	-u {token}:{secret} \
	-H "Content-type: application/json" \
	-d \
	'
	{
		"state": "completed"
	}'
```

{% sample lang="js" %}

```js
// Promise
client.Conference.update("conferenceID", {state: "completed"}).then(function(){});
// Callback
client.Conference.update("conferenceID", {state: "completed"}, function(err){});
```

{% sample lang="csharp" %}

```csharp
await client.Conference.TerminateAsync("{conferenceId1}");
```

{% sample lang="ruby" %}

```ruby
conference.complete()
```

{% common %}

### Example 2 of 2: Prevent all members from speaking
{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/conferences/{conferenceId} \
	-u {token}:{secret} \
	-H "Content-type: application/json" \
	-d \
	'
	{
		"mute": "true"
	}'
```

{% sample lang="js" %}

```js
// Promise
client.Conference.update("conferenceID", {mute: "true"}).then(function(){});
// Callback
client.Conference.update("conferenceID", {mute: "true"}, function(err){});
```

{% sample lang="csharp" %}

```csharp
await client.Conference.MuteAsync("{conferenceId1}", true);
```

{% sample lang="ruby" %}

```ruby
conference.mute()
```
{% endmethod %}
