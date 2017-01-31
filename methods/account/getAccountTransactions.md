{% method %}
## Fetch Account Transactions
Get the transactions from the user's account.

### Request Url
<code class="get">GET</code>`https://api.catapult.inetwork.com/v1/users/{userId}/account/transactions`

---

### Query Parameters
| Parameter | Description                                                                                                                                                                 | Mandatory |
|:----------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| maxItems  | Limit the number of transactions that will be returned.                                                                                                                     | No        |
| toDate    | Return only transactions that are newer than the parameter. Format: "yyyy-MM-dd'T'HH:mm:ssZ"                                                                                | No        |
| fromDate  | Return only transactions that are older than the parameter. Format: "yyyy-MM-dd'T'HH:mm:ssZ"                                                                                | No        |
| type      | Return only transactions that are this type.                                                                                                                                | No        |
| page      | Used for pagination to indicate the page requested for querying a list of transactions. If no value is specified the default is 0.                                          | No        |
| size      | Used for pagination to indicate the size of each page requested for querying a list of transactions. If no value is specified the default value is 25 (maximum value 1000). | No        |
| number    | Return only transactions that are from the specified number. (coming soon)                                                                                                  | No        |

### Transaction Properties

| PROPERTY    | DESCRIPTION                                                                                                                                                                 |
|:------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| id          | The unique identifier for the transaction.                                                                                                                                  |
| time        | The time the transaction was processed.                                                                                                                                     |
| amount      | The transaction amount in dollars, as a string; the currency symbol is not included.                                                                                        |
| type        | The type of transaction.                                                                                                                                                    |
| units       | The number of product units the transaction charged or credited.                                                                                                            |
| productType | The product the transaction was related to (not all transactions are related to a product).                                                                                 |
| number      | The phone number the transaction was related to (not all transactions are related to a phone number).                                                                       |
| page        | Used for pagination to indicate the page requested for querying a list of transactions. If no value is specified the default is 0.                                          |
| size        | Used for pagination to indicate the size of each page requested for querying a list of transactions. If no value is specified the default value is 25 (maximum value 1000). |

### Transaction Types
| TYPE          | DESCRIPTION                                                                                                         |
|:--------------|:--------------------------------------------------------------------------------------------------------------------|
| charge        | A charge for the use of a service or resource (for example, phone calls, SMS messages, phone numbers).              |
| payment       | A payment you made to increase your account balance.                                                                |
| credit        | An increase to your account balance that you did not pay for (for example, an initial account credit or promotion). |
| auto-recharge | An automated payment made to keep your account balance above the minimum balance you configured.                    |

### Product Types

| Type                       | Description                                                                 |
|:---------------------------|:----------------------------------------------------------------------------|
| local-number-per-month     | The monthly charge for a local phone number.                                |
| toll-free-number-per-month | The monthly charge for a toll-free phone number.                            |
| sms-in                     | A SMS message that came in to one of your numbers.                          |
| sms-out                    | A SMS message that was sent outbound one of your numbers.                   |
| mms-in                     | A MMS message that was sent to one of your numbers.                         |
| mms-out                    | A MMS message that was sent outbound one of your numbers.                   |
| call-in                    | An inbound phone call to one of your numbers.                               |
| call-out                   | An outbound phone call that was created by your app.                        |
| sip-call-in                | A phone call that came inbound via SIP to one of your registered endpoints. |
| sip-call-out               | A phone call made outbound to a SIP address.                                |
| transcription              | A transcription of a recorded call.                                         |
| cnam-search                | A CNAM lookup request for a phone number.                                   |

{% common %}
### Example: Get transactions

{% sample lang="bash" %}

```bash
curl -v -X GET  https://api.catapult.inetwork.com/v1/users/{user-id}/account/transations \
  -u {{apiToken}}:{secret} \
  -H "Content-type: application/json" \
```

{% sample lang="js" %}

```javascript
//Promise
client.Account.getTransactions()
	.then(function (response) {
		console.log(response.transactions);
		if(response.hasNextPage) {
			return response.getNextPage();
		}
		else {
			return {transactions: []};
		}
	})
	.then(function(response) {
		console.log(response.transactions);
	});
```

{% sample lang="csharp" %}

```csharp
var transactions = client.Account.GetTransactions();
var firstTransaction = transactions.First();
Console.WriteLine($"{firstTransaction.Type} - ${firstTransaction.Amount}");
// charge - 0.00750
```

{% sample lang="ruby" %}

```ruby
transactions = Account.get_transactions(client)
first_transaction = transactions.next
first_transaction_amount = first_transaction[:amount]
```

{% common %}
The above command returns JSON structured like this:

```json
[
  {
    "id": "{transactionId1}",
    "time": "2013-02-21T13:39:09.122Z",
    "amount": "0.00750",
    "type": "charge",
    "units": "1",
    "productType": "sms-out",
    "number": "{number}"
  },
  {
    "id": "{transactionId2}",
    "time": "2013-02-21T13:37:42.079Z",
    "amount": "0.00750",
    "type": "charge",
    "units": "1",
    "productType": "sms-out",
    "number": "{number}"
  }
]
```

### Example: Get transactions by date

{% sample lang="bash" %}

```bash
curl -v -X GET  https://api.catapult.inetwork.com/v1/users/{user-id}/account/transations?fromDate=2013-02-21T13:38:00 \
  -u {{apiToken}}:{secret} \
  -H "Content-type: application/json" \
```

{% sample lang="js" %}

