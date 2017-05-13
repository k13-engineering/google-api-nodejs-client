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
 * Cloud Tool Results firstparty API
 *
 * Reads and publishes results from Firebase Test Lab.
 *
 * @example
 * const google = require('googleapis');
 * const toolresults = google.toolresults('v1beta3firstparty');
 *
 * @namespace toolresults
 * @type {Function}
 * @version v1beta3firstparty
 * @variation v1beta3firstparty
 * @param {object=} options Options for Toolresults
 */
function Toolresults(options) {
    const self = this;
    self._options = options || {};
    self.projects = {
        /**
         * toolresults.projects.getSettings
         *
         * @desc Gets the Tool Results settings for a project.  May return any of the following canonical error codes:  - PERMISSION_DENIED - if the user is not authorized to read from project
         *
         * @alias toolresults.projects.getSettings
         * @memberOf! toolresults(v1beta3firstparty)
         *
         * @param {object} params Parameters for request
         * @param {string} params.projectId A Project id.  Required.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getSettings: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/toolresults/v1beta3firstparty/projects/{projectId}/settings',
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
         * toolresults.projects.initializeSettings
         *
         * @desc Creates resources for settings which have not yet been set.  Currently, this creates a single resource: a Google Cloud Storage bucket, to be used as the default bucket for this project. The bucket is created in the name of the user calling. Except in rare cases, calling this method in parallel from multiple clients will only create a single bucket. In order to avoid unnecessary storage charges, the bucket is configured to automatically delete objects older than 90 days.  The bucket is created with the project-private ACL: All project team members are given permissions to the bucket and objects created within it according to their roles. Project owners have owners rights, and so on. The default ACL on objects created in the bucket is project-private as well. See Google Cloud Storage documentation for more details.  If there is already a default bucket set and the project can access the bucket, this call does nothing. However, if the project doesn't have the permission to access the bucket or the bucket is deteleted, a new bucket will be created.  May return any canonical error codes, including the following:  - PERMISSION_DENIED - if the user is not authorized to write to project - Any error code raised by Google Cloud Storage
         *
         * @alias toolresults.projects.initializeSettings
         * @memberOf! toolresults(v1beta3firstparty)
         *
         * @param {object} params Parameters for request
         * @param {string} params.projectId A Project id.  Required.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        initializeSettings: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/toolresults/v1beta3firstparty/projects/{projectId}:initializeSettings',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['projectId'],
                pathParams: ['projectId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        histories: {
            /**
             * toolresults.projects.histories.create
             *
             * @desc Creates a History.  The returned History will have the id set.  May return any of the following canonical error codes:  - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing project does not exist
             *
             * @alias toolresults.projects.histories.create
             * @memberOf! toolresults(v1beta3firstparty)
             *
             * @param {object} params Parameters for request
             * @param {string} params.projectId A Project id.  Required.
             * @param {string=} params.requestId A unique request ID for server to detect duplicated requests. For example, a UUID.  Optional, but strongly recommended.
             * @param {toolresults(v1beta3firstparty).History} params.resource Request body data
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
                        url: 'https://www.googleapis.com/toolresults/v1beta3firstparty/projects/{projectId}/histories',
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
             * toolresults.projects.histories.get
             *
             * @desc Gets a History.  May return any of the following canonical error codes:  - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the History does not exist
             *
             * @alias toolresults.projects.histories.get
             * @memberOf! toolresults(v1beta3firstparty)
             *
             * @param {object} params Parameters for request
             * @param {string} params.historyId A History id.  Required.
             * @param {string} params.projectId A Project id.  Required.
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
                        url: 'https://www.googleapis.com/toolresults/v1beta3firstparty/projects/{projectId}/histories/{historyId}',
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['projectId', 'historyId'],
                    pathParams: ['historyId', 'projectId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * toolresults.projects.histories.list
             *
             * @desc Lists Histories for a given Project.  The histories are sorted by modification time in descending order. The history_id key will be used to order the history with the same modification time.  May return any of the following canonical error codes:  - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the History does not exist
             *
             * @alias toolresults.projects.histories.list
             * @memberOf! toolresults(v1beta3firstparty)
             *
             * @param {object} params Parameters for request
             * @param {string=} params.filterByName If set, only return histories with the given name.  Optional.
             * @param {integer=} params.pageSize The maximum number of Histories to fetch.  Default value: 20. The server will use this default if the field is not set or has a value of 0. Any value greater than 100 will be treated as 100.  Optional.
             * @param {string=} params.pageToken A continuation token to resume the query at the next item.  Optional.
             * @param {string} params.projectId A Project id.  Required.
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
                        url: 'https://www.googleapis.com/toolresults/v1beta3firstparty/projects/{projectId}/histories',
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['projectId'],
                    pathParams: ['projectId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            executions: {
                /**
                 * toolresults.projects.histories.executions.create
                 *
                 * @desc Creates an Execution.  The returned Execution will have the id set.  May return any of the following canonical error codes:  - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing History does not exist
                 *
                 * @alias toolresults.projects.histories.executions.create
                 * @memberOf! toolresults(v1beta3firstparty)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.historyId A History id.  Required.
                 * @param {string} params.projectId A Project id.  Required.
                 * @param {string=} params.requestId A unique request ID for server to detect duplicated requests. For example, a UUID.  Optional, but strongly recommended.
                 * @param {toolresults(v1beta3firstparty).Execution} params.resource Request body data
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
                            url: 'https://www.googleapis.com/toolresults/v1beta3firstparty/projects/{projectId}/histories/{historyId}/executions',
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'historyId'],
                        pathParams: ['historyId', 'projectId'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * toolresults.projects.histories.executions.get
                 *
                 * @desc Gets an Execution.  May return any of the following canonical error codes:  - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Execution does not exist
                 *
                 * @alias toolresults.projects.histories.executions.get
                 * @memberOf! toolresults(v1beta3firstparty)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.executionId An Execution id.  Required.
                 * @param {string} params.historyId A History id.  Required.
                 * @param {string} params.projectId A Project id.  Required.
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
                            url: 'https://www.googleapis.com/toolresults/v1beta3firstparty/projects/{projectId}/histories/{historyId}/executions/{executionId}',
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'historyId', 'executionId'],
                        pathParams: ['executionId', 'historyId', 'projectId'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * toolresults.projects.histories.executions.list
                 *
                 * @desc Lists Histories for a given Project.  The executions are sorted by creation_time in descending order. The execution_id key will be used to order the executions with the same creation_time.  May return any of the following canonical error codes:  - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing History does not exist
                 *
                 * @alias toolresults.projects.histories.executions.list
                 * @memberOf! toolresults(v1beta3firstparty)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.historyId A History id.  Required.
                 * @param {integer=} params.pageSize The maximum number of Executions to fetch.  Default value: 25. The server will use this default if the field is not set or has a value of 0.  Optional.
                 * @param {string=} params.pageToken A continuation token to resume the query at the next item.  Optional.
                 * @param {string} params.projectId A Project id.  Required.
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
                            url: 'https://www.googleapis.com/toolresults/v1beta3firstparty/projects/{projectId}/histories/{historyId}/executions',
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'historyId'],
                        pathParams: ['historyId', 'projectId'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * toolresults.projects.histories.executions.patch
                 *
                 * @desc Updates an existing Execution with the supplied partial entity.  May return any of the following canonical error codes:  - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal - NOT_FOUND - if the containing History does not exist
                 *
                 * @alias toolresults.projects.histories.executions.patch
                 * @memberOf! toolresults(v1beta3firstparty)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.executionId Required.
                 * @param {string} params.historyId Required.
                 * @param {string} params.projectId A Project id. Required.
                 * @param {string=} params.requestId A unique request ID for server to detect duplicated requests. For example, a UUID.  Optional, but strongly recommended.
                 * @param {toolresults(v1beta3firstparty).Execution} params.resource Request body data
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
                            url: 'https://www.googleapis.com/toolresults/v1beta3firstparty/projects/{projectId}/histories/{historyId}/executions/{executionId}',
                            method: 'PATCH'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'historyId', 'executionId'],
                        pathParams: ['executionId', 'historyId', 'projectId'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                steps: {
                    /**
                     * toolresults.projects.histories.executions.steps.create
                     *
                     * @desc Creates a Step.  The returned Step will have the id set.  May return any of the following canonical error codes:  - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the step is too large (more than 10Mib) - NOT_FOUND - if the containing Execution does not exist
                     *
                     * @alias toolresults.projects.histories.executions.steps.create
                     * @memberOf! toolresults(v1beta3firstparty)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.executionId A Execution id.  Required.
                     * @param {string} params.historyId A History id.  Required.
                     * @param {string} params.projectId A Project id.  Required.
                     * @param {string=} params.requestId A unique request ID for server to detect duplicated requests. For example, a UUID.  Optional, but strongly recommended.
                     * @param {toolresults(v1beta3firstparty).Step} params.resource Request body data
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
                                url: 'https://www.googleapis.com/toolresults/v1beta3firstparty/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps',
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['projectId', 'historyId', 'executionId'],
                            pathParams: ['executionId', 'historyId', 'projectId'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    /**
                     * toolresults.projects.histories.executions.steps.get
                     *
                     * @desc Gets a Step.  May return any of the following canonical error codes:  - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Step does not exist
                     *
                     * @alias toolresults.projects.histories.executions.steps.get
                     * @memberOf! toolresults(v1beta3firstparty)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.executionId A Execution id.  Required.
                     * @param {string} params.historyId A History id.  Required.
                     * @param {string} params.projectId A Project id.  Required.
                     * @param {string} params.stepId A Step id.  Required.
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
                                url: 'https://www.googleapis.com/toolresults/v1beta3firstparty/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}',
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['projectId', 'historyId', 'executionId', 'stepId'],
                            pathParams: ['executionId', 'historyId', 'projectId', 'stepId'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    /**
                     * toolresults.projects.histories.executions.steps.getPerfMetricsSummary
                     *
                     * @desc Retrieves a PerfMetricsSummary.  May return any of the following error code(s): - NOT_FOUND - The specified PerfMetricsSummary does not exist
                     *
                     * @alias toolresults.projects.histories.executions.steps.getPerfMetricsSummary
                     * @memberOf! toolresults(v1beta3firstparty)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.executionId A tool results execution ID.
                     * @param {string} params.historyId A tool results history ID.
                     * @param {string} params.projectId The cloud project
                     * @param {string} params.stepId A tool results step ID.
                     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                     * @param {callback} callback The callback that handles the response.
                     * @return {object} Request object
                     */
                    getPerfMetricsSummary: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options || (options = {});
                        const parameters = {
                            options: Object.assign({
                                url: 'https://www.googleapis.com/toolresults/v1beta3firstparty/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfMetricsSummary',
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['projectId', 'historyId', 'executionId', 'stepId'],
                            pathParams: ['executionId', 'historyId', 'projectId', 'stepId'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    /**
                     * toolresults.projects.histories.executions.steps.list
                     *
                     * @desc Lists Steps for a given Execution.  The steps are sorted by creation_time in descending order. The step_id key will be used to order the steps with the same creation_time.  May return any of the following canonical error codes:  - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if an argument in the request happens to be invalid; e.g. if an attempt is made to list the children of a nonexistent Step - NOT_FOUND - if the containing Execution does not exist
                     *
                     * @alias toolresults.projects.histories.executions.steps.list
                     * @memberOf! toolresults(v1beta3firstparty)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.executionId A Execution id.  Required.
                     * @param {string} params.historyId A History id.  Required.
                     * @param {integer=} params.pageSize The maximum number of Steps to fetch.  Default value: 25. The server will use this default if the field is not set or has a value of 0.  Optional.
                     * @param {string=} params.pageToken A continuation token to resume the query at the next item.  Optional.
                     * @param {string} params.projectId A Project id.  Required.
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
                                url: 'https://www.googleapis.com/toolresults/v1beta3firstparty/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps',
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['projectId', 'historyId', 'executionId'],
                            pathParams: ['executionId', 'historyId', 'projectId'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    /**
                     * toolresults.projects.histories.executions.steps.patch
                     *
                     * @desc Updates an existing Step with the supplied partial entity.  May return any of the following canonical error codes:  - PERMISSION_DENIED - if the user is not authorized to write project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal (e.g try to upload a duplicate xml file), if the updated step is too large (more than 10Mib) - NOT_FOUND - if the containing Execution does not exist
                     *
                     * @alias toolresults.projects.histories.executions.steps.patch
                     * @memberOf! toolresults(v1beta3firstparty)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.executionId A Execution id.  Required.
                     * @param {string} params.historyId A History id.  Required.
                     * @param {string} params.projectId A Project id.  Required.
                     * @param {string=} params.requestId A unique request ID for server to detect duplicated requests. For example, a UUID.  Optional, but strongly recommended.
                     * @param {string} params.stepId A Step id.  Required.
                     * @param {toolresults(v1beta3firstparty).Step} params.resource Request body data
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
                                url: 'https://www.googleapis.com/toolresults/v1beta3firstparty/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}',
                                method: 'PATCH'
                            }, options),
                            params: params,
                            requiredParams: ['projectId', 'historyId', 'executionId', 'stepId'],
                            pathParams: ['executionId', 'historyId', 'projectId', 'stepId'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    /**
                     * toolresults.projects.histories.executions.steps.publishXunitXmlFiles
                     *
                     * @desc Publish xml files to an existing Step.  May return any of the following canonical error codes:  - PERMISSION_DENIED - if the user is not authorized to write project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal, e.g try to upload a duplicate xml file or a file too large. - NOT_FOUND - if the containing Execution does not exist
                     *
                     * @alias toolresults.projects.histories.executions.steps.publishXunitXmlFiles
                     * @memberOf! toolresults(v1beta3firstparty)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.executionId A Execution id.  Required.
                     * @param {string} params.historyId A History id.  Required.
                     * @param {string} params.projectId A Project id.  Required.
                     * @param {string} params.stepId A Step id. Note: This step must include a TestExecutionStep.  Required.
                     * @param {toolresults(v1beta3firstparty).PublishXunitXmlFilesRequest} params.resource Request body data
                     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                     * @param {callback} callback The callback that handles the response.
                     * @return {object} Request object
                     */
                    publishXunitXmlFiles: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options || (options = {});
                        const parameters = {
                            options: Object.assign({
                                url: 'https://www.googleapis.com/toolresults/v1beta3firstparty/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}:publishXunitXmlFiles',
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['projectId', 'historyId', 'executionId', 'stepId'],
                            pathParams: ['executionId', 'historyId', 'projectId', 'stepId'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    perfMetricsSummary: {
                        /**
                         * toolresults.projects.histories.executions.steps.perfMetricsSummary.create
                         *
                         * @desc Creates a PerfMetricsSummary resource.  May return any of the following error code(s): - ALREADY_EXISTS - A PerfMetricSummary already exists for the given Step - NOT_FOUND - The containing Step does not exist
                         *
                         * @alias toolresults.projects.histories.executions.steps.perfMetricsSummary.create
                         * @memberOf! toolresults(v1beta3firstparty)
                         *
                         * @param {object} params Parameters for request
                         * @param {string} params.executionId A tool results execution ID.
                         * @param {string} params.historyId A tool results history ID.
                         * @param {string} params.projectId The cloud project
                         * @param {string} params.stepId A tool results step ID.
                         * @param {toolresults(v1beta3firstparty).PerfMetricsSummary} params.resource Request body data
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
                                    url: 'https://www.googleapis.com/toolresults/v1beta3firstparty/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfMetricsSummary',
                                    method: 'POST'
                                }, options),
                                params: params,
                                requiredParams: ['projectId', 'historyId', 'executionId', 'stepId'],
                                pathParams: ['executionId', 'historyId', 'projectId', 'stepId'],
                                context: self
                            };
                            return apirequest_1.default(parameters, callback);
                        }
                    },
                    perfSampleSeries: {
                        /**
                         * toolresults.projects.histories.executions.steps.perfSampleSeries.create
                         *
                         * @desc Creates a PerfSampleSeries.  May return any of the following error code(s): - ALREADY_EXISTS - PerfMetricSummary already exists for the given Step - NOT_FOUND - The containing Step does not exist
                         *
                         * @alias toolresults.projects.histories.executions.steps.perfSampleSeries.create
                         * @memberOf! toolresults(v1beta3firstparty)
                         *
                         * @param {object} params Parameters for request
                         * @param {string} params.executionId A tool results execution ID.
                         * @param {string} params.historyId A tool results history ID.
                         * @param {string} params.projectId The cloud project
                         * @param {string} params.stepId A tool results step ID.
                         * @param {toolresults(v1beta3firstparty).PerfSampleSeries} params.resource Request body data
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
                                    url: 'https://www.googleapis.com/toolresults/v1beta3firstparty/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries',
                                    method: 'POST'
                                }, options),
                                params: params,
                                requiredParams: ['projectId', 'historyId', 'executionId', 'stepId'],
                                pathParams: ['executionId', 'historyId', 'projectId', 'stepId'],
                                context: self
                            };
                            return apirequest_1.default(parameters, callback);
                        },
                        /**
                         * toolresults.projects.histories.executions.steps.perfSampleSeries.get
                         *
                         * @desc Gets a PerfSampleSeries.  May return any of the following error code(s): - NOT_FOUND - The specified PerfSampleSeries does not exist
                         *
                         * @alias toolresults.projects.histories.executions.steps.perfSampleSeries.get
                         * @memberOf! toolresults(v1beta3firstparty)
                         *
                         * @param {object} params Parameters for request
                         * @param {string} params.executionId A tool results execution ID.
                         * @param {string} params.historyId A tool results history ID.
                         * @param {string} params.projectId The cloud project
                         * @param {string} params.sampleSeriesId A sample series id
                         * @param {string} params.stepId A tool results step ID.
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
                                    url: 'https://www.googleapis.com/toolresults/v1beta3firstparty/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries/{sampleSeriesId}',
                                    method: 'GET'
                                }, options),
                                params: params,
                                requiredParams: ['projectId', 'historyId', 'executionId', 'stepId', 'sampleSeriesId'],
                                pathParams: ['executionId', 'historyId', 'projectId', 'sampleSeriesId', 'stepId'],
                                context: self
                            };
                            return apirequest_1.default(parameters, callback);
                        },
                        /**
                         * toolresults.projects.histories.executions.steps.perfSampleSeries.list
                         *
                         * @desc Lists PerfSampleSeries for a given Step.  The request provides an optional filter which specifies one or more PerfMetricsType to include in the result; if none returns all. The resulting PerfSampleSeries are sorted by ids.  May return any of the following canonical error codes: - NOT_FOUND - The containing Step does not exist
                         *
                         * @alias toolresults.projects.histories.executions.steps.perfSampleSeries.list
                         * @memberOf! toolresults(v1beta3firstparty)
                         *
                         * @param {object} params Parameters for request
                         * @param {string} params.executionId A tool results execution ID.
                         * @param {string=} params.filter Specify one or more PerfMetricType values such as CPU to filter the result
                         * @param {string} params.historyId A tool results history ID.
                         * @param {string} params.projectId The cloud project
                         * @param {string} params.stepId A tool results step ID.
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
                                    url: 'https://www.googleapis.com/toolresults/v1beta3firstparty/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries',
                                    method: 'GET'
                                }, options),
                                params: params,
                                requiredParams: ['projectId', 'historyId', 'executionId', 'stepId'],
                                pathParams: ['executionId', 'historyId', 'projectId', 'stepId'],
                                context: self
                            };
                            return apirequest_1.default(parameters, callback);
                        },
                        samples: {
                            /**
                             * toolresults.projects.histories.executions.steps.perfSampleSeries.samples.batchCreate
                             *
                             * @desc Creates a batch of PerfSamples - a client can submit multiple batches of Perf Samples through repeated calls to this method in order to split up a large request payload - duplicates and existing timestamp entries will be ignored. - the batch operation may partially succeed - the set of elements successfully inserted is returned in the response (omits items which already existed in the database).  May return any of the following canonical error codes: - NOT_FOUND - The containing PerfSampleSeries does not exist
                             *
                             * @alias toolresults.projects.histories.executions.steps.perfSampleSeries.samples.batchCreate
                             * @memberOf! toolresults(v1beta3firstparty)
                             *
                             * @param {object} params Parameters for request
                             * @param {string} params.executionId A tool results execution ID.
                             * @param {string} params.historyId A tool results history ID.
                             * @param {string} params.projectId The cloud project
                             * @param {string} params.sampleSeriesId A sample series id
                             * @param {string} params.stepId A tool results step ID.
                             * @param {toolresults(v1beta3firstparty).BatchCreatePerfSamplesRequest} params.resource Request body data
                             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                             * @param {callback} callback The callback that handles the response.
                             * @return {object} Request object
                             */
                            batchCreate: function (params, options, callback) {
                                if (typeof options === 'function') {
                                    callback = options;
                                    options = {};
                                }
                                options || (options = {});
                                const parameters = {
                                    options: Object.assign({
                                        url: 'https://www.googleapis.com/toolresults/v1beta3firstparty/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries/{sampleSeriesId}/samples:batchCreate',
                                        method: 'POST'
                                    }, options),
                                    params: params,
                                    requiredParams: ['projectId', 'historyId', 'executionId', 'stepId', 'sampleSeriesId'],
                                    pathParams: ['executionId', 'historyId', 'projectId', 'sampleSeriesId', 'stepId'],
                                    context: self
                                };
                                return apirequest_1.default(parameters, callback);
                            },
                            /**
                             * toolresults.projects.histories.executions.steps.perfSampleSeries.samples.list
                             *
                             * @desc Lists the Performance Samples of a given Sample Series - The list results are sorted by timestamps ascending - The default page size is 500 samples; and maximum size allowed 5000 - The response token indicates the last returned PerfSample timestamp - When the results size exceeds the page size, submit a subsequent request including the page token to return the rest of the samples up to the page limit  May return any of the following canonical error codes: - OUT_OF_RANGE - The specified request page_token is out of valid range - NOT_FOUND - The containing PerfSampleSeries does not exist
                             *
                             * @alias toolresults.projects.histories.executions.steps.perfSampleSeries.samples.list
                             * @memberOf! toolresults(v1beta3firstparty)
                             *
                             * @param {object} params Parameters for request
                             * @param {string} params.executionId A tool results execution ID.
                             * @param {string} params.historyId A tool results history ID.
                             * @param {integer=} params.pageSize The default page size is 500 samples, and the maximum size is 5000. If the page_size is greater than 5000, the effective page size will be 5000
                             * @param {string=} params.pageToken Optional, the next_page_token returned in the previous response
                             * @param {string} params.projectId The cloud project
                             * @param {string} params.sampleSeriesId A sample series id
                             * @param {string} params.stepId A tool results step ID.
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
                                        url: 'https://www.googleapis.com/toolresults/v1beta3firstparty/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries/{sampleSeriesId}/samples',
                                        method: 'GET'
                                    }, options),
                                    params: params,
                                    requiredParams: ['projectId', 'historyId', 'executionId', 'stepId', 'sampleSeriesId'],
                                    pathParams: ['executionId', 'historyId', 'projectId', 'sampleSeriesId', 'stepId'],
                                    context: self
                                };
                                return apirequest_1.default(parameters, callback);
                            }
                        }
                    },
                    thumbnails: {
                        /**
                         * toolresults.projects.histories.executions.steps.thumbnails.list
                         *
                         * @desc Lists thumbnails of images attached to a step.  May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read from the project, or from any of the images - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the step does not exist, or if any of the images do not exist
                         *
                         * @alias toolresults.projects.histories.executions.steps.thumbnails.list
                         * @memberOf! toolresults(v1beta3firstparty)
                         *
                         * @param {object} params Parameters for request
                         * @param {string} params.executionId An Execution id.  Required.
                         * @param {string} params.historyId A History id.  Required.
                         * @param {integer=} params.pageSize The maximum number of thumbnails to fetch.  Default value: 50. The server will use this default if the field is not set or has a value of 0.  Optional.
                         * @param {string=} params.pageToken A continuation token to resume the query at the next item.  Optional.
                         * @param {string} params.projectId A Project id.  Required.
                         * @param {string} params.stepId A Step id.  Required.
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
                                    url: 'https://www.googleapis.com/toolresults/v1beta3firstparty/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/thumbnails',
                                    method: 'GET'
                                }, options),
                                params: params,
                                requiredParams: ['projectId', 'historyId', 'executionId', 'stepId'],
                                pathParams: ['executionId', 'historyId', 'projectId', 'stepId'],
                                context: self
                            };
                            return apirequest_1.default(parameters, callback);
                        }
                    }
                }
            }
        }
    };
}
module.exports = Toolresults;
//# sourceMappingURL=v1beta3firstparty.js.map