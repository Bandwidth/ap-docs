{% method %}
## Create Application
Creates an application that can handle calls and messages for one of your phone number. Many phone numbers can share an application.

### Request URL

<code class="post">POST</code>`https://api.catapult.inetwork.com/v1/users/{userId}/applications/`

---

### Supported Parameters
| Parameter                         | Description                                                                                                      | Mandatory |
|:----------------------------------|:-----------------------------------------------------------------------------------------------------------------|:----------|
| name                              | A name you choose for this application.                                                                          | Yes       |
| incomingCallUrl                   | A URL where call events will be sent for an inbound call.                                                        | No        |
| incomingCallUrlCallbackTimeout    | Determine how long should the platform wait for incomingCallUrl's response before timing out in milliseconds.    | No        |
| incomingCallFallbackUrl           | The URL used to send the callback event if the request to incomingCallUrl fails.                                 | No        |
| incomingMessageUrl                | A URL where message events will be sent for an inbound SMS message                                               | No        |
| incomingMessageUrlCallbackTimeout | Determine how long should the platform wait for incomingMessageUrl's response before timing out in milliseconds. | No        |
| incomingMessageFallbackUrl        | The URL used to send the callback event if the request to incomingMessageUrl fails.                              | No        |
| callbackHttpMethod                | Determine if the callback event should be sent via HTTP GET or HTTP POST. (If not set the default is HTTP POST)  | No        |
| autoAnswer                        | Determines whether or not an incoming call should be automatically answered. Default value is 'true'.            | No        |

{% common %}
### Example 1 of 1: Create an application named: 'MyFirstApp'


{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/applications \
	-u {token}:{secret} \
	-H "Content-type: application/json" \
	-d \
	'
	{
		"name": "MyFirstApp",
		"incomingCallUrl": "http://example.com/calls.php",
		"incomingMessageUrl": "http://example.com/messages.php",
		"callbackHttpMethod": "GET",
		"autoAnswer": true
	}'
```

{% sample lang="js" %}

```js
//Promise
client.Application.create({
	name: 'MyFirstApp',
	incomingCallUrl: 'http://your-server.com/CallCallback',
	incomingMessageUrl: 'http://your-server.com/MsgCallback'
})
.then(function (response) {
	console.log(response);
});

//Callback
client.Application.create({
	name: 'SampleApp2',
	incomingCallUrl: 'http://your-server.com/CallCallback',
	incomingMessageUrl: 'http://your-server.com/MsgCallback'
}, function (err, response) {
	if (err) {
		console.log(err);
	}
	else {
		console.log(response)
	}
});
```
{% sample lang="csharp" %}

```csharp
var application = await client.Application.CreateAsync(new CreateApplicationData{
	Name = "SampleApp2",
	IncomingCallUrl = "http://your-server.com/CallCallback",
	IncomingMessageUrl = "http://your-server.com/MsgCallback"
});

Console.WriteLine($"Created application with id {application.Id}");
// Created application with id a-12345

Console.WriteLine($"{application.Instance.Name} - {application.Instance.IncomingCallUrl}");
// SampleApp2 - http://your-server.com/CallCallback
```

{% sample lang="ruby" %}

```ruby
application = Application.create(client, {
	:name => "SampleApp2",
	:incoming_call_url => "http://your-server.com/CallCallback",
	:incoming_message_url => "http://your-server.com/MsgCallback"
})
```
{% endmethod %}
