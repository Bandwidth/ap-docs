# BXML Callbacks

###  Understanding BXML Callback Events
The events sent are the events from Bandwidth Application Platform, with only two exceptions:

* [transferComplete](callbacks/transferComplete.md): sent to the original BXML call when the transferred call hangs up
* [redirect](callbacks/redirect.md): sent when the verb redirect is in action

BXML callbacks perform HTTP GET requests to the **requestUrl** when the notification intends to retrieve a new BXML document.

BXML events are HTTP messages that are sent to your application server to notify you of activity related to your Bandwidth resources during a BXML usage.

| Event                                             | Description                                                                                                                     |
|:--------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------|
| [Answer Event](callBacks/answer.md)               | Bandwidth API sends this message to the application when the call is answered.                                                  |
| [Call Timeout Event](callBacks/callTimeout.md)    | Bandwidth API sends this message to the application when the call is not answered within the specified timeout.                 |
| [Gather event](callBacks/gather.md)               | Bandwidth API generates a gather event when the gather command completes in a call.                                             |
| [Hangup Event](callBacks/hangup.md)               | Bandwidth API sends this message to the application when the call ends.                                                         |
| [Recording event](callBacks/recording.md)         | Bandwidth API sends this event to the application when an the recording media file is saved or an error occurs while saving it. |
| [Transcription event](callBacks/transcription.md) | Bandwidth API sends this event to the application when the recording media file is transcribed if requested.                    |
| [Redirect event](callBacks/redirect.md)           | Bandwidth API sends this event to the application when a `<Redirect>` is requested                                              |
| [Transfer Complete Event](callBacks/transfer.md)  | Bandwidth API sends this event to the application when the `<Transfer>`is complete                                              |

