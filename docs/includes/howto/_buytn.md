## Buy Phone Number
There are 3 separate ways to buy a phone number:
1. Login and use the Developer Console UI
2. `GET` on the [`availableNumbers`](#get-availablenumbers-local) resource, followed by a `POST` to the [`phoneNumbers`](#example-allocate-a-phone-number-to-your-account) resource
3. `POST` on the [`availableNumbers`](#example-search-and-allocate-for-city-state) resource

### Developer Console

Go to the My Numbers tab and click the Get New Numbers link. Fill in the search criteria field and click the Search button.

![step1](images/howto/buytn/step1.png)

From the list of numbers that is returned, check the box next to the numbers you want to buy and click the Get Numbers button.

![step2](images/howto/buytn/step2.png)

The numbers you selected are now allocated to your account (you’ve purchased them).

![step3](images/howto/buytn/step3.png)

### Search then Order
```shell
curl -v -X GET  https://api.catapult.inetwork.com/v1/availableNumbers/local?city=Cary&state=NC&pattern=*2%3F9*&quantity=2 \
  -u {token}:{secret} \
  -H "Content-type: application/json" \
```

```js
// Search available local phone numbers with area code 910

// Promise
client.AvailableNumber.search("local", { areaCode : "910", quantity : 1 })
.then(function (numbers) {
	return client.PhoneNumber.create({
		number: numbers[0].number,
		name: "My 910 Number",
		applicationId: "a-1234"
	});
})
.then(function (number) {
	console.log(number.id);
});
```

```csharp
var results = await client.AvailableNumber.SearchLocalAsync(new LocalNumberQuery{ AreaCode = "910", Quantity = 1});
var number = await client.PhoneNumber.CreateAsync(new CreatePhoneNumberData {
	Number = results[0].number,
	Name = "My 910 Number",
	ApplicationId = "a-1234"
});
```

```ruby
results = AvailableNumber.search_local(client, {:area_code => "910", :quantity => 1})
puts("Found numbers: #{(numbers.map {|n| n[:number]}).join(', ')}")
number = PhoneNumber.create(client, {:number => numbers[0][:number]})
puts("Now you are owner of number #{number.number} (id #{number.id})")
```

### Search and Order

```js
// Search 2 available local phone numbers with area code 910 and order them

// Promise
client.AvailableNumber.searchAndOrder("local", { areaCode : "910", quantity : 2 })
.then(function (numbers) {
	numbers.forEach(function (number) {
		console.log(number.id);
	})
});
```

```csharp
var results = await client.AvailableNumber.SearchAndOrderLocalAsync(
  new LocalNumberQueryForOrder{ AreaCode = "910", Quantity = 2});
```

```ruby
##
# coming soon
##
```
