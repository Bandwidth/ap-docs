{% method %}

## Update active Gather
Update the gather.

### Request URL

<code class="post">POST</code>`https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}/gather/{gatherId}`

<aside class="notice">
The only update allowed is state:completed to stop the gather.
</aside>

{% common %}

### Example: Stop the gather DTMF

{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}/gather/{gatherId} \
  -u {token}:{secret} \
	-H "Content-type: application/json" \
    -d \
	'
	{
		"state": "completed"
	}'
```

{% sample lang="js" %}

```js
client.Call.completeGather("{callId}", "{gatherId}")
.then(function () {});
```

{% sample lang="csharp" %}

```csharp
await client.Call.UpdateGatherAsync("{callId1}", "{gatherId1}", new UpdateGatherData {State = CallGatherState.Completed});
```

{% sample lang="ruby" %}

```ruby
call.update_gather("{gatherId1}", {:state => "completed"})
```
{% endmethod %}

