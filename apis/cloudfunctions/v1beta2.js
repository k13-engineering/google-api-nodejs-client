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
 * Google Cloud Functions API
 *
 * API for managing lightweight user-provided functions executed in response to events.
 *
 * @example
 * const google = require('googleapis');
 * const cloudfunctions = google.cloudfunctions('v1beta2');
 *
 * @namespace cloudfunctions
 * @type {Function}
 * @version v1beta2
 * @variation v1beta2
 * @param {object=} options Options for Cloudfunctions
 */
function Cloudfunctions(options) {
    const self = this;
    self._options = options || {};
    self.operations = {
        /**
         * cloudfunctions.operations.list
         *
         * @desc Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.  NOTE: the `name` binding below allows API services to override the binding to use different resource name schemes, such as `users/x/operations`.
         *
         * @alias cloudfunctions.operations.list
         * @memberOf! cloudfunctions(v1beta2)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter The standard list filter.
         * @param {string=} params.name The name of the operation collection.
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
                    url: 'https://cloudfunctions.googleapis.com/v1beta2/operations',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * cloudfunctions.operations.get
         *
         * @desc Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service.
         *
         * @alias cloudfunctions.operations.get
         * @memberOf! cloudfunctions(v1beta2)
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
                    url: 'https://cloudfunctions.googleapis.com/v1beta2/{name}',
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
        locations: {
            /**
             * cloudfunctions.projects.locations.list
             *
             * @desc Lists information about the supported locations for this service.
             *
             * @alias cloudfunctions.projects.locations.list
             * @memberOf! cloudfunctions(v1beta2)
             *
             * @param {object} params Parameters for request
             * @param {string=} params.filter The standard list filter.
             * @param {string} params.name The resource that owns the locations collection, if applicable.
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
                        url: 'https://cloudfunctions.googleapis.com/v1beta2/{name}/locations',
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['name'],
                    pathParams: ['name'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            functions: {
                /**
                 * cloudfunctions.projects.locations.functions.get
                 *
                 * @desc Returns a function with the given name from the requested project.
                 *
                 * @alias cloudfunctions.projects.locations.functions.get
                 * @memberOf! cloudfunctions(v1beta2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name The name of the function which details should be obtained.
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
                            url: 'https://cloudfunctions.googleapis.com/v1beta2/{name}',
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
                 * cloudfunctions.projects.locations.functions.update
                 *
                 * @desc Updates existing function.
                 *
                 * @alias cloudfunctions.projects.locations.functions.update
                 * @memberOf! cloudfunctions(v1beta2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name The name of the function to be updated.
                 * @param {cloudfunctions(v1beta2).CloudFunction} params.resource Request body data
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
                            url: 'https://cloudfunctions.googleapis.com/v1beta2/{name}',
                            method: 'PUT'
                        }, options),
                        params: params,
                        requiredParams: ['name'],
                        pathParams: ['name'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * cloudfunctions.projects.locations.functions.delete
                 *
                 * @desc Deletes a function with the given name from the specified project. If the given function is used by some trigger, the trigger will be updated to remove this function.
                 *
                 * @alias cloudfunctions.projects.locations.functions.delete
                 * @memberOf! cloudfunctions(v1beta2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name The name of the function which should be deleted.
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
                            url: 'https://cloudfunctions.googleapis.com/v1beta2/{name}',
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
                 * cloudfunctions.projects.locations.functions.list
                 *
                 * @desc Returns a list of functions that belong to the requested project.
                 *
                 * @alias cloudfunctions.projects.locations.functions.list
                 * @memberOf! cloudfunctions(v1beta2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.location The project and location from which the function should be listed, specified in the format `projects/x/locations/x` If you want to list functions in all locations, use "-" in place of a location.
                 * @param {string=} params.pageToken The value returned by the last `ListFunctionsResponse`; indicates that this is a continuation of a prior `ListFunctions` call, and that the system should return the next page of data.
                 * @param {integer=} params.pageSize Maximum number of functions to return per call.
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
                            url: 'https://cloudfunctions.googleapis.com/v1beta2/{location}/functions',
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['location'],
                        pathParams: ['location'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * cloudfunctions.projects.locations.functions.create
                 *
                 * @desc Creates a new function. If a function with the given name already exists in the specified project, the long running operation will return `ALREADY_EXISTS` error.
                 *
                 * @alias cloudfunctions.projects.locations.functions.create
                 * @memberOf! cloudfunctions(v1beta2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.location The project and location in which the function should be created, specified in the format `projects/x/locations/x`
                 * @param {cloudfunctions(v1beta2).CloudFunction} params.resource Request body data
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
                            url: 'https://cloudfunctions.googleapis.com/v1beta2/{location}/functions',
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['location'],
                        pathParams: ['location'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * cloudfunctions.projects.locations.functions.call
                 *
                 * @desc Invokes synchronously deployed function. To be used for testing, very limited traffic allowed.
                 *
                 * @alias cloudfunctions.projects.locations.functions.call
                 * @memberOf! cloudfunctions(v1beta2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name The name of the function to be called.
                 * @param {cloudfunctions(v1beta2).CallFunctionRequest} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                call: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const parameters = {
                        options: Object.assign({
                            url: 'https://cloudfunctions.googleapis.com/v1beta2/{name}:call',
                            method: 'POST'
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
module.exports = Cloudfunctions;
//# sourceMappingURL=v1beta2.js.map