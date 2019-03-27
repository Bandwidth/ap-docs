{% method %}
## XML: `<Gather>`
The Gather verb is used to collect digits for some period of time.


### Attributes
| Attribute         | Description                                                                                                                                                   |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| requestUrl        | (required) Absolute URL to send events to and request new BXML                                                                                                |
| requestUrlTimeout | (optional) Integer time in milliseconds to wait for requestUrl response (Default value is 30000).                                                             |
| terminatingDigits | (optional) Digits to stop gather (Default value is `“#”`).                                                                                                    |
| maxDigits         | (optional) Quantity of digits to collect (Default value is 128).                                                                                              |
| interDigitTimeout | (optional) Integer time indicating the timeout between digits (Default value is 5 seconds).                                                                   |
| bargeable         | (optional) **Deprecated**. Always considered 'true'. Boolean to indicate if audio playback should be stopped when digit is pressed (Default value is ‘true’). |
| tag               | (optional) A string that will be included in the callback events of the gather.                                                                             |

In case no digit is provided, the Gather verb fails and the next verb is executed; if it completes successfully the entered digits are sent via requestUrl attribute.

When the Gather verb completes, the [Gather](../callBacks/gather.md) event is sent to the Customer's requestUrl. If there is no requestUrl specified, the event is not sent anywhere.

If `<Gather>` is the last verb, the call is hungup after 30 seconds unless it is controlled within that time. It is expected that the customer application returns the next BXML in response to the [Gather](../callBacks/gather.md) event within that time.


### Nestable Verbs
These verbs might also be nested inside `<Gather>`:

| Verb          | Description                                                                                  |
|:--------------|:---------------------------------------------------------------------------------------------|
| SpeakSentence | (optional) Using the SpeakSentence inside the Gather verb will speak the text to the callee. |
| PlayAudio     | (optional) Using the PlayAudio inside the Gather verb will play the media to the callee.     |

### Callbacks Recevied

| Callback                         | Can reply with more BXML |
|:---------------------------------|:-------------------------|
| [Gather](../callBacks/gather.md) | Yes                      |

{% common %}
#### Example: Gather Verb
This example shows how to use the Gather verb to speak a sentence and collect digits input from the phone.


```XML
<?xml version="1.0" encoding="UTF-8"?>

<Response>

<Gather requestUrl="https://gather.url/nextBXML" requestUrlTimeout="10000"
terminatingDigits="#">

<SpeakSentence gender="female" locale="en_US" voice="susan">Please, press a digit.</SpeakSentence>

</Gather>

</Response>
```

#### Example: Gather with JSON Tag

Be sure to to use <code class="post">&amp;quot;</code> for quotes <code class="post">&quot;</code>

```xml
<Response>
  <Gather requestUrl="https://gather.url/nextBXML" requestUrlTimeout="10000" terminatingDigits="#" maxDigits="1" tag="{&quot;Hello&quot;:&quot;World&quot;,&quot;Foo&quot;:&quot;Bar&quot;}">
    <SpeakSentence gender="female" locale="en_US" voice="susan">Thanks for calling Press 1 for more options</SpeakSentence>
  </Gather>
</Response>
```

#### Example: Gather with extra query parameters in the <code class="post">requestUrl</code>

Be sure to to use <code class="post">&amp;amp;</code> for <code class="post">&</code>

```xml
<Response>
  <Gather requestUrl="https://gather.url/nextBXML?Hello=World&amp;Foo=Bar" requestUrlTimeout="10000" terminatingDigits="#" maxDigits="1">
    <SpeakSentence gender="female" locale="en_US" voice="susan">Thanks for calling Press 1 for more options</SpeakSentence>
  </Gather>
</Response>
```

{% endmethod %}
