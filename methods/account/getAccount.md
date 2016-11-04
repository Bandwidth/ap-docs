{% method %}
## Fetch Account Information

{% raw %}

<script>
var bwPageStatus = {}

bwPageStatus.credsShown = false;

function myFunction() {
  'use strict';
  var newApiToken = null;
  var newApiSecret = null;
  var newUserId = null;
  var tn = null;
  var oldUserId = "{{userId}}";
  var oldApiToken = "{{apiToken}}";
  var oldApiSecret = "{{apiSecret}}";
  var oldUserIdMatch = new RegExp(oldUserId, 'g');
  var oldApiTokenMatch = new RegExp(oldApiToken, 'g');
  var oldApiSecretMatch = new RegExp(oldApiSecret, 'g');

  if (typeof(Storage) !== "undefined") {

    newApiToken = localStorage.getItem("apiToken");
    newApiSecret = localStorage.getItem("apiSecret");
    newUserId = localStorage.getItem("userId");
    tn = localStorage.getItem("tn");
  } else {
      Console.log("No localStorage Support");
  }

  var targetedElements = 'code:not(.get, .post, .delete, .put)';

  var replaceCreds = function (elem) {
    $(elem).each(function () {
        var self = this;
        if ($(self).children().length > 0) {
            replaceCreds($(self).children());
        }
        else {
            if (newUserId !== null){
              $(self).text($(self).text().replace(oldUserIdMatch, newUserId));
            }
            if (newApiToken !== null){
              $(self).text($(self).text().replace(oldApiTokenMatch, newApiToken));
            }
            if (newApiSecret !== null) {
              $(self).text($(self).text().replace(oldApiSecretMatch, newApiSecret));
            }
        }
    });
  }

  replaceCreds(targetedElements);
  bwPageStatus.credsShown = true;
};


function addJSClient() {
  var client = "<span class=\"hljs-comment\">// install sdk: npm install node-bandwidth</span>\n"+
  "\n"+
  "<span class=\"hljs-keyword\">var</span> Bandwidth = <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">\"node-bandwidth\"</span>);\n"+
  "<span class=\"hljs-keyword\">var</span> client = <span class=\"hljs-keyword\">new</span> Bandwidth({\n"+
  "    userId    : <span class=\"hljs-string\">\"{{userId}}\"</span>\n"+
  "    apiToken  : <span class=\"hljs-string\">\"{{apiSecret}}\"</span>,\n"+
  "    apiSecret : <span class=\"hljs-string\">\"{{apiToken}}\"</span>\n"+
  "});\n";

  var jsBlock = "code.lang-javascript";

  $(jsBlock).prepend(client);
  $("#jsClient").hide();

  if (bwPageStatus.credsShown) {
    myFunction();
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

<button onclick="addJSClient()" id="jsClient">See Client</button>

```js
var client = new Bandwidth({
    userId    : "YOUR_USER_ID", // <-- note, this is not the same as the username you used to login to the portal
    apiToken  : "YOUR_API_TOKEN",
    apiSecret : "YOUR_API_SECRET"
});
```

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
