{% method %}

## Fetch Event information

Gets information about one call event. No query parameters are supported.

### Request URL

<code class="get">GET</code>`https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}/events/{eventId}`

{% common %}

### Example 1 of 1: Fetch event information

{% sample lang="bash" %}

```bash
curl -v -X GET https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}/events/{eventId} -u {token}:{secret} -H "Content-type: application/json"
```

{% sample lang="js" %}

```js
// Promise
client.Call.getEvent(callId, eventId).then(function (callEvent) {});
// Callback
client.Call.getEvent(callId, eventId, function (err, callEvent) {});
```

{% sample lang="csharp" %}

```csharp
var callEvent = async client.Call.GetEventAsync("{callId1}", "{eventId1}");
Console.WriteLine(callEvent.Name);
// answer
```

{% sample lang="ruby" %}

```ruby
call_event = call.get_event("{eventId1}")
event_name = call_event[:name]
```

{% common %}

> The above command returns JSON structured like this:

```
{
		"id": "ce-qg4vz6anrfogri7hhduqlgq",
		"time": 1419032854964,
		"name": "hangup",
		"data": ""
}
```
{% endmethod %}
