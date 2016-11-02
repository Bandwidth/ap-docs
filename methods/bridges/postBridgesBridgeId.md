{% method %}
## Update Bridge
Change calls in a bridge and bridge/unbridge the audio.

### Request URL
<code class="post">POST</code> `https://api.catapult.inetwork.com/v1/users/{userId}/bridges/{bridgeId}`

{% common %}
### Example: Add call {callId1} and call {callId2} in a bridge {bridgeId} with two way voice path

### Example: Removing call {callId2} from the bridge created in the example above

### Example: Adding two different calls {callId3} and {callId4} in the bridge above and put them on hold

### Example: Bridging the audio again

### Example: Removing all calls from bridge.
{% endmethod %}
