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
 * Cloud SQL Administration API
 *
 * Creates and configures Cloud SQL instances, which provide fully-managed MySQL databases.
 *
 * @example
 * const google = require('googleapis');
 * const sqladmin = google.sqladmin('v1beta3');
 *
 * @namespace sqladmin
 * @type {Function}
 * @version v1beta3
 * @variation v1beta3
 * @param {object=} options Options for Sqladmin
 */
function Sqladmin(options) {
    const self = this;
    self._options = options || {};
    self.backupRuns = {
        /**
         * sql.backupRuns.get
         *
         * @desc Retrieves information about a specified backup run for a Cloud SQL instance.
         *
         * @alias sql.backupRuns.get
         * @memberOf! sqladmin(v1beta3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.backupConfiguration Identifier for the backup configuration. This gets generated automatically when a backup configuration is created.
         * @param {string} params.dueTime The start time of the four-hour backup window. The backup can occur any time in the window. The time is in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.
         * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
         * @param {string} params.project Project ID of the project that contains the instance.
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
                    url: 'https://www.googleapis.com/sql/v1beta3/projects/{project}/instances/{instance}/backupRuns/{backupConfiguration}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'instance', 'backupConfiguration', 'dueTime'],
                pathParams: ['backupConfiguration', 'instance', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * sql.backupRuns.list
         *
         * @desc Lists all backup runs associated with a Cloud SQL instance.
         *
         * @alias sql.backupRuns.list
         * @memberOf! sqladmin(v1beta3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.backupConfiguration Identifier for the backup configuration. This gets generated automatically when a backup configuration is created.
         * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
         * @param {integer=} params.maxResults Maximum number of backup runs per response.
         * @param {string=} params.pageToken A previously-returned page token representing part of the larger set of results to view.
         * @param {string} params.project Project ID of the project that contains the instance.
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
                    url: 'https://www.googleapis.com/sql/v1beta3/projects/{project}/instances/{instance}/backupRuns',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'instance', 'backupConfiguration'],
                pathParams: ['instance', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.flags = {
        /**
         * sql.flags.list
         *
         * @desc Lists all database flags that can be set for Google Cloud SQL instances.
         *
         * @alias sql.flags.list
         * @memberOf! sqladmin(v1beta3)
         *
         * @param {object=} params Parameters for request
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
                    url: 'https://www.googleapis.com/sql/v1beta3/flags',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.instances = {
        /**
         * sql.instances.clone
         *
         * @desc Creates a Cloud SQL instance as a clone of a source instance.
         *
         * @alias sql.instances.clone
         * @memberOf! sqladmin(v1beta3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID of the source as well as the clone Cloud SQL instance.
         * @param {sqladmin(v1beta3).InstancesCloneRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        clone: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/sql/v1beta3/projects/{project}/instances/clone',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project'],
                pathParams: ['project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * sql.instances.delete
         *
         * @desc Deletes a Cloud SQL instance.
         *
         * @alias sql.instances.delete
         * @memberOf! sqladmin(v1beta3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
         * @param {string} params.project Project ID of the project that contains the instance to be deleted.
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
                    url: 'https://www.googleapis.com/sql/v1beta3/projects/{project}/instances/{instance}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'instance'],
                pathParams: ['instance', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * sql.instances.export
         *
         * @desc Exports data from a Cloud SQL instance to a Google Cloud Storage bucket as a MySQL dump file.
         *
         * @alias sql.instances.export
         * @memberOf! sqladmin(v1beta3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
         * @param {string} params.project Project ID of the project that contains the instance to be exported.
         * @param {sqladmin(v1beta3).InstancesExportRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        export: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/sql/v1beta3/projects/{project}/instances/{instance}/export',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'instance'],
                pathParams: ['instance', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * sql.instances.get
         *
         * @desc Retrieves information about a Cloud SQL instance.
         *
         * @alias sql.instances.get
         * @memberOf! sqladmin(v1beta3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Database instance ID. This does not include the project ID.
         * @param {string} params.project Project ID of the project that contains the instance.
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
                    url: 'https://www.googleapis.com/sql/v1beta3/projects/{project}/instances/{instance}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'instance'],
                pathParams: ['instance', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * sql.instances.import
         *
         * @desc Imports data into a Cloud SQL instance from a MySQL dump file stored in a Google Cloud Storage bucket.
         *
         * @alias sql.instances.import
         * @memberOf! sqladmin(v1beta3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
         * @param {string} params.project Project ID of the project that contains the instance.
         * @param {sqladmin(v1beta3).InstancesImportRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        import: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/sql/v1beta3/projects/{project}/instances/{instance}/import',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'instance'],
                pathParams: ['instance', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * sql.instances.insert
         *
         * @desc Creates a new Cloud SQL instance.
         *
         * @alias sql.instances.insert
         * @memberOf! sqladmin(v1beta3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID of the project to which the newly created Cloud SQL instances should belong.
         * @param {sqladmin(v1beta3).DatabaseInstance} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        insert: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/sql/v1beta3/projects/{project}/instances',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project'],
                pathParams: ['project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * sql.instances.list
         *
         * @desc Lists instances for a given project, in alphabetical order by instance name.
         *
         * @alias sql.instances.list
         * @memberOf! sqladmin(v1beta3)
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.maxResults The maximum number of results to return per response.
         * @param {string=} params.pageToken A previously-returned page token representing part of the larger set of results to view.
         * @param {string} params.project Project ID of the project for which to list Cloud SQL instances.
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
                    url: 'https://www.googleapis.com/sql/v1beta3/projects/{project}/instances',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project'],
                pathParams: ['project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * sql.instances.patch
         *
         * @desc Updates the settings of a Cloud SQL instance. This method supports patch semantics.
         *
         * @alias sql.instances.patch
         * @memberOf! sqladmin(v1beta3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
         * @param {string} params.project Project ID of the project that contains the instance.
         * @param {sqladmin(v1beta3).DatabaseInstance} params.resource Request body data
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
                    url: 'https://www.googleapis.com/sql/v1beta3/projects/{project}/instances/{instance}',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['project', 'instance'],
                pathParams: ['instance', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * sql.instances.promoteReplica
         *
         * @desc Promotes the read replica instance to be a stand-alone Cloud SQL instance.
         *
         * @alias sql.instances.promoteReplica
         * @memberOf! sqladmin(v1beta3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL read replica instance name.
         * @param {string} params.project ID of the project that contains the read replica.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        promoteReplica: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/sql/v1beta3/projects/{project}/instances/{instance}/promoteReplica',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'instance'],
                pathParams: ['instance', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * sql.instances.resetSslConfig
         *
         * @desc Deletes all client certificates and generates a new server SSL certificate for a Cloud SQL instance.
         *
         * @alias sql.instances.resetSslConfig
         * @memberOf! sqladmin(v1beta3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
         * @param {string} params.project Project ID of the project that contains the instance.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        resetSslConfig: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/sql/v1beta3/projects/{project}/instances/{instance}/resetSslConfig',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'instance'],
                pathParams: ['instance', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * sql.instances.restart
         *
         * @desc Restarts a Cloud SQL instance.
         *
         * @alias sql.instances.restart
         * @memberOf! sqladmin(v1beta3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
         * @param {string} params.project Project ID of the project that contains the instance to be restarted.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        restart: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/sql/v1beta3/projects/{project}/instances/{instance}/restart',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'instance'],
                pathParams: ['instance', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * sql.instances.restoreBackup
         *
         * @desc Restores a backup of a Cloud SQL instance.
         *
         * @alias sql.instances.restoreBackup
         * @memberOf! sqladmin(v1beta3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.backupConfiguration The identifier of the backup configuration. This gets generated automatically when a backup configuration is created.
         * @param {string} params.dueTime The start time of the four-hour backup window. The backup can occur any time in the window. The time is in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.
         * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
         * @param {string} params.project Project ID of the project that contains the instance.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        restoreBackup: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/sql/v1beta3/projects/{project}/instances/{instance}/restoreBackup',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'instance', 'backupConfiguration', 'dueTime'],
                pathParams: ['instance', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * sql.instances.setRootPassword
         *
         * @desc Sets the password for the root user of the specified Cloud SQL instance.
         *
         * @alias sql.instances.setRootPassword
         * @memberOf! sqladmin(v1beta3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
         * @param {string} params.project Project ID of the project that contains the instance.
         * @param {sqladmin(v1beta3).InstanceSetRootPasswordRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setRootPassword: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/sql/v1beta3/projects/{project}/instances/{instance}/setRootPassword',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'instance'],
                pathParams: ['instance', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * sql.instances.update
         *
         * @desc Updates the settings of a Cloud SQL instance.
         *
         * @alias sql.instances.update
         * @memberOf! sqladmin(v1beta3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
         * @param {string} params.project Project ID of the project that contains the instance.
         * @param {sqladmin(v1beta3).DatabaseInstance} params.resource Request body data
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
                    url: 'https://www.googleapis.com/sql/v1beta3/projects/{project}/instances/{instance}',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['project', 'instance'],
                pathParams: ['instance', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.operations = {
        /**
         * sql.operations.get
         *
         * @desc Retrieves information about a specific operation that was performed on a Cloud SQL instance.
         *
         * @alias sql.operations.get
         * @memberOf! sqladmin(v1beta3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
         * @param {string} params.operation Instance operation ID.
         * @param {string} params.project Project ID of the project that contains the instance.
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
                    url: 'https://www.googleapis.com/sql/v1beta3/projects/{project}/instances/{instance}/operations/{operation}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'instance', 'operation'],
                pathParams: ['instance', 'operation', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * sql.operations.list
         *
         * @desc Lists all operations that have been performed on a Cloud SQL instance.
         *
         * @alias sql.operations.list
         * @memberOf! sqladmin(v1beta3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
         * @param {integer=} params.maxResults Maximum number of operations per response.
         * @param {string=} params.pageToken A previously-returned page token representing part of the larger set of results to view.
         * @param {string} params.project Project ID of the project that contains the instance.
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
                    url: 'https://www.googleapis.com/sql/v1beta3/projects/{project}/instances/{instance}/operations',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'instance'],
                pathParams: ['instance', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.sslCerts = {
        /**
         * sql.sslCerts.delete
         *
         * @desc Deletes an SSL certificate from a Cloud SQL instance.
         *
         * @alias sql.sslCerts.delete
         * @memberOf! sqladmin(v1beta3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
         * @param {string} params.project Project ID of the project that contains the instance to be deleted.
         * @param {string} params.sha1Fingerprint Sha1 FingerPrint.
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
                    url: 'https://www.googleapis.com/sql/v1beta3/projects/{project}/instances/{instance}/sslCerts/{sha1Fingerprint}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'instance', 'sha1Fingerprint'],
                pathParams: ['instance', 'project', 'sha1Fingerprint'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * sql.sslCerts.get
         *
         * @desc Retrieves an SSL certificate as specified by its SHA-1 fingerprint.
         *
         * @alias sql.sslCerts.get
         * @memberOf! sqladmin(v1beta3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
         * @param {string} params.project Project ID of the project that contains the instance.
         * @param {string} params.sha1Fingerprint Sha1 FingerPrint.
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
                    url: 'https://www.googleapis.com/sql/v1beta3/projects/{project}/instances/{instance}/sslCerts/{sha1Fingerprint}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'instance', 'sha1Fingerprint'],
                pathParams: ['instance', 'project', 'sha1Fingerprint'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * sql.sslCerts.insert
         *
         * @desc Creates an SSL certificate and returns the certificate, the associated private key, and the server certificate authority.
         *
         * @alias sql.sslCerts.insert
         * @memberOf! sqladmin(v1beta3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
         * @param {string} params.project Project ID of the project to which the newly created Cloud SQL instances should belong.
         * @param {sqladmin(v1beta3).SslCertsInsertRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        insert: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/sql/v1beta3/projects/{project}/instances/{instance}/sslCerts',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'instance'],
                pathParams: ['instance', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * sql.sslCerts.list
         *
         * @desc Lists all of the current SSL certificates defined for a Cloud SQL instance.
         *
         * @alias sql.sslCerts.list
         * @memberOf! sqladmin(v1beta3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
         * @param {string} params.project Project ID of the project for which to list Cloud SQL instances.
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
                    url: 'https://www.googleapis.com/sql/v1beta3/projects/{project}/instances/{instance}/sslCerts',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'instance'],
                pathParams: ['instance', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.tiers = {
        /**
         * sql.tiers.list
         *
         * @desc Lists service tiers that can be used to create Google Cloud SQL instances.
         *
         * @alias sql.tiers.list
         * @memberOf! sqladmin(v1beta3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID of the project for which to list tiers.
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
                    url: 'https://www.googleapis.com/sql/v1beta3/projects/{project}/tiers',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project'],
                pathParams: ['project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
}
module.exports = Sqladmin;
//# sourceMappingURL=v1beta3.js.map