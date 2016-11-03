# Conferences
The Conference resource allows you create conferences, add members to it, play audio, speak text, mute/unmute members, hold/unhold members and other things related to conferencing. Once a conference is created there is no timeout associated with it, i.e., the conference will stay in created state until it is explicitly terminated. After the last member of a conference is removed from it, the conference will be set automatically as completed.

### Base URL

`https://api.catapult.inetwork.com/v1/users/{userId}/conferences`

### Capabilities

| Verb                           | Path                                                                                                                           | about                                              |
|:-------------------------------|:-------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------|
| <code class="post">POST</code> | [`/v1/users/{userId}/conferences`](postConferences.md)                                                                         | Create a new conference                            |
| <code class="get">GET</code>   | [`/v1/users/{userId}/conferences/{conferenceId}`](getConferencesConferenceId.md)                                               | Retrieve conference information                    |
| <code class="post">POST</code> | [`/v1/users/{userId}/conferences/{conferenceId}`](postConferencesConferenceId.md)                                              | Update conference                                  |
| <code class="post">POST</code> | [`/v1/users/{userId}/conferences/{conferenceId}/audio`](postConferencesConferenceIdAudio.md)                                   | Play an audio/speak a sentence in the conference   |
| <code class="post">POST</code> | [`/v1/users/{userId}/conferences/{conferenceId}/members`](postConferencesConferenceIdMembers.md)                               | Add a member to a conference.                      |
| <code class="get">GET</code>   | [`/v1/users/{userId}/conferences/{conferenceId}/members`](getConferencesConferenceIdMembers.md)                                | List all members from a conference                 |
| <code class="post">POST</code> | [`/v1/users/{userId}/conferences/{conferenceId}/members/{memberId}`](postConferencesConferenceIdMembersMemberId.md)            | Update a conference member (remove, mute, hold)    |
| <code class="get">GET</code>   | [`/v1/users/{userId}/conferences/{conferenceId}/members/{memberId}`](getConferencesConferenceIdMembersMemberId.md)             | Retrieve properties for a single conference member |
| <code class="post">POST</code> | [`/v1/users/{userId}/conferences/{conferenceId}/members/{memberId}/audio`](postConferencesConferenceIdMembersMemberIdAudio.md) | Play audio/speak to only one conference member     |
