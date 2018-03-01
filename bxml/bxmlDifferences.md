# Bandwidth XML (BXML)

There are slight differences between Bandwidth's Voice and Messaging API and BXML.  The most important concept is that BXML and the API cannot be used in tandem with each other on an active call.  When the call has been answered, the developer must choose whether to use the API or BXML to handle the call events.


### Differences Chart
Below are key differences between BXML and API to help you choose which method will best suited for your needs.

| API                                    | BXML                                                                                                                                                                        |
|:--------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Has messaging and call events                        | Does not handle messaging, only handles calls|
| Requires familiarity with coding language syntax to execute the command | Uses simple easy-to-learn syntax with start and end tags                                                                                                 |
| Uses POST (JSON parameters) or GET (Query parameters) | Exclusively uses GET                                          |
| Auto-answer on incoming calls is optional   | Auto-answer on incoming calls is mandatory                                   |
| More customizable                           | Not as flexible but nesting commands is allowed|
| More callbacks are received                 | Less callbacks received, only received when necessary or when the event callback gets redirected |
| Requires more code                          | Requires much less code                                                     |
| More event options                          | Does not offer conference calling options                                    |
| POST requests allows the coder to intercept or interrupt an event (ie. playAudio)| No events can be stopped unless nested within a gather or transfer verb (CHECK WITH DAN)     |
