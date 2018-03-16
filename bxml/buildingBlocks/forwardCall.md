# Forward a Call

## Concept

To forward a call to another number, we will use the transfer BXML verb.

## Use Cases

| Use Case                                    | BXML Code                                                 |
|:--------------------------------------------|:----------------------------------------------------------|
| Call centers: A customer can call in and a recording will play. The call will then be transfered to the first available tenant. | Add multiple phone numbers(`<PhoneNumber>+15552221234</PhoneNumber>`) |
| Appointment reminders: If a customer would like to reschedule, you can transfer their call to the scheduling office | the code will be the same as the example|
| Operator: Often times customers can press 0 to be connected to an operator. | The code would need to collect digits then transfer to an operator if 0 is pushed|


## Code

Add a phone number to transfer the call to that phone number.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <Transfer>
        <PhoneNumber>+15552221234</PhoneNumber>
    </Transfer>
</Response>
```