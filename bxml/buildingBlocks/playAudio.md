# Play Audio

## Concept
The Play Audio verb is used to play an audio file within an active call. 
In the example below, when the call gets answered the audio file for 'holding' music is played followed by a beep audio file.
Only supports .wav and .mp3 files.

## Use Cases                                                                                           | 
<table>
    <tr>
        <th>Use Case</th>
        <th>BXML Code</th>
    </tr>
    <tr>
        <td>Play "This call has been disconnected" Audio followed by Hangup</td>
        <td>
            ```xml
            <?xml version="1.0" encoding="UTF-8"?>
             <Response>
             <PlayAudio>https://audio.url/DisconnectedAudio.mp3</PlayAudio>
             <Hangup></Hangup>
             </Response>
             ```
        </td>
    </tr>
    <tr>
        <td>Play Audio then Callback redirect to execute another BXML verb with a Timeout of 10sec</td>
        <td>`<?xml version="1.0" encoding="UTF-8"?>
             <Response>
             <PlayAudio>https://audio.url/DisconnectedAudio.mp3</PlayAudio>
             <Redirect requestUrl="http://flow.url/nextBXML" requestUrlTimeout="10000"></Redirect>
             </Response>`
        </td>
    </tr>
</table>

## Code

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