{% method %}
## XML: `<PlayAudio>`
The PlayAudio verb is used to play an audio file in the call.

Both `.wav` and `.mp3` files are supported.

Note: If `<PlayAudio>` is the last verb in the BXML, the call shall be disconnected after 30 seconds. Use [Redirect](redirect.md) verb to send the next BXML if the call needs to continue or [Hangup](hangup.md) to hangup the call immediately.



### Attributes
| ATTRIBUTE | Description |
|:----------|:------------|
| volume | (optional) Integer between -4 and 4 that specifies how loud the audio is. Default is 0. |
| repeatCount | (optional) Integer between 1 and 30 that specifies how many times to play the audio.  This parameter will be honored both inside and outside of a Gather verb.  Default is 1. |
| delayBeforeRepeat | (optional) This parameter only applies to a PlayAudio verb inside a Gather.  It specifies how long to wait (in seconds) for digits to be pressed after each iteration of the audio file (including the last one).  If repeatCount = 1, then this parameter is ignored.  If repeatCount > 1, then the default is 0.  Max is 60 seconds. |


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

<PlayAudio volume="4">https://audio.url/holdMusic.mp3</PlayAudio>
<PlayAudio volume="-4">https://audio.url/voicemailBeep.wav</PlayAudio>

</Response>
```

{% endmethod %}
