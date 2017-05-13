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
 * DLP API
 *
 * The Google Data Loss Prevention API provides methods for detection of privacy-sensitive fragments in text, images, and Google Cloud Platform storage repositories.
 *
 * @example
 * const google = require('googleapis');
 * const dlp = google.dlp('v2beta1');
 *
 * @namespace dlp
 * @type {Function}
 * @version v2beta1
 * @variation v2beta1
 * @param {object=} options Options for Dlp
 */
function Dlp(options) {
    const self = this;
    self._options = options || {};
    self.content = {
        /**
         * dlp.content.inspect
         *
         * @desc Find potentially sensitive info in a list of strings. This method has limits on input size, processing time, and output size.
         *
         * @alias dlp.content.inspect
         * @memberOf! dlp(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {dlp(v2beta1).InspectContentRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        inspect: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://dlp.googleapis.com/v2beta1/content:inspect',
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
         * dlp.content.redact
         *
         * @desc Redact potentially sensitive info from a list of strings. This method has limits on input size, processing time, and output size.
         *
         * @alias dlp.content.redact
         * @memberOf! dlp(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {dlp(v2beta1).RedactContentRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        redact: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://dlp.googleapis.com/v2beta1/content:redact',
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
    self.rootCategories = {
        /**
         * dlp.rootCategories.list
         *
         * @desc Returns the list of root categories of sensitive information.
         *
         * @alias dlp.rootCategories.list
         * @memberOf! dlp(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.languageCode Optional language code for localized friendly category names. If omitted or if localized strings are not available, en-US strings will be returned.
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
                    url: 'https://dlp.googleapis.com/v2beta1/rootCategories',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        infoTypes: {
            /**
             * dlp.rootCategories.infoTypes.list
             *
             * @desc Returns sensitive information types for given category.
             *
             * @alias dlp.rootCategories.infoTypes.list
             * @memberOf! dlp(v2beta1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.category Category name as returned by ListRootCategories.
             * @param {string=} params.languageCode Optional BCP-47 language code for localized info type friendly names. If omitted, or if localized strings are not available, en-US strings will be returned.
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
                        url: 'https://dlp.googleapis.com/v2beta1/rootCategories/{category}/infoTypes',
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['category'],
                    pathParams: ['category'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        }
    };
    self.inspect = {
        results: {
            findings: {
                /**
                 * dlp.inspect.results.findings.list
                 *
                 * @desc Returns list of results for given inspect operation result set id.
                 *
                 * @alias dlp.inspect.results.findings.list
                 * @memberOf! dlp(v2beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {integer=} params.pageSize Maximum number of results to return. If 0, the implementation select a reasonable value.
                 * @param {string} params.name Identifier of the results set returned as metadata of the longrunning operation created by a call to CreateInspectOperation. Should be in the format of `inspect/results/{id}.
                 * @param {string=} params.pageToken The value returned by the last `ListInspectFindingsResponse`; indicates that this is a continuation of a prior `ListInspectFindings` call, and that the system should return the next page of data.
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
                            url: 'https://dlp.googleapis.com/v2beta1/{name}/findings',
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['name'],
                        pathParams: ['name'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                }
            }
        },
        operations: {
            /**
             * dlp.inspect.operations.create
             *
             * @desc Schedule a job scanning content in a Google Cloud Platform data repository.
             *
             * @alias dlp.inspect.operations.create
             * @memberOf! dlp(v2beta1)
             *
             * @param {object} params Parameters for request
             * @param {dlp(v2beta1).CreateInspectOperationRequest} params.resource Request body data
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
                        url: 'https://dlp.googleapis.com/v2beta1/inspect/operations',
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
             * dlp.inspect.operations.cancel
             *
             * @desc Cancels an operation. Use the get method to check whether the cancellation succeeded or whether the operation completed despite cancellation.
             *
             * @alias dlp.inspect.operations.cancel
             * @memberOf! dlp(v2beta1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name The name of the operation resource to be cancelled.
             * @param {dlp(v2beta1).CancelOperationRequest} params.resource Request body data
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
                        url: 'https://dlp.googleapis.com/v2beta1/{name}:cancel',
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
             * dlp.inspect.operations.delete
             *
             * @desc This method is not supported and the server returns `UNIMPLEMENTED`.
             *
             * @alias dlp.inspect.operations.delete
             * @memberOf! dlp(v2beta1)
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
                        url: 'https://dlp.googleapis.com/v2beta1/{name}',
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
             * dlp.inspect.operations.list
             *
             * @desc Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.  NOTE: the `name` binding below allows API services to override the binding to use different resource name schemes, such as `users/x/operations`.
             *
             * @alias dlp.inspect.operations.list
             * @memberOf! dlp(v2beta1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name The name of the operation collection.
             * @param {string=} params.pageToken The list page token.
             * @param {integer=} params.pageSize The list page size. The max allowed value is 256 and default is 100.
             * @param {string=} params.filter This parameter supports filtering by done, ie done=true or done=false.
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
                        url: 'https://dlp.googleapis.com/v2beta1/{name}',
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
             * dlp.inspect.operations.get
             *
             * @desc Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service.
             *
             * @alias dlp.inspect.operations.get
             * @memberOf! dlp(v2beta1)
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
                        url: 'https://dlp.googleapis.com/v2beta1/{name}',
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['name'],
                    pathParams: ['name'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        }
    };
}
module.exports = Dlp;
//# sourceMappingURL=v2beta1.js.map