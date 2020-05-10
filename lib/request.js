const axios = require('axios');
const merge = require('lodash/merge');
const format = require('string-template');
const get = require('lodash/get');

const self = {};

self.makeRequest = function makeRequest(options = {}) {
  const apiKey = get(this.api.config, 'apiKey');
  const headers = get(this.api.config, 'headers');
  const baseURL = get(this.api.config, 'url');
  const reqOpts = merge(
    {
      baseURL,
      headers,
      auth: {
        username: apiKey,
        password: '',
      },
    },
    this.opts,
    options,
  );

  const urlParams = reqOpts.urlParams || {};
  reqOpts.url = format(reqOpts.url, urlParams);

  // See: https://github.com/axios/axios for all options:
  // - params: { ... } query params
  // - data: { ... } body for PUT/POST

  return axios(reqOpts);
};

module.exports = self;
