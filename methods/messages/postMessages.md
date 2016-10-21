{% method %}
## POST messages
Sends one or more messages.

Sending a single message: To send a single text message, submit a single message representation as your request body. The response indicates the created message's URL in the Location header if it was created successfully. If there was an error with the message, the response body contains error information.

Sending multiple messages: To send multiple messages in a single request, submit an array of message representations as your request body. The response entity will contain an array of response objects, with the same length and order as the submitted message list, so you can iterate in the results to check for errors. Each result contains the URL of the of the message if it was created successfully or error information.

Important Note on Multiple Messages: There is a maximum limit of 50 messages sent per multiple messages request.

Important Note on Rate Limits: You can send 1 message per second per Bandwidth phone number.

International characters: Currently we support only the GSM 7 bit character set (GSM 03.38) .

<aside class="alert warning small">
When sending MMS, the size of all medias for specific message summed up should not exceed 1.5 MB
</aside>

### Supported Parameters
| Parameter          | Description                                                                                                                                                                            | Mandatory |
|:-------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| from               | One of your telephone numbers the message should come from (must be in E.164 format, like +19195551212).                                                                               | Yes       |
| to                 | The phone number the message should be sent to (must be in E.164 format, like +19195551212).                                                                                           | Yes       |
| text               | The contents of the text message (must be 2048 characters or less).                                                                                                                    | Yes       |
| media              | For MMS messages, a media url to the location of the media or list of medias to be sent send with the message. For media details please check table Properties in the top of the page. | No        |
| receiptRequested   | Requested receipt option for outbound messages: `none` `all` `error` Default is `none`.                                                                                                | No        |
| callbackUrl        | The server URL where the events related to the outgoing message will be sent to.                                                                                                       | No        |
| callbackHttpMethod | Determine if the callback event should be sent via `HTTP GET` or `HTTP POST`. Values are get or post Default is <code class="post">POST</code>                                         | No        |
| callbackTimeout    | Determine how long should the platform wait for callbackUrl’s response before timing out (milliseconds).                                                                               | No        |
| fallbackUrl        | The server URL used to send the message events if the request to callbackUrl fails.                                                                                                    | No        |
| tag                | Any string, it will be included in the callback events of the message.                                                                                                                 | No        |

## Message Request Receipt
| Receipt | Description                                                     |
|:--------|:----------------------------------------------------------------|
| none    | Delivery receipt will not be sent as callback event.            |
| error   | Only error delivery receipt event maybe sent as callback event. |
| all     | Success or error delivery receipt maybe sent as callback event. |

## Multiple Message Result Types
| Type     | Description                                                                                                                                                                                    |
|:---------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| result   | Values are<br>`accepted` - the message was accepted and the location points to the message resource <br> `error` - the message was not accepted and the “error” property contains information. |
| location | When the result is `accepted`, contains the URL of the message location.                                                                                                                       |

{% common %}
### Example: Send a single text message

{% sample lang="bash" %}
```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/ \
	-u {token}:{secret} \
	-H "Content-type: application/json" \
		-d \
	'
	{
		"from": "{fromNumber}",
		"to": "{toNumber}",
		"text": "Good morning, this is a test message",
		"callbackUrl": "http://my.callback.url"
	}'
```

{% sample lang="js" %}
```js
client.Message.send({
	from : "+19195551212",
	to   : "+19195551213",
	text : "Thank you for susbcribing to Unicorn Enterprises!"
})
.then(function(message){
	console.log(message);
});
//{
//  from : "+19195551212",
//  to   : "+19195551213",
//  text : "Thank you for susbcribing to Unicorn Enterprises!",
//  id   : "..."
//}
```

{% sample lang="csharp" %}
```csharp
var message = await client.Message.SendAsync(new MessageData {
	From = "+19195551212",
	To = "+19195551213",
	Text = "Thank you for susbcribing to Unicorn Enterprises!"
});
```

{% sample lang="ruby" %}
```ruby
message = Message.create(client, {
	:from => "+19195551212",
	:to => "+19195551213",
	:text => "Thank you for susbcribing to Unicorn Enterprises!"
})
```

{% common %}
> The above command returns HTTP Header structured like this:

```
HTTP/1.1 201 Created
Location: /v1/users/{userId}/messages/{messageId}
```

### Example: Send a single mms with Bandwidth Media

