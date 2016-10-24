{% method %}
## XML: `<Reject>`
The Reject verb is used to reject incoming calls.

<aside class="alert general small">
This feature is coming soon.
</aside>


### Attributes
| ATTRIBUTE | DESCRIPTION                                                                                                     |
|:----------|:----------------------------------------------------------------------------------------------------------------|
| reason    | (optional) Describe the reason for rejecting the call (busy or rejected to play different tones to the caller). |


{% common %}
#### Example: Reject Verb
This shows how to use Bandwidth XML to reject an incoming call.

```XML
<?xml version="1.0" encoding="UTF-8"?>

<Response>
     <Reject></Reject>
</Response>
```

{% endmethod %}
