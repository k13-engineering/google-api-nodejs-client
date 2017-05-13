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
 * Google Tracing API
 *
 * Send and retrieve trace data from Google Stackdriver Trace.

 *
 * @example
 * const google = require('googleapis');
 * const tracing = google.tracing('v2');
 *
 * @namespace tracing
 * @type {Function}
 * @version v2
 * @variation v2
 * @param {object=} options Options for Tracing
 */
function Tracing(options) {
    const self = this;
    self._options = options || {};
    self.projects = {
        traces: {
            /**
             * tracing.projects.traces.listSpans
             *
             * @desc Returns a list of spans within a trace.
             *
             * @alias tracing.projects.traces.listSpans
             * @memberOf! tracing(v2)
             *
             * @param {object} params Parameters for request
             * @param {string=} params.pageToken Token identifying the page of results to return. If provided, use the value of the `nextPageToken` field from a previous request. Optional.
             * @param {string} params.parent ID of the trace for which to list child spans. Format is `projects/PROJECT_ID/traces/TRACE_ID`.
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            listSpans: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const parameters = {
                    options: Object.assign({
                        url: 'https://tracing.googleapis.com/v2/{parent}:listSpans',
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
             * tracing.projects.traces.list
             *
             * @desc Returns of a list of traces that match the specified filter conditions.
             *
             * @alias tracing.projects.traces.list
             * @memberOf! tracing(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.parent ID of the Cloud project where the trace data is stored which is `projects/PROJECT_ID`.
             * @param {string=} params.orderBy Field used to sort the returned traces. Optional. Can be one of the following:  *   `trace_id` *   `name` (`name` field of root span in the trace) *   `duration` (difference between `end_time` and `start_time` fields of      the root span) *   `start` (`start_time` field of the root span)  Descending order can be specified by appending `desc` to the sort field (for example, `name desc`).  Only one sort field is permitted.
             * @param {string=} params.filter An optional filter for the request. Example: `version_label_key:a some_label:some_label_key` returns traces from version `a` and has `some_label` with `some_label_key`.
             * @param {string=} params.endTime End of the time interval (inclusive) during which the trace data was collected from the application.
             * @param {string=} params.startTime Start of the time interval (inclusive) during which the trace data was collected from the application.
             * @param {string=} params.pageToken Token identifying the page of results to return. If provided, use the value of the `next_page_token` field from a previous request. Optional.
             * @param {integer=} params.pageSize Maximum number of traces to return. If not specified or <= 0, the implementation selects a reasonable value. The implementation may return fewer traces than the requested page size. Optional.
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
                        url: 'https://tracing.googleapis.com/v2/{parent}/traces',
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
             * tracing.projects.traces.batchWrite
             *
             * @desc Sends new spans to Stackdriver Trace or updates existing traces. If the name of a trace that you send matches that of an existing trace, new spans are added to the existing trace. Attempt to update existing spans results undefined behavior. If the name does not match, a new trace is created with given set of spans.
             *
             * @alias tracing.projects.traces.batchWrite
             * @memberOf! tracing(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name Name of the project where the spans belong to. Format is `projects/PROJECT_ID`.
             * @param {tracing(v2).BatchWriteSpansRequest} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            batchWrite: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const parameters = {
                    options: Object.assign({
                        url: 'https://tracing.googleapis.com/v2/{name}/traces:batchWrite',
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['name'],
                    pathParams: ['name'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            spans: {
                /**
                 * tracing.projects.traces.spans.create
                 *
                 * @desc Creates a new Span.
                 *
                 * @alias tracing.projects.traces.spans.create
                 * @memberOf! tracing(v2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name The resource name of Span in the format `projects/PROJECT_ID/traces/TRACE_ID/spans/SPAN_ID`. `TRACE_ID` is a unique identifier for a trace within a project and is a base16-encoded, case-insensitive string and is required to be 32 char long. `SPAN_ID` is a unique identifier for a span within a trace. It is a base 16-encoded, case-insensitive string of a 8-bytes array and is required to be 16 char long.
                 * @param {tracing(v2).Span} params.resource Request body data
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
                            url: 'https://tracing.googleapis.com/v2/{name}',
                            method: 'PUT'
                        }, options),
                        params: params,
                        requiredParams: ['name'],
                        pathParams: ['name'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                }
            }
        }
    };
}
module.exports = Tracing;
//# sourceMappingURL=v2.js.map