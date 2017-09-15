{% method %}

## List calls in Bridge

Get the list of calls that are on the bridge.

### Request URL

<code class="get">GET</code>`https://api.catapult.inetwork.com/v1/users/{userId}/bridges/{bridgeId}/calls`

{% common %}

### Example 1 of 1: Fetch calls from Bridge
{% sample lang="bash" %}

```bash
curl -v -X GET https://api.catapult.inetwork.com/v1/users/{userId}/bridges/{bridgeId}/calls \
	-u {token}:{secret} \
	-H "Content-type: application/json" \
```

{% sample lang="js" %}

```js
//Promise
client.Bridge.getCalls('brg-65dhjbiei')
.then(function (response) {
	console.log(response);
});

//Callback
client.Bridge.getCalls('brg-65dhjrmbasiei',
	function (err, response) {
		if(err) {
			console.log(err);
		}
		else {
			console.log(response);
		}
	});
  ```

{% sample lang="csharp" %}

```csharp
var calls = client.Bridge.GetCalls("brg-65dhmbasiei");
var lastCall = calls.Last();
Console.WriteLine($"{lastCall.From} - {lastCall.To}")
// +1234567890 - +1234567891
```

{% sample lang="ruby" %}

```ruby
calls = bridge.get_calls()
first_call = calls.next
first_call_to = first_call[:to]
```


  > The above command returns JSON structured like this:

{% sample lang="js" %}

```json
[
    {
        "activeTime": "2013-05-22T19:49:39Z",
        "direction": "out",
        "from": "{fromNumber}",
        "id": "{callId1}",
        "bridgeId": "{bridgeId}",
        "startTime": "2013-05-22T19:49:35Z",
        "state": "active",
        "to": "{toNumber1}",
        "recordingEnabled": false,
        "events": "https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId1}/events",
        "bridge": "https://api.catapult.inetwork.com/v1/users/{userId}/bridges/{bridgeId}"
    },
    {
        "activeTime": "2013-05-22T19:50:16Z",
        "direction": "out",
        "from": "{fromNumber}",
        "id": "{callId2}",
        "bridgeId": "{bridgeId}",
        "startTime": "2013-05-22T19:50:16Z",
        "state": "active",
        "to": "{toNumber2}",
        "recordingEnabled": false,
        "events": "https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId2}/events",
        "bridge": "https://api.catapult.inetwork.com/v1/users/{userId}/bridges/{bridgeId}"
    }
]
```

{% endmethod %}
