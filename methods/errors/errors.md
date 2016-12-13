# Errors
The Errors resource lets you see information about errors that happened in your API calls and during applications callbacks. This error information can be very helpful when you're debugging an application. Because error information can be large, and errors in the distant past are less useful than new ones, Bandwidth API limits the number of user errors it keeps.

### Base URL

`https://api.catapult.inetwork.com/v1/users/{userId}/errors`

### Capabilities

| Verb                         | Path                                                         | about                                   |
|:-----------------------------|:-------------------------------------------------------------|:----------------------------------------|
| <code class="get">GET</code> | [`/v1/users/{userId}/errors`](getErrors.md)                  | Gets all the user errors for an account |
| <code class="get">GET</code> | [`/v1/users/{userId}/errors/{errorId}`](getErrorsErrorId.md) | Gets information about one error        |
