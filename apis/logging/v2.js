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
 * Stackdriver Logging API
 *
 * Writes log entries and manages your Stackdriver Logging configuration.
 *
 * @example
 * const google = require('googleapis');
 * const logging = google.logging('v2');
 *
 * @namespace logging
 * @type {Function}
 * @version v2
 * @variation v2
 * @param {object=} options Options for Logging
 */
function Logging(options) {
    const self = this;
    self._options = options || {};
    self.folders = {
        logs: {
            /**
             * logging.folders.logs.delete
             *
             * @desc Deletes all the log entries in a log. The log reappears if it receives new entries. Log entries written shortly before the delete operation might not be deleted.
             *
             * @alias logging.folders.logs.delete
             * @memberOf! logging(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.logName Required. The resource name of the log to delete: "projects/[PROJECT_ID]/logs/[LOG_ID]" "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]" "folders/[FOLDER_ID]/logs/[LOG_ID]" [LOG_ID] must be URL-encoded. For example, "projects/my-project-id/logs/syslog", "organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity". For more information about log names, see LogEntry.
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
                        url: 'https://logging.googleapis.com/v2/{logName}',
                        method: 'DELETE'
                    }, options),
                    params: params,
                    requiredParams: ['logName'],
                    pathParams: ['logName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * logging.folders.logs.list
             *
             * @desc Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.
             *
             * @alias logging.folders.logs.list
             * @memberOf! logging(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.parent Required. The resource name that owns the logs: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]"
             * @param {string=} params.pageToken Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
             * @param {integer=} params.pageSize Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
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
                        url: 'https://logging.googleapis.com/v2/{parent}/logs',
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['parent'],
                    pathParams: ['parent'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        },
        sinks: {
            /**
             * logging.folders.sinks.update
             *
             * @desc Updates a sink. If the named sink doesn't exist, then this method is identical to sinks.create. If the named sink does exist, then this method replaces the following fields in the existing sink with values from the new sink: destination, filter, output_version_format, start_time, and end_time. The updated filter might also have a new writer_identity; see the unique_writer_identity field.
             *
             * @alias logging.folders.sinks.update
             * @memberOf! logging(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.sinkName Required. The full resource name of the sink to update, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" Example: "projects/my-project-id/sinks/my-sink-id".
             * @param {boolean=} params.uniqueWriterIdentity Optional. See sinks.create for a description of this field. When updating a sink, the effect of this field on the value of writer_identity in the updated sink depends on both the old and new values of this field: If the old and new values of this field are both false or both true, then there is no change to the sink's writer_identity. If the old value is false and the new value is true, then writer_identity is changed to a unique service account. It is an error if the old value is true and the new value is false.
             * @param {logging(v2).LogSink} params.resource Request body data
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
                        url: 'https://logging.googleapis.com/v2/{sinkName}',
                        method: 'PUT'
                    }, options),
                    params: params,
                    requiredParams: ['sinkName'],
                    pathParams: ['sinkName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * logging.folders.sinks.create
             *
             * @desc Creates a sink that exports specified log entries to a destination. The export of newly-ingested log entries begins immediately, unless the current time is outside the sink's start and end times or the sink's writer_identity is not permitted to write to the destination. A sink can export log entries only from the resource owning the sink.
             *
             * @alias logging.folders.sinks.create
             * @memberOf! logging(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.parent Required. The resource in which to create the sink: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]" Examples: "projects/my-logging-project", "organizations/123456789".
             * @param {boolean=} params.uniqueWriterIdentity Optional. Determines the kind of IAM identity returned as writer_identity in the new sink. If this value is omitted or set to false, and if the sink's parent is a project, then the value returned as writer_identity is the same group or service account used by Stackdriver Logging before the addition of writer identities to this API. The sink's destination must be in the same project as the sink itself.If this field is set to true, or if the sink is owned by a non-project resource such as an organization, then the value of writer_identity will be a unique service account used only for exports from the new sink. For more information, see writer_identity in LogSink.
             * @param {logging(v2).LogSink} params.resource Request body data
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
                        url: 'https://logging.googleapis.com/v2/{parent}/sinks',
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['parent'],
                    pathParams: ['parent'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * logging.folders.sinks.delete
             *
             * @desc Deletes a sink. If the sink has a unique writer_identity, then that service account is also deleted.
             *
             * @alias logging.folders.sinks.delete
             * @memberOf! logging(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.sinkName Required. The full resource name of the sink to delete, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" Example: "projects/my-project-id/sinks/my-sink-id".
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
                        url: 'https://logging.googleapis.com/v2/{sinkName}',
                        method: 'DELETE'
                    }, options),
                    params: params,
                    requiredParams: ['sinkName'],
                    pathParams: ['sinkName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * logging.folders.sinks.list
             *
             * @desc Lists sinks.
             *
             * @alias logging.folders.sinks.list
             * @memberOf! logging(v2)
             *
             * @param {object} params Parameters for request
             * @param {string=} params.pageToken Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
             * @param {integer=} params.pageSize Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
             * @param {string} params.parent Required. The parent resource whose sinks are to be listed: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]"
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
                        url: 'https://logging.googleapis.com/v2/{parent}/sinks',
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['parent'],
                    pathParams: ['parent'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * logging.folders.sinks.get
             *
             * @desc Gets a sink.
             *
             * @alias logging.folders.sinks.get
             * @memberOf! logging(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.sinkName Required. The resource name of the sink: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" Example: "projects/my-project-id/sinks/my-sink-id".
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
                        url: 'https://logging.googleapis.com/v2/{sinkName}',
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['sinkName'],
                    pathParams: ['sinkName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        }
    };
    self.monitoredResourceDescriptors = {
        /**
         * logging.monitoredResourceDescriptors.list
         *
         * @desc Lists the descriptors for monitored resource types used by Stackdriver Logging.
         *
         * @alias logging.monitoredResourceDescriptors.list
         * @memberOf! logging(v2)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.pageToken Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
         * @param {integer=} params.pageSize Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
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
                    url: 'https://logging.googleapis.com/v2/monitoredResourceDescriptors',
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
    self.organizations = {
        logs: {
            /**
             * logging.organizations.logs.delete
             *
             * @desc Deletes all the log entries in a log. The log reappears if it receives new entries. Log entries written shortly before the delete operation might not be deleted.
             *
             * @alias logging.organizations.logs.delete
             * @memberOf! logging(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.logName Required. The resource name of the log to delete: "projects/[PROJECT_ID]/logs/[LOG_ID]" "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]" "folders/[FOLDER_ID]/logs/[LOG_ID]" [LOG_ID] must be URL-encoded. For example, "projects/my-project-id/logs/syslog", "organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity". For more information about log names, see LogEntry.
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
                        url: 'https://logging.googleapis.com/v2/{logName}',
                        method: 'DELETE'
                    }, options),
                    params: params,
                    requiredParams: ['logName'],
                    pathParams: ['logName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * logging.organizations.logs.list
             *
             * @desc Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.
             *
             * @alias logging.organizations.logs.list
             * @memberOf! logging(v2)
             *
             * @param {object} params Parameters for request
             * @param {string=} params.pageToken Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
             * @param {integer=} params.pageSize Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
             * @param {string} params.parent Required. The resource name that owns the logs: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]"
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
                        url: 'https://logging.googleapis.com/v2/{parent}/logs',
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['parent'],
                    pathParams: ['parent'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        },
        sinks: {
            /**
             * logging.organizations.sinks.delete
             *
             * @desc Deletes a sink. If the sink has a unique writer_identity, then that service account is also deleted.
             *
             * @alias logging.organizations.sinks.delete
             * @memberOf! logging(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.sinkName Required. The full resource name of the sink to delete, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" Example: "projects/my-project-id/sinks/my-sink-id".
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
                        url: 'https://logging.googleapis.com/v2/{sinkName}',
                        method: 'DELETE'
                    }, options),
                    params: params,
                    requiredParams: ['sinkName'],
                    pathParams: ['sinkName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * logging.organizations.sinks.list
             *
             * @desc Lists sinks.
             *
             * @alias logging.organizations.sinks.list
             * @memberOf! logging(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.parent Required. The parent resource whose sinks are to be listed: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]"
             * @param {string=} params.pageToken Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
             * @param {integer=} params.pageSize Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
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
                        url: 'https://logging.googleapis.com/v2/{parent}/sinks',
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['parent'],
                    pathParams: ['parent'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * logging.organizations.sinks.get
             *
             * @desc Gets a sink.
             *
             * @alias logging.organizations.sinks.get
             * @memberOf! logging(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.sinkName Required. The resource name of the sink: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" Example: "projects/my-project-id/sinks/my-sink-id".
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
                        url: 'https://logging.googleapis.com/v2/{sinkName}',
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['sinkName'],
                    pathParams: ['sinkName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * logging.organizations.sinks.update
             *
             * @desc Updates a sink. If the named sink doesn't exist, then this method is identical to sinks.create. If the named sink does exist, then this method replaces the following fields in the existing sink with values from the new sink: destination, filter, output_version_format, start_time, and end_time. The updated filter might also have a new writer_identity; see the unique_writer_identity field.
             *
             * @alias logging.organizations.sinks.update
             * @memberOf! logging(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.sinkName Required. The full resource name of the sink to update, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" Example: "projects/my-project-id/sinks/my-sink-id".
             * @param {boolean=} params.uniqueWriterIdentity Optional. See sinks.create for a description of this field. When updating a sink, the effect of this field on the value of writer_identity in the updated sink depends on both the old and new values of this field: If the old and new values of this field are both false or both true, then there is no change to the sink's writer_identity. If the old value is false and the new value is true, then writer_identity is changed to a unique service account. It is an error if the old value is true and the new value is false.
             * @param {logging(v2).LogSink} params.resource Request body data
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
                        url: 'https://logging.googleapis.com/v2/{sinkName}',
                        method: 'PUT'
                    }, options),
                    params: params,
                    requiredParams: ['sinkName'],
                    pathParams: ['sinkName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * logging.organizations.sinks.create
             *
             * @desc Creates a sink that exports specified log entries to a destination. The export of newly-ingested log entries begins immediately, unless the current time is outside the sink's start and end times or the sink's writer_identity is not permitted to write to the destination. A sink can export log entries only from the resource owning the sink.
             *
             * @alias logging.organizations.sinks.create
             * @memberOf! logging(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.parent Required. The resource in which to create the sink: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]" Examples: "projects/my-logging-project", "organizations/123456789".
             * @param {boolean=} params.uniqueWriterIdentity Optional. Determines the kind of IAM identity returned as writer_identity in the new sink. If this value is omitted or set to false, and if the sink's parent is a project, then the value returned as writer_identity is the same group or service account used by Stackdriver Logging before the addition of writer identities to this API. The sink's destination must be in the same project as the sink itself.If this field is set to true, or if the sink is owned by a non-project resource such as an organization, then the value of writer_identity will be a unique service account used only for exports from the new sink. For more information, see writer_identity in LogSink.
             * @param {logging(v2).LogSink} params.resource Request body data
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
                        url: 'https://logging.googleapis.com/v2/{parent}/sinks',
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['parent'],
                    pathParams: ['parent'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        }
    };
    self.entries = {
        /**
         * logging.entries.list
         *
         * @desc Lists log entries. Use this method to retrieve log entries from Stackdriver Logging. For ways to export log entries, see Exporting Logs.
         *
         * @alias logging.entries.list
         * @memberOf! logging(v2)
         *
         * @param {object} params Parameters for request
         * @param {logging(v2).ListLogEntriesRequest} params.resource Request body data
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
                    url: 'https://logging.googleapis.com/v2/entries:list',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * logging.entries.write
         *
         * @desc Writes log entries to Stackdriver Logging.
         *
         * @alias logging.entries.write
         * @memberOf! logging(v2)
         *
         * @param {object} params Parameters for request
         * @param {logging(v2).WriteLogEntriesRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        write: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://logging.googleapis.com/v2/entries:write',
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
    self.projects = {
        logs: {
            /**
             * logging.projects.logs.delete
             *
             * @desc Deletes all the log entries in a log. The log reappears if it receives new entries. Log entries written shortly before the delete operation might not be deleted.
             *
             * @alias logging.projects.logs.delete
             * @memberOf! logging(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.logName Required. The resource name of the log to delete: "projects/[PROJECT_ID]/logs/[LOG_ID]" "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]" "folders/[FOLDER_ID]/logs/[LOG_ID]" [LOG_ID] must be URL-encoded. For example, "projects/my-project-id/logs/syslog", "organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity". For more information about log names, see LogEntry.
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
                        url: 'https://logging.googleapis.com/v2/{logName}',
                        method: 'DELETE'
                    }, options),
                    params: params,
                    requiredParams: ['logName'],
                    pathParams: ['logName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * logging.projects.logs.list
             *
             * @desc Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.
             *
             * @alias logging.projects.logs.list
             * @memberOf! logging(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.parent Required. The resource name that owns the logs: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]"
             * @param {string=} params.pageToken Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
             * @param {integer=} params.pageSize Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
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
                        url: 'https://logging.googleapis.com/v2/{parent}/logs',
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['parent'],
                    pathParams: ['parent'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        },
        sinks: {
            /**
             * logging.projects.sinks.update
             *
             * @desc Updates a sink. If the named sink doesn't exist, then this method is identical to sinks.create. If the named sink does exist, then this method replaces the following fields in the existing sink with values from the new sink: destination, filter, output_version_format, start_time, and end_time. The updated filter might also have a new writer_identity; see the unique_writer_identity field.
             *
             * @alias logging.projects.sinks.update
             * @memberOf! logging(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.sinkName Required. The full resource name of the sink to update, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" Example: "projects/my-project-id/sinks/my-sink-id".
             * @param {boolean=} params.uniqueWriterIdentity Optional. See sinks.create for a description of this field. When updating a sink, the effect of this field on the value of writer_identity in the updated sink depends on both the old and new values of this field: If the old and new values of this field are both false or both true, then there is no change to the sink's writer_identity. If the old value is false and the new value is true, then writer_identity is changed to a unique service account. It is an error if the old value is true and the new value is false.
             * @param {logging(v2).LogSink} params.resource Request body data
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
                        url: 'https://logging.googleapis.com/v2/{sinkName}',
                        method: 'PUT'
                    }, options),
                    params: params,
                    requiredParams: ['sinkName'],
                    pathParams: ['sinkName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * logging.projects.sinks.create
             *
             * @desc Creates a sink that exports specified log entries to a destination. The export of newly-ingested log entries begins immediately, unless the current time is outside the sink's start and end times or the sink's writer_identity is not permitted to write to the destination. A sink can export log entries only from the resource owning the sink.
             *
             * @alias logging.projects.sinks.create
             * @memberOf! logging(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.parent Required. The resource in which to create the sink: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]" Examples: "projects/my-logging-project", "organizations/123456789".
             * @param {boolean=} params.uniqueWriterIdentity Optional. Determines the kind of IAM identity returned as writer_identity in the new sink. If this value is omitted or set to false, and if the sink's parent is a project, then the value returned as writer_identity is the same group or service account used by Stackdriver Logging before the addition of writer identities to this API. The sink's destination must be in the same project as the sink itself.If this field is set to true, or if the sink is owned by a non-project resource such as an organization, then the value of writer_identity will be a unique service account used only for exports from the new sink. For more information, see writer_identity in LogSink.
             * @param {logging(v2).LogSink} params.resource Request body data
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
                        url: 'https://logging.googleapis.com/v2/{parent}/sinks',
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['parent'],
                    pathParams: ['parent'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * logging.projects.sinks.delete
             *
             * @desc Deletes a sink. If the sink has a unique writer_identity, then that service account is also deleted.
             *
             * @alias logging.projects.sinks.delete
             * @memberOf! logging(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.sinkName Required. The full resource name of the sink to delete, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" Example: "projects/my-project-id/sinks/my-sink-id".
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
                        url: 'https://logging.googleapis.com/v2/{sinkName}',
                        method: 'DELETE'
                    }, options),
                    params: params,
                    requiredParams: ['sinkName'],
                    pathParams: ['sinkName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * logging.projects.sinks.list
             *
             * @desc Lists sinks.
             *
             * @alias logging.projects.sinks.list
             * @memberOf! logging(v2)
             *
             * @param {object} params Parameters for request
             * @param {string=} params.pageToken Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
             * @param {integer=} params.pageSize Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
             * @param {string} params.parent Required. The parent resource whose sinks are to be listed: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]"
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
                        url: 'https://logging.googleapis.com/v2/{parent}/sinks',
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['parent'],
                    pathParams: ['parent'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * logging.projects.sinks.get
             *
             * @desc Gets a sink.
             *
             * @alias logging.projects.sinks.get
             * @memberOf! logging(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.sinkName Required. The resource name of the sink: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" Example: "projects/my-project-id/sinks/my-sink-id".
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
                        url: 'https://logging.googleapis.com/v2/{sinkName}',
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['sinkName'],
                    pathParams: ['sinkName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        },
        metrics: {
            /**
             * logging.projects.metrics.update
             *
             * @desc Creates or updates a logs-based metric.
             *
             * @alias logging.projects.metrics.update
             * @memberOf! logging(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.metricName The resource name of the metric to update: "projects/[PROJECT_ID]/metrics/[METRIC_ID]" The updated metric must be provided in the request and it's name field must be the same as [METRIC_ID] If the metric does not exist in [PROJECT_ID], then a new metric is created.
             * @param {logging(v2).LogMetric} params.resource Request body data
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
                        url: 'https://logging.googleapis.com/v2/{metricName}',
                        method: 'PUT'
                    }, options),
                    params: params,
                    requiredParams: ['metricName'],
                    pathParams: ['metricName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * logging.projects.metrics.create
             *
             * @desc Creates a logs-based metric.
             *
             * @alias logging.projects.metrics.create
             * @memberOf! logging(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.parent The resource name of the project in which to create the metric: "projects/[PROJECT_ID]" The new metric must be provided in the request.
             * @param {logging(v2).LogMetric} params.resource Request body data
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
                        url: 'https://logging.googleapis.com/v2/{parent}/metrics',
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['parent'],
                    pathParams: ['parent'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * logging.projects.metrics.delete
             *
             * @desc Deletes a logs-based metric.
             *
             * @alias logging.projects.metrics.delete
             * @memberOf! logging(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.metricName The resource name of the metric to delete: "projects/[PROJECT_ID]/metrics/[METRIC_ID]"
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
                        url: 'https://logging.googleapis.com/v2/{metricName}',
                        method: 'DELETE'
                    }, options),
                    params: params,
                    requiredParams: ['metricName'],
                    pathParams: ['metricName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * logging.projects.metrics.list
             *
             * @desc Lists logs-based metrics.
             *
             * @alias logging.projects.metrics.list
             * @memberOf! logging(v2)
             *
             * @param {object} params Parameters for request
             * @param {string=} params.pageToken Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
             * @param {integer=} params.pageSize Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
             * @param {string} params.parent Required. The name of the project containing the metrics: "projects/[PROJECT_ID]"
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
                        url: 'https://logging.googleapis.com/v2/{parent}/metrics',
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['parent'],
                    pathParams: ['parent'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * logging.projects.metrics.get
             *
             * @desc Gets a logs-based metric.
             *
             * @alias logging.projects.metrics.get
             * @memberOf! logging(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.metricName The resource name of the desired metric: "projects/[PROJECT_ID]/metrics/[METRIC_ID]"
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
                        url: 'https://logging.googleapis.com/v2/{metricName}',
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['metricName'],
                    pathParams: ['metricName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        }
    };
    self.billingAccounts = {
        logs: {
            /**
             * logging.billingAccounts.logs.delete
             *
             * @desc Deletes all the log entries in a log. The log reappears if it receives new entries. Log entries written shortly before the delete operation might not be deleted.
             *
             * @alias logging.billingAccounts.logs.delete
             * @memberOf! logging(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.logName Required. The resource name of the log to delete: "projects/[PROJECT_ID]/logs/[LOG_ID]" "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]" "folders/[FOLDER_ID]/logs/[LOG_ID]" [LOG_ID] must be URL-encoded. For example, "projects/my-project-id/logs/syslog", "organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity". For more information about log names, see LogEntry.
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
                        url: 'https://logging.googleapis.com/v2/{logName}',
                        method: 'DELETE'
                    }, options),
                    params: params,
                    requiredParams: ['logName'],
                    pathParams: ['logName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * logging.billingAccounts.logs.list
             *
             * @desc Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.
             *
             * @alias logging.billingAccounts.logs.list
             * @memberOf! logging(v2)
             *
             * @param {object} params Parameters for request
             * @param {string=} params.pageToken Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
             * @param {integer=} params.pageSize Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
             * @param {string} params.parent Required. The resource name that owns the logs: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]"
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
                        url: 'https://logging.googleapis.com/v2/{parent}/logs',
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['parent'],
                    pathParams: ['parent'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        },
        sinks: {
            /**
             * logging.billingAccounts.sinks.update
             *
             * @desc Updates a sink. If the named sink doesn't exist, then this method is identical to sinks.create. If the named sink does exist, then this method replaces the following fields in the existing sink with values from the new sink: destination, filter, output_version_format, start_time, and end_time. The updated filter might also have a new writer_identity; see the unique_writer_identity field.
             *
             * @alias logging.billingAccounts.sinks.update
             * @memberOf! logging(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.sinkName Required. The full resource name of the sink to update, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" Example: "projects/my-project-id/sinks/my-sink-id".
             * @param {boolean=} params.uniqueWriterIdentity Optional. See sinks.create for a description of this field. When updating a sink, the effect of this field on the value of writer_identity in the updated sink depends on both the old and new values of this field: If the old and new values of this field are both false or both true, then there is no change to the sink's writer_identity. If the old value is false and the new value is true, then writer_identity is changed to a unique service account. It is an error if the old value is true and the new value is false.
             * @param {logging(v2).LogSink} params.resource Request body data
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
                        url: 'https://logging.googleapis.com/v2/{sinkName}',
                        method: 'PUT'
                    }, options),
                    params: params,
                    requiredParams: ['sinkName'],
                    pathParams: ['sinkName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * logging.billingAccounts.sinks.create
             *
             * @desc Creates a sink that exports specified log entries to a destination. The export of newly-ingested log entries begins immediately, unless the current time is outside the sink's start and end times or the sink's writer_identity is not permitted to write to the destination. A sink can export log entries only from the resource owning the sink.
             *
             * @alias logging.billingAccounts.sinks.create
             * @memberOf! logging(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.parent Required. The resource in which to create the sink: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]" Examples: "projects/my-logging-project", "organizations/123456789".
             * @param {boolean=} params.uniqueWriterIdentity Optional. Determines the kind of IAM identity returned as writer_identity in the new sink. If this value is omitted or set to false, and if the sink's parent is a project, then the value returned as writer_identity is the same group or service account used by Stackdriver Logging before the addition of writer identities to this API. The sink's destination must be in the same project as the sink itself.If this field is set to true, or if the sink is owned by a non-project resource such as an organization, then the value of writer_identity will be a unique service account used only for exports from the new sink. For more information, see writer_identity in LogSink.
             * @param {logging(v2).LogSink} params.resource Request body data
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
                        url: 'https://logging.googleapis.com/v2/{parent}/sinks',
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['parent'],
                    pathParams: ['parent'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * logging.billingAccounts.sinks.delete
             *
             * @desc Deletes a sink. If the sink has a unique writer_identity, then that service account is also deleted.
             *
             * @alias logging.billingAccounts.sinks.delete
             * @memberOf! logging(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.sinkName Required. The full resource name of the sink to delete, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" Example: "projects/my-project-id/sinks/my-sink-id".
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
                        url: 'https://logging.googleapis.com/v2/{sinkName}',
                        method: 'DELETE'
                    }, options),
                    params: params,
                    requiredParams: ['sinkName'],
                    pathParams: ['sinkName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * logging.billingAccounts.sinks.list
             *
             * @desc Lists sinks.
             *
             * @alias logging.billingAccounts.sinks.list
             * @memberOf! logging(v2)
             *
             * @param {object} params Parameters for request
             * @param {string=} params.pageToken Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
             * @param {integer=} params.pageSize Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
             * @param {string} params.parent Required. The parent resource whose sinks are to be listed: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]"
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
                        url: 'https://logging.googleapis.com/v2/{parent}/sinks',
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['parent'],
                    pathParams: ['parent'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * logging.billingAccounts.sinks.get
             *
             * @desc Gets a sink.
             *
             * @alias logging.billingAccounts.sinks.get
             * @memberOf! logging(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.sinkName Required. The resource name of the sink: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" Example: "projects/my-project-id/sinks/my-sink-id".
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
                        url: 'https://logging.googleapis.com/v2/{sinkName}',
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['sinkName'],
                    pathParams: ['sinkName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        }
    };
}
module.exports = Logging;
//# sourceMappingURL=v2.js.map