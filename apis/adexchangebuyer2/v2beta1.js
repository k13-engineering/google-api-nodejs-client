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
 * Ad Exchange Buyer API II
 *
 * Accesses the latest features for managing Ad Exchange accounts, Real-Time Bidding configurations and auction metrics, and Marketplace programmatic deals.
 *
 * @example
 * const google = require('googleapis');
 * const adexchangebuyer2 = google.adexchangebuyer2('v2beta1');
 *
 * @namespace adexchangebuyer2
 * @type {Function}
 * @version v2beta1
 * @variation v2beta1
 * @param {object=} options Options for Adexchangebuyer2
 */
function Adexchangebuyer2(options) {
    const self = this;
    self._options = options || {};
    self.accounts = {
        clients: {
            /**
             * adexchangebuyer2.accounts.clients.get
             *
             * @desc Gets a client buyer with a given client account ID.
             *
             * @alias adexchangebuyer2.accounts.clients.get
             * @memberOf! adexchangebuyer2(v2beta1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.accountId Numerical account ID of the client's sponsor buyer. (required)
             * @param {string} params.clientAccountId Numerical account ID of the client buyer to retrieve. (required)
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
                        url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/clients/{clientAccountId}',
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['accountId', 'clientAccountId'],
                    pathParams: ['accountId', 'clientAccountId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * adexchangebuyer2.accounts.clients.list
             *
             * @desc Lists all the clients for the current sponsor buyer.
             *
             * @alias adexchangebuyer2.accounts.clients.list
             * @memberOf! adexchangebuyer2(v2beta1)
             *
             * @param {object} params Parameters for request
             * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListClientsResponse.nextPageToken returned from the previous call to the accounts.clients.list method.
             * @param {string} params.accountId Unique numerical account ID of the sponsor buyer to list the clients for.
             * @param {integer=} params.pageSize Requested page size. The server may return fewer clients than requested. If unspecified, the server will pick an appropriate default.
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
                        url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/clients',
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
             * adexchangebuyer2.accounts.clients.update
             *
             * @desc Updates an existing client buyer.
             *
             * @alias adexchangebuyer2.accounts.clients.update
             * @memberOf! adexchangebuyer2(v2beta1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.accountId Unique numerical account ID for the buyer of which the client buyer is a customer; the sponsor buyer to update a client for. (required)
             * @param {string} params.clientAccountId Unique numerical account ID of the client to update. (required)
             * @param {adexchangebuyer2(v2beta1).Client} params.resource Request body data
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
                        url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/clients/{clientAccountId}',
                        method: 'PUT'
                    }, options),
                    params: params,
                    requiredParams: ['accountId', 'clientAccountId'],
                    pathParams: ['accountId', 'clientAccountId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * adexchangebuyer2.accounts.clients.create
             *
             * @desc Creates a new client buyer.
             *
             * @alias adexchangebuyer2.accounts.clients.create
             * @memberOf! adexchangebuyer2(v2beta1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.accountId Unique numerical account ID for the buyer of which the client buyer is a customer; the sponsor buyer to create a client for. (required)
             * @param {adexchangebuyer2(v2beta1).Client} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            create: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const parameters = {
                    options: Object.assign({
                        url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/clients',
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['accountId'],
                    pathParams: ['accountId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            invitations: {
                /**
                 * adexchangebuyer2.accounts.clients.invitations.create
                 *
                 * @desc Creates and sends out an email invitation to access an Ad Exchange client buyer account.
                 *
                 * @alias adexchangebuyer2.accounts.clients.invitations.create
                 * @memberOf! adexchangebuyer2(v2beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.accountId Numerical account ID of the client's sponsor buyer. (required)
                 * @param {string} params.clientAccountId Numerical account ID of the client buyer that the user should be associated with. (required)
                 * @param {adexchangebuyer2(v2beta1).ClientUserInvitation} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                create: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const parameters = {
                        options: Object.assign({
                            url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/clients/{clientAccountId}/invitations',
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['accountId', 'clientAccountId'],
                        pathParams: ['accountId', 'clientAccountId'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * adexchangebuyer2.accounts.clients.invitations.get
                 *
                 * @desc Retrieves an existing client user invitation.
                 *
                 * @alias adexchangebuyer2.accounts.clients.invitations.get
                 * @memberOf! adexchangebuyer2(v2beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.invitationId Numerical identifier of the user invitation to retrieve. (required)
                 * @param {string} params.accountId Numerical account ID of the client's sponsor buyer. (required)
                 * @param {string} params.clientAccountId Numerical account ID of the client buyer that the user invitation to be retrieved is associated with. (required)
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
                            url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/clients/{clientAccountId}/invitations/{invitationId}',
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['accountId', 'clientAccountId', 'invitationId'],
                        pathParams: ['invitationId', 'accountId', 'clientAccountId'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * adexchangebuyer2.accounts.clients.invitations.list
                 *
                 * @desc Lists all the client users invitations for a client with a given account ID.
                 *
                 * @alias adexchangebuyer2.accounts.clients.invitations.list
                 * @memberOf! adexchangebuyer2(v2beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListClientUserInvitationsResponse.nextPageToken returned from the previous call to the clients.invitations.list method.
                 * @param {string} params.accountId Numerical account ID of the client's sponsor buyer. (required)
                 * @param {integer=} params.pageSize Requested page size. Server may return fewer clients than requested. If unspecified, server will pick an appropriate default.
                 * @param {string} params.clientAccountId Numerical account ID of the client buyer to list invitations for. (required) You must either specify a string representation of a numerical account identifier or the `-` character to list all the invitations for all the clients of a given sponsor buyer.
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
                            url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/clients/{clientAccountId}/invitations',
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['accountId', 'clientAccountId'],
                        pathParams: ['accountId', 'clientAccountId'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                }
            },
            users: {
                /**
                 * adexchangebuyer2.accounts.clients.users.list
                 *
                 * @desc Lists all the known client users for a specified sponsor buyer account ID.
                 *
                 * @alias adexchangebuyer2.accounts.clients.users.list
                 * @memberOf! adexchangebuyer2(v2beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListClientUsersResponse.nextPageToken returned from the previous call to the accounts.clients.users.list method.
                 * @param {string} params.accountId Numerical account ID of the sponsor buyer of the client to list users for. (required)
                 * @param {integer=} params.pageSize Requested page size. The server may return fewer clients than requested. If unspecified, the server will pick an appropriate default.
                 * @param {string} params.clientAccountId The account ID of the client buyer to list users for. (required) You must specify either a string representation of a numerical account identifier or the `-` character to list all the client users for all the clients of a given sponsor buyer.
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
                            url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/clients/{clientAccountId}/users',
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['accountId', 'clientAccountId'],
                        pathParams: ['accountId', 'clientAccountId'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * adexchangebuyer2.accounts.clients.users.get
                 *
                 * @desc Retrieves an existing client user.
                 *
                 * @alias adexchangebuyer2.accounts.clients.users.get
                 * @memberOf! adexchangebuyer2(v2beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.userId Numerical identifier of the user to retrieve. (required)
                 * @param {string} params.accountId Numerical account ID of the client's sponsor buyer. (required)
                 * @param {string} params.clientAccountId Numerical account ID of the client buyer that the user to be retrieved is associated with. (required)
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
                            url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/clients/{clientAccountId}/users/{userId}',
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['accountId', 'clientAccountId', 'userId'],
                        pathParams: ['userId', 'accountId', 'clientAccountId'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * adexchangebuyer2.accounts.clients.users.update
                 *
                 * @desc Updates an existing client user. Only the user status can be changed on update.
                 *
                 * @alias adexchangebuyer2.accounts.clients.users.update
                 * @memberOf! adexchangebuyer2(v2beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.userId Numerical identifier of the user to retrieve. (required)
                 * @param {string} params.accountId Numerical account ID of the client's sponsor buyer. (required)
                 * @param {string} params.clientAccountId Numerical account ID of the client buyer that the user to be retrieved is associated with. (required)
                 * @param {adexchangebuyer2(v2beta1).ClientUser} params.resource Request body data
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
                            url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/clients/{clientAccountId}/users/{userId}',
                            method: 'PUT'
                        }, options),
                        params: params,
                        requiredParams: ['accountId', 'clientAccountId', 'userId'],
                        pathParams: ['userId', 'accountId', 'clientAccountId'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                }
            }
        },
        creatives: {
            /**
             * adexchangebuyer2.accounts.creatives.list
             *
             * @desc Lists creatives.
             *
             * @alias adexchangebuyer2.accounts.creatives.list
             * @memberOf! adexchangebuyer2(v2beta1)
             *
             * @param {object} params Parameters for request
             * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListCreativesResponse.next_page_token returned from the previous call to 'ListCreatives' method.
             * @param {string} params.accountId The account to list the creatives from. Specify "-" to list all creatives the current user has access to.
             * @param {integer=} params.pageSize Requested page size. The server may return fewer creatives than requested (due to timeout constraint) even if more are available via another call. If unspecified, server will pick an appropriate default. Acceptable values are 1 to 1000, inclusive.
             * @param {string=} params.query An optional query string to filter creatives. If no filter is specified, all active creatives will be returned. Supported queries are: <ul> <li>accountId=<i>account_id_string</i> <li>creativeId=<i>creative_id_string</i> <li>dealsStatus: {approved, conditionally_approved, disapproved,                    not_checked} <li>openAuctionStatus: {approved, conditionally_approved, disapproved,                           not_checked} <li>attribute: {a numeric attribute from the list of attributes} <li>disapprovalReason: {a reason from DisapprovalReason </ul> Example: 'accountId=12345 AND (dealsStatus:disapproved AND disapprovalReason:unacceptable_content) OR attribute:47'
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
                        url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/creatives',
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
             * adexchangebuyer2.accounts.creatives.create
             *
             * @desc Creates a creative.
             *
             * @alias adexchangebuyer2.accounts.creatives.create
             * @memberOf! adexchangebuyer2(v2beta1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.accountId The account that this creative belongs to. Can be used to filter the response of the creatives.list method.
             * @param {string=} params.duplicateIdMode Indicates if multiple creatives can share an ID or not. Default is NO_DUPLICATES (one ID per creative).
             * @param {adexchangebuyer2(v2beta1).Creative} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            create: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const parameters = {
                    options: Object.assign({
                        url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/creatives',
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
             * adexchangebuyer2.accounts.creatives.stopWatching
             *
             * @desc Stops watching a creative. Will stop push notifications being sent to the topics when the creative changes status.
             *
             * @alias adexchangebuyer2.accounts.creatives.stopWatching
             * @memberOf! adexchangebuyer2(v2beta1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.accountId The account of the creative to stop notifications for.
             * @param {string} params.creativeId The creative ID of the creative to stop notifications for. Specify "-" to specify stopping account level notifications.
             * @param {adexchangebuyer2(v2beta1).StopWatchingCreativeRequest} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            stopWatching: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const parameters = {
                    options: Object.assign({
                        url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/creatives/{creativeId}:stopWatching',
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['accountId', 'creativeId'],
                    pathParams: ['accountId', 'creativeId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * adexchangebuyer2.accounts.creatives.watch
             *
             * @desc Watches a creative. Will result in push notifications being sent to the topic when the creative changes status.
             *
             * @alias adexchangebuyer2.accounts.creatives.watch
             * @memberOf! adexchangebuyer2(v2beta1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.accountId The account of the creative to watch.
             * @param {string} params.creativeId The creative ID to watch for status changes. Specify "-" to watch all creatives under the above account. If both creative-level and account-level notifications are sent, only a single notification will be sent to the creative-level notification topic.
             * @param {adexchangebuyer2(v2beta1).WatchCreativeRequest} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            watch: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const parameters = {
                    options: Object.assign({
                        url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/creatives/{creativeId}:watch',
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['accountId', 'creativeId'],
                    pathParams: ['accountId', 'creativeId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * adexchangebuyer2.accounts.creatives.get
             *
             * @desc Gets a creative.
             *
             * @alias adexchangebuyer2.accounts.creatives.get
             * @memberOf! adexchangebuyer2(v2beta1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.accountId The account the creative belongs to.
             * @param {string} params.creativeId The ID of the creative to retrieve.
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
                        url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/creatives/{creativeId}',
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['accountId', 'creativeId'],
                    pathParams: ['accountId', 'creativeId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * adexchangebuyer2.accounts.creatives.update
             *
             * @desc Updates a creative.
             *
             * @alias adexchangebuyer2.accounts.creatives.update
             * @memberOf! adexchangebuyer2(v2beta1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.creativeId The buyer-defined creative ID of this creative. Can be used to filter the response of the creatives.list method.
             * @param {string} params.accountId The account that this creative belongs to. Can be used to filter the response of the creatives.list method.
             * @param {adexchangebuyer2(v2beta1).Creative} params.resource Request body data
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
                        url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/creatives/{creativeId}',
                        method: 'PUT'
                    }, options),
                    params: params,
                    requiredParams: ['accountId', 'creativeId'],
                    pathParams: ['creativeId', 'accountId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            dealAssociations: {
                /**
                 * adexchangebuyer2.accounts.creatives.dealAssociations.list
                 *
                 * @desc List all creative-deal associations.
                 *
                 * @alias adexchangebuyer2.accounts.creatives.dealAssociations.list
                 * @memberOf! adexchangebuyer2(v2beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListDealAssociationsResponse.next_page_token returned from the previous call to 'ListDealAssociations' method.
                 * @param {string} params.accountId The account to list the associations from. Specify "-" to list all creatives the current user has access to.
                 * @param {integer=} params.pageSize Requested page size. Server may return fewer associations than requested. If unspecified, server will pick an appropriate default.
                 * @param {string=} params.query An optional query string to filter deal associations. If no filter is specified, all associations will be returned. Supported queries are: <ul> <li>accountId=<i>account_id_string</i> <li>creativeId=<i>creative_id_string</i> <li>dealsId=<i>deals_id_string</i> <li>dealsStatus:{approved, conditionally_approved, disapproved,                   not_checked} <li>openAuctionStatus:{approved, conditionally_approved, disapproved,                          not_checked} </ul> Example: 'dealsId=12345 AND dealsStatus:disapproved'
                 * @param {string} params.creativeId The creative ID to list the associations from. Specify "-" to list all creatives under the above account.
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
                            url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/creatives/{creativeId}/dealAssociations',
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['accountId', 'creativeId'],
                        pathParams: ['accountId', 'creativeId'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * adexchangebuyer2.accounts.creatives.dealAssociations.add
                 *
                 * @desc Associate an existing deal with a creative.
                 *
                 * @alias adexchangebuyer2.accounts.creatives.dealAssociations.add
                 * @memberOf! adexchangebuyer2(v2beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.accountId The account the creative belongs to.
                 * @param {string} params.creativeId The ID of the creative associated with the deal.
                 * @param {adexchangebuyer2(v2beta1).AddDealAssociationRequest} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                add: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const parameters = {
                        options: Object.assign({
                            url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/creatives/{creativeId}/dealAssociations:add',
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['accountId', 'creativeId'],
                        pathParams: ['accountId', 'creativeId'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * adexchangebuyer2.accounts.creatives.dealAssociations.remove
                 *
                 * @desc Remove the association between a deal and a creative.
                 *
                 * @alias adexchangebuyer2.accounts.creatives.dealAssociations.remove
                 * @memberOf! adexchangebuyer2(v2beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.creativeId The ID of the creative associated with the deal.
                 * @param {string} params.accountId The account the creative belongs to.
                 * @param {adexchangebuyer2(v2beta1).RemoveDealAssociationRequest} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                remove: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const parameters = {
                        options: Object.assign({
                            url: 'https://adexchangebuyer.googleapis.com/v2beta1/accounts/{accountId}/creatives/{creativeId}/dealAssociations:remove',
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['accountId', 'creativeId'],
                        pathParams: ['creativeId', 'accountId'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                }
            }
        }
    };
}
module.exports = Adexchangebuyer2;
//# sourceMappingURL=v2beta1.js.map