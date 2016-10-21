{% method %}
## POST domains/{domain-id}/endpoints/{endpoint-id}
This will update an endpoint.

{% common %}
### Example: Update an endpoint

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
