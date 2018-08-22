# Info about SIP Diversion Header

### WHAT'S HAPPENING?

We’re launching an update to our Application Platform to include Diversion header information for Incoming Call and Answer events.

### HOW DOES THIS IMPACT ME?

Diversion headers will now be included in payloads when an inbound call is diverted from its original destination. The Diversion header contains information such as the original to number and why the call was diverted. This update allows you to make decisions on how you want to process calls by knowing the initial call destination.

### WHAT DO I NEED TO KNOW?

Answer Event and Incoming Call Event callbacks will have Diversion header information in them. Previously when a call was diverted, the original destination was not shown.

### WHEN WILL THIS TAKE EFFECT?

The Application Platform update will be available on Wednesday, September 19, 2018.

### WHAT DO I NEED TO DO?

Please ensure your application code is ready to either handle or ignore the new information. The Diversion header will now include this information as depicted in the example below. Full API reference available on dev.bandwidth.com.

### HOW DOES IT LOOK?

![SIP-Diversion-Graphic](../images/SIP-Diversion-Graphic.png)

In this example, (111) 111-1111 dials (222) 222-2222 and the call is then forwarded to (333) 333-3333.

Incoming Call Event
```
{
  "callId"               : "c-xyz",
  "withholdCallerNumber" : "false",
  "displayName"          : "+11111111111",
  "eventType"            : "incomingcall",
  "callState"            : "active",
  "withholdCallerName"   : "false",
  "from"                 : "+11111111111",
  "to"                   : "+13333333333",
  "time"                 : "2018-08-08T14:39:06Z",
  "applicationId"        : "a-xyz",
  "callUri"              : "https://api.catapult.inetwork.com/v1/users/u-xyz/calls/c-xyz",
  "diversion"            : {
    "privacy" : "off",
    "screen"  : "no",
    "reason"  : "unavailable",
    "counter" : 1,
    "Limit"   : 1,
    "origTo"  : "+12222222222"
  }
}
```

Answer Event
```
{
  "callId"               : "c-xyz",
  "withholdCallerNumber" : "false",
  "withholdCallerNumber" : "false",
  "displayName"          : "+11111111111",
  "eventType"            : "answer",
  "callState"            : "active",
  "withholdCallerName"   : "false",
  "from"                 : "+11111111111",
  "to"                   : "+13333333333",
  "time"                 : "2018-08-08T14:39:06Z",
  "callUri"              : "https://api.catapult.inetwork.com/v1/users/u-xyz/calls/c-xyz",
  "diversion"            : {
    "privacy" : "off",
    "screen"  : "no",
    "reason"  : "unavailable",
    "counter" : 1,
    "Limit"   : 1,
    "origTo"  : "+12222222222"
  }
}
```
