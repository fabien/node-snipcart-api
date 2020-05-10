const get = require('lodash/get');
const lib = require('./lib');

const Snipcart = function Snipcart(apiKey, config) {
  Object.assign(this.config, config || {});
  this.set('apiKey', apiKey);
  this.api.config = this.config;
};

Object.assign(Snipcart.prototype, lib, {

  validateRequestToken(token, strict) {
    return this.api.validation.requestToken({
      urlParams: { token },
    }).then((result) => {
      return token === get(result, ['data', 'token'], '');
    }).catch((err) => {
      if (strict) return Promise.reject(err);
      return false;
    });
  },

});

module.exports = Snipcart;
