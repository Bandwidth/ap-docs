{% method %}
## List available local numbers
Searches for available local numbers by location or pattern criteria.

### Request URL

<code class="get">GET</code> `https://api.catapult.inetwork.com/v1/availableNumbers/local?<queryParams>`

### Supported Parameters

| Parameter          | Description                                                                                                                                                                                                                           | Mandatory |
|:-------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| city               | A city name.                                                                                                                                                                                                                          | No        |
| state              | A two-letter US state abbreviation ("CA" for California).                                                                                                                                                                             | **        |
| zip                | A 5-digit US ZIP code.                                                                                                                                                                                                                | **        |
| areaCode           | A 3-digit telephone area code.                                                                                                                                                                                                        | **        |
| localNumber        | It is defined as the first digits of a telephone number inside an area code for filtering the results. It must have at least 3 digits and the areaCode field must be filled.                                                          | ***       |
| inLocalCallingArea | Boolean value to indicate that the search for available numbers must consider overlayed areas. Only applied for localNumber searching.                                                                                                | ***       |
| quantity           | The maximum number of numbers to return (default 10, maximum 5000).                                                                                                                                                                   | No        |
| pattern            | A number pattern that may include letters, digits, and the following wildcard characters: <br> ? : matches any single digit <br> * : matches zero or more digits<br> Don't forget to encode wildcard characters in the requested URL. | No        |

<aside class="notice">
** state, zip and areaCode are mutually exclusive, you may use only one of them per request.
</aside>
<aside class="notice">
*** localNumber and inLocalCallingArea only applies for searching numbers in specific areaCode.
</aside>

## Properties

| Property       | Description                                                                                                                                                                          |
|:---------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| number         | The telephone number in E.164 format.                                                                                                                                                |
| nationalNumber | The telephone number in a friendly national format.                                                                                                                                  |
| patternMatch   | The telephone number in a friendly national format with some numbers replaced by letters if a pattern was used to search the number.                                                 |
| city           | The city of the phone number.                                                                                                                                                        |
| lata           | Local access and transport area (LATA), represents an area within which a regional operating company is permitted to offer exchange telecommunications and exchange access services. |
| rateCenter     | The rate center is a term used to identify a telephone local exchange service area.                                                                                                  |
| state          | The state of the phone number.                                                                                                                                                       |
| price          | The monthly price for the phone number.                                                                                                                                              |

{% common %}
### Example: Search for City/State and Pattern

>To find up to two available local numbers in the city of Cary, North Carolina, that match the pattern "*2?9*", make the following request:

{% sample lang="bash" %}

```bash
curl -v -X GET  https://api.catapult.inetwork.com/v1/availableNumbers/local?city=Cary&state=NC&pattern=*2%3F9*&quantity=2 \
  -u {token}:{secret} \
  -H "Content-type: application/json" \
```

{% sample lang="js" %}

```js
// Search 3 available local phone numbers with area code 910

// Promise
client.AvailableNumber.search("local", { areaCode : "910", quantity : 3 }).then(function (numbers) {});

// Callback
client.AvailableNumber.search("local", { areaCode : "910", quantity : 3 }, function (err, numbers) {});
```

{% sample lang="csharp" %}

```csharp
var results = await client.AvailableNumber.SearchLocalAsync(new LocalNumberQuery{ AreaCode = "910", Quantity = 3});
var firstNumber = results.First().Number;
```

{% sample lang="ruby" %}
```ruby
results = AvailableNumber.search_local(client, {:area_code => "910", :quantity => 3})
first_result = results.next
first_number = first_result[:number]
```

{% common %}
> The above command returns JSON structured like this:

```json
[
  {
    "number": "{number1}",
    "nationalNumber": "{national_number1}",
    "patternMatch": "          2 9 ",
    "city": "CARY",
    "lata": "426",
    "rateCenter": "CARY",
    "state": "NC",
    "price": "0.60"
  },
  {
    "number": "{number2}",
    "nationalNumber": "{national_number2}",
    "patternMatch": "          2 9 ",
    "city": "CARY",
    "lata": "426",
    "rateCenter": "CARY",
    "state": "NC",
    "price": "0.60"
  }
]
```

### Example: Search with areaCode and localNumber
> To find up to two available local numbers in the area code 919 which the numbers begins with 867 and inside overlayed areas, make the following request:

{% sample lang="bash" %}

```bash
curl -v -X GET  https://api.catapult.inetwork.com/v1/availableNumbers/local?city=Cary&state=NC&pattern=*2%3F9*&quantity=2 \
  -u {token}:{secret} \
  -H "Content-type: application/json" \
```

{% sample lang="js" %}

```js
//coming soon
```

{% sample lang="csharp" %}

```csharp
var results = await client.AvailableNumber.SearchLocalAsync(
  new LocalNumberQuery{
    City = "Cary",
    State = "NC",
    Pattern = "*2?9*",
    Quantity = 2
  }
);
var firstNumber = results.First().Number;
```

{% sample lang="ruby" %}

```ruby
results = AvailableNumber.search_local(client, {
  :city => "Cary",
  :state => "NC",
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
        "number": "{number1}",
        "nationalNumber": "{national_number1}",
        "city": "RALEIGH",
        "rateCenter": "RALEIGH",
        "state": "NC",
        "price": "0.60"
    },
    {
        "number": "{number2}",
        "nationalNumber": "{national_number2}",
        "city": "RALEIGH",
        "rateCenter": "RALEIGH",
        "state": "NC",
        "price": "0.60"
    }
]
```
{% endmethod %}
