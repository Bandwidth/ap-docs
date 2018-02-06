# Available Numbers

The Available Numbers resource lets you search for numbers that are available for use with your application. Read More about Phone Numbers in the <a href="http://dev.bandwidth.com/faq/#Phone">FAQ</a>

<aside class="alert general">
<p>
If you need advanced control over the number ordering process, like managing line features, you can find documentation <a href="#">here.</a>
</p>
</aside>

### Base URL
`https://api.catapult.inetwork.com/v1/availableNumbers/`

### Capabilities

| Verb                           | Path                                                               | about                                           |
|:-------------------------------|:-------------------------------------------------------------------|:------------------------------------------------|
| <code class="get">GET</code>   | [`/v1/availableNumbers/local`](getAvailableNumbersLocal.md)        | Search for available local numbers              |
| <code class="post">POST</code> | [`/v1/availableNumbers/local`](postAvailableNumbersLocal.md)       | Search and order available local numbers        |
| <code class="get">GET</code>   | [`/v1/availableNumbers/tollFree`](getAvailableNumbersTollFree.md)  | Search for available toll free numbers          |
| <code class="post">POST</code> | [`/v1/availableNumbers/tollFree`](postAvailableNumbersTollFree.md) | Searches and order available Toll Free numbers. |
