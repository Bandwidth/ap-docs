# Speak Sentence

## Concept
The Speak Sentence verb is used to play an automated message in a phone call. 
In the example below, when the call gets answered the sentence "Hi, thank you for calling Bandwidth! You are an awesome person. Go treat yourself to a Beyonce concert!"

## Use Cases
 Use Case                                    | BXML Code                                                 |
|:--------------------------------------------|:----------------------------------------------------------|
| Change Language | Speak sentence "Salut! Nous espérons que vous passerez une merveilleuse journée!" in French with settings `voice="bernard" locale="fr" gender="male"` |
| Promotional Intro | Speak sentence advertising company upon answer, then have them leave a voicemail using [</PlayAudio>](../verbs/playAudio.md) for the beep and [</Record>](../verbs/record.md)|



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

				  <SpeakSentence voice="s" locale="it" gender="female">
                   Hi, thank you for calling Bandwidth! You are an awesome person. Go treat yourself to a Beyonce concert!
          </SpeakSentence>

				  </Response>`

    res.send(bxml);
};

app.get(CALL_EVENTS, handleAnswerEvent);
```