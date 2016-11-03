{% method %}

## Fetch Bridge Information
Gets information about a specific bridge. No query parameters are supported.

### Request URL

<code class="get">GET</code> `https://api.catapult.inetwork.com/v1/users/{userId}/bridges/{bridgeId}`

---

## Properties

| Property      | Description                                              |
|:--------------|:---------------------------------------------------------|
| id            | The unique ID of the bridge.                             |
| state         | Bridge state. Possible state values are described here.  |
| callIds       | List of call Ids that will be in the bridge.             |
| calls         | The URL used to retrieve the calls in a specific bridge. |
| bridgeAudio   | Enable/Disable two way audio path.                       |
| completedTime | The time when the bridge was completed.                  |
| createdTime   | The time that bridge was created.                        |
| activatedTime | The time that the bridge got into active state.          |

## Bridge state

| State     | Description                                                                                                        |
|:----------|:-------------------------------------------------------------------------------------------------------------------|
| created   | The bridge was created but the audio was never bridged.                                                            |
| active    | The bridge has two active calls and the audio was already bridged before.                                          |
| hold      | The bridge calls are on hold (bridgeAudio was set to false).                                                       |
| completed | The bridge was completed. The bridge is completed when all calls hangup or when all calls are removed from bridge. |
| error     | Some error was detected in bridge.                                                                                 |

{% common %}

### Example: Get information about a bridge

{% sample lang="bash" %}

```bash
curl -v -X GET https://api.catapult.inetwork.com/v1/users/{userId}/bridges/{bridgeId} \
	-u {token}:{secret} \
	-H "Content-type: application/json"
```

{% sample lang="js" %}

```js
//Promise
client.Bridge.get('brg-65dhjwrmbasiei')
.then(function (response) {
	console.log(response);
});

//Callback
client.Bridge.get('brg-65dhmbasiei',
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
var bridge = await client.Bridge.GetAsync("brg-65dhmbasiei");
var state = bridge.State;
```

{% sample lang="ruby" %}

```ruby
bridge = Bridge.get(client, "brg-65dhmbasiei")
state = bridge[:state]
```

{% common %}

> The above command returns JSON structured like this:

```
{
  "id": "{bridgeId}",
  "state": "completed",
  "bridgeAudio": "true",
  "calls":"https://.../v1/users/{userId}/bridges/{bridgeId}/calls",
  "createdTime": "2013-04-22T13:55:30.279Z",
  "activatedTime": "2013-04-22T13:55:30.280Z",
  "completedTime": "2013-04-22T13:59:30.122Z"
}
```
{% endmethod %}
