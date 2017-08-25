{% method %}

## Fetch Gather Information
Get the gather DTMF parameters and results.

### Request URL

<code class="get">GET</code>`https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}/gather/{gatherId}`

### Properties
| Property      | Description                                                                                                                                                                                                                                                                                                                                                              |
|:--------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| state         | The state of the gather. Value is completed.                                                                                                                                                                                                                                                                                                                             |
| digits        | The digits collected from user.                                                                                                                                                                                                                                                                                                                                          |
| reason        | `max-digits` - The maximum number of digits specified for the gather com.<br> `terminating-digit` - The digit specified in the gather com was entered.<br> `inter-digit-timeout` - A timeout occurred indicating the maximum amount of time to wait between digits, or before the first digit was pressed.<br> `hung-up` - Call was hung up thus terminating the gather. |
| call          | The call id associated with the event.                                                                                                                                                                                                                                                                                                                                   |
| gatherId      | The gather event unique id.                                                                                                                                                                                                                                                                                                                                              |
| createdTime   | Date/time of event. Timestamp follows the ISO8601 format (UTC).                                                                                                                                                                                                                                                                                                          |
| completedTime | Date/time of event. Timestamp follows the ISO8601 format (UTC).                                                                                                                                                                                                                                                                                                          |

{% common %}

### Example 1 of 1: Fetch information for a single gather

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
Console.WriteLine(gather.Digits);
// 123
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
