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
 * Google People API
 *
 * Provides access to information about profiles and contacts.
 *
 * @example
 * const google = require('googleapis');
 * const people = google.people('v1');
 *
 * @namespace people
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for People
 */
function People(options) {
    const self = this;
    self._options = options || {};
    self.people = {
        /**
         * people.people.getBatchGet
         *
         * @desc Provides information about a list of specific people by specifying a list of requested resource names. Use `people/me` to indicate the authenticated user.
         *
         * @alias people.people.getBatchGet
         * @memberOf! people(v1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.requestMask.includeField Comma-separated list of fields to be included in the response. Omitting this field will include all fields except for connections.list requests, which have a default mask that includes common fields like metadata, name, photo, and profile url. Each path should start with `person.`: for example, `person.names` or `person.photos`.
         * @param {string=} params.resourceNames The resource name, such as one returned by [`people.connections.list`](/people/api/rest/v1/people.connections/list), of one of the people to provide information about. You can include this parameter up to 50 times in one request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getBatchGet: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://people.googleapis.com/v1/people:batchGet',
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
         * people.people.get
         *
         * @desc Provides information about a person for a resource name. Use `people/me` to indicate the authenticated user.
         *
         * @alias people.people.get
         * @memberOf! people(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.resourceName The resource name of the person to provide information about.  - To get information about the authenticated user, specify `people/me`. - To get information about any user, specify the resource name that   identifies the user, such as the resource names returned by   [`people.connections.list`](/people/api/rest/v1/people.connections/list).
         * @param {string=} params.requestMask.includeField Comma-separated list of fields to be included in the response. Omitting this field will include all fields except for connections.list requests, which have a default mask that includes common fields like metadata, name, photo, and profile url. Each path should start with `person.`: for example, `person.names` or `person.photos`.
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
                    url: 'https://people.googleapis.com/v1/{resourceName}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['resourceName'],
                pathParams: ['resourceName'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        connections: {
            /**
             * people.people.connections.list
             *
             * @desc Provides a list of the authenticated user's contacts merged with any linked profiles.
             *
             * @alias people.people.connections.list
             * @memberOf! people(v1)
             *
             * @param {object} params Parameters for request
             * @param {integer=} params.pageSize The number of connections to include in the response. Valid values are between 1 and 500, inclusive. Defaults to 100.
             * @param {string=} params.requestMask.includeField Comma-separated list of fields to be included in the response. Omitting this field will include all fields except for connections.list requests, which have a default mask that includes common fields like metadata, name, photo, and profile url. Each path should start with `person.`: for example, `person.names` or `person.photos`.
             * @param {string=} params.syncToken A sync token, returned by a previous call to `people.connections.list`. Only resources changed since the sync token was created will be returned.
             * @param {string=} params.sortOrder The order in which the connections should be sorted. Defaults to `LAST_MODIFIED_ASCENDING`.
             * @param {boolean=} params.requestSyncToken Whether the response should include a sync token, which can be used to get all changes since the last request.
             * @param {string=} params.pageToken The token of the page to be returned.
             * @param {string} params.resourceName The resource name to return connections for. Only `people/me` is valid.
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
                        url: 'https://people.googleapis.com/v1/{resourceName}/connections',
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['resourceName'],
                    pathParams: ['resourceName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        }
    };
}
module.exports = People;
//# sourceMappingURL=v1.js.map