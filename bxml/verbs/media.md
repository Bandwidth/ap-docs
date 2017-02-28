{% method %}
## XML: `<Media>`
<Media> is a noun that is used exclusively within <SendMessage> to provide attached media (MMS) capability messages. This feature is coming soon.

<aside class="alert general small">
<p>
The <Media> tag must contain at least one internal <Url> tag to specify the media URL to be sent as seen in the following example:
</p>
</aside>

### Attributes
This verb does not support attributes.

{% common %}
#### Example: Media Noun
This shows how to use Bandwidth XML to set the media for an MMS message.

```XML
<?xml version="1.0" encoding="UTF-8"?>
<Media>

<Url>http://api.catapult.inetwork.com/v1/users/user_id/medias/media.jpg</Url>

<Url>http:// ...</Url>

<Url>http:// ...</Url>

<Url>http:// ...</Url>

</Media>
```

{% endmethod %}
