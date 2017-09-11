{% method %}

## List Messages
Gets a list messages you have sent or received. Since this operation uses HTTP GET, all the properties are specified as HTTP request parameters.

### Request URL

<code class="get">GET</code>`https://api.catapult.inetwork.com/v1/users/{userId}/messages`

---

Message results are paginated based on the `size` parameter. If the number of messages found by the specified query parameters exceeds one page, the `link` header on the HTTP response will contain the URL to request the next page of results. The `link` header will continue to be set for each request, as long as there is another page of messages available.

### Supported Parameters
| Parameter     | Description                                                                                                                                                                                                                                                                                                                                                                                                           | Mandatory |
|:--------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| from          | The phone number to filter the messages that came from (must be in E.164 format, like +19195551212).                                                                                                                                                                                                                                                                                                                  | No        |
| to            | The phone number to filter the messages that was sent to (must be in E.164 format, like +19195551212).                                                                                                                                                                                                                                                                                                                | No        |
| fromDateTime  | The starting date time to filter the messages (must be in yyyy-MM-dd hh:mm:ss format, like 2014-05-25 12:00:00. You can suppress parts of the date or time, like 2014-05-25, but the missing parameters will be filled with zeros).                                                                                                                                                                                   | No        |
| toDateTime    | The ending date time to filter the messages (must be in yyyy-MM-dd hh:mm:ss format, like 2014-05-25 12:00:00. You can suppress parts of the date or time, like 2014-05-25, but the missing parameters will be filled with zeros). Although it only supports seconds, we use milliseconds precision so if you want to include an event that happened on a given second you must set the next second on this parameter. | No        |
| size          | Used for pagination to indicate the size of each page requested for querying a list of messages. If no value is specified the default value is 25. (Maximum value 1000)                                                                                                                                                                                                                                               | No        |
| direction     | Filter by direction of message, in - a message that came from the telephone network to one of your numbers (an “inbound” message) or out - a message that was sent from one of your numbers to the telephone network (an “outbound” message)                                                                                                                                                                          | No        |
| state         | The message state to filter. values are:  <br> * `received`<br> * `queued`<br> * `sending`<br> * `sent` <br> * `error`                                                                                                                                                                                                                                                                                                | No        |
| deliveryState | The message delivery state to filter. Values are `waiting` `delivered` `not-delivered `                                                                                                                                                                                                                                                                                                                               | No        |
| sortOrder     | How to sort the messages. Values are `asc` or `desc` If no value is specified the default value is `asc`                                                                                                                                                                                                                                                                                                              | No        |

### Properties
| Property            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|:--------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| id                  | The unique ID of the message.                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| from                | The message sender’s telephone number (or short code).                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| to                  | Message recipient telephone number (or short code).                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| direction           | Direction of message, in - a message that came from the telephone network to one of your numbers (an “inbound” message) or out - a message that was sent from one of your numbers to the telephone network (an “outbound” message)                                                                                                                                                                                                                                                                          |
| text                | The message contents. NOTE: We only store the message contents for 30 days. Any messages older than 30 days will not contain text.                                                                                                                                                                                                                                                                                                                                                                          |
| media               | Json array containing list of media urls to be sent as content for an mms. Valid URLs are: <br> https://api.catapult.inetwork.com/v1/users/&lt;user-id&gt;/media/<media-name></media-name> <br>We also support media URLs that are external to Bandwidth API, http:// or https:// format: <br> Example: http://customer-web-site.com/file.jpg <br> And coming soon, we are going to use file name from Content-Disposition header in case it’s passed by the media URLs that are external to Bandwidth API. |
| state               | Message state, values are:  <br> * `received`<br> * `queued`<br> * `sending`<br> * `sent` <br> * `error`                                                                                                                                                                                                                                                                                                                                                                                                    |
| time                | The time the message resource was created (UTC, follows the ISO 8601 format).                                                                                                                                                                                                                                                                                                                                                                                                                               |
| callbackUrl         | The complete URL where the events related to the outgoing message will be sent.                                                                                                                                                                                                                                                                                                                                                                                                                             |
| callbackTimeout     | Determine how long should the platform wait for callbackUrl’s response before timing out (milliseconds).                                                                                                                                                                                                                                                                                                                                                                                                    |
| fallbackUrl         | The server URL used to send message events if the request to callbackUrl fails.                                                                                                                                                                                                                                                                                                                                                                                                                             |
| size                | Used for pagination to indicate the size of each page requested for querying a list of messages. If no value is specified the default value is 25. (Maximum value 1000)                                                                                                                                                                                                                                                                                                                                     |
| tag                 | A string that will be included in the callback events of the message.                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| receiptRequested    | Requested receipt option for outbound messages: `none` `all` `error` Default is `none`.                                                                                                                                                                                                                                                                                                                                                                                                                     |
| deliveryState       | One of the message delivery states `waiting` `delivered` `not-delivered `                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| deliveryCode        | Numeric value of deliver code, see table for values.                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| deliveryDescription | Message delivery description for the respective delivery code                                                                                                                                                                                                                                                                                                                                                                                                                                               |

