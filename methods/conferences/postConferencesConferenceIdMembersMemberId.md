{% method %}

## Update Member

Update a member status/properties.

### Request URL

<code class="post">POST</code>`https://api.catapult.inetwork.com/v1/users/{userId}/conferences/{conferenceId}/members/{memberId}`

---

### Supported Parameters
| Parameter   | Description                                                                                                                                            | Mandatory |
|:------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| joinTone    | If `true`, will play a tone when the member joins the conference. If `false`, no tone is played when the member joins the conference.                  | No        |
| leavingTone | If `true`, will play a tone when the member leaves the conference. If `false`, no tone is played when the member leaves the conference.                | No        |
| mute        | If `true`, member can’t speak in the conference. If `false`, this members can speak in the conference (unless set at the conference level).            | No        |
| hold        | If `true`, member can’t hear or speak in the conference. If `false`, member can hear and speak in the conference (unless set at the conference level). | No        |

{% common %}

### Example: Remove member from conference

{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/conferences/{conferenceId}/members/{memberId} \
	-u {token}:{secret} \
	-H "Content-type: application/json" \
	-d \
	'
	{
		"state": "completed"
	}'
```

{% sample lang="js" %}

```js
// Promise
client.Conference.updateMember("conferenceID", "memberId", {state: "completed"}).then(function(){});
// Callback
client.Conference.updateMember("conferenceID", "memberId", {state: "completed"}, function(err){});
```

{% sample lang="csharp" %}

```csharp
await client.Conference.UpdateMemberAsync("{conferenceId1}", "{memberId1}", new UpdateMemberData {State = MemberState.Completed});
```

{% sample lang="ruby" %}

```ruby
#coming soon
```

{% common %}

### Example: Keep member from speaking in the conference

{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/conferences/{conferenceId}/members/{memberId} \
	-u {token}:{secret} \
	-H "Content-type: application/json" \
	-d \
	'
	{
		"mute": "true"
	}'
```

{% sample lang="js" %}

```js
// Promise
client.Conference.updateMember("conferenceID", "memberId", {mute: "true"}).then(function(){});
// Callback
client.Conference.updateMember("conferenceID", "memberId", {mute: "true"}, function(err){});
```

{% sample lang="csharp" %}

```csharp
await client.Conference.MuteMemberAsync("{conferenceId1}", "{memberId1}", true);
```

{% sample lang="ruby" %}

```ruby
# coming soon
```


### Example: Keep member from hearing the conference audio

{% sample lang="bash" %}

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/conferences/{conferenceId}/members/{memberId} \
	-u {token}:{secret} \
	-H "Content-type: application/json" \
	-d \
	'
	{
		"hold": "true"
	}'
```

{% sample lang="js" %}

```js
// Promise
client.Conference.updateMember("conferenceID", "memberId", {hold: "true"}).then(function(){});
// Callback
client.Conference.updateMember("conferenceID", "memberId", {hold: "true"}, function(err){});
```

{% sample lang="csharp" %}

```csharp
await client.Conference.HoldMemberAsync("{conferenceId1}", "{memberId1}", true);
```

{% sample lang="ruby" %}

```ruby
# coming soon
```
{% endmethod %}
