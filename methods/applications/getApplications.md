{% method %}

## List Applications
Get a list of your applications

### Request URL

<code class="get">GET</code>`https://api.catapult.inetwork.com/v1/users/{userId}/applications/{applicationId}`


### Supported Parameters
| Parameter | Description                                                                                                                                                                  | Mandatory |
|:----------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| page      | Used for pagination to indicate the page requested for querying a list of applications. If no value is specified the default is 0.                                           | No        |
| size      | Used for pagination to indicate the size of each page requested for querying a list of applications. If no value is specified the default value is 25\. (Maximum value 1000) | No        |

## Properties
| Property                          | Description                                                                                                                                                                                                 |
|:----------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| id                                | The unique identifier for the application.                                                                                                                                                                  |
| name                              | A name you choose for this application.                                                                                                                                                                     |
| incomingCallUrl                   | A URL where call events will be sent for an inbound call. This is the endpoint where the Application Platform will send all call events. Either incomingCallUrl or incomingMessageUrl is required.          |
| incomingCallUrlCallbackTimeout    | Determine how long should the platform wait for incomingCallUrl's response before timing out in milliseconds.                                                                                               |
| incomingCallFallbackUrl           | The URL used to send the callback event if the request to incomingCallUrl fails.                                                                                                                            |
| callbackHttpMethod                | Determine if the callback event should be sent via HTTP GET or HTTP POST. Values are "get" or "post", default: "post".                                                                                      |
| autoAnswer                        | Determines whether or not an incoming call should be automatically answered. Default value is 'true'.                                                                                                       |
| incomingMessageUrl                | A URL where message events will be sent for an inbound message. This is the endpoint where the Application Platform will send all message events. Either incomingMessageUrl or incomingCallUrl is required. |
| incomingMessageUrlCallbackTimeout | Determine how long should the platform wait for incomingMessageUrl's response before timing out in milliseconds.                                                                                            |
| incomingMessageFallbackUrl        | The URL used to send the callback event if the request to incomingMessageUrl fails.                                                                                                                         |

{% common %}

### Example: List your applications.

{% sample lang="bash" %}

```bash
curl -v -X GET  https://api.catapult.inetwork.com/v1/users/{user-id}/account/applications \
  -u {token}:{secret} \
  -H "Content-type: application/json" \
```

{% sample lang="js" %}

```js
//Promise
client.Application.list()
.then(function (response) {
	console.log(response.applications);
	if(response.hasNextPage) {
		return response.getNextPage();
	}
	else {
		return {applications: []};
	}
})
.then(function(response) {
	console.log(response.applications);
});
```

{% sample lang="csharp" %}

```csharp
var applications = client.Application.List();
var firstApplicationName = applications.First().Name;
```

{% sample lang="ruby" %}

```ruby
list = Application.list(client)
first_application = list.next
first_application_name = first_application[:name]
```

{% common %}

> The above command returns JSON structured like this:

```json
[
  {
    "id": "{applicationId}",
    "name": "MyFirstApp",
    "incomingCallUrl": "http://example.com/calls.php",
    "incomingMessageUrl": "http://example.com/messages.php",
    "autoAnswer": true
  },
  {
    "id": "{applicationId}",
    "name": "MySecondApp",
    "incomingCallUrl": "http://example.com/app2/calls.php",
    "incomingMessageUrl": "http://example.com/app2/messages.php",
    "autoAnswer": false
  }
]
```
{% endmethod %}

