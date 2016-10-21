{% method %}
## GET phoneNumbers/{numberId}
Gets information about one of your numbers using the number's ID. No query parameters are supported.

or

Gets information about one of your numbers using the E.164 number string, like "+19195551212". Remember to URL encode the plus sign prefix. No query parameters are supported.

## Properties
| Property       | Description                                                                                      |
|:---------------|:-------------------------------------------------------------------------------------------------|
| id             | The unique id of the phone number.                                                               |
| name           | A name you choose for this number.                                                               |
| number         | The telephone number in E.164 format.                                                            |
| nationalNumber | The telephone number in a friendly national format, e.g. (555) 5555-5555                         |
| city           | The city of the phone number.                                                                    |
| state          | The state of the phone number.                                                                   |
| applicationId  | The unique id of an Application you want to associate with this number.                          |
| application    | The URI of the application associated with the number for inbound phone calls and text messages. |
| fallbackNumber | Number to transfer an incoming call when the callback/fallback events can’t be delivered.        |
| price          | The monthly price for this number.                                                               |
| createdTime    | Date when the number was created. Timestamp follows the ISO8601 format (UTC).                    |
| numberState    | The phone number state, values are `enabled` or `released`                                       |

{% common %}

### Example: Get number properties by E.164 or Id

{% sample lang="bash" %}
```bash
curl -v -X GET https://api.catapult.inetwork.com/v1/users/{userId}/phoneNumbers/%20{number} \
	-u {token}:{secret} \
	-H "Content-type: application/json"
```

{% sample lang="js" %}

```js
// Promise
client.PhoneNumber.get(numberId).then(function(number){});
// or
client.PhoneNumber.get("+1234567890").then(function(number){});

// Callback
client.PhoneNumber.get(numberId, function(err, number){});
// or
client.PhoneNumber.get("+1234567890", function(err, number){});
```

{% sample lang="csharp" %}
```csharp
var number = await client.PhoneNumber.GetAsync("+1234567890");
```

{% sample lang="ruby" %}
```ruby
number = PhoneNumber.get(client, "+1234567890")
```

{% common %}

> The above command returns JSON structured like this:

```
{
   "id": "{numberId}",
   "application": "https://catapult.inetwork.com/.../applications/{applicationId}",
   "number":"{number}",
   "nationalNumber":"{national_number}",
   "name": "home phone",
   "createdTime": "2013-02-13T17:46:08.374Z",
   "city": "Raleigh",
   "state": "NC",
   "price": "0.60",
   "numberState": "enabled"
}
```
{% endmethod %}
