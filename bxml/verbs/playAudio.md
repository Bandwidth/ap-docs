{% method %}
## XML: `<PlayAudio>`
The PlayAudio verb is used to play an audio file in the call.

Both `.wav` and `.mp3` files are supported.

Note: If `<PlayAudio>` is the last verb in the BXML, the call shall be disconnected after 30 seconds. Use [Redirect](redirect.md) verb to send the next BXML if the call needs to continue or [Hangup](hangup.md) to hangup the call immediately. 



### Attributes
| ATTRIBUTE | Description |
|:----------|:------------|
| None      | None        |


### Callbacks Recevied

| Callback | Can reply with more BXML |
|:---------|:-------------------------|
| None     | No                       |

{% common %}
#### Example:  PlayAudio Verb
This shows how to use Bandwidth XML to play an audio clip into a phone call.

```XML
<?xml version="1.0" encoding="UTF-8"?>

<Response>

<PlayAudio>https://audio.url/audio.mp3</PlayAudio>
<PlayAudio>https://audio.url/audio.wav</PlayAudio>

</Response>
```

{% endmethod %}
