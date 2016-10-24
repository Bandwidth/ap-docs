{% method %}
## XML: `<SendMessage>`
The SendMessage verb is used to send a text message.


### Attributes
| ATTRIBUTE         | DESCRIPTION                                                                              |
|:------------------|:-----------------------------------------------------------------------------------------|
| from              | (required) The number from the message will be sent.                                     |
| to                | (required) The number to send the message to.                                            |
| requestUrl        | (optional) Relative or absolute URL to send event and request new BXML.                  |
| requestUrlTimeout | (optional) Integer time seconds to wait for requestUrl response (Default is 30 seconds). |
| statusCallbackUrl | (optional) Relative or absolute URL to send the message callback.                        |

<aside class="alert general small">
If the requestUrl returns a new BXML the execution will branch out to the new BXML and verbs after <SendMessage> will not be executed.
</aside>

{% common %}
#### Example:  SendMessage Verb
This shows how to use Bandwidth XML to send a text message.


```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
	<SendMessage from="+1234567891" to="+1234567890">
		This is the message text
	</SendMessage>
</Response>
```

{% endmethod %}
