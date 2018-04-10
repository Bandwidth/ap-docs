{% method %}

# Create an Outbound Call

## Concept

To create an outbound call, we will use the RestAPI. The biggest difference is the callbackHttpMethod must be <code class="get">GET</code>. For more information about creating an outbound call, visit the [Full API Reference](../../methods/calls/postCalls.html)

## Code

The from number is a Bandwith number you own. Change the `to`, `from`, and `callbackUrl` parameters.

{% common %}


### Making an outbound call to use with BXML

The `from` number is a Bandwith number you own. Change the `to`, `from`, and `callbackUrl` parameters.

{% sample lang="js" %}

```js
var callParameters = {
    to                 :  "+12345678901",
    from               : "+12345678902",
    callbackUrl        : "http://your-callback-url.com/outbound-call-events",
    callbackHttpMethod : "GET"
}
var call = await client.Call.create(callParameters);
```

{% endmethod %}
