{% method %}
## Fetch Account Information

{% raw %}

<script>
function myFunction() {
  'use strict';
  var newApiToken = localStorage.getItem("apiToken");
  var newApiSecret = localStorage.getItem("apiSecret");
  var newUserId = localStorage.getItem("userId");
  var tn = localStorage.getItem("tn");
  var oldUserId = "{{userId}}";
  var oldApiToken = "{{apiToken}}";
  var oldApiSecret = "{{apiSecret}}";

  var targetedElements = 'code:not(.get, .post, .delete, .put)';

  if (newUserId !== null){
    var oldUserIdMatch = new RegExp(oldUserId, 'g');
    $(targetedElements).each(function () {
      $(this).text($(this).text().replace(oldUserIdMatch, newUserId));
    });
  }

  if (newApiToken !== null){
    var oldApiTokenMatch = new RegExp(oldApiToken, 'g');
    $(targetedElements).each(function () {
      $(this).text($(this).text().replace(oldApiTokenMatch, newApiToken));
    });
  }

  if (newApiSecret !== null) {
    var oldApiSecretMatch = new RegExp(oldApiSecret, 'g');
    $(targetedElements).each(function () {
      $(this).text($(this).text().replace(oldApiSecretMatch, newApiSecret));
    });
  }
};

</script>

{% endraw %}

### Request URL:

<code class="get">GET</code> `https://api.catapult.inetwork.com/v1/users/{{userId}}/account`

<button onclick="myFunction()">Update Creds</button>

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
