# Errors

These errors are specific to Bandwidth Messaging 2.0.  For all other errors, check the [error doc](../../errors.md).

| Error Code | Type                               | Description                                               |
|:-----------|:-----------------------------------|:----------------------------------------------------------|
| `400`      | [Bad Request](badRequest.md)       | Check your request and try again                          |
| `401`      | [Unauthorized](unauth.md)          | Check your userId, API Token, API Secret, and permissions |
| `403`      | [Forbidden](forbidden.md)          | Check your userId, API Token, API Secret, and permissions |
| `429`      | [Too Many Requests](tooManyReq.md) | You have exceeded your [rate limit](../../rateLimits.md)  |
