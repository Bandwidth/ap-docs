{% method %}

## Create Domain
This will create a domain.

### Request URL

<code class="post">POST</code>`https://api.catapult.inetwork.com/v1/users/{userId}/domains`

<aside class="alert general small">
<p>
There is a 100 domain max per account limit. Most use cases require using a single domain for all endpoints.
</p>
</aside>

---
### Supported Parameters

| Parameter   | Description                                        | Mandatory |
|:------------|:---------------------------------------------------|:----------|
| name        | The name is a unique URI to be used in DNS lookups | Yes       |
| description | String to describe the domain                      | Yes       |

{% common %}

### Example 1 of 1: Create a domain

{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/domains \
	-u {token}:{secret} \
	-H "Content-type: application/json" \
		-d \
	'
	{
		"name" : "mycoolapp",
		"description" : "disruptive app that is going to revolutionize telecom"
	}'
```

{% sample lang="js" %}

```js
var params = {
  name: "mycoolapp",
  description: "disruptive app that is going to revolutionize telecom"
}
client.Domain.create(params)
.then(function (domainId) {
  console.log(domainId);
});
```

{% sample lang="csharp" %}

```csharp
var domain = await client.Domain.CreateAsync(new CreateDomainData{
	Name = "mycoolapp",
	Description = "disruptive app that is going to revolutionize telecom"
});

Console.WriteLine($"Created domain with id {domain.Id}");
// Created domain with id d-1234
```

{% sample lang="ruby" %}

```ruby
domain = Domain.create(client, {
	:name => "mycoolapp",
	:description => "disruptive app that is going to revolutionize telecom"
})
```

{% common %}


> The above command returns HTTP Header structured like this:

```
HTTP/1.1 201 Created
Location: /v1/users/{user-id}/domains/{domain-id}
```
{% endmethod %}
