{% method %}

## Create Bridge

Create a new bridge.

### Request URL

<code class="post">POST</code> `https://api.catapult.inetwork.com/v1/users/{userId}/bridges`

### Supported Parameters

| Parameter   | Description                                                                                                                                          | Mandatory |
|:------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| bridgeAudio | Enable/Disable two way audio path (default = true).                                                                                                  | No        |
| callIds     | The list of call ids in the bridge. If the list of call ids is not provided the bridge is logically created and it can be used to place calls later. | No        |

{% common %}

### Example: Create a bridge with two calls and two way voice path

{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/bridges/ \
	-u {token}:{secret} \
	-H "Content-type: application/json" \
	-d '{"bridgeAudio": "true", "callIds": ["{callId1}","{callId2}"] }'
```

{% sample lang="js" %}

```js
//Promise
client.Bridge.create({
	bridgeAudio: true,
	callIds: ['c-qbs5kwrsyx6wsdi', 'c-zan4g74pprsq']
})
.then(function (response) {
	console.log(response);
});

//Callback
client.Bridge.create({
	bridgeAudio: true,
	callIds: ['c-qbsx6wsdi', 'c-zan4g7prsq']
}, function (err, response) {
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
var bridge = await client.Bridge.CreateAsync(new CreateBridgeData{
	BridgeAudio = true,
	CallIds = new[]{"c-qbsx6wsdi", "c-zan4g7prsq"}
});
```

{% sample lang="ruby" %}

```ruby
bridge = Bridge.create(client, {
	:bridge_audio => true,
	:call_ids => ["c-qbsx6wsdi", "c-zan4g7prsq"]
})
```

{% common %}

> The above command returns HTTP Status structured like this:
```
HTTP/1.1 201 Created
Location: /v1/users/{userId}/calls/{bridgeId}
```

### Example: Create a bridge without calls

{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/bridges/ \
	-u {token}:{secret} \
	-H "Content-type: application/json" \
	-d '{"bridgeAudio": "true" }'
```
{% sample lang="js" %}

```js
//Promise
client.Bridge.create({
	bridgeAudio: true,
	callIds: ['c-qbs5kwrsyx6wsdi', 'c-zan4g74pprsq']
})
.then(function (response) {
	console.log(response);
});

//Callback
client.Bridge.create({
	bridgeAudio: true
}, function (err, response) {
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
var bridge = await client.Bridge.CreateAsync(new CreateBridgeData{
	BridgeAudio = true
});
```

{% sample lang="ruby" %}

```ruby
bridge = Bridge.create(client, {
	:bridge_audio => true
})
```

{% common %}

> The above command returns HTTP Status structured like this:
```
HTTP/1.1 201 Created
Location: /v1/users/{userId}/calls/{bridgeId}
```

{% endmethod %}

