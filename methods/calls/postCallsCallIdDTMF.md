{% method %}

## Send DTMF in active Call
Send DTMF (phone keypad digit presses).

### Request URL

<code class="post">POST</code>`https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}/dtmf`

---

### Supported Parameters

| Parameter | Description                                                 | Mandatory |
|:----------|:------------------------------------------------------------|:----------|
| dtmfOut   | String containing the DTMF characters to be sent in a call. Allows a maximum of 92 characters.<br/>The digits will be sent one-by-one with a marginal delay. Valid characters are given by the regular expression `[A-D0-9#*,wW]+`.<br/>- The `,` and lowercase `w` characters introduce a half-second pause into the DTMF sequence.<br/>- The `W` character introduces a one-second pause.<br/>Example: The DTMF string `1WWW,59#` will send a `1`, wait 3.5 seconds, then send `59#` in quick succession.<br/>Example: The DTMF string '1Ww2Ww1Ww#' will send a '1', then '2', then '1', then '#' with a wait time of 1.5 seconds between each character sent. | No        |

{% common %}

### Example 1 of 3: Send the digits "9193334444" in immediate succession

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

{% common %}

### Example 2 of 3: Send the digit '1', wait 3.5 seconds, then send '59#'

{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}/dtmf \
	-u {token}:{secret} \
	-H "Content-type: application/json" \
	-d '{"dtmfOut": "1WWW,59#"}'
```

{% sample lang="js" %}

```js
// Promise
client.Call.sendDtmf(callId, "1WWW,59#").then(function () {});
// Callback
client.Call.sendDtmf(callId, "1WWW,59#", function (err) {});
```

{% sample lang="csharp" %}

```csharp
await client.Call.SendDtmfAsync("{callId1}", new SendDtmfData{DtmfOut = "1WWW,59#"});
```

{% sample lang="ruby" %}

```ruby
call.send_dtmf("1WWW,59#")
```

{% common %}

### Example 3 of 3: Send a '1', then '2', then '1', then '#' with a wait time of 1.5 seconds between each character

{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}/dtmf \
	-u {token}:{secret} \
	-H "Content-type: application/json" \
	-d '{"dtmfOut": "1Ww2Ww1Ww#"}'
```

{% sample lang="js" %}

```js
// Promise
client.Call.sendDtmf(callId, "1Ww2Ww1Ww#").then(function () {});
// Callback
client.Call.sendDtmf(callId, "1Ww2Ww1Ww#", function (err) {});
```

{% sample lang="csharp" %}

```csharp
await client.Call.SendDtmfAsync("{callId1}", new SendDtmfData{DtmfOut = "1Ww2Ww1Ww#"});
```

{% sample lang="ruby" %}

```ruby
call.send_dtmf("1Ww2Ww1Ww#")
```
{% endmethod %}
