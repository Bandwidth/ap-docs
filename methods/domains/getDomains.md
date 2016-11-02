{% method %}

## List Domains
This returns a list of the domains that have been created

### Request URL

<code class="get">GET</code>`https://api.catapult.inetwork.com/v1/users/{userId}/domains`

## Properties
| Property    | Description                                         |
|:------------|:----------------------------------------------------|
| name        | The name is a unique URI to be used in DNS lookups  |
| description | String to describe the domain                       |
| endpoints   | URL to use to GET list of endpoints on this domain. |
| id          | Unique string to identify the domain resource       |

{% common %}

### Example: List all domains

{% sample lang="bash" %}

```bash
curl -v -X GET https://api.catapult.inetwork.com/v1/users/{userId}/domains \
	-u {token}:{secret} \
	-H "Content-type: application/json"
```

{% sample lang="js" %}

```js
client.Domain.list()
.then(function (domains) {
	console.log(domains);
});
```

{% sample lang="csharp" %}

```csharp
var domains = client.Domain.List();
var firstDomainName = domains.First().Name;
```

{% sample lang="ruby" %}

```ruby
domains = Domain.list(client)
first_domain = domains.next
first_domain_name = first_domain.name
```
{% common %}

> The above command returns JSON structured like this:

```json
[
{
	"id" : "dom-xyz123",
		"name" : "mycoolapp",
	"description" : "disruptive app that's going to revolutonize telecom",
		"endpoints" : "/v1/users/{user-id}/domains/dom-xyz123/endpoints"
	},
{
	"id" : "dom-abc876",
		"name" : "mycoolapp_stage",
	"description" : "stage env for disruptive app",
		"endpoints" : "/v1/users/{user-id}/domains/dom-abc876/endpoints"
	}
]
```
{% endmethod %}

