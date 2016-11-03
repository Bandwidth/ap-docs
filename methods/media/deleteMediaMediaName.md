{% method %}

## Remove Media File
Deletes a media file from Bandwidth API server. Make sure you don't have any application scripts still using the media before you delete. If you accidentally delete a media file, you can immediately upload a new file with the same name.

### Request URL

<code class="delete">DELETE</code>`https://api.catapult.inetwork.com/v1/users/{userId}/media/{mediaName}`


{% common %}

### Example: Delete an MP3 File

{% sample lang="bash" %}

```bash
# Coming soon
```

{% sample lang="js" %}

```js
//Coming soon
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

