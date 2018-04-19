# Speak Sentence

## Concept
The Speak Sentence verb is used to play an automated message in a phone call. 
In the example below, when the call gets answered the sentence "Hi, thank you for calling Bandwidth! You are an awesome person. Go treat yourself to a Beyonce concert!"

## Use Cases
<table>
    <tr>
        <th>Use Case</th>
        <th>BXML Code</th>
    </tr>
    <tr>
        <td>Speak French sentence with French voice saying "Hello! We hope you have a great day!"</td>
        <td>
            `<?xml version="1.0" encoding="UTF-8"?>
             <Response>
             <SpeakSentence voice="bernard" locale="fr" gender="male">
                   Salut! Nous espérons que vous passerez une merveilleuse journée!
             </SpeakSentence>
             </Response>`
        </td>
    </tr>
    <tr>
        <td>"Our Menu options have changed" in British accent</td>
        <td>
            `<?xml version="1.0" encoding="UTF-8"?>
             <Response>
             <SpeakSentence voice="bridget" locale="en_UK" gender="female">
                   Hello, thank you for calling us.  Please listen carefully as our menu options have changed.
             </SpeakSentence>
             </Response>`
        </td>
    </tr>
    <tr>
        <td>Promotional Intro and Record</td>
        <td>
            `<?xml version="1.0" encoding="UTF-8"?>
             <Response>
             <SpeakSentence voice="bridget" locale="en_UK" gender="female">
                   Thank you for calling Parks and Recreation in Pawnee, Indiana.  We do our very best to ensure good health for our environment and for the citizens that live in it!  If you have a request or a suggestion for improvement, please leave a message after the tone. Remember "When you're here, you're home!"
             </SpeakSentence>
             <PlayAudio>https://audio.url/tone.mp3</PlayAudio>
             <Record requestUrl="${baseUrl+'/recordResponse'}"></Record>
             </Response>`
        </td>
    </tr>
    <tr>
        <td>Creative Words of Encouragement and Transfer</td>
        <td>
            `<?xml version="1.0" encoding="UTF-8"?>
             <Response>
             <SpeakSentence voice="bridget" locale="en_US" gender="female">
                   Remember, you are Beyonce, and nobody is as fierce as you.
             </SpeakSentence>
             <Transfer transferCallerId="+11234567891" transferTo="+11234567892">
                <SpeakSentence voice="bridget" locale="en_US" gender="female">
                  Your call has been transfered to the next available representative. Have a fierce day!
                </SpeakSentence>
             </Transfer>
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

				  <SpeakSentence voice="s" locale="it" gender="female">
                   Hi, thank you for calling Bandwidth! You are an awesome person. Go treat yourself to a Beyonce concert!
          </SpeakSentence>

				  </Response>`

    res.send(bxml);
};

app.get(CALL_EVENTS, handleAnswerEvent);
```