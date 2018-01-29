{% method %}
##  Hangup Event
This event shall be sent to the callbackUrl if set.


### Properties
| Property  | Description                                                                                                                                                  |
|:----------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| eventType | The event type, value is `hangup`.                                                                                                                           |
| callState | The state of the call, value is `completed`.                                                                                                                 |
| callId    | The call id associated with the event.                                                                                                                       |
| callUri   | The complete URL of the call resource for this event.                                                                                                        |
| from      | The phone number or SIP address that made the call. Phone numbers are in E.164 format (e.g. +15555555555) -or- SIP addresses (e.g. identify@domain.com).     |
| to        | The phone number or SIP address that received the call. Phone numbers are in E.164 format (e.g. +15555555555) -or- SIP addresses (e.g. identify@domain.com). |
| cause     | The cause of the hangup event, the values **are one of causes below**                                                                                        |
| time      | Date/time of event. Timestamp follows the ISO8601 format (UTC).                                                                                              |

### Hangup Causes

| Cause                | Description                                             |
|:---------------------|:--------------------------------------------------------|
| `ORIGINATOR_CANCEL`  | Calling party disconnected before the call was answered |
| `NORMAL_CLEARING`    | Normal hangup                                           |
| `USER_BUSY`          | Call could not be completed because user was busy       |
| `CALL_REJECTED`      | Call rejected                                           |
| `UNALLOCATED_NUMBER` | Number could not be reached because it was unallocated  |
| `NO_ANSWER`          | Call not answered                                       |
| `<OTHER>`            | Anything else indicates an internal error               |

{% common %}

#### HTTP request sent to the callback url

```html
/{callbackUrl}?
    callState = completed&
    to        = {to-number}&
    time      = 2016-02-17T16%3A54%3A10Z&
    cause     = NORMAL_CLEARING&
    from      = {from-number}&
    eventType = hangup&
    callId    = {call-id}&
    callUri   = https%3A%2F%2Fapi.catapult.inetwork.com%2Fv1%2Fusers%2F{user-id}%2Fcalls%2F{call-id}
```


{% endmethod %}
