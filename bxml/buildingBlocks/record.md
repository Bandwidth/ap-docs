# Record

## Concept
The Record verb is used to record a call. In the example below, the it records the call as soon as the call gets answered. The callback then gets prints in the terminal in which you can access the recording by going to the recording URI.

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