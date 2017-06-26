{% method %}
## XML: `<Redirect>`
The Redirect verb is used to redirect the current XML execution to another URL.

### Attributes
| Attribute         | Description                                                     |
|:------------------|:----------------------------------------------------------------|
| requestUrl        | (required) Absolute URL to send event and request new BXML.     |
| requestUrlTimeout | (required) Time (milliseconds) to wait for requestUrl response. |

<aside class="alert general small">
<p>
Any verb after `<Redirect>` will not be executed.
<p>
</aside>

### Callbacks Recevied

| Callbacks                            | Can reply with more BXML |
|:-------------------------------------|:-------------------------|
| [Redirect](../callBacks/redirect.md) | Yes                      |


{% common %}
#### Example: Redirect Verb
This shows how to use Bandwidth XML to redirect the response to a new url.


```XML
<?xml version="1.0" encoding="UTF-8"?>

<Response>

<Redirect requestUrl="http://flow.url/newFlow" requestUrlTimeout="10000"></Redirect>

</Response>
```

{% endmethod %}
