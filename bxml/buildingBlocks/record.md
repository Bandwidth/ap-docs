# Record

## Concept
The Record verb is used to record a call. In the example below, the it records the call as soon as the call gets answered. The callback then gets prints in the terminal in which you can access the recording by going to the recording URI.

## Use Cases
<table>
    <tr>
        <th>Use Case</th>
        <th>BXML Code</th>
    </tr>
    <tr>
        <td>Record and Transcribe</td>
        <td>
            ```xml
            <?xml version="1.0" encoding="UTF-8"?>
             <Response>
             <Record requestUrl="${baseUrl+'/recordResponse'}" transcribe="true" transcribeCallbackUrl="https://transcribe.url/result"></Record>
             </Response>
             ```
        </td>
    </tr>
    <tr>
        <td>Record for 20sec </td>
        <td>`<?xml version="1.0" encoding="UTF-8"?>
             <Response>
             <Record requestUrl="${baseUrl+'/recordResponse'}" maxDuration="20"></Record>
             </Response>`
        </td>
    </tr>
    <tr>
        <td>Stop recording after 5 second of silence</td>
        <td>`<?xml version="1.0" encoding="UTF-8"?>
             <Response>
             <Record requestUrl="${baseUrl+'/recordResponse'}" silenceTimeout="5"></Record>
             </Response>`
        </td>
    </tr>
    <tr>
        <td>Stop recording after 5 second of silence in a noisy setting</td>
        <td>`<?xml version="1.0" encoding="UTF-8"?>
             <Response>
             <Record requestUrl="${baseUrl+'/recordResponse'}" silenceTimeout="5" silenceThreshold="150"></Record>
             </Response>`
        </td>
    </tr>
    <tr>
        <td>Caller can press 0 to stop recording</td>
        <td>`<?xml version="1.0" encoding="UTF-8"?>
             <Response>
             <Record requestUrl="${baseUrl+'/recordResponse'}" terminatingDigits="0"></Record>
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