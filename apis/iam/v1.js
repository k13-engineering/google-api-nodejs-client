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
 * Google Identity and Access Management (IAM) API
 *
 * Manages identity and access control for Google Cloud Platform resources, including the creation of service accounts, which you can use to authenticate to Google and make API calls.
 *
 * @example
 * const google = require('googleapis');
 * const iam = google.iam('v1');
 *
 * @namespace iam
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Iam
 */
function Iam(options) {
    const self = this;
    self._options = options || {};
    self.projects = {
        serviceAccounts: {
            /**
             * iam.projects.serviceAccounts.setIamPolicy
             *
             * @desc Sets the IAM access control policy for a ServiceAccount.
             *
             * @alias iam.projects.serviceAccounts.setIamPolicy
             * @memberOf! iam(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
             * @param {iam(v1).SetIamPolicyRequest} params.resource Request body data
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
                        url: 'https://iam.googleapis.com/v1/{resource}:setIamPolicy',
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
             * iam.projects.serviceAccounts.signJwt
             *
             * @desc Signs a JWT using a service account's system-managed private key.  If no expiry time (`exp`) is provided in the `SignJwtRequest`, IAM sets an an expiry time of one hour by default. If you request an expiry time of more than one hour, the request will fail.
             *
             * @alias iam.projects.serviceAccounts.signJwt
             * @memberOf! iam(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name The resource name of the service account in the following format: `projects/{PROJECT_ID}/serviceAccounts/{SERVICE_ACCOUNT_EMAIL}`. Using `-` as a wildcard for the project will infer the project from the account. The `account` value can be the `email` address or the `unique_id` of the service account.
             * @param {iam(v1).SignJwtRequest} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            signJwt: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const parameters = {
                    options: Object.assign({
                        url: 'https://iam.googleapis.com/v1/{name}:signJwt',
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
             * iam.projects.serviceAccounts.create
             *
             * @desc Creates a ServiceAccount and returns it.
             *
             * @alias iam.projects.serviceAccounts.create
             * @memberOf! iam(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name Required. The resource name of the project associated with the service accounts, such as `projects/my-project-123`.
             * @param {iam(v1).CreateServiceAccountRequest} params.resource Request body data
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
                        url: 'https://iam.googleapis.com/v1/{name}/serviceAccounts',
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
             * iam.projects.serviceAccounts.getIamPolicy
             *
             * @desc Returns the IAM access control policy for a ServiceAccount.
             *
             * @alias iam.projects.serviceAccounts.getIamPolicy
             * @memberOf! iam(v1)
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
                        url: 'https://iam.googleapis.com/v1/{resource}:getIamPolicy',
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
             * iam.projects.serviceAccounts.get
             *
             * @desc Gets a ServiceAccount.
             *
             * @alias iam.projects.serviceAccounts.get
             * @memberOf! iam(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name The resource name of the service account in the following format: `projects/{PROJECT_ID}/serviceAccounts/{SERVICE_ACCOUNT_EMAIL}`. Using `-` as a wildcard for the project will infer the project from the account. The `account` value can be the `email` address or the `unique_id` of the service account.
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
                        url: 'https://iam.googleapis.com/v1/{name}',
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
             * iam.projects.serviceAccounts.update
             *
             * @desc Updates a ServiceAccount.  Currently, only the following fields are updatable: `display_name` . The `etag` is mandatory.
             *
             * @alias iam.projects.serviceAccounts.update
             * @memberOf! iam(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name The resource name of the service account in the following format: `projects/{PROJECT_ID}/serviceAccounts/{SERVICE_ACCOUNT_EMAIL}`.  Requests using `-` as a wildcard for the project will infer the project from the `account` and the `account` value can be the `email` address or the `unique_id` of the service account.  In responses the resource name will always be in the format `projects/{PROJECT_ID}/serviceAccounts/{SERVICE_ACCOUNT_EMAIL}`.
             * @param {iam(v1).ServiceAccount} params.resource Request body data
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
                        url: 'https://iam.googleapis.com/v1/{name}',
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
             * iam.projects.serviceAccounts.testIamPermissions
             *
             * @desc Tests the specified permissions against the IAM access control policy for a ServiceAccount.
             *
             * @alias iam.projects.serviceAccounts.testIamPermissions
             * @memberOf! iam(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
             * @param {iam(v1).TestIamPermissionsRequest} params.resource Request body data
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
                        url: 'https://iam.googleapis.com/v1/{resource}:testIamPermissions',
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
             * iam.projects.serviceAccounts.delete
             *
             * @desc Deletes a ServiceAccount.
             *
             * @alias iam.projects.serviceAccounts.delete
             * @memberOf! iam(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name The resource name of the service account in the following format: `projects/{PROJECT_ID}/serviceAccounts/{SERVICE_ACCOUNT_EMAIL}`. Using `-` as a wildcard for the project will infer the project from the account. The `account` value can be the `email` address or the `unique_id` of the service account.
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
                        url: 'https://iam.googleapis.com/v1/{name}',
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
             * iam.projects.serviceAccounts.list
             *
             * @desc Lists ServiceAccounts for a project.
             *
             * @alias iam.projects.serviceAccounts.list
             * @memberOf! iam(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name Required. The resource name of the project associated with the service accounts, such as `projects/my-project-123`.
             * @param {string=} params.pageToken Optional pagination token returned in an earlier ListServiceAccountsResponse.next_page_token.
             * @param {integer=} params.pageSize Optional limit on the number of service accounts to include in the response. Further accounts can subsequently be obtained by including the ListServiceAccountsResponse.next_page_token in a subsequent request.
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
                        url: 'https://iam.googleapis.com/v1/{name}/serviceAccounts',
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
             * iam.projects.serviceAccounts.signBlob
             *
             * @desc Signs a blob using a service account's system-managed private key.
             *
             * @alias iam.projects.serviceAccounts.signBlob
             * @memberOf! iam(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name The resource name of the service account in the following format: `projects/{PROJECT_ID}/serviceAccounts/{SERVICE_ACCOUNT_EMAIL}`. Using `-` as a wildcard for the project will infer the project from the account. The `account` value can be the `email` address or the `unique_id` of the service account.
             * @param {iam(v1).SignBlobRequest} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            signBlob: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const parameters = {
                    options: Object.assign({
                        url: 'https://iam.googleapis.com/v1/{name}:signBlob',
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['name'],
                    pathParams: ['name'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            keys: {
                /**
                 * iam.projects.serviceAccounts.keys.create
                 *
                 * @desc Creates a ServiceAccountKey and returns it.
                 *
                 * @alias iam.projects.serviceAccounts.keys.create
                 * @memberOf! iam(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name The resource name of the service account in the following format: `projects/{PROJECT_ID}/serviceAccounts/{SERVICE_ACCOUNT_EMAIL}`. Using `-` as a wildcard for the project will infer the project from the account. The `account` value can be the `email` address or the `unique_id` of the service account.
                 * @param {iam(v1).CreateServiceAccountKeyRequest} params.resource Request body data
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
                            url: 'https://iam.googleapis.com/v1/{name}/keys',
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
                 * iam.projects.serviceAccounts.keys.delete
                 *
                 * @desc Deletes a ServiceAccountKey.
                 *
                 * @alias iam.projects.serviceAccounts.keys.delete
                 * @memberOf! iam(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name The resource name of the service account key in the following format: `projects/{PROJECT_ID}/serviceAccounts/{SERVICE_ACCOUNT_EMAIL}/keys/{key}`. Using `-` as a wildcard for the project will infer the project from the account. The `account` value can be the `email` address or the `unique_id` of the service account.
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
                            url: 'https://iam.googleapis.com/v1/{name}',
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
                 * iam.projects.serviceAccounts.keys.list
                 *
                 * @desc Lists ServiceAccountKeys.
                 *
                 * @alias iam.projects.serviceAccounts.keys.list
                 * @memberOf! iam(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string=} params.keyTypes Filters the types of keys the user wants to include in the list response. Duplicate key types are not allowed. If no key type is provided, all keys are returned.
                 * @param {string} params.name The resource name of the service account in the following format: `projects/{PROJECT_ID}/serviceAccounts/{SERVICE_ACCOUNT_EMAIL}`.  Using `-` as a wildcard for the project, will infer the project from the account. The `account` value can be the `email` address or the `unique_id` of the service account.
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
                            url: 'https://iam.googleapis.com/v1/{name}/keys',
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
                 * iam.projects.serviceAccounts.keys.get
                 *
                 * @desc Gets the ServiceAccountKey by key id.
                 *
                 * @alias iam.projects.serviceAccounts.keys.get
                 * @memberOf! iam(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string=} params.publicKeyType The output format of the public key requested. X509_PEM is the default output format.
                 * @param {string} params.name The resource name of the service account key in the following format: `projects/{PROJECT_ID}/serviceAccounts/{SERVICE_ACCOUNT_EMAIL}/keys/{key}`.  Using `-` as a wildcard for the project will infer the project from the account. The `account` value can be the `email` address or the `unique_id` of the service account.
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
                            url: 'https://iam.googleapis.com/v1/{name}',
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
        }
    };
    self.roles = {
        /**
         * iam.roles.queryGrantableRoles
         *
         * @desc Queries roles that can be granted on a particular resource. A role is grantable if it can be used as the role in a binding for a policy for that resource.
         *
         * @alias iam.roles.queryGrantableRoles
         * @memberOf! iam(v1)
         *
         * @param {object} params Parameters for request
         * @param {iam(v1).QueryGrantableRolesRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        queryGrantableRoles: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://iam.googleapis.com/v1/roles:queryGrantableRoles',
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
}
module.exports = Iam;
//# sourceMappingURL=v1.js.map