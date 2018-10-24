{% method %}

## Send SMS Message(s)
Sends one or more messages.

<aside class="alert general small">
<p>
Read More about Messaging in the <a href="https://dev.bandwidth.com/faq/#messaging">FAQ</a>
</p>
</aside>

### Request URL

<code class="post">POST</code>`https://api.catapult.inetwork.com/v1/users/{userId}/messages`

---

### Supported Parameters
| Parameter          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Mandatory |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| from               | One of your telephone numbers the message should come from (must be in E.164 format, like +19195551212).                                                                                                                                                                                                                                                                                                                                                                                                     | Yes       |
| to                 | The phone number the message should be sent to (must be in E.164 format, like +19195551212).                                                                                                                                                                                                                                                                                                                                                                                                                 | Yes       |
| text               | The contents of the text message (must be 2048 characters or less). <br> Standard text messages are 160 characters. Messages larger than 160 characters are automatically fragmented and re-assembled to fit within the 160 character transport constraints.                                                                                                                                                                                                                                                 | Yes       |
| media              | For MMS messages, a media url to the location of the media or list of medias to be sent send with the message. <br> Check the [faq](https://dev.bandwidth.com/faq/messaging/mediaType.html) to see what media types are supported. Use [SMIL](https://en.wikipedia.org/wiki/Synchronized_Multimedia_Integration_Language)  as an xml media attachment to control message presentation.<br> <br> **Check the [faq](https://dev.bandwidth.com/faq/messaging/tollfreeMMS.html) to learn more about Toll-Free MMS**                                                                                                                                                    | No        |
| receiptRequested   | Requested receipt option for outbound messages: <br>`none`: *(DEFAULT)* Delivery receipt will not be sent as callback event. <br> `all`: You will get every delivery receipt for every state transition throughout the process.  Including error and success.<br>`error`: Only error delivery receipt event maybe sent as callback event. <br> The [callback](../../apiCallbacks/sms.md) will contain information about delivery  <br> **Can not send `media` _and_ `receiptRequested` in the same request** | No        |
| callbackUrl        | The server URL where the events related to the outgoing message will be sent to.                                                                                                                                                                                                                                                                                                                                                                                                                             | No        |
| callbackHttpMethod | Determine if the callback event should be sent via `HTTP GET` or `HTTP POST`. Values are GET or POST, default is `POST`                                                                                                                                                                                                                                                                                                                                                               | No        |
| callbackTimeout    | Determine how long should the platform wait for callbackUrl’s response before timing out (milliseconds). <br> **Default** Time: `10000` (10s) <br> **Maximum** Time: `10000` (10s)                                                                                                                                                                                                                                                                                                                           | No        |
| fallbackUrl        | The server URL used to send the message events if the request to callbackUrl fails.                                                                                                                                                                                                                                                                                                                                                                                                                          | No        |
| tag                | Any string defined by you. It will be included in the callback events related to the sent message. For messages, tags do not persist beyond the request that defined the tag.                                                                                                                                                                                                                                                                                                                                                                                                                                       | No        |

### Multiple Message Result Types

Important Note on Multiple Messages: There is a maximum limit of 50 messages sent per multiple messages request.

| Type     | Description                                                                                                                                                                                    |
|:---------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| result   | Values are<br>`accepted` - the message was accepted and the location points to the message resource <br> `error` - the message was not accepted and the “error” property contains information. |
| location | When the result is `accepted`, contains the URL of the message location.                                                                                                                       |

{% common %}

<aside class="alert general small">
<p>
Bandwidth returns `HTTP 201` Created with the URI of the message in the `Location` Header
</p>
</aside>

### Example 1 of 7: Send a single text message

{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/messages 	-u {token}:{secret} 	-H "Content-type: application/json" 		-d 	'
	{
		"from": "{fromNumber}",
		"to": "{toNumber}",
		"text": "Good morning, this is a test message",
		"callbackUrl": "http://my.callback.com"
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

Console.WriteLine($"Created message with id {message.Id}");
// Created message with id m-1234
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

### Example 2 of 7: Send a single mms with Bandwidth Media

{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/messages 	-u {token}:{secret} 	-H "Content-type: application/json" 		-d 	'
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
Console.WriteLine($"Created message with id {message.Id}");
// Created message with id m-1234
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


### Example 3 of 7: Send a single mms with external media

{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/messages 	-u {token}:{secret} 	-H "Content-type: application/json" 		-d 	'
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
Console.WriteLine($"Created message with id {message.Id}");
// Created message with id m-1234
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

### Example 4 of 7: Send three messages in a single request

{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/messages 	-u {token}:{secret} 	-H "Content-type: application/json" 		-d 	'
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
Console.WriteLine($"Created messages with ids {messages.Select(m => m.Id).Join(", ")}");
// Created messages with ids m-1234, m-2345
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

### Example 5 of 7: Request receipt for single text message
To send a text message with request receipt from {fromNumber} to {toNumber}, send the following request:

{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/messages 	-u {token}:{secret} 	-H "Content-type: application/json" 		-d 	'
	{
		"from": "+19195551212",
		"to": "+19195551213",
		"text": "Thank you for subscribing to Unicorn Enterprises!",
		"callbackUrl": "http://my.callback.url",
		"receiptRequested": "all"
	}'
```

{% sample lang="js" %}

```js
var message = {
    from: "+19195551212", // <-- This must be a Bandwidth number on your account
    to: "+19195551213",
    text: "Thank you for subscribing to Unicorn Enterprises!",
    callbackUrl: "http://my.callback.url",
    receiptRequested: "all"
};

client.Message.send(message)
.then(function(message) {
    console.log("Message sent with ID " + message.id);
})
.catch(function(err) {
    console.log(err.message);
});
```

{% sample lang="csharp" %}

```csharp
var message = await client.Message.SendAsync(new MessageData {
	From = "+19195551212",
	To = "+19195551213",
	Text = "Thank you for susbcribing to Unicorn Enterprises!",
	ReceiptRequested = MessageReceiptRequested.All
});
Console.WriteLine($"Created message with id {message.Id}");
// Created message with id m-1234
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

### Example 6 of 7: Send a single text message with custom callback timeout of 2 seconds

{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/messages 	-u {token}:{secret} 	-H "Content-type: application/json" 		-d 	'
	{
		"from": "+19195551212",
		"to": "+19195551213",
		"text": "Thank you for subscribing to Unicorn Enterprises!",
		"callbackUrl": "http://my.callback.url",
		"callbackTimeout" : "2000"
	}'
```

{% sample lang="js" %}

```js
var message = {
    from: "+19195551212", // <-- This must be a Bandwidth number on your account
    to: "+19195551213",
    text: "Thank you for subscribing to Unicorn Enterprises!",
    callbackUrl: "http://my.callback.url",
    callbackTimeout: "2000"
};

client.Message.send(message)
.then(function(message) {
    console.log("Message sent with ID " + message.id);
})
.catch(function(err) {
    console.log(err.message);
});
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
Console.WriteLine($"Created message with id {message.Id}");
// Created message with id m-1234
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


### Example 7 of 7: Send a single text message with custom callback timeout of 2 seconds and a fallback URL

{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/messages -u {token}:{secret} -H "Content-type: application/json" -d
    '
	{
		"from": "+19195551212",
		"to": "+19195551213",
		"text": "Thank you for subscribing to Unicorn Enterprises!",
		"callbackUrl": "http://my.callback.url",
		"callbackTimeout" : "2000",
		"fallbackUrl" : "http://my.fallback.url"
	}
    '
```

{% sample lang="js" %}

```js
var message = {
    from: "+19195551212", // <-- This must be a Bandwidth number on your account
    to: "+19195551213",
    text: "Thank you for subscribing to Unicorn Enterprises!",
    callbackUrl: "http://my.callback.url",
    callbackTimeout: "2000",
    fallbackUrl: "http://my.fallback.url"
};

client.Message.send(message)
.then(function(message) {
    console.log("Message sent with ID " + message.id);
})
.catch(function(err) {
    console.log(err.message);
});
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
Console.WriteLine($"Created message with id {message.Id}");
// Created message with id m-1234
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
