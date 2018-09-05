{% method %}

## Import Phone Number
Import a previously orderd phone number from the Bandwidth Phone Number API so you can use it to make and receive calls and send and receive messages with the Voice And Messaing APIs. For more information about a new phone number, see the <a href="https://dev.bandwidth.com/faq/#Phone">FAQ</a>


### Request URL

<code class="post">POST</code>`https://api.catapult.inetwork.com/v1/users/{userId}/phoneNumbers`

| Parameter               | Description                                                                                                                                                 | Mandatory |
|:------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| `number`                | Dashboard Phone Number being imported. E.164 format.                                                                                                        | Yes       |
| `name`                  | A name you choose for this number.                                                                                                                          | No        |
| `applicationId`         | HTTP Application you want the phone number to be registered to for inbound messages.                                                                        | No        |
| `provider.providerName` | Always use this provider “bandwidth-dashboard”                                                                                                              | Yes       |
| `provider.properties`   | The details associated with the provider from which you're importing the Phone Number                                                                       | Yes       |
| `properties.accountId`  | This ID is associated with your Bandwidth Dashboard account. Note: If you don’t know your Provider Account ID, please open a ticket with our support group. | Yes       |
| `properties.userName`   | This is your user name used to log into the Bandwidth Dashboard.                                                                                            | Yes       |
| `properties.password`   | This is your password used to log into the Bandwidth Dashboard.                                                                                             | Yes       |

### Example: Import Numbers (One at a time)

```http
POST https://api.catapult.inetwork.com/v1/users/{{UserId}}/phoneNumbers HTTP/1.1
Content-Type: application/json; charset=utf-8
Authorization: {apiToken:apiSecret}

{
  "number"        : "+14352154439",
  "applicationId" : "{{applicationId}}",
  "name"          : "text messaging TN",
  "provider"      : {
    "providerName" : "bandwidth-dashboard",
    "properties"   : {
      "accountId" : "9999999",
      "userName"  : "wileCoyote",
      "password"  : "catchThatBird"
    }
  }
}
```

#### Example Respone: 201 - Created

The **numberId** is returned in the **Location** Header.

```http
Status: 201 Created
Location: https://api.catapult.inetwork.com/v1/users/{{UserId}}/phoneNumbers/n-id3x6rblp4jrkih2u7zxjdy
```

{% common %}

### Example: Import Number (One at a time)

{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/phoneNumbers \
  -u {token}:{secret} \
  -H "Content-type: application/json" \
  -d \
  '
  {
    "number"        : "+14352154439",
    "applicationId" : "{{applicationId}}",
    "name"          : "text messaging TN",
    "provider"      : {
      "providerName" : "bandwidth-dashboard",
      "properties"   : {
        "accountId" : "9999999",
        "userName"  : "wileCoyote",
        "password"  : "catchThatBird"
      }
    }
  }'
```

{% sample lang="js" %}

```js

var importNumberPayload = {
  "number"        : "+14352154439",
  "applicationId" : "{{applicationId}}",
  "name"          : "text messaging TN",
  "provider"      : {
    "providerName" : "bandwidth-dashboard",
    "properties"   : {
      "accountId" : "9999999",
      "userName"  : "wileCoyote",
      "password"  : "catchThatBird"
    }
  }
};


client.PhoneNumber.create(importNumberPayload)
.then(function(number){
  console.log(number);
});
```


{% sample lang="csharp" %}

```csharp

```

{% sample lang="php" %}

```php

```

{% common %}


> The above command returns HTTP Header structured like this:

```
HTTP/1.1 201 Created
Location: /v1/users/{userId}/phoneNumbers/{numberId}
```

{% endmethod %}
