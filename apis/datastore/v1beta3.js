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
 * Google Cloud Datastore API
 *
 * Accesses the schemaless NoSQL database to provide fully managed, robust, scalable storage for your application.

 *
 * @example
 * const google = require('googleapis');
 * const datastore = google.datastore('v1beta3');
 *
 * @namespace datastore
 * @type {Function}
 * @version v1beta3
 * @variation v1beta3
 * @param {object=} options Options for Datastore
 */
function Datastore(options) {
    const self = this;
    self._options = options || {};
    self.projects = {
        /**
         * datastore.projects.allocateIds
         *
         * @desc Allocates IDs for the given keys, which is useful for referencing an entity before it is inserted.
         *
         * @alias datastore.projects.allocateIds
         * @memberOf! datastore(v1beta3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.projectId The ID of the project against which to make the request.
         * @param {datastore(v1beta3).AllocateIdsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        allocateIds: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://datastore.googleapis.com/v1beta3/projects/{projectId}:allocateIds',
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
         * datastore.projects.commit
         *
         * @desc Commits a transaction, optionally creating, deleting or modifying some entities.
         *
         * @alias datastore.projects.commit
         * @memberOf! datastore(v1beta3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.projectId The ID of the project against which to make the request.
         * @param {datastore(v1beta3).CommitRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        commit: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://datastore.googleapis.com/v1beta3/projects/{projectId}:commit',
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
         * datastore.projects.beginTransaction
         *
         * @desc Begins a new transaction.
         *
         * @alias datastore.projects.beginTransaction
         * @memberOf! datastore(v1beta3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.projectId The ID of the project against which to make the request.
         * @param {datastore(v1beta3).BeginTransactionRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        beginTransaction: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://datastore.googleapis.com/v1beta3/projects/{projectId}:beginTransaction',
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
         * datastore.projects.runQuery
         *
         * @desc Queries for entities.
         *
         * @alias datastore.projects.runQuery
         * @memberOf! datastore(v1beta3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.projectId The ID of the project against which to make the request.
         * @param {datastore(v1beta3).RunQueryRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        runQuery: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://datastore.googleapis.com/v1beta3/projects/{projectId}:runQuery',
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
         * datastore.projects.rollback
         *
         * @desc Rolls back a transaction.
         *
         * @alias datastore.projects.rollback
         * @memberOf! datastore(v1beta3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.projectId The ID of the project against which to make the request.
         * @param {datastore(v1beta3).RollbackRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        rollback: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://datastore.googleapis.com/v1beta3/projects/{projectId}:rollback',
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
         * datastore.projects.lookup
         *
         * @desc Looks up entities by key.
         *
         * @alias datastore.projects.lookup
         * @memberOf! datastore(v1beta3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.projectId The ID of the project against which to make the request.
         * @param {datastore(v1beta3).LookupRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        lookup: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://datastore.googleapis.com/v1beta3/projects/{projectId}:lookup',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['projectId'],
                pathParams: ['projectId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
}
module.exports = Datastore;
//# sourceMappingURL=v1beta3.js.map