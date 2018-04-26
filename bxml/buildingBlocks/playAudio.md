# Play Audio

## Concept
The Play Audio verb is used to play an audio file within an active call. 
In the example below, when the call gets answered the audio file for 'holding' music is played followed by a beep audio file.
Only supports .wav and .mp3 files.

## Use Cases

| Use Case                                    | BXML Code                                                 |
|:--------------------------------------------|:----------------------------------------------------------|
| Hangup Notification | Play audio track "This call has been disconnected", then hangup([`</Hangup>'](../verbs/hangup.md)) |
| Please Hold | Play audio track, then call [</Redirect>](../verbs/redirect.md) to avoid hangup and [</Transfer>](../verbs/transfer.md) the call to the next available operator.|


## Code
Change the audio file to your preferred track.

```js
const baseUrl = `http://bc66e785.ngrok.io`;
const CALL_EVENTS = '/call-events';

const handleAnswerEvent = (req, res) => {
    if (req.query.eventType !== 'answer') {
        res.sendStatus(200);
        return;
    }
    const bxml = `<?xml version="1.0" encoding="UTF-8"?>
                  <Response>

                  <PlayAudio>https://audio.url/holdMusic.mp3</PlayAudio>
                  <PlayAudio>https://audio.url/voicemailBeep.wav</PlayAudio>

                  </Response>`

    res.send(bxml);
};

app.get(CALL_EVENTS, handleAnswerEvent);
```