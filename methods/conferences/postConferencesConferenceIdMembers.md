{% method %}

## Add Member to Conference
Add members to a conference.

## Request URL

<code class="post">POST</code> `https://api.catapult.inetwork.com/v1/users/{userId}/conferences/{conferenceId}/members`

### Supported Parameters
| Parameter   | Description                                                                                                                                            | Mandatory |
|:------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| callId      | **Important:** The callId must refer to an active call that was created using this conferenceId.                                                       | Yes       |
| joinTone    | If `true`, will play a tone when the member joins the conference. If `false`, no tone is played when the member joins the conference.                  | No        |
| leavingTone | If `true`, will play a tone when the member leaves the conference. If `false`, no tone is played when the member leaves the conference.                | No        |
| mute        | If `true`, member can’t speak in the conference. If `false`, this members can speak in the conference (unless set at the conference level).            | No        |
| hold        | If `true`, member can’t hear or speak in the conference. If `false`, member can hear and speak in the conference (unless set at the conference level). | No        |

{% common %}

### Example: Add member to a conference

{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/conferences/{conferenceId}/members \
	-u {token}:{secret} \
	-H "Content-type: application/json" \
	-d \
	'
	{
		"callId": "{callId}",
		"joinTone": "false",
		"leavingTone": "false"
	}'
```

{% sample lang="js" %}

```js
// Promise
client.Conference.createMember("conferenceId", {callId: "callID"}).then(function(member){});
// Callback
client.Conference.createMember("conferenceId", {callId: "callID"}, function(err, member){});
```

{% sample lang="csharp" %}

```csharp
var member = await client.Conference.CreateMemberAsync("{conferenceId1}", new CreateConferenceMemberData {
	CallId = "callID"
});
```

{% sample lang="ruby" %}

```ruby
member = conference.create_member("{conferenceId1}", {
	:call_id => "callId"
})
```

{% common %}

> The above command returns HTTP Header structured like this:

```
HTTP/1.1 201 CREATED
Location: /v1/users/{userId}/conferences/{confId}/members/{memberId}
```
{% endmethod %}

