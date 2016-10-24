{% method %}
##  Recording event – <Record> verb

### Properties
| Property     | Description                                                                    |
|:-------------|:-------------------------------------------------------------------------------|
| eventType    | The event type, value is `recording`.                                          |
| state        | The state of the recording, callback event values are `complete` or `error`.   |
| status       | The state of the recording, callback event values are `complete` or `error`.   |
| callId       | The call id associated with the event.                                         |
| recordingId  | The unique id of the recording resource.                                       |
| recordingUri | The full URL of the recording resource.                                        |
| startTime    | Date/time the recording started. Timestamp follows the ISO8601 format (UTC).   |
| endTime      | Date/time the recording completed. Timestamp follows the ISO8601 format (UTC). |

{% common %}
#### HTTP request sent to the requestUrl from the [`<Record>`](../verbs/record.md) verb:

```html
/{requestUrl}?
	startTime=2016-02-20T14%3A28%3A57Z&
	recordingUri=https%3A%2F%2Fapi.catapult.inetwork.com%2Fv1%2Fusers%2F{user-id}%2Frecordings%2F{recording-id}&
	status=complete&
	recordingId={recording-id}&
	state=complete&
	eventType=recording&
	endTime=2016-02-20T14%3A29%3A06Z&
	callId={call-id}
```
{% endmethod %}
