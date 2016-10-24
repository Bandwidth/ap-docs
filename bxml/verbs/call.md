{% method %}
## XML: `<Call>`

The Call verb is used to create call to another number.

### Attributes

| Attribute         | Description                                                                                                               |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------|
| from              | (required) Defines the number the call will be created from.                                                              |
| to                | (required) Defines the number the call will be called to.                                                                 |
| timeout           | (optional) This is the timeout (seconds) for the call to answer.                                                          |
| requestUrl        | (optional) Relative or absolute URL to send event and request new BXML document when call is answered or call is hung up. |
| requestUrlTimeout | (optional) Timeout (milliseconds) to request new BXML document.                                                           |

### Nestable Verbs
These verbs might also be nested inside Call:

| Verb          | Description                                                                                        |
|:--------------|:---------------------------------------------------------------------------------------------------|
| PhoneNumber   | (optional) A collection of phone numbers to create call. The first to answer will create the call. |
| SpeakSentence | (optional) Using the SpeakSentence inside the Call verb will speak the text to the callee.         |
| PlayAudio     | (optional) Using the PlayAudio inside the Call verb will play the media to the callee.             |
| Record        | (optional) Using Record inside Call verb will record the created call.                             |


{% common %}
#### Example: Simple Call


This shows how to use Bandwidth XML to create a simple call.

```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
	<Call from="+15052221113" to="+15552221234"></Call>
	<SpeakSentence>Here is a sentence</SpeakSentence>
</Response>
```

{% endmethod %}
