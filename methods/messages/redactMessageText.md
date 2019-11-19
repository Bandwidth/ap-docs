{% method %}
## Redact Message Text information
This API can be used to redact the text of a previously sent message.

We only store the message contents for 3 days. Any messages older than 3 days will not contain text. For more information, see the <a href="https://dev.bandwidth.com/faq/messaging/retainSMS.html">FAQ</a>

### Request URL

<code class="patch">PATCH</code>`https://api.catapult.inetwork.com/v1/users/{userId}/messages/{messageId}`


### Request Body

The following must be the body of your PATCH request. This request does not support updating text to anything other than the empty string ("").
This API allows redacting the message text only. Adding additional parameters to the request body will return a 400 response code.

<code>
	{
		"text" : ""
	}
</code>

### Supported Parameters
| Parameter          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Mandatory |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| text               | The contents of the text must be the empty string (""). Any other value will fail.                                                                                                                                                                                                                                               | Yes       |

### Response Codes
| Response Code | Description                                                                                      |
|:--------------|:-------------------------------------------------------------------------------------------------|
| 200           | The request was valid and the text of the message has been redacted.								   															   |
| 400			| The request was malformed and the text of the message has not been redacted.		                   																	   |


{% sample lang="bash" %}

```bash
curl -v -X PATCH https://api.catapult.inetwork.com/v1/users/{userId}/messages/{messageId} -u {token}:{secret} -H "Content-type: application/json" -d
    '
	{
		"text": ""
	}
    '
```

{% endmethod %}
