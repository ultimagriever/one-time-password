const { Twilio } = require('twilio');

const accountSid = 'YOUR_ACCOUNT_SID';
const authToken = 'YOUR_ACCOUNT_TOKEN';

module.exports = new Twilio(accountSid, authToken);
