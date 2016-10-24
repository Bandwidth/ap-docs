{% method %}
##  SMS event – <SendMessage> verb

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

{% common %}
#### HTTP request sent to the statusCallbackUrl from the [`<SendMessage>`](../verbs/sendMessage.md) verb:

`POST http://[statusCallbackUrl]`

```json
{
    "to":"{to-number}",
    "time":"2016-02-20T12:40:17Z",
    "text":"This is a test message.",
    "direction":"out",
    "state":"sent",
    "from":"{from-number}",
    "eventType":"sms",
    "messageId":"{message-id}",
    "messageUri":"https://api.catapult.inetwork.com/v1/users/{user-id}/messages/{message-id}"
}
```

{% endmethod %}
