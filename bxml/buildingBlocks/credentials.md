## Adding Credentials

Your credentials are required to make any requests to the Bandwidth API. **Never publish your credentials.** Your credentials are unique to your account and allow Bandwith to verify you are the one making the requests.

Copy and paste the following code block and replace "Your_..." with the appropriate credentials.

```js
var client = new Bandwidth({
    userId    : "YOUR_USER_ID",
    apiToken  : "YOUR_API_TOKEN",
    apiSecret : "YOUR_API_SECRET"
});
```

To access your credentials, login to the [Voice and Messaging Dashboard](https://app.bandwidth.com/login). Visit the account tab on the upper right hand side menu. Your userID is displayed in the API Information (THIS IS NOT THE SAME AS YOUR LOGIN USERNAME). Your apiToken and apiSecret are displayed when you select "Show token and secret". For more information on your credentials or to change your credentials, visit the [security page](http://dev.bandwidth.com/security.html).

![Creds](creds.png)

