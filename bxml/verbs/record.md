{% method %}
## XML: `<Record>`
The Record verb allows call recording. At the end of the call, a call [recording](../callBacks/recording.md) event containing the media with recorded audio URL is generated.

### Attributes
| ATTRIBUTE             | DESCRIPTION                                                                                                                                                                                               |
|:----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| requestUrl            | (optional) Absolute URL to send event and request new BXML.                                                                                                                                               |
| requestUrlTimeout     | (optional) The time in milliseconds to wait for requestUrl response.                                                                                                                                      |
| fileFormat            | (optional) The format that the recording will be saved - mp3 or wav.                                                                                                                                      |
| transcribe            | (optional) A boolean value to indicate that recording must be transcribed.<br> Default is `false`.If transcription is requested, the only supported file format is wav. mp3 file format is not supported. |
| transcribeCallbackUrl | Absolute URL to send transcribed event. Required if the transcribe attribute is set to `true`.                                                                                                            |

##### Tip:

<aside class="alert general small">
<p>
Transcription will not work with mp3 file format.
</p>
</aside>

### Callbacks Recevied

| Callbacks                                      | Can reply with more BXML |
|:-----------------------------------------------|:-------------------------|
| [Recording](../callBacks/recording.md)         | No                       |
| [Transcription](../callBacks/transcription.md) | No                       |

{% common %}
#### Example: Recording Verb
This shows how to use Bandwidth XML record a phone call.

```XML
<?xml version="1.0" encoding="UTF-8"?>

<Response>

<SpeakSentence voice="paul" gender="male" locale="en_US">Recording your call after the beep</SpeakSentence>

<PlayAudio>https://audio.url/voicemailBeep.mp3</PlayAudio>

<Record requestUrl="https://record.url.server/recordVoicemail" transcribe="true" transcribeCallbackUrl="https://transcribe.url/result"/ >

</Response>
```

{% endmethod %}
