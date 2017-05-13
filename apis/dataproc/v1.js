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
 * Google Cloud Dataproc API
 *
 * Manages Hadoop-based clusters and jobs on Google Cloud Platform.
 *
 * @example
 * const google = require('googleapis');
 * const dataproc = google.dataproc('v1');
 *
 * @namespace dataproc
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Dataproc
 */
function Dataproc(options) {
    const self = this;
    self._options = options || {};
    self.projects = {
        regions: {
            clusters: {
                /**
                 * dataproc.projects.regions.clusters.patch
                 *
                 * @desc Updates a cluster in a project.
                 *
                 * @example
                 * // BEFORE RUNNING:
                 * // ---------------
                 * // 1. If not already done, enable the Google Cloud Dataproc API
                 * //    and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/dataproc
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
                 * var dataproc = google.dataproc('v1');
                 *
                 * authorize(function(authClient) {
                 *   var request = {
                 *     // [Required] The ID of the Google Cloud Platform project the cluster belongs to.
                 *     projectId: '',  // TODO: Update placeholder value.
                 *
                 *     // [Required] The Cloud Dataproc region in which to handle the request.
                 *     region: '',  // TODO: Update placeholder value.
                 *
                 *     // [Required] The cluster name.
                 *     clusterName: '',  // TODO: Update placeholder value.
                 *
                 *     resource: {
                 *       // TODO: Add desired properties to the request body. Only these properties
                 *       // will be changed.
                 *     },
                 *
                 *     auth: authClient
                 *   };
                 *
                 *   dataproc.projects.regions.clusters.patch(request, function(err, response) {
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
                 * @alias dataproc.projects.regions.clusters.patch
                 * @memberOf! dataproc(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.projectId Required. The ID of the Google Cloud Platform project the cluster belongs to.
                 * @param {string} params.region Required. The Cloud Dataproc region in which to handle the request.
                 * @param {string=} params.updateMask Required. Specifies the path, relative to Cluster, of the field to update. For example, to change the number of workers in a cluster to 5, the update_mask parameter would be specified as config.worker_config.num_instances, and the PATCH request body would specify the new value, as follows: {   "config":{     "workerConfig":{       "numInstances":"5"     }   } } Similarly, to change the number of preemptible workers in a cluster to 5, the update_mask parameter would be config.secondary_worker_config.num_instances, and the PATCH request body would be set as follows: {   "config":{     "secondaryWorkerConfig":{       "numInstances":"5"     }   } } <strong>Note:</strong> Currently, only the following fields can be updated:<table>  <tbody>  <tr>  <td><strong>Mask</strong></td>  <td><strong>Purpose</strong></td>  </tr>  <tr>  <td><strong><em>labels</em></strong></td>  <td>Update labels</td>  </tr>  <tr>  <td><strong><em>config.worker_config.num_instances</em></strong></td>  <td>Resize primary worker group</td>  </tr>  <tr>  <td><strong><em>config.secondary_worker_config.num_instances</em></strong></td>  <td>Resize secondary worker group</td>  </tr>  </tbody>  </table>
                 * @param {string} params.clusterName Required. The cluster name.
                 * @param {dataproc(v1).Cluster} params.resource Request body data
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
                            url: 'https://dataproc.googleapis.com/v1/projects/{projectId}/regions/{region}/clusters/{clusterName}',
                            method: 'PATCH'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'region', 'clusterName'],
                        pathParams: ['projectId', 'region', 'clusterName'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * dataproc.projects.regions.clusters.get
                 *
                 * @desc Gets the resource representation for a cluster in a project.
                 *
                 * @example
                 * // BEFORE RUNNING:
                 * // ---------------
                 * // 1. If not already done, enable the Google Cloud Dataproc API
                 * //    and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/dataproc
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
                 * var dataproc = google.dataproc('v1');
                 *
                 * authorize(function(authClient) {
                 *   var request = {
                 *     // [Required] The ID of the Google Cloud Platform project that the cluster belongs to.
                 *     projectId: '',  // TODO: Update placeholder value.
                 *
                 *     // [Required] The Cloud Dataproc region in which to handle the request.
                 *     region: '',  // TODO: Update placeholder value.
                 *
                 *     // [Required] The cluster name.
                 *     clusterName: '',  // TODO: Update placeholder value.
                 *
                 *     auth: authClient
                 *   };
                 *
                 *   dataproc.projects.regions.clusters.get(request, function(err, response) {
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
                 * @alias dataproc.projects.regions.clusters.get
                 * @memberOf! dataproc(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.clusterName Required. The cluster name.
                 * @param {string} params.projectId Required. The ID of the Google Cloud Platform project that the cluster belongs to.
                 * @param {string} params.region Required. The Cloud Dataproc region in which to handle the request.
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
                            url: 'https://dataproc.googleapis.com/v1/projects/{projectId}/regions/{region}/clusters/{clusterName}',
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'region', 'clusterName'],
                        pathParams: ['clusterName', 'projectId', 'region'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * dataproc.projects.regions.clusters.diagnose
                 *
                 * @desc Gets cluster diagnostic information. After the operation completes, the Operation.response field contains DiagnoseClusterOutputLocation.
                 *
                 * @example
                 * // BEFORE RUNNING:
                 * // ---------------
                 * // 1. If not already done, enable the Google Cloud Dataproc API
                 * //    and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/dataproc
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
                 * var dataproc = google.dataproc('v1');
                 *
                 * authorize(function(authClient) {
                 *   var request = {
                 *     // [Required] The ID of the Google Cloud Platform project that the cluster belongs to.
                 *     projectId: '',  // TODO: Update placeholder value.
                 *
                 *     // [Required] The Cloud Dataproc region in which to handle the request.
                 *     region: '',  // TODO: Update placeholder value.
                 *
                 *     // [Required] The cluster name.
                 *     clusterName: '',  // TODO: Update placeholder value.
                 *
                 *     resource: {
                 *       // TODO: Add desired properties to the request body.
                 *     },
                 *
                 *     auth: authClient
                 *   };
                 *
                 *   dataproc.projects.regions.clusters.diagnose(request, function(err, response) {
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
                 * @alias dataproc.projects.regions.clusters.diagnose
                 * @memberOf! dataproc(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.region Required. The Cloud Dataproc region in which to handle the request.
                 * @param {string} params.clusterName Required. The cluster name.
                 * @param {string} params.projectId Required. The ID of the Google Cloud Platform project that the cluster belongs to.
                 * @param {dataproc(v1).DiagnoseClusterRequest} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                diagnose: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const parameters = {
                        options: Object.assign({
                            url: 'https://dataproc.googleapis.com/v1/projects/{projectId}/regions/{region}/clusters/{clusterName}:diagnose',
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'region', 'clusterName'],
                        pathParams: ['region', 'clusterName', 'projectId'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * dataproc.projects.regions.clusters.delete
                 *
                 * @desc Deletes a cluster in a project.
                 *
                 * @example
                 * // BEFORE RUNNING:
                 * // ---------------
                 * // 1. If not already done, enable the Google Cloud Dataproc API
                 * //    and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/dataproc
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
                 * var dataproc = google.dataproc('v1');
                 *
                 * authorize(function(authClient) {
                 *   var request = {
                 *     // [Required] The ID of the Google Cloud Platform project that the cluster belongs to.
                 *     projectId: '',  // TODO: Update placeholder value.
                 *
                 *     // [Required] The Cloud Dataproc region in which to handle the request.
                 *     region: '',  // TODO: Update placeholder value.
                 *
                 *     // [Required] The cluster name.
                 *     clusterName: '',  // TODO: Update placeholder value.
                 *
                 *     auth: authClient
                 *   };
                 *
                 *   dataproc.projects.regions.clusters.delete(request, function(err, response) {
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
                 * @alias dataproc.projects.regions.clusters.delete
                 * @memberOf! dataproc(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.region Required. The Cloud Dataproc region in which to handle the request.
                 * @param {string} params.clusterName Required. The cluster name.
                 * @param {string} params.projectId Required. The ID of the Google Cloud Platform project that the cluster belongs to.
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
                            url: 'https://dataproc.googleapis.com/v1/projects/{projectId}/regions/{region}/clusters/{clusterName}',
                            method: 'DELETE'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'region', 'clusterName'],
                        pathParams: ['region', 'clusterName', 'projectId'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * dataproc.projects.regions.clusters.list
                 *
                 * @desc Lists all regions/{region}/clusters in a project.
                 *
                 * @example
                 * // BEFORE RUNNING:
                 * // ---------------
                 * // 1. If not already done, enable the Google Cloud Dataproc API
                 * //    and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/dataproc
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
                 * var dataproc = google.dataproc('v1');
                 *
                 * authorize(function(authClient) {
                 *   var request = {
                 *     // [Required] The ID of the Google Cloud Platform project that the cluster belongs to.
                 *     projectId: '',  // TODO: Update placeholder value.
                 *
                 *     // [Required] The Cloud Dataproc region in which to handle the request.
                 *     region: '',  // TODO: Update placeholder value.
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
                 *     var clustersPage = response['clusters'];
                 *     if (!clustersPage) {
                 *       return;
                 *     }
                 *     for (var i = 0; i < clustersPage.length; i++) {
                 *       // TODO: Change code below to process each resource in `clustersPage`:
                 *       console.log(JSON.stringify(clustersPage[i], null, 2));
                 *     }
                 *
                 *     if (response.nextPageToken) {
                 *       request.pageToken = response.nextPageToken;
                 *       dataproc.projects.regions.clusters.list(request, handlePage);
                 *     }
                 *   };
                 *
                 *   dataproc.projects.regions.clusters.list(request, handlePage);
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
                 * @alias dataproc.projects.regions.clusters.list
                 * @memberOf! dataproc(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string=} params.pageToken Optional. The standard List page token.
                 * @param {integer=} params.pageSize Optional. The standard List page size.
                 * @param {string} params.projectId Required. The ID of the Google Cloud Platform project that the cluster belongs to.
                 * @param {string} params.region Required. The Cloud Dataproc region in which to handle the request.
                 * @param {string=} params.filter Optional. A filter constraining the clusters to list. Filters are case-sensitive and have the following syntax:field = value AND field = value ...where field is one of status.state, clusterName, or labels.[KEY], and [KEY] is a label key. value can be * to match all values. status.state can be one of the following: ACTIVE, INACTIVE, CREATING, RUNNING, ERROR, DELETING, or UPDATING. ACTIVE contains the CREATING, UPDATING, and RUNNING states. INACTIVE contains the DELETING and ERROR states. clusterName is the name of the cluster provided at creation time. Only the logical AND operator is supported; space-separated items are treated as having an implicit AND operator.Example filter:status.state = ACTIVE AND clusterName = mycluster AND labels.env = staging AND labels.starred = *
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
                            url: 'https://dataproc.googleapis.com/v1/projects/{projectId}/regions/{region}/clusters',
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'region'],
                        pathParams: ['projectId', 'region'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * dataproc.projects.regions.clusters.create
                 *
                 * @desc Creates a cluster in a project.
                 *
                 * @example
                 * // BEFORE RUNNING:
                 * // ---------------
                 * // 1. If not already done, enable the Google Cloud Dataproc API
                 * //    and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/dataproc
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
                 * var dataproc = google.dataproc('v1');
                 *
                 * authorize(function(authClient) {
                 *   var request = {
                 *     // [Required] The ID of the Google Cloud Platform project that the cluster belongs to.
                 *     projectId: '',  // TODO: Update placeholder value.
                 *
                 *     // [Required] The Cloud Dataproc region in which to handle the request.
                 *     region: '',  // TODO: Update placeholder value.
                 *
                 *     resource: {
                 *       // TODO: Add desired properties to the request body.
                 *     },
                 *
                 *     auth: authClient
                 *   };
                 *
                 *   dataproc.projects.regions.clusters.create(request, function(err, response) {
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
                 * @alias dataproc.projects.regions.clusters.create
                 * @memberOf! dataproc(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.region Required. The Cloud Dataproc region in which to handle the request.
                 * @param {string} params.projectId Required. The ID of the Google Cloud Platform project that the cluster belongs to.
                 * @param {dataproc(v1).Cluster} params.resource Request body data
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
                            url: 'https://dataproc.googleapis.com/v1/projects/{projectId}/regions/{region}/clusters',
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'region'],
                        pathParams: ['region', 'projectId'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                }
            },
            operations: {
                /**
                 * dataproc.projects.regions.operations.cancel
                 *
                 * @desc Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
                 *
                 * @example
                 * // BEFORE RUNNING:
                 * // ---------------
                 * // 1. If not already done, enable the Google Cloud Dataproc API
                 * //    and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/dataproc
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
                 * var dataproc = google.dataproc('v1');
                 *
                 * authorize(function(authClient) {
                 *   var request = {
                 *     // The name of the operation resource to be cancelled.
                 *     name: '',  // TODO: Update placeholder value.
                 *
                 *     auth: authClient
                 *   };
                 *
                 *   dataproc.projects.regions.operations.cancel(request, function(err) {
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
                 * @alias dataproc.projects.regions.operations.cancel
                 * @memberOf! dataproc(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name The name of the operation resource to be cancelled.
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
                            url: 'https://dataproc.googleapis.com/v1/{name}:cancel',
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['name'],
                        pathParams: ['name'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * dataproc.projects.regions.operations.delete
                 *
                 * @desc Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED.
                 *
                 * @example
                 * // BEFORE RUNNING:
                 * // ---------------
                 * // 1. If not already done, enable the Google Cloud Dataproc API
                 * //    and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/dataproc
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
                 * var dataproc = google.dataproc('v1');
                 *
                 * authorize(function(authClient) {
                 *   var request = {
                 *     // The name of the operation resource to be deleted.
                 *     name: '',  // TODO: Update placeholder value.
                 *
                 *     auth: authClient
                 *   };
                 *
                 *   dataproc.projects.regions.operations.delete(request, function(err) {
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
                 * @alias dataproc.projects.regions.operations.delete
                 * @memberOf! dataproc(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name The name of the operation resource to be deleted.
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
                            url: 'https://dataproc.googleapis.com/v1/{name}',
                            method: 'DELETE'
                        }, options),
                        params: params,
                        requiredParams: ['name'],
                        pathParams: ['name'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * dataproc.projects.regions.operations.list
                 *
                 * @desc Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.NOTE: the name binding below allows API services to override the binding to use different resource name schemes, such as users/x/operations.
                 *
                 * @example
                 * // BEFORE RUNNING:
                 * // ---------------
                 * // 1. If not already done, enable the Google Cloud Dataproc API
                 * //    and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/dataproc
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
                 * var dataproc = google.dataproc('v1');
                 *
                 * authorize(function(authClient) {
                 *   var request = {
                 *     // The name of the operation collection.
                 *     name: '',  // TODO: Update placeholder value.
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
                 *       dataproc.projects.regions.operations.list(request, handlePage);
                 *     }
                 *   };
                 *
                 *   dataproc.projects.regions.operations.list(request, handlePage);
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
                 * @alias dataproc.projects.regions.operations.list
                 * @memberOf! dataproc(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string=} params.filter The standard list filter.
                 * @param {string} params.name The name of the operation collection.
                 * @param {string=} params.pageToken The standard list page token.
                 * @param {integer=} params.pageSize The standard list page size.
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
                            url: 'https://dataproc.googleapis.com/v1/{name}',
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['name'],
                        pathParams: ['name'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * dataproc.projects.regions.operations.get
                 *
                 * @desc Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
                 *
                 * @example
                 * // BEFORE RUNNING:
                 * // ---------------
                 * // 1. If not already done, enable the Google Cloud Dataproc API
                 * //    and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/dataproc
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
                 * var dataproc = google.dataproc('v1');
                 *
                 * authorize(function(authClient) {
                 *   var request = {
                 *     // The name of the operation resource.
                 *     name: '',  // TODO: Update placeholder value.
                 *
                 *     auth: authClient
                 *   };
                 *
                 *   dataproc.projects.regions.operations.get(request, function(err, response) {
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
                 * @alias dataproc.projects.regions.operations.get
                 * @memberOf! dataproc(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name The name of the operation resource.
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
                            url: 'https://dataproc.googleapis.com/v1/{name}',
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['name'],
                        pathParams: ['name'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                }
            },
            jobs: {
                /**
                 * dataproc.projects.regions.jobs.list
                 *
                 * @desc Lists regions/{region}/jobs in a project.
                 *
                 * @example
                 * // BEFORE RUNNING:
                 * // ---------------
                 * // 1. If not already done, enable the Google Cloud Dataproc API
                 * //    and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/dataproc
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
                 * var dataproc = google.dataproc('v1');
                 *
                 * authorize(function(authClient) {
                 *   var request = {
                 *     // [Required] The ID of the Google Cloud Platform project that the job belongs to.
                 *     projectId: '',  // TODO: Update placeholder value.
                 *
                 *     // [Required] The Cloud Dataproc region in which to handle the request.
                 *     region: '',  // TODO: Update placeholder value.
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
                 *     var jobsPage = response['jobs'];
                 *     if (!jobsPage) {
                 *       return;
                 *     }
                 *     for (var i = 0; i < jobsPage.length; i++) {
                 *       // TODO: Change code below to process each resource in `jobsPage`:
                 *       console.log(JSON.stringify(jobsPage[i], null, 2));
                 *     }
                 *
                 *     if (response.nextPageToken) {
                 *       request.pageToken = response.nextPageToken;
                 *       dataproc.projects.regions.jobs.list(request, handlePage);
                 *     }
                 *   };
                 *
                 *   dataproc.projects.regions.jobs.list(request, handlePage);
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
                 * @alias dataproc.projects.regions.jobs.list
                 * @memberOf! dataproc(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.region Required. The Cloud Dataproc region in which to handle the request.
                 * @param {string=} params.clusterName Optional. If set, the returned jobs list includes only jobs that were submitted to the named cluster.
                 * @param {string} params.projectId Required. The ID of the Google Cloud Platform project that the job belongs to.
                 * @param {string=} params.filter Optional. A filter constraining the jobs to list. Filters are case-sensitive and have the following syntax:field = value AND field = value ...where field is status.state or labels.[KEY], and [KEY] is a label key. value can be * to match all values. status.state can be either ACTIVE or INACTIVE. Only the logical AND operator is supported; space-separated items are treated as having an implicit AND operator.Example filter:status.state = ACTIVE AND labels.env = staging AND labels.starred = *
                 * @param {string=} params.jobStateMatcher Optional. Specifies enumerated categories of jobs to list (default = match ALL jobs).
                 * @param {string=} params.pageToken Optional. The page token, returned by a previous call, to request the next page of results.
                 * @param {integer=} params.pageSize Optional. The number of results to return in each response.
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
                            url: 'https://dataproc.googleapis.com/v1/projects/{projectId}/regions/{region}/jobs',
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'region'],
                        pathParams: ['region', 'projectId'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * dataproc.projects.regions.jobs.cancel
                 *
                 * @desc Starts a job cancellation request. To access the job resource after cancellation, call regions/{region}/jobs.list or regions/{region}/jobs.get.
                 *
                 * @example
                 * // BEFORE RUNNING:
                 * // ---------------
                 * // 1. If not already done, enable the Google Cloud Dataproc API
                 * //    and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/dataproc
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
                 * var dataproc = google.dataproc('v1');
                 *
                 * authorize(function(authClient) {
                 *   var request = {
                 *     // [Required] The ID of the Google Cloud Platform project that the job belongs to.
                 *     projectId: '',  // TODO: Update placeholder value.
                 *
                 *     // [Required] The Cloud Dataproc region in which to handle the request.
                 *     region: '',  // TODO: Update placeholder value.
                 *
                 *     // [Required] The job ID.
                 *     jobId: '',  // TODO: Update placeholder value.
                 *
                 *     resource: {
                 *       // TODO: Add desired properties to the request body.
                 *     },
                 *
                 *     auth: authClient
                 *   };
                 *
                 *   dataproc.projects.regions.jobs.cancel(request, function(err, response) {
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
                 * @alias dataproc.projects.regions.jobs.cancel
                 * @memberOf! dataproc(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.region Required. The Cloud Dataproc region in which to handle the request.
                 * @param {string} params.projectId Required. The ID of the Google Cloud Platform project that the job belongs to.
                 * @param {string} params.jobId Required. The job ID.
                 * @param {dataproc(v1).CancelJobRequest} params.resource Request body data
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
                            url: 'https://dataproc.googleapis.com/v1/projects/{projectId}/regions/{region}/jobs/{jobId}:cancel',
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'region', 'jobId'],
                        pathParams: ['region', 'projectId', 'jobId'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * dataproc.projects.regions.jobs.get
                 *
                 * @desc Gets the resource representation for a job in a project.
                 *
                 * @example
                 * // BEFORE RUNNING:
                 * // ---------------
                 * // 1. If not already done, enable the Google Cloud Dataproc API
                 * //    and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/dataproc
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
                 * var dataproc = google.dataproc('v1');
                 *
                 * authorize(function(authClient) {
                 *   var request = {
                 *     // [Required] The ID of the Google Cloud Platform project that the job belongs to.
                 *     projectId: '',  // TODO: Update placeholder value.
                 *
                 *     // [Required] The Cloud Dataproc region in which to handle the request.
                 *     region: '',  // TODO: Update placeholder value.
                 *
                 *     // [Required] The job ID.
                 *     jobId: '',  // TODO: Update placeholder value.
                 *
                 *     auth: authClient
                 *   };
                 *
                 *   dataproc.projects.regions.jobs.get(request, function(err, response) {
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
                 * @alias dataproc.projects.regions.jobs.get
                 * @memberOf! dataproc(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.region Required. The Cloud Dataproc region in which to handle the request.
                 * @param {string} params.projectId Required. The ID of the Google Cloud Platform project that the job belongs to.
                 * @param {string} params.jobId Required. The job ID.
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
                            url: 'https://dataproc.googleapis.com/v1/projects/{projectId}/regions/{region}/jobs/{jobId}',
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'region', 'jobId'],
                        pathParams: ['region', 'projectId', 'jobId'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * dataproc.projects.regions.jobs.patch
                 *
                 * @desc Updates a job in a project.
                 *
                 * @alias dataproc.projects.regions.jobs.patch
                 * @memberOf! dataproc(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.region Required. The Cloud Dataproc region in which to handle the request.
                 * @param {string=} params.updateMask Required. Specifies the path, relative to <code>Job</code>, of the field to update. For example, to update the labels of a Job the <code>update_mask</code> parameter would be specified as <code>labels</code>, and the PATCH request body would specify the new value. <strong>Note:</strong> Currently, <code>labels</code> is the only field that can be updated.
                 * @param {string} params.projectId Required. The ID of the Google Cloud Platform project that the job belongs to.
                 * @param {string} params.jobId Required. The job ID.
                 * @param {dataproc(v1).Job} params.resource Request body data
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
                            url: 'https://dataproc.googleapis.com/v1/projects/{projectId}/regions/{region}/jobs/{jobId}',
                            method: 'PATCH'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'region', 'jobId'],
                        pathParams: ['region', 'projectId', 'jobId'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * dataproc.projects.regions.jobs.submit
                 *
                 * @desc Submits a job to a cluster.
                 *
                 * @example
                 * // BEFORE RUNNING:
                 * // ---------------
                 * // 1. If not already done, enable the Google Cloud Dataproc API
                 * //    and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/dataproc
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
                 * var dataproc = google.dataproc('v1');
                 *
                 * authorize(function(authClient) {
                 *   var request = {
                 *     // [Required] The ID of the Google Cloud Platform project that the job belongs to.
                 *     projectId: '',  // TODO: Update placeholder value.
                 *
                 *     // [Required] The Cloud Dataproc region in which to handle the request.
                 *     region: '',  // TODO: Update placeholder value.
                 *
                 *     resource: {
                 *       // TODO: Add desired properties to the request body.
                 *     },
                 *
                 *     auth: authClient
                 *   };
                 *
                 *   dataproc.projects.regions.jobs.submit(request, function(err, response) {
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
                 * @alias dataproc.projects.regions.jobs.submit
                 * @memberOf! dataproc(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.projectId Required. The ID of the Google Cloud Platform project that the job belongs to.
                 * @param {string} params.region Required. The Cloud Dataproc region in which to handle the request.
                 * @param {dataproc(v1).SubmitJobRequest} params.resource Request body data
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
                            url: 'https://dataproc.googleapis.com/v1/projects/{projectId}/regions/{region}/jobs:submit',
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'region'],
                        pathParams: ['projectId', 'region'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * dataproc.projects.regions.jobs.delete
                 *
                 * @desc Deletes the job from the project. If the job is active, the delete fails, and the response returns FAILED_PRECONDITION.
                 *
                 * @example
                 * // BEFORE RUNNING:
                 * // ---------------
                 * // 1. If not already done, enable the Google Cloud Dataproc API
                 * //    and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/dataproc
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
                 * var dataproc = google.dataproc('v1');
                 *
                 * authorize(function(authClient) {
                 *   var request = {
                 *     // [Required] The ID of the Google Cloud Platform project that the job belongs to.
                 *     projectId: '',  // TODO: Update placeholder value.
                 *
                 *     // [Required] The Cloud Dataproc region in which to handle the request.
                 *     region: '',  // TODO: Update placeholder value.
                 *
                 *     // [Required] The job ID.
                 *     jobId: '',  // TODO: Update placeholder value.
                 *
                 *     auth: authClient
                 *   };
                 *
                 *   dataproc.projects.regions.jobs.delete(request, function(err) {
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
                 * @alias dataproc.projects.regions.jobs.delete
                 * @memberOf! dataproc(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.region Required. The Cloud Dataproc region in which to handle the request.
                 * @param {string} params.projectId Required. The ID of the Google Cloud Platform project that the job belongs to.
                 * @param {string} params.jobId Required. The job ID.
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
                            url: 'https://dataproc.googleapis.com/v1/projects/{projectId}/regions/{region}/jobs/{jobId}',
                            method: 'DELETE'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'region', 'jobId'],
                        pathParams: ['region', 'projectId', 'jobId'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                }
            }
        }
    };
}
module.exports = Dataproc;
//# sourceMappingURL=v1.js.map