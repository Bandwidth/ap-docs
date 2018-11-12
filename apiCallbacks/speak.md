{% method %}
## Speak Event

Bandwidth API sends this message to the application when text-to-speech starts or stops.

### Properties
| Property  | Description                                                               |
|:----------|:--------------------------------------------------------------------------|
| eventType | The event type, value is `speak`.                                         |
| status    | Values are `started` or `done`.                                           |
| state     | Values are `PLAYBACK_START` or `PLAYBACK_STOP`.                           |
| callId    | The call id associated with the event.                                    |
| callUri   | The full URL of the call resource for this event.                         |
| tag       | String provided when text-to-speech started.                              |
| time      | Date when the event occurred. Timestamp follows the ISO8601 format (UTC). |

{% common %}

#### Example JSON


```json
{
  "eventType" : "string",
  "status"    : "string",
  "state"    : "string",
  "callId"    : "string",
  "callUri"   : "string",
  "tag"       : "string",
  "time"      : "date"
}
```


#### Example: Text to Speech - Started Events

```http
POST /your_url HTTP/1.1
Content-Type: application/json; charset=utf-8
User-Agent: BandwidthAPI/v1

{
   "callId"    : "{callId}",
   "callUri"   : "https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}",
   "eventType" : "speak",
   "status"    : "started",
   "time"      : "2013-06-26T17:55:45.748Z"
}
```

#### Example: Text to Speech - Done Events

```http
POST /your_url HTTP/1.1
Content-Type: application/json; charset=utf-8
User-Agent: BandwidthAPI/v1

{
   "callId"    : "{callId}",
   "callUri"   : "https://api.catapult.inetwork.com/v1/users/{userId}/calls/{callId}",
   "eventType" : "speak",
   "status"    : "done",
   "time"      : "2013-06-26T17:55:46.768Z"
}
```

{% endmethod %}
