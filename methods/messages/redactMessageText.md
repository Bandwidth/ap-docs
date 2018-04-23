{% method %}
## Redact Message Text information
This endpoint can be used to redact the text of a previously sent message. Use your catapult user-id and the message id of the message of which you would like to 
redact its text to form the URL. 

We only store the message contents for 30 days. Any messages older than 30 days will not contain text. For more information, see the <a href="http://dev.bandwidth.com/faq/#messaging">FAQ</a>

### Request URL

<code class="patch">PATCH</code>`https://api.catapult.inetwork.com/v1/users/{userId}/messages/{messageId}`


### Request Body

The following must be the body of your PATCH request. This request does not support updating text to anything other than the empty string ("").
This request also does not support redacting any fields other than text. Adding additional fields to the request body will return a 400 bad request 
status code. 

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
curl -v -X PATCH https://api.catapult.inetwork.com/v1/users/{userId}/messages/{messageId} \
	-u {token}:{secret} \
	-H "Content-type: application/json" \
		-d \
	'
	{
		"text": ""
	}'
```

{% endmethod %}