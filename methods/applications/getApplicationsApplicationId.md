{% method %}

## Fetch Application Information
Gets information about one of your applications. No query parameters are supported.

### Request URL

<code class="get">GET</code>`https://api.catapult.inetwork.com/v1/users/{userId}/applications/{applicationId}`

---

### Properties
| Property                          | Description                                                                                                                                                                                                 |
|:----------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| id                                | The unique identifier for the application.                                                                                                                                                                  |
| name                              | A name you choose for this application.                                                                                                                                                                     |
| incomingCallUrl                   | A URL where call events will be sent for an inbound call. This is the endpoint where the Application Platform will send all call events. Either incomingCallUrl or incomingMessageUrl is required.          |
| incomingCallUrlCallbackTimeout    | Determine how long should the platform wait for incomingCallUrl's response before timing out in milliseconds.                                                                                               |
| incomingCallFallbackUrl           | The URL used to send the callback event if the request to incomingCallUrl fails.                                                                                                                            |
| callbackHttpMethod                | Determine if the HTTP callback event should be sent via GET or POST. Default is POST.                                                                                      |
| autoAnswer                        | Determines whether or not an incoming call should be automatically answered. Default value is 'true'.                                                                                                       |
| incomingMessageUrl                | A URL where message events will be sent for an inbound message. This is the endpoint where the Application Platform will send all message events. Either incomingMessageUrl or incomingCallUrl is required. |
| incomingMessageUrlCallbackTimeout | Determine how long should the platform wait for incomingMessageUrl's response before timing out in milliseconds.                                                                                            |
| incomingMessageFallbackUrl        | The URL used to send the callback event if the request to incomingMessageUrl fails.                                                                                                                         |


{% common %}

### Example 1 of 1: Get an application's information

{% sample lang="bash" %}

```bash
curl -v -X GET  https://api.catapult.inetwork.com/v1/users/{user-id}/applications/{applicationId} -u {token}:{secret}   -H "Content-type: application/json"
```

{% sample lang="js" %}

```js
// Promise
client.Application.get('a-j4f2jz53mq')
.then(function (response) {
	console.log(response);
});

// Callback
client.Application.get('a-zuwwfzzrbea',
	function (err, response) {
		if (err) {
			console.log(err);
		}
		else {
			console.log(response);
		}
});
```

{% sample lang="csharp" %}

```csharp
var application = await client.Application.GetAsync("a-zuwwfzzrbea");
Console.WriteLine(application.Name);
// MyFirstApp
```

{% sample lang="ruby" %}

```ruby
application = Application.get(client, "a-zuwwfzzrbea")
application_name = application[:name]
```
{% common %}

> The above command returns JSON structured like this:

```json
{
  "id": "{applicationId}",
  "name": "MyFirstApp",
  "incomingCallUrl": "http://example.com/calls.php",
  "incomingMessageUrl": "http://example.com/messages.php",
  "autoAnswer": true
}
```
{% endmethod %}
