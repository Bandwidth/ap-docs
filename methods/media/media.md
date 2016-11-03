
# Media
The Media resource lets you upload your media files to Bandwidth API servers so they can be used in applications without requiring a separate hosting provider. You can upload files up to `65MB` and file storage is free for an unlimited number of files. Files you upload can only be accessed by you when you supply your API access `token` and `secret`. They are not available to anonymous users. Bandwidth API supports the `Cache-Control` header when you upload files.


## Base URL

`https://api.catapult.inetwork.com/v1/users/{userId}/media`

<aside class="alert general small">
You can upload files up to `65MB` and file storage is free for an unlimited number of files.
</aside>

| Verb                               | Method                                                            | about                                         |
|:-----------------------------------|:------------------------------------------------------------------|:----------------------------------------------|
| <code class="get">GET</code>       | [`/v1/users/{userId}/media`](getMedia.md)                         | Get a list of your media files                |
| <code class="put">PUT</code>       | [`/v1/users/{userId}/media/{mediaName}`](putMediaMediaName.md)    | Uploads a media file                          |
| <code class="get">GET</code>       | [`/v1/users/{userId}/media/{mediaName}`](getMediaMediaName.md)    | Downloads a media file you uploaded           |
| <code class="delete">DELETE</code> | [`/v1/users/{userId}/media/{mediaName}`](deleteMediaMediaName.md) | Permanently deletes a media file you uploaded |
