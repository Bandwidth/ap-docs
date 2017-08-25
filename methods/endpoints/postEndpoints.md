{% method %}

## Create Endpoint on Domain
This creates an endpoint.

### Request URL
<code class="post">POST</code>`https://api.catapult.inetwork.com/v1/users/{userId}/domains/{domainId}/endpoints`

---

### Supported Parameters

| Parameter            | Description                                                                                                                                                                                                                                                                                                                                                                            | Mandatory |
|:---------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| name                 | - The endpoint's name, which SIP clients use as the "address of record" in the "To" header when registering. <br> -The name must be a valid SIP "user" or "telephone-subscriber" string. RFC 3261 Section 19.1.1 defines the characters that are valid in those parts of a SIP URI. <br> -Names must be unique within the domain, and cannot be changed after the endpoint is created. | Yes       |
| description          | String to describe endpoint                                                                                                                                                                                                                                                                                                                                                            | No        |
| applicationId        | The id of the application associated with this endpoint. Application_id is used to determine the callback URL to be used when a client associated with the endpoint attempts to make a call.                                                                                                                                                                                           | No        |
| enabled              | When set to true, SIP clients can register as this device to receive and make calls. When set to false, registration, inbound, and outbound calling will not succeed. <br> Default: `true`                                                                                                                                                                                             | No        |
| credentials          | Contains SIP authentication credentials.                                                                                                                                                                                                                                                                                                                                               | Yes       |
| credentials.password | -The plain-text password the SIP client must use when authenticating to use this device. <br> -The password is case-sensitive. <br> -The password must be at least 6 characters long and contain only Latin 1 (ISO 8859-1) characters.                                                                                                                                                 | Yes       |

{% common %}

### Example 1 of 1: Create an endpoint

{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/domains/{domain-id}/endpoints \
	-u {token}:{secret} \
	-H "Content-type: application/json" \
	-d \
	'
	{
		"name" : "jsmith_mobile",
		"description" : "John Smiths mobile client",
		"applicationId" : "{application-id}",
		"enabled" : "false",
		"credentials" : { "password" : "abc123" }
	}'
```

{% sample lang="js" %}


```js
var params = {
	name : "my-endpoint",
	applicationId : "appId",
	credentials : {
		password : "123456"
	}
};

// Promise
client.Endpoint.create("domainId", params)
	.then(function (endpoint) {
		console.log(endpoint);
	});
// Callback
client.Endpoint.create("domainId", params, function (err, endpoint) {
	if (err) {
		console.log(err);
	}
	else {
		console.log(endpoint);
	}
});
```

{% sample lang="csharp" %}

```csharp
var endpoint = await client.Endpoint.CreateAsync(new CreateEndpointData {
	Name = "jsmith_mobile",
	Description = "John Smiths mobile client",
	ApplicationId = "applicationId",
	Enabled = false,
	Credentials = new CreateEndpointCredentials {Password = "123456"}
});
Console.WriteLine($"Created endpoint with id {endpoint.Id}");
// Created endpoint with id ep-1234
```

{% sample lang="ruby" %}

```ruby
endpoint = domain.create_endpoint({
	:name => "jsmith_mobile",
	:description => "John Smiths mobile client",
	:application_id => "applicationId",
	:enabled => false,
	:credentials => {:password => "123456"}
})
```

{% common %}

> The above command returns HTTP Header structured like this:

```
HTTP/1.1 201 Created
Location: /v1/users/{user-id}/domains/{domain-id}/endpoints/{endpoint-id}
```
{% endmethod %}
