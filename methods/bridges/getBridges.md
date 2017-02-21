{% method %}

## List Bridges

Get list of bridges for a given user.

### Request URL

<code class="get">GET</code>`https://api.catapult.inetwork.com/v1/users/{userId}/bridges?<queryParams>`

---

### Supported Parameters

| Parameter | Description                                                                                                                                                            | Mandatory |
|:----------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| page      | Used for pagination to indicate the page requested for querying a list of bridges. If no value is specified the default is 0.                                          | No        |
| size      | Used for pagination to indicate the size of each page requested for querying a list of bridges. If no value is specified the default value is 25 (maximum value 1000). | No        |

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

### Example: List of a user's bridges

{% sample lang="bash" %}

```bash
curl -v -X GET  https://api.catapult.inetwork.com/v1/users/{user-id}/bridges/transations \
  -u {token}:{secret} \
  -H "Content-type: application/json" \
```

{% sample lang="js" %}

```js
client.Bridge.list()
.then(function (response) {
	console.log(response.bridges);
	if(response.hasNextPage) {
		return response.getNextPage();
	}
	else {
		return {bridges: []};
	}
})
.then(function(response) {
	console.log(response.bridges);
});
```

{% sample lang="csharp" %}

```csharp
var bridges = client.Bridge.List();
var firstBridge = bridges.First();
Console.WriteLine($"{firstBridge.Id} - {firstBridge.State}");
// brg-123 - Completed
```

{% sample lang="ruby" %}

```ruby
bridges = Bridge.list(client)
first_bridge = bridges.next
first_bridge_state = first_bridge[:state]
```
{% common %}


> The above command returns JSON structured like this:

```json
[
  {
    "id": "{bridgeId}",
    "state": "completed",
    "bridgeAudio": "true",
    "calls":"https://.../v1/users/{userId}/bridges/{bridgeId}/calls",
    "createdTime": "2013-04-22T13:55:30.279Z",
    "activatedTime": "2013-04-22T13:55:30.280Z",
    "completedTime": "2013-04-22T13:56:30.122Z"
  },
  {
    "id": "{bridgeId}",
    "state": "completed",
    "bridgeAudio": "true",
    "calls":"https://.../v1/users/{userId}/bridges/{bridgeId}/calls",
    "createdTime": "2013-04-22T13:58:30.121Z",
    "activatedTime": "2013-04-22T13:58:30.122Z",
    "completedTime": "2013-04-22T13:59:30.122Z"
  }
]
```
{% endmethod %}
