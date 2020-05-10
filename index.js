const lib = require('./lib');

const Snipcart = function Snipcart(apiKey, config) {
  Object.assign(this.config, config || {});
  this.set('apiKey', apiKey);
  this.api.config = this.config;
};

Object.assign(Snipcart.prototype, lib);

module.exports = Snipcart;
