{% method %}
## XML: `<Record>`

The Record verb allows call recording. A call [recording](../callBacks/recording.md) event containing the recording URL is generated after the recording is stopped.

* If the `<Record>` verb is within a [`<Transfer>`](./transfer.md) verb, it is used to record both the caller and called party audio. The recording will stop only when one of the party disconnects.
* If the `<Record> `verb is outside a <Transfer> verb, only the called party audio is recorded. This is similar to situations where voicemail is recorded. `maxDuration` can be specified to stop recording after a specified period. Additionally, the caller can press a `terminatingDigit` to stop the recording. The recording will be in a single channel per file (mono recording).

### Attributes
| ATTRIBUTE               | DESCRIPTION                                                                                                                                                                                                                                                                                                                                                                                             |
|:------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `requestUrl`            | (optional) Absolute URL to send event                                                                                                                                                                                                                                                                                                                                                                   |
| `requestUrlTimeout`     | (optional) The time in milliseconds to wait for requestUrl response.                                                                                                                                                                                                                                                                                                                                    |
| `fileFormat`            | (optional) The format that the recording will be saved - `mp3` or `wav`. <br> <br> 👉 Default is `wav` 👈                                                                                                                                                                                                                                                                                                 |
| `transcribe`            | (optional) A boolean value to indicate that recording must be transcribed. <br> <br> ⚠️If transcription is requested, the only supported file format is `wav`. `mp3` file format is not supported. ⚠️ <br><br> 👉 Default is `false` 👈                                                                                                                                                                   |
| `transcribeCallbackUrl` | Absolute URL to send transcribed event.<br> ⚠️  Required if the transcribe attribute is set to `true`. ⚠️                                                                                                                                                                                                                                                                                               |
| `multiChannel`          | (optional) Record the caller and called party voices on 2 separate channels in the same file. <br> Values could be `true` or `false`. When `false`, both voices are recorded on the same channel. This is ignored if the `<Record>` verb is outside a `<Transfer>` verb. <br><br> I.e. If recording voicemail, it is recorded in the only channel in the file. <br><br> 👉 Default is `false` 👈          |
| `maxDuration`           | (optional) Number of seconds to record the caller’s voice. Default 60. <br> This is ignored if the `<Record>` verb is inside a `<Transfer>` verb. <br> <br> 👉 Max= 3600 seconds 👈                                                                                                                                                                                                                       |
| `silenceTimeout`        | (optional) Number of seconds of silence detected before ending the recording. Default is 3 seconds. <br> <br> 👉Max is 60 seconds. 👈                                                                                                                                                                                                                                                                     |
| `silenceThreshold`      | (optional) This setting controls when the silence timeout is effective. Set this number higher in noisy environments to detect voice and “silence”. <br> If this is set too low, the ambient noise will be considered as activity and not considered silence. <br><br> 👉 Default is 100. 👈  <br> <br> ⚠️Warning: This setting should not be used unless the default setting is not working for you.  ⚠️ |
| `terminatingDigits`     | (optional) Digit that the caller presses to indicate that the recording can be stopped. It can be any one of `0-9*#`. <br> <br> 👉 Default none.👈 <br> <br> ⚠️This seting is ignored if the `<Record>` verb is inside a `<Transfer>` verb. ⚠️                                                                                                                                                            |

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

<SpeakSentence voice="paul" gender="male" locale="en_US">Recording your call</SpeakSentence>

<PlayAudio>https://audio.url/audio.mp3</PlayAudio>

<Record requestUrl="https://record.url.server/record" transcribe="true" transcribeCallbackUrl="https://transcribe.url/result"/ >

</Response>
```

{% endmethod %}
