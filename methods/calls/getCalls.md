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

## Properties
| Property             | Description                                                                                                                                                                                                                                                                                                                                                                                            |
|:---------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| id                   | The unique ID of the call.                                                                                                                                                                                                                                                                                                                                                                             |
| direction            | Call direction: values are `in` for an incoming call, `out` for an outgoing call                                                                                                                                                                                                                                                                                                                       |
| from                 | The phone number or SIP address that made the call. Phone numbers are in E.164 format (e.g. +15555555555) -or- SIP addresses (e.g. identify@domain.com).                                                                                                                                                                                                                                               |
| to                   | The phone number or SIP address that received the call. Phone numbers are in E.164 format (e.g. +15555555555) -or- SIP addresses (e.g. identify@domain.com).                                                                                                                                                                                                                                           |
| state                | The call state. Described below, values are started `rejected`, `active`, `completed`, `transferring`                                                                                                                                                                                                                                                                                                  |
| startTime            | Date when the call was created. Timestamp follows the ISO8601 format.                                                                                                                                                                                                                                                                                                                                  |
| activeTime           | Date when the call was answered. Timestamp follows the ISO8601 format.                                                                                                                                                                                                                                                                                                                                 |
| endTime              | Date when the call ended. Timestamp follows the ISO8601 format.                                                                                                                                                                                                                                                                                                                                        |
| callbackUrl          | The server URL where the call events related to the call will be sent.                                                                                                                                                                                                                                                                                                                                 |
| chargeableDuration   | The number of seconds the call will be billed for.                                                                                                                                                                                                                                                                                                                                                     |
| recordingEnabled     | Indicates if the call was recorded. <br> `true` if enabled. <br> `false` *(Default)* if disabled                                                                                                                                                                                                                                                                                              |
| recordingFileFormat  | The file format of the recorded call. Supported values are `wav` *(default)* and `mp3`.                                                                                                                                                                                                                                                                                                                  |
| transcriptionEnabled | Whether all the recordings for this call was automatically transcribed.                                                                                                                                                                                                                                                                                                                       |
| tag                  | Any string, it will be included in the callback events of the call.                                                                                                                                                                                                                                                                                                                                    |
| sipHeaders           | Map of Sip headers prefixed by "X-". Up to 5 headers can be sent per call. Max length for header and value is 256 characters. <br> *Only Returned if Exist*                                                                                                                                                                                                                                                                         |


{% common %}

### Example 1 of 2: List your calls

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
var firstCall = calls.First();
Console.WriteLine($"{firstCall.From} - {firstCall.To}");
// +1234567890 - +1234567891
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

### Example 2 of 2: List your calls by from number {fromNumber}

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
var firstCall = calls.First();
Console.WriteLine($"{firstCall.From} - {firstCall.To}");
// +19195551212 - +1234567891

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
