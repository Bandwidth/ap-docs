# Messaging 2.0 Bandwidth Phone Number Dashboard (AKA: Dashboard, Iris) setup

## CSA Setup covers
* Creating Bandwidth Phone Number Dashboard (AKA: Dashboard, Iris) login and account
* Modifying account to enable HTTP Messaging
* Modifying account to point to correct Proxy ID
* Linking Bandwidth Voice and Messaging APIs (AKA Catapult, Application Platform) userid to Bandwidth Phone Number Dashboard (AKA: Dashboard, Iris) account

## Intial Setup

1. Create subaccount (_site_)
2. Create location (_sippeer_)
3. Create application
4. Assign application to location (_sippeer_)
5. Order Phone numbers to location (_sippeer_)

##### Get user id!
![Get Account Id](https://bandwidth.d.pr/CDAvSP+)
![Get Account Id](../images/messaing-2/getAccount.gif)

![LOG IN](http://bandwidth.d.pr/tIf2HX+)
> Log in screen

### Create subaccount (_site_)

![Create Sub-account](../images/messaing-2/getAccount.gif)
![Create Sub-account](http://bandwidth.d.pr/lx1lQl+)

##### Navigate to "Add a sub-account"
![Navigate to "Add a sub-account"](http://bandwidth.d.pr/KdxOZd+ "Navigate to 'Add a sub-account'")

##### Create new sub-account (_site_)
![Create New sub-account (site)](http://bandwidth.d.pr/mHUxn8+)


## Create Location (_sippeer_)

![Create Location](http://bandwidth.d.pr/vYNyB+)
![Create Location](../images/messaing-2/createLocation.gif)

##### Navigate to "Add a location"
![Navigate to "Add a location"](http://bandwidth.d.pr/8M8r3k+)

##### Enable SMS and MMS in the Location
![Enable SMS and MMS in the Location](http://bandwidth.d.pr/ORCT6s+)

##### You must have Toll Free and short codes enabled
![step](http://bandwidth.d.pr/bBt3Aj+)

If you don't have Toll Free and/or Short Code texting enabled on your account, contact [support](http://support.bandwidth.com) to enable.

##### Order Phone Number

![Order Phone Number](../images/messaing-2/orderNumber.gif)
![Order Phone Number](http://bandwidth.d.pr/KuwmRp+)


### Create the application

![Create Application](../images/messaing-2/createApplication.gif)
![Create Application](http://bandwidth.d.pr/3hWy0C+)

* Note the user-id in the url
* Need to have callbackurl here NOW!

```http
POST https://dashboard.bandwidth.com/api/accounts/{{accountId}}/applications
Content-Type: application/xml; charset=utf-8
Authorization: Basic dc123
```
```xml
<Application>
    <AppName>My Application</AppName>
    <CallbackUrl>https://requestb.in/zuaqjbzu</CallbackUrl>
    <CallbackCreds/>
</Application>
```

> Returns

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ApplicationProvisioningResponse>
    <Application>
        <ApplicationId>34fac80c-f3c7-4d23-94ba-2a56c34465e7</ApplicationId>
        <ServiceType>Messaging-V2</ServiceType>
        <AppName>My Application</AppName>
        <CallbackUrl>https://requestb.in/1m009f61</CallbackUrl>
        <CallbackCreds/>
    </Application>
</ApplicationProvisioningResponse>
```

Save the applicationId

### Assign the application to the location (_sippeer_)

##### Navigate to Account > Configurations > Location
![res](http://bandwidth.d.pr/dwginz+)

![res](http://bandwidth.d.pr/JRLQnS+)

```http
GET https://dashboard.bandwidth.com/api/accounts/{{accountId}}/sites/{{subAccountId}}/sippeers/{{locationId}}/products/messaging/applicationSettings
Authorization: Basic dc123
```

> Returns

```xml
<ApplicationsSettingsResponse>
    <ApplicationsSettings>
        <HttpMessagingV2AppId>34fac80c-f3c7-4d23-94ba-2a56c34465e7</HttpMessagingV2AppId>
    </ApplicationsSettings>
</ApplicationsSettingsResponse>
```

### `PUT` Request to update the application

```http
PUT https://dashboard.bandwidth.com/api/accounts/{{accountId}}/sites/{{subAccountId}}/sippeers/{{locationId}}/products/messaging/applicationSettings
Content-Type: application/xml; charset=utf-8
Authorization: Basic dc123
```
```xml
<ApplicationsSettings>
    <HttpMessagingV2AppId>34fac80c-f3c7-4d23-94ba-2a56c34465e7</HttpMessagingV2AppId>
</ApplicationsSettings>
```

### Send Text Message with new Number

![Send Message](../images/messaing-2/sendMessage.gif)
![Send Message](http://bandwidth.d.pr/I6vMxk+)

```http
POST https://api.catapult.inetwork.com/v2/users/{{userId}}/messages

{
  "from"          : "{{your-bandwidth-number}}",
  "to"            : "{{yourTN}}",
  "text"          : "Good morning, this is a test message",
  "applicationId" : "{{your-application-id}}"
}

