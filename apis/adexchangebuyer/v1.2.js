"use strict";
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
const apirequest_1 = require("../../lib/apirequest");
/**
 * Ad Exchange Buyer API
 *
 * Accesses your bidding-account information, submits creatives for validation, finds available direct deals, and retrieves performance reports.
 *
 * @example
 * const google = require('googleapis');
 * const adexchangebuyer = google.adexchangebuyer('v1.2');
 *
 * @namespace adexchangebuyer
 * @type {Function}
 * @version v1.2
 * @variation v1.2
 * @param {object=} options Options for Adexchangebuyer
 */
function Adexchangebuyer(options) {
    const self = this;
    self._options = options || {};
    self.accounts = {
        /**
         * adexchangebuyer.accounts.get
         *
         * @desc Gets one account by ID.
         *
         * @alias adexchangebuyer.accounts.get
         * @memberOf! adexchangebuyer(v1.2)
         *
         * @param {object} params Parameters for request
         * @param {integer} params.id The account id
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
                    url: 'https://www.googleapis.com/adexchangebuyer/v1.2/accounts/{id}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['id'],
                pathParams: ['id'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * adexchangebuyer.accounts.list
         *
         * @desc Retrieves the authenticated user's list of accounts.
         *
         * @alias adexchangebuyer.accounts.list
         * @memberOf! adexchangebuyer(v1.2)
         *
         * @param {object=} params Parameters for request
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/adexchangebuyer/v1.2/accounts',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * adexchangebuyer.accounts.patch
         *
         * @desc Updates an existing account. This method supports patch semantics.
         *
         * @alias adexchangebuyer.accounts.patch
         * @memberOf! adexchangebuyer(v1.2)
         *
         * @param {object} params Parameters for request
         * @param {integer} params.id The account id
         * @param {adexchangebuyer(v1.2).Account} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        patch: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/adexchangebuyer/v1.2/accounts/{id}',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['id'],
                pathParams: ['id'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * adexchangebuyer.accounts.update
         *
         * @desc Updates an existing account.
         *
         * @alias adexchangebuyer.accounts.update
         * @memberOf! adexchangebuyer(v1.2)
         *
         * @param {object} params Parameters for request
         * @param {integer} params.id The account id
         * @param {adexchangebuyer(v1.2).Account} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/adexchangebuyer/v1.2/accounts/{id}',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['id'],
                pathParams: ['id'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.creatives = {
        /**
         * adexchangebuyer.creatives.get
         *
         * @desc Gets the status for a single creative. A creative will be available 30-40 minutes after submission.
         *
         * @alias adexchangebuyer.creatives.get
         * @memberOf! adexchangebuyer(v1.2)
         *
         * @param {object} params Parameters for request
         * @param {integer} params.accountId The id for the account that will serve this creative.
         * @param {string} params.buyerCreativeId The buyer-specific id for this creative.
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
                    url: 'https://www.googleapis.com/adexchangebuyer/v1.2/creatives/{accountId}/{buyerCreativeId}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['accountId', 'buyerCreativeId'],
                pathParams: ['accountId', 'buyerCreativeId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * adexchangebuyer.creatives.insert
         *
         * @desc Submit a new creative.
         *
         * @alias adexchangebuyer.creatives.insert
         * @memberOf! adexchangebuyer(v1.2)
         *
         * @param {object} params Parameters for request
         * @param {adexchangebuyer(v1.2).Creative} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        insert: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/adexchangebuyer/v1.2/creatives',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * adexchangebuyer.creatives.list
         *
         * @desc Retrieves a list of the authenticated user's active creatives. A creative will be available 30-40 minutes after submission.
         *
         * @alias adexchangebuyer.creatives.list
         * @memberOf! adexchangebuyer(v1.2)
         *
         * @param {object=} params Parameters for request
         * @param {integer=} params.maxResults Maximum number of entries returned on one result page. If not set, the default is 100. Optional.
         * @param {string=} params.pageToken A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response. Optional.
         * @param {string=} params.statusFilter When specified, only creatives having the given status are returned.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/adexchangebuyer/v1.2/creatives',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
}
module.exports = Adexchangebuyer;
//# sourceMappingURL=v1.2.js.map