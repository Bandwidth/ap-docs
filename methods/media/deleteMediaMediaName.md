{% method %}

## Remove Media File
Deletes a media file from Bandwidth API server. Make sure you don't have any application scripts still using the media before you delete. If you accidentally delete a media file, you can immediately upload a new file with the same name.

### Request URL

<code class="delete">DELETE</code>`https://api.catapult.inetwork.com/v1/users/{userId}/media/{mediaName}`


{% common %}

### Example 1 of 1: Delete an MP3 File

{% sample lang="bash" %}

```bash
curl -v -X DELETE https://api.catapult.inetwork.com/v1/users/{userId}/media/{mediaName} \
	-u {token}:{secret} \
```

{% sample lang="js" %}

```js
client.Media.delete("file.mp3").
then(function (media) {
  console.log(media);
});
```

{% sample lang="csharp" %}

```csharp
await client.Media.DeleteAsync("file.mp3");
```

{% sample lang="ruby" %}

```ruby
Media.delete(client, "file.mp3")
```

{% endmethod %}
