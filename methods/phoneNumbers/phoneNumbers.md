# Phone numbers
The Phone Numbers resource lets you get phone numbers for use with your programs and manage numbers you already have.

## Base URL

`https://api.catapult.inetwork.com/v1/users/{userId}/phoneNumbers`


| Verb                               | Method                                                                        | about                               |
|:-----------------------------------|:------------------------------------------------------------------------------|:------------------------------------|
| <code class="get">GET</code>       | [`/v1/users/{userId}/phoneNumbers`](getPhoneNumbers.md)                       | Get a list of your numbers          |
| <code class="post">POST</code>     | [`/v1/users/{userId}/phoneNumbers/`](postPhoneNumbers.md)                     | Allocate a number so you can use it |
| <code class="get">GET</code>       | [`/v1/users/{userId}/phoneNumbers/{numberId}`](getPhoneNumbersNumberId.md)    | Get information about one number    |
| <code class="post">POST</code>     | [`/v1/users/{userId}/phoneNumbers/{numberId}`](postPhoneNumbersNumberId.md)   | Make changes to your number         |
| <code class="delete">DELETE</code> | [`/v1/users/{userId}/phoneNumbers/{numberId}`](deletePhoneNumbersNumberId.md) | Remove a number from your account   |
