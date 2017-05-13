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
 * Cloud Spanner API
 *
 * Cloud Spanner is a managed, mission-critical, globally consistent and scalable relational database service.
 *
 * @example
 * const google = require('googleapis');
 * const spanner = google.spanner('v1');
 *
 * @namespace spanner
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Spanner
 */
function Spanner(options) {
    const self = this;
    self._options = options || {};
    self.projects = {
        instanceConfigs: {
            /**
             * spanner.projects.instanceConfigs.list
             *
             * @desc Lists the supported instance configurations for a given project.
             *
             * @alias spanner.projects.instanceConfigs.list
             * @memberOf! spanner(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.parent Required. The name of the project for which a list of supported instance configurations is requested. Values are of the form `projects/<project>`.
             * @param {string=} params.pageToken If non-empty, `page_token` should contain a next_page_token from a previous ListInstanceConfigsResponse.
             * @param {integer=} params.pageSize Number of instance configurations to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size.
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
                        url: 'https://spanner.googleapis.com/v1/{parent}/instanceConfigs',
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
             * spanner.projects.instanceConfigs.get
             *
             * @desc Gets information about a particular instance configuration.
             *
             * @alias spanner.projects.instanceConfigs.get
             * @memberOf! spanner(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name Required. The name of the requested instance configuration. Values are of the form `projects/<project>/instanceConfigs/<config>`.
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
                        url: 'https://spanner.googleapis.com/v1/{name}',
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['name'],
                    pathParams: ['name'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        },
        instances: {
            /**
             * spanner.projects.instances.delete
             *
             * @desc Deletes an instance.  Immediately upon completion of the request:    * Billing ceases for all of the instance's reserved resources.  Soon afterward:    * The instance and *all of its databases* immediately and     irrevocably disappear from the API. All data in the databases     is permanently deleted.
             *
             * @alias spanner.projects.instances.delete
             * @memberOf! spanner(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name Required. The name of the instance to be deleted. Values are of the form `projects/<project>/instances/<instance>`
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
                        url: 'https://spanner.googleapis.com/v1/{name}',
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
             * spanner.projects.instances.list
             *
             * @desc Lists all instances in the given project.
             *
             * @alias spanner.projects.instances.list
             * @memberOf! spanner(v1)
             *
             * @param {object} params Parameters for request
             * @param {string=} params.pageToken If non-empty, `page_token` should contain a next_page_token from a previous ListInstancesResponse.
             * @param {integer=} params.pageSize Number of instances to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size.
             * @param {string} params.parent Required. The name of the project for which a list of instances is requested. Values are of the form `projects/<project>`.
             * @param {string=} params.filter An expression for filtering the results of the request. Filter rules are case insensitive. The fields eligible for filtering are:    * name   * display_name   * labels.key where key is the name of a label  Some examples of using filters are:    * name:* --> The instance has a name.   * name:Howl --> The instance's name contains the string "howl".   * name:HOWL --> Equivalent to above.   * NAME:howl --> Equivalent to above.   * labels.env:* --> The instance has the label "env".   * labels.env:dev --> The instance has the label "env" and the value of                        the label contains the string "dev".   * name:howl labels.env:dev --> The instance's name contains "howl" and                                  it has the label "env" with its value                                  containing "dev".
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
                        url: 'https://spanner.googleapis.com/v1/{parent}/instances',
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
             * spanner.projects.instances.setIamPolicy
             *
             * @desc Sets the access control policy on an instance resource. Replaces any existing policy.  Authorization requires `spanner.instances.setIamPolicy` on resource.
             *
             * @alias spanner.projects.instances.setIamPolicy
             * @memberOf! spanner(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.resource_ REQUIRED: The Cloud Spanner resource for which the policy is being set. The format is `projects/<project ID>/instances/<instance ID>` for instance resources and `projects/<project ID>/instances/<instance ID>/databases/<database ID>` for databases resources.
             * @param {spanner(v1).SetIamPolicyRequest} params.resource Request body data
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
                        url: 'https://spanner.googleapis.com/v1/{resource}:setIamPolicy',
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
             * spanner.projects.instances.create
             *
             * @desc Creates an instance and begins preparing it to begin serving. The returned long-running operation can be used to track the progress of preparing the new instance. The instance name is assigned by the caller. If the named instance already exists, `CreateInstance` returns `ALREADY_EXISTS`.  Immediately upon completion of this request:    * The instance is readable via the API, with all requested attributes     but no allocated resources. Its state is `CREATING`.  Until completion of the returned operation:    * Cancelling the operation renders the instance immediately unreadable     via the API.   * The instance can be deleted.   * All other attempts to modify the instance are rejected.  Upon completion of the returned operation:    * Billing for all successfully-allocated resources begins (some types     may have lower than the requested levels).   * Databases can be created in the instance.   * The instance's allocated resource levels are readable via the API.   * The instance's state becomes `READY`.  The returned long-running operation will have a name of the format `<instance_name>/operations/<operation_id>` and can be used to track creation of the instance.  The metadata field type is CreateInstanceMetadata. The response field type is Instance, if successful.
             *
             * @alias spanner.projects.instances.create
             * @memberOf! spanner(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.parent Required. The name of the project in which to create the instance. Values are of the form `projects/<project>`.
             * @param {spanner(v1).CreateInstanceRequest} params.resource Request body data
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
                        url: 'https://spanner.googleapis.com/v1/{parent}/instances',
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
             * spanner.projects.instances.getIamPolicy
             *
             * @desc Gets the access control policy for an instance resource. Returns an empty policy if an instance exists but does not have a policy set.  Authorization requires `spanner.instances.getIamPolicy` on resource.
             *
             * @alias spanner.projects.instances.getIamPolicy
             * @memberOf! spanner(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.resource_ REQUIRED: The Cloud Spanner resource for which the policy is being retrieved. The format is `projects/<project ID>/instances/<instance ID>` for instance resources and `projects/<project ID>/instances/<instance ID>/databases/<database ID>` for database resources.
             * @param {spanner(v1).GetIamPolicyRequest} params.resource Request body data
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
                        url: 'https://spanner.googleapis.com/v1/{resource}:getIamPolicy',
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
             * spanner.projects.instances.get
             *
             * @desc Gets information about a particular instance.
             *
             * @alias spanner.projects.instances.get
             * @memberOf! spanner(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name Required. The name of the requested instance. Values are of the form `projects/<project>/instances/<instance>`.
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
                        url: 'https://spanner.googleapis.com/v1/{name}',
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
             * spanner.projects.instances.patch
             *
             * @desc Updates an instance, and begins allocating or releasing resources as requested. The returned long-running operation can be used to track the progress of updating the instance. If the named instance does not exist, returns `NOT_FOUND`.  Immediately upon completion of this request:    * For resource types for which a decrease in the instance's allocation     has been requested, billing is based on the newly-requested level.  Until completion of the returned operation:    * Cancelling the operation sets its metadata's     cancel_time, and begins     restoring resources to their pre-request values. The operation     is guaranteed to succeed at undoing all resource changes,     after which point it terminates with a `CANCELLED` status.   * All other attempts to modify the instance are rejected.   * Reading the instance via the API continues to give the pre-request     resource levels.  Upon completion of the returned operation:    * Billing begins for all successfully-allocated resources (some types     may have lower than the requested levels).   * All newly-reserved resources are available for serving the instance's     tables.   * The instance's new resource levels are readable via the API.  The returned long-running operation will have a name of the format `<instance_name>/operations/<operation_id>` and can be used to track the instance modification.  The metadata field type is UpdateInstanceMetadata. The response field type is Instance, if successful.  Authorization requires `spanner.instances.update` permission on resource name.
             *
             * @alias spanner.projects.instances.patch
             * @memberOf! spanner(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name Required. A unique identifier for the instance, which cannot be changed after the instance is created. Values are of the form `projects/<project>/instances/a-z*[a-z0-9]`. The final segment of the name must be between 6 and 30 characters in length.
             * @param {spanner(v1).UpdateInstanceRequest} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            patch: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const parameters = {
                    options: Object.assign({
                        url: 'https://spanner.googleapis.com/v1/{name}',
                        method: 'PATCH'
                    }, options),
                    params: params,
                    requiredParams: ['name'],
                    pathParams: ['name'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * spanner.projects.instances.testIamPermissions
             *
             * @desc Returns permissions that the caller has on the specified instance resource.  Attempting this RPC on a non-existent Cloud Spanner instance resource will result in a NOT_FOUND error if the user has `spanner.instances.list` permission on the containing Google Cloud Project. Otherwise returns an empty set of permissions.
             *
             * @alias spanner.projects.instances.testIamPermissions
             * @memberOf! spanner(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.resource_ REQUIRED: The Cloud Spanner resource for which permissions are being tested. The format is `projects/<project ID>/instances/<instance ID>` for instance resources and `projects/<project ID>/instances/<instance ID>/databases/<database ID>` for database resources.
             * @param {spanner(v1).TestIamPermissionsRequest} params.resource Request body data
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
                        url: 'https://spanner.googleapis.com/v1/{resource}:testIamPermissions',
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['resource'],
                    pathParams: ['resource'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            databases: {
                /**
                 * spanner.projects.instances.databases.list
                 *
                 * @desc Lists Cloud Spanner databases.
                 *
                 * @alias spanner.projects.instances.databases.list
                 * @memberOf! spanner(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.parent Required. The instance whose databases should be listed. Values are of the form `projects/<project>/instances/<instance>`.
                 * @param {string=} params.pageToken If non-empty, `page_token` should contain a next_page_token from a previous ListDatabasesResponse.
                 * @param {integer=} params.pageSize Number of databases to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size.
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
                            url: 'https://spanner.googleapis.com/v1/{parent}/databases',
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
                 * spanner.projects.instances.databases.create
                 *
                 * @desc Creates a new Cloud Spanner database and starts to prepare it for serving. The returned long-running operation will have a name of the format `<database_name>/operations/<operation_id>` and can be used to track preparation of the database. The metadata field type is CreateDatabaseMetadata. The response field type is Database, if successful.
                 *
                 * @alias spanner.projects.instances.databases.create
                 * @memberOf! spanner(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.parent Required. The name of the instance that will serve the new database. Values are of the form `projects/<project>/instances/<instance>`.
                 * @param {spanner(v1).CreateDatabaseRequest} params.resource Request body data
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
                            url: 'https://spanner.googleapis.com/v1/{parent}/databases',
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
                 * spanner.projects.instances.databases.setIamPolicy
                 *
                 * @desc Sets the access control policy on a database resource. Replaces any existing policy.  Authorization requires `spanner.databases.setIamPolicy` permission on resource.
                 *
                 * @alias spanner.projects.instances.databases.setIamPolicy
                 * @memberOf! spanner(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.resource_ REQUIRED: The Cloud Spanner resource for which the policy is being set. The format is `projects/<project ID>/instances/<instance ID>` for instance resources and `projects/<project ID>/instances/<instance ID>/databases/<database ID>` for databases resources.
                 * @param {spanner(v1).SetIamPolicyRequest} params.resource Request body data
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
                            url: 'https://spanner.googleapis.com/v1/{resource}:setIamPolicy',
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
                 * spanner.projects.instances.databases.getIamPolicy
                 *
                 * @desc Gets the access control policy for a database resource. Returns an empty policy if a database exists but does not have a policy set.  Authorization requires `spanner.databases.getIamPolicy` permission on resource.
                 *
                 * @alias spanner.projects.instances.databases.getIamPolicy
                 * @memberOf! spanner(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.resource_ REQUIRED: The Cloud Spanner resource for which the policy is being retrieved. The format is `projects/<project ID>/instances/<instance ID>` for instance resources and `projects/<project ID>/instances/<instance ID>/databases/<database ID>` for database resources.
                 * @param {spanner(v1).GetIamPolicyRequest} params.resource Request body data
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
                            url: 'https://spanner.googleapis.com/v1/{resource}:getIamPolicy',
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
                 * spanner.projects.instances.databases.get
                 *
                 * @desc Gets the state of a Cloud Spanner database.
                 *
                 * @alias spanner.projects.instances.databases.get
                 * @memberOf! spanner(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name Required. The name of the requested database. Values are of the form `projects/<project>/instances/<instance>/databases/<database>`.
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
                            url: 'https://spanner.googleapis.com/v1/{name}',
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
                 * spanner.projects.instances.databases.dropDatabase
                 *
                 * @desc Drops (aka deletes) a Cloud Spanner database.
                 *
                 * @alias spanner.projects.instances.databases.dropDatabase
                 * @memberOf! spanner(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.database Required. The database to be dropped.
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                dropDatabase: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const parameters = {
                        options: Object.assign({
                            url: 'https://spanner.googleapis.com/v1/{database}',
                            method: 'DELETE'
                        }, options),
                        params: params,
                        requiredParams: ['database'],
                        pathParams: ['database'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * spanner.projects.instances.databases.updateDdl
                 *
                 * @desc Updates the schema of a Cloud Spanner database by creating/altering/dropping tables, columns, indexes, etc. The returned long-running operation will have a name of the format `<database_name>/operations/<operation_id>` and can be used to track execution of the schema change(s). The metadata field type is UpdateDatabaseDdlMetadata.  The operation has no response.
                 *
                 * @alias spanner.projects.instances.databases.updateDdl
                 * @memberOf! spanner(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.database Required. The database to update.
                 * @param {spanner(v1).UpdateDatabaseDdlRequest} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                updateDdl: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const parameters = {
                        options: Object.assign({
                            url: 'https://spanner.googleapis.com/v1/{database}/ddl',
                            method: 'PATCH'
                        }, options),
                        params: params,
                        requiredParams: ['database'],
                        pathParams: ['database'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * spanner.projects.instances.databases.testIamPermissions
                 *
                 * @desc Returns permissions that the caller has on the specified database resource.  Attempting this RPC on a non-existent Cloud Spanner database will result in a NOT_FOUND error if the user has `spanner.databases.list` permission on the containing Cloud Spanner instance. Otherwise returns an empty set of permissions.
                 *
                 * @alias spanner.projects.instances.databases.testIamPermissions
                 * @memberOf! spanner(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.resource_ REQUIRED: The Cloud Spanner resource for which permissions are being tested. The format is `projects/<project ID>/instances/<instance ID>` for instance resources and `projects/<project ID>/instances/<instance ID>/databases/<database ID>` for database resources.
                 * @param {spanner(v1).TestIamPermissionsRequest} params.resource Request body data
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
                            url: 'https://spanner.googleapis.com/v1/{resource}:testIamPermissions',
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
                 * spanner.projects.instances.databases.getDdl
                 *
                 * @desc Returns the schema of a Cloud Spanner database as a list of formatted DDL statements. This method does not show pending schema updates, those may be queried using the Operations API.
                 *
                 * @alias spanner.projects.instances.databases.getDdl
                 * @memberOf! spanner(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.database Required. The database whose schema we wish to get.
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                getDdl: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const parameters = {
                        options: Object.assign({
                            url: 'https://spanner.googleapis.com/v1/{database}/ddl',
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['database'],
                        pathParams: ['database'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                operations: {
                    /**
                     * spanner.projects.instances.databases.operations.delete
                     *
                     * @desc Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
                     *
                     * @alias spanner.projects.instances.databases.operations.delete
                     * @memberOf! spanner(v1)
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
                                url: 'https://spanner.googleapis.com/v1/{name}',
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
                     * spanner.projects.instances.databases.operations.list
                     *
                     * @desc Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.  NOTE: the `name` binding below allows API services to override the binding to use different resource name schemes, such as `users/x/operations`.
                     *
                     * @alias spanner.projects.instances.databases.operations.list
                     * @memberOf! spanner(v1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.name The name of the operation collection.
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
                                url: 'https://spanner.googleapis.com/v1/{name}',
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
                     * spanner.projects.instances.databases.operations.get
                     *
                     * @desc Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service.
                     *
                     * @alias spanner.projects.instances.databases.operations.get
                     * @memberOf! spanner(v1)
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
                                url: 'https://spanner.googleapis.com/v1/{name}',
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
                     * spanner.projects.instances.databases.operations.cancel
                     *
                     * @desc Starts asynchronous cancellation on a long-running operation.  The server makes a best effort to cancel the operation, but success is not guaranteed.  If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.  Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
                     *
                     * @alias spanner.projects.instances.databases.operations.cancel
                     * @memberOf! spanner(v1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.name The name of the operation resource to be cancelled.
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
                                url: 'https://spanner.googleapis.com/v1/{name}:cancel',
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['name'],
                            pathParams: ['name'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    }
                },
                sessions: {
                    /**
                     * spanner.projects.instances.databases.sessions.commit
                     *
                     * @desc Commits a transaction. The request includes the mutations to be applied to rows in the database.  `Commit` might return an `ABORTED` error. This can occur at any time; commonly, the cause is conflicts with concurrent transactions. However, it can also happen for a variety of other reasons. If `Commit` returns `ABORTED`, the caller should re-attempt the transaction from the beginning, re-using the same session.
                     *
                     * @alias spanner.projects.instances.databases.sessions.commit
                     * @memberOf! spanner(v1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.session Required. The session in which the transaction to be committed is running.
                     * @param {spanner(v1).CommitRequest} params.resource Request body data
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
                                url: 'https://spanner.googleapis.com/v1/{session}:commit',
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['session'],
                            pathParams: ['session'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    /**
                     * spanner.projects.instances.databases.sessions.beginTransaction
                     *
                     * @desc Begins a new transaction. This step can often be skipped: Read, ExecuteSql and Commit can begin a new transaction as a side-effect.
                     *
                     * @alias spanner.projects.instances.databases.sessions.beginTransaction
                     * @memberOf! spanner(v1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.session Required. The session in which the transaction runs.
                     * @param {spanner(v1).BeginTransactionRequest} params.resource Request body data
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
                                url: 'https://spanner.googleapis.com/v1/{session}:beginTransaction',
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['session'],
                            pathParams: ['session'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    /**
                     * spanner.projects.instances.databases.sessions.delete
                     *
                     * @desc Ends a session, releasing server resources associated with it.
                     *
                     * @alias spanner.projects.instances.databases.sessions.delete
                     * @memberOf! spanner(v1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.name Required. The name of the session to delete.
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
                                url: 'https://spanner.googleapis.com/v1/{name}',
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
                     * spanner.projects.instances.databases.sessions.executeStreamingSql
                     *
                     * @desc Like ExecuteSql, except returns the result set as a stream. Unlike ExecuteSql, there is no limit on the size of the returned result set. However, no individual row in the result set can exceed 100 MiB, and no column value can exceed 10 MiB.
                     *
                     * @alias spanner.projects.instances.databases.sessions.executeStreamingSql
                     * @memberOf! spanner(v1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.session Required. The session in which the SQL query should be performed.
                     * @param {spanner(v1).ExecuteSqlRequest} params.resource Request body data
                     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                     * @param {callback} callback The callback that handles the response.
                     * @return {object} Request object
                     */
                    executeStreamingSql: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options || (options = {});
                        const parameters = {
                            options: Object.assign({
                                url: 'https://spanner.googleapis.com/v1/{session}:executeStreamingSql',
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['session'],
                            pathParams: ['session'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    /**
                     * spanner.projects.instances.databases.sessions.executeSql
                     *
                     * @desc Executes an SQL query, returning all rows in a single reply. This method cannot be used to return a result set larger than 10 MiB; if the query yields more data than that, the query fails with a `FAILED_PRECONDITION` error.  Queries inside read-write transactions might return `ABORTED`. If this occurs, the application should restart the transaction from the beginning. See Transaction for more details.  Larger result sets can be fetched in streaming fashion by calling ExecuteStreamingSql instead.
                     *
                     * @alias spanner.projects.instances.databases.sessions.executeSql
                     * @memberOf! spanner(v1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.session Required. The session in which the SQL query should be performed.
                     * @param {spanner(v1).ExecuteSqlRequest} params.resource Request body data
                     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                     * @param {callback} callback The callback that handles the response.
                     * @return {object} Request object
                     */
                    executeSql: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options || (options = {});
                        const parameters = {
                            options: Object.assign({
                                url: 'https://spanner.googleapis.com/v1/{session}:executeSql',
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['session'],
                            pathParams: ['session'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    /**
                     * spanner.projects.instances.databases.sessions.streamingRead
                     *
                     * @desc Like Read, except returns the result set as a stream. Unlike Read, there is no limit on the size of the returned result set. However, no individual row in the result set can exceed 100 MiB, and no column value can exceed 10 MiB.
                     *
                     * @alias spanner.projects.instances.databases.sessions.streamingRead
                     * @memberOf! spanner(v1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.session Required. The session in which the read should be performed.
                     * @param {spanner(v1).ReadRequest} params.resource Request body data
                     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                     * @param {callback} callback The callback that handles the response.
                     * @return {object} Request object
                     */
                    streamingRead: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options || (options = {});
                        const parameters = {
                            options: Object.assign({
                                url: 'https://spanner.googleapis.com/v1/{session}:streamingRead',
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['session'],
                            pathParams: ['session'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    /**
                     * spanner.projects.instances.databases.sessions.rollback
                     *
                     * @desc Rolls back a transaction, releasing any locks it holds. It is a good idea to call this for any transaction that includes one or more Read or ExecuteSql requests and ultimately decides not to commit.  `Rollback` returns `OK` if it successfully aborts the transaction, the transaction was already aborted, or the transaction is not found. `Rollback` never returns `ABORTED`.
                     *
                     * @alias spanner.projects.instances.databases.sessions.rollback
                     * @memberOf! spanner(v1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.session Required. The session in which the transaction to roll back is running.
                     * @param {spanner(v1).RollbackRequest} params.resource Request body data
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
                                url: 'https://spanner.googleapis.com/v1/{session}:rollback',
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['session'],
                            pathParams: ['session'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    /**
                     * spanner.projects.instances.databases.sessions.create
                     *
                     * @desc Creates a new session. A session can be used to perform transactions that read and/or modify data in a Cloud Spanner database. Sessions are meant to be reused for many consecutive transactions.  Sessions can only execute one transaction at a time. To execute multiple concurrent read-write/write-only transactions, create multiple sessions. Note that standalone reads and queries use a transaction internally, and count toward the one transaction limit.  Cloud Spanner limits the number of sessions that can exist at any given time; thus, it is a good idea to delete idle and/or unneeded sessions. Aside from explicit deletes, Cloud Spanner can delete sessions for which no operations are sent for more than an hour. If a session is deleted, requests to it return `NOT_FOUND`.  Idle sessions can be kept alive by sending a trivial SQL query periodically, e.g., `"SELECT 1"`.
                     *
                     * @alias spanner.projects.instances.databases.sessions.create
                     * @memberOf! spanner(v1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.database Required. The database in which the new session is created.
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
                                url: 'https://spanner.googleapis.com/v1/{database}/sessions',
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['database'],
                            pathParams: ['database'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    /**
                     * spanner.projects.instances.databases.sessions.read
                     *
                     * @desc Reads rows from the database using key lookups and scans, as a simple key/value style alternative to ExecuteSql.  This method cannot be used to return a result set larger than 10 MiB; if the read matches more data than that, the read fails with a `FAILED_PRECONDITION` error.  Reads inside read-write transactions might return `ABORTED`. If this occurs, the application should restart the transaction from the beginning. See Transaction for more details.  Larger result sets can be yielded in streaming fashion by calling StreamingRead instead.
                     *
                     * @alias spanner.projects.instances.databases.sessions.read
                     * @memberOf! spanner(v1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.session Required. The session in which the read should be performed.
                     * @param {spanner(v1).ReadRequest} params.resource Request body data
                     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                     * @param {callback} callback The callback that handles the response.
                     * @return {object} Request object
                     */
                    read: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options || (options = {});
                        const parameters = {
                            options: Object.assign({
                                url: 'https://spanner.googleapis.com/v1/{session}:read',
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['session'],
                            pathParams: ['session'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    /**
                     * spanner.projects.instances.databases.sessions.get
                     *
                     * @desc Gets a session. Returns `NOT_FOUND` if the session does not exist. This is mainly useful for determining whether a session is still alive.
                     *
                     * @alias spanner.projects.instances.databases.sessions.get
                     * @memberOf! spanner(v1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.name Required. The name of the session to retrieve.
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
                                url: 'https://spanner.googleapis.com/v1/{name}',
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
                 * spanner.projects.instances.operations.cancel
                 *
                 * @desc Starts asynchronous cancellation on a long-running operation.  The server makes a best effort to cancel the operation, but success is not guaranteed.  If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.  Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
                 *
                 * @alias spanner.projects.instances.operations.cancel
                 * @memberOf! spanner(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name The name of the operation resource to be cancelled.
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
                            url: 'https://spanner.googleapis.com/v1/{name}:cancel',
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
                 * spanner.projects.instances.operations.delete
                 *
                 * @desc Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
                 *
                 * @alias spanner.projects.instances.operations.delete
                 * @memberOf! spanner(v1)
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
                            url: 'https://spanner.googleapis.com/v1/{name}',
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
                 * spanner.projects.instances.operations.list
                 *
                 * @desc Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.  NOTE: the `name` binding below allows API services to override the binding to use different resource name schemes, such as `users/x/operations`.
                 *
                 * @alias spanner.projects.instances.operations.list
                 * @memberOf! spanner(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name The name of the operation collection.
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
                            url: 'https://spanner.googleapis.com/v1/{name}',
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
                 * spanner.projects.instances.operations.get
                 *
                 * @desc Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service.
                 *
                 * @alias spanner.projects.instances.operations.get
                 * @memberOf! spanner(v1)
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
                            url: 'https://spanner.googleapis.com/v1/{name}',
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
}
module.exports = Spanner;
//# sourceMappingURL=v1.js.map