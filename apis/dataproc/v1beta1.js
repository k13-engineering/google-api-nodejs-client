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
 * const dataproc = google.dataproc('v1beta1');
 *
 * @namespace dataproc
 * @type {Function}
 * @version v1beta1
 * @variation v1beta1
 * @param {object=} options Options for Dataproc
 */
function Dataproc(options) {
    const self = this;
    self._options = options || {};
    self.operations = {
        /**
         * dataproc.operations.cancel
         *
         * @desc Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use operations.get or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation.
         *
         * @alias dataproc.operations.cancel
         * @memberOf! dataproc(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the operation resource to be cancelled.
         * @param {dataproc(v1beta1).CancelOperationRequest} params.resource Request body data
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
                    url: 'https://dataproc.googleapis.com/v1beta1/{name}:cancel',
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
         * @desc Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED.
         *
         * @alias dataproc.operations.delete
         * @memberOf! dataproc(v1beta1)
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
                    url: 'https://dataproc.googleapis.com/v1beta1/{name}',
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
         * @desc Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
         *
         * @alias dataproc.operations.get
         * @memberOf! dataproc(v1beta1)
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
                    url: 'https://dataproc.googleapis.com/v1beta1/{name}',
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
         * @desc Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.NOTE: the name binding below allows API services to override the binding to use different resource name schemes, such as users/x/operations.
         *
         * @alias dataproc.operations.list
         * @memberOf! dataproc(v1beta1)
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
                    url: 'https://dataproc.googleapis.com/v1beta1/{name}',
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
    self.projects = {
        clusters: {
            /**
             * dataproc.projects.clusters.delete
             *
             * @desc Deletes a cluster in a project.
             *
             * @alias dataproc.projects.clusters.delete
             * @memberOf! dataproc(v1beta1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.projectId Required The ID of the Google Cloud Platform project that the cluster belongs to.
             * @param {string} params.clusterName Required The cluster name.
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
                        url: 'https://dataproc.googleapis.com/v1beta1/projects/{projectId}/clusters/{clusterName}',
                        method: 'DELETE'
                    }, options),
                    params: params,
                    requiredParams: ['projectId', 'clusterName'],
                    pathParams: ['projectId', 'clusterName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * dataproc.projects.clusters.diagnose
             *
             * @desc Gets cluster diagnostic information. After the operation completes, the Operation.response field contains DiagnoseClusterOutputLocation.
             *
             * @alias dataproc.projects.clusters.diagnose
             * @memberOf! dataproc(v1beta1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.clusterName Required The cluster name.
             * @param {string} params.projectId Required The ID of the Google Cloud Platform project that the cluster belongs to.
             * @param {dataproc(v1beta1).DiagnoseClusterRequest} params.resource Request body data
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
                        url: 'https://dataproc.googleapis.com/v1beta1/projects/{projectId}/clusters/{clusterName}:diagnose',
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['projectId', 'clusterName'],
                    pathParams: ['clusterName', 'projectId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * dataproc.projects.clusters.list
             *
             * @desc Lists all clusters in a project.
             *
             * @alias dataproc.projects.clusters.list
             * @memberOf! dataproc(v1beta1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.projectId Required The ID of the Google Cloud Platform project that the cluster belongs to.
             * @param {string=} params.filter Optional A filter constraining which clusters to list. Valid filters contain label terms such as: labels.key1 = val1 AND (-labels.k2 = val2 OR labels.k3 = val3)
             * @param {string=} params.pageToken The standard List page token.
             * @param {integer=} params.pageSize The standard List page size.
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
                        url: 'https://dataproc.googleapis.com/v1beta1/projects/{projectId}/clusters',
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['projectId'],
                    pathParams: ['projectId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * dataproc.projects.clusters.create
             *
             * @desc Creates a cluster in a project.
             *
             * @alias dataproc.projects.clusters.create
             * @memberOf! dataproc(v1beta1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.projectId Required The ID of the Google Cloud Platform project that the cluster belongs to.
             * @param {dataproc(v1beta1).Cluster} params.resource Request body data
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
                        url: 'https://dataproc.googleapis.com/v1beta1/projects/{projectId}/clusters',
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['projectId'],
                    pathParams: ['projectId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * dataproc.projects.clusters.patch
             *
             * @desc Updates a cluster in a project.
             *
             * @alias dataproc.projects.clusters.patch
             * @memberOf! dataproc(v1beta1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.clusterName Required The cluster name.
             * @param {string} params.projectId Required The ID of the Google Cloud Platform project the cluster belongs to.
             * @param {string=} params.updateMask Required Specifies the path, relative to <code>Cluster</code>, of the field to update. For example, to change the number of workers in a cluster to 5, the <code>update_mask</code> parameter would be specified as <code>configuration.worker_configuration.num_instances</code>, and the PATCH request body would specify the new value, as follows: {   "configuration":{     "workerConfiguration":{       "numInstances":"5"     }   } } Similarly, to change the number of preemptible workers in a cluster to 5, the <code>update_mask</code> parameter would be <code>config.secondary_worker_config.num_instances</code>, and the PATCH request body would be set as follows: {   "config":{     "secondaryWorkerConfig":{       "numInstances":"5"     }   } } <strong>Note:</strong> Currently, <code>config.worker_config.num_instances</code> and <code>config.secondary_worker_config.num_instances</code> are the only fields that can be updated.
             * @param {dataproc(v1beta1).Cluster} params.resource Request body data
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
                        url: 'https://dataproc.googleapis.com/v1beta1/projects/{projectId}/clusters/{clusterName}',
                        method: 'PATCH'
                    }, options),
                    params: params,
                    requiredParams: ['projectId', 'clusterName'],
                    pathParams: ['clusterName', 'projectId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * dataproc.projects.clusters.get
             *
             * @desc Gets the resource representation for a cluster in a project.
             *
             * @alias dataproc.projects.clusters.get
             * @memberOf! dataproc(v1beta1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.clusterName Required The cluster name.
             * @param {string} params.projectId Required The ID of the Google Cloud Platform project that the cluster belongs to.
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
                        url: 'https://dataproc.googleapis.com/v1beta1/projects/{projectId}/clusters/{clusterName}',
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['projectId', 'clusterName'],
                    pathParams: ['clusterName', 'projectId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        },
        jobs: {
            /**
             * dataproc.projects.jobs.cancel
             *
             * @desc Starts a job cancellation request. To access the job resource after cancellation, call jobs.list or jobs.get.
             *
             * @alias dataproc.projects.jobs.cancel
             * @memberOf! dataproc(v1beta1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.projectId Required The ID of the Google Cloud Platform project that the job belongs to.
             * @param {string} params.jobId Required The job ID.
             * @param {dataproc(v1beta1).CancelJobRequest} params.resource Request body data
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
                        url: 'https://dataproc.googleapis.com/v1beta1/projects/{projectId}/jobs/{jobId}:cancel',
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['projectId', 'jobId'],
                    pathParams: ['projectId', 'jobId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * dataproc.projects.jobs.get
             *
             * @desc Gets the resource representation for a job in a project.
             *
             * @alias dataproc.projects.jobs.get
             * @memberOf! dataproc(v1beta1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.projectId Required The ID of the Google Cloud Platform project that the job belongs to.
             * @param {string} params.jobId Required The job ID.
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
                        url: 'https://dataproc.googleapis.com/v1beta1/projects/{projectId}/jobs/{jobId}',
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['projectId', 'jobId'],
                    pathParams: ['projectId', 'jobId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * dataproc.projects.jobs.patch
             *
             * @desc Updates a job in a project.
             *
             * @alias dataproc.projects.jobs.patch
             * @memberOf! dataproc(v1beta1)
             *
             * @param {object} params Parameters for request
             * @param {string=} params.updateMask Required Specifies the path, relative to <code>Job</code>, of the field to update. For example, to update the labels of a Job the <code>update_mask</code> parameter would be specified as <code>labels</code>, and the PATCH request body would specify the new value. <strong>Note:</strong> Currently, <code>labels</code> is the only field that can be updated.
             * @param {string} params.projectId Required The ID of the Google Cloud Platform project that the job belongs to.
             * @param {string} params.jobId Required The job ID.
             * @param {dataproc(v1beta1).Job} params.resource Request body data
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
                        url: 'https://dataproc.googleapis.com/v1beta1/projects/{projectId}/jobs/{jobId}',
                        method: 'PATCH'
                    }, options),
                    params: params,
                    requiredParams: ['projectId', 'jobId'],
                    pathParams: ['projectId', 'jobId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * dataproc.projects.jobs.submit
             *
             * @desc Submits a job to a cluster.
             *
             * @alias dataproc.projects.jobs.submit
             * @memberOf! dataproc(v1beta1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.projectId Required The ID of the Google Cloud Platform project that the job belongs to.
             * @param {dataproc(v1beta1).SubmitJobRequest} params.resource Request body data
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
                        url: 'https://dataproc.googleapis.com/v1beta1/projects/{projectId}/jobs:submit',
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['projectId'],
                    pathParams: ['projectId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * dataproc.projects.jobs.delete
             *
             * @desc Deletes the job from the project. If the job is active, the delete fails, and the response returns FAILED_PRECONDITION.
             *
             * @alias dataproc.projects.jobs.delete
             * @memberOf! dataproc(v1beta1)
             *
             * @param {object} params Parameters for request
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
                        url: 'https://dataproc.googleapis.com/v1beta1/projects/{projectId}/jobs/{jobId}',
                        method: 'DELETE'
                    }, options),
                    params: params,
                    requiredParams: ['projectId', 'jobId'],
                    pathParams: ['projectId', 'jobId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * dataproc.projects.jobs.list
             *
             * @desc Lists jobs in a project.
             *
             * @alias dataproc.projects.jobs.list
             * @memberOf! dataproc(v1beta1)
             *
             * @param {object} params Parameters for request
             * @param {string=} params.clusterName Optional If set, the returned jobs list includes only jobs that were submitted to the named cluster.
             * @param {string} params.projectId Required The ID of the Google Cloud Platform project that the job belongs to.
             * @param {string=} params.filter Optional A filter constraining which jobs to list. Valid filters contain job state and label terms such as: labels.key1 = val1 AND (labels.k2 = val2 OR labels.k3 = val3)
             * @param {string=} params.jobStateMatcher Optional Specifies enumerated categories of jobs to list.
             * @param {string=} params.pageToken Optional The page token, returned by a previous call, to request the next page of results.
             * @param {integer=} params.pageSize Optional The number of results to return in each response.
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
                        url: 'https://dataproc.googleapis.com/v1beta1/projects/{projectId}/jobs',
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
module.exports = Dataproc;
//# sourceMappingURL=v1beta1.js.map