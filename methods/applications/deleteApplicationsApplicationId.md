{% method %}
## Remove Application
Permanently deletes an application.

### Request Url

<code class="delete">DELETE</code>`https://api.catapult.inetwork.com/v1/users/{userId}/applications/{applicationId}`

{% common %}
### Example 1 of 1: Delete an application.

{% sample lang="bash" %}

```bash
curl -v -X DELETE https://api.catapult.inetwork.com/v1/users/{userId}/applications/{applicationId} -u {token}:{secret} -H "Content-type: application/json"
```

{% sample lang="js" %}

```js
// Promise
client.Application.delete('a-j4f2j6mqz53mq')
.then(function (response) {
	console.log(response);
});

// Callback
client.Application.delete('a-zuwwzrbea',
	function (err, response) {
		if (err) {
			console.log(err);
		}
		else {
			console.log(response);
		}
});
```

{% sample lang="csharp" %}

```csharp
await client.Application.DeleteAsync("a-zuwwfzzrbea");
```

{% sample lang="ruby" %}

```ruby
app.delete()
```
{% endmethod %}
