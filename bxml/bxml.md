# Bandwidth XML (BXML)

Bandwidth XML allows you to create a voice application as easily as you create a Web application. Using Bandwidth XML (or BXML) your application handles incoming call events using standard action verbs that are described in XML.

Before we begin creating a new BXML application you’ll need two things initially setup:

1. A phone number that is allocated to your Bandwidth Application Platform account and is configured to an application. See here on how to do that. Note that when you create the application you’ll need to make sure that the Callback HTTP method  is set to <code class="get">GET</code>.

2. A public Web site that you can create content on and will handle the requests for BXML. Note that the endpoint for this site should be used to create the application in you setup above.

The maximum size of a BXML document is 16 KB.

###  Understanding BXML Callback Events
The events sent are the events from Bandwidth Application Platform, with only two exceptions:

* [transferComplete](callbacks/transferComplete.md): sent to the original BXML call when the transferred call hangs up
* [redirect](callbacks/redirect.md): sent when the verb redirect is in action

BXML callbacks perform HTTP GET requests to the **requestUrl** when the notification intends to retrieve a new BXML document.

### Verbs

| Verb                                        | Description                                                                                                                                     |
|:--------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------|
| [`<Gather>`](verbs/gather.md)               | The Gather verb is used to collect digits for some period of time.                                                                              |
| [`<Hangup>`](verbs/hangup.md)               | The Hangup verb is used to hangup current call.                                                                                                 |
| [`<PlayAudio>`](verbs/playAudio.md)         | The PlayAudio verb is used to play an audio file in the call.                                                                                   |
| [`<Record>`](verbs/record.md)               | The Record verb allows call recording. At the end of the call, a call recording event containing the media with recorded audio URL is generated |
| [`<Redirect>`](verbs/redirect.md)           | The Redirect verb is used to redirect the current XML execution to another URL.                                                                 |
| [`<SpeakSentence>`](verbs/speakSentence.md) | The SpeakSentence verb is used to convert any text into speak for the caller.                                                                   |
| [`<Transfer>`](verbs/transfer.md)           | The Transfer verb is used to transfer the call to another number.                                                                               |
| [`<Pause>`](verbs/pause.md)                 | The Pause verb is used to pause between other verbs within the BXML document                                                                    |
| [`<DTMF>`](verbs/dtmf.md)                   | The DTMF verb is used to send button presses on a live call                                                                                     |

### BXML Callbacks

BXML events are HTTP messages that are sent to your application server to notify you of activity related to your Bandwidth resources during a BXML usage.

| Event                                             | Description                                                                                                                     |
|:--------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------|
| [Answer Event](callBacks/answer.md)               | Bandwidth API sends this message to the application when the call is answered.                                                  |
| [Gather event](callBacks/gather.md)               | Bandwidth API generates a gather event when the gather command completes in a call.                                             |
| [Hangup Event](callBacks/hangup.md)               | Bandwidth API sends this message to the application when the call ends.                                                         |
| [Recording event](callBacks/recording.md)         | Bandwidth API sends this event to the application when an the recording media file is saved or an error occurs while saving it. |
| [Transcription event](callBacks/transcription.md) | Bandwidth API sends this event to the application when the recording media file is transcribed if requested.                    |
| [Redirect event](callBacks/redirect.md)           | Bandwidth API sends this event to the application when a `<Redirect>` is requested                                              |
| [Transfer Complete Event](callBacks/transfer.md)  | Bandwidth API sends this event to the application when the `<Transfer>`is complete                                              |

