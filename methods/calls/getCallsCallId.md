{% method %}

## Fetch Call information
Gets information about an active or completed call. No query parameters are supported.

### Request URL

<code class="get">GET</code>`https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}`

---

## Properties
| Property             | Description                                                                                                                                                                                   |
|:---------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| id                   | The unique ID of the call.                                                                                                                                                                    |
| direction            | Call direction: values are `in` for an incoming call, `out` for an outgoing call                                                                                                              |
| from                 | The phone number or SIP address that made the call. Phone numbers are in E.164 format (e.g. +15555555555) -or- SIP addresses (e.g. identify@domain.com).                                      |
| to                   | The phone number or SIP address that received the call. Phone numbers are in E.164 format (e.g. +15555555555) -or- SIP addresses (e.g. identify@domain.com).                                  |
| state                | The call state. Described below, values are:<br> - `started` <br> - `rejected`<br> -`active`<br> -`completed`<br> -`transferring`                                                             |
| startTime            | Date when the call was created. Timestamp follows the ISO8601 format.                                                                                                                         |
| activeTime           | Date when the call was answered. Timestamp follows the ISO8601 format.                                                                                                                        |
| endTime              | Date when the call ended. Timestamp follows the ISO8601 format.                                                                                                                               |
| callTimeout          | Determine how long should the platform wait for call answer before timing out in seconds (milliseconds).                                                                                      |
| callbackUrl          | The server URL where the call events related to the call will be sent.                                                                                                                        |
| callbackHttpMethod   | Determine if the callback event should be sent via HTTP GET or HTTP POST. Values are <code class="get">GET</code> or <code class="post">POST</code> Default is <code class="post">POST</code> |
| callbackTimeout      | Determine how long should the platform wait for callbackUrl's response before timing out (milliseconds).                                                                                      |
| fallbackUrl          | The server URL used to send the call events if the request to callbackUrl fails.                                                                                                              |
| chargeableDuration   | The number of seconds the call will be billed for.                                                                                                                                            |
| events               | The URL to retrieve the events related to the call.                                                                                                                                           |
| recordings           | The URL to retrieve the recordings related to the call.                                                                                                                                       |
| recordingEnabled     | Indicates if the call should be recorded after being created. Set to `true` to enable. Default is `false`                                                                                     |
| transcriptionEnabled | Whether all the recordings for this call should be be automatically transcribed.                                                                                                              |
| tag                  | Any string, it will be included in the callback events of the call.                                                                                                                           |
| sipHeaders           | Map of Sip headers prefixed by "X-". Up to 5 headers can be sent per call. Max length for header and value is 256 characters.                                                                 |


{% common %}

### Example 1 of 1: Get Call Information

{% sample lang="bash" %}

```bash
curl -v -X GET https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId} \
	-u {token}:{secret} \
	-H "Content-type: application/json"
```

{% sample lang="js" %}

```js
client.Call.get("{callId}")
.then(function (response) {
	console.log(respone);
});
```

{% sample lang="csharp" %}

```csharp
var call = await client.Call.GetAsync("{callId1}");
Console.WriteLine($"{call.From} - {call.To}");
// +19195551212 - +1234567891

```

{% sample lang="ruby" %}

```ruby
call = Call.get(client, "{callId1}")
to = call[:to]
```
{% common %}

> The above command returns JSON structured like this:

```json
{
		"activeTime": "2014-12-19T19:13:20Z",
		"callbackUrl": "https://example.com",
		"chargeableDuration": 60,
		"direction": "out",
		"endTime": "2014-12-19T19:13:22Z",
		"events": "https://.../calls/{callId}/events",
		"fallbackUrl": "https://example-fallback.com",
		"from": "{fromNumber}",
		"id": "{callId}",
		"recordingEnabled": false,
		"recordings": "https://.../calls/{callId}/recordings",
		"startTime": "2014-12-19T19:13:09Z",
		"state": "completed",
		"to": "{toNumber}",
		"transcriptionEnabled": true,
		"transcriptions": "https://.../calls/{callId}/transcriptions",
		"sipHeaders" : {
				"X-header" : "value"
		}
}
```
{% endmethod %}
