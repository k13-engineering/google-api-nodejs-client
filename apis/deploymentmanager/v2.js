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
 * Google Cloud Deployment Manager API
 *
 * Declares, configures, and deploys complex solutions on Google Cloud Platform.
 *
 * @example
 * const google = require('googleapis');
 * const deploymentmanager = google.deploymentmanager('v2');
 *
 * @namespace deploymentmanager
 * @type {Function}
 * @version v2
 * @variation v2
 * @param {object=} options Options for Deploymentmanager
 */
function Deploymentmanager(options) {
    const self = this;
    self._options = options || {};
    self.deployments = {
        /**
         * deploymentmanager.deployments.cancelPreview
         *
         * @desc Cancels and removes the preview currently associated with the deployment.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud Deployment Manager API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/deploymentmanager
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
         * var deploymentManager = google.deploymentmanager('v2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The project ID for this request.
         *     project: '',  // TODO: Update placeholder value.
         *
         *     // The name of the deployment for this request.
         *     deployment: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   deploymentManager.deployments.cancelPreview(request, function(err, response) {
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
         * @alias deploymentmanager.deployments.cancelPreview
         * @memberOf! deploymentmanager(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.deployment The name of the deployment for this request.
         * @param {string} params.project The project ID for this request.
         * @param {deploymentmanager(v2).DeploymentsCancelPreviewRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        cancelPreview: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/deploymentmanager/v2/projects/{project}/global/deployments/{deployment}/cancelPreview',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'deployment'],
                pathParams: ['deployment', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * deploymentmanager.deployments.delete
         *
         * @desc Deletes a deployment and all of the resources in the deployment.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud Deployment Manager API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/deploymentmanager
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
         * var deploymentManager = google.deploymentmanager('v2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The project ID for this request.
         *     project: '',  // TODO: Update placeholder value.
         *
         *     // The name of the deployment for this request.
         *     deployment: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   deploymentManager.deployments.delete(request, function(err, response) {
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
         * @alias deploymentmanager.deployments.delete
         * @memberOf! deploymentmanager(v2)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.deletePolicy Sets the policy to use for deleting resources.
         * @param {string} params.deployment The name of the deployment for this request.
         * @param {string} params.project The project ID for this request.
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
                    url: 'https://www.googleapis.com/deploymentmanager/v2/projects/{project}/global/deployments/{deployment}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'deployment'],
                pathParams: ['deployment', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * deploymentmanager.deployments.get
         *
         * @desc Gets information about a specific deployment.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud Deployment Manager API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/deploymentmanager
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
         * var deploymentManager = google.deploymentmanager('v2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The project ID for this request.
         *     project: '',  // TODO: Update placeholder value.
         *
         *     // The name of the deployment for this request.
         *     deployment: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   deploymentManager.deployments.get(request, function(err, response) {
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
         * @alias deploymentmanager.deployments.get
         * @memberOf! deploymentmanager(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.deployment The name of the deployment for this request.
         * @param {string} params.project The project ID for this request.
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
                    url: 'https://www.googleapis.com/deploymentmanager/v2/projects/{project}/global/deployments/{deployment}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'deployment'],
                pathParams: ['deployment', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * deploymentmanager.deployments.getIamPolicy
         *
         * @desc Gets the access control policy for a resource. May be empty if no such policy or resource exists.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud Deployment Manager API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/deploymentmanager
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
         * var deploymentManager = google.deploymentmanager('v2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Project ID for this request.
         *     project: '',  // TODO: Update placeholder value.
         *
         *     // Name of the resource for this request.
         *     resource_: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   deploymentManager.deployments.getIamPolicy(request, function(err, response) {
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
         * @alias deploymentmanager.deployments.getIamPolicy
         * @memberOf! deploymentmanager(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.resource_ Name of the resource for this request.
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
                    url: 'https://www.googleapis.com/deploymentmanager/v2/projects/{project}/global/deployments/{resource}/getIamPolicy',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'resource'],
                pathParams: ['project', 'resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * deploymentmanager.deployments.insert
         *
         * @desc Creates a deployment and all of the resources described by the deployment manifest.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud Deployment Manager API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/deploymentmanager
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
         * var deploymentManager = google.deploymentmanager('v2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The project ID for this request.
         *     project: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   deploymentManager.deployments.insert(request, function(err, response) {
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
         * @alias deploymentmanager.deployments.insert
         * @memberOf! deploymentmanager(v2)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.preview If set to true, creates a deployment and creates "shell" resources but does not actually instantiate these resources. This allows you to preview what your deployment looks like. After previewing a deployment, you can deploy your resources by making a request with the update() method or you can use the cancelPreview() method to cancel the preview altogether. Note that the deployment will still exist after you cancel the preview and you must separately delete this deployment if you want to remove it.
         * @param {string} params.project The project ID for this request.
         * @param {deploymentmanager(v2).Deployment} params.resource Request body data
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
                    url: 'https://www.googleapis.com/deploymentmanager/v2/projects/{project}/global/deployments',
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
         * deploymentmanager.deployments.list
         *
         * @desc Lists all deployments for a given project.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud Deployment Manager API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/deploymentmanager
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
         * var deploymentManager = google.deploymentmanager('v2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The project ID for this request.
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
         *     var deploymentsPage = response['deployments'];
         *     if (!deploymentsPage) {
         *       return;
         *     }
         *     for (var i = 0; i < deploymentsPage.length; i++) {
         *       // TODO: Change code below to process each resource in `deploymentsPage`:
         *       console.log(JSON.stringify(deploymentsPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.pageToken = response.nextPageToken;
         *       deploymentManager.deployments.list(request, handlePage);
         *     }
         *   };
         *
         *   deploymentManager.deployments.list(request, handlePage);
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
         * @alias deploymentmanager.deployments.list
         * @memberOf! deploymentmanager(v2)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project The project ID for this request.
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
                    url: 'https://www.googleapis.com/deploymentmanager/v2/projects/{project}/global/deployments',
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
         * deploymentmanager.deployments.patch
         *
         * @desc Updates a deployment and all of the resources described by the deployment manifest. This method supports patch semantics.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud Deployment Manager API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/deploymentmanager
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
         * var deploymentManager = google.deploymentmanager('v2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The project ID for this request.
         *     project: '',  // TODO: Update placeholder value.
         *
         *     // The name of the deployment for this request.
         *     deployment: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body. Only these properties
         *       // will be changed.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   deploymentManager.deployments.patch(request, function(err, response) {
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
         * @alias deploymentmanager.deployments.patch
         * @memberOf! deploymentmanager(v2)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.createPolicy Sets the policy to use for creating new resources.
         * @param {string=} params.deletePolicy Sets the policy to use for deleting resources.
         * @param {string} params.deployment The name of the deployment for this request.
         * @param {boolean=} params.preview If set to true, updates the deployment and creates and updates the "shell" resources but does not actually alter or instantiate these resources. This allows you to preview what your deployment will look like. You can use this intent to preview how an update would affect your deployment. You must provide a target.config with a configuration if this is set to true. After previewing a deployment, you can deploy your resources by making a request with the update() or you can cancelPreview() to remove the preview altogether. Note that the deployment will still exist after you cancel the preview and you must separately delete this deployment if you want to remove it.
         * @param {string} params.project The project ID for this request.
         * @param {deploymentmanager(v2).Deployment} params.resource Request body data
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
                    url: 'https://www.googleapis.com/deploymentmanager/v2/projects/{project}/global/deployments/{deployment}',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['project', 'deployment'],
                pathParams: ['deployment', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * deploymentmanager.deployments.setIamPolicy
         *
         * @desc Sets the access control policy on the specified resource. Replaces any existing policy.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud Deployment Manager API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/deploymentmanager
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
         * var deploymentManager = google.deploymentmanager('v2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Project ID for this request.
         *     project: '',  // TODO: Update placeholder value.
         *
         *     // Name of the resource for this request.
         *     resource_: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   deploymentManager.deployments.setIamPolicy(request, function(err, response) {
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
         * @alias deploymentmanager.deployments.setIamPolicy
         * @memberOf! deploymentmanager(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {deploymentmanager(v2).Policy} params.resource Request body data
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
                    url: 'https://www.googleapis.com/deploymentmanager/v2/projects/{project}/global/deployments/{resource}/setIamPolicy',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'resource'],
                pathParams: ['project', 'resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * deploymentmanager.deployments.stop
         *
         * @desc Stops an ongoing operation. This does not roll back any work that has already been completed, but prevents any new work from being started.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud Deployment Manager API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/deploymentmanager
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
         * var deploymentManager = google.deploymentmanager('v2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The project ID for this request.
         *     project: '',  // TODO: Update placeholder value.
         *
         *     // The name of the deployment for this request.
         *     deployment: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   deploymentManager.deployments.stop(request, function(err, response) {
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
         * @alias deploymentmanager.deployments.stop
         * @memberOf! deploymentmanager(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.deployment The name of the deployment for this request.
         * @param {string} params.project The project ID for this request.
         * @param {deploymentmanager(v2).DeploymentsStopRequest} params.resource Request body data
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
                    url: 'https://www.googleapis.com/deploymentmanager/v2/projects/{project}/global/deployments/{deployment}/stop',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'deployment'],
                pathParams: ['deployment', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * deploymentmanager.deployments.testIamPermissions
         *
         * @desc Returns permissions that a caller has on the specified resource.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud Deployment Manager API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/deploymentmanager
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
         * var deploymentManager = google.deploymentmanager('v2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Project ID for this request.
         *     project: '',  // TODO: Update placeholder value.
         *
         *     // Name of the resource for this request.
         *     resource_: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   deploymentManager.deployments.testIamPermissions(request, function(err, response) {
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
         * @alias deploymentmanager.deployments.testIamPermissions
         * @memberOf! deploymentmanager(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {deploymentmanager(v2).TestPermissionsRequest} params.resource Request body data
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
                    url: 'https://www.googleapis.com/deploymentmanager/v2/projects/{project}/global/deployments/{resource}/testIamPermissions',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'resource'],
                pathParams: ['project', 'resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * deploymentmanager.deployments.update
         *
         * @desc Updates a deployment and all of the resources described by the deployment manifest.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud Deployment Manager API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/deploymentmanager
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
         * var deploymentManager = google.deploymentmanager('v2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The project ID for this request.
         *     project: '',  // TODO: Update placeholder value.
         *
         *     // The name of the deployment for this request.
         *     deployment: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body. All existing properties
         *       // will be replaced.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   deploymentManager.deployments.update(request, function(err, response) {
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
         * @alias deploymentmanager.deployments.update
         * @memberOf! deploymentmanager(v2)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.createPolicy Sets the policy to use for creating new resources.
         * @param {string=} params.deletePolicy Sets the policy to use for deleting resources.
         * @param {string} params.deployment The name of the deployment for this request.
         * @param {boolean=} params.preview If set to true, updates the deployment and creates and updates the "shell" resources but does not actually alter or instantiate these resources. This allows you to preview what your deployment will look like. You can use this intent to preview how an update would affect your deployment. You must provide a target.config with a configuration if this is set to true. After previewing a deployment, you can deploy your resources by making a request with the update() or you can cancelPreview() to remove the preview altogether. Note that the deployment will still exist after you cancel the preview and you must separately delete this deployment if you want to remove it.
         * @param {string} params.project The project ID for this request.
         * @param {deploymentmanager(v2).Deployment} params.resource Request body data
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
                    url: 'https://www.googleapis.com/deploymentmanager/v2/projects/{project}/global/deployments/{deployment}',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['project', 'deployment'],
                pathParams: ['deployment', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.manifests = {
        /**
         * deploymentmanager.manifests.get
         *
         * @desc Gets information about a specific manifest.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud Deployment Manager API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/deploymentmanager
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
         * var deploymentManager = google.deploymentmanager('v2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The project ID for this request.
         *     project: '',  // TODO: Update placeholder value.
         *
         *     // The name of the deployment for this request.
         *     deployment: '',  // TODO: Update placeholder value.
         *
         *     // The name of the manifest for this request.
         *     manifest: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   deploymentManager.manifests.get(request, function(err, response) {
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
         * @alias deploymentmanager.manifests.get
         * @memberOf! deploymentmanager(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.deployment The name of the deployment for this request.
         * @param {string} params.manifest The name of the manifest for this request.
         * @param {string} params.project The project ID for this request.
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
                    url: 'https://www.googleapis.com/deploymentmanager/v2/projects/{project}/global/deployments/{deployment}/manifests/{manifest}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'deployment', 'manifest'],
                pathParams: ['deployment', 'manifest', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * deploymentmanager.manifests.list
         *
         * @desc Lists all manifests for a given deployment.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud Deployment Manager API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/deploymentmanager
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
         * var deploymentManager = google.deploymentmanager('v2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The project ID for this request.
         *     project: '',  // TODO: Update placeholder value.
         *
         *     // The name of the deployment for this request.
         *     deployment: '',  // TODO: Update placeholder value.
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
         *     var manifestsPage = response['manifests'];
         *     if (!manifestsPage) {
         *       return;
         *     }
         *     for (var i = 0; i < manifestsPage.length; i++) {
         *       // TODO: Change code below to process each resource in `manifestsPage`:
         *       console.log(JSON.stringify(manifestsPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.pageToken = response.nextPageToken;
         *       deploymentManager.manifests.list(request, handlePage);
         *     }
         *   };
         *
         *   deploymentManager.manifests.list(request, handlePage);
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
         * @alias deploymentmanager.manifests.list
         * @memberOf! deploymentmanager(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.deployment The name of the deployment for this request.
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project The project ID for this request.
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
                    url: 'https://www.googleapis.com/deploymentmanager/v2/projects/{project}/global/deployments/{deployment}/manifests',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'deployment'],
                pathParams: ['deployment', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.operations = {
        /**
         * deploymentmanager.operations.get
         *
         * @desc Gets information about a specific operation.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud Deployment Manager API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/deploymentmanager
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
         * var deploymentManager = google.deploymentmanager('v2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The project ID for this request.
         *     project: '',  // TODO: Update placeholder value.
         *
         *     // The name of the operation for this request.
         *     operation: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   deploymentManager.operations.get(request, function(err, response) {
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
         * @alias deploymentmanager.operations.get
         * @memberOf! deploymentmanager(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.operation The name of the operation for this request.
         * @param {string} params.project The project ID for this request.
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
                    url: 'https://www.googleapis.com/deploymentmanager/v2/projects/{project}/global/operations/{operation}',
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
         * deploymentmanager.operations.list
         *
         * @desc Lists all operations for a project.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud Deployment Manager API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/deploymentmanager
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
         * var deploymentManager = google.deploymentmanager('v2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The project ID for this request.
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
         *       deploymentManager.operations.list(request, handlePage);
         *     }
         *   };
         *
         *   deploymentManager.operations.list(request, handlePage);
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
         * @alias deploymentmanager.operations.list
         * @memberOf! deploymentmanager(v2)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project The project ID for this request.
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
                    url: 'https://www.googleapis.com/deploymentmanager/v2/projects/{project}/global/operations',
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
    self.resources = {
        /**
         * deploymentmanager.resources.get
         *
         * @desc Gets information about a single resource.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud Deployment Manager API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/deploymentmanager
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
         * var deploymentManager = google.deploymentmanager('v2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The project ID for this request.
         *     project: '',  // TODO: Update placeholder value.
         *
         *     // The name of the deployment for this request.
         *     deployment: '',  // TODO: Update placeholder value.
         *
         *     // The name of the resource for this request.
         *     resource_: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   deploymentManager.resources.get(request, function(err, response) {
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
         * @alias deploymentmanager.resources.get
         * @memberOf! deploymentmanager(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.deployment The name of the deployment for this request.
         * @param {string} params.project The project ID for this request.
         * @param {string} params.resource_ The name of the resource for this request.
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
                    url: 'https://www.googleapis.com/deploymentmanager/v2/projects/{project}/global/deployments/{deployment}/resources/{resource}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'deployment', 'resource'],
                pathParams: ['deployment', 'project', 'resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * deploymentmanager.resources.list
         *
         * @desc Lists all resources in a given deployment.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud Deployment Manager API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/deploymentmanager
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
         * var deploymentManager = google.deploymentmanager('v2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The project ID for this request.
         *     project: '',  // TODO: Update placeholder value.
         *
         *     // The name of the deployment for this request.
         *     deployment: '',  // TODO: Update placeholder value.
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
         *     var resourcesPage = response['resources'];
         *     if (!resourcesPage) {
         *       return;
         *     }
         *     for (var i = 0; i < resourcesPage.length; i++) {
         *       // TODO: Change code below to process each resource in `resourcesPage`:
         *       console.log(JSON.stringify(resourcesPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.pageToken = response.nextPageToken;
         *       deploymentManager.resources.list(request, handlePage);
         *     }
         *   };
         *
         *   deploymentManager.resources.list(request, handlePage);
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
         * @alias deploymentmanager.resources.list
         * @memberOf! deploymentmanager(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.deployment The name of the deployment for this request.
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project The project ID for this request.
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
                    url: 'https://www.googleapis.com/deploymentmanager/v2/projects/{project}/global/deployments/{deployment}/resources',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'deployment'],
                pathParams: ['deployment', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.types = {
        /**
         * deploymentmanager.types.list
         *
         * @desc Lists all resource types for Deployment Manager.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud Deployment Manager API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/deploymentmanager
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
         * var deploymentManager = google.deploymentmanager('v2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The project ID for this request.
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
         *     var typesPage = response['types'];
         *     if (!typesPage) {
         *       return;
         *     }
         *     for (var i = 0; i < typesPage.length; i++) {
         *       // TODO: Change code below to process each resource in `typesPage`:
         *       console.log(JSON.stringify(typesPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.pageToken = response.nextPageToken;
         *       deploymentManager.types.list(request, handlePage);
         *     }
         *   };
         *
         *   deploymentManager.types.list(request, handlePage);
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
         * @alias deploymentmanager.types.list
         * @memberOf! deploymentmanager(v2)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project The project ID for this request.
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
                    url: 'https://www.googleapis.com/deploymentmanager/v2/projects/{project}/global/types',
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
}
module.exports = Deploymentmanager;
//# sourceMappingURL=v2.js.map