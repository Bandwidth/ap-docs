{% method %}
## Incoming Call Event
Bandwidth API sends this message to the application when an incoming call arrives. For incoming call the callback set is the one related to the Application associated with the called number.

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
| diversion.origTo | The parameter value as received in the header |
| diversion.reason | Reason for the diversion. Must be one of the following:<br><ul><li>A</li><li>B</li></ul>|
| diversion.screen | The parameter value as received in the header |
| diversion.privacy | The parameter value as received in the header |
| diversion.counter| The parameter value as received in the header |
| diversion.Limit | The parameter value as received in the header |
| diversion.name| The parameter value as received in the header |

{% common %}

#### Example JSON


```json
{
  "eventType"     : "string",
  "from"          : "string",
  "to"            : "string",
  "callId"        : "string",
  "callUri"       : "string",
  "callState"     : "string",
  "applicationId" : "string",
  "time"          : "date",
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

#### Example: Incoming Call Event

```http
POST /your_url HTTP/1.1
Content-Type: application/json; charset=utf-8
User-Agent: BandwidthAPI/v1

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
