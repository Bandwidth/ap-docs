{% method %}
## List available toll-free numbers
Search for available toll free numbers.

For more information about Bandwidth’s toll free phone numbers, see the <a href="https://dev.bandwidth.com/faq/#voice">FAQ</a>. To learn more about MMS on toll-free numbers, see the [FAQ](https://dev.bandwidth.com/faq/messaging/tollfreeMMS.html).



### Request URL

<code class="get">GET</code>`https://api.catapult.inetwork.com/v1/availableNumbers/tollFree?<queryParams>`

---

###Supported Parameters

| Parameter | Description                                                                                                                                                                                                                                | Mandatory |
|:----------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| quantity  | The maximum number of numbers to return (default 10, maximum 5000).                                                                                                                                                                        | No        |
| pattern   | A number pattern that may include letters, digits, and the following wildcard characters:<br> - `?` : matches any single digit<br> - `*` : matches zero or more digits<br>Don’t forget to encode wildcard characters in the requested URL. | No        |

## Properties
| Property       | Description                                                                                                   
|:---------------|:--------------------------------------------------------------------------------------------------------------
| number         | The telephone number in E.164 format.                                                                         
| nationalNumber | The telephone number in a friendly national format.                                                           
| patternMatch   | The telephone number in a friendly national format with some numbers replaced by letters if a pattern was used
| price          | The monthly price for the phone number.


{% common %}
### Example 1 of 1: Search and allocate tollFree number
> To find up to two available toll free numbers that match the pattern "*2?9*", make the following request:

{% sample lang="bash" %}

```bash
curl -v -X GET "https://api.catapult.inetwork.com/v1/availableNumbers/tollFree?pattern=*2%3F9*&quantity=2" -u {token}:{secret} -H "Content-type: application/json"
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
var first = results.First();
Console.WriteLine($"{first.Number} - {first.Price}");
// +1234567890 - 0.1
```

{% sample lang="ruby" %}

```ruby
results = AvailableNumber.search_toll_free(client, {
  :pattern => "*2?9*",
  :quantity => 2
})
first_result = results.next
first_number = first_result[:number]
```
{% common %}
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
