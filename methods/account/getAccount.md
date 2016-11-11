{% method %}
## Fetch Account Information
Get information about user account.

### Request URL:

<code class="get">GET</code>`https://api.catapult.inetwork.com/v1/users/{{userId}}/account`

---

### Account Properties
| PROPERTY    | DESCRIPTION                                                                                                                                                                                                                                                                          |
|:------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| balance     | Your account balance in dollars, as a string; the currency symbol is not included.                                                                                                                                                                                                   |
| accountType | The type of account configured for your user:<br>  - **pre-pay**: the type of account where you increase your available balance with credit card payments. <br> - **post-pay**: the type of account where you have signed a contract and will receive a monthly bill detailing usage |


{% common %}
### Get an Account object. No query parameters are supported.

{% sample lang="bash" %}

```bash
curl -v -X GET  https://api.catapult.inetwork.com/v1/users/{{userId}}/account \
  -u {{apiToken}}:{{apiSecret}} \
  -H "Content-type: application/json" \
```
{% sample lang="js" %}


```javascript
// Promise
client.Account.get().then(function(info){});

// Callback
client.Account.get(function(err, info){});
```

{% sample lang="csharp" %}

```csharp
var account = await client.Account.GetAsync();
var balance = account.Balance;
```

{% sample lang="ruby" %}

```ruby
account = Bandwidth::Account.get(client)
balance = account[:balance]
```
{% common %}

>The above command returns JSON structured like this:

```
{
	"balance": "538.37250",
	"accountType": "pre-pay"
}
```

{% endmethod %}
