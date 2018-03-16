# Create an Outbound Call

## Concept

To create an outbound call, we will use the RestAPI. The biggest difference is the callbackHttpMethod must be <code class="get">GET</code>. For more information about creating an outbound call, visit the [Full API Reference](../../methods/calls/postCalls.html)

## Code

The from number is a Bandwith number you own. Change the `to`, `from`, and `callbackUrl` parameters.

```js
const callParameters = {
    to                 : +12345678901,
    from               : +12345678901,
    callbackUrl        : callbackUrl,
    callbackHttpMethod : 'GET'
}
const call = await client.Call.create(callParameters);
res.status(201).send(call);
```