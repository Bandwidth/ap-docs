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
| diversion | Diversion information if present |
| diversion.origTo | The last E.164 telephone number that the call was diverted from. |
| diversion.reason | Reason for the diversion. Must be one of the following:<br><ul><li>unknown</li><li>user-busy</li><li>no-answer</li><li>unavailable</li><li>unconditional</li><li>time-of-day</li><li>do-not-disturb</li><li>deflection</li><li>follow-me</li><li>out-of-service</li><li>away</li></ul>|
| diversion.screen | "no" if the number is user provided, "yes" if the number is network provided. |
| diversion.privacy | "off" or "full". If "full", origTo is set to "Anonymous". |
| diversion.counter| Number of diversions. |
| diversion.limit | Max number of diversions allowed. |
| diversion.{name}| Additional name-value pairs that are in the diversion header. |


{% common %}
#### HTTP request sent to the callback url

```http
/{callbackUrl}?
    callState=active&
    to={to-number}&
    withholdCallerNumber=false&
    time=2016-02-20T16%3A22%3A30Z&
    from={from-number}&
    eventType=answer&
    withholdCallerName=false&
    displayName={number}&
    diversion=%7B"privacy"%3A"off"%2C"screen"%3A"no"%2C"reason"%3A"unavailable"%2C"counter"%3A"1"%2C"origTo"%3A"{number}"&
    callId={call-id}&
    tag={tag}&
    callUri=https%3A%2F%2Fapi.catapult.inetwork.com%2Fv1%2Fusers%2F{user-id}%2Fcalls%2F{call-id}
```

{% endmethod %}
