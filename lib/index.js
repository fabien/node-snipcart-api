const get = require('lodash/get');
const set = require('lodash/set');
const api = require('./api');

const self = Object.assign({ api }, {
  config: {
    url: 'https://app.snipcart.com/api',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  },
  set(key, value) {
    set(this.config, key, value);
    return this;
  },
  get(key) {
    return get(this.config, key);
  },
});

module.exports = self;
