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
| Transfer call to next available operator. If there's no answer in 10 seconds, then leave voicemail| 
`<?xml version="1.0" encoding="UTF-8"?>
<Response>
<SpeakSentence voice="susan">Please wait for the next available operator</SpeakSentence>
<Transfer callTimeout="10">
        <PhoneNumber>+15552221234</PhoneNumber>
        <PhoneNumber>+15552221233</PhoneNumber>
        <PhoneNumber>+15552221233</PhoneNumber>
        <SpeakSentence gender="male" locale="en_US" voice="susan">This call has been forwarded.</SpeakSentence>
</Transfer>
<SpeakSentence voice="susan">We're sorry, none of our operators are available at the moment. After the beep, please leave your name and number, and we will return your call as soon as possible</SpeakSentence>
<PlayAudio>https://audio.url/beep.mp3</PlayAudio>
<Record requestUrl="${baseUrl+'/recordResponse'}"></Record>
</Response>`                                                                                              |

## Code
Not 100% sure how much code we should show.  I put the Record BXML inside the coding frame, but I also included some of the frame because I wanted to show how the code below uses a Request URL (ie. /recordResponse).

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