{% method %}
## XML: `<Hangup>`
The Hangup verb is used to hangup current call.


### Attributes
This verb does not support attributes.

### Callbacks Recevied

| Callbacks                        | Can reply with more BXML |
|:---------------------------------|:-------------------------|
| [Hangup](../callBacks/hangup.md) | No                       |

{% common %}
#### Example: Hangup Verb
This shows how to use Bandwidth XML to hang up an existing call.


```XML
<?xml version="1.0" encoding="UTF-8"?>

<Response>

<Hangup></Hangup>

</Response>
```

{% endmethod %}
