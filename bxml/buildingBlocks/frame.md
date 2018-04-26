# Implementation Frame

### Follow these steps to set up your environment to handle active calls using BXML.

######Preqrequesites
1. Postman (Setup with Bandwidth API endpoints)
2. Ngrok
3. Bandwidth Account

######Code
1. Install the necessary dependencies
    1. Using terminal, go to the directory in which you are storing your file and type:

        ```js
        npm install --save node-bandwidth
        npm install --save express
        npm install --save body-parser
        ```
    
    2. Paste the following code at the top of your file to access your dependencies.

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
    //In terminal, type: ./ngrok http 3000
    app.set('port', (process.env.PORT || 3000));


    //Bandwidth Credentials
    var client = new Bandwidth({
        // Uses my environment variables
        userId    : process.env.BANDWIDTH_USER_ID, 
        apiToken  : process.env.BANDWIDTH_API_TOKEN,
        apiSecret : process.env.BANDWIDTH_API_SECRET
    });
    ```

3. Make an active inbound or outbound call using the API.  This can be done with either of the three options below:

A) Outbound Call: Use Postman to Create a Call for demo purposes
	1. Set up your postman with Bandwidth's API and your personal Bandwidth credentials (bxml/postmanSetup.md).  Under Authorization -> TYPE: Basic Auth.
	2. POST
	3. Bandwidth REST API -> /calls -> POST /users/{{userId}}/calls.  This will fill the address to which the command will be sent to.
	4. Under Body -> select Raw.  Paste the following JSON in this section.

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
            "to": "+11234567890",
            "from": "+11231231234",
            "callbackUrl": "http://bc66e785.ngrok.io/call-events",
            "callbackHttpMethod": "GET"
        }
        ```

	5. The callback URL that the callbacks for this outgoing call is key for using BXML

B) Inbound Call: Use app.bw to automatically answer incoming calls
	i.  Go to app.bandwidth.com
	ii. Go to Applications -> CREATE NEW
		a. Callback request: GET
		b. Application type: VOICE
		c. Voice callback URL: 'base Ngrok URL' + '/callbackURL' (ex. http://bc66e785.ngrok.io/call-events)
		d. Automatically answer calls: Turn ON
		e. Assign a Bandwidth number to the application
	iii. Make a call to the Bandwidth number

C) Inbound Call: Create an application with code to automatically answer incoming calls. Paste after the code from part 2.  Every time this code is run, an applictation is created.

    ```js
    //Only need to fill out the three requirements indicated by {{ }}
    var appName = {{Your app name}}
    var BWnumber = {{Your Bandwidth number with '+1'}}

    client.Application.create({                             //Create Application with necessary requirements
        name: appName,
        incomingCallUrl: {{base Ngrok URL + callbackURL}},
        callbackHttpMethod: 'GET',
        autoAnswer: true
    })
    .then(function (response) {                             //List all current applications including app just created
        client.Application.list()
        .then(function (response) {
            if(response.hasNextPage) {
                return response.getNextPage();
            }
            else {
                return {applications: []};
            }
        })
        .then(function(response) {                          //Search for application just created by name, grab app id
            for (var i; i < response.applications.length-1; i++){
                if (response.applications[i].name == appName){
                    return response.applications[i].id
                }
            }
        })
        .then(function(reponse){                            //Assign a BW number you own to new application
            var s = `New application ${appName} successfully created`;
            console.log(s);
            console.log(response)
            client.PhoneNumber.update(BWnumber, {
                applicationId: response.id})
            .then(function(response){
                var p = `${BWnumber} successfully assigned to ${appName}`;
                console.log(p);
            });
        });
    });

    ```

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

    //Example: Make an outbound call to your cell number

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

5. In your terminal, cd into the folder that the file is held in, then type the following to test the code.

    ```js
    node 'filename'
    ```

6. Click SEND on Postman if making an outbound call, and then answer the call.  
OR
Call the Bandwidth number (used in your code above) with your personal phone number. 
You should hear "Welcome to Bandwidth!".

