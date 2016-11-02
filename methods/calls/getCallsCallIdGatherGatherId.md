{% method %}

## Fetch Gather Information
Get the gather DTMF parameters and results.

### Request URL

<code class="get">GET</code>`https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}/gather/{gatherId}`

{% common %}

### Example: Fetch information for a single gather

{% sample lang="bash" %}

```bash
curl -v -X GET https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}/gather/{gatherId} \
	-u {token}:{secret} \
	-H "Content-type: application/json"
```

{% sample lang="js" %}

```js
client.Call.getGather("{callId}", "{gatherId}")
.then(function (res) {
  console.log(res);
});
```

{% sample lang="csharp" %}

```csharp
var gather = await client.Call.GetGatherAsync("{callId1}", "{gatherId1}");
var digits = gather.Digits;
```

{% sample lang="ruby" %}

```ruby
gather = call.get_gather("{gatherId1}")
digits = gather[:digits]
```

{% common %}

> The above command returns JSON structured like this:

```json
{
  "id": "{gatherId}",
  "state": "completed",
  "reason": "max-digits",
  "createdTime": "2014-02-12T19:33:56Z",
  "completedTime": "2014-02-12T19:33:59Z",
  "call": "https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}",
  "digits": "123"
}
```
{% endmethod %}

