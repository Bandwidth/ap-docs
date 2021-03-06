{% method %}
## Incoming MMS event

### Properties
| Property   | Description                                                                                                                                                                                                                                   |
|:-----------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| eventType  | The event type, value is `mms`.                                                                                                                                                                                                               |
| direction  | Direction of message: <br> `in` - a message that came from the telephone network to one of your numbers (an “inbound” message) |
| from       | The message sender’s telephone number (or short code).                                                                                                                                                                                        |
| to         | Message recipient telephone number (or short code).                                                                                                                                                                                           |
| messageId  | The unique id of the message resource for this event.                                                                                                                                                                                         |
| messageUri | The full URL of the message resource.                                                                                                                                                                                                         |
| media | The full URLs of any media attached the the message
| text       | The message contents.                                                                                                                                                                                                                         |
| time       | The time the message resource was created (UTC, follows the ISO 8601 format).                                                                                                                                                                 |
| state      | Message state, values are `received` `queued` `sending` `sent` `error`                                                                                                                                                                        |
| segmentCount | The number of segments the message was sent as.

{% common %}
#### HTTP request sent to the <code class="get">incomingMessageUrl</code>  configured in the [application](../methods/applications/applications.md):

```html
/{callbackUrl}?
	messageId=m-asdf&
	from=%2B19191231111&
	eventType=mms&
	text=test&
	time=2016-12-01T16:04:49Z&
	to=%2B13204601164&
	state=received&
	applicationId=a-yr3jpxasdfh5xh5e35saoi&
	direction=in&
    segmentCount=1&
	media=[{full-url}/giphy-m-asdf.gif, {full-url}/123_1-m-asdf.smil]&
	messageUri=https%3A%2F%2Fapi.catapult.inetwork.com%2Fv1%2Fusers%2Fu-123%2Fmessages%2Fm-asdf
```

{% endmethod %}
