# Number Info
This resource provides a CNAM number info. CNAM is an acronym which stands for Caller ID Name. CNAM can be used to display the calling party's name alongside the phone number, to help users easily identify a caller. CNAM API allows the user to get the CNAM information of a particular number.

| Verb                         | Method                                                     | about                         |
|:-----------------------------|:-----------------------------------------------------------|:------------------------------|
| <code class="get">GET</code> | [`/v1/phoneNumbers/numberInfo/{number}`](getNumberInfo.md) | Get the CNAM info of a number |


## Properties
| Property | Description                                                  |
|:---------|:-------------------------------------------------------------|
| name     | The Caller ID name information.                              |
| number   | The full phone number, specified in E.164 format.            |
| created  | The time this Caller ID information was first queried (UTC). |
| updated  | The time this Caller ID information was last updated (UTC).  |
