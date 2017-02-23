{% method %}
## XML: `<Transfer>`
The Transfer verb is used to transfer the call to another number.


### Attributes
| Attribute         | Description                                                                                                                                                                                                                                                                                                                                                                                                          |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| transferTo        | (required) Defines the number the call will be transferred to.                                                                                                                                                                                                                                                                                                                                                       |
| transferCallerId  | (optional) This is the caller id that will be used when the call is transferred.<br> Allowed values: <br>**When transferring an incoming call**: <br> `private`, any number owned by user, or `blank`. <br>**when transferring an outgoing call**: <br> `private`, any number owned by user, or `blank`. <br> <br> Note: Leaving the transferCallerId blank will pass along the number of the original incoming call |
| callTimeout       | (optional) This is the timeout (seconds) for the callee to answer the call.                                                                                                                                                                                                                                                                                                                                          |
| requestUrl        | (optional) Relative or absolute URL to send event and request new BXML when transferred call hangs up.                                                                                                                                                                                                                                                                                                               |
| requestUrlTimeout | (optional) Timeout (milliseconds) to request new BXML.                                                                                                                                                                                                                                                                                                                                                               |
| tag               | (optional) A string that will be included in the callback events of the conference.                                                                                                                                                                                                                                                                                                                                  |


### Nestable Verbs
These verbs might also be nested inside `<Transfer>`:

| Verb          | Description                                                                                                           |
|:--------------|:----------------------------------------------------------------------------------------------------------------------|
| PhoneNumber   | (optional) A collection of phone numbers to transfer the call to. The first to answer will be transferred.            |
| SpeakSentence | (optional) Using the SpeakSentence inside the Transfer verb will speak the text to the callee before transferring it. |
| PlayAudio     | (optional) Using the PlayAudio inside the Transfer verb will play the media to the callee before transferring it.     |
| Record        | (optional) Using Record inside Transfer verb will record the transferred call.                                        |



<aside class="alert general small"><p>The transfer will bridge the calls when all verbs inside Transfer were executed.</p></aside>
<aside class="alert general small"><p>The transferTo attribute will be ignored in the presence of a <PhoneNumber> collection.</p></aside>
<aside class="alert general small"><p>There can be a maximum of 7 phone numbers to try and transfer to.</p></aside>


{% common %}
#### Example: Simple Transfer
This shows how to use Bandwidth XML to transfer a phone call.


```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
	<SpeakSentence gender="male" locale="en_US" voice="paul">Transferring your call, please wait.</SpeakSentence>
	<Transfer transferCallerId="+11234567891" transferTo="+11234567892">
				<SpeakSentence gender="male" locale="en_US" voice="paul">Inner speak sentence.</SpeakSentence>
	</Transfer>
</Response>
```

#### Example: Multi transfer
This example shows how to use Bandwidth XML in a multi transfer scenario.

```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
	<Transfer transferCallerId="+15552221235">
		<PhoneNumber>+15552221234</PhoneNumber>
		<PhoneNumber>+15552221233</PhoneNumber>
		<SpeakSentence gender="male" locale="en_US" voice="paul">This call has been forwarded.</SpeakSentence>
	</Transfer>
</Response>

```

{% endmethod %}
