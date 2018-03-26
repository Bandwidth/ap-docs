{% method %}
## Adding Credentials

Your credentials are required to make any requests to the Bandwidth API. **Never publish your credentials.** Your credentials are unique to your account and allow Bandwith to verify you are the one making the requests.

Copy and paste the credentials code block on the left. Add your `userID`, `apiToken`, and `apiSecret` as environment variables. To learn more about setting up environment variables, visit [this link](https://codeburst.io/how-to-easily-set-up-node-environment-variables-in-your-js-application-d06740f9b9bd).

To access your credentials, login to the [Voice and Messaging Dashboard](https://app.bandwidth.com/login). Visit the account tab on the upper right hand side menu. Your userID is displayed in the API Information (THIS IS NOT THE SAME AS YOUR LOGIN USERNAME). Your apiToken and apiSecret are displayed when you select "Show token and secret". For more information on your credentials or to change your credentials, visit the [security page](http://dev.bandwidth.com/security.html).

![Creds](creds.png)
{% common %}
#### Credentials Code Block
```js
var client = new Bandwidth({
  userId    : process.env.BANDWIDTH_USER_ID,
  apiToken  : process.env.BANDWIDTH_API_TOKEN,
  apiSecret : process.env.BANDWIDTH_API_SECRET
};
```

{% endmethod %}