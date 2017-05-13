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
 * Google Cloud Resource Manager API
 *
 * The Google Cloud Resource Manager API provides methods for creating, reading, and updating project metadata.
 *
 * @example
 * const google = require('googleapis');
 * const cloudresourcemanager = google.cloudresourcemanager('v1beta1');
 *
 * @namespace cloudresourcemanager
 * @type {Function}
 * @version v1beta1
 * @variation v1beta1
 * @param {object=} options Options for Cloudresourcemanager
 */
function Cloudresourcemanager(options) {
    const self = this;
    self._options = options || {};
    self.projects = {
        /**
         * cloudresourcemanager.projects.list
         *
         * @desc Lists Projects that are visible to the user and satisfy the specified filter. This method returns Projects in an unspecified order. New Projects do not necessarily appear at the end of the list.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud Resource Manager API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/cloudresourcemanager
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var cloudResourceManager = google.cloudresourcemanager('v1beta1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     auth: authClient
         *   };
         *
         *   var handlePage = function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     var projectsPage = response['projects'];
         *     if (!projectsPage) {
         *       return;
         *     }
         *     for (var i = 0; i < projectsPage.length; i++) {
         *       // TODO: Change code below to process each resource in `projectsPage`:
         *       console.log(JSON.stringify(projectsPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.pageToken = response.nextPageToken;
         *       cloudResourceManager.projects.list(request, handlePage);
         *     }
         *   };
         *
         *   cloudResourceManager.projects.list(request, handlePage);
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient)) {
         *     if (err) {
         *       console.log('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias cloudresourcemanager.projects.list
         * @memberOf! cloudresourcemanager(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.pageToken A pagination token returned from a previous call to ListProjects that indicates from where listing should continue.  Optional.
         * @param {integer=} params.pageSize The maximum number of Projects to return in the response. The server can return fewer Projects than requested. If unspecified, server picks an appropriate default.  Optional.
         * @param {string=} params.filter An expression for filtering the results of the request.  Filter rules are case insensitive. The fields eligible for filtering are:  + `name` + `id` + <code>labels.<em>key</em></code> where *key* is the name of a label  Some examples of using labels as filters:  |Filter|Description| |------|-----------| |name:how*|The project's name starts with "how".| |name:Howl|The project's name is `Howl` or `howl`.| |name:HOWL|Equivalent to above.| |NAME:howl|Equivalent to above.| |labels.color:*|The project has the label `color`.| |labels.color:red|The project's label `color` has the value `red`.| |labels.color:red&nbsp;labels.size:big|The project's label `color` has the value `red` and its label `size` has the value `big`.  Optional.
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
                    url: 'https://cloudresourcemanager.googleapis.com/v1beta1/projects',
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
         * cloudresourcemanager.projects.create
         *
         * @desc Creates a Project resource.  Initially, the Project resource is owned by its creator exclusively. The creator can later grant permission to others to read or update the Project.  Several APIs are activated automatically for the Project, including Google Cloud Storage.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud Resource Manager API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/cloudresourcemanager
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var cloudResourceManager = google.cloudresourcemanager('v1beta1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   cloudResourceManager.projects.create(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient)) {
         *     if (err) {
         *       console.log('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias cloudresourcemanager.projects.create
         * @memberOf! cloudresourcemanager(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.useLegacyStack A safety hatch to opt out of the new reliable project creation process.
         * @param {cloudresourcemanager(v1beta1).Project} params.resource Request body data
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
                    url: 'https://cloudresourcemanager.googleapis.com/v1beta1/projects',
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
         * cloudresourcemanager.projects.setIamPolicy
         *
         * @desc Sets the IAM access control policy for the specified Project. Replaces any existing policy.  The following constraints apply when using `setIamPolicy()`:  + Project does not support `allUsers` and `allAuthenticatedUsers` as `members` in a `Binding` of a `Policy`.  + The owner role can be granted only to `user` and `serviceAccount`.  + Service accounts can be made owners of a project directly without any restrictions. However, to be added as an owner, a user must be invited via Cloud Platform console and must accept the invitation.  + A user cannot be granted the owner role using `setIamPolicy()`. The user must be granted the owner role using the Cloud Platform Console and must explicitly accept the invitation.  + Invitations to grant the owner role cannot be sent using `setIamPolicy()`; they must be sent only using the Cloud Platform Console.  + Membership changes that leave the project without any owners that have accepted the Terms of Service (ToS) will be rejected.  + There must be at least one owner who has accepted the Terms of Service (ToS) agreement in the policy. Calling `setIamPolicy()` to remove the last ToS-accepted owner from the policy will fail. This restriction also applies to legacy projects that no longer have owners who have accepted the ToS. Edits to IAM policies will be rejected until the lack of a ToS-accepting owner is rectified.  + Calling this method requires enabling the App Engine Admin API.  Note: Removing service accounts from policies or changing their roles can render services completely inoperable. It is important to understand how the service account is being used before removing or updating its roles.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud Resource Manager API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/cloudresourcemanager
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var cloudResourceManager = google.cloudresourcemanager('v1beta1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // REQUIRED: The resource for which the policy is being specified.
         *     // `resource` is usually specified as a path. For example, a Project
         *     // resource is specified as `projects/{project}`.
         *     resource_: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   cloudResourceManager.projects.setIamPolicy(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient)) {
         *     if (err) {
         *       console.log('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias cloudresourcemanager.projects.setIamPolicy
         * @memberOf! cloudresourcemanager(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
         * @param {cloudresourcemanager(v1beta1).SetIamPolicyRequest} params.resource Request body data
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
                    url: 'https://cloudresourcemanager.googleapis.com/v1beta1/projects/{resource}:setIamPolicy',
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
         * cloudresourcemanager.projects.getIamPolicy
         *
         * @desc Returns the IAM access control policy for the specified Project. Permission is denied if the policy or the resource does not exist.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud Resource Manager API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/cloudresourcemanager
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var cloudResourceManager = google.cloudresourcemanager('v1beta1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // REQUIRED: The resource for which the policy is being requested.
         *     // `resource` is usually specified as a path. For example, a Project
         *     // resource is specified as `projects/{project}`.
         *     resource_: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   cloudResourceManager.projects.getIamPolicy(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient)) {
         *     if (err) {
         *       console.log('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias cloudresourcemanager.projects.getIamPolicy
         * @memberOf! cloudresourcemanager(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
         * @param {cloudresourcemanager(v1beta1).GetIamPolicyRequest} params.resource Request body data
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
                    url: 'https://cloudresourcemanager.googleapis.com/v1beta1/projects/{resource}:getIamPolicy',
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
         * cloudresourcemanager.projects.undelete
         *
         * @desc Restores the Project identified by the specified `project_id` (for example, `my-project-123`). You can only use this method for a Project that has a lifecycle state of DELETE_REQUESTED. After deletion starts, the Project cannot be restored.  The caller must have modify permissions for this Project.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud Resource Manager API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/cloudresourcemanager
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var cloudResourceManager = google.cloudresourcemanager('v1beta1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The project ID (for example, `foo-bar-123`).
         *     // Required.
         *     projectId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   cloudResourceManager.projects.undelete(request, function(err) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient)) {
         *     if (err) {
         *       console.log('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias cloudresourcemanager.projects.undelete
         * @memberOf! cloudresourcemanager(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.projectId The project ID (for example, `foo-bar-123`).  Required.
         * @param {cloudresourcemanager(v1beta1).UndeleteProjectRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        undelete: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://cloudresourcemanager.googleapis.com/v1beta1/projects/{projectId}:undelete',
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
         * cloudresourcemanager.projects.get
         *
         * @desc Retrieves the Project identified by the specified `project_id` (for example, `my-project-123`).  The caller must have read permissions for this Project.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud Resource Manager API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/cloudresourcemanager
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var cloudResourceManager = google.cloudresourcemanager('v1beta1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The Project ID (for example, `my-project-123`).
         *     // Required.
         *     projectId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   cloudResourceManager.projects.get(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient)) {
         *     if (err) {
         *       console.log('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias cloudresourcemanager.projects.get
         * @memberOf! cloudresourcemanager(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.projectId The Project ID (for example, `my-project-123`).  Required.
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
                    url: 'https://cloudresourcemanager.googleapis.com/v1beta1/projects/{projectId}',
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
         * cloudresourcemanager.projects.getAncestry
         *
         * @desc Gets a list of ancestors in the resource hierarchy for the Project identified by the specified `project_id` (for example, `my-project-123`).  The caller must have read permissions for this Project.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud Resource Manager API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/cloudresourcemanager
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var cloudResourceManager = google.cloudresourcemanager('v1beta1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The Project ID (for example, `my-project-123`).
         *     // Required.
         *     projectId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   cloudResourceManager.projects.getAncestry(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient)) {
         *     if (err) {
         *       console.log('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias cloudresourcemanager.projects.getAncestry
         * @memberOf! cloudresourcemanager(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.projectId The Project ID (for example, `my-project-123`).  Required.
         * @param {cloudresourcemanager(v1beta1).GetAncestryRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getAncestry: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://cloudresourcemanager.googleapis.com/v1beta1/projects/{projectId}:getAncestry',
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
         * cloudresourcemanager.projects.update
         *
         * @desc Updates the attributes of the Project identified by the specified `project_id` (for example, `my-project-123`).  The caller must have modify permissions for this Project.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud Resource Manager API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/cloudresourcemanager
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var cloudResourceManager = google.cloudresourcemanager('v1beta1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The project ID (for example, `my-project-123`).
         *     // Required.
         *     projectId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body. All existing properties
         *       // will be replaced.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   cloudResourceManager.projects.update(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient)) {
         *     if (err) {
         *       console.log('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias cloudresourcemanager.projects.update
         * @memberOf! cloudresourcemanager(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.projectId The project ID (for example, `my-project-123`).  Required.
         * @param {cloudresourcemanager(v1beta1).Project} params.resource Request body data
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
                    url: 'https://cloudresourcemanager.googleapis.com/v1beta1/projects/{projectId}',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['projectId'],
                pathParams: ['projectId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * cloudresourcemanager.projects.testIamPermissions
         *
         * @desc Returns permissions that a caller has on the specified Project.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud Resource Manager API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/cloudresourcemanager
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var cloudResourceManager = google.cloudresourcemanager('v1beta1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // REQUIRED: The resource for which the policy detail is being requested.
         *     // `resource` is usually specified as a path. For example, a Project
         *     // resource is specified as `projects/{project}`.
         *     resource_: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   cloudResourceManager.projects.testIamPermissions(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient)) {
         *     if (err) {
         *       console.log('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias cloudresourcemanager.projects.testIamPermissions
         * @memberOf! cloudresourcemanager(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
         * @param {cloudresourcemanager(v1beta1).TestIamPermissionsRequest} params.resource Request body data
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
                    url: 'https://cloudresourcemanager.googleapis.com/v1beta1/projects/{resource}:testIamPermissions',
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
         * cloudresourcemanager.projects.delete
         *
         * @desc Marks the Project identified by the specified `project_id` (for example, `my-project-123`) for deletion. This method will only affect the Project if the following criteria are met:  + The Project does not have a billing account associated with it. + The Project has a lifecycle state of ACTIVE.  This method changes the Project's lifecycle state from ACTIVE to DELETE_REQUESTED. The deletion starts at an unspecified time, at which point the project is no longer accessible.  Until the deletion completes, you can check the lifecycle state checked by retrieving the Project with GetProject, and the Project remains visible to ListProjects. However, you cannot update the project.  After the deletion completes, the Project is not retrievable by the  GetProject and ListProjects methods.  The caller must have modify permissions for this Project.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud Resource Manager API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/cloudresourcemanager
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var cloudResourceManager = google.cloudresourcemanager('v1beta1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The Project ID (for example, `foo-bar-123`).
         *     // Required.
         *     projectId: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   cloudResourceManager.projects.delete(request, function(err) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient)) {
         *     if (err) {
         *       console.log('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias cloudresourcemanager.projects.delete
         * @memberOf! cloudresourcemanager(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.projectId The Project ID (for example, `foo-bar-123`).  Required.
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
                    url: 'https://cloudresourcemanager.googleapis.com/v1beta1/projects/{projectId}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['projectId'],
                pathParams: ['projectId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.organizations = {
        /**
         * cloudresourcemanager.organizations.getIamPolicy
         *
         * @desc Gets the access control policy for an Organization resource. May be empty if no such policy or resource exists. The `resource` field should be the organization's resource name, e.g. "organizations/123".
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud Resource Manager API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/cloudresourcemanager
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var cloudResourceManager = google.cloudresourcemanager('v1beta1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // REQUIRED: The resource for which the policy is being requested.
         *     // `resource` is usually specified as a path. For example, a Project
         *     // resource is specified as `projects/{project}`.
         *     resource_: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   cloudResourceManager.organizations.getIamPolicy(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient)) {
         *     if (err) {
         *       console.log('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias cloudresourcemanager.organizations.getIamPolicy
         * @memberOf! cloudresourcemanager(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
         * @param {cloudresourcemanager(v1beta1).GetIamPolicyRequest} params.resource Request body data
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
                    url: 'https://cloudresourcemanager.googleapis.com/v1beta1/{resource}:getIamPolicy',
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
         * cloudresourcemanager.organizations.get
         *
         * @desc Fetches an Organization resource identified by the specified resource name.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud Resource Manager API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/cloudresourcemanager
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var cloudResourceManager = google.cloudresourcemanager('v1beta1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The resource name of the Organization to fetch, e.g. "organizations/1234".
         *     name: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   cloudResourceManager.organizations.get(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient)) {
         *     if (err) {
         *       console.log('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias cloudresourcemanager.organizations.get
         * @memberOf! cloudresourcemanager(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The resource name of the Organization to fetch, e.g. "organizations/1234".
         * @param {string=} params.organizationId The id of the Organization resource to fetch. This field is deprecated and will be removed in v1. Use name instead.
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
                    url: 'https://cloudresourcemanager.googleapis.com/v1beta1/{name}',
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
         * cloudresourcemanager.organizations.update
         *
         * @desc Updates an Organization resource identified by the specified resource name.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud Resource Manager API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/cloudresourcemanager
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var cloudResourceManager = google.cloudresourcemanager('v1beta1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Output Only. The resource name of the organization. This is the
         *     // organization's relative path in the API. Its format is
         *     // "organizations/[organization_id]". For example, "organizations/1234".
         *     name: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body. All existing properties
         *       // will be replaced.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   cloudResourceManager.organizations.update(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient)) {
         *     if (err) {
         *       console.log('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias cloudresourcemanager.organizations.update
         * @memberOf! cloudresourcemanager(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name Output Only. The resource name of the organization. This is the organization's relative path in the API. Its format is "organizations/[organization_id]". For example, "organizations/1234".
         * @param {cloudresourcemanager(v1beta1).Organization} params.resource Request body data
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
                    url: 'https://cloudresourcemanager.googleapis.com/v1beta1/{name}',
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
         * cloudresourcemanager.organizations.testIamPermissions
         *
         * @desc Returns permissions that a caller has on the specified Organization. The `resource` field should be the organization's resource name, e.g. "organizations/123".
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud Resource Manager API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/cloudresourcemanager
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var cloudResourceManager = google.cloudresourcemanager('v1beta1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // REQUIRED: The resource for which the policy detail is being requested.
         *     // `resource` is usually specified as a path. For example, a Project
         *     // resource is specified as `projects/{project}`.
         *     resource_: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   cloudResourceManager.organizations.testIamPermissions(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient)) {
         *     if (err) {
         *       console.log('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias cloudresourcemanager.organizations.testIamPermissions
         * @memberOf! cloudresourcemanager(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
         * @param {cloudresourcemanager(v1beta1).TestIamPermissionsRequest} params.resource Request body data
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
                    url: 'https://cloudresourcemanager.googleapis.com/v1beta1/{resource}:testIamPermissions',
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
         * cloudresourcemanager.organizations.list
         *
         * @desc Lists Organization resources that are visible to the user and satisfy the specified filter. This method returns Organizations in an unspecified order. New Organizations do not necessarily appear at the end of the list.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud Resource Manager API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/cloudresourcemanager
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var cloudResourceManager = google.cloudresourcemanager('v1beta1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     auth: authClient
         *   };
         *
         *   var handlePage = function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     var organizationsPage = response['organizations'];
         *     if (!organizationsPage) {
         *       return;
         *     }
         *     for (var i = 0; i < organizationsPage.length; i++) {
         *       // TODO: Change code below to process each resource in `organizationsPage`:
         *       console.log(JSON.stringify(organizationsPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.pageToken = response.nextPageToken;
         *       cloudResourceManager.organizations.list(request, handlePage);
         *     }
         *   };
         *
         *   cloudResourceManager.organizations.list(request, handlePage);
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient)) {
         *     if (err) {
         *       console.log('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias cloudresourcemanager.organizations.list
         * @memberOf! cloudresourcemanager(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.pageToken A pagination token returned from a previous call to `ListOrganizations` that indicates from where listing should continue. This field is optional.
         * @param {integer=} params.pageSize The maximum number of Organizations to return in the response. This field is optional.
         * @param {string=} params.filter An optional query string used to filter the Organizations to return in the response. Filter rules are case-insensitive.   Organizations may be filtered by `owner.directoryCustomerId` or by `domain`, where the domain is a Google for Work domain, for example:  |Filter|Description| |------|-----------| |owner.directorycustomerid:123456789|Organizations with `owner.directory_customer_id` equal to `123456789`.| |domain:google.com|Organizations corresponding to the domain `google.com`.|  This field is optional.
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
                    url: 'https://cloudresourcemanager.googleapis.com/v1beta1/organizations',
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
         * cloudresourcemanager.organizations.setIamPolicy
         *
         * @desc Sets the access control policy on an Organization resource. Replaces any existing policy. The `resource` field should be the organization's resource name, e.g. "organizations/123".
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud Resource Manager API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/cloudresourcemanager
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var cloudResourceManager = google.cloudresourcemanager('v1beta1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // REQUIRED: The resource for which the policy is being specified.
         *     // `resource` is usually specified as a path. For example, a Project
         *     // resource is specified as `projects/{project}`.
         *     resource_: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   cloudResourceManager.organizations.setIamPolicy(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient)) {
         *     if (err) {
         *       console.log('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias cloudresourcemanager.organizations.setIamPolicy
         * @memberOf! cloudresourcemanager(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
         * @param {cloudresourcemanager(v1beta1).SetIamPolicyRequest} params.resource Request body data
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
                    url: 'https://cloudresourcemanager.googleapis.com/v1beta1/{resource}:setIamPolicy',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['resource'],
                pathParams: ['resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
}
module.exports = Cloudresourcemanager;
//# sourceMappingURL=v1beta1.js.map