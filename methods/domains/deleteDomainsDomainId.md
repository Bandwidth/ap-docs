{% method %}

## DELETE domain
This will delete a domain

## Request URL

<code class="delete">DELETE</code>`https://api.catapult.inetwork.com/v1/users/{userId}/domains/{domaidId}`

{% common %}

### Example: Delete a domain

{% sample lang="bash" %}

```bash
curl -v -X DELETE https://api.catapult.inetwork.com/v1/users/{userId}/domains/{domain-id} \
	-u {token}:{secret} \
	-H "Content-type: application/json"
```

```js
client.Domain.delete("{domain-id}")
.then(function () {});
```

{% sample lang="csharp" %}

```csharp
await client.Domain.DeleteAsync("{domainId1}");
```

{% sample lang="ruby" %}

```ruby
domain.delete()
```

{% endmethod %}
