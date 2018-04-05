{% method %}
## Fetch Message information
Redact the text of a previously sent message.

We only store the message contents for 30 days. Any messages older than 30 days will not contain text. For more information, see the <a href="http://dev.bandwidth.com/faq/#messaging">FAQ</a>

### Request URL

<code class="patch">PATCH</code>`https://api.catapult.inetwork.com/v1/users/{userId}/messages/{messageId}`


### Request Body

<code>
	{
		"text" : ""
	}
</code>