# Serverless One-time Password

This repo consists of a series of code snippets written to authenticate a user through one-time password,
i.e. sending them a randomly generated code via SMS and, if the code matches, they will be sent a JWT indicating
that they're authenticated to the system. These snippets are [Google Cloud Functions](https://cloud.google.com/functions/)
that use [Firebase](https://firebase.google.com/) as the database engine and [Twilio](https://www.twilio.com/) to send
SMS.

Please bear in mind that, for these functions to work, you need a paid Firebase plan. For the purposes of
testing this code, you can use a Blaze plan (pay-as-you-go).

### Setup
* Create a Firebase project on [Firebase Console](https://console.firebase.google.com)
* Create a Firebase service account and save the JSON file inside `functions/service_account.json`
* Enable anonymous auth
* Create a Twilio account and obtain a phone number that's capable of sending SMS
* Add your account SID and auth token to `twilio-sample.js` and save as `twilio.js`
* Open the `/functions` directory in your terminal and run `npm install`

### Deployment
* Install Firebase CLI tools (`npm install -g firebase-tools`)
* Run `firebase deploy --project YOUR_PROJECT_ID` in your project root
