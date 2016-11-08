# Messages
The Messages resource lets you send SMS/MMS messages and view messages that were previously sent or received.

### Base URL

`https://api.catapult.inetwork.com/v1/users/{userId}/messages`

### Capabilities

| Verb                           | Path                                                                 | about                           |
|:-------------------------------|:---------------------------------------------------------------------|:--------------------------------|
| <code class="get">GET</code>   | [`/v1/users/{userId}/messages`](getMessages.md)                      | Get a list of previous messages |
| <code class="post">POST</code> | [`/v1/users/{userId}/messages`](postMessages.md)                     | Send message                    |
| <code class="get">GET</code>   | [`/v1/users/{userId}/messages/{messageId}`](getMessagesMessageId.md) | Get information about a message |


### Properties
| Property            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|:--------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| id                  | The unique ID of the message.                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| from                | The message sender’s telephone number (or short code).                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| to                  | Message recipient telephone number (or short code).                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| direction           | Direction of message, in - a message that came from the telephone network to one of your numbers (an “inbound” message) or out - a message that was sent from one of your numbers to the telephone network (an “outbound” message)                                                                                                                                                                                                                                                                          |
| text                | The message contents. NOTE: We only store the message contents for 30 days. Any messages older than 30 days will not contain text.                                                                                                                                                                                                                                                                                                                                                                          |
| media               | Json array containing list of media urls to be sent as content for an mms. Valid URLs are: <br> https://api.catapult.inetwork.com/v1/users/&lt;user-id&gt;/media/<media-name></media-name> <br>We also support media URLs that are external to Bandwidth API, http:// or https:// format: <br> Example: http://customer-web-site.com/file.jpg <br> And coming soon, we are going to use file name from Content-Disposition header in case it’s passed by the media URLs that are external to Bandwidth API. |
| state               | Message state, values are:  <br> * `received`<br> * `queued`<br> * `sending`<br> * `sent` <br> * `error`                                                                                                                                                                                                                                                                                                                                                                                                    |
| time                | The time the message resource was created (UTC, follows the ISO 8601 format).                                                                                                                                                                                                                                                                                                                                                                                                                               |
| callbackUrl         | The complete URL where the events related to the outgoing message will be sent.                                                                                                                                                                                                                                                                                                                                                                                                                             |
| callbackTimeout     | Determine how long should the platform wait for callbackUrl’s response before timing out (milliseconds).                                                                                                                                                                                                                                                                                                                                                                                                    |
| fallbackUrl         | The server URL used to send message events if the request to callbackUrl fails.                                                                                                                                                                                                                                                                                                                                                                                                                             |
| page                | Used for pagination to indicate the page requested for querying a list of messages. If no value is specified the default is 0.                                                                                                                                                                                                                                                                                                                                                                              |
| size                | Used for pagination to indicate the size of each page requested for querying a list of messages. If no value is specified the default value is 25. (Maximum value 1000)                                                                                                                                                                                                                                                                                                                                     |
| tag                 | A string that will be included in the callback events of the message.                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| receiptRequested    | Requested receipt option for outbound messages: `none` `all` `error` Default is `none`.                                                                                                                                                                                                                                                                                                                                                                                                                     |
| deliveryState       | One of the message delivery states `waiting` `delivered` `not-delivered `                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| deliveryCode        | Numeric value of deliver code, see table for values.                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| deliveryDescription | Message delivery description for the respective delivery code                                                                                                                                                                                                                                                                                                                                                                                                                                               |

### Message States
| State    | Description                                                                            |
|:---------|:---------------------------------------------------------------------------------------|
| received | The message was received.                                                              |
| queued   | The message is waiting in queue and will be sent soon.                                 |
| sending  | The message was removed from queue and is being sent.                                  |
| sent     | The message was sent successfully.                                                     |
| error    | There was an error sending or receiving a message (check errors resource for details). |

### Message Delivery State
| State         | Description                                        |
|:--------------|:---------------------------------------------------|
| waiting       | Waiting for receipt.                               |
| delivered     | Receipt indicating that message was delivered.     |
| not-delivered | Receipt indicating that message was not delivered. |

### Message Delivery Code
| Code | Description                                   |
|:-----|:----------------------------------------------|
| 0    | Message delivered to carrier                  |
| 100  | Message not delivered to carrier              |
| 187  | Statistical spam detected                     |
| 188  | Keyword spam detected                         |
| 189  | Spam detected                                 |
| 482  | Loop detected                                 |
| 600  | Destination carrier could not accept messages |
| 610  | Message submission failed                     |
| 620  | Destination application error                 |
| 630  | Message not acknowledge                       |
| 720  | Invalid destination number                    |
| 740  | Invalid source number                         |
| 999  | Unknown error                                 |

<div id="Supported"></div>

### Supported MMS File Types
| Extenstion | File Type              |
|:-----------|:-----------------------|
| .json      | application/json       |
| .ogv       | application/ogg        |
| .oga       | application/ogg        |
| .ogx       | application/ogg        |
| .ogg       | application/ogg        |
| .pdf       | application/pdf        |
| .rtf       | application/rtf        |
| .zip       | application/zip        |
| .tar       | application/x-tar      |
| .xml       | application/xml        |
| .gz        | application/gzip       |
| .bz2       | application/x-bzip2    |
| .gz        | application/x-gzip     |
| .smil      | application/smil       |
| .js        | application/javascript |
| .m4a       | audio/mp4              |
| .m4p       | audio/mp4              |
| .m4b       | audio/mp4              |
| .m4r       | audio/mp4              |
| .mp1       | audio/mpeg             |
| .mp2       | audio/mpeg             |
| .mp3       | audio/mpeg             |
| .m1a       | audio/mpeg             |
| .m2a       | audio/mpeg             |
| .mpa       | audio/mpeg             |
| .oga       | audio/ogg              |
| .flac      | audio/flac             |
| .webm      | audio/webm             |
| .wav       | audio/wav              |
| .amr       | audio/amr              |
| .3ga       | audio/amr              |
| .3gp       | audio/3gpp             |
| .bmp       | image/bmp              |
| .dib       | image/bmp              |
| .gif       | image/gif              |
| .jpg       | image/jpeg             |
| .jpeg      | image/jpeg             |
| .pjpeg     | image/pjpeg            |
| .png       | image/png              |
| .svg       | image/svg+xml          |
| .tiff      | image/tiff             |
| .tif       | image/tiff             |
| .webp      | image/webp             |
| .ico       | image/x-icon           |
| .css       | text/css               |
| .csv       | text/csv               |
| .html      | text/html              |
| .cal       | text/calendar          |
| .txt       | text/plain             |
| .js        | text/javascript        |
| .vcf       | text/vcard             |
| .vcard     | text/vcard             |
| .wap       | text/vnd.wap.wml       |
| .xml       | text/xml               |
| .avi       | video/avi              |
| .mp4       | video/mp4              |
| .m4v       | video/mp4              |
| .mpg       | video/mpeg             |
| .mpeg      | video/mpeg             |
| .m1v       | video/mpeg             |
| .mpv       | video/mpeg             |
| .ogv       | video/ogg              |
| .ogx       | video/ogg              |
| .ogg       | video/ogg              |
| .spx       | video/ogg              |
| .ogm       | video/ogg              |
| .mov       | video/quicktime        |
| .qt        | video/quicktime        |
| .webm      | video/webm             |
| .wmv       | video/x-ms-wmv         |
| .flv       | video/x-flv            |
