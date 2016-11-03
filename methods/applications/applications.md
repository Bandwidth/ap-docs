# Applications
The Applications resource lets you define call and message handling applications. You write an application on your own servers and have Bandwidth API send events to it by configuring a callback URL.

### Base Url
`https://api.catapult.inetwork.com/v1/users/{userId}/applications/`

### Capabilities

| Verb                               | Path                                                                                    | about                                |
|:-----------------------------------|:----------------------------------------------------------------------------------------|:-------------------------------------|
| <code class="get">GET</code>       | [`/v1/users/{userId}/applications`](getApplications.md)                                 | Get information about your account   |
| <code class="post">POST</code>     | [`/v1/users/{userId}/applications`](postApplications.md)                                | Create an application                |
| <code class="get">GET</code>       | [`/v1/users/{userId}/applications/{applicationId}`](getApplicationsApplicationId.md)    | Get information about an application |
| <code class="post">POST</code>     | [`/v1/users/{userId}/applications/{applicationId}`](postApplicationsApplicationId.md)   | Make changes to an application       |
| <code class="delete">DELETE</code> | [`/v1/users/{userId}/applications/{applicationId}`](deleteApplicationsApplicationId.md) | Delete an application                |
