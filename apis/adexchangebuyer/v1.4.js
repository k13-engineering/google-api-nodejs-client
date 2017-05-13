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
 * const adexchangebuyer = google.adexchangebuyer('v1.4');
 *
 * @namespace adexchangebuyer
 * @type {Function}
 * @version v1.4
 * @variation v1.4
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
         * @memberOf! adexchangebuyer(v1.4)
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
                    url: 'https://www.googleapis.com/adexchangebuyer/v1.4/accounts/{id}',
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
         * @memberOf! adexchangebuyer(v1.4)
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
                    url: 'https://www.googleapis.com/adexchangebuyer/v1.4/accounts',
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
         * @memberOf! adexchangebuyer(v1.4)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.confirmUnsafeAccountChange Confirmation for erasing bidder and cookie matching urls.
         * @param {integer} params.id The account id
         * @param {adexchangebuyer(v1.4).Account} params.resource Request body data
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
                    url: 'https://www.googleapis.com/adexchangebuyer/v1.4/accounts/{id}',
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
         * @memberOf! adexchangebuyer(v1.4)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.confirmUnsafeAccountChange Confirmation for erasing bidder and cookie matching urls.
         * @param {integer} params.id The account id
         * @param {adexchangebuyer(v1.4).Account} params.resource Request body data
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
                    url: 'https://www.googleapis.com/adexchangebuyer/v1.4/accounts/{id}',
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
    self.billingInfo = {
        /**
         * adexchangebuyer.billingInfo.get
         *
         * @desc Returns the billing information for one account specified by account ID.
         *
         * @alias adexchangebuyer.billingInfo.get
         * @memberOf! adexchangebuyer(v1.4)
         *
         * @param {object} params Parameters for request
         * @param {integer} params.accountId The account id.
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
                    url: 'https://www.googleapis.com/adexchangebuyer/v1.4/billinginfo/{accountId}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['accountId'],
                pathParams: ['accountId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * adexchangebuyer.billingInfo.list
         *
         * @desc Retrieves a list of billing information for all accounts of the authenticated user.
         *
         * @alias adexchangebuyer.billingInfo.list
         * @memberOf! adexchangebuyer(v1.4)
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
                    url: 'https://www.googleapis.com/adexchangebuyer/v1.4/billinginfo',
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
    self.budget = {
        /**
         * adexchangebuyer.budget.get
         *
         * @desc Returns the budget information for the adgroup specified by the accountId and billingId.
         *
         * @alias adexchangebuyer.budget.get
         * @memberOf! adexchangebuyer(v1.4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The account id to get the budget information for.
         * @param {string} params.billingId The billing id to get the budget information for.
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
                    url: 'https://www.googleapis.com/adexchangebuyer/v1.4/billinginfo/{accountId}/{billingId}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['accountId', 'billingId'],
                pathParams: ['accountId', 'billingId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * adexchangebuyer.budget.patch
         *
         * @desc Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request. This method supports patch semantics.
         *
         * @alias adexchangebuyer.budget.patch
         * @memberOf! adexchangebuyer(v1.4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The account id associated with the budget being updated.
         * @param {string} params.billingId The billing id associated with the budget being updated.
         * @param {adexchangebuyer(v1.4).Budget} params.resource Request body data
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
                    url: 'https://www.googleapis.com/adexchangebuyer/v1.4/billinginfo/{accountId}/{billingId}',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['accountId', 'billingId'],
                pathParams: ['accountId', 'billingId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * adexchangebuyer.budget.update
         *
         * @desc Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request.
         *
         * @alias adexchangebuyer.budget.update
         * @memberOf! adexchangebuyer(v1.4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The account id associated with the budget being updated.
         * @param {string} params.billingId The billing id associated with the budget being updated.
         * @param {adexchangebuyer(v1.4).Budget} params.resource Request body data
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
                    url: 'https://www.googleapis.com/adexchangebuyer/v1.4/billinginfo/{accountId}/{billingId}',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['accountId', 'billingId'],
                pathParams: ['accountId', 'billingId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.creatives = {
        /**
         * adexchangebuyer.creatives.addDeal
         *
         * @desc Add a deal id association for the creative.
         *
         * @alias adexchangebuyer.creatives.addDeal
         * @memberOf! adexchangebuyer(v1.4)
         *
         * @param {object} params Parameters for request
         * @param {integer} params.accountId The id for the account that will serve this creative.
         * @param {string} params.buyerCreativeId The buyer-specific id for this creative.
         * @param {string} params.dealId The id of the deal id to associate with this creative.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        addDeal: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/adexchangebuyer/v1.4/creatives/{accountId}/{buyerCreativeId}/addDeal/{dealId}',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['accountId', 'buyerCreativeId', 'dealId'],
                pathParams: ['accountId', 'buyerCreativeId', 'dealId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * adexchangebuyer.creatives.get
         *
         * @desc Gets the status for a single creative. A creative will be available 30-40 minutes after submission.
         *
         * @alias adexchangebuyer.creatives.get
         * @memberOf! adexchangebuyer(v1.4)
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
                    url: 'https://www.googleapis.com/adexchangebuyer/v1.4/creatives/{accountId}/{buyerCreativeId}',
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
         * @memberOf! adexchangebuyer(v1.4)
         *
         * @param {object} params Parameters for request
         * @param {adexchangebuyer(v1.4).Creative} params.resource Request body data
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
                    url: 'https://www.googleapis.com/adexchangebuyer/v1.4/creatives',
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
         * @memberOf! adexchangebuyer(v1.4)
         *
         * @param {object=} params Parameters for request
         * @param {integer=} params.accountId When specified, only creatives for the given account ids are returned.
         * @param {string=} params.buyerCreativeId When specified, only creatives for the given buyer creative ids are returned.
         * @param {string=} params.dealsStatusFilter When specified, only creatives having the given deals status are returned.
         * @param {integer=} params.maxResults Maximum number of entries returned on one result page. If not set, the default is 100. Optional.
         * @param {string=} params.openAuctionStatusFilter When specified, only creatives having the given open auction status are returned.
         * @param {string=} params.pageToken A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response. Optional.
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
                    url: 'https://www.googleapis.com/adexchangebuyer/v1.4/creatives',
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
         * adexchangebuyer.creatives.listDeals
         *
         * @desc Lists the external deal ids associated with the creative.
         *
         * @alias adexchangebuyer.creatives.listDeals
         * @memberOf! adexchangebuyer(v1.4)
         *
         * @param {object} params Parameters for request
         * @param {integer} params.accountId The id for the account that will serve this creative.
         * @param {string} params.buyerCreativeId The buyer-specific id for this creative.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        listDeals: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/adexchangebuyer/v1.4/creatives/{accountId}/{buyerCreativeId}/listDeals',
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
         * adexchangebuyer.creatives.removeDeal
         *
         * @desc Remove a deal id associated with the creative.
         *
         * @alias adexchangebuyer.creatives.removeDeal
         * @memberOf! adexchangebuyer(v1.4)
         *
         * @param {object} params Parameters for request
         * @param {integer} params.accountId The id for the account that will serve this creative.
         * @param {string} params.buyerCreativeId The buyer-specific id for this creative.
         * @param {string} params.dealId The id of the deal id to disassociate with this creative.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        removeDeal: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/adexchangebuyer/v1.4/creatives/{accountId}/{buyerCreativeId}/removeDeal/{dealId}',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['accountId', 'buyerCreativeId', 'dealId'],
                pathParams: ['accountId', 'buyerCreativeId', 'dealId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.marketplacedeals = {
        /**
         * adexchangebuyer.marketplacedeals.delete
         *
         * @desc Delete the specified deals from the proposal
         *
         * @alias adexchangebuyer.marketplacedeals.delete
         * @memberOf! adexchangebuyer(v1.4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.proposalId The proposalId to delete deals from.
         * @param {adexchangebuyer(v1.4).DeleteOrderDealsRequest} params.resource Request body data
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
                    url: 'https://www.googleapis.com/adexchangebuyer/v1.4/proposals/{proposalId}/deals/delete',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['proposalId'],
                pathParams: ['proposalId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * adexchangebuyer.marketplacedeals.insert
         *
         * @desc Add new deals for the specified proposal
         *
         * @alias adexchangebuyer.marketplacedeals.insert
         * @memberOf! adexchangebuyer(v1.4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.proposalId proposalId for which deals need to be added.
         * @param {adexchangebuyer(v1.4).AddOrderDealsRequest} params.resource Request body data
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
                    url: 'https://www.googleapis.com/adexchangebuyer/v1.4/proposals/{proposalId}/deals/insert',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['proposalId'],
                pathParams: ['proposalId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * adexchangebuyer.marketplacedeals.list
         *
         * @desc List all the deals for a given proposal
         *
         * @alias adexchangebuyer.marketplacedeals.list
         * @memberOf! adexchangebuyer(v1.4)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.pqlQuery Query string to retrieve specific deals.
         * @param {string} params.proposalId The proposalId to get deals for. To search across all proposals specify order_id = '-' as part of the URL.
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
                    url: 'https://www.googleapis.com/adexchangebuyer/v1.4/proposals/{proposalId}/deals',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['proposalId'],
                pathParams: ['proposalId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * adexchangebuyer.marketplacedeals.update
         *
         * @desc Replaces all the deals in the proposal with the passed in deals
         *
         * @alias adexchangebuyer.marketplacedeals.update
         * @memberOf! adexchangebuyer(v1.4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.proposalId The proposalId to edit deals on.
         * @param {adexchangebuyer(v1.4).EditAllOrderDealsRequest} params.resource Request body data
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
                    url: 'https://www.googleapis.com/adexchangebuyer/v1.4/proposals/{proposalId}/deals/update',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['proposalId'],
                pathParams: ['proposalId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.marketplacenotes = {
        /**
         * adexchangebuyer.marketplacenotes.insert
         *
         * @desc Add notes to the proposal
         *
         * @alias adexchangebuyer.marketplacenotes.insert
         * @memberOf! adexchangebuyer(v1.4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.proposalId The proposalId to add notes for.
         * @param {adexchangebuyer(v1.4).AddOrderNotesRequest} params.resource Request body data
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
                    url: 'https://www.googleapis.com/adexchangebuyer/v1.4/proposals/{proposalId}/notes/insert',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['proposalId'],
                pathParams: ['proposalId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * adexchangebuyer.marketplacenotes.list
         *
         * @desc Get all the notes associated with a proposal
         *
         * @alias adexchangebuyer.marketplacenotes.list
         * @memberOf! adexchangebuyer(v1.4)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.pqlQuery Query string to retrieve specific notes. To search the text contents of notes, please use syntax like "WHERE note.note = "foo" or "WHERE note.note LIKE "%bar%"
         * @param {string} params.proposalId The proposalId to get notes for. To search across all proposals specify order_id = '-' as part of the URL.
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
                    url: 'https://www.googleapis.com/adexchangebuyer/v1.4/proposals/{proposalId}/notes',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['proposalId'],
                pathParams: ['proposalId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.marketplaceprivateauction = {
        /**
         * adexchangebuyer.marketplaceprivateauction.updateproposal
         *
         * @desc Update a given private auction proposal
         *
         * @alias adexchangebuyer.marketplaceprivateauction.updateproposal
         * @memberOf! adexchangebuyer(v1.4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.privateAuctionId The private auction id to be updated.
         * @param {adexchangebuyer(v1.4).UpdatePrivateAuctionProposalRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        updateproposal: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/adexchangebuyer/v1.4/privateauction/{privateAuctionId}/updateproposal',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['privateAuctionId'],
                pathParams: ['privateAuctionId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.performanceReport = {
        /**
         * adexchangebuyer.performanceReport.list
         *
         * @desc Retrieves the authenticated user's list of performance metrics.
         *
         * @alias adexchangebuyer.performanceReport.list
         * @memberOf! adexchangebuyer(v1.4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The account id to get the reports.
         * @param {string} params.endDateTime The end time of the report in ISO 8601 timestamp format using UTC.
         * @param {integer=} params.maxResults Maximum number of entries returned on one result page. If not set, the default is 100. Optional.
         * @param {string=} params.pageToken A continuation token, used to page through performance reports. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response. Optional.
         * @param {string} params.startDateTime The start time of the report in ISO 8601 timestamp format using UTC.
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
                    url: 'https://www.googleapis.com/adexchangebuyer/v1.4/performancereport',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['accountId', 'endDateTime', 'startDateTime'],
                pathParams: [],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.pretargetingConfig = {
        /**
         * adexchangebuyer.pretargetingConfig.delete
         *
         * @desc Deletes an existing pretargeting config.
         *
         * @alias adexchangebuyer.pretargetingConfig.delete
         * @memberOf! adexchangebuyer(v1.4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The account id to delete the pretargeting config for.
         * @param {string} params.configId The specific id of the configuration to delete.
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
                    url: 'https://www.googleapis.com/adexchangebuyer/v1.4/pretargetingconfigs/{accountId}/{configId}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['accountId', 'configId'],
                pathParams: ['accountId', 'configId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * adexchangebuyer.pretargetingConfig.get
         *
         * @desc Gets a specific pretargeting configuration
         *
         * @alias adexchangebuyer.pretargetingConfig.get
         * @memberOf! adexchangebuyer(v1.4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The account id to get the pretargeting config for.
         * @param {string} params.configId The specific id of the configuration to retrieve.
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
                    url: 'https://www.googleapis.com/adexchangebuyer/v1.4/pretargetingconfigs/{accountId}/{configId}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['accountId', 'configId'],
                pathParams: ['accountId', 'configId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * adexchangebuyer.pretargetingConfig.insert
         *
         * @desc Inserts a new pretargeting configuration.
         *
         * @alias adexchangebuyer.pretargetingConfig.insert
         * @memberOf! adexchangebuyer(v1.4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The account id to insert the pretargeting config for.
         * @param {adexchangebuyer(v1.4).PretargetingConfig} params.resource Request body data
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
                    url: 'https://www.googleapis.com/adexchangebuyer/v1.4/pretargetingconfigs/{accountId}',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['accountId'],
                pathParams: ['accountId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * adexchangebuyer.pretargetingConfig.list
         *
         * @desc Retrieves a list of the authenticated user's pretargeting configurations.
         *
         * @alias adexchangebuyer.pretargetingConfig.list
         * @memberOf! adexchangebuyer(v1.4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The account id to get the pretargeting configs for.
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
                    url: 'https://www.googleapis.com/adexchangebuyer/v1.4/pretargetingconfigs/{accountId}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['accountId'],
                pathParams: ['accountId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * adexchangebuyer.pretargetingConfig.patch
         *
         * @desc Updates an existing pretargeting config. This method supports patch semantics.
         *
         * @alias adexchangebuyer.pretargetingConfig.patch
         * @memberOf! adexchangebuyer(v1.4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The account id to update the pretargeting config for.
         * @param {string} params.configId The specific id of the configuration to update.
         * @param {adexchangebuyer(v1.4).PretargetingConfig} params.resource Request body data
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
                    url: 'https://www.googleapis.com/adexchangebuyer/v1.4/pretargetingconfigs/{accountId}/{configId}',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['accountId', 'configId'],
                pathParams: ['accountId', 'configId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * adexchangebuyer.pretargetingConfig.update
         *
         * @desc Updates an existing pretargeting config.
         *
         * @alias adexchangebuyer.pretargetingConfig.update
         * @memberOf! adexchangebuyer(v1.4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The account id to update the pretargeting config for.
         * @param {string} params.configId The specific id of the configuration to update.
         * @param {adexchangebuyer(v1.4).PretargetingConfig} params.resource Request body data
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
                    url: 'https://www.googleapis.com/adexchangebuyer/v1.4/pretargetingconfigs/{accountId}/{configId}',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['accountId', 'configId'],
                pathParams: ['accountId', 'configId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.products = {
        /**
         * adexchangebuyer.products.get
         *
         * @desc Gets the requested product by id.
         *
         * @alias adexchangebuyer.products.get
         * @memberOf! adexchangebuyer(v1.4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.productId The id for the product to get the head revision for.
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
                    url: 'https://www.googleapis.com/adexchangebuyer/v1.4/products/{productId}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['productId'],
                pathParams: ['productId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * adexchangebuyer.products.search
         *
         * @desc Gets the requested product.
         *
         * @alias adexchangebuyer.products.search
         * @memberOf! adexchangebuyer(v1.4)
         *
         * @param {object=} params Parameters for request
         * @param {string=} params.pqlQuery The pql query used to query for products.
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
                    url: 'https://www.googleapis.com/adexchangebuyer/v1.4/products/search',
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
    self.proposals = {
        /**
         * adexchangebuyer.proposals.get
         *
         * @desc Get a proposal given its id
         *
         * @alias adexchangebuyer.proposals.get
         * @memberOf! adexchangebuyer(v1.4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.proposalId Id of the proposal to retrieve.
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
                    url: 'https://www.googleapis.com/adexchangebuyer/v1.4/proposals/{proposalId}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['proposalId'],
                pathParams: ['proposalId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * adexchangebuyer.proposals.insert
         *
         * @desc Create the given list of proposals
         *
         * @alias adexchangebuyer.proposals.insert
         * @memberOf! adexchangebuyer(v1.4)
         *
         * @param {object} params Parameters for request
         * @param {adexchangebuyer(v1.4).CreateOrdersRequest} params.resource Request body data
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
                    url: 'https://www.googleapis.com/adexchangebuyer/v1.4/proposals/insert',
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
         * adexchangebuyer.proposals.patch
         *
         * @desc Update the given proposal. This method supports patch semantics.
         *
         * @alias adexchangebuyer.proposals.patch
         * @memberOf! adexchangebuyer(v1.4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.proposalId The proposal id to update.
         * @param {string} params.revisionNumber The last known revision number to update. If the head revision in the marketplace database has since changed, an error will be thrown. The caller should then fetch the latest proposal at head revision and retry the update at that revision.
         * @param {string} params.updateAction The proposed action to take on the proposal. This field is required and it must be set when updating a proposal.
         * @param {adexchangebuyer(v1.4).Proposal} params.resource Request body data
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
                    url: 'https://www.googleapis.com/adexchangebuyer/v1.4/proposals/{proposalId}/{revisionNumber}/{updateAction}',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['proposalId', 'revisionNumber', 'updateAction'],
                pathParams: ['proposalId', 'revisionNumber', 'updateAction'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * adexchangebuyer.proposals.search
         *
         * @desc Search for proposals using pql query
         *
         * @alias adexchangebuyer.proposals.search
         * @memberOf! adexchangebuyer(v1.4)
         *
         * @param {object=} params Parameters for request
         * @param {string=} params.pqlQuery Query string to retrieve specific proposals.
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
                    url: 'https://www.googleapis.com/adexchangebuyer/v1.4/proposals/search',
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
         * adexchangebuyer.proposals.setupcomplete
         *
         * @desc Update the given proposal to indicate that setup has been completed.
         *
         * @alias adexchangebuyer.proposals.setupcomplete
         * @memberOf! adexchangebuyer(v1.4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.proposalId The proposal id for which the setup is complete
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setupcomplete: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/adexchangebuyer/v1.4/proposals/{proposalId}/setupcomplete',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['proposalId'],
                pathParams: ['proposalId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * adexchangebuyer.proposals.update
         *
         * @desc Update the given proposal
         *
         * @alias adexchangebuyer.proposals.update
         * @memberOf! adexchangebuyer(v1.4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.proposalId The proposal id to update.
         * @param {string} params.revisionNumber The last known revision number to update. If the head revision in the marketplace database has since changed, an error will be thrown. The caller should then fetch the latest proposal at head revision and retry the update at that revision.
         * @param {string} params.updateAction The proposed action to take on the proposal. This field is required and it must be set when updating a proposal.
         * @param {adexchangebuyer(v1.4).Proposal} params.resource Request body data
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
                    url: 'https://www.googleapis.com/adexchangebuyer/v1.4/proposals/{proposalId}/{revisionNumber}/{updateAction}',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['proposalId', 'revisionNumber', 'updateAction'],
                pathParams: ['proposalId', 'revisionNumber', 'updateAction'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.pubprofiles = {
        /**
         * adexchangebuyer.pubprofiles.list
         *
         * @desc Gets the requested publisher profile(s) by publisher accountId.
         *
         * @alias adexchangebuyer.pubprofiles.list
         * @memberOf! adexchangebuyer(v1.4)
         *
         * @param {object} params Parameters for request
         * @param {integer} params.accountId The accountId of the publisher to get profiles for.
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
                    url: 'https://www.googleapis.com/adexchangebuyer/v1.4/publisher/{accountId}/profiles',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['accountId'],
                pathParams: ['accountId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
}
module.exports = Adexchangebuyer;
//# sourceMappingURL=v1.4.js.map