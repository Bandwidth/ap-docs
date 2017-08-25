{% method %}

## Send DTMF in active Call
Send DTMF (phone keypad digit presses).

### Request URL

<code class="post">POST</code>`https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}/dtmf`

---

### Supported Parameters

| Parameter | Description                                                 | Mandatory |
|:----------|:------------------------------------------------------------|:----------|
| dtmfOut   | String containing the DTMF characters to be sent in a call. | No        |

{% common %}

### Example 1 of 1: Send the digits "9193334444"

{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}/dtmf \
	-u {token}:{secret} \
	-H "Content-type: application/json" \
	-d '{"dtmfOut": "9193334444"}'
```

{% sample lang="js" %}

```js
// Promise
client.Call.sendDtmf(callId, "9193334444").then(function () {});
// Callback
client.Call.sendDtmf(callId, "9193334444", function (err) {});
```

{% sample lang="csharp" %}

```csharp
await client.Call.SendDtmfAsync("{callId1}", new SendDtmfData{DtmfOut = "9193334444"});
```

{% sample lang="ruby" %}

```ruby
call.set_dtmf("9193334444")
```
{% endmethod %}
