{% method %}
## XML: `<PlayAudio>`
The PlayAudio verb is used to play an audio file in the call.


### Attributes
| ATTRIBUTE | Description                                                                                                     |
|:----------|:----------------------------------------------------------------------------------------------------------------|
| digits    | (optional) Allows you to play DTMF digits in the call (No default value). <br> **this feature is coming soon**. |

{% common %}
#### Example:  PlayAudio Verb
This shows how to use Bandwidth XML to play an audio clip into a phone call.



```XML
<?xml version="1.0" encoding="UTF-8"?>

<Response>

<PlayAudio>https://audio.url/audio.mp3</PlayAudio>

</Response>
```

{% endmethod %}
