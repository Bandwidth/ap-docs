# Rate Limits

All of Bandwidth's endpoints are rate limited. ⚠️ Please note that Rate limts are subject to change. You should expect and handle either an `HTTP 429` or `HTTP 403` response for each request to Bandwidth's API.

Endpoints that access resources; such as [listing messages](methods/messages/getMessages.md), [listing transactions](methods/account/getAccountTransactions.md), or [creating a new application](methods/applications/postApplications.md) are rate limited at the API level and will return an `HTTP 429` error when the rate limit is exceeded.

The only two endpoints that behave differently are <code class="post">POST</code> requests to create new SMS/MMS messages or create a new phone call and will receive a `HTTP 403` error when the rate limit is exceeded.

## Rate Limit Documentation

| Type                                                                    | Description                                                  | Error Code |
|:------------------------------------------------------------------------|:-------------------------------------------------------------|:-----------|
| [Outbound Call Creation Rate Limits](rateLimits/callRateLimits.md)      | Learn about how outbound phone calls are rate limited.       | `HTTP 403` |
| [Outbound Message Sending Rate Limits](rateLimits/messageRateLimits.md) | Learn about how outbound sms & mms messages are rate limited | `HTTP 403` |
| [Everything else](rateLimits/resourceRateLimits.md)                     | Learn about how all other endpoints are rate limited         | `HTTP 429` |
