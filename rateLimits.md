## Rate Limits

All of Bandwidth's endpoints are rate limited.


### Calls and Messages
[`Calls`](methods/calls/postCalls.md) & [`Messages`](methods/messages/postMessages.md) will return a `HTTP 403` when limit is reached.

#### Default Rate Limits
| Type                          | Count | Period (sec) | Sample Period (sec) |
|-------------------------------|-------|--------------|---------------------|
| Outbound Message Per Number   | 1     | 1            | 10                  |
| Outbound Messages Per Account | ∞     | ∞            | ∞                   |
| Outbound Calls Per Number     | 1     | 1            | 10                  |
| Outbound Calls Per Account     | 1     | 1            | 10                  |

#### 403 – LIMIT
| Code                   | Message                                                                                                                                                                     |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| message-rate-limit     | You can send ${0} messages per ${1} seconds calculated as the average over ${2} seconds. Your rate is: ${3}                                                                 |
| multi-message-limit    | The number of messages [${0}] in the multi message request is greater than the limit [${1}]. |
| call-rate-limit        | You can create ${0} calls per ${1} seconds calculated as the average over ${2} seconds. Your rate is: ${3}                                                                  |

#### Sample Message Rate Limit Response
```json
403 Forbidden
Content-Type: application/json
{
  "category": "limit",
  "code": "message-rate-limit",
  "message": "You can send 1 messages per 1 seconds, calculated as the average over 10 seconds. Your rate is: 1.1",
  "details": [
    {
      "name": "requestMethod",
      "value": "POST"
    },
    {
      "name": "remoteAddress",
      "value": "216.82.234.65"
    },
    {
      "name": "requestPath",
      "value": "users/u-asdf/messages"
    }
  ]
}
```


#### Sample Call Rate Limit Response

```json
403 Forbidden
Content-Type: application/json
{
  "category": "limit",
  "code": "call-rate-limit",
  "message": "You can create 1 calls per 1 seconds, calculated as the average over 10 seconds. Your rate is: 1.1",
  "details": [
    {
      "name": "requestMethod",
      "value": "POST"
    },
    {
      "name": "remoteAddress",
      "value": "216.82.234.65"
    },
    {
      "name": "requestPath",
      "value": "users/u-asdf/calls"
    }
  ]
}
```


### All other endpoints

Every other [`endpoint`](/methods/restApi.md) is rate limited and will return a `HTTP 429` when the limit is reached.

If this response code is returned, your API call was not executed due to temporary rate limiting. In addition to `HTTP 429`, we will also return a X-RateLimit-Reset HTTP header. This contains a timestamp after which your rate limit should be cleared; this time is represented as a UNIX timestamp (also known as an Epoch timestamp).


#### Sample `HTTP 429` Response

```json
429 Too Many Requests
X-RateLimit-Reset: 1479308598680
{
  "category": "too-many-requests",
  "code": "rate-limit-reached",
  "details": [
    {
      "name": "rateLimitResetTime",
      "value": "1479308598680"
    },
    {
      "name": "requestMethod",
      "value": "GET"
    },
    {
      "name": "remoteAddress",
      "value": "0:0:0:0:0:0:0:1"
    },
    {
      "name": "requestPath",
      "value": "users/{{userId}}/account"
    }
  ]
}
```

### Hitting the Rate Limits Often?
If you do experience unexpected issues with Application Platform API rate limiting, or just have questions for us, please contact [Bandwidth support](https://support.bandwidth.com/access/unauthenticated).

