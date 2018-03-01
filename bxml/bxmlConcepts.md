# BXML Concepts and Vocabulary

## XML

XML is a metalanguage that allows a developer to build up their own customized coding language to perform certain tasks.

[Click here to learn more](https://en.wikipedia.org/wiki/XML)

## BXML

Bandwidth XML (or BXML) is the markup language that Bandwidth developed to handle inbound and outbound call flows from within your application. BXML handles call events using standard action verbs that are listed in the BXML library.

[Click here to learn more](bxml.md)

## BXML Verbs

The word that instigates the method. This is always first word and followed by any parameters such as a timeout parameter or the speak sentence voice parameter.

[Click here to learn more](bxml.md)

## REST API

A REST API defines a set of functions where developers can perform requests and receive responses via an HTTP protocol such as GET and POST. Here at Bandwidth, we have a Voice and Messaging API that gives a user the capability to customizably send and receive calls or messages over the internet. We will use the REST API in BXML to make an outbound call.

[Click here to learn more](../methods/restApi.md)

## Webhook (HTTP Callback)

A webhook is an HTTP callback, which is an HTTP POST event notification that gets sent to a user-specified URL when something happens. A web application that uses webhooks will POST a message to a URL when certain things happen.

[Click here to learn more](bxmlCallbacks.md)

## BXML Callback Events

Bandwidth’s server notifies the user that an event has occurred by sending notifications as an HTTP callback to the user-specified Callback URL.

[Click here to learn more](bxmlCallbacks.md)

## Callback URL

The user-specified URL where the user would like the callbacks sent to.

[Click here to learn more](bxmlCallbacks.md)

## Request URL

The URL that, when notified, will direct the call to the next section of the BXML code. This is the URL specified in the BXML code block.

[Click here to learn more](bxml.md)

## Postman

A software tool that allows you to make mock POST or GET Requests to a designated URL.

[Click here to download Postman](https://www.getpostman.com/)

## Ngrok

Ngrok is a software tool that creates a secure tunnel between your local site and a public URL. It listens on the same port your local web server is running on, and proxies external requests sent to the public URL to your local machine.
The user can specify a URL for various events, and the application will POST data to those URLs when the events occur.

[Click here to download Ngrok](https://ngrok.com/)


