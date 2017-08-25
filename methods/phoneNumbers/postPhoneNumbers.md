{% method %}

## Order Phone Number
Allocates a number so you can use it to make and receive calls and send and receive messages.

### Request URL

<code class="post">POST</code>`https://api.catapult.inetwork.com/v1/users/{userId}/phoneNumbers`

---

### Supported Parameters
| Parameter      | Description                                                                                 | Mandatory |
|:---------------|:--------------------------------------------------------------------------------------------|:----------|
| number         | An available telephone number you want to use (must be in E.164 format, like +19195551212). | Yes       |
| name           | A name you choose for this number.                                                          | No        |
| applicationId  | The unique id of an Application you want to associate with this number.                     | No        |
| fallbackNumber | Number to transfer an incoming call when the callback/fallback events can’t be delivered.   | No        |

{% common %}

### Example 1 of 1: Allocate a phone number to your account
To allocate the phone number {number} with the name "home phone" and the fallbackNumber {fallback_number} you can make calls with it, send the following request:

{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/ \
	-u {token}:{secret} \
	-H "Content-type: application/json" \
		-d \
	'
	{
		"number": "+15555555555",
		"name": "home phone"
		"fallbackNumber": "{fallback_number}"
	}'
```

{% sample lang="js" %}


```js
//Allocate number +1234567980

// Promise
client.PhoneNumber.create({ number : "+1234567890" }).then(function(number){});

// Callback
client.PhoneNumber.create({ number : "+1234567890" }, function(err, number){});
```

{% sample lang="csharp" %}

```csharp
var number = await client.PhoneNumber.CreateAsync(new CreatePhoneNumberData {Number = "+1234567890"});
Console.WriteLine($"Created phone number with id {number.Id}");
// Created phone number with id n-1234
```

{% sample lang="ruby" %}

```ruby
number = PhoneNumber.create(client, {:number => "+1234567890"})
```
{% common %}


> The above command returns HTTP Header structured like this:

```
HTTP/1.1 201 Created
Location: /v1/users/{userId}/phoneNumbers/{numberId}
```
{% endmethod %}
