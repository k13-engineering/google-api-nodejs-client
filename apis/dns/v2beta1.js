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
 * Google Cloud DNS API
 *
 * Configures and serves authoritative DNS records.
 *
 * @example
 * const google = require('googleapis');
 * const dns = google.dns('v2beta1');
 *
 * @namespace dns
 * @type {Function}
 * @version v2beta1
 * @variation v2beta1
 * @param {object=} options Options for Dns
 */
function Dns(options) {
    const self = this;
    self._options = options || {};
    self.changes = {
        /**
         * dns.changes.create
         *
         * @desc Atomically update the ResourceRecordSet collection.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud DNS API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dns
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
         * var dns = google.dns('v2beta1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Identifies the project addressed by this request.
         *     project: '',  // TODO: Update placeholder value.
         *
         *     // Identifies the managed zone addressed by this request. Can be the managed zone name or id.
         *     managedZone: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dns.changes.create(request, function(err, response) {
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
         * @alias dns.changes.create
         * @memberOf! dns(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
         * @param {string} params.managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or id.
         * @param {string} params.project Identifies the project addressed by this request.
         * @param {dns(v2beta1).Change} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dns/v2beta1/projects/{project}/managedZones/{managedZone}/changes',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'managedZone'],
                pathParams: ['managedZone', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dns.changes.get
         *
         * @desc Fetch the representation of an existing Change.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud DNS API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dns
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
         * var dns = google.dns('v2beta1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Identifies the project addressed by this request.
         *     project: '',  // TODO: Update placeholder value.
         *
         *     // Identifies the managed zone addressed by this request. Can be the managed zone name or id.
         *     managedZone: '',  // TODO: Update placeholder value.
         *
         *     // The identifier of the requested change, from a previous ResourceRecordSetsChangeResponse.
         *     changeId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dns.changes.get(request, function(err, response) {
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
         * @alias dns.changes.get
         * @memberOf! dns(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.changeId The identifier of the requested change, from a previous ResourceRecordSetsChangeResponse.
         * @param {string=} params.clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
         * @param {string} params.managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or id.
         * @param {string} params.project Identifies the project addressed by this request.
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
                    url: 'https://www.googleapis.com/dns/v2beta1/projects/{project}/managedZones/{managedZone}/changes/{changeId}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'managedZone', 'changeId'],
                pathParams: ['changeId', 'managedZone', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dns.changes.list
         *
         * @desc Enumerate Changes to a ResourceRecordSet collection.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud DNS API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dns
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
         * var dns = google.dns('v2beta1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Identifies the project addressed by this request.
         *     project: '',  // TODO: Update placeholder value.
         *
         *     // Identifies the managed zone addressed by this request. Can be the managed zone name or id.
         *     managedZone: '',  // TODO: Update placeholder value.
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
         *     var changesPage = response['changes'];
         *     if (!changesPage) {
         *       return;
         *     }
         *     for (var i = 0; i < changesPage.length; i++) {
         *       // TODO: Change code below to process each resource in `changesPage`:
         *       console.log(JSON.stringify(changesPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.pageToken = response.nextPageToken;
         *       dns.changes.list(request, handlePage);
         *     }
         *   };
         *
         *   dns.changes.list(request, handlePage);
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
         * @alias dns.changes.list
         * @memberOf! dns(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or id.
         * @param {integer=} params.maxResults Optional. Maximum number of results to be returned. If unspecified, the server will decide how many results to return.
         * @param {string=} params.pageToken Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
         * @param {string} params.project Identifies the project addressed by this request.
         * @param {string=} params.sortBy Sorting criterion. The only supported value is change sequence.
         * @param {string=} params.sortOrder Sorting order direction: 'ascending' or 'descending'.
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
                    url: 'https://www.googleapis.com/dns/v2beta1/projects/{project}/managedZones/{managedZone}/changes',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'managedZone'],
                pathParams: ['managedZone', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.dnsKeys = {
        /**
         * dns.dnsKeys.get
         *
         * @desc Fetch the representation of an existing DnsKey.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud DNS API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dns
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
         * var dns = google.dns('v2beta1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Identifies the project addressed by this request.
         *     project: '',  // TODO: Update placeholder value.
         *
         *     // Identifies the managed zone addressed by this request. Can be the managed zone name or id.
         *     managedZone: '',  // TODO: Update placeholder value.
         *
         *     // The identifier of the requested DnsKey.
         *     dnsKeyId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dns.dnsKeys.get(request, function(err, response) {
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
         * @alias dns.dnsKeys.get
         * @memberOf! dns(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
         * @param {string=} params.digestType An optional comma-separated list of digest types to compute and display for key signing keys. If omitted, the recommended digest type will be computed and displayed.
         * @param {string} params.dnsKeyId The identifier of the requested DnsKey.
         * @param {string} params.managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or id.
         * @param {string} params.project Identifies the project addressed by this request.
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
                    url: 'https://www.googleapis.com/dns/v2beta1/projects/{project}/managedZones/{managedZone}/dnsKeys/{dnsKeyId}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'managedZone', 'dnsKeyId'],
                pathParams: ['dnsKeyId', 'managedZone', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dns.dnsKeys.list
         *
         * @desc Enumerate DnsKeys to a ResourceRecordSet collection.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud DNS API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dns
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
         * var dns = google.dns('v2beta1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Identifies the project addressed by this request.
         *     project: '',  // TODO: Update placeholder value.
         *
         *     // Identifies the managed zone addressed by this request. Can be the managed zone name or id.
         *     managedZone: '',  // TODO: Update placeholder value.
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
         *     var dnsKeysPage = response['dnsKeys'];
         *     if (!dnsKeysPage) {
         *       return;
         *     }
         *     for (var i = 0; i < dnsKeysPage.length; i++) {
         *       // TODO: Change code below to process each resource in `dnsKeysPage`:
         *       console.log(JSON.stringify(dnsKeysPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.pageToken = response.nextPageToken;
         *       dns.dnsKeys.list(request, handlePage);
         *     }
         *   };
         *
         *   dns.dnsKeys.list(request, handlePage);
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
         * @alias dns.dnsKeys.list
         * @memberOf! dns(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.digestType An optional comma-separated list of digest types to compute and display for key signing keys. If omitted, the recommended digest type will be computed and displayed.
         * @param {string} params.managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or id.
         * @param {integer=} params.maxResults Optional. Maximum number of results to be returned. If unspecified, the server will decide how many results to return.
         * @param {string=} params.pageToken Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
         * @param {string} params.project Identifies the project addressed by this request.
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
                    url: 'https://www.googleapis.com/dns/v2beta1/projects/{project}/managedZones/{managedZone}/dnsKeys',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'managedZone'],
                pathParams: ['managedZone', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.managedZoneOperations = {
        /**
         * dns.managedZoneOperations.get
         *
         * @desc Fetch the representation of an existing Operation.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud DNS API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dns
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
         * var dns = google.dns('v2beta1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Identifies the project addressed by this request.
         *     project: '',  // TODO: Update placeholder value.
         *
         *     // Identifies the managed zone addressed by this request.
         *     managedZone: '',  // TODO: Update placeholder value.
         *
         *     // Identifies the operation addressed by this request.
         *     operation: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dns.managedZoneOperations.get(request, function(err, response) {
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
         * @alias dns.managedZoneOperations.get
         * @memberOf! dns(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
         * @param {string} params.managedZone Identifies the managed zone addressed by this request.
         * @param {string} params.operation Identifies the operation addressed by this request.
         * @param {string} params.project Identifies the project addressed by this request.
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
                    url: 'https://www.googleapis.com/dns/v2beta1/projects/{project}/managedZones/{managedZone}/operations/{operation}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'managedZone', 'operation'],
                pathParams: ['managedZone', 'operation', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dns.managedZoneOperations.list
         *
         * @desc Enumerate Operations for the given ManagedZone.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud DNS API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dns
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
         * var dns = google.dns('v2beta1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Identifies the project addressed by this request.
         *     project: '',  // TODO: Update placeholder value.
         *
         *     // Identifies the managed zone addressed by this request.
         *     managedZone: '',  // TODO: Update placeholder value.
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
         *     var operationsPage = response['operations'];
         *     if (!operationsPage) {
         *       return;
         *     }
         *     for (var i = 0; i < operationsPage.length; i++) {
         *       // TODO: Change code below to process each resource in `operationsPage`:
         *       console.log(JSON.stringify(operationsPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.pageToken = response.nextPageToken;
         *       dns.managedZoneOperations.list(request, handlePage);
         *     }
         *   };
         *
         *   dns.managedZoneOperations.list(request, handlePage);
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
         * @alias dns.managedZoneOperations.list
         * @memberOf! dns(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.managedZone Identifies the managed zone addressed by this request.
         * @param {integer=} params.maxResults Optional. Maximum number of results to be returned. If unspecified, the server will decide how many results to return.
         * @param {string=} params.pageToken Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
         * @param {string} params.project Identifies the project addressed by this request.
         * @param {string=} params.sortBy Sorting criterion. The only supported values are START_TIME and ID.
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
                    url: 'https://www.googleapis.com/dns/v2beta1/projects/{project}/managedZones/{managedZone}/operations',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'managedZone'],
                pathParams: ['managedZone', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.managedZones = {
        /**
         * dns.managedZones.create
         *
         * @desc Create a new ManagedZone.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud DNS API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dns
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
         * var dns = google.dns('v2beta1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Identifies the project addressed by this request.
         *     project: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dns.managedZones.create(request, function(err, response) {
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
         * @alias dns.managedZones.create
         * @memberOf! dns(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
         * @param {string} params.project Identifies the project addressed by this request.
         * @param {dns(v2beta1).ManagedZone} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dns/v2beta1/projects/{project}/managedZones',
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
         * dns.managedZones.delete
         *
         * @desc Delete a previously created ManagedZone.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud DNS API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dns
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
         * var dns = google.dns('v2beta1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Identifies the project addressed by this request.
         *     project: '',  // TODO: Update placeholder value.
         *
         *     // Identifies the managed zone addressed by this request. Can be the managed zone name or id.
         *     managedZone: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dns.managedZones.delete(request, function(err, response) {
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
         * @alias dns.managedZones.delete
         * @memberOf! dns(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
         * @param {string} params.managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or id.
         * @param {string} params.project Identifies the project addressed by this request.
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
                    url: 'https://www.googleapis.com/dns/v2beta1/projects/{project}/managedZones/{managedZone}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'managedZone'],
                pathParams: ['managedZone', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dns.managedZones.get
         *
         * @desc Fetch the representation of an existing ManagedZone.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud DNS API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dns
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
         * var dns = google.dns('v2beta1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Identifies the project addressed by this request.
         *     project: '',  // TODO: Update placeholder value.
         *
         *     // Identifies the managed zone addressed by this request. Can be the managed zone name or id.
         *     managedZone: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dns.managedZones.get(request, function(err, response) {
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
         * @alias dns.managedZones.get
         * @memberOf! dns(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
         * @param {string} params.managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or id.
         * @param {string} params.project Identifies the project addressed by this request.
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
                    url: 'https://www.googleapis.com/dns/v2beta1/projects/{project}/managedZones/{managedZone}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'managedZone'],
                pathParams: ['managedZone', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dns.managedZones.list
         *
         * @desc Enumerate ManagedZones that have been created but not yet deleted.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud DNS API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dns
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
         * var dns = google.dns('v2beta1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Identifies the project addressed by this request.
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
         *     var managedZonesPage = response['managedZones'];
         *     if (!managedZonesPage) {
         *       return;
         *     }
         *     for (var i = 0; i < managedZonesPage.length; i++) {
         *       // TODO: Change code below to process each resource in `managedZonesPage`:
         *       console.log(JSON.stringify(managedZonesPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.pageToken = response.nextPageToken;
         *       dns.managedZones.list(request, handlePage);
         *     }
         *   };
         *
         *   dns.managedZones.list(request, handlePage);
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
         * @alias dns.managedZones.list
         * @memberOf! dns(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.dnsName Restricts the list to return only zones with this domain name.
         * @param {integer=} params.maxResults Optional. Maximum number of results to be returned. If unspecified, the server will decide how many results to return.
         * @param {string=} params.pageToken Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
         * @param {string} params.project Identifies the project addressed by this request.
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
                    url: 'https://www.googleapis.com/dns/v2beta1/projects/{project}/managedZones',
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
         * dns.managedZones.patch
         *
         * @desc Update an existing ManagedZone. This method supports patch semantics.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud DNS API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dns
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
         * var dns = google.dns('v2beta1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Identifies the project addressed by this request.
         *     project: '',  // TODO: Update placeholder value.
         *
         *     // Identifies the managed zone addressed by this request. Can be the managed zone name or id.
         *     managedZone: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body. Only these properties
         *       // will be changed.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dns.managedZones.patch(request, function(err, response) {
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
         * @alias dns.managedZones.patch
         * @memberOf! dns(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
         * @param {string} params.managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or id.
         * @param {string} params.project Identifies the project addressed by this request.
         * @param {dns(v2beta1).ManagedZone} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dns/v2beta1/projects/{project}/managedZones/{managedZone}',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['project', 'managedZone'],
                pathParams: ['managedZone', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * dns.managedZones.update
         *
         * @desc Update an existing ManagedZone.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud DNS API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dns
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
         * var dns = google.dns('v2beta1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Identifies the project addressed by this request.
         *     project: '',  // TODO: Update placeholder value.
         *
         *     // Identifies the managed zone addressed by this request. Can be the managed zone name or id.
         *     managedZone: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body. All existing properties
         *       // will be replaced.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   dns.managedZones.update(request, function(err, response) {
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
         * @alias dns.managedZones.update
         * @memberOf! dns(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
         * @param {string} params.managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or id.
         * @param {string} params.project Identifies the project addressed by this request.
         * @param {dns(v2beta1).ManagedZone} params.resource Request body data
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
                    url: 'https://www.googleapis.com/dns/v2beta1/projects/{project}/managedZones/{managedZone}',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['project', 'managedZone'],
                pathParams: ['managedZone', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.projects = {
        /**
         * dns.projects.get
         *
         * @desc Fetch the representation of an existing Project.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud DNS API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dns
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
         * var dns = google.dns('v2beta1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Identifies the project addressed by this request.
         *     project: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   dns.projects.get(request, function(err, response) {
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
         * @alias dns.projects.get
         * @memberOf! dns(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
         * @param {string} params.project Identifies the project addressed by this request.
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
                    url: 'https://www.googleapis.com/dns/v2beta1/projects/{project}',
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
    self.resourceRecordSets = {
        /**
         * dns.resourceRecordSets.list
         *
         * @desc Enumerate ResourceRecordSets that have been created but not yet deleted.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud DNS API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dns
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
         * var dns = google.dns('v2beta1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Identifies the project addressed by this request.
         *     project: '',  // TODO: Update placeholder value.
         *
         *     // Identifies the managed zone addressed by this request. Can be the managed zone name or id.
         *     managedZone: '',  // TODO: Update placeholder value.
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
         *     var rrsetsPage = response['rrsets'];
         *     if (!rrsetsPage) {
         *       return;
         *     }
         *     for (var i = 0; i < rrsetsPage.length; i++) {
         *       // TODO: Change code below to process each resource in `rrsetsPage`:
         *       console.log(JSON.stringify(rrsetsPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.pageToken = response.nextPageToken;
         *       dns.resourceRecordSets.list(request, handlePage);
         *     }
         *   };
         *
         *   dns.resourceRecordSets.list(request, handlePage);
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
         * @alias dns.resourceRecordSets.list
         * @memberOf! dns(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or id.
         * @param {integer=} params.maxResults Optional. Maximum number of results to be returned. If unspecified, the server will decide how many results to return.
         * @param {string=} params.name Restricts the list to return only records with this fully qualified domain name.
         * @param {string=} params.pageToken Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
         * @param {string} params.project Identifies the project addressed by this request.
         * @param {string=} params.type Restricts the list to return only records of this type. If present, the "name" parameter must also be present.
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
                    url: 'https://www.googleapis.com/dns/v2beta1/projects/{project}/managedZones/{managedZone}/rrsets',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'managedZone'],
                pathParams: ['managedZone', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
}
module.exports = Dns;
//# sourceMappingURL=v2beta1.js.map