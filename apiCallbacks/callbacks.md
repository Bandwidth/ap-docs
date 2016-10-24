# Rest API Callbacks
HTTP Callback events (Webhooks) are events that are sent to your application server via HTTP to notify you of activity related to your Bandwidth phone numbers, phone calls and messages.

## How to receive HTTP callback events on your web server
You can set the URL to receive these events in two ways:

* Create [/applications](../methods/applications/applications.md), set incomingCallUrl and incomingMessageUrl and associate the applications to the [/phoneNumbers](../methods/phoneNumbers/phoneNumbers.md) you want to receive HTTP callback events for.
* Create an outgoing [/calls](../methods/calls/postCalls.md) and [/messages](../methods/messages/postMessages.md) set the callbackUrl property to your web server endpoint

When you set callback URLs in an application you create, Bandwidth API will send events as JSON objects to those URLs as they happen. Based on these events, the program that serves these URLs can control the flow of calls and messages by calling back to Bandwidth APIs.

![diagram](images/callback-events1.png)

## Securing your web server with HTTP Basic Auth

You can password protect your web server for Bandwidth Callbacks for example:

`https://username:password@yoursecurehost.com/yoursecureapp`

## Messaging Events

| Event               | Description                                                                       |
|:--------------------|:----------------------------------------------------------------------------------|
| [SMS Event](sms.md) | Bandwidth API sends this event to the application when an SMS is sent or received |
| [MMS Event](mms.md) | Events sent to your server for inbound and outbound MMS messages.                 |

## Voice Events

| Event                                                | Description                                                                                                                                                                                               |
|:-----------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Answer Event](answer.md)                            | Bandwidth API sends this message to the application when the call is answered.                                                                                                                            |
| [Audio File Playback Events](audio.md)               | Bandwidth API sends this message to the application when audio file playback is started or done playing.                                                                                                  |
| [CallTimeout Event](timeout.md)                      | Bandwidth API sends this message to the application when the call is not answered until the specified timeout.                                                                                            |
| [Conference Event](conf.md)                          | Bandwidth API sends this event to the application when a conference is created or completed.                                                                                                              |
| [Conference Audio File Playback Event](confAudio.md) | Bandwidth API sends this message to the application when audio playback has started or is done (stopped) in a conference. Note: For playback event in conference member, use the call playback event.     |
| [Conference Member Event](confMember.md)             | Bandwidth API sends this message to the application when a conference member has joined / left the conference or when it as muted or put on hold.                                                         |
| [Conference Speak Event](confSpeak.md)               | Bandwidth API sends this message to the application when text-to-speech speaking has started or is done (stopped) in a conference. Note:— For speak event in conference member, use the call speak event. |
| [DTMF Event](dtmf.md)                                | Bandwidth API sends this message to the application when it receives number pad tone signals during a call.                                                                                               |
| [Gather Event](gather.md)                            | Bandwidth API generates a gather event when the gather command completes in a call.                                                                                                                       |
| [Incoming Call Event](incomingCall.md)               | Bandwidth API sends this message to the application when an incoming call arrives. For incoming call the callback set is the one related to the Application associated with the called number.            |
| [Hangup Event](hangup.md)                            | Bandwidth API sends this message to the application when the call ends.                                                                                                                                   |
| [Recording Event](recording.md)                      | Bandwidth API sends this event to the application when an the recording media file is saved or an error occurs while saving it.                                                                           |
| [Reject Event](reject.md)                            | Bandwidth API sends this message to the application when the call is rejected.                                                                                                                            |
| [Speak Event](speak.md)                              | Bandwidth API sends this message to the application when text-to-speech starts or stops.                                                                                                                  |
| [Transcription Event – BETA](transcription.md)       | Bandwidth API sends this event to the application when a transcription is terminated or an error occurs while processing it.                                                                              |
