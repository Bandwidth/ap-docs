# Recordings
Retrieve information about call recordings. The recording information retrieved by GET method contains only textual data related to call recording as described on Properties section. To properly work with recorded media content such as download and removal of media file, please access /media documentation. To learn about how to transcribe recordings, read the /recordings/{id}/transcriptions documentation.

| Verb                         | Method                                                                       | about                                           |
|:-----------------------------|:-----------------------------------------------------------------------------|:------------------------------------------------|
| <code class="get">GET</code> | [`/v1/users/{userId}/recordings`](getRecordings.md)                          | List all call recordings                        |
| <code class="get">GET</code> | [`/v1/users/{userId}/recordings/{recordingId}`](getRecordingsRecordingId.md) | Retrieve properties for a single call recording |
