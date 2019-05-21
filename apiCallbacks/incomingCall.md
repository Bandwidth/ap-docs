{% method %}
## Incoming Call Event
Bandwidth API sends this message to the application when an incoming call arrives. For incoming call the callback set is the one related to the Application associated with the called number.

NOTE: Bandwidth released Diversion Header support to a limited group of accounts on September 19th, 2018. The remainder of our customer-base will receive notice 30-days prior to General Availability (GA).

### Properties

| Property      | Description                                                                                                                                                  |
|:--------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| eventType     | The event type, value is `incomingcall`.                                                                                                                       |
| callId        | The call id associated with the event.                                                                                                                       |
| callUri       | The complete URL of the call resource for this event.                                                                                                        |
| from          | The phone number or SIP address that made the call. Phone numbers are in E.164 format (e.g. +15555555555) -or- SIP addresses (e.g. identify@domain.com).     |
| to            | The phone number or SIP address that received the call. Phone numbers are in E.164 format (e.g. +15555555555) -or- SIP addresses (e.g. identify@domain.com). |
| callState     | The state of the call, value is active.                                                                                                                      |
| applicationId | The id of the application associated with phone number for this this incoming call.                                                                          |
| time          | Date/time of event. Timestamp follows the ISO8601 format (UTC).                                                                                              |
| diversion | Diversion information if present |
| diversion.origTo | The last E.164 telephone number that the call was diverted from. |
| diversion.reason | Reason for the diversion. Must be one of the following:<br><ul><li>unknown</li><li>user-busy</li><li>no-answer</li><li>unavailable</li><li>unconditional</li><li>time-of-day</li><li>do-not-disturb</li><li>deflection</li><li>follow-me</li><li>out-of-service</li><li>away</li></ul>|
| diversion.screen | "no" if the number is user provided, "yes" if the number is network provided. |
| diversion.privacy | "off" or "full". If "full", origTo is set to "Anonymous". |
| diversion.counter| Number of diversions. |
| diversion.limit | Max number of diversions allowed. |
| diversion.{name}| Additional name-value pairs that are in the diversion header. |

{% common %}

#### Example JSON


```json
{
    "eventType"     : "string",
    "callId"        : "string",
    "callUri"       : "string",
    "from"          : "string",
    "to"            : "string",
    "callState"     : "string",
    "applicationId" : "string",
    "time"          : "date",
    "diversion": {
        "origTo"   : "string",
        "reason"   : "string",
        "screen"   : "string",
        "privacy"  : "string",
        "counter"  : "integer",
        "limit"    : "integer",
        "{name}"   : "{value}"
    }
}
```

#### Example: Incoming Call Event

```http
POST /your_url HTTP/1.1
Content-Type: application/json; charset=utf-8
User-Agent: BandwidthAPI/v1 ({CURRENT_BUILD_TIMESTAMP})

{
   "eventType"     : "incomingcall",
   "from"          : "+13233326955",
   "to"            : "+13865245000",
   "callId"        : "{callId}",
   "callUri"       : "https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}",
   "callState"     : "active",
   "applicationId" : "{appId}",
   "time"          : "2012-11-14T16:21:59.616Z"
}
```
{% endmethod %}
