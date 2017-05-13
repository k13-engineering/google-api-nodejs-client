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
 * Cloud User Accounts API
 *
 * Creates and manages users and groups for accessing Google Compute Engine virtual machines.
 *
 * @example
 * const google = require('googleapis');
 * const clouduseraccounts = google.clouduseraccounts('beta');
 *
 * @namespace clouduseraccounts
 * @type {Function}
 * @version beta
 * @variation beta
 * @param {object=} options Options for Clouduseraccounts
 */
function Clouduseraccounts(options) {
    const self = this;
    self._options = options || {};
    self.globalAccountsOperations = {
        /**
         * clouduseraccounts.globalAccountsOperations.delete
         *
         * @desc Deletes the specified operation resource.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud User Accounts API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/clouduseraccounts
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var cloudUserAccounts = google.clouduseraccounts('beta');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Project ID for this request.
         *     project: '',  // TODO: Update placeholder value.
         *
         *     // Name of the Operations resource to delete.
         *     operation: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   cloudUserAccounts.globalAccountsOperations.delete(request, function(err) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient)) {
         *     if (err) {
         *       console.log('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias clouduseraccounts.globalAccountsOperations.delete
         * @memberOf! clouduseraccounts(beta)
         *
         * @param {object} params Parameters for request
         * @param {string} params.operation Name of the Operations resource to delete.
         * @param {string} params.project Project ID for this request.
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
                    url: 'https://www.googleapis.com/clouduseraccounts/beta/projects/{project}/global/operations/{operation}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'operation'],
                pathParams: ['operation', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * clouduseraccounts.globalAccountsOperations.get
         *
         * @desc Retrieves the specified operation resource.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud User Accounts API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/clouduseraccounts
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var cloudUserAccounts = google.clouduseraccounts('beta');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Project ID for this request.
         *     project: '',  // TODO: Update placeholder value.
         *
         *     // Name of the Operations resource to return.
         *     operation: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   cloudUserAccounts.globalAccountsOperations.get(request, function(err, response) {
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
         *   google.auth.getApplicationDefault(function(err, authClient)) {
         *     if (err) {
         *       console.log('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias clouduseraccounts.globalAccountsOperations.get
         * @memberOf! clouduseraccounts(beta)
         *
         * @param {object} params Parameters for request
         * @param {string} params.operation Name of the Operations resource to return.
         * @param {string} params.project Project ID for this request.
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
                    url: 'https://www.googleapis.com/clouduseraccounts/beta/projects/{project}/global/operations/{operation}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'operation'],
                pathParams: ['operation', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * clouduseraccounts.globalAccountsOperations.list
         *
         * @desc Retrieves the list of operation resources contained within the specified project.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud User Accounts API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/clouduseraccounts
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var cloudUserAccounts = google.clouduseraccounts('beta');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Project ID for this request.
         *     project: '',  // TODO: Update placeholder value.
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
         *       cloudUserAccounts.globalAccountsOperations.list(request, handlePage);
         *     }
         *   };
         *
         *   cloudUserAccounts.globalAccountsOperations.list(request, handlePage);
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient)) {
         *     if (err) {
         *       console.log('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias clouduseraccounts.globalAccountsOperations.list
         * @memberOf! clouduseraccounts(beta)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.  The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
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
                    url: 'https://www.googleapis.com/clouduseraccounts/beta/projects/{project}/global/operations',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project'],
                pathParams: ['project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.groups = {
        /**
         * clouduseraccounts.groups.addMember
         *
         * @desc Adds users to the specified group.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud User Accounts API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/clouduseraccounts
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var cloudUserAccounts = google.clouduseraccounts('beta');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Project ID for this request.
         *     project: '',  // TODO: Update placeholder value.
         *
         *     // Name of the group for this request.
         *     groupName: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   cloudUserAccounts.groups.addMember(request, function(err, response) {
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
         *   google.auth.getApplicationDefault(function(err, authClient)) {
         *     if (err) {
         *       console.log('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias clouduseraccounts.groups.addMember
         * @memberOf! clouduseraccounts(beta)
         *
         * @param {object} params Parameters for request
         * @param {string} params.groupName Name of the group for this request.
         * @param {string} params.project Project ID for this request.
         * @param {clouduseraccounts(beta).GroupsAddMemberRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        addMember: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/clouduseraccounts/beta/projects/{project}/global/groups/{groupName}/addMember',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'groupName'],
                pathParams: ['groupName', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * clouduseraccounts.groups.delete
         *
         * @desc Deletes the specified Group resource.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud User Accounts API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/clouduseraccounts
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var cloudUserAccounts = google.clouduseraccounts('beta');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Project ID for this request.
         *     project: '',  // TODO: Update placeholder value.
         *
         *     // Name of the Group resource to delete.
         *     groupName: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   cloudUserAccounts.groups.delete(request, function(err, response) {
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
         *   google.auth.getApplicationDefault(function(err, authClient)) {
         *     if (err) {
         *       console.log('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias clouduseraccounts.groups.delete
         * @memberOf! clouduseraccounts(beta)
         *
         * @param {object} params Parameters for request
         * @param {string} params.groupName Name of the Group resource to delete.
         * @param {string} params.project Project ID for this request.
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
                    url: 'https://www.googleapis.com/clouduseraccounts/beta/projects/{project}/global/groups/{groupName}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'groupName'],
                pathParams: ['groupName', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * clouduseraccounts.groups.get
         *
         * @desc Returns the specified Group resource.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud User Accounts API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/clouduseraccounts
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var cloudUserAccounts = google.clouduseraccounts('beta');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Project ID for this request.
         *     project: '',  // TODO: Update placeholder value.
         *
         *     // Name of the Group resource to return.
         *     groupName: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   cloudUserAccounts.groups.get(request, function(err, response) {
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
         *   google.auth.getApplicationDefault(function(err, authClient)) {
         *     if (err) {
         *       console.log('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias clouduseraccounts.groups.get
         * @memberOf! clouduseraccounts(beta)
         *
         * @param {object} params Parameters for request
         * @param {string} params.groupName Name of the Group resource to return.
         * @param {string} params.project Project ID for this request.
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
                    url: 'https://www.googleapis.com/clouduseraccounts/beta/projects/{project}/global/groups/{groupName}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'groupName'],
                pathParams: ['groupName', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * clouduseraccounts.groups.insert
         *
         * @desc Creates a Group resource in the specified project using the data included in the request.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud User Accounts API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/clouduseraccounts
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var cloudUserAccounts = google.clouduseraccounts('beta');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Project ID for this request.
         *     project: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   cloudUserAccounts.groups.insert(request, function(err, response) {
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
         *   google.auth.getApplicationDefault(function(err, authClient)) {
         *     if (err) {
         *       console.log('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias clouduseraccounts.groups.insert
         * @memberOf! clouduseraccounts(beta)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {clouduseraccounts(beta).Group} params.resource Request body data
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
                    url: 'https://www.googleapis.com/clouduseraccounts/beta/projects/{project}/global/groups',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project'],
                pathParams: ['project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * clouduseraccounts.groups.list
         *
         * @desc Retrieves the list of groups contained within the specified project.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud User Accounts API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/clouduseraccounts
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var cloudUserAccounts = google.clouduseraccounts('beta');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Project ID for this request.
         *     project: '',  // TODO: Update placeholder value.
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
         *       cloudUserAccounts.groups.list(request, handlePage);
         *     }
         *   };
         *
         *   cloudUserAccounts.groups.list(request, handlePage);
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient)) {
         *     if (err) {
         *       console.log('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias clouduseraccounts.groups.list
         * @memberOf! clouduseraccounts(beta)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.  The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
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
                    url: 'https://www.googleapis.com/clouduseraccounts/beta/projects/{project}/global/groups',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project'],
                pathParams: ['project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * clouduseraccounts.groups.removeMember
         *
         * @desc Removes users from the specified group.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud User Accounts API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/clouduseraccounts
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var cloudUserAccounts = google.clouduseraccounts('beta');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Project ID for this request.
         *     project: '',  // TODO: Update placeholder value.
         *
         *     // Name of the group for this request.
         *     groupName: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   cloudUserAccounts.groups.removeMember(request, function(err, response) {
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
         *   google.auth.getApplicationDefault(function(err, authClient)) {
         *     if (err) {
         *       console.log('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias clouduseraccounts.groups.removeMember
         * @memberOf! clouduseraccounts(beta)
         *
         * @param {object} params Parameters for request
         * @param {string} params.groupName Name of the group for this request.
         * @param {string} params.project Project ID for this request.
         * @param {clouduseraccounts(beta).GroupsRemoveMemberRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        removeMember: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/clouduseraccounts/beta/projects/{project}/global/groups/{groupName}/removeMember',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'groupName'],
                pathParams: ['groupName', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.linux = {
        /**
         * clouduseraccounts.linux.getAuthorizedKeysView
         *
         * @desc Returns a list of authorized public keys for a specific user account.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud User Accounts API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/clouduseraccounts
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var cloudUserAccounts = google.clouduseraccounts('beta');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Project ID for this request.
         *     project: '',  // TODO: Update placeholder value.
         *
         *     // Name of the zone for this request.
         *     zone: '',  // TODO: Update placeholder value.
         *
         *     // The user account for which you want to get a list of authorized public keys.
         *     user: '',  // TODO: Update placeholder value.
         *
         *     // The fully-qualified URL of the virtual machine requesting the view.
         *     instance: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   cloudUserAccounts.linux.getAuthorizedKeysView(request, function(err, response) {
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
         *   google.auth.getApplicationDefault(function(err, authClient)) {
         *     if (err) {
         *       console.log('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias clouduseraccounts.linux.getAuthorizedKeysView
         * @memberOf! clouduseraccounts(beta)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance The fully-qualified URL of the virtual machine requesting the view.
         * @param {boolean=} params.login Whether the view was requested as part of a user-initiated login.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.user The user account for which you want to get a list of authorized public keys.
         * @param {string} params.zone Name of the zone for this request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getAuthorizedKeysView: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/clouduseraccounts/beta/projects/{project}/zones/{zone}/authorizedKeysView/{user}',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'user', 'instance'],
                pathParams: ['project', 'user', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * clouduseraccounts.linux.getLinuxAccountViews
         *
         * @desc Retrieves a list of user accounts for an instance within a specific project.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud User Accounts API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/clouduseraccounts
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var cloudUserAccounts = google.clouduseraccounts('beta');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Project ID for this request.
         *     project: '',  // TODO: Update placeholder value.
         *
         *     // Name of the zone for this request.
         *     zone: '',  // TODO: Update placeholder value.
         *
         *     // The fully-qualified URL of the virtual machine requesting the views.
         *     instance: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   cloudUserAccounts.linux.getLinuxAccountViews(request, function(err, response) {
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
         *   google.auth.getApplicationDefault(function(err, authClient)) {
         *     if (err) {
         *       console.log('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias clouduseraccounts.linux.getLinuxAccountViews
         * @memberOf! clouduseraccounts(beta)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.  The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {string} params.instance The fully-qualified URL of the virtual machine requesting the views.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.zone Name of the zone for this request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getLinuxAccountViews: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/clouduseraccounts/beta/projects/{project}/zones/{zone}/linuxAccountViews',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'instance'],
                pathParams: ['project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.users = {
        /**
         * clouduseraccounts.users.addPublicKey
         *
         * @desc Adds a public key to the specified User resource with the data included in the request.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud User Accounts API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/clouduseraccounts
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var cloudUserAccounts = google.clouduseraccounts('beta');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Project ID for this request.
         *     project: '',  // TODO: Update placeholder value.
         *
         *     // Name of the user for this request.
         *     user: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   cloudUserAccounts.users.addPublicKey(request, function(err, response) {
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
         *   google.auth.getApplicationDefault(function(err, authClient)) {
         *     if (err) {
         *       console.log('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias clouduseraccounts.users.addPublicKey
         * @memberOf! clouduseraccounts(beta)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.user Name of the user for this request.
         * @param {clouduseraccounts(beta).PublicKey} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        addPublicKey: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/clouduseraccounts/beta/projects/{project}/global/users/{user}/addPublicKey',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'user'],
                pathParams: ['project', 'user'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * clouduseraccounts.users.delete
         *
         * @desc Deletes the specified User resource.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud User Accounts API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/clouduseraccounts
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var cloudUserAccounts = google.clouduseraccounts('beta');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Project ID for this request.
         *     project: '',  // TODO: Update placeholder value.
         *
         *     // Name of the user resource to delete.
         *     user: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   cloudUserAccounts.users.delete(request, function(err, response) {
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
         *   google.auth.getApplicationDefault(function(err, authClient)) {
         *     if (err) {
         *       console.log('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias clouduseraccounts.users.delete
         * @memberOf! clouduseraccounts(beta)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.user Name of the user resource to delete.
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
                    url: 'https://www.googleapis.com/clouduseraccounts/beta/projects/{project}/global/users/{user}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'user'],
                pathParams: ['project', 'user'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * clouduseraccounts.users.get
         *
         * @desc Returns the specified User resource.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud User Accounts API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/clouduseraccounts
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var cloudUserAccounts = google.clouduseraccounts('beta');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Project ID for this request.
         *     project: '',  // TODO: Update placeholder value.
         *
         *     // Name of the user resource to return.
         *     user: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   cloudUserAccounts.users.get(request, function(err, response) {
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
         *   google.auth.getApplicationDefault(function(err, authClient)) {
         *     if (err) {
         *       console.log('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias clouduseraccounts.users.get
         * @memberOf! clouduseraccounts(beta)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.user Name of the user resource to return.
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
                    url: 'https://www.googleapis.com/clouduseraccounts/beta/projects/{project}/global/users/{user}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'user'],
                pathParams: ['project', 'user'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * clouduseraccounts.users.insert
         *
         * @desc Creates a User resource in the specified project using the data included in the request.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud User Accounts API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/clouduseraccounts
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var cloudUserAccounts = google.clouduseraccounts('beta');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Project ID for this request.
         *     project: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   cloudUserAccounts.users.insert(request, function(err, response) {
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
         *   google.auth.getApplicationDefault(function(err, authClient)) {
         *     if (err) {
         *       console.log('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias clouduseraccounts.users.insert
         * @memberOf! clouduseraccounts(beta)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {clouduseraccounts(beta).User} params.resource Request body data
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
                    url: 'https://www.googleapis.com/clouduseraccounts/beta/projects/{project}/global/users',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project'],
                pathParams: ['project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * clouduseraccounts.users.list
         *
         * @desc Retrieves a list of users contained within the specified project.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud User Accounts API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/clouduseraccounts
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var cloudUserAccounts = google.clouduseraccounts('beta');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Project ID for this request.
         *     project: '',  // TODO: Update placeholder value.
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
         *       cloudUserAccounts.users.list(request, handlePage);
         *     }
         *   };
         *
         *   cloudUserAccounts.users.list(request, handlePage);
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient)) {
         *     if (err) {
         *       console.log('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias clouduseraccounts.users.list
         * @memberOf! clouduseraccounts(beta)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.  The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
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
                    url: 'https://www.googleapis.com/clouduseraccounts/beta/projects/{project}/global/users',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project'],
                pathParams: ['project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * clouduseraccounts.users.removePublicKey
         *
         * @desc Removes the specified public key from the user.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud User Accounts API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/clouduseraccounts
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var cloudUserAccounts = google.clouduseraccounts('beta');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Project ID for this request.
         *     project: '',  // TODO: Update placeholder value.
         *
         *     // Name of the user for this request.
         *     user: '',  // TODO: Update placeholder value.
         *
         *     // The fingerprint of the public key to delete. Public keys are identified by their fingerprint, which
         *     // is defined by RFC4716 to be the MD5 digest of the public key.
         *     fingerprint: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   cloudUserAccounts.users.removePublicKey(request, function(err, response) {
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
         *   google.auth.getApplicationDefault(function(err, authClient)) {
         *     if (err) {
         *       console.log('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias clouduseraccounts.users.removePublicKey
         * @memberOf! clouduseraccounts(beta)
         *
         * @param {object} params Parameters for request
         * @param {string} params.fingerprint The fingerprint of the public key to delete. Public keys are identified by their fingerprint, which is defined by RFC4716 to be the MD5 digest of the public key.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.user Name of the user for this request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        removePublicKey: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/clouduseraccounts/beta/projects/{project}/global/users/{user}/removePublicKey',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'user', 'fingerprint'],
                pathParams: ['project', 'user'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
}
module.exports = Clouduseraccounts;
//# sourceMappingURL=beta.js.map