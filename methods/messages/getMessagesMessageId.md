{% method %}
## Fetch Message information
Gets information about a previously sent or received message. No query parameters are supported.

We only store the message contents for 3 days. Any messages older than 3 days will not contain text. For more information, see the <a href="https://dev.bandwidth.com/faq/#messaging">FAQ</a>

### Request URL

<code class="get">GET</code>`https://api.catapult.inetwork.com/v1/users/{userId}/messages/{messageId}`

---

### Properties
| Property            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|:--------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| id                  | The unique ID of the message.                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| from                | The message sender’s telephone number (or short code).                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| to                  | Message recipient telephone number (or short code).                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| direction           | Direction of message, in - a message that came from the telephone network to one of your numbers (an “inbound” message) or out - a message that was sent from one of your numbers to the telephone network (an “outbound” message)                                                                                                                                                                                                                                                                          |
| text                | The message contents.                                                                                                                                                                                                                                                                                                                                                                           |
| media               | Json array containing list of media urls to be sent as content for an mms. Valid URLs are: <br> https://api.catapult.inetwork.com/v1/users/&lt;user-id&gt;/media/<media-name></media-name> <br>We also support media URLs that are external to Bandwidth API, http:// or https:// format: <br> Example: http://customer-web-site.com/file.jpg <br> And coming soon, we are going to use file name from Content-Disposition header in case it’s passed by the media URLs that are external to Bandwidth API. |
| state               | Message state, values are:  <br> * `received`<br> * `queued`<br> * `sending`<br> * `sent` <br> * `error`                                                                                                                                                                                                                                                                                                                                                                                                    |
| time                | The time the message resource was created (UTC, follows the ISO 8601 format).                                                                                                                                                                                                                                                                                                                                                                                                                               |
| callbackUrl         | The complete URL where the events related to the outgoing message will be sent.                                                                                                                                                                                                                                                                                                                                                                                                                             |
| callbackTimeout     | Determine how long should the platform wait for callbackUrl’s response before timing out (milliseconds).                                                                                                                                                                                                                                                                                                                                                                                                    |
| fallbackUrl         | The server URL used to send message events if the request to callbackUrl fails.                                                                                                                                                                                                                                                                                                                                                                                                                             |
| page                | Used for pagination to indicate the page requested for querying a list of messages. If no value is specified the default is 0.                                                                                                                                                                                                                                                                                                                                                                              |
| size                | Used for pagination to indicate the size of each page requested for querying a list of messages. If no value is specified the default value is 25. (Maximum value 1000)                                                                                                                                                                                                                                                                                                                                     |
| tag                 | A string that will be included in the callback events of the message.                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| receiptRequested    | Requested receipt option for outbound messages: `none` `all` `error` Default is `none`.                                                                                                                                                                                                                                                                                                                                                                                                                     |
| deliveryState       | One of the message delivery states `waiting` `delivered` `not-delivered `                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| deliveryCode        | Numeric value of deliver code, see table for values.                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| deliveryDescription | Message delivery description for the respective delivery code                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| segmentCount | The number of segments the message was sent as. This value will always be `1` for MMS messages. Any messages that were created before this field was added will have a value of 0 in this field.

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
| Code | Description                            |
|:-----|:---------------------------------------|
| 0    | Message Delivered to Carrier           |
| 187  | Spam Detected – Statistical            |
| 188  | Spam Detected -Keyword                 |
| 189  | Spam Detected                          |
| 482  | Loop Detected                          |
| 600  | Destination Carrier Queue Full         |
| 610  | submit\_sm or submit\_multi failed     |
| 620  | Destination App Error                  |
| 630  | NACK                                   |
| 650  | Destination Failure                    |
| 700  | Invalid Service Type                   |
| 720  | Invalid Destination Address            |
| 740  | Invalid Source Address                 |
| 750  | Destination Rejected Message           |
| 751  | Destination Rejected Message too large |
| 770  | Destination Rejected due to spam       |
| 775  | Rejected due to user opt out           |
| 902  | Message Expired                        |
| 999  | Unknown Error                          |

{% common %}
### Example 1 of 1: Get a single message

{% sample lang="bash" %}

```bash
curl -v -X GET https://api.catapult.inetwork.com/v1/users/{userId}/messages/{messageId} -u {token}:{secret} -H "Content-type: application/json"
```

{% sample lang="js" %}

```js
//Promise
client.Message.get("{messageId}")
.then(function (message) {
  console.log(message);
});

//callback
client.Message.get("{messageId}", function (err, message) {
  if(err) {
    console.log(err);
  }
  else {
    console.log(message);
  }
});
```

{% sample lang="csharp" %}

```csharp
var message = await client.Message.GetAsync("{messageId}");
Console.WriteLine($"{message.From} -> {message.To}: {message.Text}");
// +1234567890 -> +1234567891: message text

```

{% sample lang="ruby" %}

```ruby
message = Message.get(client, "{messageId1}")
text = message[:text]
```

{% common %}
> The above command returns JSON structured like this:

```js
{
  "direction": "in",
  "from": "{fromPhoneNumber}",
  "id": "{messageId}",
  "state": "received",
  "text": "Hey Duke, see you this afternoon!.",
  "media": [],
  "time": "2014-06-09T19:29:09Z",
  "to": "{toPhoneNumber",
  "skipMMSCarrierValidation": false,
  "segmentCount": 1
}
```
{% endmethod %}
