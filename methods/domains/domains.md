# Domains
A domain is a way to logically group endpoints.  The name of the domain will be part of a public DNS record. For that reason, we let the customer choose their domain names. Once a domain has been created, endpoints can be created and managed within the context of the domain. Because endpoints can only exist within the context of a domain, creating a domain is the first step in creating endpoints.

<aside class="alert general small">
<p>
There is a 100 domain max per account limit. Most use cases require using a single domain for all endpoints.
</p>
</aside>

### Base URL

`https://api.catapult.inetwork.com/v1/users/{userId}/domains`

### Capabilities

| Verb                               | Paths                                                               | about                       |
|:-----------------------------------|:--------------------------------------------------------------------|:----------------------------|
| <code class="get">GET</code>       | [`/v1/users/{userId}/domains/`](getDomains.md)                      | List all domains on an user |
| <code class="post">POST</code>     | [`/v1/users/{userId}/domains`](postDomains.md)                      | Create a new domain         |
| <code class="delete">DELETE</code> | [`/v1/users/{userId}/domains/{domainId}`](deleteDomainsDomainId.md) | Delete specific domain      |
