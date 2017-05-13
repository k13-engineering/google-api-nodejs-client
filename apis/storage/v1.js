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
 * Cloud Storage JSON API
 *
 * Stores and retrieves potentially large, immutable data objects.
 *
 * @example
 * const google = require('googleapis');
 * const storage = google.storage('v1');
 *
 * @namespace storage
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Storage
 */
function Storage(options) {
    const self = this;
    self._options = options || {};
    self.bucketAccessControls = {
        /**
         * storage.bucketAccessControls.delete
         *
         * @desc Permanently deletes the ACL entry for the specified entity on the specified bucket.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud Storage JSON API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/storage
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
         * var storage = google.storage('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Name of a bucket.
         *     bucket: '',  // TODO: Update placeholder value.
         *
         *     // The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId,
         *     // group-emailAddress, allUsers, or allAuthenticatedUsers.
         *     entity: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   storage.bucketAccessControls.delete(request, function(err) {
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
         * @alias storage.bucketAccessControls.delete
         * @memberOf! storage(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.bucket Name of a bucket.
         * @param {string} params.entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
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
                    url: 'https://www.googleapis.com/storage/v1/b/{bucket}/acl/{entity}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['bucket', 'entity'],
                pathParams: ['bucket', 'entity'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * storage.bucketAccessControls.get
         *
         * @desc Returns the ACL entry for the specified entity on the specified bucket.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud Storage JSON API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/storage
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
         * var storage = google.storage('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Name of a bucket.
         *     bucket: '',  // TODO: Update placeholder value.
         *
         *     // The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId,
         *     // group-emailAddress, allUsers, or allAuthenticatedUsers.
         *     entity: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   storage.bucketAccessControls.get(request, function(err, response) {
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
         * @alias storage.bucketAccessControls.get
         * @memberOf! storage(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.bucket Name of a bucket.
         * @param {string} params.entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
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
                    url: 'https://www.googleapis.com/storage/v1/b/{bucket}/acl/{entity}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['bucket', 'entity'],
                pathParams: ['bucket', 'entity'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * storage.bucketAccessControls.insert
         *
         * @desc Creates a new ACL entry on the specified bucket.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud Storage JSON API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/storage
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
         * var storage = google.storage('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Name of a bucket.
         *     bucket: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   storage.bucketAccessControls.insert(request, function(err, response) {
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
         * @alias storage.bucketAccessControls.insert
         * @memberOf! storage(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.bucket Name of a bucket.
         * @param {storage(v1).BucketAccessControl} params.resource Request body data
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
                    url: 'https://www.googleapis.com/storage/v1/b/{bucket}/acl',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['bucket'],
                pathParams: ['bucket'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * storage.bucketAccessControls.list
         *
         * @desc Retrieves ACL entries on the specified bucket.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud Storage JSON API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/storage
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
         * var storage = google.storage('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Name of a bucket.
         *     bucket: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   storage.bucketAccessControls.list(request, function(err, response) {
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
         * @alias storage.bucketAccessControls.list
         * @memberOf! storage(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.bucket Name of a bucket.
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
                    url: 'https://www.googleapis.com/storage/v1/b/{bucket}/acl',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['bucket'],
                pathParams: ['bucket'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * storage.bucketAccessControls.patch
         *
         * @desc Updates an ACL entry on the specified bucket. This method supports patch semantics.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud Storage JSON API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/storage
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
         * var storage = google.storage('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Name of a bucket.
         *     bucket: '',  // TODO: Update placeholder value.
         *
         *     // The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId,
         *     // group-emailAddress, allUsers, or allAuthenticatedUsers.
         *     entity: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body. Only these properties
         *       // will be changed.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   storage.bucketAccessControls.patch(request, function(err, response) {
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
         * @alias storage.bucketAccessControls.patch
         * @memberOf! storage(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.bucket Name of a bucket.
         * @param {string} params.entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
         * @param {storage(v1).BucketAccessControl} params.resource Request body data
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
                    url: 'https://www.googleapis.com/storage/v1/b/{bucket}/acl/{entity}',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['bucket', 'entity'],
                pathParams: ['bucket', 'entity'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * storage.bucketAccessControls.update
         *
         * @desc Updates an ACL entry on the specified bucket.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud Storage JSON API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/storage
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
         * var storage = google.storage('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Name of a bucket.
         *     bucket: '',  // TODO: Update placeholder value.
         *
         *     // The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId,
         *     // group-emailAddress, allUsers, or allAuthenticatedUsers.
         *     entity: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body. All existing properties
         *       // will be replaced.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   storage.bucketAccessControls.update(request, function(err, response) {
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
         * @alias storage.bucketAccessControls.update
         * @memberOf! storage(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.bucket Name of a bucket.
         * @param {string} params.entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
         * @param {storage(v1).BucketAccessControl} params.resource Request body data
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
                    url: 'https://www.googleapis.com/storage/v1/b/{bucket}/acl/{entity}',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['bucket', 'entity'],
                pathParams: ['bucket', 'entity'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.buckets = {
        /**
         * storage.buckets.delete
         *
         * @desc Permanently deletes an empty bucket.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud Storage JSON API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/storage
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
         * var storage = google.storage('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Name of a bucket.
         *     bucket: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   storage.buckets.delete(request, function(err) {
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
         * @alias storage.buckets.delete
         * @memberOf! storage(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.bucket Name of a bucket.
         * @param {string=} params.ifMetagenerationMatch If set, only deletes the bucket if its metageneration matches this value.
         * @param {string=} params.ifMetagenerationNotMatch If set, only deletes the bucket if its metageneration does not match this value.
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
                    url: 'https://www.googleapis.com/storage/v1/b/{bucket}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['bucket'],
                pathParams: ['bucket'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * storage.buckets.get
         *
         * @desc Returns metadata for the specified bucket.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud Storage JSON API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/storage
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
         * var storage = google.storage('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Name of a bucket.
         *     bucket: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   storage.buckets.get(request, function(err, response) {
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
         * @alias storage.buckets.get
         * @memberOf! storage(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.bucket Name of a bucket.
         * @param {string=} params.ifMetagenerationMatch Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.
         * @param {string=} params.ifMetagenerationNotMatch Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.
         * @param {string=} params.projection Set of properties to return. Defaults to noAcl.
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
                    url: 'https://www.googleapis.com/storage/v1/b/{bucket}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['bucket'],
                pathParams: ['bucket'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * storage.buckets.getIamPolicy
         *
         * @desc Returns an IAM policy for the specified bucket.
         *
         * @alias storage.buckets.getIamPolicy
         * @memberOf! storage(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.bucket Name of a bucket.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getIamPolicy: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/storage/v1/b/{bucket}/iam',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['bucket'],
                pathParams: ['bucket'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * storage.buckets.insert
         *
         * @desc Creates a new bucket.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud Storage JSON API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/storage
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
         * var storage = google.storage('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // A valid API project identifier.
         *     project: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   storage.buckets.insert(request, function(err, response) {
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
         * @alias storage.buckets.insert
         * @memberOf! storage(v1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.predefinedAcl Apply a predefined set of access controls to this bucket.
         * @param {string=} params.predefinedDefaultObjectAcl Apply a predefined set of default object access controls to this bucket.
         * @param {string} params.project A valid API project identifier.
         * @param {string=} params.projection Set of properties to return. Defaults to noAcl, unless the bucket resource specifies acl or defaultObjectAcl properties, when it defaults to full.
         * @param {storage(v1).Bucket} params.resource Request body data
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
                    url: 'https://www.googleapis.com/storage/v1/b',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project'],
                pathParams: [],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * storage.buckets.list
         *
         * @desc Retrieves a list of buckets for a given project.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud Storage JSON API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/storage
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
         * var storage = google.storage('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // A valid API project identifier.
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
         *       storage.buckets.list(request, handlePage);
         *     }
         *   };
         *
         *   storage.buckets.list(request, handlePage);
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
         * @alias storage.buckets.list
         * @memberOf! storage(v1)
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.maxResults Maximum number of buckets to return in a single response. The service will use this parameter or 1,000 items, whichever is smaller.
         * @param {string=} params.pageToken A previously-returned page token representing part of the larger set of results to view.
         * @param {string=} params.prefix Filter results to buckets whose names begin with this prefix.
         * @param {string} params.project A valid API project identifier.
         * @param {string=} params.projection Set of properties to return. Defaults to noAcl.
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
                    url: 'https://www.googleapis.com/storage/v1/b',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project'],
                pathParams: [],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * storage.buckets.patch
         *
         * @desc Updates a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate. This method supports patch semantics.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud Storage JSON API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/storage
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
         * var storage = google.storage('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Name of a bucket.
         *     bucket: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body. Only these properties
         *       // will be changed.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   storage.buckets.patch(request, function(err, response) {
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
         * @alias storage.buckets.patch
         * @memberOf! storage(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.bucket Name of a bucket.
         * @param {string=} params.ifMetagenerationMatch Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.
         * @param {string=} params.ifMetagenerationNotMatch Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.
         * @param {string=} params.predefinedAcl Apply a predefined set of access controls to this bucket.
         * @param {string=} params.predefinedDefaultObjectAcl Apply a predefined set of default object access controls to this bucket.
         * @param {string=} params.projection Set of properties to return. Defaults to full.
         * @param {storage(v1).Bucket} params.resource Request body data
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
                    url: 'https://www.googleapis.com/storage/v1/b/{bucket}',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['bucket'],
                pathParams: ['bucket'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * storage.buckets.setIamPolicy
         *
         * @desc Updates an IAM policy for the specified bucket.
         *
         * @alias storage.buckets.setIamPolicy
         * @memberOf! storage(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.bucket Name of a bucket.
         * @param {storage(v1).Policy} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setIamPolicy: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/storage/v1/b/{bucket}/iam',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['bucket'],
                pathParams: ['bucket'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * storage.buckets.testIamPermissions
         *
         * @desc Tests a set of permissions on the given bucket to see which, if any, are held by the caller.
         *
         * @alias storage.buckets.testIamPermissions
         * @memberOf! storage(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.bucket Name of a bucket.
         * @param {string} params.permissions Permissions to test.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        testIamPermissions: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/storage/v1/b/{bucket}/iam/testPermissions',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['bucket', 'permissions'],
                pathParams: ['bucket'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * storage.buckets.update
         *
         * @desc Updates a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud Storage JSON API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/storage
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
         * var storage = google.storage('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Name of a bucket.
         *     bucket: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body. All existing properties
         *       // will be replaced.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   storage.buckets.update(request, function(err, response) {
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
         * @alias storage.buckets.update
         * @memberOf! storage(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.bucket Name of a bucket.
         * @param {string=} params.ifMetagenerationMatch Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.
         * @param {string=} params.ifMetagenerationNotMatch Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.
         * @param {string=} params.predefinedAcl Apply a predefined set of access controls to this bucket.
         * @param {string=} params.predefinedDefaultObjectAcl Apply a predefined set of default object access controls to this bucket.
         * @param {string=} params.projection Set of properties to return. Defaults to full.
         * @param {storage(v1).Bucket} params.resource Request body data
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
                    url: 'https://www.googleapis.com/storage/v1/b/{bucket}',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['bucket'],
                pathParams: ['bucket'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.channels = {
        /**
         * storage.channels.stop
         *
         * @desc Stop watching resources through this channel
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud Storage JSON API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/storage
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
         * var storage = google.storage('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   storage.channels.stop(request, function(err) {
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
         * @alias storage.channels.stop
         * @memberOf! storage(v1)
         *
         * @param {object} params Parameters for request
         * @param {storage(v1).Channel} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        stop: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/storage/v1/channels/stop',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.defaultObjectAccessControls = {
        /**
         * storage.defaultObjectAccessControls.delete
         *
         * @desc Permanently deletes the default object ACL entry for the specified entity on the specified bucket.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud Storage JSON API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/storage
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
         * var storage = google.storage('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Name of a bucket.
         *     bucket: '',  // TODO: Update placeholder value.
         *
         *     // The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId,
         *     // group-emailAddress, allUsers, or allAuthenticatedUsers.
         *     entity: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   storage.defaultObjectAccessControls.delete(request, function(err) {
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
         * @alias storage.defaultObjectAccessControls.delete
         * @memberOf! storage(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.bucket Name of a bucket.
         * @param {string} params.entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
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
                    url: 'https://www.googleapis.com/storage/v1/b/{bucket}/defaultObjectAcl/{entity}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['bucket', 'entity'],
                pathParams: ['bucket', 'entity'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * storage.defaultObjectAccessControls.get
         *
         * @desc Returns the default object ACL entry for the specified entity on the specified bucket.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud Storage JSON API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/storage
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
         * var storage = google.storage('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Name of a bucket.
         *     bucket: '',  // TODO: Update placeholder value.
         *
         *     // The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId,
         *     // group-emailAddress, allUsers, or allAuthenticatedUsers.
         *     entity: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   storage.defaultObjectAccessControls.get(request, function(err, response) {
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
         * @alias storage.defaultObjectAccessControls.get
         * @memberOf! storage(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.bucket Name of a bucket.
         * @param {string} params.entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
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
                    url: 'https://www.googleapis.com/storage/v1/b/{bucket}/defaultObjectAcl/{entity}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['bucket', 'entity'],
                pathParams: ['bucket', 'entity'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * storage.defaultObjectAccessControls.insert
         *
         * @desc Creates a new default object ACL entry on the specified bucket.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud Storage JSON API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/storage
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
         * var storage = google.storage('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Name of a bucket.
         *     bucket: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   storage.defaultObjectAccessControls.insert(request, function(err, response) {
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
         * @alias storage.defaultObjectAccessControls.insert
         * @memberOf! storage(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.bucket Name of a bucket.
         * @param {storage(v1).ObjectAccessControl} params.resource Request body data
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
                    url: 'https://www.googleapis.com/storage/v1/b/{bucket}/defaultObjectAcl',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['bucket'],
                pathParams: ['bucket'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * storage.defaultObjectAccessControls.list
         *
         * @desc Retrieves default object ACL entries on the specified bucket.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud Storage JSON API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/storage
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
         * var storage = google.storage('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Name of a bucket.
         *     bucket: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   storage.defaultObjectAccessControls.list(request, function(err, response) {
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
         * @alias storage.defaultObjectAccessControls.list
         * @memberOf! storage(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.bucket Name of a bucket.
         * @param {string=} params.ifMetagenerationMatch If present, only return default ACL listing if the bucket's current metageneration matches this value.
         * @param {string=} params.ifMetagenerationNotMatch If present, only return default ACL listing if the bucket's current metageneration does not match the given value.
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
                    url: 'https://www.googleapis.com/storage/v1/b/{bucket}/defaultObjectAcl',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['bucket'],
                pathParams: ['bucket'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * storage.defaultObjectAccessControls.patch
         *
         * @desc Updates a default object ACL entry on the specified bucket. This method supports patch semantics.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud Storage JSON API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/storage
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
         * var storage = google.storage('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Name of a bucket.
         *     bucket: '',  // TODO: Update placeholder value.
         *
         *     // The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId,
         *     // group-emailAddress, allUsers, or allAuthenticatedUsers.
         *     entity: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body. Only these properties
         *       // will be changed.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   storage.defaultObjectAccessControls.patch(request, function(err, response) {
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
         * @alias storage.defaultObjectAccessControls.patch
         * @memberOf! storage(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.bucket Name of a bucket.
         * @param {string} params.entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
         * @param {storage(v1).ObjectAccessControl} params.resource Request body data
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
                    url: 'https://www.googleapis.com/storage/v1/b/{bucket}/defaultObjectAcl/{entity}',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['bucket', 'entity'],
                pathParams: ['bucket', 'entity'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * storage.defaultObjectAccessControls.update
         *
         * @desc Updates a default object ACL entry on the specified bucket.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud Storage JSON API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/storage
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
         * var storage = google.storage('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Name of a bucket.
         *     bucket: '',  // TODO: Update placeholder value.
         *
         *     // The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId,
         *     // group-emailAddress, allUsers, or allAuthenticatedUsers.
         *     entity: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body. All existing properties
         *       // will be replaced.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   storage.defaultObjectAccessControls.update(request, function(err, response) {
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
         * @alias storage.defaultObjectAccessControls.update
         * @memberOf! storage(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.bucket Name of a bucket.
         * @param {string} params.entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
         * @param {storage(v1).ObjectAccessControl} params.resource Request body data
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
                    url: 'https://www.googleapis.com/storage/v1/b/{bucket}/defaultObjectAcl/{entity}',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['bucket', 'entity'],
                pathParams: ['bucket', 'entity'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.notifications = {
        /**
         * storage.notifications.delete
         *
         * @desc Permanently deletes a notification subscription.
         *
         * @alias storage.notifications.delete
         * @memberOf! storage(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.bucket The parent bucket of the notification.
         * @param {string} params.notification ID of the notification to delete.
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
                    url: 'https://www.googleapis.com/storage/v1/b/{bucket}/notificationConfigs/{notification}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['bucket', 'notification'],
                pathParams: ['bucket', 'notification'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * storage.notifications.get
         *
         * @desc View a notification configuration.
         *
         * @alias storage.notifications.get
         * @memberOf! storage(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.bucket The parent bucket of the notification.
         * @param {string} params.notification Notification ID
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
                    url: 'https://www.googleapis.com/storage/v1/b/{bucket}/notificationConfigs/{notification}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['bucket', 'notification'],
                pathParams: ['bucket', 'notification'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * storage.notifications.insert
         *
         * @desc Creates a notification subscription for a given bucket.
         *
         * @alias storage.notifications.insert
         * @memberOf! storage(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.bucket The parent bucket of the notification.
         * @param {storage(v1).Notification} params.resource Request body data
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
                    url: 'https://www.googleapis.com/storage/v1/b/{bucket}/notificationConfigs',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['bucket'],
                pathParams: ['bucket'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * storage.notifications.list
         *
         * @desc Retrieves a list of notification subscriptions for a given bucket.
         *
         * @alias storage.notifications.list
         * @memberOf! storage(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.bucket Name of a GCS bucket.
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
                    url: 'https://www.googleapis.com/storage/v1/b/{bucket}/notificationConfigs',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['bucket'],
                pathParams: ['bucket'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.objectAccessControls = {
        /**
         * storage.objectAccessControls.delete
         *
         * @desc Permanently deletes the ACL entry for the specified entity on the specified object.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud Storage JSON API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/storage
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
         * var storage = google.storage('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Name of a bucket.
         *     bucket: '',  // TODO: Update placeholder value.
         *
         *     // Name of the object. For information about how to URL encode object names to be path safe, see
         *     // Encoding URI Path Parts.
         *     object: '',  // TODO: Update placeholder value.
         *
         *     // The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId,
         *     // group-emailAddress, allUsers, or allAuthenticatedUsers.
         *     entity: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   storage.objectAccessControls.delete(request, function(err) {
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
         * @alias storage.objectAccessControls.delete
         * @memberOf! storage(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.bucket Name of a bucket.
         * @param {string} params.entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
         * @param {string=} params.generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
         * @param {string} params.object Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
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
                    url: 'https://www.googleapis.com/storage/v1/b/{bucket}/o/{object}/acl/{entity}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['bucket', 'object', 'entity'],
                pathParams: ['bucket', 'entity', 'object'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * storage.objectAccessControls.get
         *
         * @desc Returns the ACL entry for the specified entity on the specified object.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud Storage JSON API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/storage
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
         * var storage = google.storage('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Name of a bucket.
         *     bucket: '',  // TODO: Update placeholder value.
         *
         *     // Name of the object. For information about how to URL encode object names to be path safe, see
         *     // Encoding URI Path Parts.
         *     object: '',  // TODO: Update placeholder value.
         *
         *     // The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId,
         *     // group-emailAddress, allUsers, or allAuthenticatedUsers.
         *     entity: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   storage.objectAccessControls.get(request, function(err, response) {
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
         * @alias storage.objectAccessControls.get
         * @memberOf! storage(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.bucket Name of a bucket.
         * @param {string} params.entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
         * @param {string=} params.generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
         * @param {string} params.object Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
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
                    url: 'https://www.googleapis.com/storage/v1/b/{bucket}/o/{object}/acl/{entity}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['bucket', 'object', 'entity'],
                pathParams: ['bucket', 'entity', 'object'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * storage.objectAccessControls.insert
         *
         * @desc Creates a new ACL entry on the specified object.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud Storage JSON API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/storage
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
         * var storage = google.storage('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Name of a bucket.
         *     bucket: '',  // TODO: Update placeholder value.
         *
         *     // Name of the object. For information about how to URL encode object names to be path safe, see
         *     // Encoding URI Path Parts.
         *     object: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   storage.objectAccessControls.insert(request, function(err, response) {
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
         * @alias storage.objectAccessControls.insert
         * @memberOf! storage(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.bucket Name of a bucket.
         * @param {string=} params.generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
         * @param {string} params.object Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
         * @param {storage(v1).ObjectAccessControl} params.resource Request body data
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
                    url: 'https://www.googleapis.com/storage/v1/b/{bucket}/o/{object}/acl',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['bucket', 'object'],
                pathParams: ['bucket', 'object'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * storage.objectAccessControls.list
         *
         * @desc Retrieves ACL entries on the specified object.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud Storage JSON API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/storage
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
         * var storage = google.storage('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Name of a bucket.
         *     bucket: '',  // TODO: Update placeholder value.
         *
         *     // Name of the object. For information about how to URL encode object names to be path safe, see
         *     // Encoding URI Path Parts.
         *     object: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   storage.objectAccessControls.list(request, function(err, response) {
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
         * @alias storage.objectAccessControls.list
         * @memberOf! storage(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.bucket Name of a bucket.
         * @param {string=} params.generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
         * @param {string} params.object Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
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
                    url: 'https://www.googleapis.com/storage/v1/b/{bucket}/o/{object}/acl',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['bucket', 'object'],
                pathParams: ['bucket', 'object'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * storage.objectAccessControls.patch
         *
         * @desc Updates an ACL entry on the specified object. This method supports patch semantics.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud Storage JSON API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/storage
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
         * var storage = google.storage('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Name of a bucket.
         *     bucket: '',  // TODO: Update placeholder value.
         *
         *     // Name of the object. For information about how to URL encode object names to be path safe, see
         *     // Encoding URI Path Parts.
         *     object: '',  // TODO: Update placeholder value.
         *
         *     // The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId,
         *     // group-emailAddress, allUsers, or allAuthenticatedUsers.
         *     entity: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body. Only these properties
         *       // will be changed.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   storage.objectAccessControls.patch(request, function(err, response) {
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
         * @alias storage.objectAccessControls.patch
         * @memberOf! storage(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.bucket Name of a bucket.
         * @param {string} params.entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
         * @param {string=} params.generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
         * @param {string} params.object Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
         * @param {storage(v1).ObjectAccessControl} params.resource Request body data
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
                    url: 'https://www.googleapis.com/storage/v1/b/{bucket}/o/{object}/acl/{entity}',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['bucket', 'object', 'entity'],
                pathParams: ['bucket', 'entity', 'object'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * storage.objectAccessControls.update
         *
         * @desc Updates an ACL entry on the specified object.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud Storage JSON API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/storage
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
         * var storage = google.storage('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Name of a bucket.
         *     bucket: '',  // TODO: Update placeholder value.
         *
         *     // Name of the object. For information about how to URL encode object names to be path safe, see
         *     // Encoding URI Path Parts.
         *     object: '',  // TODO: Update placeholder value.
         *
         *     // The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId,
         *     // group-emailAddress, allUsers, or allAuthenticatedUsers.
         *     entity: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body. All existing properties
         *       // will be replaced.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   storage.objectAccessControls.update(request, function(err, response) {
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
         * @alias storage.objectAccessControls.update
         * @memberOf! storage(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.bucket Name of a bucket.
         * @param {string} params.entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
         * @param {string=} params.generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
         * @param {string} params.object Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
         * @param {storage(v1).ObjectAccessControl} params.resource Request body data
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
                    url: 'https://www.googleapis.com/storage/v1/b/{bucket}/o/{object}/acl/{entity}',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['bucket', 'object', 'entity'],
                pathParams: ['bucket', 'entity', 'object'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.objects = {
        /**
         * storage.objects.compose
         *
         * @desc Concatenates a list of existing objects into a new object in the same bucket.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud Storage JSON API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/storage
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
         * var storage = google.storage('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Name of the bucket in which to store the new object.
         *     destinationBucket: '',  // TODO: Update placeholder value.
         *
         *     // Name of the new object. For information about how to URL encode object names to be path safe, see
         *     // Encoding URI Path Parts.
         *     destinationObject: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     // TODO: To download media content, use:
         *     //
         *     // alt: 'media',
         *
         *     auth: authClient
         *   };
         *
         *   storage.objects.compose(request, function(err, response) {
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
         * @alias storage.objects.compose
         * @memberOf! storage(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.destinationBucket Name of the bucket in which to store the new object.
         * @param {string} params.destinationObject Name of the new object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
         * @param {string=} params.destinationPredefinedAcl Apply a predefined set of access controls to the destination object.
         * @param {string=} params.ifGenerationMatch Makes the operation conditional on whether the object's current generation matches the given value.
         * @param {string=} params.ifMetagenerationMatch Makes the operation conditional on whether the object's current metageneration matches the given value.
         * @param {storage(v1).ComposeRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        compose: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/storage/v1/b/{destinationBucket}/o/{destinationObject}/compose',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['destinationBucket', 'destinationObject'],
                pathParams: ['destinationBucket', 'destinationObject'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * storage.objects.copy
         *
         * @desc Copies a source object to a destination object. Optionally overrides metadata.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud Storage JSON API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/storage
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
         * var storage = google.storage('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Name of the bucket in which to find the source object.
         *     sourceBucket: '',  // TODO: Update placeholder value.
         *
         *     // Name of the source object. For information about how to URL encode object names to be path safe,
         *     // see Encoding URI Path Parts.
         *     sourceObject: '',  // TODO: Update placeholder value.
         *
         *     // Name of the bucket in which to store the new object. Overrides the provided object metadata's
         *     // bucket value, if any.For information about how to URL encode object names to be path safe, see
         *     // Encoding URI Path Parts.
         *     destinationBucket: '',  // TODO: Update placeholder value.
         *
         *     // Name of the new object. Required when the object metadata is not otherwise provided. Overrides the
         *     // object metadata's name value, if any.
         *     destinationObject: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     // TODO: To download media content, use:
         *     //
         *     // alt: 'media',
         *
         *     auth: authClient
         *   };
         *
         *   storage.objects.copy(request, function(err, response) {
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
         * @alias storage.objects.copy
         * @memberOf! storage(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.destinationBucket Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
         * @param {string} params.destinationObject Name of the new object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any.
         * @param {string=} params.destinationPredefinedAcl Apply a predefined set of access controls to the destination object.
         * @param {string=} params.ifGenerationMatch Makes the operation conditional on whether the destination object's current generation matches the given value.
         * @param {string=} params.ifGenerationNotMatch Makes the operation conditional on whether the destination object's current generation does not match the given value.
         * @param {string=} params.ifMetagenerationMatch Makes the operation conditional on whether the destination object's current metageneration matches the given value.
         * @param {string=} params.ifMetagenerationNotMatch Makes the operation conditional on whether the destination object's current metageneration does not match the given value.
         * @param {string=} params.ifSourceGenerationMatch Makes the operation conditional on whether the source object's generation matches the given value.
         * @param {string=} params.ifSourceGenerationNotMatch Makes the operation conditional on whether the source object's generation does not match the given value.
         * @param {string=} params.ifSourceMetagenerationMatch Makes the operation conditional on whether the source object's current metageneration matches the given value.
         * @param {string=} params.ifSourceMetagenerationNotMatch Makes the operation conditional on whether the source object's current metageneration does not match the given value.
         * @param {string=} params.projection Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full.
         * @param {string} params.sourceBucket Name of the bucket in which to find the source object.
         * @param {string=} params.sourceGeneration If present, selects a specific revision of the source object (as opposed to the latest version, the default).
         * @param {string} params.sourceObject Name of the source object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
         * @param {storage(v1).Object} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        copy: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/storage/v1/b/{sourceBucket}/o/{sourceObject}/copyTo/b/{destinationBucket}/o/{destinationObject}',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['sourceBucket', 'sourceObject', 'destinationBucket', 'destinationObject'],
                pathParams: ['destinationBucket', 'destinationObject', 'sourceBucket', 'sourceObject'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * storage.objects.delete
         *
         * @desc Deletes an object and its metadata. Deletions are permanent if versioning is not enabled for the bucket, or if the generation parameter is used.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud Storage JSON API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/storage
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
         * var storage = google.storage('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Name of the bucket in which the object resides.
         *     bucket: '',  // TODO: Update placeholder value.
         *
         *     // Name of the object. For information about how to URL encode object names to be path safe, see
         *     // Encoding URI Path Parts.
         *     object: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   storage.objects.delete(request, function(err) {
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
         * @alias storage.objects.delete
         * @memberOf! storage(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.bucket Name of the bucket in which the object resides.
         * @param {string=} params.generation If present, permanently deletes a specific revision of this object (as opposed to the latest version, the default).
         * @param {string=} params.ifGenerationMatch Makes the operation conditional on whether the object's current generation matches the given value.
         * @param {string=} params.ifGenerationNotMatch Makes the operation conditional on whether the object's current generation does not match the given value.
         * @param {string=} params.ifMetagenerationMatch Makes the operation conditional on whether the object's current metageneration matches the given value.
         * @param {string=} params.ifMetagenerationNotMatch Makes the operation conditional on whether the object's current metageneration does not match the given value.
         * @param {string} params.object Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
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
                    url: 'https://www.googleapis.com/storage/v1/b/{bucket}/o/{object}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['bucket', 'object'],
                pathParams: ['bucket', 'object'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * storage.objects.get
         *
         * @desc Retrieves an object or its metadata.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud Storage JSON API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/storage
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
         * var storage = google.storage('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Name of the bucket in which the object resides.
         *     bucket: '',  // TODO: Update placeholder value.
         *
         *     // Name of the object. For information about how to URL encode object names to be path safe, see
         *     // Encoding URI Path Parts.
         *     object: '',  // TODO: Update placeholder value.
         *
         *     // TODO: To download media content, use:
         *     //
         *     // alt: 'media',
         *
         *     auth: authClient
         *   };
         *
         *   storage.objects.get(request, function(err, response) {
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
         * @alias storage.objects.get
         * @memberOf! storage(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.bucket Name of the bucket in which the object resides.
         * @param {string=} params.generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
         * @param {string=} params.ifGenerationMatch Makes the operation conditional on whether the object's generation matches the given value.
         * @param {string=} params.ifGenerationNotMatch Makes the operation conditional on whether the object's generation does not match the given value.
         * @param {string=} params.ifMetagenerationMatch Makes the operation conditional on whether the object's current metageneration matches the given value.
         * @param {string=} params.ifMetagenerationNotMatch Makes the operation conditional on whether the object's current metageneration does not match the given value.
         * @param {string} params.object Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
         * @param {string=} params.projection Set of properties to return. Defaults to noAcl.
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
                    url: 'https://www.googleapis.com/storage/v1/b/{bucket}/o/{object}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['bucket', 'object'],
                pathParams: ['bucket', 'object'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * storage.objects.getIamPolicy
         *
         * @desc Returns an IAM policy for the specified object.
         *
         * @alias storage.objects.getIamPolicy
         * @memberOf! storage(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.bucket Name of the bucket in which the object resides.
         * @param {string=} params.generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
         * @param {string} params.object Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getIamPolicy: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/storage/v1/b/{bucket}/o/{object}/iam',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['bucket', 'object'],
                pathParams: ['bucket', 'object'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * storage.objects.insert
         *
         * @desc Stores a new object and metadata.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud Storage JSON API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/storage
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
         * var storage = google.storage('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Name of the bucket in which to store the new object. Overrides the provided object metadata's
         *     // bucket value, if any.
         *     bucket: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     media: {
         *       // TODO: Add desired media content for upload. See
         *       // https://github.com/google/google-api-nodejs-client#media-uploads
         *       mimeType: '',  // See https://www.w3.org/Protocols/rfc1341/4_Content-Type.html
         *       body: {}
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   storage.objects.insert(request, function(err, response) {
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
         * @alias storage.objects.insert
         * @memberOf! storage(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.bucket Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.
         * @param {string=} params.contentEncoding If set, sets the contentEncoding property of the final object to this value. Setting this parameter is equivalent to setting the contentEncoding metadata property. This can be useful when uploading an object with uploadType=media to indicate the encoding of the content being uploaded.
         * @param {string=} params.ifGenerationMatch Makes the operation conditional on whether the object's current generation matches the given value.
         * @param {string=} params.ifGenerationNotMatch Makes the operation conditional on whether the object's current generation does not match the given value.
         * @param {string=} params.ifMetagenerationMatch Makes the operation conditional on whether the object's current metageneration matches the given value.
         * @param {string=} params.ifMetagenerationNotMatch Makes the operation conditional on whether the object's current metageneration does not match the given value.
         * @param {string=} params.name Name of the object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
         * @param {string=} params.predefinedAcl Apply a predefined set of access controls to this object.
         * @param {string=} params.projection Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full.
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
                    url: 'https://www.googleapis.com/storage/v1/b/{bucket}/o',
                    method: 'POST'
                }, options),
                params: params,
                mediaUrl: 'https://www.googleapis.com/upload/storage/v1/b/{bucket}/o',
                requiredParams: ['bucket'],
                pathParams: ['bucket'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * storage.objects.list
         *
         * @desc Retrieves a list of objects matching the criteria.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud Storage JSON API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/storage
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
         * var storage = google.storage('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Name of the bucket in which to look for objects.
         *     bucket: '',  // TODO: Update placeholder value.
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
         *       storage.objects.list(request, handlePage);
         *     }
         *   };
         *
         *   storage.objects.list(request, handlePage);
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
         * @alias storage.objects.list
         * @memberOf! storage(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.bucket Name of the bucket in which to look for objects.
         * @param {string=} params.delimiter Returns results in a directory-like mode. items will contain only objects whose names, aside from the prefix, do not contain delimiter. Objects whose names, aside from the prefix, contain delimiter will have their name, truncated after the delimiter, returned in prefixes. Duplicate prefixes are omitted.
         * @param {integer=} params.maxResults Maximum number of items plus prefixes to return in a single page of responses. As duplicate prefixes are omitted, fewer total results may be returned than requested. The service will use this parameter or 1,000 items, whichever is smaller.
         * @param {string=} params.pageToken A previously-returned page token representing part of the larger set of results to view.
         * @param {string=} params.prefix Filter results to objects whose names begin with this prefix.
         * @param {string=} params.projection Set of properties to return. Defaults to noAcl.
         * @param {boolean=} params.versions If true, lists all versions of an object as distinct results. The default is false. For more information, see Object Versioning.
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
                    url: 'https://www.googleapis.com/storage/v1/b/{bucket}/o',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['bucket'],
                pathParams: ['bucket'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * storage.objects.patch
         *
         * @desc Updates an object's metadata. This method supports patch semantics.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud Storage JSON API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/storage
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
         * var storage = google.storage('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Name of the bucket in which the object resides.
         *     bucket: '',  // TODO: Update placeholder value.
         *
         *     // Name of the object. For information about how to URL encode object names to be path safe, see
         *     // Encoding URI Path Parts.
         *     object: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body. Only these properties
         *       // will be changed.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   storage.objects.patch(request, function(err, response) {
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
         * @alias storage.objects.patch
         * @memberOf! storage(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.bucket Name of the bucket in which the object resides.
         * @param {string=} params.generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
         * @param {string=} params.ifGenerationMatch Makes the operation conditional on whether the object's current generation matches the given value.
         * @param {string=} params.ifGenerationNotMatch Makes the operation conditional on whether the object's current generation does not match the given value.
         * @param {string=} params.ifMetagenerationMatch Makes the operation conditional on whether the object's current metageneration matches the given value.
         * @param {string=} params.ifMetagenerationNotMatch Makes the operation conditional on whether the object's current metageneration does not match the given value.
         * @param {string} params.object Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
         * @param {string=} params.predefinedAcl Apply a predefined set of access controls to this object.
         * @param {string=} params.projection Set of properties to return. Defaults to full.
         * @param {storage(v1).Object} params.resource Request body data
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
                    url: 'https://www.googleapis.com/storage/v1/b/{bucket}/o/{object}',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['bucket', 'object'],
                pathParams: ['bucket', 'object'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * storage.objects.rewrite
         *
         * @desc Rewrites a source object to a destination object. Optionally overrides metadata.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud Storage JSON API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/storage
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
         * var storage = google.storage('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Name of the bucket in which to find the source object.
         *     sourceBucket: '',  // TODO: Update placeholder value.
         *
         *     // Name of the source object. For information about how to URL encode object names to be path safe,
         *     // see Encoding URI Path Parts.
         *     sourceObject: '',  // TODO: Update placeholder value.
         *
         *     // Name of the bucket in which to store the new object. Overrides the provided object metadata's
         *     // bucket value, if any.
         *     destinationBucket: '',  // TODO: Update placeholder value.
         *
         *     // Name of the new object. Required when the object metadata is not otherwise provided. Overrides the
         *     // object metadata's name value, if any. For information about how to URL encode object names to be
         *     // path safe, see Encoding URI Path Parts.
         *     destinationObject: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   storage.objects.rewrite(request, function(err, response) {
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
         * @alias storage.objects.rewrite
         * @memberOf! storage(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.destinationBucket Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.
         * @param {string} params.destinationObject Name of the new object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
         * @param {string=} params.destinationPredefinedAcl Apply a predefined set of access controls to the destination object.
         * @param {string=} params.ifGenerationMatch Makes the operation conditional on whether the destination object's current generation matches the given value.
         * @param {string=} params.ifGenerationNotMatch Makes the operation conditional on whether the destination object's current generation does not match the given value.
         * @param {string=} params.ifMetagenerationMatch Makes the operation conditional on whether the destination object's current metageneration matches the given value.
         * @param {string=} params.ifMetagenerationNotMatch Makes the operation conditional on whether the destination object's current metageneration does not match the given value.
         * @param {string=} params.ifSourceGenerationMatch Makes the operation conditional on whether the source object's generation matches the given value.
         * @param {string=} params.ifSourceGenerationNotMatch Makes the operation conditional on whether the source object's generation does not match the given value.
         * @param {string=} params.ifSourceMetagenerationMatch Makes the operation conditional on whether the source object's current metageneration matches the given value.
         * @param {string=} params.ifSourceMetagenerationNotMatch Makes the operation conditional on whether the source object's current metageneration does not match the given value.
         * @param {string=} params.maxBytesRewrittenPerCall The maximum number of bytes that will be rewritten per rewrite request. Most callers shouldn't need to specify this parameter - it is primarily in place to support testing. If specified the value must be an integral multiple of 1 MiB (1048576). Also, this only applies to requests where the source and destination span locations and/or storage classes. Finally, this value must not change across rewrite calls else you'll get an error that the rewriteToken is invalid.
         * @param {string=} params.projection Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full.
         * @param {string=} params.rewriteToken Include this field (from the previous rewrite response) on each rewrite request after the first one, until the rewrite response 'done' flag is true. Calls that provide a rewriteToken can omit all other request fields, but if included those fields must match the values provided in the first rewrite request.
         * @param {string} params.sourceBucket Name of the bucket in which to find the source object.
         * @param {string=} params.sourceGeneration If present, selects a specific revision of the source object (as opposed to the latest version, the default).
         * @param {string} params.sourceObject Name of the source object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
         * @param {storage(v1).Object} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        rewrite: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/storage/v1/b/{sourceBucket}/o/{sourceObject}/rewriteTo/b/{destinationBucket}/o/{destinationObject}',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['sourceBucket', 'sourceObject', 'destinationBucket', 'destinationObject'],
                pathParams: ['destinationBucket', 'destinationObject', 'sourceBucket', 'sourceObject'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * storage.objects.setIamPolicy
         *
         * @desc Updates an IAM policy for the specified object.
         *
         * @alias storage.objects.setIamPolicy
         * @memberOf! storage(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.bucket Name of the bucket in which the object resides.
         * @param {string=} params.generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
         * @param {string} params.object Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
         * @param {storage(v1).Policy} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setIamPolicy: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/storage/v1/b/{bucket}/o/{object}/iam',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['bucket', 'object'],
                pathParams: ['bucket', 'object'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * storage.objects.testIamPermissions
         *
         * @desc Tests a set of permissions on the given object to see which, if any, are held by the caller.
         *
         * @alias storage.objects.testIamPermissions
         * @memberOf! storage(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.bucket Name of the bucket in which the object resides.
         * @param {string=} params.generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
         * @param {string} params.object Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
         * @param {string} params.permissions Permissions to test.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        testIamPermissions: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/storage/v1/b/{bucket}/o/{object}/iam/testPermissions',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['bucket', 'object', 'permissions'],
                pathParams: ['bucket', 'object'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * storage.objects.update
         *
         * @desc Updates an object's metadata.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud Storage JSON API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/storage
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
         * var storage = google.storage('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Name of the bucket in which the object resides.
         *     bucket: '',  // TODO: Update placeholder value.
         *
         *     // Name of the object. For information about how to URL encode object names to be path safe, see
         *     // Encoding URI Path Parts.
         *     object: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body. All existing properties
         *       // will be replaced.
         *     },
         *
         *     // TODO: To download media content, use:
         *     //
         *     // alt: 'media',
         *
         *     auth: authClient
         *   };
         *
         *   storage.objects.update(request, function(err, response) {
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
         * @alias storage.objects.update
         * @memberOf! storage(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.bucket Name of the bucket in which the object resides.
         * @param {string=} params.generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
         * @param {string=} params.ifGenerationMatch Makes the operation conditional on whether the object's current generation matches the given value.
         * @param {string=} params.ifGenerationNotMatch Makes the operation conditional on whether the object's current generation does not match the given value.
         * @param {string=} params.ifMetagenerationMatch Makes the operation conditional on whether the object's current metageneration matches the given value.
         * @param {string=} params.ifMetagenerationNotMatch Makes the operation conditional on whether the object's current metageneration does not match the given value.
         * @param {string} params.object Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
         * @param {string=} params.predefinedAcl Apply a predefined set of access controls to this object.
         * @param {string=} params.projection Set of properties to return. Defaults to full.
         * @param {storage(v1).Object} params.resource Request body data
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
                    url: 'https://www.googleapis.com/storage/v1/b/{bucket}/o/{object}',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['bucket', 'object'],
                pathParams: ['bucket', 'object'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * storage.objects.watchAll
         *
         * @desc Watch for changes on all objects in a bucket.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud Storage JSON API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/storage
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
         * var storage = google.storage('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Name of the bucket in which to look for objects.
         *     bucket: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   storage.objects.watchAll(request, function(err, response) {
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
         * @alias storage.objects.watchAll
         * @memberOf! storage(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.bucket Name of the bucket in which to look for objects.
         * @param {string=} params.delimiter Returns results in a directory-like mode. items will contain only objects whose names, aside from the prefix, do not contain delimiter. Objects whose names, aside from the prefix, contain delimiter will have their name, truncated after the delimiter, returned in prefixes. Duplicate prefixes are omitted.
         * @param {integer=} params.maxResults Maximum number of items plus prefixes to return in a single page of responses. As duplicate prefixes are omitted, fewer total results may be returned than requested. The service will use this parameter or 1,000 items, whichever is smaller.
         * @param {string=} params.pageToken A previously-returned page token representing part of the larger set of results to view.
         * @param {string=} params.prefix Filter results to objects whose names begin with this prefix.
         * @param {string=} params.projection Set of properties to return. Defaults to noAcl.
         * @param {boolean=} params.versions If true, lists all versions of an object as distinct results. The default is false. For more information, see Object Versioning.
         * @param {storage(v1).Channel} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        watchAll: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/storage/v1/b/{bucket}/o/watch',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['bucket'],
                pathParams: ['bucket'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.projects = {
        serviceAccount: {
            /**
             * storage.projects.serviceAccount.get
             *
             * @desc Get the email address of this project's GCS service account.
             *
             * @alias storage.projects.serviceAccount.get
             * @memberOf! storage(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.projectId Project ID
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
                        url: 'https://www.googleapis.com/storage/v1/projects/{projectId}/serviceAccount',
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['projectId'],
                    pathParams: ['projectId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        }
    };
}
module.exports = Storage;
//# sourceMappingURL=v1.js.map