```javascript
//Get transactions filtering by date
//Promise
var params = {
	fromDate: "2013-02-21T13:38:00"
};
client.Account.getTransactions(params)
	.then(function (response) {
		console.log(response.transactions);
		if(response.hasNextPage) {
			return response.getNextPage();
		}
		else {
			return {transactions: []};
		}
	})
	.then(function(response) {
		console.log(response.transactions);
	});
```

{% sample lang="csharp" %}

```csharp
var transactions = await client.Account.GetTransactions(
  new AccountTransactionQuery {
    FromDate = new DateTime(2013, 2, 21, 13, 38, 0, 0, DateTimeKind.Utc)
  }
);
```

{% sample lang="ruby" %}

```ruby
transactions = Account.get_transactions(client, {:from_date => "2013-02-21T13:38:00"})
```

{% common %}
The above command returns JSON structured like this:

```json
[
  {
    "id": "{transactionId}",
    "time": "2013-02-21T13:39:09.122Z",
    "amount": "0.00750",
    "type": "charge",
    "units": "1",
    "productType": "sms-out",
    "number": "{number}"
  }
]
```

### Example: Get transactions filtering by date

{% sample lang="bash" %}

```bash
curl -v -X GET  https://api.catapult.inetwork.com/v1/users/{user-id}/account/transations?toDate=2013-02-21T13:40:00&fromDate=2013-02-21T13:38:00 \
  -u {{apiToken}}:{secret} \
  -H "Content-type: application/json" \
```

{% sample lang="js" %}

```javascript
//Get transactions filtering by date
//Promise
var params = {
	fromDate: "2013-02-21T13:38:00",
	toDate:   "2013-02-21T13:40:00"
};
client.Account.getTransactions(params)
	.then(function (response) {
		console.log(response.transactions);
		if(response.hasNextPage) {
			return response.getNextPage();
		}
		else {
			return {transactions: []};
		}
	})
	.then(function(response) {
		console.log(response.transactions);
	});
  ```

{% sample lang="csharp" %}

```csharp
var transactions = client.Account.GetTransactions(new AccountTransactionQuery {
  FromDate = new DateTime(2013, 2, 21, 13, 38, 0, 0, DateTimeKind.Utc),
  ToDate = new DateTime(2013, 2, 21, 13, 40, 0, 0, DateTimeKind.Utc)
});
```
{% sample lang="ruby" %}

```ruby
transactions = Account.get_transactions(client, {:from_date => "2013-02-21T13:38:00", :to_date => "2013-02-21T13:40:00"})
```
{% common %}

The above command returns JSON structured like this:

```json
[
  {
    "id": "{transactionId}",
    "time": "2013-02-21T13:39:09.122Z",
    "amount": "0.00750",
    "type": "charge",
    "units": "1",
    "productType": "sms-out",
    "number": "{number}"
  }
]
```


### Example: Get transactions limiting result

{% sample lang="bash" %}

```bash
curl -v -X GET  https://api.catapult.inetwork.com/v1/users/{user-id}/account/transations?maxItems=1 \
  -u {{apiToken}}:{secret} \
  -H "Content-type: application/json" \
```
{% sample lang="js" %}

```js
//Get transactions limiting result
//Promise
var params = {
	maxItems: 1
};
client.Account.getTransactions(params)
	.then(function (response) {
		console.log(response.transactions);
		if(response.hasNextPage) {
			return response.getNextPage();
		}
		else {
			return {transactions: []};
		}
	})
	.then(function(response) {
		console.log(response.transactions);
	});
  ```

{% sample lang="csharp" %}

```csharp
var transactions = client.Account.GetTransactions(new AccountTransactionQuery {
  MaxItem = 1
});
```

{% sample lang="ruby" %}

```ruby
transactions = Account.get_transactions(client, {:max_item => 1})
```

{% common %}
The above command returns JSON structured like this:

```json
[
  {
    "id": "{transactionId}",
    "time": "2013-02-21T13:39:09.122Z",
    "amount": "0.00750",
    "type": "charge",
    "units": "1",
    "productType": "sms-out",
    "number": "{number}"
  }
]
```

### Example: Get transactions of payment type

{% sample lang="bash" %}

```bash
curl -v -X GET  https://api.catapult.inetwork.com/v1/users/{user-id}/account/transations?type=Payment \
  -u {{apiToken}}:{secret} \
  -H "Content-type: application/json" \
```

{% sample lang="js" %}

```js
//Get transactions of `payment` type
//Promise
var params = {
	type: "Payment"
};
client.Account.getTransactions(params)
	.then(function (response) {
		console.log(response.transactions);
		if(response.hasNextPage) {
			return response.getNextPage();
		}
		else {
			return {transactions: []};
		}
	})
	.then(function(response) {
		console.log(response.transactions);
	});
  ```

{% sample lang="csharp" %}

```csharp
var transactions = client.Account.GetTransactions(new AccountTransactionQuery {
  Type = AccountTransactionType.Payment
});
```

{% sample lang="ruby" %}

```ruby
transactions = Account.get_transactions(client, {:type => "payment"})
```
{% common %}

The above command returns JSON structured like this:

```json
[
  {
    "id": "{transactionId1}",
    "time": "2013-02-15T18:43:50.602Z",
    "amount": "1000.00000",
    "type": "payment",
    "units": "0"
  },
  {
    "id": "{transactionId2}",
    "time": "2013-02-05T14:56:51.279Z",
    "amount": "5000.00000",
    "type": "payment",
    "units": "0"
  }
]
```

{% endmethod %}
