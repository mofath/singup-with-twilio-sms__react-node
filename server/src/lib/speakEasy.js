const speakeasy = require('speakeasy');

speakeasy.generateSecret({ length: 20 }).base32;

module.exports = {
  async totpgenerate() {
    speakeasy.generateSecret({ length: 20 }).base32;
    // response.send({
    //   token: Speakeasy.time({
    //     secret: request.body.secret,
    //     encoding: 'base32',
    //     step: 600, //10 mins
    //     window: 0,
    //   }),
    // });
  },
  async totpvalidate(request, response) {
    // secret: secret.base32,
    // response.send({
    //   valid: Speakeasy.time.verify({
    //     secret: request.body.secret,
    //     encoding: 'base32',
    //     token: request.body.token,
    //     step: 600, //10 mins
    //     window: 0,
    //   }),
    // });
  },
};

const secret = speakeasy.generateSecret({ length: 20 });

const token = speakeasy.totp({
  secret: secret.base32,
  encoding: 'base32',
  time: 120,
});

console.log(token);