### Message States
| State    | Description                                                                            |
|:---------|:---------------------------------------------------------------------------------------|
| received | The message was received.                                                              |
| queued   | The message is waiting in queue and will be sent soon.                                 |
| sending  | The message was removed from queue and is being sent.                                  |
| sent     | The message was sent successfully.                                                     |
| error    | There was an error sending or receiving a message (check errors resource for details). |

### Message Delivery State
| State         | Description                                        |
|:--------------|:---------------------------------------------------|
| waiting       | Waiting for receipt.                               |
| delivered     | Receipt indicating that message was delivered.     |
| not-delivered | Receipt indicating that message was not delivered. |

### Message Delivery Code
| Code | Description                                   |
|:-----|:----------------------------------------------|
| 0    | Message delivered to carrier                  |
| 100  | Message not delivered to carrier              |
| 187  | Statistical spam detected                     |
| 188  | Keyword spam detected                         |
| 189  | Spam detected                                 |
| 482  | Loop detected                                 |
| 600  | Destination carrier could not accept messages |
| 610  | Message submittion failed                     |
| 620  | Destination application error                 |
| 630  | Message not acknowledge                       |
| 720  | Invalid destination number                    |
| 740  | Invalid source number                         |
| 999  | Unknown error                                 |


{% common %}

### Example: List your messages

{% sample lang="bash" %}

```bash
curl -v -X GET https://api.catapult.inetwork.com/v1/users/{userId}/messages \
	-u {token}:{secret} \
	-H "Content-type: application/json"
```

{% sample lang="js" %}

```js
client.message.List().then(function(response){
	console.log(response);
});
```

{% sample lang="csharp" %}

```csharp
var messages = client.Message.List();
var firstMessage = messages.First();
Console.WriteLine($"{firstMessage.From} -> {firstMessage.To}: {firstMessage.Text}");
// +1234567890 -> +1234567891: message text
```

{% sample lang="ruby" %}

```ruby
messages = Message.list(client)
first_message = messages.next
first_message_text = first_message[:text]
```

{% common %}

> The above command returns JSON structured like this:

```
HEADER: <https://api.catapult.inetwork.com/v1/users/u-dkjf9094802375s/messages?sortKeyLT=1458576004287000989&size=1>; rel="next"
```

