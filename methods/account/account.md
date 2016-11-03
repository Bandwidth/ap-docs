# Account
The Account API allows you to retrieve your current balance, transaction list, account type and all elements related to your platform account.

### Base Url

`https://api.catapult.inetwork.com/v1/users/{userId}/account`

### Capabilities

| Verb                         | Path                                                                   | about                                               |
|:-----------------------------|:-----------------------------------------------------------------------|:----------------------------------------------------|
| <code class="get">GET</code> | [`/v1/users/{userId}/account`](getAccount.md)                          | Get information about your account                  |
| <code class="get">GET</code> | [`/v1/users/{userId}/account/transactions`](getAccountTransactions.md) | Get a list of the transactions made to your account |
