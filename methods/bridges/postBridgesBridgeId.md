{% method %}
## Update Bridge
Change calls in a bridge and bridge/unbridge the audio.

### Request URL
<code class="post">POST</code>`https://api.catapult.inetwork.com/v1/users/{userId}/bridges/{bridgeId}`

---

### Supported Parameters

| Parameter   | Description                                                                                                                                          | Mandatory |
|:------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| bridgeAudio | Enable/Disable two way audio path (default = true).                                                                                                  | No        |
| callIds     | The list of call ids in the bridge. If the list of call ids is not provided the bridge is logically created and it can be used to place calls later. | No        |


{% common %}
### Example 1 of 5: Add call {callId1} and call {callId2} in a bridge {bridgeId} with two way voice path


{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/bridges/{bridgeId} -u {token}:{secret} -H "Content-type: application/json" -d
    '
    {
        "bridgeAudio": "true",
        "callIds": ["{callId1}","{callId2}"]
    }
    '
```

{% sample lang="js" %}

```js
var bridgeOptions = {
	bridgeAudio : true,
	callIds: ["callId1","callId2"]
};
client.Bridge.update("{bridgeId}", bridgeOptions)
.then(function () {
	// continue
});
```

{% sample lang="csharp" %}

```csharp
await client.Bridge.UpdateAsync("{bridgeId}", new UpdateBridgeData{
	BridgeAudio = true,
	CallIds = new[]{"callId1", "callId2"}
});
```


{% sample lang="ruby" %}

```ruby
bridge.update({
	:bridge_audio => true,
	:call_ids => ["callId1", "callId2"]
})
```


{% common %}
### Example 2 of 5: Removing call {callId2} from the bridge created in the example above
{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/bridges/{bridgeId}	-u {token}:{secret} 	-H "Content-type: application/json" 	-d '{"bridgeAudio": "true", "callIds": ["{callId1}"] }'
```

{% sample lang="js" %}

```js
var bridgeOptions = {
	callIds: ["{callId1"]
};

client.Bridge.update("{bridgeId}", bridgeOptions)
.then(function () {
	// continue
});
```
{% sample lang="csharp" %}

```csharp
await client.Bridge.UpdateAsync("{bridgeId}", new UpdateBridgeData{
	CallIds = new[]{"callId1"}
});
```


{% sample lang="ruby" %}

```ruby
bridge.update({
	:call_ids => ["callId1"]
})
```


{% common %}
### Example 3 of 5: Adding two different calls {callId3} and {callId4} in the bridge above and put them on hold
{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/bridges/{bridgeId}	-u {token}:{secret} 	-H "Content-type: application/json" 	-d '{"bridgeAudio": "false", "callIds": ["{callId3}, {callId3}"] }'
```

{% sample lang="js" %}

```js
var bridgeOptions = {
	bridgeAudio : false,
	callIds: ["{callId3","callId4"]
};

client.Bridge.update("{bridgeId}", bridgeOptions)
.then(function () {
	// continue
});
```

{% sample lang="csharp" %}
```csharp
await client.Bridge.UpdateAsync("{bridgeId}", new UpdateBridgeData{
	BridgeAudio = false,
	CallIds = new[]{"callId3", "callId4"}
});
```


{% sample lang="ruby" %}

```ruby
bridge.update({
	:bridge_audio => false
	:call_ids => ["callId3", "callId4"]
})
```


{% common %}
### Example 4 of 5: Bridging the audio again
{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/bridges/{bridgeId}	-u {token}:{secret} 	-H "Content-type: application/json" 	-d '{"bridgeAudio": "true"}'
```

{% sample lang="js" %}

```js
var bridgeOptions = {
	bridgeAudio : true
};

client.Bridge.update("{bridgeId}", bridgeOptions)
.then(function () {
	// continue
});
```

{% sample lang="csharp" %}
```csharp
await client.Bridge.UpdateAsync("{bridgeId}", new UpdateBridgeData{
	BridgeAudio = true
});
```


{% sample lang="ruby" %}

```ruby
bridge.update({
	:bridge_audio => true
})
```


{% common %}
### Example 5 of 5: Removing all calls from bridge.
{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/bridges/{bridgeId} -u {token}:{secret} -H "Content-type: application/json" -d
    '
        {callIds": []}
    '
```

{% sample lang="js" %}

```js
var bridgeOptions = {
	callIds: []
};

client.Bridge.update("{bridgeId}", bridgeOptions)
.then(function () {
	// continue
});
```

{% sample lang="csharp" %}
```csharp
await client.Bridge.UpdateAsync("{bridgeId}", new UpdateBridgeData{
	CallIds = new string[0]
});
```


{% sample lang="ruby" %}

```ruby
bridge.update({
	:call_ids => []
})
```

{% endmethod %}
