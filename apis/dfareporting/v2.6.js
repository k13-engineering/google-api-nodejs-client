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
 * DCM/DFA Reporting And Trafficking API
 *
 * Manages your DoubleClick Campaign Manager ad campaigns and reports.
 *
 * @example
 * const google = require('googleapis');
 * const dfareporting = google.dfareporting('v2.6');
 *
 * @namespace dfareporting
 * @type {Function}
 * @version v2.6
 * @variation v2.6
 * @param {object=} options Options for Dfareporting
 */
function Dfareporting(options) {
    const self = this;
    self._options = options || {};
    self.accountActiveAdSummaries = {
        /**
         * dfareporting.accountActiveAdSummaries.get
         *
         * @desc Gets the account's active ad summary by account ID.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Account ID.
         *     summaryAccountId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.accountActiveAdSummaries.get(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.accountActiveAdSummaries.get
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {string} params.summaryAccountId Account ID.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/accountActiveAdSummaries/{summaryAccountId}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'summaryAccountId'],
                pathParams: ['profileId', 'summaryAccountId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.accountPermissionGroups = {
        /**
         * dfareporting.accountPermissionGroups.get
         *
         * @desc Gets one account permission group by ID.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Account permission group ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.accountPermissionGroups.get(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.accountPermissionGroups.get
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Account permission group ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/accountPermissionGroups/{id}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.accountPermissionGroups.list
         *
         * @desc Retrieves the list of account permission groups.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.accountPermissionGroups.list(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.accountPermissionGroups.list
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/accountPermissionGroups',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.accountPermissions = {
        /**
         * dfareporting.accountPermissions.get
         *
         * @desc Gets one account permission by ID.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Account permission ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.accountPermissions.get(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.accountPermissions.get
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Account permission ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/accountPermissions/{id}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.accountPermissions.list
         *
         * @desc Retrieves the list of account permissions.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.accountPermissions.list(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.accountPermissions.list
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/accountPermissions',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.accountUserProfiles = {
        /**
         * dfareporting.accountUserProfiles.get
         *
         * @desc Gets one account user profile by ID.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // User profile ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.accountUserProfiles.get(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.accountUserProfiles.get
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id User profile ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/accountUserProfiles/{id}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.accountUserProfiles.insert
         *
         * @desc Inserts a new account user profile.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.accountUserProfiles.insert(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.accountUserProfiles.insert
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).AccountUserProfile} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/accountUserProfiles',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.accountUserProfiles.list
         *
         * @desc Retrieves a list of account user profiles, possibly filtered. This method supports paging.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   var handlePage = function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     var accountUserProfilesPage = response['accountUserProfiles'];
         *     if (!accountUserProfilesPage) {
         *       return;
         *     }
         *     for (var i = 0; i < accountUserProfilesPage.length; i++) {
         *       // TODO: Change code below to process each resource in `accountUserProfilesPage`:
         *       console.log(JSON.stringify(accountUserProfilesPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.pageToken = response.nextPageToken;
         *       dfareporting.accountUserProfiles.list(request, handlePage);
         *     }
         *   };
         *
         *   dfareporting.accountUserProfiles.list(request, handlePage);
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.accountUserProfiles.list
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.active Select only active user profiles.
         * @param {string=} params.ids Select only user profiles with these IDs.
         * @param {integer=} params.maxResults Maximum number of results to return.
         * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {string=} params.searchString Allows searching for objects by name, ID or email. Wildcards (*) are allowed. For example, "user profile*2015" will return objects with names like "user profile June 2015", "user profile April 2015", or simply "user profile 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "user profile" will match objects with name "my user profile", "user profile 2015", or simply "user profile".
         * @param {string=} params.sortField Field by which to sort the list.
         * @param {string=} params.sortOrder Order of sorted results.
         * @param {string=} params.subaccountId Select only user profiles with the specified subaccount ID.
         * @param {string=} params.userRoleId Select only user profiles with the specified user role ID.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/accountUserProfiles',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.accountUserProfiles.patch
         *
         * @desc Updates an existing account user profile. This method supports patch semantics.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // User profile ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body. Only added properties
         *       // will be changed.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.accountUserProfiles.patch(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.accountUserProfiles.patch
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id User profile ID.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).AccountUserProfile} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/accountUserProfiles',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.accountUserProfiles.update
         *
         * @desc Updates an existing account user profile.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.accountUserProfiles.update(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.accountUserProfiles.update
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).AccountUserProfile} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/accountUserProfiles',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.accounts = {
        /**
         * dfareporting.accounts.get
         *
         * @desc Gets one account by ID.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Account ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.accounts.get(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.accounts.get
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Account ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/accounts/{id}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.accounts.list
         *
         * @desc Retrieves the list of accounts, possibly filtered. This method supports paging.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   var handlePage = function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     var accountsPage = response['accounts'];
         *     if (!accountsPage) {
         *       return;
         *     }
         *     for (var i = 0; i < accountsPage.length; i++) {
         *       // TODO: Change code below to process each resource in `accountsPage`:
         *       console.log(JSON.stringify(accountsPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.pageToken = response.nextPageToken;
         *       dfareporting.accounts.list(request, handlePage);
         *     }
         *   };
         *
         *   dfareporting.accounts.list(request, handlePage);
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.accounts.list
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.active Select only active accounts. Don't set this field to select both active and non-active accounts.
         * @param {string=} params.ids Select only accounts with these IDs.
         * @param {integer=} params.maxResults Maximum number of results to return.
         * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {string=} params.searchString Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "account*2015" will return objects with names like "account June 2015", "account April 2015", or simply "account 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "account" will match objects with name "my account", "account 2015", or simply "account".
         * @param {string=} params.sortField Field by which to sort the list.
         * @param {string=} params.sortOrder Order of sorted results.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/accounts',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.accounts.patch
         *
         * @desc Updates an existing account. This method supports patch semantics.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Account ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body. Only added properties
         *       // will be changed.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.accounts.patch(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.accounts.patch
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Account ID.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).Account} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/accounts',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.accounts.update
         *
         * @desc Updates an existing account.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.accounts.update(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.accounts.update
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).Account} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/accounts',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.ads = {
        /**
         * dfareporting.ads.get
         *
         * @desc Gets one ad by ID.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Ad ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.ads.get(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.ads.get
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Ad ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/ads/{id}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.ads.insert
         *
         * @desc Inserts a new ad.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.ads.insert(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.ads.insert
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).Ad} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/ads',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.ads.list
         *
         * @desc Retrieves a list of ads, possibly filtered. This method supports paging.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   var handlePage = function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     var adsPage = response['ads'];
         *     if (!adsPage) {
         *       return;
         *     }
         *     for (var i = 0; i < adsPage.length; i++) {
         *       // TODO: Change code below to process each resource in `adsPage`:
         *       console.log(JSON.stringify(adsPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.pageToken = response.nextPageToken;
         *       dfareporting.ads.list(request, handlePage);
         *     }
         *   };
         *
         *   dfareporting.ads.list(request, handlePage);
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.ads.list
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.active Select only active ads.
         * @param {string=} params.advertiserId Select only ads with this advertiser ID.
         * @param {boolean=} params.archived Select only archived ads.
         * @param {string=} params.audienceSegmentIds Select only ads with these audience segment IDs.
         * @param {string=} params.campaignIds Select only ads with these campaign IDs.
         * @param {string=} params.compatibility Select default ads with the specified compatibility. Applicable when type is AD_SERVING_DEFAULT_AD. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop or on mobile devices for regular or interstitial ads, respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. IN_STREAM_VIDEO refers to rendering an in-stream video ads developed with the VAST standard.
         * @param {string=} params.creativeIds Select only ads with these creative IDs assigned.
         * @param {string=} params.creativeOptimizationConfigurationIds Select only ads with these creative optimization configuration IDs.
         * @param {string=} params.creativeType Select only ads with the specified creativeType.
         * @param {boolean=} params.dynamicClickTracker Select only dynamic click trackers. Applicable when type is AD_SERVING_CLICK_TRACKER. If true, select dynamic click trackers. If false, select static click trackers. Leave unset to select both.
         * @param {string=} params.ids Select only ads with these IDs.
         * @param {string=} params.landingPageIds Select only ads with these landing page IDs.
         * @param {integer=} params.maxResults Maximum number of results to return.
         * @param {string=} params.overriddenEventTagId Select only ads with this event tag override ID.
         * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
         * @param {string=} params.placementIds Select only ads with these placement IDs assigned.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {string=} params.remarketingListIds Select only ads whose list targeting expression use these remarketing list IDs.
         * @param {string=} params.searchString Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "ad*2015" will return objects with names like "ad June 2015", "ad April 2015", or simply "ad 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "ad" will match objects with name "my ad", "ad 2015", or simply "ad".
         * @param {string=} params.sizeIds Select only ads with these size IDs.
         * @param {string=} params.sortField Field by which to sort the list.
         * @param {string=} params.sortOrder Order of sorted results.
         * @param {boolean=} params.sslCompliant Select only ads that are SSL-compliant.
         * @param {boolean=} params.sslRequired Select only ads that require SSL.
         * @param {string=} params.type Select only ads with these types.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/ads',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.ads.patch
         *
         * @desc Updates an existing ad. This method supports patch semantics.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Ad ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body. Only added properties
         *       // will be changed.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.ads.patch(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.ads.patch
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Ad ID.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).Ad} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/ads',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.ads.update
         *
         * @desc Updates an existing ad.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.ads.update(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.ads.update
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).Ad} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/ads',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.advertiserGroups = {
        /**
         * dfareporting.advertiserGroups.delete
         *
         * @desc Deletes an existing advertiser group.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Advertiser group ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.advertiserGroups.delete(request, function(err) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.advertiserGroups.delete
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Advertiser group ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/advertiserGroups/{id}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.advertiserGroups.get
         *
         * @desc Gets one advertiser group by ID.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Advertiser group ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.advertiserGroups.get(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.advertiserGroups.get
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Advertiser group ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/advertiserGroups/{id}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.advertiserGroups.insert
         *
         * @desc Inserts a new advertiser group.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.advertiserGroups.insert(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.advertiserGroups.insert
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).AdvertiserGroup} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/advertiserGroups',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.advertiserGroups.list
         *
         * @desc Retrieves a list of advertiser groups, possibly filtered. This method supports paging.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   var handlePage = function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     var advertiserGroupsPage = response['advertiserGroups'];
         *     if (!advertiserGroupsPage) {
         *       return;
         *     }
         *     for (var i = 0; i < advertiserGroupsPage.length; i++) {
         *       // TODO: Change code below to process each resource in `advertiserGroupsPage`:
         *       console.log(JSON.stringify(advertiserGroupsPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.pageToken = response.nextPageToken;
         *       dfareporting.advertiserGroups.list(request, handlePage);
         *     }
         *   };
         *
         *   dfareporting.advertiserGroups.list(request, handlePage);
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.advertiserGroups.list
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.ids Select only advertiser groups with these IDs.
         * @param {integer=} params.maxResults Maximum number of results to return.
         * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {string=} params.searchString Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "advertiser*2015" will return objects with names like "advertiser group June 2015", "advertiser group April 2015", or simply "advertiser group 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "advertisergroup" will match objects with name "my advertisergroup", "advertisergroup 2015", or simply "advertisergroup".
         * @param {string=} params.sortField Field by which to sort the list.
         * @param {string=} params.sortOrder Order of sorted results.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/advertiserGroups',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.advertiserGroups.patch
         *
         * @desc Updates an existing advertiser group. This method supports patch semantics.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Advertiser group ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body. Only added properties
         *       // will be changed.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.advertiserGroups.patch(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.advertiserGroups.patch
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Advertiser group ID.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).AdvertiserGroup} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/advertiserGroups',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.advertiserGroups.update
         *
         * @desc Updates an existing advertiser group.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.advertiserGroups.update(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.advertiserGroups.update
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).AdvertiserGroup} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/advertiserGroups',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.advertisers = {
        /**
         * dfareporting.advertisers.get
         *
         * @desc Gets one advertiser by ID.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Advertiser ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.advertisers.get(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.advertisers.get
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Advertiser ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/advertisers/{id}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.advertisers.insert
         *
         * @desc Inserts a new advertiser.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.advertisers.insert(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.advertisers.insert
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).Advertiser} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/advertisers',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.advertisers.list
         *
         * @desc Retrieves a list of advertisers, possibly filtered. This method supports paging.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   var handlePage = function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     var advertisersPage = response['advertisers'];
         *     if (!advertisersPage) {
         *       return;
         *     }
         *     for (var i = 0; i < advertisersPage.length; i++) {
         *       // TODO: Change code below to process each resource in `advertisersPage`:
         *       console.log(JSON.stringify(advertisersPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.pageToken = response.nextPageToken;
         *       dfareporting.advertisers.list(request, handlePage);
         *     }
         *   };
         *
         *   dfareporting.advertisers.list(request, handlePage);
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.advertisers.list
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.advertiserGroupIds Select only advertisers with these advertiser group IDs.
         * @param {string=} params.floodlightConfigurationIds Select only advertisers with these floodlight configuration IDs.
         * @param {string=} params.ids Select only advertisers with these IDs.
         * @param {boolean=} params.includeAdvertisersWithoutGroupsOnly Select only advertisers which do not belong to any advertiser group.
         * @param {integer=} params.maxResults Maximum number of results to return.
         * @param {boolean=} params.onlyParent Select only advertisers which use another advertiser's floodlight configuration.
         * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {string=} params.searchString Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "advertiser*2015" will return objects with names like "advertiser June 2015", "advertiser April 2015", or simply "advertiser 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "advertiser" will match objects with name "my advertiser", "advertiser 2015", or simply "advertiser".
         * @param {string=} params.sortField Field by which to sort the list.
         * @param {string=} params.sortOrder Order of sorted results.
         * @param {string=} params.status Select only advertisers with the specified status.
         * @param {string=} params.subaccountId Select only advertisers with these subaccount IDs.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/advertisers',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.advertisers.patch
         *
         * @desc Updates an existing advertiser. This method supports patch semantics.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Advertiser ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body. Only added properties
         *       // will be changed.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.advertisers.patch(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.advertisers.patch
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Advertiser ID.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).Advertiser} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/advertisers',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.advertisers.update
         *
         * @desc Updates an existing advertiser.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.advertisers.update(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.advertisers.update
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).Advertiser} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/advertisers',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.browsers = {
        /**
         * dfareporting.browsers.list
         *
         * @desc Retrieves a list of browsers.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.browsers.list(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.browsers.list
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/browsers',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.campaignCreativeAssociations = {
        /**
         * dfareporting.campaignCreativeAssociations.insert
         *
         * @desc Associates a creative with the specified campaign. This method creates a default ad with dimensions matching the creative in the campaign if such a default ad does not exist already.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Campaign ID in this association.
         *     campaignId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.campaignCreativeAssociations.insert(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.campaignCreativeAssociations.insert
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.campaignId Campaign ID in this association.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).CampaignCreativeAssociation} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/campaigns/{campaignId}/campaignCreativeAssociations',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId', 'campaignId'],
                pathParams: ['campaignId', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.campaignCreativeAssociations.list
         *
         * @desc Retrieves the list of creative IDs associated with the specified campaign. This method supports paging.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Campaign ID in this association.
         *     campaignId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   var handlePage = function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     var campaignCreativeAssociationsPage = response['campaignCreativeAssociations'];
         *     if (!campaignCreativeAssociationsPage) {
         *       return;
         *     }
         *     for (var i = 0; i < campaignCreativeAssociationsPage.length; i++) {
         *       // TODO: Change code below to process each resource in `campaignCreativeAssociationsPage`:
         *       console.log(JSON.stringify(campaignCreativeAssociationsPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.pageToken = response.nextPageToken;
         *       dfareporting.campaignCreativeAssociations.list(request, handlePage);
         *     }
         *   };
         *
         *   dfareporting.campaignCreativeAssociations.list(request, handlePage);
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.campaignCreativeAssociations.list
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.campaignId Campaign ID in this association.
         * @param {integer=} params.maxResults Maximum number of results to return.
         * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {string=} params.sortOrder Order of sorted results.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/campaigns/{campaignId}/campaignCreativeAssociations',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'campaignId'],
                pathParams: ['campaignId', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.campaigns = {
        /**
         * dfareporting.campaigns.get
         *
         * @desc Gets one campaign by ID.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Campaign ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.campaigns.get(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.campaigns.get
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Campaign ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/campaigns/{id}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.campaigns.insert
         *
         * @desc Inserts a new campaign.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Default landing page name for this new campaign. Must be less than 256 characters long.
         *     defaultLandingPageName: '',  // TODO: Update placeholder value.
         *
         *     // Default landing page URL for this new campaign.
         *     defaultLandingPageUrl: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.campaigns.insert(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.campaigns.insert
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.defaultLandingPageName Default landing page name for this new campaign. Must be less than 256 characters long.
         * @param {string} params.defaultLandingPageUrl Default landing page URL for this new campaign.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).Campaign} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/campaigns',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId', 'defaultLandingPageName', 'defaultLandingPageUrl'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.campaigns.list
         *
         * @desc Retrieves a list of campaigns, possibly filtered. This method supports paging.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   var handlePage = function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     var campaignsPage = response['campaigns'];
         *     if (!campaignsPage) {
         *       return;
         *     }
         *     for (var i = 0; i < campaignsPage.length; i++) {
         *       // TODO: Change code below to process each resource in `campaignsPage`:
         *       console.log(JSON.stringify(campaignsPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.pageToken = response.nextPageToken;
         *       dfareporting.campaigns.list(request, handlePage);
         *     }
         *   };
         *
         *   dfareporting.campaigns.list(request, handlePage);
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.campaigns.list
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.advertiserGroupIds Select only campaigns whose advertisers belong to these advertiser groups.
         * @param {string=} params.advertiserIds Select only campaigns that belong to these advertisers.
         * @param {boolean=} params.archived Select only archived campaigns. Don't set this field to select both archived and non-archived campaigns.
         * @param {boolean=} params.atLeastOneOptimizationActivity Select only campaigns that have at least one optimization activity.
         * @param {string=} params.excludedIds Exclude campaigns with these IDs.
         * @param {string=} params.ids Select only campaigns with these IDs.
         * @param {integer=} params.maxResults Maximum number of results to return.
         * @param {string=} params.overriddenEventTagId Select only campaigns that have overridden this event tag ID.
         * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {string=} params.searchString Allows searching for campaigns by name or ID. Wildcards (*) are allowed. For example, "campaign*2015" will return campaigns with names like "campaign June 2015", "campaign April 2015", or simply "campaign 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "campaign" will match campaigns with name "my campaign", "campaign 2015", or simply "campaign".
         * @param {string=} params.sortField Field by which to sort the list.
         * @param {string=} params.sortOrder Order of sorted results.
         * @param {string=} params.subaccountId Select only campaigns that belong to this subaccount.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/campaigns',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.campaigns.patch
         *
         * @desc Updates an existing campaign. This method supports patch semantics.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Campaign ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body. Only added properties
         *       // will be changed.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.campaigns.patch(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.campaigns.patch
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Campaign ID.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).Campaign} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/campaigns',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.campaigns.update
         *
         * @desc Updates an existing campaign.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.campaigns.update(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.campaigns.update
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).Campaign} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/campaigns',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.changeLogs = {
        /**
         * dfareporting.changeLogs.get
         *
         * @desc Gets one change log by ID.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Change log ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.changeLogs.get(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.changeLogs.get
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Change log ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/changeLogs/{id}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.changeLogs.list
         *
         * @desc Retrieves a list of change logs. This method supports paging.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   var handlePage = function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     var changeLogsPage = response['changeLogs'];
         *     if (!changeLogsPage) {
         *       return;
         *     }
         *     for (var i = 0; i < changeLogsPage.length; i++) {
         *       // TODO: Change code below to process each resource in `changeLogsPage`:
         *       console.log(JSON.stringify(changeLogsPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.pageToken = response.nextPageToken;
         *       dfareporting.changeLogs.list(request, handlePage);
         *     }
         *   };
         *
         *   dfareporting.changeLogs.list(request, handlePage);
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.changeLogs.list
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.action Select only change logs with the specified action.
         * @param {string=} params.ids Select only change logs with these IDs.
         * @param {string=} params.maxChangeTime Select only change logs whose change time is before the specified maxChangeTime.The time should be formatted as an RFC3339 date/time string. For example, for 10:54 PM on July 18th, 2015, in the America/New York time zone, the format is "2015-07-18T22:54:00-04:00". In other words, the year, month, day, the letter T, the hour (24-hour clock system), minute, second, and then the time zone offset.
         * @param {integer=} params.maxResults Maximum number of results to return.
         * @param {string=} params.minChangeTime Select only change logs whose change time is before the specified minChangeTime.The time should be formatted as an RFC3339 date/time string. For example, for 10:54 PM on July 18th, 2015, in the America/New York time zone, the format is "2015-07-18T22:54:00-04:00". In other words, the year, month, day, the letter T, the hour (24-hour clock system), minute, second, and then the time zone offset.
         * @param {string=} params.objectIds Select only change logs with these object IDs.
         * @param {string=} params.objectType Select only change logs with the specified object type.
         * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {string=} params.searchString Select only change logs whose object ID, user name, old or new values match the search string.
         * @param {string=} params.userProfileIds Select only change logs with these user profile IDs.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/changeLogs',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.cities = {
        /**
         * dfareporting.cities.list
         *
         * @desc Retrieves a list of cities, possibly filtered.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.cities.list(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.cities.list
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.countryDartIds Select only cities from these countries.
         * @param {string=} params.dartIds Select only cities with these DART IDs.
         * @param {string=} params.namePrefix Select only cities with names starting with this prefix.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {string=} params.regionDartIds Select only cities from these regions.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/cities',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.connectionTypes = {
        /**
         * dfareporting.connectionTypes.get
         *
         * @desc Gets one connection type by ID.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Connection type ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.connectionTypes.get(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.connectionTypes.get
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Connection type ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/connectionTypes/{id}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.connectionTypes.list
         *
         * @desc Retrieves a list of connection types.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.connectionTypes.list(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.connectionTypes.list
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/connectionTypes',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.contentCategories = {
        /**
         * dfareporting.contentCategories.delete
         *
         * @desc Deletes an existing content category.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Content category ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.contentCategories.delete(request, function(err) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.contentCategories.delete
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Content category ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/contentCategories/{id}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.contentCategories.get
         *
         * @desc Gets one content category by ID.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Content category ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.contentCategories.get(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.contentCategories.get
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Content category ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/contentCategories/{id}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.contentCategories.insert
         *
         * @desc Inserts a new content category.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.contentCategories.insert(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.contentCategories.insert
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).ContentCategory} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/contentCategories',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.contentCategories.list
         *
         * @desc Retrieves a list of content categories, possibly filtered. This method supports paging.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   var handlePage = function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     var contentCategoriesPage = response['contentCategories'];
         *     if (!contentCategoriesPage) {
         *       return;
         *     }
         *     for (var i = 0; i < contentCategoriesPage.length; i++) {
         *       // TODO: Change code below to process each resource in `contentCategoriesPage`:
         *       console.log(JSON.stringify(contentCategoriesPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.pageToken = response.nextPageToken;
         *       dfareporting.contentCategories.list(request, handlePage);
         *     }
         *   };
         *
         *   dfareporting.contentCategories.list(request, handlePage);
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.contentCategories.list
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.ids Select only content categories with these IDs.
         * @param {integer=} params.maxResults Maximum number of results to return.
         * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {string=} params.searchString Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "contentcategory*2015" will return objects with names like "contentcategory June 2015", "contentcategory April 2015", or simply "contentcategory 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "contentcategory" will match objects with name "my contentcategory", "contentcategory 2015", or simply "contentcategory".
         * @param {string=} params.sortField Field by which to sort the list.
         * @param {string=} params.sortOrder Order of sorted results.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/contentCategories',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.contentCategories.patch
         *
         * @desc Updates an existing content category. This method supports patch semantics.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Content category ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body. Only added properties
         *       // will be changed.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.contentCategories.patch(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.contentCategories.patch
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Content category ID.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).ContentCategory} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/contentCategories',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.contentCategories.update
         *
         * @desc Updates an existing content category.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.contentCategories.update(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.contentCategories.update
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).ContentCategory} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/contentCategories',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.conversions = {
        /**
         * dfareporting.conversions.batchinsert
         *
         * @desc Inserts conversions.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.conversions.batchinsert(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/ddmconversions
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.conversions.batchinsert
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).ConversionsBatchInsertRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        batchinsert: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/conversions/batchinsert',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.countries = {
        /**
         * dfareporting.countries.get
         *
         * @desc Gets one country by ID.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Country DART ID.
         *     dartId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.countries.get(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.countries.get
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.dartId Country DART ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/countries/{dartId}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'dartId'],
                pathParams: ['dartId', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.countries.list
         *
         * @desc Retrieves a list of countries.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.countries.list(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.countries.list
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/countries',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.creativeAssets = {
        /**
         * dfareporting.creativeAssets.insert
         *
         * @desc Inserts a new creative asset.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Advertiser ID of this creative. This is a required field.
         *     advertiserId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body.
         *     },
         *
         *     media: {
         *       // TODO: Add desired media content for upload. See:
         *       // https://github.com/google/google-api-nodejs-client#media-uploads
         *       mimeType: '',  // See https://www.w3.org/Protocols/rfc1341/4_Content-Type.html
         *       body: {}
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.creativeAssets.insert(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.creativeAssets.insert
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.advertiserId Advertiser ID of this creative. This is a required field.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param  {object} params.resource Media resource metadata
         * @param {object} params.media Media object
         * @param {string} params.media.mimeType Media mime-type
         * @param {string|object} params.media.body Media body contents
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/creativeAssets/{advertiserId}/creativeAssets',
                    method: 'POST'
                }, options),
                params: params,
                mediaUrl: 'https://www.googleapis.com/upload/dfareporting/v2.6/userprofiles/{profileId}/creativeAssets/{advertiserId}/creativeAssets',
                requiredParams: ['profileId', 'advertiserId'],
                pathParams: ['advertiserId', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.creativeFieldValues = {
        /**
         * dfareporting.creativeFieldValues.delete
         *
         * @desc Deletes an existing creative field value.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Creative field ID for this creative field value.
         *     creativeFieldId: '',  // TODO: Update placeholder value.
         *
         *     // Creative Field Value ID
         *     id: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.creativeFieldValues.delete(request, function(err) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.creativeFieldValues.delete
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.creativeFieldId Creative field ID for this creative field value.
         * @param {string} params.id Creative Field Value ID
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues/{id}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['profileId', 'creativeFieldId', 'id'],
                pathParams: ['creativeFieldId', 'id', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.creativeFieldValues.get
         *
         * @desc Gets one creative field value by ID.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Creative field ID for this creative field value.
         *     creativeFieldId: '',  // TODO: Update placeholder value.
         *
         *     // Creative Field Value ID
         *     id: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.creativeFieldValues.get(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.creativeFieldValues.get
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.creativeFieldId Creative field ID for this creative field value.
         * @param {string} params.id Creative Field Value ID
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues/{id}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'creativeFieldId', 'id'],
                pathParams: ['creativeFieldId', 'id', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.creativeFieldValues.insert
         *
         * @desc Inserts a new creative field value.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Creative field ID for this creative field value.
         *     creativeFieldId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.creativeFieldValues.insert(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.creativeFieldValues.insert
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.creativeFieldId Creative field ID for this creative field value.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).CreativeFieldValue} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId', 'creativeFieldId'],
                pathParams: ['creativeFieldId', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.creativeFieldValues.list
         *
         * @desc Retrieves a list of creative field values, possibly filtered. This method supports paging.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Creative field ID for this creative field value.
         *     creativeFieldId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   var handlePage = function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     var creativeFieldValuesPage = response['creativeFieldValues'];
         *     if (!creativeFieldValuesPage) {
         *       return;
         *     }
         *     for (var i = 0; i < creativeFieldValuesPage.length; i++) {
         *       // TODO: Change code below to process each resource in `creativeFieldValuesPage`:
         *       console.log(JSON.stringify(creativeFieldValuesPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.pageToken = response.nextPageToken;
         *       dfareporting.creativeFieldValues.list(request, handlePage);
         *     }
         *   };
         *
         *   dfareporting.creativeFieldValues.list(request, handlePage);
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.creativeFieldValues.list
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.creativeFieldId Creative field ID for this creative field value.
         * @param {string=} params.ids Select only creative field values with these IDs.
         * @param {integer=} params.maxResults Maximum number of results to return.
         * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {string=} params.searchString Allows searching for creative field values by their values. Wildcards (e.g. *) are not allowed.
         * @param {string=} params.sortField Field by which to sort the list.
         * @param {string=} params.sortOrder Order of sorted results.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'creativeFieldId'],
                pathParams: ['creativeFieldId', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.creativeFieldValues.patch
         *
         * @desc Updates an existing creative field value. This method supports patch semantics.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Creative field ID for this creative field value.
         *     creativeFieldId: '',  // TODO: Update placeholder value.
         *
         *     // Creative Field Value ID
         *     id: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body. Only added properties
         *       // will be changed.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.creativeFieldValues.patch(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.creativeFieldValues.patch
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.creativeFieldId Creative field ID for this creative field value.
         * @param {string} params.id Creative Field Value ID
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).CreativeFieldValue} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['profileId', 'creativeFieldId', 'id'],
                pathParams: ['creativeFieldId', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.creativeFieldValues.update
         *
         * @desc Updates an existing creative field value.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Creative field ID for this creative field value.
         *     creativeFieldId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.creativeFieldValues.update(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.creativeFieldValues.update
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.creativeFieldId Creative field ID for this creative field value.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).CreativeFieldValue} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['profileId', 'creativeFieldId'],
                pathParams: ['creativeFieldId', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.creativeFields = {
        /**
         * dfareporting.creativeFields.delete
         *
         * @desc Deletes an existing creative field.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Creative Field ID
         *     id: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.creativeFields.delete(request, function(err) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.creativeFields.delete
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Creative Field ID
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/creativeFields/{id}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.creativeFields.get
         *
         * @desc Gets one creative field by ID.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Creative Field ID
         *     id: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.creativeFields.get(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.creativeFields.get
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Creative Field ID
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/creativeFields/{id}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.creativeFields.insert
         *
         * @desc Inserts a new creative field.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.creativeFields.insert(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.creativeFields.insert
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).CreativeField} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/creativeFields',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.creativeFields.list
         *
         * @desc Retrieves a list of creative fields, possibly filtered. This method supports paging.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   var handlePage = function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     var creativeFieldsPage = response['creativeFields'];
         *     if (!creativeFieldsPage) {
         *       return;
         *     }
         *     for (var i = 0; i < creativeFieldsPage.length; i++) {
         *       // TODO: Change code below to process each resource in `creativeFieldsPage`:
         *       console.log(JSON.stringify(creativeFieldsPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.pageToken = response.nextPageToken;
         *       dfareporting.creativeFields.list(request, handlePage);
         *     }
         *   };
         *
         *   dfareporting.creativeFields.list(request, handlePage);
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.creativeFields.list
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.advertiserIds Select only creative fields that belong to these advertisers.
         * @param {string=} params.ids Select only creative fields with these IDs.
         * @param {integer=} params.maxResults Maximum number of results to return.
         * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {string=} params.searchString Allows searching for creative fields by name or ID. Wildcards (*) are allowed. For example, "creativefield*2015" will return creative fields with names like "creativefield June 2015", "creativefield April 2015", or simply "creativefield 2015". Most of the searches also add wild-cards implicitly at the start and the end of the search string. For example, a search string of "creativefield" will match creative fields with the name "my creativefield", "creativefield 2015", or simply "creativefield".
         * @param {string=} params.sortField Field by which to sort the list.
         * @param {string=} params.sortOrder Order of sorted results.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/creativeFields',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.creativeFields.patch
         *
         * @desc Updates an existing creative field. This method supports patch semantics.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Creative Field ID
         *     id: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body. Only added properties
         *       // will be changed.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.creativeFields.patch(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.creativeFields.patch
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Creative Field ID
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).CreativeField} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/creativeFields',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.creativeFields.update
         *
         * @desc Updates an existing creative field.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.creativeFields.update(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.creativeFields.update
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).CreativeField} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/creativeFields',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.creativeGroups = {
        /**
         * dfareporting.creativeGroups.get
         *
         * @desc Gets one creative group by ID.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Creative group ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.creativeGroups.get(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.creativeGroups.get
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Creative group ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/creativeGroups/{id}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.creativeGroups.insert
         *
         * @desc Inserts a new creative group.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.creativeGroups.insert(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.creativeGroups.insert
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).CreativeGroup} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/creativeGroups',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.creativeGroups.list
         *
         * @desc Retrieves a list of creative groups, possibly filtered. This method supports paging.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   var handlePage = function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     var creativeGroupsPage = response['creativeGroups'];
         *     if (!creativeGroupsPage) {
         *       return;
         *     }
         *     for (var i = 0; i < creativeGroupsPage.length; i++) {
         *       // TODO: Change code below to process each resource in `creativeGroupsPage`:
         *       console.log(JSON.stringify(creativeGroupsPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.pageToken = response.nextPageToken;
         *       dfareporting.creativeGroups.list(request, handlePage);
         *     }
         *   };
         *
         *   dfareporting.creativeGroups.list(request, handlePage);
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.creativeGroups.list
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.advertiserIds Select only creative groups that belong to these advertisers.
         * @param {integer=} params.groupNumber Select only creative groups that belong to this subgroup.
         * @param {string=} params.ids Select only creative groups with these IDs.
         * @param {integer=} params.maxResults Maximum number of results to return.
         * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {string=} params.searchString Allows searching for creative groups by name or ID. Wildcards (*) are allowed. For example, "creativegroup*2015" will return creative groups with names like "creativegroup June 2015", "creativegroup April 2015", or simply "creativegroup 2015". Most of the searches also add wild-cards implicitly at the start and the end of the search string. For example, a search string of "creativegroup" will match creative groups with the name "my creativegroup", "creativegroup 2015", or simply "creativegroup".
         * @param {string=} params.sortField Field by which to sort the list.
         * @param {string=} params.sortOrder Order of sorted results.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/creativeGroups',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.creativeGroups.patch
         *
         * @desc Updates an existing creative group. This method supports patch semantics.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Creative group ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body. Only added properties
         *       // will be changed.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.creativeGroups.patch(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.creativeGroups.patch
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Creative group ID.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).CreativeGroup} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/creativeGroups',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.creativeGroups.update
         *
         * @desc Updates an existing creative group.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.creativeGroups.update(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.creativeGroups.update
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).CreativeGroup} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/creativeGroups',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.creatives = {
        /**
         * dfareporting.creatives.get
         *
         * @desc Gets one creative by ID.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Creative ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.creatives.get(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.creatives.get
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Creative ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/creatives/{id}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.creatives.insert
         *
         * @desc Inserts a new creative.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.creatives.insert(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.creatives.insert
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).Creative} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/creatives',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.creatives.list
         *
         * @desc Retrieves a list of creatives, possibly filtered. This method supports paging.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   var handlePage = function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     var creativesPage = response['creatives'];
         *     if (!creativesPage) {
         *       return;
         *     }
         *     for (var i = 0; i < creativesPage.length; i++) {
         *       // TODO: Change code below to process each resource in `creativesPage`:
         *       console.log(JSON.stringify(creativesPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.pageToken = response.nextPageToken;
         *       dfareporting.creatives.list(request, handlePage);
         *     }
         *   };
         *
         *   dfareporting.creatives.list(request, handlePage);
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.creatives.list
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.active Select only active creatives. Leave blank to select active and inactive creatives.
         * @param {string=} params.advertiserId Select only creatives with this advertiser ID.
         * @param {boolean=} params.archived Select only archived creatives. Leave blank to select archived and unarchived creatives.
         * @param {string=} params.campaignId Select only creatives with this campaign ID.
         * @param {string=} params.companionCreativeIds Select only in-stream video creatives with these companion IDs.
         * @param {string=} params.creativeFieldIds Select only creatives with these creative field IDs.
         * @param {string=} params.ids Select only creatives with these IDs.
         * @param {integer=} params.maxResults Maximum number of results to return.
         * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {string=} params.renderingIds Select only creatives with these rendering IDs.
         * @param {string=} params.searchString Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "creative*2015" will return objects with names like "creative June 2015", "creative April 2015", or simply "creative 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "creative" will match objects with name "my creative", "creative 2015", or simply "creative".
         * @param {string=} params.sizeIds Select only creatives with these size IDs.
         * @param {string=} params.sortField Field by which to sort the list.
         * @param {string=} params.sortOrder Order of sorted results.
         * @param {string=} params.studioCreativeId Select only creatives corresponding to this Studio creative ID.
         * @param {string=} params.types Select only creatives with these creative types.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/creatives',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.creatives.patch
         *
         * @desc Updates an existing creative. This method supports patch semantics.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Creative ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body. Only added properties
         *       // will be changed.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.creatives.patch(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.creatives.patch
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Creative ID.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).Creative} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/creatives',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.creatives.update
         *
         * @desc Updates an existing creative.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.creatives.update(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.creatives.update
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).Creative} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/creatives',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.dimensionValues = {
        /**
         * dfareporting.dimensionValues.query
         *
         * @desc Retrieves list of report dimension values for a list of filters.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The DFA user profile ID.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   var handlePage = function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     var itemsPage = response['items'];
         *     if (!itemsPage) {
         *       return;
         *     }
         *     for (var i = 0; i < itemsPage.length; i++) {
         *       // TODO: Change code below to process each resource in `itemsPage`:
         *       console.log(JSON.stringify(itemsPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.pageToken = response.nextPageToken;
         *       dfareporting.dimensionValues.query(request, handlePage);
         *     }
         *   };
         *
         *   dfareporting.dimensionValues.query(request, handlePage);
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfareporting
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.dimensionValues.query
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.maxResults Maximum number of results to return.
         * @param {string=} params.pageToken The value of the nextToken from the previous result page.
         * @param {string} params.profileId The DFA user profile ID.
         * @param {dfareporting(v2.6).DimensionValueRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        query: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/dimensionvalues/query',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.directorySiteContacts = {
        /**
         * dfareporting.directorySiteContacts.get
         *
         * @desc Gets one directory site contact by ID.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Directory site contact ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.directorySiteContacts.get(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.directorySiteContacts.get
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Directory site contact ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/directorySiteContacts/{id}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.directorySiteContacts.list
         *
         * @desc Retrieves a list of directory site contacts, possibly filtered. This method supports paging.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   var handlePage = function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     var directorySiteContactsPage = response['directorySiteContacts'];
         *     if (!directorySiteContactsPage) {
         *       return;
         *     }
         *     for (var i = 0; i < directorySiteContactsPage.length; i++) {
         *       // TODO: Change code below to process each resource in `directorySiteContactsPage`:
         *       console.log(JSON.stringify(directorySiteContactsPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.pageToken = response.nextPageToken;
         *       dfareporting.directorySiteContacts.list(request, handlePage);
         *     }
         *   };
         *
         *   dfareporting.directorySiteContacts.list(request, handlePage);
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.directorySiteContacts.list
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.directorySiteIds Select only directory site contacts with these directory site IDs. This is a required field.
         * @param {string=} params.ids Select only directory site contacts with these IDs.
         * @param {integer=} params.maxResults Maximum number of results to return.
         * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {string=} params.searchString Allows searching for objects by name, ID or email. Wildcards (*) are allowed. For example, "directory site contact*2015" will return objects with names like "directory site contact June 2015", "directory site contact April 2015", or simply "directory site contact 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "directory site contact" will match objects with name "my directory site contact", "directory site contact 2015", or simply "directory site contact".
         * @param {string=} params.sortField Field by which to sort the list.
         * @param {string=} params.sortOrder Order of sorted results.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/directorySiteContacts',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.directorySites = {
        /**
         * dfareporting.directorySites.get
         *
         * @desc Gets one directory site by ID.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Directory site ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.directorySites.get(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.directorySites.get
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Directory site ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/directorySites/{id}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.directorySites.insert
         *
         * @desc Inserts a new directory site.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.directorySites.insert(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.directorySites.insert
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).DirectorySite} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/directorySites',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.directorySites.list
         *
         * @desc Retrieves a list of directory sites, possibly filtered. This method supports paging.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   var handlePage = function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     var directorySitesPage = response['directorySites'];
         *     if (!directorySitesPage) {
         *       return;
         *     }
         *     for (var i = 0; i < directorySitesPage.length; i++) {
         *       // TODO: Change code below to process each resource in `directorySitesPage`:
         *       console.log(JSON.stringify(directorySitesPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.pageToken = response.nextPageToken;
         *       dfareporting.directorySites.list(request, handlePage);
         *     }
         *   };
         *
         *   dfareporting.directorySites.list(request, handlePage);
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.directorySites.list
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.acceptsInStreamVideoPlacements This search filter is no longer supported and will have no effect on the results returned.
         * @param {boolean=} params.acceptsInterstitialPlacements This search filter is no longer supported and will have no effect on the results returned.
         * @param {boolean=} params.acceptsPublisherPaidPlacements Select only directory sites that accept publisher paid placements. This field can be left blank.
         * @param {boolean=} params.active Select only active directory sites. Leave blank to retrieve both active and inactive directory sites.
         * @param {string=} params.countryId Select only directory sites with this country ID.
         * @param {string=} params.dfp_network_code Select only directory sites with this DFP network code.
         * @param {string=} params.ids Select only directory sites with these IDs.
         * @param {integer=} params.maxResults Maximum number of results to return.
         * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
         * @param {string=} params.parentId Select only directory sites with this parent ID.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {string=} params.searchString Allows searching for objects by name, ID or URL. Wildcards (*) are allowed. For example, "directory site*2015" will return objects with names like "directory site June 2015", "directory site April 2015", or simply "directory site 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "directory site" will match objects with name "my directory site", "directory site 2015" or simply, "directory site".
         * @param {string=} params.sortField Field by which to sort the list.
         * @param {string=} params.sortOrder Order of sorted results.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/directorySites',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.dynamicTargetingKeys = {
        /**
         * dfareporting.dynamicTargetingKeys.delete
         *
         * @desc Deletes an existing dynamic targeting key.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // ID of the object of this dynamic targeting key. This is a required field.
         *     objectId: '',  // TODO: Update placeholder value.
         *
         *     // Name of this dynamic targeting key. This is a required field. Must be less than 256 characters long
         *     // and cannot contain commas. All characters are converted to lowercase.
         *     name: '',  // TODO: Update placeholder value.
         *
         *     // Type of the object of this dynamic targeting key. This is a required field.
         *     objectType: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.dynamicTargetingKeys.delete(request, function(err) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.dynamicTargetingKeys.delete
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name Name of this dynamic targeting key. This is a required field. Must be less than 256 characters long and cannot contain commas. All characters are converted to lowercase.
         * @param {string} params.objectId ID of the object of this dynamic targeting key. This is a required field.
         * @param {string} params.objectType Type of the object of this dynamic targeting key. This is a required field.
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/dynamicTargetingKeys/{objectId}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['profileId', 'objectId', 'name', 'objectType'],
                pathParams: ['objectId', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.dynamicTargetingKeys.insert
         *
         * @desc Inserts a new dynamic targeting key. Keys must be created at the advertiser level before being assigned to the advertiser's ads, creatives, or placements. There is a maximum of 1000 keys per advertiser, out of which a maximum of 20 keys can be assigned per ad, creative, or placement.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.dynamicTargetingKeys.insert(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.dynamicTargetingKeys.insert
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).DynamicTargetingKey} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/dynamicTargetingKeys',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.dynamicTargetingKeys.list
         *
         * @desc Retrieves a list of dynamic targeting keys.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.dynamicTargetingKeys.list(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.dynamicTargetingKeys.list
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.advertiserId Select only dynamic targeting keys whose object has this advertiser ID.
         * @param {string=} params.names Select only dynamic targeting keys exactly matching these names.
         * @param {string=} params.objectId Select only dynamic targeting keys with this object ID.
         * @param {string=} params.objectType Select only dynamic targeting keys with this object type.
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/dynamicTargetingKeys',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.eventTags = {
        /**
         * dfareporting.eventTags.delete
         *
         * @desc Deletes an existing event tag.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Event tag ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.eventTags.delete(request, function(err) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.eventTags.delete
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Event tag ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/eventTags/{id}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.eventTags.get
         *
         * @desc Gets one event tag by ID.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Event tag ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.eventTags.get(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.eventTags.get
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Event tag ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/eventTags/{id}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.eventTags.insert
         *
         * @desc Inserts a new event tag.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.eventTags.insert(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.eventTags.insert
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).EventTag} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/eventTags',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.eventTags.list
         *
         * @desc Retrieves a list of event tags, possibly filtered.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.eventTags.list(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.eventTags.list
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.adId Select only event tags that belong to this ad.
         * @param {string=} params.advertiserId Select only event tags that belong to this advertiser.
         * @param {string=} params.campaignId Select only event tags that belong to this campaign.
         * @param {boolean=} params.definitionsOnly Examine only the specified campaign or advertiser's event tags for matching selector criteria. When set to false, the parent advertiser and parent campaign of the specified ad or campaign is examined as well. In addition, when set to false, the status field is examined as well, along with the enabledByDefault field. This parameter can not be set to true when adId is specified as ads do not define their own even tags.
         * @param {boolean=} params.enabled Select only enabled event tags. What is considered enabled or disabled depends on the definitionsOnly parameter. When definitionsOnly is set to true, only the specified advertiser or campaign's event tags' enabledByDefault field is examined. When definitionsOnly is set to false, the specified ad or specified campaign's parent advertiser's or parent campaign's event tags' enabledByDefault and status fields are examined as well.
         * @param {string=} params.eventTagTypes Select only event tags with the specified event tag types. Event tag types can be used to specify whether to use a third-party pixel, a third-party JavaScript URL, or a third-party click-through URL for either impression or click tracking.
         * @param {string=} params.ids Select only event tags with these IDs.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {string=} params.searchString Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "eventtag*2015" will return objects with names like "eventtag June 2015", "eventtag April 2015", or simply "eventtag 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "eventtag" will match objects with name "my eventtag", "eventtag 2015", or simply "eventtag".
         * @param {string=} params.sortField Field by which to sort the list.
         * @param {string=} params.sortOrder Order of sorted results.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/eventTags',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.eventTags.patch
         *
         * @desc Updates an existing event tag. This method supports patch semantics.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Event tag ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body. Only added properties
         *       // will be changed.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.eventTags.patch(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.eventTags.patch
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Event tag ID.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).EventTag} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/eventTags',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.eventTags.update
         *
         * @desc Updates an existing event tag.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.eventTags.update(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.eventTags.update
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).EventTag} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/eventTags',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.files = {
        /**
         * dfareporting.files.get
         *
         * @desc Retrieves a report file by its report ID and file ID.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The ID of the report.
         *     reportId: '',  // TODO: Update placeholder value.
         *
         *     // The ID of the report file.
         *     fileId: '',  // TODO: Update placeholder value.
         *
         *     // TODO: To download media content, use:
         *     //
         *     // alt: 'media',
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.files.get(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfareporting
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.files.get
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID of the report file.
         * @param {string} params.reportId The ID of the report.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/reports/{reportId}/files/{fileId}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['reportId', 'fileId'],
                pathParams: ['fileId', 'reportId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.files.list
         *
         * @desc Lists files for a user profile.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The DFA profile ID.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   var handlePage = function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     var itemsPage = response['items'];
         *     if (!itemsPage) {
         *       return;
         *     }
         *     for (var i = 0; i < itemsPage.length; i++) {
         *       // TODO: Change code below to process each resource in `itemsPage`:
         *       console.log(JSON.stringify(itemsPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.pageToken = response.nextPageToken;
         *       dfareporting.files.list(request, handlePage);
         *     }
         *   };
         *
         *   dfareporting.files.list(request, handlePage);
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfareporting
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.files.list
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.maxResults Maximum number of results to return.
         * @param {string=} params.pageToken The value of the nextToken from the previous result page.
         * @param {string} params.profileId The DFA profile ID.
         * @param {string=} params.scope The scope that defines which results are returned, default is 'MINE'.
         * @param {string=} params.sortField The field by which to sort the list.
         * @param {string=} params.sortOrder Order of sorted results, default is 'DESCENDING'.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/files',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.floodlightActivities = {
        /**
         * dfareporting.floodlightActivities.delete
         *
         * @desc Deletes an existing floodlight activity.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Floodlight activity ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.floodlightActivities.delete(request, function(err) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.floodlightActivities.delete
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Floodlight activity ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/floodlightActivities/{id}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.floodlightActivities.generatetag
         *
         * @desc Generates a tag for a floodlight activity.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.floodlightActivities.generatetag(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.floodlightActivities.generatetag
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.floodlightActivityId Floodlight activity ID for which we want to generate a tag.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        generatetag: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/floodlightActivities/generatetag',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.floodlightActivities.get
         *
         * @desc Gets one floodlight activity by ID.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Floodlight activity ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.floodlightActivities.get(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.floodlightActivities.get
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Floodlight activity ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/floodlightActivities/{id}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.floodlightActivities.insert
         *
         * @desc Inserts a new floodlight activity.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.floodlightActivities.insert(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.floodlightActivities.insert
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).FloodlightActivity} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/floodlightActivities',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.floodlightActivities.list
         *
         * @desc Retrieves a list of floodlight activities, possibly filtered. This method supports paging.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   var handlePage = function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     var floodlightActivitiesPage = response['floodlightActivities'];
         *     if (!floodlightActivitiesPage) {
         *       return;
         *     }
         *     for (var i = 0; i < floodlightActivitiesPage.length; i++) {
         *       // TODO: Change code below to process each resource in `floodlightActivitiesPage`:
         *       console.log(JSON.stringify(floodlightActivitiesPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.pageToken = response.nextPageToken;
         *       dfareporting.floodlightActivities.list(request, handlePage);
         *     }
         *   };
         *
         *   dfareporting.floodlightActivities.list(request, handlePage);
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.floodlightActivities.list
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.advertiserId Select only floodlight activities for the specified advertiser ID. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result.
         * @param {string=} params.floodlightActivityGroupIds Select only floodlight activities with the specified floodlight activity group IDs.
         * @param {string=} params.floodlightActivityGroupName Select only floodlight activities with the specified floodlight activity group name.
         * @param {string=} params.floodlightActivityGroupTagString Select only floodlight activities with the specified floodlight activity group tag string.
         * @param {string=} params.floodlightActivityGroupType Select only floodlight activities with the specified floodlight activity group type.
         * @param {string=} params.floodlightConfigurationId Select only floodlight activities for the specified floodlight configuration ID. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result.
         * @param {string=} params.ids Select only floodlight activities with the specified IDs. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result.
         * @param {integer=} params.maxResults Maximum number of results to return.
         * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {string=} params.searchString Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "floodlightactivity*2015" will return objects with names like "floodlightactivity June 2015", "floodlightactivity April 2015", or simply "floodlightactivity 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "floodlightactivity" will match objects with name "my floodlightactivity activity", "floodlightactivity 2015", or simply "floodlightactivity".
         * @param {string=} params.sortField Field by which to sort the list.
         * @param {string=} params.sortOrder Order of sorted results.
         * @param {string=} params.tagString Select only floodlight activities with the specified tag string.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/floodlightActivities',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.floodlightActivities.patch
         *
         * @desc Updates an existing floodlight activity. This method supports patch semantics.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Floodlight activity ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body. Only added properties
         *       // will be changed.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.floodlightActivities.patch(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.floodlightActivities.patch
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Floodlight activity ID.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).FloodlightActivity} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/floodlightActivities',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.floodlightActivities.update
         *
         * @desc Updates an existing floodlight activity.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.floodlightActivities.update(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.floodlightActivities.update
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).FloodlightActivity} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/floodlightActivities',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.floodlightActivityGroups = {
        /**
         * dfareporting.floodlightActivityGroups.get
         *
         * @desc Gets one floodlight activity group by ID.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Floodlight activity Group ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.floodlightActivityGroups.get(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.floodlightActivityGroups.get
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Floodlight activity Group ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/floodlightActivityGroups/{id}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.floodlightActivityGroups.insert
         *
         * @desc Inserts a new floodlight activity group.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.floodlightActivityGroups.insert(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.floodlightActivityGroups.insert
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).FloodlightActivityGroup} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/floodlightActivityGroups',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.floodlightActivityGroups.list
         *
         * @desc Retrieves a list of floodlight activity groups, possibly filtered. This method supports paging.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   var handlePage = function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     var floodlightActivityGroupsPage = response['floodlightActivityGroups'];
         *     if (!floodlightActivityGroupsPage) {
         *       return;
         *     }
         *     for (var i = 0; i < floodlightActivityGroupsPage.length; i++) {
         *       // TODO: Change code below to process each resource in `floodlightActivityGroupsPage`:
         *       console.log(JSON.stringify(floodlightActivityGroupsPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.pageToken = response.nextPageToken;
         *       dfareporting.floodlightActivityGroups.list(request, handlePage);
         *     }
         *   };
         *
         *   dfareporting.floodlightActivityGroups.list(request, handlePage);
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.floodlightActivityGroups.list
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.advertiserId Select only floodlight activity groups with the specified advertiser ID. Must specify either advertiserId or floodlightConfigurationId for a non-empty result.
         * @param {string=} params.floodlightConfigurationId Select only floodlight activity groups with the specified floodlight configuration ID. Must specify either advertiserId, or floodlightConfigurationId for a non-empty result.
         * @param {string=} params.ids Select only floodlight activity groups with the specified IDs. Must specify either advertiserId or floodlightConfigurationId for a non-empty result.
         * @param {integer=} params.maxResults Maximum number of results to return.
         * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {string=} params.searchString Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "floodlightactivitygroup*2015" will return objects with names like "floodlightactivitygroup June 2015", "floodlightactivitygroup April 2015", or simply "floodlightactivitygroup 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "floodlightactivitygroup" will match objects with name "my floodlightactivitygroup activity", "floodlightactivitygroup 2015", or simply "floodlightactivitygroup".
         * @param {string=} params.sortField Field by which to sort the list.
         * @param {string=} params.sortOrder Order of sorted results.
         * @param {string=} params.type Select only floodlight activity groups with the specified floodlight activity group type.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/floodlightActivityGroups',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.floodlightActivityGroups.patch
         *
         * @desc Updates an existing floodlight activity group. This method supports patch semantics.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Floodlight activity Group ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body. Only added properties
         *       // will be changed.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.floodlightActivityGroups.patch(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.floodlightActivityGroups.patch
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Floodlight activity Group ID.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).FloodlightActivityGroup} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/floodlightActivityGroups',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.floodlightActivityGroups.update
         *
         * @desc Updates an existing floodlight activity group.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.floodlightActivityGroups.update(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.floodlightActivityGroups.update
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).FloodlightActivityGroup} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/floodlightActivityGroups',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.floodlightConfigurations = {
        /**
         * dfareporting.floodlightConfigurations.get
         *
         * @desc Gets one floodlight configuration by ID.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Floodlight configuration ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.floodlightConfigurations.get(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.floodlightConfigurations.get
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Floodlight configuration ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/floodlightConfigurations/{id}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.floodlightConfigurations.list
         *
         * @desc Retrieves a list of floodlight configurations, possibly filtered.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.floodlightConfigurations.list(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.floodlightConfigurations.list
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.ids Set of IDs of floodlight configurations to retrieve. Required field; otherwise an empty list will be returned.
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/floodlightConfigurations',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.floodlightConfigurations.patch
         *
         * @desc Updates an existing floodlight configuration. This method supports patch semantics.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Floodlight configuration ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body. Only added properties
         *       // will be changed.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.floodlightConfigurations.patch(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.floodlightConfigurations.patch
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Floodlight configuration ID.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).FloodlightConfiguration} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/floodlightConfigurations',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.floodlightConfigurations.update
         *
         * @desc Updates an existing floodlight configuration.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.floodlightConfigurations.update(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.floodlightConfigurations.update
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).FloodlightConfiguration} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/floodlightConfigurations',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.inventoryItems = {
        /**
         * dfareporting.inventoryItems.get
         *
         * @desc Gets one inventory item by ID.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Project ID for order documents.
         *     projectId: '',  // TODO: Update placeholder value.
         *
         *     // Inventory item ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.inventoryItems.get(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.inventoryItems.get
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Inventory item ID.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {string} params.projectId Project ID for order documents.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/projects/{projectId}/inventoryItems/{id}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'projectId', 'id'],
                pathParams: ['id', 'profileId', 'projectId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.inventoryItems.list
         *
         * @desc Retrieves a list of inventory items, possibly filtered. This method supports paging.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Project ID for order documents.
         *     projectId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   var handlePage = function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     var inventoryItemsPage = response['inventoryItems'];
         *     if (!inventoryItemsPage) {
         *       return;
         *     }
         *     for (var i = 0; i < inventoryItemsPage.length; i++) {
         *       // TODO: Change code below to process each resource in `inventoryItemsPage`:
         *       console.log(JSON.stringify(inventoryItemsPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.pageToken = response.nextPageToken;
         *       dfareporting.inventoryItems.list(request, handlePage);
         *     }
         *   };
         *
         *   dfareporting.inventoryItems.list(request, handlePage);
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.inventoryItems.list
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.ids Select only inventory items with these IDs.
         * @param {boolean=} params.inPlan Select only inventory items that are in plan.
         * @param {integer=} params.maxResults Maximum number of results to return.
         * @param {string=} params.orderId Select only inventory items that belong to specified orders.
         * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {string} params.projectId Project ID for order documents.
         * @param {string=} params.siteId Select only inventory items that are associated with these sites.
         * @param {string=} params.sortField Field by which to sort the list.
         * @param {string=} params.sortOrder Order of sorted results.
         * @param {string=} params.type Select only inventory items with this type.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/projects/{projectId}/inventoryItems',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'projectId'],
                pathParams: ['profileId', 'projectId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.landingPages = {
        /**
         * dfareporting.landingPages.delete
         *
         * @desc Deletes an existing campaign landing page.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Landing page campaign ID.
         *     campaignId: '',  // TODO: Update placeholder value.
         *
         *     // Landing page ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.landingPages.delete(request, function(err) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.landingPages.delete
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.campaignId Landing page campaign ID.
         * @param {string} params.id Landing page ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/campaigns/{campaignId}/landingPages/{id}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['profileId', 'campaignId', 'id'],
                pathParams: ['campaignId', 'id', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.landingPages.get
         *
         * @desc Gets one campaign landing page by ID.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Landing page campaign ID.
         *     campaignId: '',  // TODO: Update placeholder value.
         *
         *     // Landing page ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.landingPages.get(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.landingPages.get
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.campaignId Landing page campaign ID.
         * @param {string} params.id Landing page ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/campaigns/{campaignId}/landingPages/{id}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'campaignId', 'id'],
                pathParams: ['campaignId', 'id', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.landingPages.insert
         *
         * @desc Inserts a new landing page for the specified campaign.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Landing page campaign ID.
         *     campaignId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.landingPages.insert(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.landingPages.insert
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.campaignId Landing page campaign ID.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).LandingPage} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/campaigns/{campaignId}/landingPages',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId', 'campaignId'],
                pathParams: ['campaignId', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.landingPages.list
         *
         * @desc Retrieves the list of landing pages for the specified campaign.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Landing page campaign ID.
         *     campaignId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.landingPages.list(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.landingPages.list
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.campaignId Landing page campaign ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/campaigns/{campaignId}/landingPages',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'campaignId'],
                pathParams: ['campaignId', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.landingPages.patch
         *
         * @desc Updates an existing campaign landing page. This method supports patch semantics.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Landing page campaign ID.
         *     campaignId: '',  // TODO: Update placeholder value.
         *
         *     // Landing page ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body. Only added properties
         *       // will be changed.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.landingPages.patch(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.landingPages.patch
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.campaignId Landing page campaign ID.
         * @param {string} params.id Landing page ID.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).LandingPage} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/campaigns/{campaignId}/landingPages',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['profileId', 'campaignId', 'id'],
                pathParams: ['campaignId', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.landingPages.update
         *
         * @desc Updates an existing campaign landing page.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Landing page campaign ID.
         *     campaignId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.landingPages.update(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.landingPages.update
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.campaignId Landing page campaign ID.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).LandingPage} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/campaigns/{campaignId}/landingPages',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['profileId', 'campaignId'],
                pathParams: ['campaignId', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.languages = {
        /**
         * dfareporting.languages.list
         *
         * @desc Retrieves a list of languages.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.languages.list(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.languages.list
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/languages',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.metros = {
        /**
         * dfareporting.metros.list
         *
         * @desc Retrieves a list of metros.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.metros.list(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.metros.list
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/metros',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.mobileCarriers = {
        /**
         * dfareporting.mobileCarriers.get
         *
         * @desc Gets one mobile carrier by ID.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Mobile carrier ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.mobileCarriers.get(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.mobileCarriers.get
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Mobile carrier ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/mobileCarriers/{id}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.mobileCarriers.list
         *
         * @desc Retrieves a list of mobile carriers.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.mobileCarriers.list(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.mobileCarriers.list
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/mobileCarriers',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.operatingSystemVersions = {
        /**
         * dfareporting.operatingSystemVersions.get
         *
         * @desc Gets one operating system version by ID.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Operating system version ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.operatingSystemVersions.get(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.operatingSystemVersions.get
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Operating system version ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/operatingSystemVersions/{id}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.operatingSystemVersions.list
         *
         * @desc Retrieves a list of operating system versions.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.operatingSystemVersions.list(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.operatingSystemVersions.list
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/operatingSystemVersions',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.operatingSystems = {
        /**
         * dfareporting.operatingSystems.get
         *
         * @desc Gets one operating system by DART ID.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Operating system DART ID.
         *     dartId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.operatingSystems.get(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.operatingSystems.get
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.dartId Operating system DART ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/operatingSystems/{dartId}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'dartId'],
                pathParams: ['dartId', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.operatingSystems.list
         *
         * @desc Retrieves a list of operating systems.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.operatingSystems.list(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.operatingSystems.list
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/operatingSystems',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.orderDocuments = {
        /**
         * dfareporting.orderDocuments.get
         *
         * @desc Gets one order document by ID.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Project ID for order documents.
         *     projectId: '',  // TODO: Update placeholder value.
         *
         *     // Order document ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.orderDocuments.get(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.orderDocuments.get
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Order document ID.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {string} params.projectId Project ID for order documents.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/projects/{projectId}/orderDocuments/{id}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'projectId', 'id'],
                pathParams: ['id', 'profileId', 'projectId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.orderDocuments.list
         *
         * @desc Retrieves a list of order documents, possibly filtered. This method supports paging.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Project ID for order documents.
         *     projectId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   var handlePage = function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     var orderDocumentsPage = response['orderDocuments'];
         *     if (!orderDocumentsPage) {
         *       return;
         *     }
         *     for (var i = 0; i < orderDocumentsPage.length; i++) {
         *       // TODO: Change code below to process each resource in `orderDocumentsPage`:
         *       console.log(JSON.stringify(orderDocumentsPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.pageToken = response.nextPageToken;
         *       dfareporting.orderDocuments.list(request, handlePage);
         *     }
         *   };
         *
         *   dfareporting.orderDocuments.list(request, handlePage);
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.orderDocuments.list
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.approved Select only order documents that have been approved by at least one user.
         * @param {string=} params.ids Select only order documents with these IDs.
         * @param {integer=} params.maxResults Maximum number of results to return.
         * @param {string=} params.orderId Select only order documents for specified orders.
         * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {string} params.projectId Project ID for order documents.
         * @param {string=} params.searchString Allows searching for order documents by name or ID. Wildcards (*) are allowed. For example, "orderdocument*2015" will return order documents with names like "orderdocument June 2015", "orderdocument April 2015", or simply "orderdocument 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "orderdocument" will match order documents with name "my orderdocument", "orderdocument 2015", or simply "orderdocument".
         * @param {string=} params.siteId Select only order documents that are associated with these sites.
         * @param {string=} params.sortField Field by which to sort the list.
         * @param {string=} params.sortOrder Order of sorted results.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/projects/{projectId}/orderDocuments',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'projectId'],
                pathParams: ['profileId', 'projectId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.orders = {
        /**
         * dfareporting.orders.get
         *
         * @desc Gets one order by ID.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Project ID for orders.
         *     projectId: '',  // TODO: Update placeholder value.
         *
         *     // Order ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.orders.get(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.orders.get
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Order ID.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {string} params.projectId Project ID for orders.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/projects/{projectId}/orders/{id}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'projectId', 'id'],
                pathParams: ['id', 'profileId', 'projectId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.orders.list
         *
         * @desc Retrieves a list of orders, possibly filtered. This method supports paging.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Project ID for orders.
         *     projectId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   var handlePage = function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     var ordersPage = response['orders'];
         *     if (!ordersPage) {
         *       return;
         *     }
         *     for (var i = 0; i < ordersPage.length; i++) {
         *       // TODO: Change code below to process each resource in `ordersPage`:
         *       console.log(JSON.stringify(ordersPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.pageToken = response.nextPageToken;
         *       dfareporting.orders.list(request, handlePage);
         *     }
         *   };
         *
         *   dfareporting.orders.list(request, handlePage);
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.orders.list
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.ids Select only orders with these IDs.
         * @param {integer=} params.maxResults Maximum number of results to return.
         * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {string} params.projectId Project ID for orders.
         * @param {string=} params.searchString Allows searching for orders by name or ID. Wildcards (*) are allowed. For example, "order*2015" will return orders with names like "order June 2015", "order April 2015", or simply "order 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "order" will match orders with name "my order", "order 2015", or simply "order".
         * @param {string=} params.siteId Select only orders that are associated with these site IDs.
         * @param {string=} params.sortField Field by which to sort the list.
         * @param {string=} params.sortOrder Order of sorted results.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/projects/{projectId}/orders',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'projectId'],
                pathParams: ['profileId', 'projectId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.placementGroups = {
        /**
         * dfareporting.placementGroups.get
         *
         * @desc Gets one placement group by ID.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Placement group ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.placementGroups.get(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.placementGroups.get
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Placement group ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/placementGroups/{id}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.placementGroups.insert
         *
         * @desc Inserts a new placement group.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.placementGroups.insert(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.placementGroups.insert
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).PlacementGroup} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/placementGroups',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.placementGroups.list
         *
         * @desc Retrieves a list of placement groups, possibly filtered. This method supports paging.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   var handlePage = function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     var placementGroupsPage = response['placementGroups'];
         *     if (!placementGroupsPage) {
         *       return;
         *     }
         *     for (var i = 0; i < placementGroupsPage.length; i++) {
         *       // TODO: Change code below to process each resource in `placementGroupsPage`:
         *       console.log(JSON.stringify(placementGroupsPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.pageToken = response.nextPageToken;
         *       dfareporting.placementGroups.list(request, handlePage);
         *     }
         *   };
         *
         *   dfareporting.placementGroups.list(request, handlePage);
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.placementGroups.list
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.advertiserIds Select only placement groups that belong to these advertisers.
         * @param {boolean=} params.archived Select only archived placements. Don't set this field to select both archived and non-archived placements.
         * @param {string=} params.campaignIds Select only placement groups that belong to these campaigns.
         * @param {string=} params.contentCategoryIds Select only placement groups that are associated with these content categories.
         * @param {string=} params.directorySiteIds Select only placement groups that are associated with these directory sites.
         * @param {string=} params.ids Select only placement groups with these IDs.
         * @param {string=} params.maxEndDate Select only placements or placement groups whose end date is on or before the specified maxEndDate. The date should be formatted as "yyyy-MM-dd".
         * @param {integer=} params.maxResults Maximum number of results to return.
         * @param {string=} params.maxStartDate Select only placements or placement groups whose start date is on or before the specified maxStartDate. The date should be formatted as "yyyy-MM-dd".
         * @param {string=} params.minEndDate Select only placements or placement groups whose end date is on or after the specified minEndDate. The date should be formatted as "yyyy-MM-dd".
         * @param {string=} params.minStartDate Select only placements or placement groups whose start date is on or after the specified minStartDate. The date should be formatted as "yyyy-MM-dd".
         * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
         * @param {string=} params.placementGroupType Select only placement groups belonging with this group type. A package is a simple group of placements that acts as a single pricing point for a group of tags. A roadblock is a group of placements that not only acts as a single pricing point but also assumes that all the tags in it will be served at the same time. A roadblock requires one of its assigned placements to be marked as primary for reporting.
         * @param {string=} params.placementStrategyIds Select only placement groups that are associated with these placement strategies.
         * @param {string=} params.pricingTypes Select only placement groups with these pricing types.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {string=} params.searchString Allows searching for placement groups by name or ID. Wildcards (*) are allowed. For example, "placement*2015" will return placement groups with names like "placement group June 2015", "placement group May 2015", or simply "placements 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "placementgroup" will match placement groups with name "my placementgroup", "placementgroup 2015", or simply "placementgroup".
         * @param {string=} params.siteIds Select only placement groups that are associated with these sites.
         * @param {string=} params.sortField Field by which to sort the list.
         * @param {string=} params.sortOrder Order of sorted results.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/placementGroups',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.placementGroups.patch
         *
         * @desc Updates an existing placement group. This method supports patch semantics.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Placement group ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body. Only added properties
         *       // will be changed.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.placementGroups.patch(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.placementGroups.patch
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Placement group ID.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).PlacementGroup} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/placementGroups',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.placementGroups.update
         *
         * @desc Updates an existing placement group.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.placementGroups.update(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.placementGroups.update
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).PlacementGroup} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/placementGroups',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.placementStrategies = {
        /**
         * dfareporting.placementStrategies.delete
         *
         * @desc Deletes an existing placement strategy.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Placement strategy ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.placementStrategies.delete(request, function(err) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.placementStrategies.delete
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Placement strategy ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/placementStrategies/{id}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.placementStrategies.get
         *
         * @desc Gets one placement strategy by ID.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Placement strategy ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.placementStrategies.get(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.placementStrategies.get
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Placement strategy ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/placementStrategies/{id}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.placementStrategies.insert
         *
         * @desc Inserts a new placement strategy.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.placementStrategies.insert(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.placementStrategies.insert
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).PlacementStrategy} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/placementStrategies',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.placementStrategies.list
         *
         * @desc Retrieves a list of placement strategies, possibly filtered. This method supports paging.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   var handlePage = function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     var placementStrategiesPage = response['placementStrategies'];
         *     if (!placementStrategiesPage) {
         *       return;
         *     }
         *     for (var i = 0; i < placementStrategiesPage.length; i++) {
         *       // TODO: Change code below to process each resource in `placementStrategiesPage`:
         *       console.log(JSON.stringify(placementStrategiesPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.pageToken = response.nextPageToken;
         *       dfareporting.placementStrategies.list(request, handlePage);
         *     }
         *   };
         *
         *   dfareporting.placementStrategies.list(request, handlePage);
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.placementStrategies.list
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.ids Select only placement strategies with these IDs.
         * @param {integer=} params.maxResults Maximum number of results to return.
         * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {string=} params.searchString Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "placementstrategy*2015" will return objects with names like "placementstrategy June 2015", "placementstrategy April 2015", or simply "placementstrategy 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "placementstrategy" will match objects with name "my placementstrategy", "placementstrategy 2015", or simply "placementstrategy".
         * @param {string=} params.sortField Field by which to sort the list.
         * @param {string=} params.sortOrder Order of sorted results.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/placementStrategies',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.placementStrategies.patch
         *
         * @desc Updates an existing placement strategy. This method supports patch semantics.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Placement strategy ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body. Only added properties
         *       // will be changed.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.placementStrategies.patch(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.placementStrategies.patch
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Placement strategy ID.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).PlacementStrategy} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/placementStrategies',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.placementStrategies.update
         *
         * @desc Updates an existing placement strategy.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.placementStrategies.update(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.placementStrategies.update
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).PlacementStrategy} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/placementStrategies',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.placements = {
        /**
         * dfareporting.placements.generatetags
         *
         * @desc Generates tags for a placement.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.placements.generatetags(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.placements.generatetags
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.campaignId Generate placements belonging to this campaign. This is a required field.
         * @param {string=} params.placementIds Generate tags for these placements.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {string=} params.tagFormats Tag formats to generate for these placements.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        generatetags: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/placements/generatetags',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.placements.get
         *
         * @desc Gets one placement by ID.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Placement ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.placements.get(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.placements.get
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Placement ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/placements/{id}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.placements.insert
         *
         * @desc Inserts a new placement.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.placements.insert(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.placements.insert
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).Placement} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/placements',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.placements.list
         *
         * @desc Retrieves a list of placements, possibly filtered. This method supports paging.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   var handlePage = function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     var placementsPage = response['placements'];
         *     if (!placementsPage) {
         *       return;
         *     }
         *     for (var i = 0; i < placementsPage.length; i++) {
         *       // TODO: Change code below to process each resource in `placementsPage`:
         *       console.log(JSON.stringify(placementsPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.pageToken = response.nextPageToken;
         *       dfareporting.placements.list(request, handlePage);
         *     }
         *   };
         *
         *   dfareporting.placements.list(request, handlePage);
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.placements.list
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.advertiserIds Select only placements that belong to these advertisers.
         * @param {boolean=} params.archived Select only archived placements. Don't set this field to select both archived and non-archived placements.
         * @param {string=} params.campaignIds Select only placements that belong to these campaigns.
         * @param {string=} params.compatibilities Select only placements that are associated with these compatibilities. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop or on mobile devices for regular or interstitial ads respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard.
         * @param {string=} params.contentCategoryIds Select only placements that are associated with these content categories.
         * @param {string=} params.directorySiteIds Select only placements that are associated with these directory sites.
         * @param {string=} params.groupIds Select only placements that belong to these placement groups.
         * @param {string=} params.ids Select only placements with these IDs.
         * @param {string=} params.maxEndDate Select only placements or placement groups whose end date is on or before the specified maxEndDate. The date should be formatted as "yyyy-MM-dd".
         * @param {integer=} params.maxResults Maximum number of results to return.
         * @param {string=} params.maxStartDate Select only placements or placement groups whose start date is on or before the specified maxStartDate. The date should be formatted as "yyyy-MM-dd".
         * @param {string=} params.minEndDate Select only placements or placement groups whose end date is on or after the specified minEndDate. The date should be formatted as "yyyy-MM-dd".
         * @param {string=} params.minStartDate Select only placements or placement groups whose start date is on or after the specified minStartDate. The date should be formatted as "yyyy-MM-dd".
         * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
         * @param {string=} params.paymentSource Select only placements with this payment source.
         * @param {string=} params.placementStrategyIds Select only placements that are associated with these placement strategies.
         * @param {string=} params.pricingTypes Select only placements with these pricing types.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {string=} params.searchString Allows searching for placements by name or ID. Wildcards (*) are allowed. For example, "placement*2015" will return placements with names like "placement June 2015", "placement May 2015", or simply "placements 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "placement" will match placements with name "my placement", "placement 2015", or simply "placement".
         * @param {string=} params.siteIds Select only placements that are associated with these sites.
         * @param {string=} params.sizeIds Select only placements that are associated with these sizes.
         * @param {string=} params.sortField Field by which to sort the list.
         * @param {string=} params.sortOrder Order of sorted results.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/placements',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.placements.patch
         *
         * @desc Updates an existing placement. This method supports patch semantics.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Placement ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body. Only added properties
         *       // will be changed.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.placements.patch(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.placements.patch
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Placement ID.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).Placement} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/placements',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.placements.update
         *
         * @desc Updates an existing placement.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.placements.update(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.placements.update
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).Placement} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/placements',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.platformTypes = {
        /**
         * dfareporting.platformTypes.get
         *
         * @desc Gets one platform type by ID.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Platform type ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.platformTypes.get(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.platformTypes.get
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Platform type ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/platformTypes/{id}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.platformTypes.list
         *
         * @desc Retrieves a list of platform types.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.platformTypes.list(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.platformTypes.list
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/platformTypes',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.postalCodes = {
        /**
         * dfareporting.postalCodes.get
         *
         * @desc Gets one postal code by ID.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Postal code ID.
         *     code: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.postalCodes.get(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.postalCodes.get
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.code Postal code ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/postalCodes/{code}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'code'],
                pathParams: ['code', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.postalCodes.list
         *
         * @desc Retrieves a list of postal codes.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.postalCodes.list(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.postalCodes.list
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/postalCodes',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.projects = {
        /**
         * dfareporting.projects.get
         *
         * @desc Gets one project by ID.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Project ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.projects.get(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.projects.get
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Project ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/projects/{id}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.projects.list
         *
         * @desc Retrieves a list of projects, possibly filtered. This method supports paging.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   var handlePage = function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     var projectsPage = response['projects'];
         *     if (!projectsPage) {
         *       return;
         *     }
         *     for (var i = 0; i < projectsPage.length; i++) {
         *       // TODO: Change code below to process each resource in `projectsPage`:
         *       console.log(JSON.stringify(projectsPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.pageToken = response.nextPageToken;
         *       dfareporting.projects.list(request, handlePage);
         *     }
         *   };
         *
         *   dfareporting.projects.list(request, handlePage);
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.projects.list
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.advertiserIds Select only projects with these advertiser IDs.
         * @param {string=} params.ids Select only projects with these IDs.
         * @param {integer=} params.maxResults Maximum number of results to return.
         * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {string=} params.searchString Allows searching for projects by name or ID. Wildcards (*) are allowed. For example, "project*2015" will return projects with names like "project June 2015", "project April 2015", or simply "project 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "project" will match projects with name "my project", "project 2015", or simply "project".
         * @param {string=} params.sortField Field by which to sort the list.
         * @param {string=} params.sortOrder Order of sorted results.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/projects',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.regions = {
        /**
         * dfareporting.regions.list
         *
         * @desc Retrieves a list of regions.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.regions.list(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.regions.list
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/regions',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.remarketingListShares = {
        /**
         * dfareporting.remarketingListShares.get
         *
         * @desc Gets one remarketing list share by remarketing list ID.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Remarketing list ID.
         *     remarketingListId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.remarketingListShares.get(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.remarketingListShares.get
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {string} params.remarketingListId Remarketing list ID.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/remarketingListShares/{remarketingListId}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'remarketingListId'],
                pathParams: ['profileId', 'remarketingListId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.remarketingListShares.patch
         *
         * @desc Updates an existing remarketing list share. This method supports patch semantics.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Remarketing list ID.
         *     remarketingListId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body. Only added properties
         *       // will be changed.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.remarketingListShares.patch(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.remarketingListShares.patch
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {string} params.remarketingListId Remarketing list ID.
         * @param {dfareporting(v2.6).RemarketingListShare} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/remarketingListShares',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['profileId', 'remarketingListId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.remarketingListShares.update
         *
         * @desc Updates an existing remarketing list share.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.remarketingListShares.update(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.remarketingListShares.update
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).RemarketingListShare} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/remarketingListShares',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.remarketingLists = {
        /**
         * dfareporting.remarketingLists.get
         *
         * @desc Gets one remarketing list by ID.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Remarketing list ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.remarketingLists.get(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.remarketingLists.get
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Remarketing list ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/remarketingLists/{id}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.remarketingLists.insert
         *
         * @desc Inserts a new remarketing list.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.remarketingLists.insert(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.remarketingLists.insert
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).RemarketingList} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/remarketingLists',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.remarketingLists.list
         *
         * @desc Retrieves a list of remarketing lists, possibly filtered. This method supports paging.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Select only remarketing lists owned by this advertiser.
         *     advertiserId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   var handlePage = function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     var remarketingListsPage = response['remarketingLists'];
         *     if (!remarketingListsPage) {
         *       return;
         *     }
         *     for (var i = 0; i < remarketingListsPage.length; i++) {
         *       // TODO: Change code below to process each resource in `remarketingListsPage`:
         *       console.log(JSON.stringify(remarketingListsPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.pageToken = response.nextPageToken;
         *       dfareporting.remarketingLists.list(request, handlePage);
         *     }
         *   };
         *
         *   dfareporting.remarketingLists.list(request, handlePage);
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.remarketingLists.list
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.active Select only active or only inactive remarketing lists.
         * @param {string} params.advertiserId Select only remarketing lists owned by this advertiser.
         * @param {string=} params.floodlightActivityId Select only remarketing lists that have this floodlight activity ID.
         * @param {integer=} params.maxResults Maximum number of results to return.
         * @param {string=} params.name Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "remarketing list*2015" will return objects with names like "remarketing list June 2015", "remarketing list April 2015", or simply "remarketing list 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "remarketing list" will match objects with name "my remarketing list", "remarketing list 2015", or simply "remarketing list".
         * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {string=} params.sortField Field by which to sort the list.
         * @param {string=} params.sortOrder Order of sorted results.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/remarketingLists',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'advertiserId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.remarketingLists.patch
         *
         * @desc Updates an existing remarketing list. This method supports patch semantics.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Remarketing list ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body. Only added properties
         *       // will be changed.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.remarketingLists.patch(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.remarketingLists.patch
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Remarketing list ID.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).RemarketingList} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/remarketingLists',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.remarketingLists.update
         *
         * @desc Updates an existing remarketing list.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.remarketingLists.update(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.remarketingLists.update
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).RemarketingList} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/remarketingLists',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.reports = {
        /**
         * dfareporting.reports.delete
         *
         * @desc Deletes a report by its ID.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The DFA user profile ID.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // The ID of the report.
         *     reportId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.reports.delete(request, function(err) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfareporting
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.reports.delete
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId The DFA user profile ID.
         * @param {string} params.reportId The ID of the report.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/reports/{reportId}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['profileId', 'reportId'],
                pathParams: ['profileId', 'reportId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.reports.get
         *
         * @desc Retrieves a report by its ID.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The DFA user profile ID.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // The ID of the report.
         *     reportId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.reports.get(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfareporting
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.reports.get
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId The DFA user profile ID.
         * @param {string} params.reportId The ID of the report.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/reports/{reportId}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'reportId'],
                pathParams: ['profileId', 'reportId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.reports.insert
         *
         * @desc Creates a report.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The DFA user profile ID.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.reports.insert(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfareporting
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.reports.insert
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId The DFA user profile ID.
         * @param {dfareporting(v2.6).Report} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/reports',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.reports.list
         *
         * @desc Retrieves list of reports.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The DFA user profile ID.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   var handlePage = function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     var itemsPage = response['items'];
         *     if (!itemsPage) {
         *       return;
         *     }
         *     for (var i = 0; i < itemsPage.length; i++) {
         *       // TODO: Change code below to process each resource in `itemsPage`:
         *       console.log(JSON.stringify(itemsPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.pageToken = response.nextPageToken;
         *       dfareporting.reports.list(request, handlePage);
         *     }
         *   };
         *
         *   dfareporting.reports.list(request, handlePage);
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfareporting
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.reports.list
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.maxResults Maximum number of results to return.
         * @param {string=} params.pageToken The value of the nextToken from the previous result page.
         * @param {string} params.profileId The DFA user profile ID.
         * @param {string=} params.scope The scope that defines which results are returned, default is 'MINE'.
         * @param {string=} params.sortField The field by which to sort the list.
         * @param {string=} params.sortOrder Order of sorted results, default is 'DESCENDING'.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/reports',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.reports.patch
         *
         * @desc Updates a report. This method supports patch semantics.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The DFA user profile ID.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // The ID of the report.
         *     reportId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body. Only added properties
         *       // will be changed.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.reports.patch(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfareporting
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.reports.patch
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId The DFA user profile ID.
         * @param {string} params.reportId The ID of the report.
         * @param {dfareporting(v2.6).Report} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/reports/{reportId}',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['profileId', 'reportId'],
                pathParams: ['profileId', 'reportId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.reports.run
         *
         * @desc Runs a report.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The DFA profile ID.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // The ID of the report.
         *     reportId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.reports.run(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfareporting
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.reports.run
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId The DFA profile ID.
         * @param {string} params.reportId The ID of the report.
         * @param {boolean=} params.synchronous If set and true, tries to run the report synchronously.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        run: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/reports/{reportId}/run',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId', 'reportId'],
                pathParams: ['profileId', 'reportId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.reports.update
         *
         * @desc Updates a report.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The DFA user profile ID.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // The ID of the report.
         *     reportId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.reports.update(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfareporting
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.reports.update
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId The DFA user profile ID.
         * @param {string} params.reportId The ID of the report.
         * @param {dfareporting(v2.6).Report} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/reports/{reportId}',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['profileId', 'reportId'],
                pathParams: ['profileId', 'reportId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        compatibleFields: {
            /**
             * dfareporting.reports.compatibleFields.query
             *
             * @desc Returns the fields that are compatible to be selected in the respective sections of a report criteria, given the fields already selected in the input report and user permissions.
             *
             * @example
             * // BEFORE RUNNING:
             * // ---------------
             * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
             * //    and check the quota for your project at
             * //    https://console.developers.google.com/apis/api/dfareporting
             * // 2. Install the Node.js client library by running
             * //    `npm install googleapis --save`
             *
             * var google = require('googleapis');
             * var dfareporting = google.dfareporting('v2.6');
             *
             * authorize(function(authClient) {
             *   var request = {
             *     // The DFA user profile ID.
             *     profileId: '',  // TODO: Update placeholder value.
             *
             *     resource: {
             *       // TODO: Add desired properties of the request body.
             *     },
             *
             *     auth: authClient
             *   };
             *
             *   dfareporting.reports.compatibleFields.query(request, function(err, response) {
             *     if (err) {
             *       console.log(err);
             *       return;
             *     }
             *
             *     // TODO: Change code below to process the `response` object:
             *     console.log(JSON.stringify(response, null, 2));
             *   });
             * });
             *
             * function authorize(callback) {
             *   // TODO: Change placeholder below to generate authentication credentials. See:
             *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
             *   //
             *   // Authorize using the following scope:
             *   //    https://www.googleapis.com/auth/dfareporting
             *   var authClient = null;
             *
             *   if (authClient == null) {
             *     console.log('authentication failed');
             *     return;
             *   }
             *   callback(authClient);
             * }
             *
             * @alias dfareporting.reports.compatibleFields.query
             * @memberOf! dfareporting(v2.6)
             *
             * @param {object} params Parameters for request
             * @param {string} params.profileId The DFA user profile ID.
             * @param {dfareporting(v2.6).Report} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            query: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const parameters = {
                    options: Object.assign({
                        url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/reports/compatiblefields/query',
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['profileId'],
                    pathParams: ['profileId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        },
        files: {
            /**
             * dfareporting.reports.files.get
             *
             * @desc Retrieves a report file.
             *
             * @example
             * // BEFORE RUNNING:
             * // ---------------
             * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
             * //    and check the quota for your project at
             * //    https://console.developers.google.com/apis/api/dfareporting
             * // 2. Install the Node.js client library by running
             * //    `npm install googleapis --save`
             *
             * var google = require('googleapis');
             * var dfareporting = google.dfareporting('v2.6');
             *
             * authorize(function(authClient) {
             *   var request = {
             *     // The DFA profile ID.
             *     profileId: '',  // TODO: Update placeholder value.
             *
             *     // The ID of the report.
             *     reportId: '',  // TODO: Update placeholder value.
             *
             *     // The ID of the report file.
             *     fileId: '',  // TODO: Update placeholder value.
             *
             *     // TODO: To download media content, use:
             *     //
             *     // alt: 'media',
             *
             *     auth: authClient
             *   };
             *
             *   dfareporting.reports.files.get(request, function(err, response) {
             *     if (err) {
             *       console.log(err);
             *       return;
             *     }
             *
             *     // TODO: Change code below to process the `response` object:
             *     console.log(JSON.stringify(response, null, 2));
             *   });
             * });
             *
             * function authorize(callback) {
             *   // TODO: Change placeholder below to generate authentication credentials. See:
             *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
             *   //
             *   // Authorize using the following scope:
             *   //    https://www.googleapis.com/auth/dfareporting
             *   var authClient = null;
             *
             *   if (authClient == null) {
             *     console.log('authentication failed');
             *     return;
             *   }
             *   callback(authClient);
             * }
             *
             * @alias dfareporting.reports.files.get
             * @memberOf! dfareporting(v2.6)
             *
             * @param {object} params Parameters for request
             * @param {string} params.fileId The ID of the report file.
             * @param {string} params.profileId The DFA profile ID.
             * @param {string} params.reportId The ID of the report.
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
                        url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/reports/{reportId}/files/{fileId}',
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['profileId', 'reportId', 'fileId'],
                    pathParams: ['fileId', 'profileId', 'reportId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * dfareporting.reports.files.list
             *
             * @desc Lists files for a report.
             *
             * @example
             * // BEFORE RUNNING:
             * // ---------------
             * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
             * //    and check the quota for your project at
             * //    https://console.developers.google.com/apis/api/dfareporting
             * // 2. Install the Node.js client library by running
             * //    `npm install googleapis --save`
             *
             * var google = require('googleapis');
             * var dfareporting = google.dfareporting('v2.6');
             *
             * authorize(function(authClient) {
             *   var request = {
             *     // The DFA profile ID.
             *     profileId: '',  // TODO: Update placeholder value.
             *
             *     // The ID of the parent report.
             *     reportId: '',  // TODO: Update placeholder value.
             *
             *     auth: authClient
             *   };
             *
             *   var handlePage = function(err, response) {
             *     if (err) {
             *       console.log(err);
             *       return;
             *     }
             *
             *     var itemsPage = response['items'];
             *     if (!itemsPage) {
             *       return;
             *     }
             *     for (var i = 0; i < itemsPage.length; i++) {
             *       // TODO: Change code below to process each resource in `itemsPage`:
             *       console.log(JSON.stringify(itemsPage[i], null, 2));
             *     }
             *
             *     if (response.nextPageToken) {
             *       request.pageToken = response.nextPageToken;
             *       dfareporting.reports.files.list(request, handlePage);
             *     }
             *   };
             *
             *   dfareporting.reports.files.list(request, handlePage);
             * });
             *
             * function authorize(callback) {
             *   // TODO: Change placeholder below to generate authentication credentials. See:
             *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
             *   //
             *   // Authorize using the following scope:
             *   //    https://www.googleapis.com/auth/dfareporting
             *   var authClient = null;
             *
             *   if (authClient == null) {
             *     console.log('authentication failed');
             *     return;
             *   }
             *   callback(authClient);
             * }
             *
             * @alias dfareporting.reports.files.list
             * @memberOf! dfareporting(v2.6)
             *
             * @param {object} params Parameters for request
             * @param {integer=} params.maxResults Maximum number of results to return.
             * @param {string=} params.pageToken The value of the nextToken from the previous result page.
             * @param {string} params.profileId The DFA profile ID.
             * @param {string} params.reportId The ID of the parent report.
             * @param {string=} params.sortField The field by which to sort the list.
             * @param {string=} params.sortOrder Order of sorted results, default is 'DESCENDING'.
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
                        url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/reports/{reportId}/files',
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['profileId', 'reportId'],
                    pathParams: ['profileId', 'reportId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        }
    };
    self.sites = {
        /**
         * dfareporting.sites.get
         *
         * @desc Gets one site by ID.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Site ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.sites.get(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.sites.get
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Site ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/sites/{id}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.sites.insert
         *
         * @desc Inserts a new site.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.sites.insert(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.sites.insert
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).Site} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/sites',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.sites.list
         *
         * @desc Retrieves a list of sites, possibly filtered. This method supports paging.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   var handlePage = function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     var sitesPage = response['sites'];
         *     if (!sitesPage) {
         *       return;
         *     }
         *     for (var i = 0; i < sitesPage.length; i++) {
         *       // TODO: Change code below to process each resource in `sitesPage`:
         *       console.log(JSON.stringify(sitesPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.pageToken = response.nextPageToken;
         *       dfareporting.sites.list(request, handlePage);
         *     }
         *   };
         *
         *   dfareporting.sites.list(request, handlePage);
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.sites.list
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.acceptsInStreamVideoPlacements This search filter is no longer supported and will have no effect on the results returned.
         * @param {boolean=} params.acceptsInterstitialPlacements This search filter is no longer supported and will have no effect on the results returned.
         * @param {boolean=} params.acceptsPublisherPaidPlacements Select only sites that accept publisher paid placements.
         * @param {boolean=} params.adWordsSite Select only AdWords sites.
         * @param {boolean=} params.approved Select only approved sites.
         * @param {string=} params.campaignIds Select only sites with these campaign IDs.
         * @param {string=} params.directorySiteIds Select only sites with these directory site IDs.
         * @param {string=} params.ids Select only sites with these IDs.
         * @param {integer=} params.maxResults Maximum number of results to return.
         * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {string=} params.searchString Allows searching for objects by name, ID or keyName. Wildcards (*) are allowed. For example, "site*2015" will return objects with names like "site June 2015", "site April 2015", or simply "site 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "site" will match objects with name "my site", "site 2015", or simply "site".
         * @param {string=} params.sortField Field by which to sort the list.
         * @param {string=} params.sortOrder Order of sorted results.
         * @param {string=} params.subaccountId Select only sites with this subaccount ID.
         * @param {boolean=} params.unmappedSite Select only sites that have not been mapped to a directory site.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/sites',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.sites.patch
         *
         * @desc Updates an existing site. This method supports patch semantics.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Site ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body. Only added properties
         *       // will be changed.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.sites.patch(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.sites.patch
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Site ID.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).Site} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/sites',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.sites.update
         *
         * @desc Updates an existing site.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.sites.update(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.sites.update
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).Site} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/sites',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.sizes = {
        /**
         * dfareporting.sizes.get
         *
         * @desc Gets one size by ID.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Size ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.sizes.get(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.sizes.get
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Size ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/sizes/{id}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.sizes.insert
         *
         * @desc Inserts a new size.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.sizes.insert(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.sizes.insert
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).Size} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/sizes',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.sizes.list
         *
         * @desc Retrieves a list of sizes, possibly filtered.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.sizes.list(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.sizes.list
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.height Select only sizes with this height.
         * @param {boolean=} params.iabStandard Select only IAB standard sizes.
         * @param {string=} params.ids Select only sizes with these IDs.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {integer=} params.width Select only sizes with this width.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/sizes',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.subaccounts = {
        /**
         * dfareporting.subaccounts.get
         *
         * @desc Gets one subaccount by ID.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Subaccount ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.subaccounts.get(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.subaccounts.get
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Subaccount ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/subaccounts/{id}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.subaccounts.insert
         *
         * @desc Inserts a new subaccount.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.subaccounts.insert(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.subaccounts.insert
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).Subaccount} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/subaccounts',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.subaccounts.list
         *
         * @desc Gets a list of subaccounts, possibly filtered. This method supports paging.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   var handlePage = function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     var subaccountsPage = response['subaccounts'];
         *     if (!subaccountsPage) {
         *       return;
         *     }
         *     for (var i = 0; i < subaccountsPage.length; i++) {
         *       // TODO: Change code below to process each resource in `subaccountsPage`:
         *       console.log(JSON.stringify(subaccountsPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.pageToken = response.nextPageToken;
         *       dfareporting.subaccounts.list(request, handlePage);
         *     }
         *   };
         *
         *   dfareporting.subaccounts.list(request, handlePage);
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.subaccounts.list
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.ids Select only subaccounts with these IDs.
         * @param {integer=} params.maxResults Maximum number of results to return.
         * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {string=} params.searchString Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "subaccount*2015" will return objects with names like "subaccount June 2015", "subaccount April 2015", or simply "subaccount 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "subaccount" will match objects with name "my subaccount", "subaccount 2015", or simply "subaccount".
         * @param {string=} params.sortField Field by which to sort the list.
         * @param {string=} params.sortOrder Order of sorted results.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/subaccounts',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.subaccounts.patch
         *
         * @desc Updates an existing subaccount. This method supports patch semantics.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Subaccount ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body. Only added properties
         *       // will be changed.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.subaccounts.patch(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.subaccounts.patch
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Subaccount ID.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).Subaccount} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/subaccounts',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.subaccounts.update
         *
         * @desc Updates an existing subaccount.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.subaccounts.update(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.subaccounts.update
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).Subaccount} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/subaccounts',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.targetableRemarketingLists = {
        /**
         * dfareporting.targetableRemarketingLists.get
         *
         * @desc Gets one remarketing list by ID.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Remarketing list ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.targetableRemarketingLists.get(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.targetableRemarketingLists.get
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Remarketing list ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/targetableRemarketingLists/{id}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.targetableRemarketingLists.list
         *
         * @desc Retrieves a list of targetable remarketing lists, possibly filtered. This method supports paging.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Select only targetable remarketing lists targetable by these advertisers.
         *     advertiserId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   var handlePage = function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     var targetableRemarketingListsPage = response['targetableRemarketingLists'];
         *     if (!targetableRemarketingListsPage) {
         *       return;
         *     }
         *     for (var i = 0; i < targetableRemarketingListsPage.length; i++) {
         *       // TODO: Change code below to process each resource in `targetableRemarketingListsPage`:
         *       console.log(JSON.stringify(targetableRemarketingListsPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.pageToken = response.nextPageToken;
         *       dfareporting.targetableRemarketingLists.list(request, handlePage);
         *     }
         *   };
         *
         *   dfareporting.targetableRemarketingLists.list(request, handlePage);
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.targetableRemarketingLists.list
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.active Select only active or only inactive targetable remarketing lists.
         * @param {string} params.advertiserId Select only targetable remarketing lists targetable by these advertisers.
         * @param {integer=} params.maxResults Maximum number of results to return.
         * @param {string=} params.name Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "remarketing list*2015" will return objects with names like "remarketing list June 2015", "remarketing list April 2015", or simply "remarketing list 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "remarketing list" will match objects with name "my remarketing list", "remarketing list 2015", or simply "remarketing list".
         * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {string=} params.sortField Field by which to sort the list.
         * @param {string=} params.sortOrder Order of sorted results.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/targetableRemarketingLists',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'advertiserId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.targetingTemplates = {
        /**
         * dfareporting.targetingTemplates.get
         *
         * @desc Gets one targeting template by ID.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Targeting template ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.targetingTemplates.get(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.targetingTemplates.get
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Targeting template ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/targetingTemplates/{id}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.targetingTemplates.insert
         *
         * @desc Inserts a new targeting template.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.targetingTemplates.insert(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.targetingTemplates.insert
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).TargetingTemplate} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/targetingTemplates',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.targetingTemplates.list
         *
         * @desc Retrieves a list of targeting templates, optionally filtered. This method supports paging.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   var handlePage = function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     var targetingTemplatesPage = response['targetingTemplates'];
         *     if (!targetingTemplatesPage) {
         *       return;
         *     }
         *     for (var i = 0; i < targetingTemplatesPage.length; i++) {
         *       // TODO: Change code below to process each resource in `targetingTemplatesPage`:
         *       console.log(JSON.stringify(targetingTemplatesPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.pageToken = response.nextPageToken;
         *       dfareporting.targetingTemplates.list(request, handlePage);
         *     }
         *   };
         *
         *   dfareporting.targetingTemplates.list(request, handlePage);
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.targetingTemplates.list
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.advertiserId Select only targeting templates with this advertiser ID.
         * @param {string=} params.ids Select only targeting templates with these IDs.
         * @param {integer=} params.maxResults Maximum number of results to return.
         * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {string=} params.searchString Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "template*2015" will return objects with names like "template June 2015", "template April 2015", or simply "template 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "template" will match objects with name "my template", "template 2015", or simply "template".
         * @param {string=} params.sortField Field by which to sort the list.
         * @param {string=} params.sortOrder Order of sorted results.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/targetingTemplates',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.targetingTemplates.patch
         *
         * @desc Updates an existing targeting template. This method supports patch semantics.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // Targeting template ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body. Only added properties
         *       // will be changed.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.targetingTemplates.patch(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.targetingTemplates.patch
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Targeting template ID.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).TargetingTemplate} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/targetingTemplates',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.targetingTemplates.update
         *
         * @desc Updates an existing targeting template.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.targetingTemplates.update(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.targetingTemplates.update
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).TargetingTemplate} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/targetingTemplates',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.userProfiles = {
        /**
         * dfareporting.userProfiles.get
         *
         * @desc Gets one user profile by ID.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The user profile ID.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.userProfiles.get(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using one of the following scopes:
         *   //    https://www.googleapis.com/auth/dfareporting
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.userProfiles.get
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId The user profile ID.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.userProfiles.list
         *
         * @desc Retrieves list of user profiles for a user.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     auth: authClient
         *   };
         *
         *   dfareporting.userProfiles.list(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using one of the following scopes:
         *   //    https://www.googleapis.com/auth/dfareporting
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.userProfiles.list
         * @memberOf! dfareporting(v2.6)
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles',
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
    self.userRolePermissionGroups = {
        /**
         * dfareporting.userRolePermissionGroups.get
         *
         * @desc Gets one user role permission group by ID.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // User role permission group ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.userRolePermissionGroups.get(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.userRolePermissionGroups.get
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id User role permission group ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/userRolePermissionGroups/{id}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.userRolePermissionGroups.list
         *
         * @desc Gets a list of all supported user role permission groups.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.userRolePermissionGroups.list(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.userRolePermissionGroups.list
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/userRolePermissionGroups',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.userRolePermissions = {
        /**
         * dfareporting.userRolePermissions.get
         *
         * @desc Gets one user role permission by ID.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // User role permission ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.userRolePermissions.get(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.userRolePermissions.get
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id User role permission ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/userRolePermissions/{id}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.userRolePermissions.list
         *
         * @desc Gets a list of user role permissions, possibly filtered.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.userRolePermissions.list(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.userRolePermissions.list
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.ids Select only user role permissions with these IDs.
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/userRolePermissions',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.userRoles = {
        /**
         * dfareporting.userRoles.delete
         *
         * @desc Deletes an existing user role.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // User role ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.userRoles.delete(request, function(err) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.userRoles.delete
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id User role ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/userRoles/{id}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.userRoles.get
         *
         * @desc Gets one user role by ID.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // User role ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.userRoles.get(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.userRoles.get
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id User role ID.
         * @param {string} params.profileId User profile ID associated with this request.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/userRoles/{id}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['id', 'profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.userRoles.insert
         *
         * @desc Inserts a new user role.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.userRoles.insert(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.userRoles.insert
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).UserRole} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/userRoles',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.userRoles.list
         *
         * @desc Retrieves a list of user roles, possibly filtered. This method supports paging.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   var handlePage = function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     var userRolesPage = response['userRoles'];
         *     if (!userRolesPage) {
         *       return;
         *     }
         *     for (var i = 0; i < userRolesPage.length; i++) {
         *       // TODO: Change code below to process each resource in `userRolesPage`:
         *       console.log(JSON.stringify(userRolesPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.pageToken = response.nextPageToken;
         *       dfareporting.userRoles.list(request, handlePage);
         *     }
         *   };
         *
         *   dfareporting.userRoles.list(request, handlePage);
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.userRoles.list
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.accountUserRoleOnly Select only account level user roles not associated with any specific subaccount.
         * @param {string=} params.ids Select only user roles with the specified IDs.
         * @param {integer=} params.maxResults Maximum number of results to return.
         * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {string=} params.searchString Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "userrole*2015" will return objects with names like "userrole June 2015", "userrole April 2015", or simply "userrole 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "userrole" will match objects with name "my userrole", "userrole 2015", or simply "userrole".
         * @param {string=} params.sortField Field by which to sort the list.
         * @param {string=} params.sortOrder Order of sorted results.
         * @param {string=} params.subaccountId Select only user roles that belong to this subaccount.
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/userRoles',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.userRoles.patch
         *
         * @desc Updates an existing user role. This method supports patch semantics.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     // User role ID.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body. Only added properties
         *       // will be changed.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.userRoles.patch(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.userRoles.patch
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id User role ID.
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).UserRole} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/userRoles',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['profileId', 'id'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dfareporting.userRoles.update
         *
         * @desc Updates an existing user role.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the DCM/DFA Reporting And Trafficking API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dfareporting
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var dfareporting = google.dfareporting('v2.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // User profile ID associated with this request.
         *     profileId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties of the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dfareporting.userRoles.update(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See:
         *   // https://developers.google.com/doubleclick-advertisers/authorizing#examples,
         *   //
         *   // Authorize using the following scope:
         *   //    https://www.googleapis.com/auth/dfatrafficking
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias dfareporting.userRoles.update
         * @memberOf! dfareporting(v2.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.profileId User profile ID associated with this request.
         * @param {dfareporting(v2.6).UserRole} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dfareporting/v2.6/userprofiles/{profileId}/userRoles',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['profileId'],
                pathParams: ['profileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
}
module.exports = Dfareporting;
//# sourceMappingURL=v2.6.js.map