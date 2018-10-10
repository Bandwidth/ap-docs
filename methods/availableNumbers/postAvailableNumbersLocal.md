{% method %}

## Order Local Phone Number
Searches and order available local numbers by location criteria.

<aside class="alert general">
<p>
If you need advanced control over the number ordering process, like managing line features, you can find documentation <a href="https://dev.bandwidth.com/docs/phone-numbers/">here.</a>
</p>
</aside>

For more information about Bandwidth’s local phone numbers, see the <a href="https://dev.bandwidth.com/faq/#voice">FAQ</a>

### Request URL
<code class="post">POST</code>`https://api.catapult.inetwork.com/v1/availableNumbers/local?<queryParams>`

---

### Supported Parameters

| Parameter          | Description                                                                                                                                                                                                                                   | Mandatory |
|:-------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| city               | A city name.                                                                                                                                                                                                                                  | No        |
| state              | A two-letter US state abbreviation ("CA" for California).                                                                                                                                                                                     | `**`      |
| zip                | A 5-digit US ZIP code.                                                                                                                                                                                                                        | `**`      |
| areaCode           | A 3-digit telephone area code.                                                                                                                                                                                                                | `**`      |
| localNumber        | It is defined as the first digits of a telephone number inside an area code for filtering the results. It must have at least 3 digits and the areaCode field must be filled.                                                                  | `***`     |
| inLocalCallingArea | Boolean value to indicate that the search for available numbers must consider overlayed areas. Only applied for localNumber searching.                                                                                                        | `***`     |
| quantity           | The maximum number of numbers to return (default 1, maximum 10).                                                                                                                                                                           | No        |
| pattern            | A number pattern that may include letters, digits, and the following wildcard characters: <br> - `?` : matches any single digit <br> - `*` : matches zero or more digits<br> Don't forget to encode wildcard characters in the requested URL. | No        |

<aside class="notice">
<p>
<code>**</code> You must choose one of state, zip, or areaCode in request.
<code>**</code> state, zip and areaCode are mutually exclusive, you may use only one of them per request.
</p>
</aside>
<aside class="notice">
<p>
<code>***</code> localNumber and inLocalCallingArea only applies for searching numbers in specific areaCode.
</p>
</aside>

{% common %}

### Example 1 of 1: Search and allocate for city/state

> To search and order two available local numbers in the city of Cary, North Carolina, make the following request

{% sample lang="bash" %}

```bash
curl -v -X POST  https://api.catapult.inetwork.com/v1/availableNumbers/local?city=Cary&state=NC&quantity=2 \
  -u {token}:{secret}
```

{% sample lang="js" %}

```js
// Search 2 available local phone numbers with area code 910 and order them

// Promise
client.AvailableNumber.searchAndOrder("local", { areaCode : "910", quantity : 2 }).then(function (numbers) {});

// Callback
client.AvailableNumber.searchAndOrder("local", { areaCode : "910", quantity : 2 }, function (err, numbers) {});
```

{% sample lang="csharp" %}

```csharp
var results = await client.AvailableNumber.SearchAndOrderLocalAsync(
  new LocalNumberQueryForOrder{ AreaCode = "910", Quantity = 2});
var firstResult = results.First();
var number = firstResult.Number;
var numberId = firstResult.Id;
Console.WriteLine($"{numberId} - {number}");
// n-123456 - +1234567890

```

{% sample lang="ruby" %}

```ruby
results = AvailableNumber.search_and_order_local(client, {area_code: '910', quantity: 2})
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
        "price": "0.60",
        "location": "https://.../v1/users/.../phoneNumbers/{numberId1}"
    },
    {
        "number": "{number2}",
        "nationalNumber": "{national_number2}",
        "price": "0.60",
        "location": "https://.../v1/users/.../phoneNumbers/{numberId2}"
    }
]
```
{% endmethod %}
