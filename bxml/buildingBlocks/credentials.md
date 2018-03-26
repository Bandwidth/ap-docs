{% method %}

## Adding Credentials

Your credentials are required to make any requests to the Bandwidth API. **Never publish your credentials.** Your credentials are unique to your account and allow Bandwith to verify you are the one making the requests.

Copy and paste the credentials code block on the left. Add your `BANDWIDTH_USER_ID`, `BANDWIDTH_API_TOKEN`, and `BANDWIDTH_API_SECRET` as [environment variables](https://www.schrodinger.com/kb/1842).


### Reading Environment Variables

| Programming Language                                                                        | Example                                                                |
|:--------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------|
| [NodeJS](https://nodejs.org/docs/latest-v7.x/api/process.html#process_process_env)          | `var myEnvVar = process.env.MY_VARIABLE`                               |
| [Python](https://docs.python.org/3.5/library/os.html?highlight=os#os.environ)               | `my_env_var = os.environ.get('MY_VARIABLE')`                           |
| <a href="https://msdn.microsoft.com/en-us/library/77zkk0b6(v=vs.85).aspx">C#</a>            | `string myEnvVar = Environment.GetEnvironmentVariable("MY_VARIABLE");` |
| [Ruby](https://ruby-doc.org/core-2.1.4/ENV.html)                                            | `my_env_var = env["MY_VARIABLE"]`                                      |
| [PHP](http://php.net/manual/en/function.getenv.php)                                         | `$myEnvVar = getenv('MY_VARIABLE');`                                   |
| [GO](https://golang.org/pkg/os/#Getenv)                                                     | `var myEnvVar = os.Getenv("MY_VARIABLE")`                              |
| <a href="https://docs.oracle.com/javase/7/docs/api/java/lang/System.html#getenv()">Java</a> | `private static String myEnvVar = System.getenv("MY_VARIABLE")`        |

### Access your Bandwidth Voice & Messaging API Credentials

To access your credentials, login to the [Voice and Messaging Dashboard](https://app.bandwidth.com/login). Visit the account tab on the upper right hand side menu. Your userID is displayed in the API Information (THIS IS NOT THE SAME AS YOUR LOGIN USERNAME). Your apiToken and apiSecret are displayed when you select "Show token and secret". For more information on your credentials or to change your credentials, visit the [security page](http://dev.bandwidth.com/security.html).

![Creds](creds.png)

{% common %}

### Credentials Code Block

{% sample lang="js" %}


```js
const myCreds = {
  userId    : process.env.BANDWIDTH_USER_ID,
  apiToken  : process.env.BANDWIDTH_API_TOKEN,
  apiSecret : process.env.BANDWIDTH_API_SECRET
};

const bandwidthAPI = new Bandwidth(myCreds);
```

{% sample lang="csharp" %}

```c
  //coming soon
```

{% sample lang="ruby" %}

```ruby
## coming soon
```


{% endmethod %}