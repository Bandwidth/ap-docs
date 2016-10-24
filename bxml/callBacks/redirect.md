{% method %}
##  Redirect event – <Redirect> verb

### Properties
| Property  | Description                                                                                                                                                  |
|:----------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| eventType | The event type, value is `redirect`.                                                                                                                         |
| callId    | The call id associated with the event.                                                                                                                       |
| callState | The call state. Value will be `active`.                                                                                                                      |
| from      | The phone number or SIP address that made the call. Phone numbers are in E.164 format (e.g. +15555555555) -or- SIP addresses (e.g. identify@domain.com).     |
| to        | The phone number or SIP address that received the call. Phone numbers are in E.164 format (e.g. +15555555555) -or- SIP addresses (e.g. identify@domain.com). |

{% common %}
#### HTTP request sent to the requestUrl from the [`<Redirect>`](../verbs/redirect.md) verb:

```html
/{requestUrl}?
	to={to-number}&
	callState=active&
	from={from-number}&
	eventType=redirect&
	callId={call-id}
```
{% endmethod %}
