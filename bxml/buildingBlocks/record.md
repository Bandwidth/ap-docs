# Record

## Concept
The Record verb is used to record a call. In the example below, the it records the call as soon as the call gets answered. The callback then gets prints in the terminal in which you can access the recording by going to the recording URI.


## Use Cases

| Use Case                                    | BXML Code                                                 |
|:--------------------------------------------|:----------------------------------------------------------|
| Call centers: A customer can call in and a recording will play. The call will then be transfered to the first available tenant. | Add multiple phone numbers(`<PhoneNumber>+15552221234</PhoneNumber>`) |
| Appointment reminders: If a customer would like to reschedule, you can transfer their call to the scheduling office | The code will be the same as the example|
| Operator: Often times customers can press 0 to be connected to an operator. | The code would need to [collect digits](../verbs/gather.md) then transfer to an operator if 0 is pushed|


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

				  <Record requestUrl="${baseUrl + '/recordResponse'}"></Record>

				  </Response>`

    res.send(bxml);
};

app.get(CALL_EVENTS, handleAnswerEvent);

app.get("/recordResponse", (req, res) => {
    console.log(req.query);
    res.send(200);
});
```