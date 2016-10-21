{% method %}
## GET domains/{domain-id}/endpoints
This returns a list of all endpoints associated with a domain.

### Supported Parameters
| Parameter | Description                                                                                                                                                              | Mandatory |
|:----------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| page      | Used for pagination to indicate the page requested for querying a list of endpoints. If no value is specified the default is 0.                                          | No        |
| size      | Used for pagination to indicate the size of each page requested for querying a list of endpoints. If no value is specified the default value is 25. (Maximum value 1000) | No        |

## Properties
| Property      | Description                                                                                                                                                                                                                                                                                                                                                              |
|:--------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| name          | The endpoint’s name, which SIP clients use as the `address of record` in the `To` header when registering. The name must be a valid SIP `user` or `telephone-subscriber` string. RFC 3261 Section 19.1.1 defines the characters that are valid in those parts of a SIP URI. Names must be unique within the domain, and cannot be changed after the endpoint is created. |
| description   | String to describe endpoint                                                                                                                                                                                                                                                                                                                                              |
| domainId      | The id of the domain in which the endpoint will be created. This is the id of the domain resource created in an earlier step.                                                                                                                                                                                                                                            |
| applicationId | The id of the application associated with this endpoint. Application\_id is used to determine the callback URL to be used when a client associated with the endpoint attempts to make a call.                                                                                                                                                                            |
| enabled       | When set to true, SIP clients can register as this device to receive and make calls. When set to false, registration, inbound, and outbound calling will not succeed. Default is true.                                                                                                                                                                                   |
| credentials   | Contains SIP authentication credentials. See below for details of credentials.                                                                                                                                                                                                                                                                                           |
| sipUri        | A SIP URI this device can be contacted at (via INVITE). This property is generated automatically and cannot be changed.                                                                                                                                                                                                                                                  |

## Credentials
| Property | Description                                                                                                                                                                                                                     |
|:---------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| realm    | The realm the SIP client must use when authenticating to use this device.<br>The realm is case-sensitive.<br>This property is generated automatically and cannot be changed.                                                    |
| username | The username the SIP client must use when authenticating to use this device.<br>The username is case-sensitive.<br>This property is generated automatically and cannot be changed.                                              |
| password | The plain-text password the SIP client must use when authenticating to use this device.<br>The password is case-sensitive.<br>The password must be at least 6 characters long and contain only Latin 1 (ISO 8859-1) characters. |

{% common %}
### Example: Get a list of all endpoints for a domain

{% sample lang="bash" %}
```bash
curl -v -X GET https://api.catapult.inetwork.com/v1/users/{userId}/domains/{domainId}/endpoints \
	-u {token}:{secret} \
	-H "Content-type: application/json"
```

{% sample lang="js" %}
```js
// Default size (25) using promises
 client.Endpoint.list("domainId")
	 .then(function (res) {});

	// Default size (25) using callbacks
client.Endpoint.list("domainId", function (err, res) {});

// Specify number of endpoints using promises
client.Endpoint.list("domainId", {size: 1000})
		.then(function (res) {});

// Specify number of endpoints using callbacks
client.Endpoint.list("domainId" {size: 1000}, function (err, res) {});
```

{% sample lang="csharp" %}
```csharp
// Default size (25)
var endpoints = client.Endpoint.List("{domainId1}");

// Specify number of endpoints
var endpoints = client.Endpoint.List("{domainId1}", new EndpointQuery {Size = 1000});
```

{% sample lang="ruby" %}
```ruby
endpoints = domain.get_endpoints()
```

{% common %}
> The above command returns JSON structured like this:

```json
[
{
	"name" : "jsmith-mobile",
	"description" : "John Smiths mobile client",
	"domainId" : "{domain-id}",
	"applicationId" : "{application-id}",
	"enabled" : "true",
	"sipUri" : "jsmith-mobile@doname.bwapp.bwsipp.io",
	"credentials" : {
		"realm" : "doname.bwapp.bwsipp.io",
		"username" : "jsmith-mobile"
	}
}
]
```
{% endmethod %}
