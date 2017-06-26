{% method %}
##  Transfer Complete Event – <Transfer> verb
This event is sent to the callbackUrl of the Leg-A call when the tarnsferred call(B-leg) completes. 
In a simultaneous ringing scenario, only one call leg-B succeeds and this event corresponds to that successful leg. If none of the calls were answered, transferComplete is not sent. 

### Properties
| Property  | Description                                                                                                                                                                    |
|:----------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| eventType | The event type, value is `transferComplete`.                                                                                                                                   |
| from      | The phone number or SIP address used in the From field of the B-leg call. Phone numbers are in E.164 format (e.g. +15555555555) -or- SIP addresses (e.g. identify@domain.com). |
| to        | The phone number or SIP address used in the To field of the B-leg call.. Phone numbers are in E.164 format (e.g. +15555555555) -or- SIP addresses (e.g. identify@domain.com).  |
| callState | The call state. Value will be `active`.                                                                                                                                        |
| callId    | The call id associated with the event.                                                                                                                                         |
| callUri   | The full URL of the call resource for this event.                                                                                                                              |
| time      | Date when the event occurred. Timestamp follows the ISO8601 format (UTC).                                                                                                      |

{% common %}

#### HTTP request sent to the callback url specified in the [`/application`](http://dev.bandwidth.com/howto/incomingCallandMessaging.html)

```html
/{requestUrl}?
    to={to-number}&
    callState=active&
    time=2016-02-20T14%3A27%3A04Z&
    from={from-number}&
    eventType=transferComplete&
    callId={call-id}&
    callUri=https%3A%2F%2Fapi.catapult.inetwork.com%2Fv1%2Fusers%2F{user-id}%2Fcalls%2F{call-id}
```

{% endmethod %}
