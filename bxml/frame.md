#Implementation Frame

### Follow these steps to set up your environment to handle active calls using BXML.

Preqrequesites:
i. Postman (Setup with Bandwidth API endpoints)
ii. Ngrok
iii. Bandwidth Account

1. Install the necessary dependencies
i. Using terminal, go to the directory in which you are storing your file and type:

```
npm install --save node-bandwidth
npm install --save express
npm install --save body-parser
```
ii. Paste the following code at the top of your file to access your dependencies.

```js
/***************** Bandwidth setup ***********************/
const Bandwidth = require("node-bandwidth");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const http = require("http").Server(app);
```

2. Paste the following code; it is required in every new application using BXML.

```js
//Use a json body parser
app.use(bodyParser.json());

app.get("/", function (req, res) {
    console.log(req);
    res.send("Hello from Bandwidth!");
});

// Launch the Server
http.listen(app.get('port'), function(){
    console.log('listening on *:' + app.get('port'));
});

//This is the port to be used oto direct online traffic to your localhost using Ngrok
//set port to an environment variable port or 3000
//In terminal, type: ./ngrok 3000
app.set('port', (process.env.PORT || 3000));
```

3. Make an active inbound or outbound call using the API

A) Outbound Call: Use Postman to Create a Call for demo purposes
	i. Set up your postman with Bandwidth's API and your personal Bandwidth credentials (bxml/postmanSetup.md)
	ii. POST
	iii. Bandwidth REST API -> /calls -> POST /users/{{userId}}/calls.  This will fill the address to which the command will be sent to.
	iv. Under Body -> select Raw.  Paste the following JSON in this section.

```json
//Template:
{
    "to": "+1[Your personal number]",
    "from": "+1[Your Bandwidth number]",
    "callbackUrl": "base Ngrok URL + /callbackURL",
    "callbackHttpMethod": "GET"
}

//Example:
{
    "to": "+18286385873",
    "from": "+17042663397",
    "callbackUrl": "http://bc66e785.ngrok.io/call-events",
    "callbackHttpMethod": "GET"
}
```
	
	v.  The callback URL that the callbacks for this outgoing call is key for using BXML

B) Inbound Call: Use app.bw to automatically answer incoming calls
	i.  Go to app.bandwidth.com
	ii. Go to Applications -> CREATE NEW
		a. Callback request: GET
		b. Application type: VOICE
		c. Voice callback URL: 'base Ngrok URL' + '/callbackURL' (ex. http://bc66e785.ngrok.io/call-events)
		d. Automatically answer calls: Turn ON
		e. Assign a Bandwidth number to the application
	iii. Make a call to the Bandwidth number
	iv. The callback URL that the callbacks for this outgoing call is key for using BXML

4. Catch the callbacks and start handling call events using BXML

```js
//Template:

//BXML requires using GET
const baseUrl = `ngrokBaseUrl`;
const CALL_EVENTS = '/callbackURL';

const handleAnswerEvent = (req, res) => {
    // Here, only care about answer events
    if (req.query.eventType !== 'answer') {
        res.sendStatus(200);
        return;
    }
    const bxml = `<?xml version="1.0" encoding="UTF-8"?>

				  <Response>

				  [YOUR BXML HERE]

				  </Response>`

    res.send(bxml);
};

app.get(CALL_EVENTS, handleAnswerEvent);

//Example:

const baseUrl = `http://bc66e785.ngrok.io`;
const CALL_EVENTS = '/call-events';

const handleAnswerEvent = (req, res) => {
    if (req.query.eventType !== 'answer') {
        res.sendStatus(200);
        return;
    }
    const bxml = `<?xml version="1.0" encoding="UTF-8"?>

				  <Response>

				  <SpeakSentence voice="susan">Welcome to Bandwidth!</SpeakSentence>

				  </Response>`

    res.send(bxml);
};

app.get(CALL_EVENTS, handleAnswerEvent);

```