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
 * const dataproc = google.dataproc('v1alpha1');
 *
 * @namespace dataproc
 * @type {Function}
 * @version v1alpha1
 * @variation v1alpha1
 * @param {object=} options Options for Dataproc
 */
function Dataproc(options) {
    const self = this;
    self._options = options || {};
    self.projects = {
        regions: {
            jobs: {
                /**
                 * dataproc.projects.regions.jobs.submit
                 *
                 * @desc Submits a job to a cluster.
                 *
                 * @example
                 * // PRE-REQUISITES:
                 * // ---------------
                 * // 1. If not already done, enable the Google Cloud Dataproc API and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/dataproc_component/quotas
                 * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
                 * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
                 * // 3. To install the client library and Application Default Credentials library, run:
                 * //    'npm install googleapis --save'
                 * var google = require('googleapis');
                 * var dataproc = google.dataproc('v1alpha1');
                 *
                 * google.auth.getApplicationDefault(function(err, authClient) {
                 *   if (err) {
                 *     console.log('Authentication failed because of ', err);
                 *     return;
                 *   }
                 *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
                 *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
                 *     authClient = authClient.createScoped(scopes);
                 *   }
                 *
                 *   var request = {
                 *     // TODO: Change placeholders below to appropriate parameter values for the 'submit' method:
                 *
                 *     // [Required] The ID of the Google Cloud Platform project that the job belongs to.
                 *     projectId: "",
                 *     // [Required] The Dataproc region in which to handle the request.
                 *     region: "",
                 *     resource: {},
                 *     // Auth client
                 *     auth: authClient
                 *   };
                 *
                 *   dataproc.projects.regions.jobs.submit(request, function(err, result) {
                 *     if (err) {
                 *       console.log(err);
                 *     } else {
                 *       console.log(result);
                 *     }
                 *   });
                 * });
                 *
                 * @alias dataproc.projects.regions.jobs.submit
                 * @memberOf! dataproc(v1alpha1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.region Required The Dataproc region in which to handle the request.
                 * @param {string} params.projectId Required The ID of the Google Cloud Platform project that the job belongs to.
                 * @param {dataproc(v1alpha1).SubmitJobRequest} params.resource Request body data
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
                            url: 'https://dataproc.googleapis.com/v1alpha1/projects/{projectId}/regions/{region}/jobs:submit',
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'region'],
                        pathParams: ['region', 'projectId'],
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
                 * // PRE-REQUISITES:
                 * // ---------------
                 * // 1. If not already done, enable the Google Cloud Dataproc API and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/dataproc_component/quotas
                 * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
                 * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
                 * // 3. To install the client library and Application Default Credentials library, run:
                 * //    'npm install googleapis --save'
                 * var google = require('googleapis');
                 * var dataproc = google.dataproc('v1alpha1');
                 *
                 * google.auth.getApplicationDefault(function(err, authClient) {
                 *   if (err) {
                 *     console.log('Authentication failed because of ', err);
                 *     return;
                 *   }
                 *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
                 *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
                 *     authClient = authClient.createScoped(scopes);
                 *   }
                 *
                 *   var request = {
                 *     // TODO: Change placeholders below to appropriate parameter values for the 'delete' method:
                 *
                 *     // [Required] The ID of the Google Cloud Platform project that the job belongs to.
                 *     projectId: "",
                 *     // [Required] The Dataproc region in which to handle the request.
                 *     region: "",
                 *     // [Required] The job ID.
                 *     jobId: "",
                 *     // Auth client
                 *     auth: authClient
                 *   };
                 *
                 *   dataproc.projects.regions.jobs.delete(request, function(err, result) {
                 *     if (err) {
                 *       console.log(err);
                 *     } else {
                 *       console.log(result);
                 *     }
                 *   });
                 * });
                 *
                 * @alias dataproc.projects.regions.jobs.delete
                 * @memberOf! dataproc(v1alpha1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.region Required The Dataproc region in which to handle the request.
                 * @param {string} params.projectId Required The ID of the Google Cloud Platform project that the job belongs to.
                 * @param {string} params.jobId Required The job ID.
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
                            url: 'https://dataproc.googleapis.com/v1alpha1/projects/{projectId}/regions/{region}/jobs/{jobId}',
                            method: 'DELETE'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'region', 'jobId'],
                        pathParams: ['region', 'projectId', 'jobId'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * dataproc.projects.regions.jobs.list
                 *
                 * @desc Lists regions/{region}/jobs in a project.
                 *
                 * @alias dataproc.projects.regions.jobs.list
                 * @memberOf! dataproc(v1alpha1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.projectId Required The ID of the Google Cloud Platform project that the job belongs to.
                 * @param {string} params.region Required The Dataproc region in which to handle the request.
                 * @param {dataproc(v1alpha1).ListJobsRequest} params.resource Request body data
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
                            url: 'https://dataproc.googleapis.com/v1alpha1/projects/{projectId}/regions/{region}/jobs:list',
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
                 * dataproc.projects.regions.jobs.cancel
                 *
                 * @desc Starts a job cancellation request. To access the job resource after cancellation, call regions/{region}/jobs:list or regions/{region}/jobs:get.
                 *
                 * @example
                 * // PRE-REQUISITES:
                 * // ---------------
                 * // 1. If not already done, enable the Google Cloud Dataproc API and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/dataproc_component/quotas
                 * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
                 * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
                 * // 3. To install the client library and Application Default Credentials library, run:
                 * //    'npm install googleapis --save'
                 * var google = require('googleapis');
                 * var dataproc = google.dataproc('v1alpha1');
                 *
                 * google.auth.getApplicationDefault(function(err, authClient) {
                 *   if (err) {
                 *     console.log('Authentication failed because of ', err);
                 *     return;
                 *   }
                 *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
                 *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
                 *     authClient = authClient.createScoped(scopes);
                 *   }
                 *
                 *   var request = {
                 *     // TODO: Change placeholders below to appropriate parameter values for the 'cancel' method:
                 *
                 *     // [Required] The ID of the Google Cloud Platform project that the job belongs to.
                 *     projectId: "",
                 *     // [Required] The Dataproc region in which to handle the request.
                 *     region: "",
                 *     // [Required] The job ID.
                 *     jobId: "",
                 *     resource: {},
                 *     // Auth client
                 *     auth: authClient
                 *   };
                 *
                 *   dataproc.projects.regions.jobs.cancel(request, function(err, result) {
                 *     if (err) {
                 *       console.log(err);
                 *     } else {
                 *       console.log(result);
                 *     }
                 *   });
                 * });
                 *
                 * @alias dataproc.projects.regions.jobs.cancel
                 * @memberOf! dataproc(v1alpha1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.projectId Required The ID of the Google Cloud Platform project that the job belongs to.
                 * @param {string} params.jobId Required The job ID.
                 * @param {string} params.region Required The Dataproc region in which to handle the request.
                 * @param {dataproc(v1alpha1).CancelJobRequest} params.resource Request body data
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
                            url: 'https://dataproc.googleapis.com/v1alpha1/projects/{projectId}/regions/{region}/jobs/{jobId}:cancel',
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'region', 'jobId'],
                        pathParams: ['projectId', 'jobId', 'region'],
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
                 * // PRE-REQUISITES:
                 * // ---------------
                 * // 1. If not already done, enable the Google Cloud Dataproc API and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/dataproc_component/quotas
                 * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
                 * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
                 * // 3. To install the client library and Application Default Credentials library, run:
                 * //    'npm install googleapis --save'
                 * var google = require('googleapis');
                 * var dataproc = google.dataproc('v1alpha1');
                 *
                 * google.auth.getApplicationDefault(function(err, authClient) {
                 *   if (err) {
                 *     console.log('Authentication failed because of ', err);
                 *     return;
                 *   }
                 *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
                 *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
                 *     authClient = authClient.createScoped(scopes);
                 *   }
                 *
                 *   var request = {
                 *     // TODO: Change placeholders below to appropriate parameter values for the 'get' method:
                 *
                 *     // [Required] The ID of the Google Cloud Platform project that the job belongs to.
                 *     projectId: "",
                 *     // [Required] The Dataproc region in which to handle the request.
                 *     region: "",
                 *     // [Required] The job ID.
                 *     jobId: "",
                 *     // Auth client
                 *     auth: authClient
                 *   };
                 *
                 *   dataproc.projects.regions.jobs.get(request, function(err, result) {
                 *     if (err) {
                 *       console.log(err);
                 *     } else {
                 *       console.log(result);
                 *     }
                 *   });
                 * });
                 *
                 * @alias dataproc.projects.regions.jobs.get
                 * @memberOf! dataproc(v1alpha1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.projectId Required The ID of the Google Cloud Platform project that the job belongs to.
                 * @param {string} params.jobId Required The job ID.
                 * @param {string} params.region Required The Dataproc region in which to handle the request.
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
                            url: 'https://dataproc.googleapis.com/v1alpha1/projects/{projectId}/regions/{region}/jobs/{jobId}',
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'region', 'jobId'],
                        pathParams: ['projectId', 'jobId', 'region'],
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
                 * @memberOf! dataproc(v1alpha1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.region Required The Dataproc region in which to handle the request.
                 * @param {string=} params.updateMask Required Specifies the path, relative to <code>Job</code>, of the field to update. For example, to update the labels of a Job the <code>update_mask</code> parameter would be specified as <code>labels</code>, and the PATCH request body would specify the new value. <strong>Note:</strong> Currently, <code>labels</code> is the only field that can be updated.
                 * @param {string} params.projectId Required The ID of the Google Cloud Platform project that the job belongs to.
                 * @param {string} params.jobId Required The job ID.
                 * @param {dataproc(v1alpha1).Job} params.resource Request body data
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
                            url: 'https://dataproc.googleapis.com/v1alpha1/projects/{projectId}/regions/{region}/jobs/{jobId}',
                            method: 'PATCH'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'region', 'jobId'],
                        pathParams: ['region', 'projectId', 'jobId'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                }
            },
            clusters: {
                /**
                 * dataproc.projects.regions.clusters.patch
                 *
                 * @desc Request to update a cluster in a project.
                 *
                 * @example
                 * // PRE-REQUISITES:
                 * // ---------------
                 * // 1. If not already done, enable the Google Cloud Dataproc API and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/dataproc_component/quotas
                 * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
                 * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
                 * // 3. To install the client library and Application Default Credentials library, run:
                 * //    'npm install googleapis --save'
                 * var google = require('googleapis');
                 * var dataproc = google.dataproc('v1alpha1');
                 *
                 * google.auth.getApplicationDefault(function(err, authClient) {
                 *   if (err) {
                 *     console.log('Authentication failed because of ', err);
                 *     return;
                 *   }
                 *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
                 *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
                 *     authClient = authClient.createScoped(scopes);
                 *   }
                 *
                 *   var request = {
                 *     // TODO: Change placeholders below to appropriate parameter values for the 'patch' method:
                 *
                 *     // [Required] The ID of the Google Cloud Platform project the cluster belongs to.
                 *     projectId: "",
                 *     // [Required] The Dataproc region in which to handle the request.
                 *     region: "",
                 *     // [Required] The cluster name.
                 *     clusterName: "",
                 *     resource: {},
                 *     // Auth client
                 *     auth: authClient
                 *   };
                 *
                 *   dataproc.projects.regions.clusters.patch(request, function(err, result) {
                 *     if (err) {
                 *       console.log(err);
                 *     } else {
                 *       console.log(result);
                 *     }
                 *   });
                 * });
                 *
                 * @alias dataproc.projects.regions.clusters.patch
                 * @memberOf! dataproc(v1alpha1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.projectId Required The ID of the Google Cloud Platform project the cluster belongs to.
                 * @param {string} params.region Required The Dataproc region in which to handle the request.
                 * @param {string=} params.updateMask Required Specifies the path, relative to <code>Cluster</code>, of the field to update. For example, to change the number of workers in a cluster to 5, the <code>update_mask</code> parameter would be specified as <code>"configuration.worker_configuration.num_instances,"</code> and the PATCH request body would specify the new value, as follows: {   "configuration":{     "workerConfiguration":{       "numInstances":"5"     }   } } <strong>Note:</strong> Currently, <code>configuration.worker_configuration.num_instances</code> is the only field that can be updated.
                 * @param {string} params.clusterName Required The cluster name.
                 * @param {dataproc(v1alpha1).Cluster} params.resource Request body data
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
                            url: 'https://dataproc.googleapis.com/v1alpha1/projects/{projectId}/regions/{region}/clusters/{clusterName}',
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
                 * @desc Request to get the resource representation for a cluster in a project.
                 *
                 * @example
                 * // PRE-REQUISITES:
                 * // ---------------
                 * // 1. If not already done, enable the Google Cloud Dataproc API and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/dataproc_component/quotas
                 * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
                 * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
                 * // 3. To install the client library and Application Default Credentials library, run:
                 * //    'npm install googleapis --save'
                 * var google = require('googleapis');
                 * var dataproc = google.dataproc('v1alpha1');
                 *
                 * google.auth.getApplicationDefault(function(err, authClient) {
                 *   if (err) {
                 *     console.log('Authentication failed because of ', err);
                 *     return;
                 *   }
                 *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
                 *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
                 *     authClient = authClient.createScoped(scopes);
                 *   }
                 *
                 *   var request = {
                 *     // TODO: Change placeholders below to appropriate parameter values for the 'get' method:
                 *
                 *     // [Required] The ID of the Google Cloud Platform project that the cluster belongs to.
                 *     projectId: "",
                 *     // [Required] The Dataproc region in which to handle the request.
                 *     region: "",
                 *     // [Required] The cluster name.
                 *     clusterName: "",
                 *     // Auth client
                 *     auth: authClient
                 *   };
                 *
                 *   dataproc.projects.regions.clusters.get(request, function(err, result) {
                 *     if (err) {
                 *       console.log(err);
                 *     } else {
                 *       console.log(result);
                 *     }
                 *   });
                 * });
                 *
                 * @alias dataproc.projects.regions.clusters.get
                 * @memberOf! dataproc(v1alpha1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.clusterName Required The cluster name.
                 * @param {string} params.projectId Required The ID of the Google Cloud Platform project that the cluster belongs to.
                 * @param {string} params.region Required The Dataproc region in which to handle the request.
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
                            url: 'https://dataproc.googleapis.com/v1alpha1/projects/{projectId}/regions/{region}/clusters/{clusterName}',
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
                 * dataproc.projects.regions.clusters.list
                 *
                 * @desc Request a list of all regions/{region}/clusters in a project.
                 *
                 * @example
                 * // PRE-REQUISITES:
                 * // ---------------
                 * // 1. If not already done, enable the Google Cloud Dataproc API and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/dataproc_component/quotas
                 * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
                 * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
                 * // 3. To install the client library and Application Default Credentials library, run:
                 * //    'npm install googleapis --save'
                 * var google = require('googleapis');
                 * var dataproc = google.dataproc('v1alpha1');
                 *
                 * google.auth.getApplicationDefault(function(err, authClient) {
                 *   if (err) {
                 *     console.log('Authentication failed because of ', err);
                 *     return;
                 *   }
                 *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
                 *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
                 *     authClient = authClient.createScoped(scopes);
                 *   }
                 *
                 *   var request = {
                 *     // TODO: Change placeholders below to appropriate parameter values for the 'list' method:
                 *
                 *     // [Required] The ID of the Google Cloud Platform project that the cluster belongs to.
                 *     projectId: "",
                 *     // [Required] The Dataproc region in which to handle the request.
                 *     region: "",
                 *     // Auth client
                 *     auth: authClient
                 *   };
                 *
                 *
                 *   var recur = function(err, result) {
                 *     if (err) {
                 *       console.log(err);
                 *     } else {
                 *       console.log(result);
                 *       if (result.nextPageToken) {
                 *         request.pageToken = result.nextPageToken;
                 *         dataproc.projects.regions.clusters.list(request, recur);
                 *       }
                 *     }
                 *   };
                 *
                 *   dataproc.projects.regions.clusters.list(request, recur);
                 * });
                 *
                 * @alias dataproc.projects.regions.clusters.list
                 * @memberOf! dataproc(v1alpha1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string=} params.pageToken The standard List page token.
                 * @param {integer=} params.pageSize The standard List page size.
                 * @param {string} params.projectId Required The ID of the Google Cloud Platform project that the cluster belongs to.
                 * @param {string} params.region Required The Dataproc region in which to handle the request.
                 * @param {string=} params.filter Optional A filter constraining which clusters to list. Valid filters contain label terms such as: labels.key1 = val1 AND (-labels.k2 = val2 OR labels.k3 = val3)
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
                            url: 'https://dataproc.googleapis.com/v1alpha1/projects/{projectId}/regions/{region}/clusters',
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
                 * @desc Request to create a cluster in a project.
                 *
                 * @example
                 * // PRE-REQUISITES:
                 * // ---------------
                 * // 1. If not already done, enable the Google Cloud Dataproc API and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/dataproc_component/quotas
                 * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
                 * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
                 * // 3. To install the client library and Application Default Credentials library, run:
                 * //    'npm install googleapis --save'
                 * var google = require('googleapis');
                 * var dataproc = google.dataproc('v1alpha1');
                 *
                 * google.auth.getApplicationDefault(function(err, authClient) {
                 *   if (err) {
                 *     console.log('Authentication failed because of ', err);
                 *     return;
                 *   }
                 *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
                 *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
                 *     authClient = authClient.createScoped(scopes);
                 *   }
                 *
                 *   var request = {
                 *     // TODO: Change placeholders below to appropriate parameter values for the 'create' method:
                 *
                 *     // [Required] The ID of the Google Cloud Platform project that the cluster belongs to.
                 *     projectId: "",
                 *     // [Required] The Dataproc region in which to handle the request.
                 *     region: "",
                 *     resource: {},
                 *     // Auth client
                 *     auth: authClient
                 *   };
                 *
                 *   dataproc.projects.regions.clusters.create(request, function(err, result) {
                 *     if (err) {
                 *       console.log(err);
                 *     } else {
                 *       console.log(result);
                 *     }
                 *   });
                 * });
                 *
                 * @alias dataproc.projects.regions.clusters.create
                 * @memberOf! dataproc(v1alpha1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.region Required The Dataproc region in which to handle the request.
                 * @param {string} params.projectId Required The ID of the Google Cloud Platform project that the cluster belongs to.
                 * @param {dataproc(v1alpha1).Cluster} params.resource Request body data
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
                            url: 'https://dataproc.googleapis.com/v1alpha1/projects/{projectId}/regions/{region}/clusters',
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'region'],
                        pathParams: ['region', 'projectId'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * dataproc.projects.regions.clusters.delete
                 *
                 * @desc Request to delete a cluster in a project.
                 *
                 * @example
                 * // PRE-REQUISITES:
                 * // ---------------
                 * // 1. If not already done, enable the Google Cloud Dataproc API and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/dataproc_component/quotas
                 * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
                 * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
                 * // 3. To install the client library and Application Default Credentials library, run:
                 * //    'npm install googleapis --save'
                 * var google = require('googleapis');
                 * var dataproc = google.dataproc('v1alpha1');
                 *
                 * google.auth.getApplicationDefault(function(err, authClient) {
                 *   if (err) {
                 *     console.log('Authentication failed because of ', err);
                 *     return;
                 *   }
                 *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
                 *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
                 *     authClient = authClient.createScoped(scopes);
                 *   }
                 *
                 *   var request = {
                 *     // TODO: Change placeholders below to appropriate parameter values for the 'delete' method:
                 *
                 *     // [Required] The ID of the Google Cloud Platform project that the cluster belongs to.
                 *     projectId: "",
                 *     // [Required] The Dataproc region in which to handle the request.
                 *     region: "",
                 *     // [Required] The cluster name.
                 *     clusterName: "",
                 *     // Auth client
                 *     auth: authClient
                 *   };
                 *
                 *   dataproc.projects.regions.clusters.delete(request, function(err, result) {
                 *     if (err) {
                 *       console.log(err);
                 *     } else {
                 *       console.log(result);
                 *     }
                 *   });
                 * });
                 *
                 * @alias dataproc.projects.regions.clusters.delete
                 * @memberOf! dataproc(v1alpha1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.region Required The Dataproc region in which to handle the request.
                 * @param {string} params.clusterName Required The cluster name.
                 * @param {string} params.projectId Required The ID of the Google Cloud Platform project that the cluster belongs to.
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
                            url: 'https://dataproc.googleapis.com/v1alpha1/projects/{projectId}/regions/{region}/clusters/{clusterName}',
                            method: 'DELETE'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'region', 'clusterName'],
                        pathParams: ['region', 'clusterName', 'projectId'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                }
            }
        }
    };
    self.operations = {
        /**
         * dataproc.operations.cancel
         *
         * @desc Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients may use Operations.GetOperation or other methods to check whether the cancellation succeeded or the operation completed despite cancellation.
         *
         * @example
         * // PRE-REQUISITES:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud Dataproc API and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dataproc_component/quotas
         * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
         * // 3. To install the client library and Application Default Credentials library, run:
         * //    'npm install googleapis --save'
         * var google = require('googleapis');
         * var dataproc = google.dataproc('v1alpha1');
         *
         * google.auth.getApplicationDefault(function(err, authClient) {
         *   if (err) {
         *     console.log('Authentication failed because of ', err);
         *     return;
         *   }
         *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *     authClient = authClient.createScoped(scopes);
         *   }
         *
         *   var request = {
         *     // TODO: Change placeholders below to appropriate parameter values for the 'cancel' method:
         *
         *     // The name of the operation resource to be cancelled.
         *     name: "",
         *     resource: {},
         *     // Auth client
         *     auth: authClient
         *   };
         *
         *   dataproc.operations.cancel(request, function(err, result) {
         *     if (err) {
         *       console.log(err);
         *     } else {
         *       console.log(result);
         *     }
         *   });
         * });
         *
         * @alias dataproc.operations.cancel
         * @memberOf! dataproc(v1alpha1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the operation resource to be cancelled.
         * @param {dataproc(v1alpha1).CancelOperationRequest} params.resource Request body data
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
                    url: 'https://dataproc.googleapis.com/v1alpha1/{name}:cancel',
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
         * dataproc.operations.delete
         *
         * @desc Deletes a long-running operation. It indicates the client is no longer interested in the operation result. It does not cancel the operation.
         *
         * @example
         * // PRE-REQUISITES:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud Dataproc API and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dataproc_component/quotas
         * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
         * // 3. To install the client library and Application Default Credentials library, run:
         * //    'npm install googleapis --save'
         * var google = require('googleapis');
         * var dataproc = google.dataproc('v1alpha1');
         *
         * google.auth.getApplicationDefault(function(err, authClient) {
         *   if (err) {
         *     console.log('Authentication failed because of ', err);
         *     return;
         *   }
         *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *     authClient = authClient.createScoped(scopes);
         *   }
         *
         *   var request = {
         *     // TODO: Change placeholders below to appropriate parameter values for the 'delete' method:
         *
         *     // The name of the operation resource to be deleted.
         *     name: "",
         *     // Auth client
         *     auth: authClient
         *   };
         *
         *   dataproc.operations.delete(request, function(err, result) {
         *     if (err) {
         *       console.log(err);
         *     } else {
         *       console.log(result);
         *     }
         *   });
         * });
         *
         * @alias dataproc.operations.delete
         * @memberOf! dataproc(v1alpha1)
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
                    url: 'https://dataproc.googleapis.com/v1alpha1/{name}',
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
         * dataproc.operations.get
         *
         * @desc Gets the latest state of a long-running operation. Clients may use this method to poll the operation result at intervals as recommended by the API service.
         *
         * @example
         * // PRE-REQUISITES:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud Dataproc API and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dataproc_component/quotas
         * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
         * // 3. To install the client library and Application Default Credentials library, run:
         * //    'npm install googleapis --save'
         * var google = require('googleapis');
         * var dataproc = google.dataproc('v1alpha1');
         *
         * google.auth.getApplicationDefault(function(err, authClient) {
         *   if (err) {
         *     console.log('Authentication failed because of ', err);
         *     return;
         *   }
         *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *     authClient = authClient.createScoped(scopes);
         *   }
         *
         *   var request = {
         *     // TODO: Change placeholders below to appropriate parameter values for the 'get' method:
         *
         *     // The operation resource name.
         *     name: "",
         *     // Auth client
         *     auth: authClient
         *   };
         *
         *   dataproc.operations.get(request, function(err, result) {
         *     if (err) {
         *       console.log(err);
         *     } else {
         *       console.log(result);
         *     }
         *   });
         * });
         *
         * @alias dataproc.operations.get
         * @memberOf! dataproc(v1alpha1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The operation resource name.
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
                    url: 'https://dataproc.googleapis.com/v1alpha1/{name}',
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
         * dataproc.operations.list
         *
         * @desc Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED.
         *
         * @example
         * // PRE-REQUISITES:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud Dataproc API and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dataproc_component/quotas
         * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
         * // 3. To install the client library and Application Default Credentials library, run:
         * //    'npm install googleapis --save'
         * var google = require('googleapis');
         * var dataproc = google.dataproc('v1alpha1');
         *
         * google.auth.getApplicationDefault(function(err, authClient) {
         *   if (err) {
         *     console.log('Authentication failed because of ', err);
         *     return;
         *   }
         *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *     authClient = authClient.createScoped(scopes);
         *   }
         *
         *   var request = {
         *     // TODO: Change placeholders below to appropriate parameter values for the 'list' method:
         *
         *     // The operation collection name.
         *     name: "",
         *     // Auth client
         *     auth: authClient
         *   };
         *
         *
         *   var recur = function(err, result) {
         *     if (err) {
         *       console.log(err);
         *     } else {
         *       console.log(result);
         *       if (result.nextPageToken) {
         *         request.pageToken = result.nextPageToken;
         *         dataproc.operations.list(request, recur);
         *       }
         *     }
         *   };
         *
         *   dataproc.operations.list(request, recur);
         * });
         *
         * @alias dataproc.operations.list
         * @memberOf! dataproc(v1alpha1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The operation collection name.
         * @param {string=} params.pageToken The standard List page token.
         * @param {integer=} params.pageSize The standard List page size.
         * @param {string=} params.filter Required A JSON object that contains filters for the list operation, in the format {"key1":"value1","key2":"value2", ..., }. Possible keys include project_id, cluster_name, and operation_state_matcher.If project_id is set, requests the list of operations that belong to the specified Google Cloud Platform project ID. This key is required.If cluster_name is set, requests the list of operations that were submitted to the specified cluster name. This key is optional.If operation_state_matcher is set, requests the list of operations that match one of the following status options: ALL, ACTIVE, or NON_ACTIVE.
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
                    url: 'https://dataproc.googleapis.com/v1alpha1/{name}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['name'],
                pathParams: ['name'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
}
module.exports = Dataproc;
//# sourceMappingURL=v1alpha1.js.map