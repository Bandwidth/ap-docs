{% method %}
## Answer Event

### Properties
| Property  | Description                                                                                                                                                                                                             |
|:----------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| eventType | The event type, value is `answer`                                                                                                                                                                                       |
| to        | The phone number or SIP address that received the call. Phone numbers are in E.164 format (e.g. +15555555555) -or- SIP addresses (e.g. identify@domain.com).                                                            |
| from      | The phone number or SIP address that made the call. Phone numbers are in E.164 format (e.g. +15555555555) -or- SIP addresses (e.g. identify@domain.com).                                                                |
| callState | The call state. Value will be `active`                                                                                                                                                                                  |
| callId    | The call id associated with the event.                                                                                                                                                                                  |
| callUri   | The full URL of the call resource for this event.                                                                                                                                                                       |
| time      | Date when the event occurred. Timestamp follows the ISO8601 format (UTC).                                                                                                                                               |
| tag       | String provided when call created. <br> <br> **Only sent as query parameter if the call was [created](../../methods/calls/postCalls.md) with a tag**.  <br>  An answer event on an incoming call, will never have a tag |


{% common %}
#### HTTP request sent to the callback url

```html
/{callbackUrl}?
	callState=active&
	to={to-number}&
	withholdCallerNumber=false&
	time=2016-02-20T16%3A22%3A30Z&
	from={from-number}&
	eventType=answer&
	withholdCallerName=false&
	displayName={number}&
	callId={call-id}&
	tag={tag}&
	callUri=https%3A%2F%2Fapi.catapult.inetwork.com%2Fv1%2Fusers%2F{user-id}%2Fcalls%2F{call-id}
```

{% endmethod %}
