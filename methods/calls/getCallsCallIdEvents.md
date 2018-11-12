{% method %}

## List Call Events
Gets the events that occurred during the call. No query parameters are supported.

### Request URL

<code class="get">GET</code>`https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}/events`

---

### Event Properties

| Property | Description                  | Mandatory |
|:---------|:-----------------------------|:----------|
| id       | The call event id.           | No        |
| time     | The time the event occurred. | No        |
| name     | The name of the event.       | No        |
| data     | Data about event.            | No        |

{% common %}

### Example 1 of 1: Get events for a call.

{% sample lang="bash" %}

```bash
curl -v -X GET https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}/events -u {token}:{secret} -H "Content-type: application/json"
```

{% sample lang="js" %}

```js
// Promise
client.Call.getEvents(callId).then(function (events) {});
// Callback
client.Call.getEvents(callId, function (err, events) {});
```

{% sample lang="csharp" %}

```csharp
var events = client.Call.GetEvents("{callId1}");
var firstEvent = events.First();
Console.WriteLine($"{firstEvent.Id} {firstEvent.Name}");
// ev-123 answer

```

{% sample lang="ruby" %}

```ruby
events = call.get_events()
first_event = events[0]
first_event_id = first_event[:id]
```


> The above command returns JSON structured like this:

{% common %}

```json
[
	{
		"id": "{callEventId1}",
		"time": "2012-09-19T13:55:41.343Z",
		"name": "create"
	},
	{
		"id": "{callEventId2}",
		"time": "2012-09-19T13:55:45.583Z",
		"name": "answer"
	},
	{
		"id": "{callEventId3}",
		"time": "2012-09-19T13:55:45.583Z",
		"name": "CHANNEL_EXECUTE",
		"data": "{\"applicationName\":\"park\"}"
	},
	{
		"id": "{callEventId4}",
		"time": "2012-09-19T13:55:51.283Z",
		"name": "CHANNEL_EXECUTE",
		"data": "{\"applicationName\":\"playback\",\"applicationData\":\"test.mp3\"}"
	},
	{
		"id": "{callEventId5}",
		"time": "2012-09-19T13:55:45.583Z",
		"name": "playback",
		"data": "start"
	},
	{
		"id": "{callEventId6}",
		"time": "2012-09-19T13:55:45.583Z",
		"name": "playback",
		"data": "done"
	},
	{
		"id": "{callEventId7}",
		"time": "2012-09-19T13:55:55.503Z",
		"name": "CHANNEL_EXECUTE_COMPLETE",
		"data": "{\"applicationName\":\"playback\",\"applicationData\":\"test.mp3\"}"
	},
	{
		"id": "{callEventId8}",
		"time": "2012-09-19T13:55:58.323Z",
		"name": "hangup",
		"data": "NORMAL_CLEARING"
	},
	{
		"id": "{callEventId9}",
		"time": "2012-09-19T13:55:58.343Z",
		"name": "CHANNEL_EXECUTE_COMPLETE",
		"data": "{\"applicationName\":\"playback\",\"applicationData\":\"test.mp3\"}"
	}
]
```
{% endmethod %}
