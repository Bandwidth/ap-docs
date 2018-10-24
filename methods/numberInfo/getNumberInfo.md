{% method %}

## Fetch CNAM Number Information
This resource provides a CNAM number info. CNAM is an acronym which stands for Caller ID Name. CNAM can be used to display the calling party's name alongside the phone number, to help users easily identify a caller. CNAM API allows the user to get the CNAM information of a particular number.

### Request URL

<code class="get">GET</code>`https://api.catapult.inetwork.com/v1/phoneNumbers/numberInfo/{number}`

---

### Properties
| Property | Description                                                  |
|:---------|:-------------------------------------------------------------|
| name     | The Caller ID name information.                              |
| number   | The full phone number, specified in E.164 format.            |
| created  | The time this Caller ID information was first queried (UTC). |
| updated  | The time this Caller ID information was last updated (UTC).  |

{% common %}

### Example 1 of 1: Get Number Info

{% sample lang="bash" %}

```bash
curl -v -X GET https://api.catapult.inetwork.com/v1/phoneNumbers/numberInfo/{number} -u {token}:{secret} -H "Content-type: application/json"
```

{% sample lang="js" %}

```js
// Promise
client.NumberInfo.get("+1234567890").then(function(info){});

// Callback
client.NumberInfo.get("+1234567890", function(err, info){});
```

{% sample lang="csharp" %}

```csharp
var info = await client.NumberInfo.GetAsync("+1234567890");
Console.WriteLine(info.Name);
// Name
```

{% sample lang="ruby" %}

```ruby
info = NumberInfo.get(client, "+1234567890")
name = info[:name]
```

{% common %}

> The above command returns JSON structured like this:

```
{
  "created": "2013-09-23T16:31:15Z",
  "name": "Name",
  "number": "{number}",
  "updated": "2013-09-23T16:42:18Z"
}
```
{% endmethod %}
