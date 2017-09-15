{% method %}

## Download Media
Downloads a media file you previously uploaded.

### Request URL

<code class="get">GET</code>`https://api.catapult.inetwork.com/v1/users/{userId}/media/{mediaName}`

{% common %}

### Example 1 of 1: Download an MP3 File

{% sample lang="bash" %}

```bash
curl -v -X GET https://api.catapult.inetwork.com/v1/users/{userId}/media/{mediaName} \
	-u {token}:{secret} \
```

{% sample lang="js" %}

```js
client.Media.download("file.mp3").
then(function (media) {
  console.log(media);
});
```

{% sample lang="csharp" %}

```csharp
using(var data = await client.Media.DownloadAsync("file.mp3"))
{
  var fileContent = await data.ReadAsStreamAsync();
  // fileContent is stream object
}
```

{% sample lang="ruby" %}

```ruby
content, media_type = Media.download(client, "file.mp3")
```
{% endmethod %}
