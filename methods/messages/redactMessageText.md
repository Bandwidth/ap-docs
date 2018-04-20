{% method %}
## Redact Message Text information
Redact the text of a previously sent message.

We only store the message contents for 30 days. Any messages older than 30 days will not contain text. For more information, see the <a href="http://dev.bandwidth.com/faq/#messaging">FAQ</a>

### Request URL

<code class="patch">PATCH</code>`https://api.catapult.inetwork.com/v1/users/{userId}/messages/{messageId}`


### Request Body

The following must be the body of your PATCH request. This request does not support updating text to anything other than the empty string ("").
This request also does not support redacting any fields other than text. Adding additional fields to the request body will result in a bad request exception.

<code>
	{
		"text" : ""
	}
</code>


### Example

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