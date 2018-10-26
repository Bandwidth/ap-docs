{% method %}

## Remove Endpoint from Domain

### Request URL

<code class="delete">DELETE</code>`https://api.catapult.inetwork.com/v1/users/{userId}/domains/{domainId}/endpoints/{endpointId}`


{% common %}

### Example 1 of 1: Remove an endpoint

{% sample lang="bash" %}

```bash
curl -v -X DELETE https://api.catapult.inetwork.com/v1/users/{userId}/domains/{domain-id}/endpoints/{endpoint-id} -u {token}:{secret} -H "Content-type: application/json"
```

{% sample lang="js" %}

```js
// Promise
client.Endpoint.delete("domainId", "endpointId").then(function (endpoint) {});
// Callback
client.Endpoint.delete("domainId", "endpointId", function (err, endpoint) {});
```

{% sample lang="csharp" %}

```csharp
await client.Endpoint.DeleteAsync("{domainId1}", "{endpointId1}");
```

{% sample lang="ruby" %}

```ruby
domain.delete_endpoint("{endpointId1}")
```
{% endmethod %}
