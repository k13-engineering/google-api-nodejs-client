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
 * Cloud Source Repositories API
 *
 * Access source code repositories hosted by Google.
 *
 * @example
 * const google = require('googleapis');
 * const sourcerepo = google.sourcerepo('v1');
 *
 * @namespace sourcerepo
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Sourcerepo
 */
function Sourcerepo(options) {
    const self = this;
    self._options = options || {};
    self.projects = {
        repos: {
            /**
             * sourcerepo.projects.repos.getIamPolicy
             *
             * @desc Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
             *
             * @alias sourcerepo.projects.repos.getIamPolicy
             * @memberOf! sourcerepo(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            getIamPolicy: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const parameters = {
                    options: Object.assign({
                        url: 'https://sourcerepo.googleapis.com/v1/{resource}:getIamPolicy',
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['resource'],
                    pathParams: ['resource'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * sourcerepo.projects.repos.get
             *
             * @desc Returns information about a repo.
             *
             * @alias sourcerepo.projects.repos.get
             * @memberOf! sourcerepo(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name The name of the requested repository. Values are of the form `projects/<project>/repos/<repo>`.
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
                        url: 'https://sourcerepo.googleapis.com/v1/{name}',
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
             * sourcerepo.projects.repos.testIamPermissions
             *
             * @desc Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.
             *
             * @alias sourcerepo.projects.repos.testIamPermissions
             * @memberOf! sourcerepo(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
             * @param {sourcerepo(v1).TestIamPermissionsRequest} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            testIamPermissions: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const parameters = {
                    options: Object.assign({
                        url: 'https://sourcerepo.googleapis.com/v1/{resource}:testIamPermissions',
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['resource'],
                    pathParams: ['resource'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * sourcerepo.projects.repos.delete
             *
             * @desc Deletes a repo.
             *
             * @alias sourcerepo.projects.repos.delete
             * @memberOf! sourcerepo(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name The name of the repo to delete. Values are of the form `projects/<project>/repos/<repo>`.
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
                        url: 'https://sourcerepo.googleapis.com/v1/{name}',
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
             * sourcerepo.projects.repos.list
             *
             * @desc Returns all repos belonging to a project.
             *
             * @alias sourcerepo.projects.repos.list
             * @memberOf! sourcerepo(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name The project ID whose repos should be listed. Values are of the form `projects/<project>`.
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
                        url: 'https://sourcerepo.googleapis.com/v1/{name}/repos',
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
             * sourcerepo.projects.repos.create
             *
             * @desc Creates a repo in the given project with the given name..  If the named repository already exists, `CreateRepo` returns `ALREADY_EXISTS`.
             *
             * @alias sourcerepo.projects.repos.create
             * @memberOf! sourcerepo(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.parent The project in which to create the repo. Values are of the form `projects/<project>`.
             * @param {sourcerepo(v1).Repo} params.resource Request body data
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
                        url: 'https://sourcerepo.googleapis.com/v1/{parent}/repos',
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
             * sourcerepo.projects.repos.setIamPolicy
             *
             * @desc Sets the access control policy on the specified resource. Replaces any existing policy.
             *
             * @alias sourcerepo.projects.repos.setIamPolicy
             * @memberOf! sourcerepo(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
             * @param {sourcerepo(v1).SetIamPolicyRequest} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            setIamPolicy: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const parameters = {
                    options: Object.assign({
                        url: 'https://sourcerepo.googleapis.com/v1/{resource}:setIamPolicy',
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['resource'],
                    pathParams: ['resource'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        }
    };
}
module.exports = Sourcerepo;
//# sourceMappingURL=v1.js.map