{% method %}
## XML: `<Pause>`
The `<Pause>` verb is used to pause the execution of an ongoing BXML document.

### Attributes
| Attribute | Description                                                                                          | Default                         |
|:----------|:-----------------------------------------------------------------------------------------------------|:--------------------------------|
| `length`  | The 'length' attribute specifies how many seconds Bandwidth will wait silently before continuing on. | 1 seconds <br><br> Max 3600 seconds |


### Callbacks Recevied

| Callback | Can reply with more BXML |
|:---------|:-------------------------|
| None     | No                       |

{% common %}
## Example:  Pause then Speak Sentence

This shows how to use Bandwidth XML to pause before Speaking a Sentence

```XML
<?xml version="1.0" encoding="UTF-8"?>

<Response>
  <Pause length="5"/>
  <SpeakSentence voice="paola" locale="it" gender="female">Questo è un test</SpeakSentence>
</Response>
```

## Example: Simple Pause
```XML
<?xml version="1.0" encoding="UTF-8"?>

<Response>
  <SpeakSentence voice="susan" gender="female">I will pause 10 seconds starting now!</SpeakSentence>
  <Pause length="10"/>
  <SpeakSentence voice="susan" gender="female">I just paused 10 seconds</SpeakSentence>
</Response>
```

{% endmethod %}
