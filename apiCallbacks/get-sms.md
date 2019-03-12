{% method %}
## Incoming SMS event

### Properties
| Property   | Description                                                                                                                                                                                                                                   |
|:-----------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| eventType  | The event type, value is `sms`.                                                                                                                                                                                                               |
| direction  | Direction of message: <br> `in` - a message that came from the telephone network to one of your numbers (an “inbound” message) <br> `out` - a message that was sent from one of your numbers to the telephone network (an “outbound” message) |
| from       | The message sender’s telephone number (or short code).                                                                                                                                                                                        |
| to         | Message recipient telephone number (or short code).                                                                                                                                                                                           |
| messageId  | The unique id of the message resource for this event.                                                                                                                                                                                         |
| messageUri | The full URL of the message resource.                                                                                                                                                                                                         |
| text       | The message contents.                                                                                                                                                                                                                         |
| time       | The time the message resource was created (UTC, follows the ISO 8601 format).                                                                                                                                                                 |
| state      | Message state, values are `received` `queued` `sending` `sent` `error`                                                                                                                                                                        |
| segmentCount | The number of segments the message was sent as.

{% common %}
#### HTTP request sent to the <code class="get">incomingMessageUrl</code> configured in the [application](../methods/applications/applications.md):

```html
/{callbackUrl}?
	messageId=m-asdf&
	from=%2B19191231111&
	eventType=sms&
	text=test&
	time=2016-12-01T16:04:49Z&
	to=%2B13204601164&
	state=received&
	applicationId=a-yr3jpxasdfh5xh5e35saoi&
	direction=in&
	messageUri=https%3A%2F%2Fapi.catapult.inetwork.com%2Fv1%2Fusers%2Fu-123%2Fmessages%2Fm-asdf&
    segmentCount=1
```

{% endmethod %}
