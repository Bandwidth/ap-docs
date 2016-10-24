{% method %}
##  Incoming Call Event

### Properties
| Property      | Description                                                                                                                                                  |
|:--------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| eventType     | The event type, value is `incomingcall`.                                                                                                                     |
| callId        | The call id associated with the event.                                                                                                                       |
| callUri       | The complete URL of the call resource for this event.                                                                                                        |
| from          | The phone number or SIP address that made the call. Phone numbers are in E.164 format (e.g. +15555555555) -or- SIP addresses (e.g. identify@domain.com).     |
| to            | The phone number or SIP address that received the call. Phone numbers are in E.164 format (e.g. +15555555555) -or- SIP addresses (e.g. identify@domain.com). |
| callState     | The state of the call, value is `active`.                                                                                                                    |
| applicationId | The id of the application associated with phone number for this this incoming call.                                                                          |
| time          | Date/time of event. Timestamp follows the ISO8601 format (UTC).                                                                                              |

{% common %}
#### HTTP request sent to the callback url

```html
/{callbackUrl}?
	callState=active&
	to={to-number}&
	withholdCallerNumber=false&
	time=2016-02-20T16%3A22%3A29Z&
	applicationId={application-id}&
	from={from-number}&
	eventType=incomingcall&
	withholdCallerName=false&
	displayName={number}&
	callId={call-id}&
	callUri=https%3A%2F%2Fapi.catapult.inetwork.com%2Fv1%2Fusers%2F{user-id}%2Fcalls%2F{call-id}
```
{% endmethod %}
