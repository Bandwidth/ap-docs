{% method %}

## Update Application
Makes changes to an application. POST a new JSON representation with the property values you desire to the URL that you got back in the "Location" header when you first created it.

### Request URL

<code class="post">POST</code> `https://api.catapult.inetwork.com/v1/users/{userId}/applications/{applicationId}`


<aside class="alert general small">
NOTE: Properties you don't send will remain unchanged.
</aside>

### Supported Parameters

| Parameter                         | Description                                                                                                      | Mandatory |
|:----------------------------------|:-----------------------------------------------------------------------------------------------------------------|:----------|
| name                              | A name you choose for this application.                                                                          | Yes       |
| incomingCallUrl                   | A URL where call events will be sent for an inbound call.                                                        | No        |
| incomingCallUrlCallbackTimeout    | Determine how long should the platform wait for incomingCallUrl's response before timing out in milliseconds.    | No        |
| incomingCallFallbackUrl           | The URL used to send the callback event if the request to incomingCallUrl fails.                                 | No        |
| incomingMessageUrl                | A URL where message events will be sent for an inbound SMS message.                                              | No        |
| incomingMessageUrlCallbackTimeout | Determine how long should the platform wait for incomingMessageUrl's response before timing out in milliseconds. | No        |
| incomingMessageFallbackUrl        | The URL used to send the callback event if the request to incomingMessageUrl fails.                              | No        |
| callbackHttpMethod                | Determine if the callback event should be sent via HTTP GET or HTTP POST. (If not set the default is HTTP POST). | No        |
| autoAnswer                        | Determines whether or not an incoming call should be automatically answered. Default value is 'true'.            | No        |

{% common %}

### Example: Update Application

{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/applications/{applicationId} \
	-u {token}:{secret} \
	-H "Content-type: application/json" \
	-d '{"incomingCallUrl": "http://different.example.com/calls.php"}'
```

{% sample lang="js" %}

```js
// Promise
client.Application.update('a-j4f2j6vjmqz53mq', {
	name: 'Rename App1',
	autoAnswer: false
})
.then(function (response) {
	console.log(response);
});

// Callback
client.Application.update('a-zudcfzzrbea',
	{
		name: 'Rename App2',
		autoAnswer: false
	},
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
await client.Application.UpdateAsync("a-zuwwfzzrbea", new UpdateApplicationData{
	Name =  "Rename App2",
	AutoAnswer = false
});
```

{% sample lang="ruby" %}

```ruby
app.update({:name => "Rename App2", :auto_answer => false})
```
{% endmethod %}

