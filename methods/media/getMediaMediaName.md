{% method %}

## Download Media
Downloads a media file you previously uploaded.

### Request URL

<code class="get">GET</code>`https://api.catapult.inetwork.com/v1/users/{userId}/media/{mediaName}`

## ⚠️ Caution on fetching Media ⚠️

You **MUST** use your API token and secret to download the media each and every time you want to access the file.  We **DO NOT** recommend using Bandwidth's url to display/stream media files to your end-users.  Providing your user-id, token, and secret to users' devices is a security risk, as they _could_ use your credentials to access your account.

Instead, we recommend that you create a copy on your local server or a cloud storage service.  Doing so allows you to specify **YOUR** authentication method (if any) to keep your Bandwidth account and users safe.

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
