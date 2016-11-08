{% method %}

## Order Toll Free Phone Number
Searches and order available Toll Free numbers.

### Request URL
<code class="post">POST</code>`https://api.catapult.inetwork.com/v1/availableNumbers/tollFree`

---

### Supported Parameters

| Parameter | Description                                                                      | Mandatory |
|:----------|:---------------------------------------------------------------------------------|:----------|
| quantity  | The maximum quantity of numbers for searching and order (default 1, maximum 10). | No        |

{% common %}

### Example: Search and activate toll free phone number
> To search and order two available toll free numbers, make the following request:

{% sample lang="bash" %}

```bash
curl -v -X POST  https://api.catapult.inetwork.com/v1/availableNumbers/tollFree?quantity=2 \
  -u {token}:{secret} \
  -H "Content-type: application/json" \
```

{% sample lang="js" %}


```js
//Search and order tollfree numbers
//Promise
client.AvailableNumber.searchAndOrder("tollFree", {
	quantity : 2 })
.then(function (numbers) {
	console.log(numbers)
});

// Callback
client.AvailableNumber.searchAndOrder("tollFree", {
	quantity : 2 },
	function (err, numbers) {
		if(err) {
			console.log(err);
		}
		else {
			console.log(numbers);
		}
	});
  ```


{% sample lang="csharp" %}

```csharp
var results = await client.AvailableNumber.SearchAndOrderTollFreeAsync(
  new TollFreeNumberQueryForOrder{Quantity = 2}
);
var firstResult = results.First();
var number = firstResult.Number;
var numberId = firstResult.Id;
```
{% sample lang="ruby" %}


```ruby
results = AvailableNumber.search_and_order_toll_free(client, {quantity: 2})
first_result = results.next
number = first_result[:number]
number_id = first_result[:id]

```

{% common %}

> The above command returns a `201` response JSON structured like this:

```json
[
    {
        "number": "{number1}",
        "nationalNumber": "{national_number1}",
        "price": "2.00",
        "location": "https://.../v1/users/.../phoneNumbers/{numberId1}"
    },
    {
        "number": "{number2}",
        "nationalNumber": "{national_number2}",
        "price": "2.00",
        "location": "https://.../v1/users/.../phoneNumbers/{numberId2}"
    }
]
```
{% endmethod %}
