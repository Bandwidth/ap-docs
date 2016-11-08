{% method %}

## List Calls
Gets a list of active and historic calls you made or received. Since this operation uses HTTP GET, all the properties are specified as HTTP request parameters.

### Request URL

<code class="get">GET</code>`https://api.catapult.inetwork.com/v1/users/{userId}/calls/`

---

### Supported Parameters

| Parameter    | Description                                                                                                                                                          | Mandatory |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| bridgeId     | The id of the bridge for querying a list of calls history (pagination do not apply).                                                                                 | No        |
| conferenceId | The id of the conference for querying a list of calls history (pagination do not apply).                                                                             | No        |
| from         | The number to filter calls that came from (must be either an E.164 formatted number, like +19195551212, or a valid SIP URI, like sip:someone@somewhere.com).         | No        |
| to           | The number to filter calls that was called to (must be either an E.164 formatted number, like +19195551212, or a valid SIP URI, like sip:someone@somewhere.com).     | No        |
| page         | Used for pagination to indicate the page requested for querying a list of calls. If no value is specified the default is 0.                                          | No        |
| size         | Used for pagination to indicate the size of each page requested for querying a list of calls. If no value is specified the default value is 25 (maximum value 1000). | No        |
| sortOrder    | How to sort the calls. Values are `asc` or `desc` If no value is specified the default value is `desc`                                                               | No        |

{% common %}

### Example: List your calls

{% sample lang="bash" %}

```bash
curl -v -X GET  https://api.catapult.inetwork.com/v1/users/{user-id}/calls/ \
	-u {token}:{secret} \
	-H "Content-type: application/json" \
```
{% sample lang="js" %}

```js
client.Call.list()
.then(function (response) {
	console.log(response);
});
```

{% sample lang="csharp" %}

```csharp
var calls = client.Call.List();
var firstCallTo = calls.First().To;
```


{% sample lang="ruby" %}

```ruby
calls = Call.list(client)
first_call = calls.next
first_call_to = first_call[:to]
```

{% common %}

> The above command returns JSON structured like this:

```json
[
	{
		"id": "{callId1}",
		"direction": "out",
		"from": "{fromNumber}",
		"to": "{number}",
		"recordingEnabled": false,
		"callbackUrl": "",
		"state": "completed",
		"startTime": "2013-02-08T13:15:47.587Z",
		"activeTime": "2013-02-08T13:15:52.347Z",
		"endTime": "2013-02-08T13:15:55.887Z",
		"chargeableDuration": 60,
		"events": "https://.../calls/{callId1}/events",
		"sipHeaders" : {
				"X-Header-1" : "value-1",
				"X-Header-2" : "value2"
		}
	},
	{
		"id": "{callId2}",
		"direction": "out",
		"from": "{number}",
		"to": "{toNumber}",
		"recordingEnabled": false,
		"callbackUrl": "",
		"state": "active",
		"startTime": "2013-02-08T13:15:47.587Z",
		"activeTime": "2013-02-08T13:15:52.347Z",
		"events": "https://.../calls/{callId2}/events"
	}
]
```

### Example: List your calls by from number {fromNumber}

{% sample lang="bash" %}

```bash
curl -v -X GET  https://api.catapult.inetwork.com/v1/users/{user-id}/calls?from=%2b19195551212 \
	-u {token}:{secret} \
	-H "Content-type: application/json" \
```
{% sample lang="js" %}

```js
client.Call.list({
	from: "+19195551212"
})
.then(function (response) {
	console.log(response);
});

```

{% sample lang="csharp" %}

```csharp
var calls = client.Call.List(new CallQuery{From = "+19195551212"});
```

{% sample lang="ruby" %}

```ruby
calls = Call.list(client, {:from => "+19195551212"})
```
{% common %}

> The above command returns JSON structured like this:

```json
[
	{
		"id": "{callId1}",
		"direction": "out",
		"from": "{fromNumber}",
		"to": "{toNumber1}",
		"recordingEnabled": false,
		"callbackUrl": "",
		"state": "completed",
		"startTime": "2013-02-08T13:15:47.587Z",
		"activeTime": "2013-02-08T13:15:52.347Z",
		"endTime": "2013-02-08T13:15:55.887Z",
		"chargeableDuration": 60,
		"events": "https://.../calls/{callId1}/events"
	},
	{
		"id": "{callId2}",
		"direction": "out",
		"from": "{fromNumber}",
		"to": "{toNumber2}",
		"recordingEnabled": false,
		"callbackUrl": "",
		"state": "active",
		"startTime": "2013-02-08T13:15:47.587Z",
		"activeTime": "2013-02-08T13:15:52.347Z",
		"events": "https://.../calls/{callId2}/events"
	}
]
```
{% endmethod %}
