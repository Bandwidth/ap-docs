# Applications
Applications allow you to receive incoming call and messaging events.  Each application can contain unlimited phone numbers and at least one call back URL for both calls _and_ messages.

![application-info](../../images/app-welcome.png)

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
