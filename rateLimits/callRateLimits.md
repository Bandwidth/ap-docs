# Calls Rate Limits
When an outbound [`Call`](../methods/calls/postCalls.md) request is rate limited, Bandwidth will return a `HTTP 403` when limit is reached.

### Default Rate Limits
| Type                          | Count    | Period (sec) | Sample Period (sec) |
|:------------------------------|:---------|:-------------|:--------------------|
| Outbound Calls Per Number     | 1        | 1            | 10                  |
| Outbound Calls Per Account    | 1        | 1            | 10                  |

### 403 – LIMIT
| Code                | Message                                                                                                     |
|:--------------------|:------------------------------------------------------------------------------------------------------------|
| call-rate-limit     | You can create ${0} calls per ${1} seconds calculated as the average over ${2} seconds. Your rate is: ${3}  |

### Sample Call Rate Limit Response

```http
Status: 403 Forbidden
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

