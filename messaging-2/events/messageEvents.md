# Message Events

These events are specific to Bandwidth Messaging 2.0.  For all other errors, check the [messaging events](../../apiCallbacks/messagingEvents.md).

| Event                                      | Description                                                                                                            |
|:-------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------|
| [Incoming Group Message](incomingGroup.md) | Bandwidth sends this event for each incoming group mesasge                                                             |
| [Incoming Text Message](receiveSingle.md)  | Bandwidth sends this event for each incoming text message                                                              |
| [Message Delivered](msgDelivered.md)       | Bandwidth sends this event when the text is _delivered_ to the downstream carrier. **ONLY FOR MESSAGES WITHOUT MEDIA** |
| [Outbound Messaging Sent](outSent.md)      | Bandwidth sends this event when the outbound message has been sent to the downstream carrier                           |
| [Group Message Rejected](groupReject.md)   | Bandwidth sends this event when the message contains was unable to be delivered                                        |
