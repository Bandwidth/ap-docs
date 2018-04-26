# Voicemail

## Concept
We exmplify the easy of use of BXML by building a simple voicemail system.
The structure below imitates the standard voicemail system.
1) When the call is answered, an automated voice says "Please leave a message after the tone"
2) A beep audio file gets played
3) The call starts recording
4) When the call is hung up, the recording callback gets printed in your terminal window and there you can see the recording URI in which you can access the recording 

## Use Cases
| Use Case                                    | BXML Code                                                 |
|:--------------------------------------------|:----------------------------------------------------------|
| Transfer call to next available operator. If there is no answer after 10 seconds, then leave a voicemail|
| Upon answering, an automated sentence is spoken (`<SpeakSentence voice="susan"> Please wait for the next available operator </SpeakSentence>`). Then, nested in a [`</Transfer>`](../verbs/transfer.md) verb, the call will transfer to one of a list of numbers.  When the transferred gets picked up, a sentence is spoken - "This call has been forwarded", also nested in the Transfer verb. If nobody picks up after 10 sec, the call gets sent to voicemail (refer below)|


## Code
Change the `baseUrl` parameter. The recording will be sent to the callback URL: baseUrl + /recordResponse.

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

				  <SpeakSentence voice="susan">Please leave a message after the tone</SpeakSentence>

                  <PlayAudio>https://audio.url/beep.mp3</PlayAudio>

				  <Record requestUrl="${baseUrl+'/recordResponse'}"></Record>

				  </Response>`

    res.send(bxml);
};

app.get(CALL_EVENTS, handleAnswerEvent);

app.get("/recordResponse", (req, res) => {
    console.log(req.query);
    res.send(200);
});
```