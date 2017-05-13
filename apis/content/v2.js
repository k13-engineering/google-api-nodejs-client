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
 * Content API for Shopping
 *
 * Manages product items, inventory, and Merchant Center accounts for Google Shopping.
 *
 * @example
 * const google = require('googleapis');
 * const content = google.content('v2');
 *
 * @namespace content
 * @type {Function}
 * @version v2
 * @variation v2
 * @param {object=} options Options for Content
 */
function Content(options) {
    const self = this;
    self._options = options || {};
    self.accounts = {
        /**
         * content.accounts.authinfo
         *
         * @desc Returns information about the authenticated user.
         *
         * @alias content.accounts.authinfo
         * @memberOf! content(v2)
         *
         * @param {object=} params Parameters for request
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        authinfo: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/content/v2/accounts/authinfo',
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
         * content.accounts.custombatch
         *
         * @desc Retrieves, inserts, updates, and deletes multiple Merchant Center (sub-)accounts in a single request.
         *
         * @alias content.accounts.custombatch
         * @memberOf! content(v2)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.dryRun Flag to run the request in dry-run mode.
         * @param {content(v2).AccountsCustomBatchRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        custombatch: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/content/v2/accounts/batch',
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
         * content.accounts.delete
         *
         * @desc Deletes a Merchant Center sub-account. This method can only be called for multi-client accounts.
         *
         * @alias content.accounts.delete
         * @memberOf! content(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The ID of the account.
         * @param {boolean=} params.dryRun Flag to run the request in dry-run mode.
         * @param {string} params.merchantId The ID of the managing account.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/content/v2/{merchantId}/accounts/{accountId}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'accountId'],
                pathParams: ['accountId', 'merchantId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * content.accounts.get
         *
         * @desc Retrieves a Merchant Center account. This method can only be called for accounts to which the managing account has access: either the managing account itself or sub-accounts if the managing account is a multi-client account.
         *
         * @alias content.accounts.get
         * @memberOf! content(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The ID of the account.
         * @param {string} params.merchantId The ID of the managing account.
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
                    url: 'https://www.googleapis.com/content/v2/{merchantId}/accounts/{accountId}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'accountId'],
                pathParams: ['accountId', 'merchantId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * content.accounts.insert
         *
         * @desc Creates a Merchant Center sub-account. This method can only be called for multi-client accounts.
         *
         * @alias content.accounts.insert
         * @memberOf! content(v2)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.dryRun Flag to run the request in dry-run mode.
         * @param {string} params.merchantId The ID of the managing account.
         * @param {content(v2).Account} params.resource Request body data
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
                    url: 'https://www.googleapis.com/content/v2/{merchantId}/accounts',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['merchantId'],
                pathParams: ['merchantId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * content.accounts.list
         *
         * @desc Lists the sub-accounts in your Merchant Center account. This method can only be called for multi-client accounts.
         *
         * @alias content.accounts.list
         * @memberOf! content(v2)
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.maxResults The maximum number of accounts to return in the response, used for paging.
         * @param {string} params.merchantId The ID of the managing account.
         * @param {string=} params.pageToken The token returned by the previous request.
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
                    url: 'https://www.googleapis.com/content/v2/{merchantId}/accounts',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['merchantId'],
                pathParams: ['merchantId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * content.accounts.patch
         *
         * @desc Updates a Merchant Center account. This method can only be called for accounts to which the managing account has access: either the managing account itself or sub-accounts if the managing account is a multi-client account. This method supports patch semantics.
         *
         * @alias content.accounts.patch
         * @memberOf! content(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The ID of the account.
         * @param {boolean=} params.dryRun Flag to run the request in dry-run mode.
         * @param {string} params.merchantId The ID of the managing account.
         * @param {content(v2).Account} params.resource Request body data
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
                    url: 'https://www.googleapis.com/content/v2/{merchantId}/accounts/{accountId}',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'accountId'],
                pathParams: ['accountId', 'merchantId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * content.accounts.update
         *
         * @desc Updates a Merchant Center account. This method can only be called for accounts to which the managing account has access: either the managing account itself or sub-accounts if the managing account is a multi-client account.
         *
         * @alias content.accounts.update
         * @memberOf! content(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The ID of the account.
         * @param {boolean=} params.dryRun Flag to run the request in dry-run mode.
         * @param {string} params.merchantId The ID of the managing account.
         * @param {content(v2).Account} params.resource Request body data
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
                    url: 'https://www.googleapis.com/content/v2/{merchantId}/accounts/{accountId}',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'accountId'],
                pathParams: ['accountId', 'merchantId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.accountstatuses = {
        /**
         * content.accountstatuses.custombatch
         *
         *
         *
         * @alias content.accountstatuses.custombatch
         * @memberOf! content(v2)
         *
         * @param {object} params Parameters for request
         * @param {content(v2).AccountstatusesCustomBatchRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        custombatch: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/content/v2/accountstatuses/batch',
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
         * content.accountstatuses.get
         *
         * @desc Retrieves the status of a Merchant Center account. This method can only be called for accounts to which the managing account has access: either the managing account itself or sub-accounts if the managing account is a multi-client account.
         *
         * @alias content.accountstatuses.get
         * @memberOf! content(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The ID of the account.
         * @param {string} params.merchantId The ID of the managing account.
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
                    url: 'https://www.googleapis.com/content/v2/{merchantId}/accountstatuses/{accountId}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'accountId'],
                pathParams: ['accountId', 'merchantId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * content.accountstatuses.list
         *
         * @desc Lists the statuses of the sub-accounts in your Merchant Center account. This method can only be called for multi-client accounts.
         *
         * @alias content.accountstatuses.list
         * @memberOf! content(v2)
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.maxResults The maximum number of account statuses to return in the response, used for paging.
         * @param {string} params.merchantId The ID of the managing account.
         * @param {string=} params.pageToken The token returned by the previous request.
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
                    url: 'https://www.googleapis.com/content/v2/{merchantId}/accountstatuses',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['merchantId'],
                pathParams: ['merchantId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.accounttax = {
        /**
         * content.accounttax.custombatch
         *
         * @desc Retrieves and updates tax settings of multiple accounts in a single request.
         *
         * @alias content.accounttax.custombatch
         * @memberOf! content(v2)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.dryRun Flag to run the request in dry-run mode.
         * @param {content(v2).AccounttaxCustomBatchRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        custombatch: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/content/v2/accounttax/batch',
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
         * content.accounttax.get
         *
         * @desc Retrieves the tax settings of the account. This method can only be called for accounts to which the managing account has access: either the managing account itself or sub-accounts if the managing account is a multi-client account.
         *
         * @alias content.accounttax.get
         * @memberOf! content(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The ID of the account for which to get/update account tax settings.
         * @param {string} params.merchantId The ID of the managing account.
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
                    url: 'https://www.googleapis.com/content/v2/{merchantId}/accounttax/{accountId}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'accountId'],
                pathParams: ['accountId', 'merchantId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * content.accounttax.list
         *
         * @desc Lists the tax settings of the sub-accounts in your Merchant Center account. This method can only be called for multi-client accounts.
         *
         * @alias content.accounttax.list
         * @memberOf! content(v2)
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.maxResults The maximum number of tax settings to return in the response, used for paging.
         * @param {string} params.merchantId The ID of the managing account.
         * @param {string=} params.pageToken The token returned by the previous request.
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
                    url: 'https://www.googleapis.com/content/v2/{merchantId}/accounttax',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['merchantId'],
                pathParams: ['merchantId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * content.accounttax.patch
         *
         * @desc Updates the tax settings of the account. This method can only be called for accounts to which the managing account has access: either the managing account itself or sub-accounts if the managing account is a multi-client account. This method supports patch semantics.
         *
         * @alias content.accounttax.patch
         * @memberOf! content(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The ID of the account for which to get/update account tax settings.
         * @param {boolean=} params.dryRun Flag to run the request in dry-run mode.
         * @param {string} params.merchantId The ID of the managing account.
         * @param {content(v2).AccountTax} params.resource Request body data
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
                    url: 'https://www.googleapis.com/content/v2/{merchantId}/accounttax/{accountId}',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'accountId'],
                pathParams: ['accountId', 'merchantId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * content.accounttax.update
         *
         * @desc Updates the tax settings of the account. This method can only be called for accounts to which the managing account has access: either the managing account itself or sub-accounts if the managing account is a multi-client account.
         *
         * @alias content.accounttax.update
         * @memberOf! content(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The ID of the account for which to get/update account tax settings.
         * @param {boolean=} params.dryRun Flag to run the request in dry-run mode.
         * @param {string} params.merchantId The ID of the managing account.
         * @param {content(v2).AccountTax} params.resource Request body data
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
                    url: 'https://www.googleapis.com/content/v2/{merchantId}/accounttax/{accountId}',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'accountId'],
                pathParams: ['accountId', 'merchantId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.datafeeds = {
        /**
         * content.datafeeds.custombatch
         *
         *
         *
         * @alias content.datafeeds.custombatch
         * @memberOf! content(v2)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.dryRun Flag to run the request in dry-run mode.
         * @param {content(v2).DatafeedsCustomBatchRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        custombatch: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/content/v2/datafeeds/batch',
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
         * content.datafeeds.delete
         *
         * @desc Deletes a datafeed from your Merchant Center account. This method can only be called for non-multi-client accounts.
         *
         * @alias content.datafeeds.delete
         * @memberOf! content(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.datafeedId
         * @param {boolean=} params.dryRun Flag to run the request in dry-run mode.
         * @param {string} params.merchantId
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/content/v2/{merchantId}/datafeeds/{datafeedId}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'datafeedId'],
                pathParams: ['datafeedId', 'merchantId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * content.datafeeds.get
         *
         * @desc Retrieves a datafeed from your Merchant Center account. This method can only be called for non-multi-client accounts.
         *
         * @alias content.datafeeds.get
         * @memberOf! content(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.datafeedId
         * @param {string} params.merchantId
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
                    url: 'https://www.googleapis.com/content/v2/{merchantId}/datafeeds/{datafeedId}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'datafeedId'],
                pathParams: ['datafeedId', 'merchantId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * content.datafeeds.insert
         *
         * @desc Registers a datafeed with your Merchant Center account. This method can only be called for non-multi-client accounts.
         *
         * @alias content.datafeeds.insert
         * @memberOf! content(v2)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.dryRun Flag to run the request in dry-run mode.
         * @param {string} params.merchantId
         * @param {content(v2).Datafeed} params.resource Request body data
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
                    url: 'https://www.googleapis.com/content/v2/{merchantId}/datafeeds',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['merchantId'],
                pathParams: ['merchantId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * content.datafeeds.list
         *
         * @desc Lists the datafeeds in your Merchant Center account. This method can only be called for non-multi-client accounts.
         *
         * @alias content.datafeeds.list
         * @memberOf! content(v2)
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.maxResults The maximum number of products to return in the response, used for paging.
         * @param {string} params.merchantId The ID of the managing account.
         * @param {string=} params.pageToken The token returned by the previous request.
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
                    url: 'https://www.googleapis.com/content/v2/{merchantId}/datafeeds',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['merchantId'],
                pathParams: ['merchantId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * content.datafeeds.patch
         *
         * @desc Updates a datafeed of your Merchant Center account. This method can only be called for non-multi-client accounts. This method supports patch semantics.
         *
         * @alias content.datafeeds.patch
         * @memberOf! content(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.datafeedId
         * @param {boolean=} params.dryRun Flag to run the request in dry-run mode.
         * @param {string} params.merchantId
         * @param {content(v2).Datafeed} params.resource Request body data
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
                    url: 'https://www.googleapis.com/content/v2/{merchantId}/datafeeds/{datafeedId}',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'datafeedId'],
                pathParams: ['datafeedId', 'merchantId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * content.datafeeds.update
         *
         * @desc Updates a datafeed of your Merchant Center account. This method can only be called for non-multi-client accounts.
         *
         * @alias content.datafeeds.update
         * @memberOf! content(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.datafeedId
         * @param {boolean=} params.dryRun Flag to run the request in dry-run mode.
         * @param {string} params.merchantId
         * @param {content(v2).Datafeed} params.resource Request body data
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
                    url: 'https://www.googleapis.com/content/v2/{merchantId}/datafeeds/{datafeedId}',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'datafeedId'],
                pathParams: ['datafeedId', 'merchantId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.datafeedstatuses = {
        /**
         * content.datafeedstatuses.custombatch
         *
         *
         *
         * @alias content.datafeedstatuses.custombatch
         * @memberOf! content(v2)
         *
         * @param {object} params Parameters for request
         * @param {content(v2).DatafeedstatusesCustomBatchRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        custombatch: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/content/v2/datafeedstatuses/batch',
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
         * content.datafeedstatuses.get
         *
         * @desc Retrieves the status of a datafeed from your Merchant Center account. This method can only be called for non-multi-client accounts.
         *
         * @alias content.datafeedstatuses.get
         * @memberOf! content(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.datafeedId
         * @param {string} params.merchantId
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
                    url: 'https://www.googleapis.com/content/v2/{merchantId}/datafeedstatuses/{datafeedId}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'datafeedId'],
                pathParams: ['datafeedId', 'merchantId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * content.datafeedstatuses.list
         *
         * @desc Lists the statuses of the datafeeds in your Merchant Center account. This method can only be called for non-multi-client accounts.
         *
         * @alias content.datafeedstatuses.list
         * @memberOf! content(v2)
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.maxResults The maximum number of products to return in the response, used for paging.
         * @param {string} params.merchantId The ID of the managing account.
         * @param {string=} params.pageToken The token returned by the previous request.
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
                    url: 'https://www.googleapis.com/content/v2/{merchantId}/datafeedstatuses',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['merchantId'],
                pathParams: ['merchantId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.inventory = {
        /**
         * content.inventory.custombatch
         *
         * @desc Updates price and availability for multiple products or stores in a single request. This operation does not update the expiration date of the products. This method can only be called for non-multi-client accounts.
         *
         * @alias content.inventory.custombatch
         * @memberOf! content(v2)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.dryRun Flag to run the request in dry-run mode.
         * @param {content(v2).InventoryCustomBatchRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        custombatch: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/content/v2/inventory/batch',
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
         * content.inventory.set
         *
         * @desc Updates price and availability of a product in your Merchant Center account. This operation does not update the expiration date of the product. This method can only be called for non-multi-client accounts.
         *
         * @alias content.inventory.set
         * @memberOf! content(v2)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.dryRun Flag to run the request in dry-run mode.
         * @param {string} params.merchantId The ID of the managing account.
         * @param {string} params.productId The ID of the product for which to update price and availability.
         * @param {string} params.storeCode The code of the store for which to update price and availability. Use online to update price and availability of an online product.
         * @param {content(v2).InventorySetRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        set: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/content/v2/{merchantId}/inventory/{storeCode}/products/{productId}',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'storeCode', 'productId'],
                pathParams: ['merchantId', 'productId', 'storeCode'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.orders = {
        /**
         * content.orders.acknowledge
         *
         * @desc Marks an order as acknowledged. This method can only be called for non-multi-client accounts.
         *
         * @alias content.orders.acknowledge
         * @memberOf! content(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the managing account.
         * @param {string} params.orderId The ID of the order.
         * @param {content(v2).OrdersAcknowledgeRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        acknowledge: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/content/v2/{merchantId}/orders/{orderId}/acknowledge',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'orderId'],
                pathParams: ['merchantId', 'orderId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * content.orders.advancetestorder
         *
         * @desc Sandbox only. Moves a test order from state "inProgress" to state "pendingShipment". This method can only be called for non-multi-client accounts.
         *
         * @alias content.orders.advancetestorder
         * @memberOf! content(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the managing account.
         * @param {string} params.orderId The ID of the test order to modify.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        advancetestorder: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/content/v2/{merchantId}/testorders/{orderId}/advance',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'orderId'],
                pathParams: ['merchantId', 'orderId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * content.orders.cancel
         *
         * @desc Cancels all line items in an order, making a full refund. This method can only be called for non-multi-client accounts.
         *
         * @alias content.orders.cancel
         * @memberOf! content(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the managing account.
         * @param {string} params.orderId The ID of the order to cancel.
         * @param {content(v2).OrdersCancelRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        cancel: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/content/v2/{merchantId}/orders/{orderId}/cancel',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'orderId'],
                pathParams: ['merchantId', 'orderId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * content.orders.cancellineitem
         *
         * @desc Cancels a line item, making a full refund. This method can only be called for non-multi-client accounts.
         *
         * @alias content.orders.cancellineitem
         * @memberOf! content(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the managing account.
         * @param {string} params.orderId The ID of the order.
         * @param {content(v2).OrdersCancelLineItemRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        cancellineitem: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/content/v2/{merchantId}/orders/{orderId}/cancelLineItem',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'orderId'],
                pathParams: ['merchantId', 'orderId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * content.orders.createtestorder
         *
         * @desc Sandbox only. Creates a test order. This method can only be called for non-multi-client accounts.
         *
         * @alias content.orders.createtestorder
         * @memberOf! content(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the managing account.
         * @param {content(v2).OrdersCreateTestOrderRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        createtestorder: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/content/v2/{merchantId}/testorders',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['merchantId'],
                pathParams: ['merchantId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * content.orders.custombatch
         *
         * @desc Retrieves or modifies multiple orders in a single request. This method can only be called for non-multi-client accounts.
         *
         * @alias content.orders.custombatch
         * @memberOf! content(v2)
         *
         * @param {object} params Parameters for request
         * @param {content(v2).OrdersCustomBatchRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        custombatch: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/content/v2/orders/batch',
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
         * content.orders.get
         *
         * @desc Retrieves an order from your Merchant Center account. This method can only be called for non-multi-client accounts.
         *
         * @alias content.orders.get
         * @memberOf! content(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the managing account.
         * @param {string} params.orderId The ID of the order.
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
                    url: 'https://www.googleapis.com/content/v2/{merchantId}/orders/{orderId}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'orderId'],
                pathParams: ['merchantId', 'orderId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * content.orders.getbymerchantorderid
         *
         * @desc Retrieves an order using merchant order id. This method can only be called for non-multi-client accounts.
         *
         * @alias content.orders.getbymerchantorderid
         * @memberOf! content(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the managing account.
         * @param {string} params.merchantOrderId The merchant order id to be looked for.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getbymerchantorderid: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/content/v2/{merchantId}/ordersbymerchantid/{merchantOrderId}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'merchantOrderId'],
                pathParams: ['merchantId', 'merchantOrderId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * content.orders.gettestordertemplate
         *
         * @desc Sandbox only. Retrieves an order template that can be used to quickly create a new order in sandbox. This method can only be called for non-multi-client accounts.
         *
         * @alias content.orders.gettestordertemplate
         * @memberOf! content(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the managing account.
         * @param {string} params.templateName The name of the template to retrieve.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        gettestordertemplate: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/content/v2/{merchantId}/testordertemplates/{templateName}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'templateName'],
                pathParams: ['merchantId', 'templateName'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * content.orders.list
         *
         * @desc Lists the orders in your Merchant Center account. This method can only be called for non-multi-client accounts.
         *
         * @alias content.orders.list
         * @memberOf! content(v2)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.acknowledged Obtains orders that match the acknowledgement status. When set to true, obtains orders that have been acknowledged. When false, obtains orders that have not been acknowledged. We recommend using this filter set to false, in conjunction with the acknowledge call, such that only un-acknowledged orders are returned.
         * @param {integer=} params.maxResults The maximum number of orders to return in the response, used for paging. The default value is 25 orders per page, and the maximum allowed value is 250 orders per page. Known issue: All List calls will return all Orders without limit regardless of the value of this field.
         * @param {string} params.merchantId The ID of the managing account.
         * @param {string=} params.orderBy The ordering of the returned list. The only supported value are placedDate desc and placedDate asc for now, which returns orders sorted by placement date. "placedDate desc" stands for listing orders by placement date, from oldest to most recent. "placedDate asc" stands for listing orders by placement date, from most recent to oldest. In future releases we'll support other sorting criteria.
         * @param {string=} params.pageToken The token returned by the previous request.
         * @param {string=} params.placedDateEnd Obtains orders placed before this date (exclusively), in ISO 8601 format.
         * @param {string=} params.placedDateStart Obtains orders placed after this date (inclusively), in ISO 8601 format.
         * @param {string=} params.statuses Obtains orders that match any of the specified statuses. Multiple values can be specified with comma separation. Additionally, please note that active is a shortcut for pendingShipment and partiallyShipped, and completed is a shortcut for shipped , partiallyDelivered, delivered, partiallyReturned, returned, and canceled.
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
                    url: 'https://www.googleapis.com/content/v2/{merchantId}/orders',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['merchantId'],
                pathParams: ['merchantId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * content.orders.refund
         *
         * @desc Refund a portion of the order, up to the full amount paid. This method can only be called for non-multi-client accounts.
         *
         * @alias content.orders.refund
         * @memberOf! content(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the managing account.
         * @param {string} params.orderId The ID of the order to refund.
         * @param {content(v2).OrdersRefundRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        refund: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/content/v2/{merchantId}/orders/{orderId}/refund',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'orderId'],
                pathParams: ['merchantId', 'orderId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * content.orders.returnlineitem
         *
         * @desc Returns a line item. This method can only be called for non-multi-client accounts.
         *
         * @alias content.orders.returnlineitem
         * @memberOf! content(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the managing account.
         * @param {string} params.orderId The ID of the order.
         * @param {content(v2).OrdersReturnLineItemRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        returnlineitem: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/content/v2/{merchantId}/orders/{orderId}/returnLineItem',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'orderId'],
                pathParams: ['merchantId', 'orderId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * content.orders.shiplineitems
         *
         * @desc Marks line item(s) as shipped. This method can only be called for non-multi-client accounts.
         *
         * @alias content.orders.shiplineitems
         * @memberOf! content(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the managing account.
         * @param {string} params.orderId The ID of the order.
         * @param {content(v2).OrdersShipLineItemsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        shiplineitems: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/content/v2/{merchantId}/orders/{orderId}/shipLineItems',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'orderId'],
                pathParams: ['merchantId', 'orderId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * content.orders.updatemerchantorderid
         *
         * @desc Updates the merchant order ID for a given order. This method can only be called for non-multi-client accounts.
         *
         * @alias content.orders.updatemerchantorderid
         * @memberOf! content(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the managing account.
         * @param {string} params.orderId The ID of the order.
         * @param {content(v2).OrdersUpdateMerchantOrderIdRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        updatemerchantorderid: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/content/v2/{merchantId}/orders/{orderId}/updateMerchantOrderId',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'orderId'],
                pathParams: ['merchantId', 'orderId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * content.orders.updateshipment
         *
         * @desc Updates a shipment's status, carrier, and/or tracking ID. This method can only be called for non-multi-client accounts.
         *
         * @alias content.orders.updateshipment
         * @memberOf! content(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the managing account.
         * @param {string} params.orderId The ID of the order.
         * @param {content(v2).OrdersUpdateShipmentRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        updateshipment: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/content/v2/{merchantId}/orders/{orderId}/updateShipment',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'orderId'],
                pathParams: ['merchantId', 'orderId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.products = {
        /**
         * content.products.custombatch
         *
         * @desc Retrieves, inserts, and deletes multiple products in a single request. This method can only be called for non-multi-client accounts.
         *
         * @alias content.products.custombatch
         * @memberOf! content(v2)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.dryRun Flag to run the request in dry-run mode.
         * @param {content(v2).ProductsCustomBatchRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        custombatch: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/content/v2/products/batch',
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
         * content.products.delete
         *
         * @desc Deletes a product from your Merchant Center account. This method can only be called for non-multi-client accounts.
         *
         * @alias content.products.delete
         * @memberOf! content(v2)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.dryRun Flag to run the request in dry-run mode.
         * @param {string} params.merchantId The ID of the managing account.
         * @param {string} params.productId The ID of the product.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/content/v2/{merchantId}/products/{productId}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'productId'],
                pathParams: ['merchantId', 'productId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * content.products.get
         *
         * @desc Retrieves a product from your Merchant Center account. This method can only be called for non-multi-client accounts.
         *
         * @alias content.products.get
         * @memberOf! content(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the managing account.
         * @param {string} params.productId The ID of the product.
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
                    url: 'https://www.googleapis.com/content/v2/{merchantId}/products/{productId}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'productId'],
                pathParams: ['merchantId', 'productId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * content.products.insert
         *
         * @desc Uploads a product to your Merchant Center account. If an item with the same channel, contentLanguage, offerId, and targetCountry already exists, this method updates that entry. This method can only be called for non-multi-client accounts.
         *
         * @alias content.products.insert
         * @memberOf! content(v2)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.dryRun Flag to run the request in dry-run mode.
         * @param {string} params.merchantId The ID of the managing account.
         * @param {content(v2).Product} params.resource Request body data
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
                    url: 'https://www.googleapis.com/content/v2/{merchantId}/products',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['merchantId'],
                pathParams: ['merchantId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * content.products.list
         *
         * @desc Lists the products in your Merchant Center account. This method can only be called for non-multi-client accounts.
         *
         * @alias content.products.list
         * @memberOf! content(v2)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.includeInvalidInsertedItems Flag to include the invalid inserted items in the result of the list request. By default the invalid items are not shown (the default value is false).
         * @param {integer=} params.maxResults The maximum number of products to return in the response, used for paging.
         * @param {string} params.merchantId The ID of the managing account.
         * @param {string=} params.pageToken The token returned by the previous request.
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
                    url: 'https://www.googleapis.com/content/v2/{merchantId}/products',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['merchantId'],
                pathParams: ['merchantId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.productstatuses = {
        /**
         * content.productstatuses.custombatch
         *
         * @desc Gets the statuses of multiple products in a single request. This method can only be called for non-multi-client accounts.
         *
         * @alias content.productstatuses.custombatch
         * @memberOf! content(v2)
         *
         * @param {object} params Parameters for request
         * @param {content(v2).ProductstatusesCustomBatchRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        custombatch: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/content/v2/productstatuses/batch',
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
         * content.productstatuses.get
         *
         * @desc Gets the status of a product from your Merchant Center account. This method can only be called for non-multi-client accounts.
         *
         * @alias content.productstatuses.get
         * @memberOf! content(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the managing account.
         * @param {string} params.productId The ID of the product.
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
                    url: 'https://www.googleapis.com/content/v2/{merchantId}/productstatuses/{productId}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'productId'],
                pathParams: ['merchantId', 'productId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * content.productstatuses.list
         *
         * @desc Lists the statuses of the products in your Merchant Center account. This method can only be called for non-multi-client accounts.
         *
         * @alias content.productstatuses.list
         * @memberOf! content(v2)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.includeInvalidInsertedItems Flag to include the invalid inserted items in the result of the list request. By default the invalid items are not shown (the default value is false).
         * @param {integer=} params.maxResults The maximum number of product statuses to return in the response, used for paging.
         * @param {string} params.merchantId The ID of the managing account.
         * @param {string=} params.pageToken The token returned by the previous request.
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
                    url: 'https://www.googleapis.com/content/v2/{merchantId}/productstatuses',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['merchantId'],
                pathParams: ['merchantId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.shippingsettings = {
        /**
         * content.shippingsettings.custombatch
         *
         * @desc Retrieves and updates the shipping settings of multiple accounts in a single request.
         *
         * @alias content.shippingsettings.custombatch
         * @memberOf! content(v2)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.dryRun Flag to run the request in dry-run mode.
         * @param {content(v2).ShippingsettingsCustomBatchRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        custombatch: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/content/v2/shippingsettings/batch',
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
         * content.shippingsettings.get
         *
         * @desc Retrieves the shipping settings of the account. This method can only be called for accounts to which the managing account has access: either the managing account itself or sub-accounts if the managing account is a multi-client account.
         *
         * @alias content.shippingsettings.get
         * @memberOf! content(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The ID of the account for which to get/update shipping settings.
         * @param {string} params.merchantId The ID of the managing account.
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
                    url: 'https://www.googleapis.com/content/v2/{merchantId}/shippingsettings/{accountId}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'accountId'],
                pathParams: ['accountId', 'merchantId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * content.shippingsettings.getsupportedcarriers
         *
         * @desc Retrieves supported carriers and carrier services for an account.
         *
         * @alias content.shippingsettings.getsupportedcarriers
         * @memberOf! content(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.merchantId The ID of the account for which to retrieve the supported carriers.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getsupportedcarriers: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/content/v2/{merchantId}/supportedCarriers',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['merchantId'],
                pathParams: ['merchantId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * content.shippingsettings.list
         *
         * @desc Lists the shipping settings of the sub-accounts in your Merchant Center account. This method can only be called for multi-client accounts.
         *
         * @alias content.shippingsettings.list
         * @memberOf! content(v2)
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.maxResults The maximum number of shipping settings to return in the response, used for paging.
         * @param {string} params.merchantId The ID of the managing account.
         * @param {string=} params.pageToken The token returned by the previous request.
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
                    url: 'https://www.googleapis.com/content/v2/{merchantId}/shippingsettings',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['merchantId'],
                pathParams: ['merchantId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * content.shippingsettings.patch
         *
         * @desc Updates the shipping settings of the account. This method can only be called for accounts to which the managing account has access: either the managing account itself or sub-accounts if the managing account is a multi-client account. This method supports patch semantics.
         *
         * @alias content.shippingsettings.patch
         * @memberOf! content(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The ID of the account for which to get/update shipping settings.
         * @param {boolean=} params.dryRun Flag to run the request in dry-run mode.
         * @param {string} params.merchantId The ID of the managing account.
         * @param {content(v2).ShippingSettings} params.resource Request body data
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
                    url: 'https://www.googleapis.com/content/v2/{merchantId}/shippingsettings/{accountId}',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'accountId'],
                pathParams: ['accountId', 'merchantId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * content.shippingsettings.update
         *
         * @desc Updates the shipping settings of the account. This method can only be called for accounts to which the managing account has access: either the managing account itself or sub-accounts if the managing account is a multi-client account.
         *
         * @alias content.shippingsettings.update
         * @memberOf! content(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The ID of the account for which to get/update shipping settings.
         * @param {boolean=} params.dryRun Flag to run the request in dry-run mode.
         * @param {string} params.merchantId The ID of the managing account.
         * @param {content(v2).ShippingSettings} params.resource Request body data
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
                    url: 'https://www.googleapis.com/content/v2/{merchantId}/shippingsettings/{accountId}',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['merchantId', 'accountId'],
                pathParams: ['accountId', 'merchantId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
}
module.exports = Content;
//# sourceMappingURL=v2.js.map