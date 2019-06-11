{% method %}

## XML: `<Transfer>`
The Transfer verb is used to transfer the call to another number.
An attempt to transfer to an invalid destination completes the call and it is hung up.
The Call leg A is hungup after the transferee hangs up. Therefore, any verbs following `<Transfer>` will not be executed.



### Attributes
| Attribute         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| transferTo        | (optional) Defines the number the call will be transferred to. <br> Accepts phone number in E.164 format (e.g. +19195551212) or a SIP url (e.g. sip:user@proxy.server.mycompany.com)                                                                                                                                                                                                                                                                                                                                                               |
| transferCallerId  | (optional) This is the caller id that will be used when the call is transferred.<br> `transferCallerId` can be any number in the user's Bandwidth account. <br> <br> Note: **Omitting** the `transferCallerId` attribute will pass along the number of the original incoming call. _(See example 1)_ <br><br> Users with impersonation privledges can set the `transferCallerId` value to any value including `private`, `unknown`, and `No Caller Id`. <br> To learn more about impersonation, contact [support](https://support.bandwidth.com) |
| callTimeout       | (optional) This is the timeout (seconds) for the callee to answer the call. When the call times out, the program will continue to the next verb. <br>**Default** 60 <br>**Max** 300                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| requestUrl        | (optional) Relative or absolute URL to send event and request new BXML when transferred call hangs up.                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| requestUrlTimeout | (optional) Timeout (milliseconds) to request new BXML.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| tag               | (optional) A string that will be included in the callback events of the transfer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| diversionTreatment | Can be any of the following: <br> `none`: This is the default value. No diversion headers are sent on the outbound leg of the transferred call.<br> `propagate`: Copy the Diversion header from the inbound leg to the outbound leg. Ignored if there is no Diversion header present on the inbound leg.<br> `stack`: After propagating any Diversion header from the inbound leg to the outbound leg, stack on top another Diversion header based on the Request-URI of the inbound call. <br><br> If diversionTreatment is not specified, no diversion header will be included for the transfer even if one came with the inbound call. | No |
| diversionReason |  Can be any of the following values: <br> `unknown` <br> `user-busy` <br> `no-answer` <br> `unavailable` <br> `unconditional` <br> `time-of-day` <br> `do-not-disturb` <br> `deflection` <br> `follow-me` <br> `out-of-service` <br> `away` <br> This parameter is considered only when `diversionTreatment` is set to `stack`. | No. Default to `unknown`.


### Nestable Verbs
These verbs might also be nested inside `<Transfer>`:

| Verb          | Description                                                                                                                                                                         |
|:--------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| PhoneNumber   | (optional) A collection of phone numbers to transfer the call to. The first to answer will be transferred. This is in addition to the number specified in the transferTo attribute. |
| SpeakSentence | (optional) Using the SpeakSentence inside the Transfer verb will speak the text to the callee before transferring it.                                                               |
| PlayAudio     | (optional) Using the PlayAudio inside the Transfer verb will play the media to the callee before transferring it.                                                                   |
| Record        | (optional) Using Record inside Transfer verb will record the transferred call.                                                                                                      |



<aside class="alert general small"><p>The transfer will bridge the calls when all verbs inside Transfer were executed.</p></aside>
<aside class="alert general small"><p>There can be a maximum of 7 phone numbers (including transferTo attribute) to try and transfer to . </p></aside>

### Callbacks Recevied

| Callbacks                                    | Can reply with more BXML |
|:---------------------------------------------|:-------------------------|
| [Hangup](../callBacks/hangup.md)             | No                       |
| [transferComplete](../callBacks/transfer.md) | No                       |

{% common %}
#### Example 1 of 4: Simple Transfer
This shows how to use Bandwidth XML to transfer a phone call.


```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <Transfer transferTo="+11234567892">
   </Transfer>
</Response>
```

#### Example 2 of 4: Multi transfer
This example shows how to use Bandwidth XML in a multi transfer scenario.

```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <Transfer transferCallerId="+15552221235">
        <PhoneNumber>+15552221234</PhoneNumber>
        <PhoneNumber>+15552221233</PhoneNumber>
        <SpeakSentence gender="male" locale="en_US" voice="paul">This call has been forwarded.</SpeakSentence>
    </Transfer>
</Response>

```

#### Example 3 of 4: New Caller Id and Transfer
This shows how to use Bandwidth XML to transfer a phone call.

```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <SpeakSentence gender="male" locale="en_US" voice="paul">Transferring your call, please wait.</SpeakSentence>
    <Transfer transferCallerId="+11234567891" transferTo="+11234567892">
                <SpeakSentence gender="male" locale="en_US" voice="paul">Your call has been transfered.</SpeakSentence>
    </Transfer>
</Response>
```

#### Example 4 of 4: Transfer with outbound Diversion header information
This shows how to set variables for an outbound Diversion header

```XML
<?xml version="1.0" encoding="UTF-8"?>
    <Response>
    <Transfer diversionTreatment="stack" diversionReason="do-not-disturb">
        <PhoneNumber>+19195554444</PhoneNumber>
    </Transfer>
</Response>
```


{% endmethod %}
