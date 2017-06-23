{% method %}

## Send DTMF in active Call
Send DTMF (phone keypad digit presses).

### Request URL

<code class="post">POST</code>`https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}/dtmf`

---

### Supported Parameters

| Parameter | Description                                                 | Mandatory |
|:----------|:------------------------------------------------------------|:----------|
| dtmfOut   | String containing the DTMF characters to be sent in a call. Allows a maximum of 92 characters.<br/>The digits will be sent one-by-one with a marginal delay. Valid characters are given by the regular expression `[A-D0-9#*,wW]+`.<br/>- The `,` and lowercase `w` characters introduce a half-second pause into the DTMF sequence.<br/>- The `W` character introduces a one-second pause.<br/>Example: The DTMF string `1WWW,59#` will send a `1`, wait 3.5 seconds, then send `59#` in quick succession. | No        |

{% common %}

### Example: Send the digits "9193334444"

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
call.send_dtmf("9193334444")
```
{% endmethod %}
