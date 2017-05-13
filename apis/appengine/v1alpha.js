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
 * Google App Engine Admin API
 *
 * The App Engine Admin API enables developers to provision and manage their App Engine applications.
 *
 * @example
 * const google = require('googleapis');
 * const appengine = google.appengine('v1alpha');
 *
 * @namespace appengine
 * @type {Function}
 * @version v1alpha
 * @variation v1alpha
 * @param {object=} options Options for Appengine
 */
function Appengine(options) {
    const self = this;
    self._options = options || {};
    self.apps = {
        operations: {
            /**
             * appengine.apps.operations.list
             *
             * @desc Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.NOTE: the name binding below allows API services to override the binding to use different resource name schemes, such as users/x/operations.
             *
             * @alias appengine.apps.operations.list
             * @memberOf! appengine(v1alpha)
             *
             * @param {object} params Parameters for request
             * @param {string} params.appsId Part of `name`. The name of the operation collection.
             * @param {string=} params.pageToken The standard list page token.
             * @param {integer=} params.pageSize The standard list page size.
             * @param {string=} params.filter The standard list filter.
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
                        url: 'https://appengine.googleapis.com/v1alpha/apps/{appsId}/operations',
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['appsId'],
                    pathParams: ['appsId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * appengine.apps.operations.get
             *
             * @desc Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
             *
             * @alias appengine.apps.operations.get
             * @memberOf! appengine(v1alpha)
             *
             * @param {object} params Parameters for request
             * @param {string} params.operationsId Part of `name`. See documentation of `appsId`.
             * @param {string} params.appsId Part of `name`. The name of the operation resource.
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
                        url: 'https://appengine.googleapis.com/v1alpha/apps/{appsId}/operations/{operationsId}',
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['appsId', 'operationsId'],
                    pathParams: ['operationsId', 'appsId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        },
        locations: {
            /**
             * appengine.apps.locations.list
             *
             * @desc Lists information about the supported locations for this service.
             *
             * @alias appengine.apps.locations.list
             * @memberOf! appengine(v1alpha)
             *
             * @param {object} params Parameters for request
             * @param {string} params.appsId Part of `name`. The resource that owns the locations collection, if applicable.
             * @param {string=} params.pageToken The standard list page token.
             * @param {integer=} params.pageSize The standard list page size.
             * @param {string=} params.filter The standard list filter.
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
                        url: 'https://appengine.googleapis.com/v1alpha/apps/{appsId}/locations',
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['appsId'],
                    pathParams: ['appsId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * appengine.apps.locations.get
             *
             * @desc Get information about a location.
             *
             * @alias appengine.apps.locations.get
             * @memberOf! appengine(v1alpha)
             *
             * @param {object} params Parameters for request
             * @param {string} params.appsId Part of `name`. Resource name for the location.
             * @param {string} params.locationsId Part of `name`. See documentation of `appsId`.
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
                        url: 'https://appengine.googleapis.com/v1alpha/apps/{appsId}/locations/{locationsId}',
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['appsId', 'locationsId'],
                    pathParams: ['appsId', 'locationsId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        }
    };
}
module.exports = Appengine;
//# sourceMappingURL=v1alpha.js.map