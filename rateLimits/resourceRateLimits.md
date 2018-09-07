# All Other Endpoints

Every other [`endpoint`](/methods/restApi.md) is rate limited and will return a `HTTP 429` when the limit is reached.

If this response code is returned, your API call was not executed due to temporary rate limiting. In addition to `HTTP 429`, we will also return a `X-RateLimit-Reset` HTTP header. This contains a timestamp after which your rate limit should be cleared; this time is represented as a UNIX timestamp (also known as an Epoch timestamp).

## Default Rate Limits

⚠️ Please note that Rate limts are subject to change. You should expect and handle an `HTTP 429` response for each request to Bandwidth's API.

| Endpoint                                                                                                                       | Limit | Time Period (ms) |
|:-------------------------------------------------------------------------------------------------------------------------------|:------|:-----------------|
| [`/account`](/methods/account/account.md)                                                                                       | 1     | 1000             |
| [`/applications`](/methods/applications/applications.md)                                                                        | 1     | 1000             |
| [`/availableNumbers`](/methods/availableNumbers/availableNumbers.md)                                                            | 1     | 1000             |
| [`/bridges`](/methods/bridges/bridges.md)                                                                                       | 1     | 1000             |
| [`/calls`](/methods/calls/calls.md) <br><br> ⚠️ **For outbound calls see the [call rate limit](callRateLimits.md) doc**         | 1     | 1000             |
| [`/conferences`](/methods/conferences/conferences.md)                                                                           | 1     | 1000             |
| [`/domains`](/methods/domains/domains.md)                                                                                       | 1     | 1000             |
| [`/endpoints`](/methods/endpoints/endpoints.md)                                                                                 | 1     | 1000             |
| [`/errors`](/methods/errors/errors.md)                                                                                          | 1     | 1000             |
| [`/media`](/methods/media/media.md)                                                                                             | 1     | 1000             |
| [`/messages`](/methods/messages/messages.md)<br><br> ⚠️ **For sending messages [message rate limit](messageRateLimits.md) doc** | 1     | 1000             |
| [`/numberInfo`](/methods/numberInfo/numberInfo.md)                                                                              | 1     | 1000             |
| [`/phoneNumbers`](/methods/phoneNumbers/phoneNumbers.md)                                                                        | 1     | 1000             |
| [`/recordings`](/methods/recordings/recordings.md)                                                                              | 1     | 1000             |
| [`/recordings/{id}/transcriptions`](/methods/transcriptions/transcriptions.md)                                                  | 1     | 1000             |

### Sample `HTTP 429` Response

```http
Status: 429 Too Many Requests
X-RateLimit-Reset: 1479308598680
Content-Type: application/json

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

## Handling 429 Errors - `X-RateLimit-Reset`

Bandwidth recommends retry logic based on the `X-RateLimit-Reset` value passed in the header.  The high-level logic looks something like:

1. Try to fetch [account transactions](../methods/account/getAccountTransactions.md)
2. If success: 🎉
3. If `429`:
4. Calculate the current [Epoch Time](https://en.wikipedia.org/wiki/Unix_time)
  * [Python](https://docs.python.org/3.6/library/time.html)
  * [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now)
  * [Java](https://docs.oracle.com/javase/8/docs/api/java/time/Instant.html)
  * [PHP](http://php.net/manual/en/function.time.php)
  * <a href="https://msdn.microsoft.com/en-us/library/system.datetimeoffset.tounixtimeseconds(v=vs.110).aspx">C#</a>
5. Calculate the time to wait in MS (`X-RateLimit-Reset` - `Current-Time` = `Time-to-Wait`)
6. Wait the calculated time
7. Go back to step #1

