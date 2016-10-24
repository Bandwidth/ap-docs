{% method %}
## XML: `<Record>`
The Record verb allows call recording. At the end of the call, a call recording event containing the media with recorded audio URL is generated.


### Attributes
| ATTRIBUTE             | DESCRIPTION                                                                                                    |
|:----------------------|:---------------------------------------------------------------------------------------------------------------|
| requestUrl            | (optional) Relative or absolute URL to send event and request new BXML.                                        |
| requestUrlTimeout     | (optional) The time in milliseconds to wait for requestUrl response.                                           |
| fileFormat            | (optional) The format that the recording will be saved - mp3 or wav.                                           |
| terminatingDigits     | (optional) One or more digits that will finish the recording.                                                  |
| maxDuration           | (optional) The time in second for max recording duration. Default is 300 seconds, up to 3600 seconds (1 hour). |
| transcribe            | (optional) A boolean value to indicate that recording must be transcribed. Default is ‘false’.                 |
| transcribeCallbackUrl | Relative or absolute URL to send transcribed event.                                                            |

##### Tip:
Any verb after recording will not be executed because the `requestUrl` <code class="get">GET</code> is performed after recording completes. The new BXML is expected (Less sense for Bandwidth Application Platform).

<aside class="alert general small">
Transcription will not work with mp3 file format.
</aside>

{% common %}
#### Example: Recording Verb
This shows how to use Bandwidth XML record a phone call.

```XML
<?xml version="1.0" encoding="UTF-8"?>

<Response>

<SpeakSentence voice="paul" gender="male" locale="en_US">Recording your call, type 1 2 3 4 * to stop recording</SpeakSentence>

<PlayAudio>https://audio.url/audio.mp3</PlayAudio>

<Record requestUrl="/stepTransfer" terminatingDigits="1234*" maxDuration="60" transcribe="true" transcribeCallbackUrl="https://transcribe.url/result"/ >

</Response>
```

{% endmethod %}
