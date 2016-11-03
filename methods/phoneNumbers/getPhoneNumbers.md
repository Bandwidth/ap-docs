{% method %}

## List Phone Numbers
Gets a list of your numbers. Since this operation uses HTTP GET, all the properties are specified as HTTP request parameters.

### Request URL

<code class="get">GET</code>`https://api.catapult.inetwork.com/v1/users/{userId}/phoneNumbers`

---

### Supported Parameters
| Parameter     | Description                                                                                                                                                                  | Mandatory |
|:--------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| page          | Used for pagination to indicate the page requested for querying a list of phone numbers. If no value is specified the default is 0.                                          | No        |
| size          | Used for pagination to indicate the size of each page requested for querying a list of phone numbers. If no value is specified the default value is 25. (Maximum value 1000) | No        |
| applicationId | Used to filter the retrieved list of numbers by an associated application ID.                                                                                                | No        |
| state         | Used to filter the retrieved list of numbers allocated for the authenticated user by a US state.                                                                             | No        |
| name          | Used to filter the retrieved list of numbers allocated for the authenticated user by it’s name.                                                                              | No        |
| city          | Used to filter the retrieved list of numbers allocated for the authenticated user by it’s city.                                                                              | No        |
| numberState   | Used to filter the retrieved list of numbers allocated for the authenticated user by the number state.                                                                       | No        |

### Properties
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


### Example: List phone numbers

{% sample lang="bash" %}

```bash
curl -v -X GET https://api.catapult.inetwork.com/v1/users/{userId}/phoneNumbers \
	-u {token}:{secret} \
	-H "Content-type: application/json"
```

{% sample lang="js" %}

```js
// Promise
client.PhoneNumber.list({size: 1000}).then(function(numbersResponse){});

// Callback
client.PhoneNumber.list({size: 1000}, function(err, numbersResponse){});
```

{% sample lang="csharp" %}

```csharp
var numbers = client.PhoneNumber.List(new PhoneNumberQuery {Size = 1000});
var firstNumberId = numbers.First().Id;
```

{% sample lang="ruby" %}

```ruby
numbers = PhoneNumber.list(client, {:size => 1000})
first_number = numbers.next
first_number_id = first_number[:id]
```

{% common %}


> The above command returns JSON structured like this:

```json
[
{
   "id": "{numberId1}",
   "application": "https://catapult.inetwork.com/v1/users/users/u-ly123/applications/a-j321",
   "number":"{number1}",
   "nationalNumber":"{national_number1}",
   "name": "home phone",
   "createdTime": "2013-02-13T17:46:08.374Z",
   "state": "NC",
   "price": "0.60",
   "numberState": "enabled"
},
{
   "id": "{numberId2}",
   "application": "https://catapult.inetwork.com/v1/users/users/u-ly123/applications/a-j123",
   "number":"{number2}",
   "nationalNumber":"{national_number2}",
   "name": "work phone",
   "createdTime": "2013-02-13T18:32:05.223Z",
   "state": "NC",
   "price": "0.60",
   "numberState": "enabled"
}
]
```
{% endmethod %}
