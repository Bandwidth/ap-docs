{% method %}

## Remove Phone Number
Removes a number from your account so you can no longer make or receive calls, or send or receive messages with it. When you remove a number from your account, it will not be available to add back to your account, so be careful. To learn more about deleting a phone number, visit the <a href="http://dev.bandwidth.com/faq/#Phone">FAQ</a>

### Request URL

<code class="delete">DELETE</code>`https://api.catapult.inetwork.com/v1/users/{userId}/phoneNumbers/{numberId}`

{% common %}

### Example 1 of 1: Delete Number from user

{% sample lang="bash" %}

```bash
curl -v -X DELETE https://api.catapult.inetwork.com/v1/users/{userId}/phoneNumbers/{numberId} \
	-u {token}:{secret} \
	-H "Content-type: application/json"
```

{% sample lang="js" %}

```js
// Promise
client.PhoneNumber.delete(numberId).then(function(){});

// Callback
client.PhoneNumber.delete(numberId, function(err){});
```

{% sample lang="csharp" %}

```csharp
await client.PhoneNumber.DeleteAsync(numberId);
```

{% sample lang="ruby" %}

```ruby
phoneNumber.delete()
```
{% endmethod %}
