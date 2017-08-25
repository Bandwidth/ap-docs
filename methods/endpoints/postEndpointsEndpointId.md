{% method %}

## Update Endpoint

This will update an endpoint.

### Request URL

<code class="post">POST</code>`https://api.catapult.inetwork.com/v1/users/{userId}/domains/{domainId}/endpoints`

---

### Supported Parameters

| Parameter            | Description                                                                                                                                                                                                                                                                                                                                                                            | Mandatory |
|:---------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| description          | String to describe endpoint                                                                                                                                                                                                                                                                                                                                                            | No        |
| applicationId        | The id of the application associated with this endpoint. Application_id is used to determine the callback URL to be used when a client associated with the endpoint attempts to make a call.                                                                                                                                                                                           | No        |
| enabled              | When set to true, SIP clients can register as this device to receive and make calls. When set to false, registration, inbound, and outbound calling will not succeed. <br> Default: `true`                                                                                                                                                                                             | No        |
| credentials          | Contains SIP authentication credentials.                                                                                                                                                                                                                                                                                                                                               | No       |
| credentials.password | -The plain-text password the SIP client must use when authenticating to use this device. <br> -The password is case-sensitive. <br> -The password must be at least 6 characters long and contain only Latin 1 (ISO 8859-1) characters.                                                                                                                                                 | No       |

{% common %}

### Example 1 of 1: Update an endpoint

{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/domains/{domain-id}/endpoints/{endpoint-id} \
	-u {token}:{secret} \
	-H "Content-type: application/json" \
	-d \
	'
	{
		"description" : "John Smiths mobile client",
		"applicationId" : "{application-id}",
		"enabled" : "true",
			"credentials" : {
			"password" : "12345"
		}
	}'
```

{% sample lang="js" %}

```js
// Promise
client.Endpoint.update("domainId", "endpointId", { enabled : true })
	.then(function (endpoint) {});
// Callback
client.Endpoint.update("domainId", "endpointId", { enabled : true }, function (err, endpoint) {});
```

{% sample lang="csharp" %}

```csharp
await client.Endpoint.UpdateAsync("{domainId1}", "{endpointId1}", new UpdateEndpointData {Enabled = true});
```

{% sample lang="ruby" %}

```ruby
#coming soon
```
{% endmethod %}
