{% method %}
## GET availableNumbers/tollFree

###Supported Parameters

| Parameter | Description                                                                                                                                                                                                                        | Mandatory |
|:----------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| quantity  | The maximum number of numbers to return (default 10, maximum 5000).                                                                                                                                                                | No        |
| pattern   | A number pattern that may include letters, digits, and the following wildcard characters:<br>? : matches any single digit<br> \* : matches zero or more digits<br>Don’t forget to encode wildcard characters in the requested URL. | No        |

{% common %}
### Example: Search and allocate tollFree number
> To find up to two available toll free numbers that match the pattern "*2?9*", make the following request:

{% sample lang="bash" %}
```bash
curl -v -X GET  https://api.catapult.inetwork.com/v1/availableNumbers/tollFree?pattern=*2%3F9*&quantity=2 \
  -u {token}:{secret} \
  -H "Content-type: application/json" \
```

{% sample lang="js" %}

```js
//Promise
client.AvailableNumber.search("tollFree", {
	quantity : 2,
	pattern: "*2?9*"
 })
.then(function (numbers) {
	console.log(numbers)
});

// Callback
client.AvailableNumber.search("tollFree", {
	quantity : 2,
	pattern: "*2?9*" },
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
var results = await client.AvailableNumber.SearchTollFreeAsync(
  new TollFreeNumberQuery{ Pattern = "*2?9*", Quantity = 2}
);
```

{% sample lang="ruby" %}
```ruby
results = AvailableNumber.search_toll_free(client, {
  :pattern => "*2?9*",
  :quantity => 2
})
```

> The above command returns JSON structured like this:

```json
[
  {
    "number":"{number1}",
    "nationalNumber":"{national_number1}",
    "patternMatch":"        2  9  ",
    "price":"2.00"
  },
  {
    "number":"{number2}",
    "nationalNumber":"{national_number2}",
    "patternMatch":"          2 9 ",
    "price":"2.00"
  }
]
```
{% endmethod %}
