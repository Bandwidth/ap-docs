# Create an Outbound Call

## Concept

To create an outbound call, we will use the RestAPI. The biggest difference is the callbackHttpMethod must be <code class="get">GET</code>. For more information about creating an outbound call, visit the [Full API Reference](../../methods/calls/postCalls.html)

## Use Case
| Use Case                                    | BXML Code                                                 |
|:--------------------------------------------|:----------------------------------------------------------|
| Follow up with customers | Change `to` to the customer's number, `from` to your Bandwidth number, and `callback` parameters. |


### Code
The 'from' number is a Bandwith number you own. Change the 'to', 'from', and 'callbackUrl' parameters to your desired values.

```js
var callParameters = {
    to                 : "+12345678901",
    from               : "+12345678902",
    callbackUrl        : "http://your-callback-url.com/outbound-call-events",
    callbackHttpMethod : "GET"
}
var call = await client.Call.create(callParameters);
```
