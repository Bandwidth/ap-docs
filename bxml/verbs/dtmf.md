{% method %}
## XML: `<DTMF>`
The `<DTMF>` element is used to send digits on a live call. This will usually be used to automate the process of navigating through an external phone tree (IVR).

### Attributes
| Attribute | Description |
|:----------|:------------|
| None      | None        |

### Allowed Values

| Value | Behavior                            |
|:------|:------------------------------------|
| `1`   | Will send the button press for: `1` |
| `2`   | Will send the button press for: `2` |
| `3`   | Will send the button press for: `3` |
| `4`   | Will send the button press for: `4` |
| `5`   | Will send the button press for: `5` |
| `6`   | Will send the button press for: `6` |
| `7`   | Will send the button press for: `7` |
| `8`   | Will send the button press for: `8` |
| `9`   | Will send the button press for: `9` |
| `0`   | Will send the button press for: `0` |
| `*`   | Will send the button press for: `*` |
| `#`   | Will send the button press for: `#` |
| `w`   | Will add a 0.5 seconds delay        |
| `W `  | Will add a 1.0 seconds delay        |

### Callbacks Recevied

| Callback | Can reply with more BXML |
|:---------|:-------------------------|
| None     | No                       |

{% common %}
## Example:  Pause then Send DTMF

This shows how to use Bandwidth XML to pause before sending DTMF button presses

```XML
<?xml version="1.0" encoding="UTF-8"?>

<Response>
  <Pause length="5"/>
  <DTMF>1234</DTMF>
</Response>
```

## Example: Send digits with a 2.5 second delay

This shows how to use Bandwidth XML to pause 2.5 seconds between sending the 1 and 234 button presses

```XML
<?xml version="1.0" encoding="UTF-8"?>

<Response>
  <DTMF>1WWw234</DTMF>
</Response>
```

{% endmethod %}
