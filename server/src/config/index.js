require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 3001,
  twilio: {
    sid: process.env.TWILIO_ACCOUNT_SID,
    token: process.env.TWILIO_AUTH_TOKEN,
    phone: process.env.TWILIO_PHONE,
  },
};
