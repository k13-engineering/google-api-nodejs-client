/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* jshint maxlen: false */

import createAPIRequest from '../../lib/apirequest';

/**
 * CloudPrint API
 *
 * Lets you create, inspect, and manage goo.gl short URLs
 *
 * @example
 * const google = require('googleapis');
 * const cloudprint = google.cloudprint('v1beta1');
 *
 * @namespace cloudprint
 * @type {Function}
 * @version v1beta1
 * @variation v1beta1
 * @param {object=} options Options for Cloudprint
 */
function Cloudprint(options) { // eslint-disable-line
  const self = this;
  self._options = options || {};

  self.printers = {

    /**
     * cloudprint.printers.search
     *
     * @desc Search for printers.
     *
     * @alias cloudprint.printers.search
     * @memberOf! cloudprint(v1beta1)
     *
     * @param {object=} params Parameters for request
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    search: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: Object.assign({
          url: 'https://www.google.com/cloudprint/search',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        formDataParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * cloudprint.printers.get
     *
     * @desc Get printer info.
     *
     * @alias cloudprint.printers.get
     * @memberOf! cloudprint(v1beta1)
     *
     * @param {object=} params Parameters for request
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: Object.assign({
          url: 'https://www.google.com/cloudprint/printer',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        formDataParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.jobs = {

    /**
     * cloudprint.jobs.submit
     *
     * @desc Submit jobs for printer.
     *
     * @alias cloudprint.jobs.submit
     * @memberOf! cloudprint(v1beta1)
     *
     * @param {object=} params Parameters for request
     * @param {string} params.title 
     * @param {object} params.content 
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    submit: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: Object.assign({
          url: 'https://www.google.com/cloudprint/submit',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        formDataParams: ['content'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * @typedef Url
 * @memberOf! cloudprint(v1beta1)
 * @type object
 * @property {array} printers A summary of the click analytics for the short and long URL. Might not be present if not requested or currently unavailable.
 */
export = Cloudprint;
