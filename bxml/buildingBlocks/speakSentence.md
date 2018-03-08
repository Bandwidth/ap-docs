# Speak Sentence

## Concept
The Speak Sentence verb is used to play an automated message in a phone call. 
In the example below, when the call gets answered the sentence "Hi, thank you for calling Bandwidth! You are an awesome person. Go treat yourself to a Beyonce concert!"

## Use Cases
| Use Case                                    | BXML Code                                                 |
|:--------------------------------------------|:----------------------------------------------------------|
| Record after answering                      | Does not handle messaging, only handles calls.            |
| Record and Transcribe                       | 
`<?xml version="1.0" encoding="UTF-8"?>
<Response>
<Record requestUrl="${baseUrl+'/recordResponse'}" transcribe="true" transcribeCallbackUrl="https://transcribe.url/result"></Record>
</Response>`                                                                                              |
| Record for 20sec                            | 
`<?xml version="1.0" encoding="UTF-8"?>
<Response>
<Record requestUrl="${baseUrl+'/recordResponse'}" maxDuration="20"></Record>
</Response>`                                                                                              |
| Stop recording after 5 second of silence    | 
`<?xml version="1.0" encoding="UTF-8"?>
<Response>
<Record requestUrl="${baseUrl+'/recordResponse'}" silenceTimeout="5"></Record>
</Response>`                                                                                              |
| Stop recording after 5 second of silence in a noisy setting| 
`<?xml version="1.0" encoding="UTF-8"?>
<Response>
<Record requestUrl="${baseUrl+'/recordResponse'}" silenceTimeout="5" silenceThreshold="150"></Record>
</Response>`                                                                                              | 
| Caller can press 0 to stop recording        | 
`<?xml version="1.0" encoding="UTF-8"?>
<Response>
<Record requestUrl="${baseUrl+'/recordResponse'}" terminatingDigits="0"></Record>
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

				  <SpeakSentence voice="s" locale="it" gender="female">
                   Hi, thank you for calling Bandwidth! You are an awesome person. Go treat yourself to a Beyonce concert!
                  </SpeakSentence>

				  </Response>`

    res.send(bxml);
};

app.get(CALL_EVENTS, handleAnswerEvent);

```