{% sample lang="bash" %}
```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/ \
	-u {token}:{secret} \
	-H "Content-type: application/json" \
		-d \
	'
	{
		"from": "{fromNumber}",
		"to": "{toNumber}",
		"text": "Good morning, this is a test message",
		"callbackUrl": "http://my.callback.url",
		"media": ["https://api.catapult.inetwork.com/v1/users/<user-id>/media/image-1.jpg"]
	}'
```

{% sample lang="js" %}
```js
client.Message.send({
	from : "+19195551212",
	to   : "+19195551213",
	text : "Thank you for susbcribing to Unicorn Enterprises!",
	media: ["https://api.catapult.inetwork.com/v1/users/<user-id>/media/image-1.jpg"],
	callbackUrl: "http://my.callback.url"
})
.then(function(message){
	console.log(message);
});
```

{% sample lang="csharp" %}
```csharp
var message = await client.Message.SendAsync(new MessageData {
	From = "+19195551212",
	To = "+19195551213",
	Text = "Thank you for susbcribing to Unicorn Enterprises!",
	Media = new[] {"https://api.catapult.inetwork.com/v1/users/<user-id>/media/image-1.jpg"},
	CallbackUrl = "http://my.callback.url"
});
```

{% sample lang="ruby" %}
```ruby
message = Message.create(client, {
	:from => "+19195551212",
	:to => "+19195551213",
	:text => "Thank you for susbcribing to Unicorn Enterprises!",
	:media => ["https://api.catapult.inetwork.com/v1/users/<user-id>/media/image-1.jpg"],
	:callback_url => "http://my.callback.url"
})
```

{% common %}
> The above command returns HTTP Header structured like this:

```
HTTP/1.1 201 Created
Location: /v1/users/{userId}/messages/{messageId}
```


### Example: Send a single mms with external media

{% sample lang="bash" %}
```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/ \
	-u {token}:{secret} \
	-H "Content-type: application/json" \
		-d \
	'
	{
		"from": "{fromNumber}",
		"to": "{toNumber}",
		"text": "Good morning, this is a test message",
		"callbackUrl": "http://my.callback.url",
		"media": ["http://your-site.com/image-1.jpg"]
	}'
```

{% sample lang="js" %}
```js
client.Message.send({
	from : "+19195551212",
	to   : "+19195551213",
	text : "Thank you for susbcribing to Unicorn Enterprises!",
	media: ["http://your-site.com/image-1.jpg"],
	callbackUrl: "http://my.callback.url"
})
.then(function(message){
	console.log(message);
});
```

{% sample lang="csharp" %}
```csharp
var message = await client.Message.SendAsync(new MessageData {
	From = "+19195551212",
	To = "+19195551213",
	Text = "Thank you for susbcribing to Unicorn Enterprises!",
	Media = new[] {"http://your-site.com/image-1.jpg"},
	CallbackUrl = "http://my.callback.url"
});
```

{% sample lang="ruby" %}
```ruby
message = Message.create(client, {
	:from => "+19195551212",
	:to => "+19195551213",
	:text => "Thank you for susbcribing to Unicorn Enterprises!",
	:media => ["http://your-site.com/image-1.jpg"],
	:callback_url => "http://my.callback.url"
})
```

{% common %}

> The above command returns HTTP Header structured like this:

```
HTTP/1.1 201 Created
Location: /v1/users/{userId}/messages/{messageId}
```

### Example: Send three messages in a single request

{% sample lang="bash" %}
```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/ \
	-u {token}:{secret} \
	-H "Content-type: application/json" \
		-d \
	'
	[
		{
			"from": "{fromNumber1}",
			"to": "{toNumber1}",
			"text": "This is the test message one",
			"callbackUrl": "http://my.callback.url"
		},
		{
			"from": "{fromNumber2}",
			"to": "{toNumber2}",
			"text": "This is the test message two",
			"callbackUrl": "http://my.callback.url"
		},
		{
			"from": "{fromNumber1}",
			"to": "",
			"callbackUrl": "",
			"text": "This is the test message three",
			"callbackUrl": "http://my.callback.url"
		}
	]'
```

{% sample lang="bash" %}
```bash
HTTP/1.1 202 ACCEPTED
[
	{
		"result": "accepted",
		"location": "https://.../v1/users/.../messages/{messageI1}"
	},
	{
		"result": "accepted",
		"location": "https://.../v1/users/.../messages/{messageId2}"
	},
	{
		"result": "error",
		"error": {
			"category": "bad-request",
			"code": "blank-property",
			"message": "The 'message' resource property 'to' must contain at least one non-whitespace character",
			"details": []
		 }
	}
]
```

