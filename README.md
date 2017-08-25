# Serverless One-time Password

This repo consists of a series of code snippets written to authenticate a user through one-time password,
i.e. sending them a randomly generated code via SMS and, if the code matches, they will be sent a JWT indicating
that they're authenticated to the system. These snippets are [Google Cloud Functions](https://cloud.google.com/functions/)
that use [Firebase](https://firebase.google.com/) as the database engine and [Twilio](https://www.twilio.com/) to send
SMS.

Please bear in mind that, for these functions to work, you need a paid Firebase plan. For the purposes of
testing this code, you can use a Blaze plan (pay-as-you-go).
