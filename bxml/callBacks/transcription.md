{% method %}
##  Transcription event – <Record> verb

### Properties
| Property         | Description                                                                      |
|:-----------------|:---------------------------------------------------------------------------------|
| eventType        | The event type, value is `transcription`.                                        |
| transcriptionId  | The unique id of the transcription resource.                                     |
| status           | The state of the transcription, callback event values are `complete` or `error`. |
| textSize         | Total character count of text.                                                   |
| text             | The first 1026 characters of the text of the completed transcription.            |
| textUrl          | The full URL of the entire text content of the transcription.                    |
| transcriptionUri | The full URL of the transcription resource.                                      |

{% common %}

#### HTTP request sent to the transcriptionUrl from the [`<Record>`](../verbs/record.md) verb:

```html
POST http://[External server URL]
{
    "eventType"       :"transcription",
    "transcriptionUri":"https://api.catapult.inetwork.com/v1/users/{userId}/recordings/{recordingId}/transcriptions/{transcriptionId}",
    "textSize"        :3627,
    "text"            :"Hello From Bandwidth",
    "status"          :"completed",
    "textUrl"         :"https://api.catapult.inetwork.com/v1/users/{userId}/media/{transcriptionId}",
    "transcriptionId" :"{transcriptionId}"
}

```

{% endmethod %}