# Transcriptions <code class="get">BETA</code>

The Transcription resource lets you transcribe a voicemail recording. This resource can be either created automatically when the call property transcriptionEnabled is set to true, when call is created, or during the call by posting an event. The transcription is based on a call audio recording. By enabling/disabling call property recordingEnabled, a call can have more than one recording, so it's possible to have one or more transcriptions for each one of those recordings. When transcriptionEnabled is set to true all the recordings generated within that call are going to be transcribed, i.e, if you start to record a call, at any given time when the call is active, and then terminate the recording, the transcription resource will be automatically started for this recording; this process can happen many times.

### Base URL

`https://api.catapult.inetwork.com/v1/users/{userId}/recordings/{recordingId}/transcriptions/`

### Capabilities

| Verb                           | Path                                                                                                                 | about                                           |
|:-------------------------------|:---------------------------------------------------------------------------------------------------------------------|:------------------------------------------------|
| <code class="post">POST</code> | [`/v1/users/{userId}/recordings/{recordingId}/transcriptions`](postTranscriptions.md)                                | Create a new transcription                      |
| <code class="get">GET</code>   | [`/v1/users/{userId}/recordings/{recordingId}/transcriptions`](getTranscriptions.md)                                 | Get properties for a transcription              |
| <code class="get">GET</code>   | [`/v1/users/{userId}/recordings/{recordingId}/transcriptions{transcriptionId}`](getTranscriptionsTranscriptionId.md) | Get all transcriptions for a recording resource |


<aside class="alert general">
It is important to note that our transcription service has been specifically tuned to transcribe voicemail recordings. It will not perform accurately when used in other scenarios such as IVR or support conversation recording.
</aside>

<aside class="alert success">
If you are interested in using transcription for these use cases, please contact us at signup@bandwidth.com.
</aside>