```json

[
	{
		"id": "{messageId1}",
		"messageId": "{messageId1}",
		"from": "{fromNumber}",
		"to": "{number}",
		"text": "Good morning, this is a test message",
		"time": "2012-10-05T20:37:38.048Z",
		"direction": "out",
		"state": "sent",
		"media": []
	},
	{
		"id": "{messageId2}",
		"messageId": "{messageId2}",
		"from": "{number}",
		"to": "{toNumber}",
		"text": "I received your test message",
		"time": "2012-10-05T20:38:11.023Z",
		"direction": "in",
		"state": "received",
		"media": []
	},
	{
		"id": "{messageId3}",
		"messageId": "{messageId3}",
		"from": "{number}",
		"to": "{toNumber}",
		"text": "I received your MMS message",
		"time": "2012-10-05T20:38:11.023Z",
		"direction": "out",
		"state": "sent",
		"media": ["https://api.catapult.inetwork.com/v1/users/<user-id>/media/image.jpg"]
	},
	{
		"id": "{messageId4}",
		"messageId": "{messageId4}",
		"from": "{number}",
		"to": "{toNumber}",
		"text": "I received your MMS message",
		"time": "2012-10-05T20:38:11.023Z",
		"direction": "out",
		"state": "sent",
		"media": ["https://api.catapult.inetwork.com/v1/users/<user-id>/media/image-1.jpg",
							"https://api.catapult.inetwork.com/v1/users/<user-id>/media/image-2.jpg",
							"http://customer-web-site.com/file.jpg"]
	}
]
```

### Example: List your messages by from number {fromNumber}

{% sample lang="bash" %}

```bash
curl -v -X GET https://api.catapult.inetwork.com/v1/users/{userId}/messages?from=%2b{fromNumber} \
	-u {token}:{secret} \
	-H "Content-type: application/json"
```

{% sample lang="js" %}

```js
client.message.List({from : "fromNumber"}).then(function(response){
	console.log(response);
});
```

{% sample lang="csharp" %}

```csharp
var messages = client.Message.List(new MessageQuery {From = "{fromNumber}"});
var firstMessage = messages.First();
Console.WriteLine($"{firstMessage.From} -> {firstMessage.To}: {firstMessage.Text}");
// +1234567890 -> +1234567891: message text
```

{% sample lang="ruby" %}

```ruby
messages = Message.list(client, {:from => "{fromNumber}"})
```

{% common %}

> The above command returns JSON structured like this:

```json
[
	{
		"id": "{messageId1}",
		"messageId": "{messageId1}",
		"from": "{fromNumber}",
		"to": "{toNumber1}",
		"text": "Good morning, this is a test message",
		"time": "2012-10-05T20:37:38.048Z",
		"direction": "out",
		"state": "sent",
		"media": []
	},
	{
		"id": "{messageId2}",
		"messageId": "{messageId2}",
		"from": "{fromNumber}",
		"to": "{toNumber2}",
		"text": "I received your test message",
		"time": "2012-10-05T20:38:11.023Z",
		"direction": "in",
		"state": "received",
		"media": []
	}
]
```

### Example: Gets a list messages filtering the direction and toDateTime

{% sample lang="bash" %}

```bash
curl -v -X GET https://api.catapult.inetwork.com/v1/users/{userId}/messages?from=%2b{fromNumber}&direction=out&toDateTime=2012-10-05%2020:37:39 \
	-u {token}:{secret} \
	-H "Content-type: application/json"
```

{% sample lang="js" %}

```js
client.message.List(
	direction : {"direction"},
	toDateTime: {"ToDateTime"})
.then(function(response){
	console.log(response);
});
```

{% sample lang="csharp" %}

```csharp
var messages = client.Message.List(new MessageQuery {
	From = "{fromNumber}",
	Direction = MessageDirection.Out,
	ToDateTime = new DateTime(2015, 10, 5, 20, 37, 39, 0, DateTimeKind.Utc)
});
var firstMessage = messages.First();
Console.WriteLine($"{firstMessage.From} -> {firstMessage.To}: {firstMessage.Text}");
// +1234567890 -> +1234567891: message text

```

{% sample lang="ruby" %}

```ruby
messages = Message.list(client, {
	:from => "{fromNumber}",
	:direction => "out",
	:to_date_time => "2012-10-05T20:38:11.023Z"
})
```

{% common %}

> The above command returns JSON structured like this:

```json
[
	{
		"id": "{messageId1}",
		"messageId": "{messageId1}",
		"from": "{fromNumber}",
		"to": "{toNumber1}",
		"text": "Good morning, this is a test message",
		"time": "2012-10-05T20:37:38.048Z",
		"direction": "out",
		"state": "sent",
		"media": []
	}
]
```
{% endmethod %}
