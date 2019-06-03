# Changes to Bandwidth's Rate Limits on July 1st, 2019

Note: These rate limits will be live on July 1st, 2019. Information for the current rate limits can be found [here](../rateLimits.md)

| Endpoint          | New Rate Limit Category              | 
|:---|:---|
| POST /v1/users/u-id/phoneNumbers | Order Number Requests | 
| POST /v1/availableNumbers/local | Order Number Requests |
| POST /v1/availableNumbers/tollFree | Order Number Requests |
| GET /v1/availableNumbers/local | Search Number Requests |
| GET /v1/availableNumbers/tollFree | Search Number Requests |
| GET /v1/users/u-id/phoneNumbers | Manage Numbers Requests |
| GET /v1/users/u-id/phoneNumbers/n-id | Manage Numbers Requests |

| Rate Limit Category | Request Rate Limit | Burst Request Rate Limit | Time Period |
|:--|:--|:--|:--|
| Order Number Requests | 100 | 800 | 1 minute |
| Search Number Requests | 100 | 800 | 1 minute |
| Manage Numbers Requests | 2000 | 3000 | 1 second |
