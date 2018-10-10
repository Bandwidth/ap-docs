{% method %}

## CallTimeout Event

Bandwidth API sends this message to the application when the call is not answered until the specified timeout.

### Properties
| Property  | Description                                                                                                                                                  |
|:----------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| eventType | The event type, value is `timeout`.                                                                                                                          |
| callId    | The call id associated with the event.                                                                                                                       |
| callUri   | The complete URL of the call resource for this event.                                                                                                        |
| from      | The phone number or SIP address that made the call. Phone numbers are in E.164 format (e.g. +15555555555) -or- SIP addresses (e.g. identify@domain.com).     |
| to        | The phone number or SIP address that received the call. Phone numbers are in E.164 format (e.g. +15555555555) -or- SIP addresses (e.g. identify@domain.com). |
| time      | Date/time of event. Timestamp follows the ISO8601 format (UTC).                                                                                              |

{% common %}
#### HTTP request sent to the callback url

```http
/{callbackUrl}?
eventType=timeout&
to=+19192223333&
from=+19105553333
time=2018-10-10T14:41:38Z&
callId={callId}&
callUri=https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}
```

{% endmethod %}
