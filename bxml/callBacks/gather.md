{% method %}
##  Gather event – <Gather> verb

### Properties
| Property         | Description                                                                                                                                                                                                                                                                                                                                                                           |
|:-----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| eventType        | The event type, value is gather.                                                                                                                                                                                                                                                                                                                                                      |
| state            | The state of the gather. Value is completed.                                                                                                                                                                                                                                                                                                                                          |
| digits           | The digits collected from user.                                                                                                                                                                                                                                                                                                                                                       |
| reason           | - `max-digits` - The maximum number of digits specified for the gather command.<br>- `terminating-digit` - The digit specified in the gather command was entered.<br> `inter-digit-timeout` - A timeout occurred indicating the maximum amount of time to wait between digits, or before the first digit was pressed. <br>- `hung-up` - Call was hung up thus terminating the gather. |
| callId           | The call id associated with the event.                                                                                                                                                                                                                                                                                                                                                |
| callUri          | The complete URL of the call resource for this event.                                                                                                                                                                                                                                                                                                                                 |
| gatherId         | The gather event unique id.                                                                                                                                                                                                                                                                                                                                                           |
| time             | Date/time of event. Timestamp follows the ISO8601 format (UTC).                                                                                                                                                                                                                                                                                                                       |
| terminatingDigit | Specified digit to terminate the gather.                                                                                                                                                                                                                                                                                                                                              |

{% common %}
#### HTTP request sent to the requestUrl from the [`<Gather>`](../verbs/gather.md) verb:

```html
/{requestUrl}?
    terminatingDigit=%23&
    time=2016-02-20T13%3A04%3A37Z&
    reason=terminating-digit&
    state=completed&
    eventType=gather&
    digits={digits}&
    callId={call-id}&
    callUri=https%3A%2F%2Fapi.catapult.inetwork.com%2Fv1%2Fusers%2F{user-id}%2Fcalls%2F{call-id}&
    gatherId={gather-id}
```
{% endmethod %}
