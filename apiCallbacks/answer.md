{% method %}
## Answer Event
Bandwidth API sends this message to the application when the call is answered.

### Properties
| Property  | Description                                                                                                                                                  |
|:----------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| eventType | The event type, value is `answer`.                                                                                                                           |
| to        | The phone number or SIP address that received the call. Phone numbers are in E.164 format (e.g. +15555555555) -or- SIP addresses (e.g. identify@domain.com). |
| from      | The phone number or SIP address that made the call. Phone numbers are in E.164 format (e.g. +15555555555) -or- SIP addresses (e.g. identify@domain.com).     |
| callState | The call state. Value will be `active`.                                                                                                                      |
| callId    | The call id associated with the event.                                                                                                                       |
| callUri   | The full URL of the call resource for this event.                                                                                                            |
| tag       | String provided when call created.                                                                                                                           |
| time      | Date when the event occurred. Timestamp follows the ISO8601 format (UTC).                                                                                    |
| diversion | Diversion information if present |
| diversion.origTo | The parameter value as received in the header |
| diversion.reason | Reason for the diversion. Must be one of the following:<br><ul><li>unknown</li><li>user-busy</li><li>no-answer</li><li>unavailable</li><li>unconditional</li><li>time-of-day</li><li>do-not-disturb</li><li>deflection</li><li>follow-me</li><li>out-of-service</li><li>away</li></ul>|
| diversion.screen | The parameter value as received in the header |
| diversion.privacy | The parameter value as received in the header |
| diversion.counter| The parameter value as received in the header |
| diversion.Limit | The parameter value as received in the header |
| diversion.name| The parameter value as received in the header |

{% common %}

#### Example JSON

```json
{
	"eventType" : "string",
	"from"      : "string",
	"to"        : "string",
	"callId"    : "string",
	"callUri"   : "string",
	"callState" : "string",
	"time"      : "date",
    "diversion": {
        "origTo" : "string",
        "reason" : "string",
        "screen" : "string",
        "privacy": "string",
        "counter": "integer",
        "Limit"  : "integer",
        "name"   : "string"
    }
}
```

#### Example: Basic answer event

```http
POST /your_url HTTP/1.1
Content-Type: application/json; charset=utf-8
User-Agent: BandwidthAPI/v1

{
	"eventType" : "answer",
	"from"      : "+15753222083",
	"to"        : "+13865245000",
	"callId"    : "{call-id}",
	"callUri"   : "https://api.catapult.inetwork.com/v1/users/{user-id}/calls/{call-id}",
	"callState" : "active",
	"time"      : "2012-11-14T16:28:31.536Z"
}
```

#### Example: Answer event with tag property

```http
POST /your_url HTTP/1.1
Content-Type: application/json; charset=utf-8
User-Agent: BandwidthAPI/v1

{
	"eventType" : "answer",
	"from"      : "+15753222083",
	"to"        : "+13865245000",
	"callId"    : "{call-id}",
	"callUri"   : "https://api.catapult.inetwork.com/v1/users/{user-id}/calls/{call-id}",
	"callState" : "active",
	"time"      : "2012-11-14T16:29:35.427Z",
	"tag"       : "example-tag"
}
```
{% endmethod %}
