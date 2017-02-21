# Bandwidth XML (BXML)

Bandwidth XML allows you to create a voice or messaging application as easily as you create a Web application. Using Bandwidth XML (or BXML) your application handles incoming call and messaging events using standard action verbs that are described in XML.

Before we begin creating a new BXML application you’ll need two things initially setup:

1. A phone number that is allocated to your Bandwidth Application Platform account and is configured to an application. See here on how to do that. Note that when you create the application you’ll need to make sure that the Callback HTTP method  is set to <code class="get">GET</code>.

2. A public Web site that you can create content on and will handle the requests for BXML. Note that the endpoint for this site should be used to create the application in you setup above.

###  Understanding BXML Callback Events
The events sent are the events from Bandwidth Application Platform, with only two exceptions:

* [transferComplete](callbacks/transferComplete.md): sent to the original BXML call when the transferred call hangs up
* [redirect](callbacks/redirect.md): sent when the verb redirect is in action

BXML callbacks perform HTTP GET requests to the **requestUrl** when the notification intends to retrieve a new BXML document.

### Verbs

| Verb                                        | Description                                                                                                                                                                         |
|:--------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`<Call>`](verbs/call.md)                   | The Call verb is used to create call to another number.                                                                                                                             |
| [`<Gather>`](verbs/gather.md)               | The Gather verb is used to collect digits for some period of time.                                                                                                                  |
| [`<Hangup>`](verbs/hangup.md)               | The Hangup verb is used to hangup current call.                                                                                                                                     |
| [`<Media>`](verbs/media.md)                 | <Media> is a noun that is used exclusively within [`<SendMessage>`](verbs/sendMessage.md) to provide attached media (MMS) capability messages. <br> **This feature is coming soon** |
| [`<Pause>`](verbs/pause.md)                 | Pause is a verb to specify the length of seconds to wait before executing the next verb. <br> ** This feature is coming soon**                                                      |
| [`<PlayAudio>`](verbs/playAudio.md)         | The PlayAudio verb is used to play an audio file in the call.                                                                                                                       |
| [`<Record>`](verbs/record.md)               | The Record verb allows call recording. At the end of the call, a call recording event containing the media with recorded audio URL is generated                                     |
| [`<Redirect>`](verbs/redirect.md)           | The Redirect verb is used to redirect the current XML execution to another URL.                                                                                                     |
| [`<Reject>`](verbs/reject.md)               | The Reject verb is used to reject incoming calls.<br>  **This feature is coming soon. **                                                                                            |
| [`<SpeakSentence>`](verbs/speakSentence.md) | The SpeakSentence verb is used to convert any text into speak for the caller.                                                                                                       |
| [`<Transfer>`](verbs/transfer.md)           | The Transfer verb is used to transfer the call to another number.                                                                                                                   |
