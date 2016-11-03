{% method %}

## Update Phone Number
Makes changes to a number you have. <code class="post">POST</code> a new JSON representation with the property values you desire to the URL that you got back in the "Location" header when you first allocated it. Properties you don't send will remain unchanged. The "numberId" refers to the numberId or the number itself. When using the number itself remember to URL encode the plus sign prefix.

### Request URL

<code class="post">POST</code>`https://api.catapult.inetwork.com/v1/users/{userId}/phoneNumbers/{numberId}`

---

### Supported Parameters
| Parameter      | Description                                                                                                      | Mandatory |
|:---------------|:-----------------------------------------------------------------------------------------------------------------|:----------|
| applicationId  | The unique id of an Application resource you want to associate with this number for incoming calls and messages. | No        |
| name           | A name you choose for this number.                                                                               | No        |
| fallbackNumber | Number to transfer an incoming call when the callback/fallback events can’t be delivered.                        | No        |

{% common %}


### Example: Change the Application resource a phone number uses for inbound calls and messages

{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/phoneNumbers/{numberId} \
	-u {token}:{secret} \
	-H "Content-type: application/json" \
		-d \
	'
	{
		"applicationId": "{application_id}"
	}'
```

{% sample lang="js" %}


```js
// Promise
client.PhoneNumber.update(numberId, {applicationId: "{application_id}"}).then(function(){});

// Callback
client.PhoneNumber.update(numberId, {applicationId: "{application_id}"}, function(err){});
```

{% sample lang="csharp" %}

```csharp
await client.PhoneNumber.UpdateAsync(numberId, new UpdatePhoneNUmberData {
    ApplicationId = "{application_id}"
});
```

{% sample lang="ruby" %}

```ruby
phoneNumber.update({:application_id => "{application_id}"})
```
{% endmethod %}