{% sample lang="js" %}
```js
client.Message.sendMultiple({
	from : "+19195551211",
	to   : "+19195551213",
	text : "Thank you for susbcribing to Unicorn Enterprises!"
}, {
	from : "+19195151212",
	to   : "+19195551214",
	text : "Thank you for susbcribing to Unicorn Enterprises!"
})
.then(function(messages){
	console.log(messages);
});
```

{% sample lang="csharp" %}
```csharp
var messages = await client.Message.SendAsync(new[] {
	new MessageData {
		From = "+19195551211",
		To = "+19195551213",
		Text = "Thank you for susbcribing to Unicorn Enterprises!"
	},
	new MessageData {
		From = "+19195551212",
		To = "+19195551214",
		Text = "Thank you for susbcribing to Unicorn Enterprises!"
	}
});
```

{% sample lang="ruby" %}
```ruby
messages = Message.create(client, [{
	:from => "+19195551211",
	:to => "+19195551213",
	:text => "Thank you for susbcribing to Unicorn Enterprises!"
}, {
	:from => "+19195551212",
	:to => "+19195551214",
	:text => "Thank you for susbcribing to Unicorn Enterprises!"
}])
```

{% sample lang="js" %}
> The Node Library returns an array of Objects like the following

```js
//returns
[{
	result : "failed",
	error: {
		category : "authorization",
		code     : "number-access-denied",
		message  : "User ... does not have permission to use number +19195551211",
		details  : [
			{
				name  : "userId",
				value : "..."
			},
			{
				name  : "number",
				value : "+19195551211"
			}
		],
	},
	message : {
		from : "+19195551211",
		to   : "+19195551213",
		text : "Thank you for subscribing to Unicorn Enterprises!"
	}
},{
	result  : "accepted",
	message : {
		from : "+19195551212",
		to   : "+19195551214",
		text : "Thank you for subscribing to Unicorn Enterprises!",
		id   : "..."
	}
}]
```

{% common %}
### Example: Request receipt for single text message
To send a text message with request receipt from {fromNumber} to {toNumber}, send the following request:

{% sample lang="bash" %}
```bash
#coming soon
```

{% sample lang="js" %}
```js
//coming soon
```

{% sample lang="csharp" %}
```csharp
var message = await client.Message.SendAsync(new MessageData {
	From = "+19195551212",
	To = "+19195551213",
	Text = "Thank you for susbcribing to Unicorn Enterprises!",
	ReceiptRequested = MessageReceiptRequested.All
});
```

{% sample lang="ruby" %}
```ruby
message = Message.create(client, {
	:from => "+19195551212",
	:to => "+19195551213",
	:text => "Thank you for susbcribing to Unicorn Enterprises!",
	:receipt_requested => "all"
})
```

{% common %}
### Example: Send a single text message with custom callback timeout of 2 seconds

{% sample lang="bash" %}
```bash
#coming soon
```

{% sample lang="js" %}
```js
//coming soon
```

{% sample lang="csharp" %}
```csharp
var message = await client.Message.SendAsync(new MessageData {
	From = "+19195551212",
	To = "+19195551213",
	Text = "Thank you for susbcribing to Unicorn Enterprises!",
	CallbackUrl = "http://my.callback.url",
	CallbackTimeout = 2000
});
```

{% sample lang="ruby" %}
```ruby
message = Message.create(client, {
	:from => "+19195551212",
	:to => "+19195551213",
	:text => "Thank you for susbcribing to Unicorn Enterprises!",
	:callback_url => "http://my.callback.url",
	:callback_timeout => 2000
})
```

{% common %}

### Example: Send a single text message with custom callback timeout of 2 seconds and a fallback URL

{% sample lang="bash" %}
```bash
#coming soon
```

{% sample lang="js" %}
```js
//coming soon
```

{% sample lang="csharp" %}
```csharp
var message = await client.Message.SendAsync(new MessageData {
	From = "+19195551212",
	To = "+19195551213",
	Text = "Thank you for susbcribing to Unicorn Enterprises!",
	CallbackUrl = "http://my.callback.url",
	CallbackTimeout = 2000,
	FallbackUrl = "http://my.fallback.url"
});
```

{% sample lang="ruby" %}
```ruby
message = Message.create(client, {
	:from => "+19195551212",
	:to => "+19195551213",
	:text => "Thank you for susbcribing to Unicorn Enterprises!",
	:callback_url => "http://my.callback.url",
	:callback_timeout => 2000,
	:fallback_url => "http://my.fallback.url"
})
```
{% endmethod %}
