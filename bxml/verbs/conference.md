{% method %}
## XML: `<Conference>`

The Conference verb is used to create conferences.


### Attributes
| Attribute         | Description                                                                                                                                                                                                                                                                                                                                         |
|:------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| from              | (required) The phone number that will host the conference.                                                                                                                                                                                                                                                                                          |
| statusCallbackUrl | (optional) URL where the events related to the Conference will be sent through POST. An application could get those posted messages and taking action upon it, for example, getting the conference-id and conference-member id and send a MUTE command to specific conference member by using [REST API](../../methods/conferences/conferences.md). |
| joinTone          | (optional) If “true”, will play a tone when the member joins the conference. If “false”, no tone is played when the member joins the conference.                                                                                                                                                                                                    |
| leavingTone       | (optional) If “true”, will play a tone when the member leaves the conference. If “false”, no tone is played when the member leaves the conference.                                                                                                                                                                                                  |
| tag               | (optional) A string that will be included in the callback events of the conference.                                                                                                                                                                                                                                                                 |
| mute              | (optional) If “true”, the member will join in mute and will be able to hear unmuted participants. The mute attribute can be changed via REST API.                                                                                                                                                                                                   |
| hold              | (optional) If “true”, the member will join in hold. The hold attribute can be changed via REST API.                                                                                                                                                                                                                                                 |


{% common %}
#### Example: Conference Verb all options

This shows how to use Bandwidth XML to create a conference using all options.

```XML
<?xml version="1.0" encoding="UTF-8"?>

<Response>

<SpeakSentence gender="male" locale="en_US" voice="paul">This is a conference example</SpeakSentence>

<Conference from="11234567891" hold="false" joinTone="true" leavingTone="true" mute="false" statusCallbackUrl="http://requestb.in/1amf72y1"  />

</Response>
```

#### Example: Conference Verb required options only
This shows how to use Bandwidth XML to create a conference only using required options.

```XML
<?xml version="1.0" encoding="UTF-8"?>

<Response>

<SpeakSentence gender="male" locale="en_US" voice="paul">This is another conference example</SpeakSentence>

<Conference from="11234567891"/>

</Response>
```

{% endmethod %}
