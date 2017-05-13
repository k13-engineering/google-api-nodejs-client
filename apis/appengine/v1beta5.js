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
 * const appengine = google.appengine('v1beta5');
 *
 * @namespace appengine
 * @type {Function}
 * @version v1beta5
 * @variation v1beta5
 * @param {object=} options Options for Appengine
 */
function Appengine(options) {
    const self = this;
    self._options = options || {};
    self.apps = {
        /**
         * appengine.apps.get
         *
         * @desc Gets information about an application.
         *
         * @alias appengine.apps.get
         * @memberOf! appengine(v1beta5)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.ensureResourcesExist Certain resources associated with an application are created on-demand. Controls whether these resources should be created when performing the GET operation. If specified and any resources could not be created, the request will fail with an error code. Additionally, this parameter can cause the request to take longer to complete. Note: This parameter will be deprecated in a future version of the API.
         * @param {string} params.appsId Part of `name`. Name of the application to get. Example: apps/myapp.
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
                    url: 'https://appengine.googleapis.com/v1beta5/apps/{appsId}',
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
         * appengine.apps.patch
         *
         * @desc Updates the specified Application resource. You can update the following fields: auth_domain (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta5/apps#Application.FIELDS.auth_domain) default_cookie_expiration (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta5/apps#Application.FIELDS.default_cookie_expiration)
         *
         * @alias appengine.apps.patch
         * @memberOf! appengine(v1beta5)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.mask Standard field mask for the set of fields to be updated.
         * @param {string} params.appsId Part of `name`. Name of the Application resource to update. Example: apps/myapp.
         * @param {appengine(v1beta5).Application} params.resource Request body data
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
                    url: 'https://appengine.googleapis.com/v1beta5/apps/{appsId}',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['appsId'],
                pathParams: ['appsId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * appengine.apps.create
         *
         * @desc Creates an App Engine application for a Google Cloud Platform project. Required fields: id - The ID of the target Cloud Platform project. location - The region (https://cloud.google.com/appengine/docs/locations) where you want the App Engine application located.For more information about App Engine applications, see Managing Projects, Applications, and Billing (https://cloud.google.com/appengine/docs/python/console/).
         *
         * @alias appengine.apps.create
         * @memberOf! appengine(v1beta5)
         *
         * @param {object} params Parameters for request
         * @param {appengine(v1beta5).Application} params.resource Request body data
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
                    url: 'https://appengine.googleapis.com/v1beta5/apps',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        services: {
            /**
             * appengine.apps.services.delete
             *
             * @desc Deletes the specified service and all enclosed versions.
             *
             * @alias appengine.apps.services.delete
             * @memberOf! appengine(v1beta5)
             *
             * @param {object} params Parameters for request
             * @param {string} params.servicesId Part of `name`. See documentation of `appsId`.
             * @param {string} params.appsId Part of `name`. Name of the resource requested. Example: apps/myapp/services/default.
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
                        url: 'https://appengine.googleapis.com/v1beta5/apps/{appsId}/services/{servicesId}',
                        method: 'DELETE'
                    }, options),
                    params: params,
                    requiredParams: ['appsId', 'servicesId'],
                    pathParams: ['servicesId', 'appsId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * appengine.apps.services.get
             *
             * @desc Gets the current configuration of the specified service.
             *
             * @alias appengine.apps.services.get
             * @memberOf! appengine(v1beta5)
             *
             * @param {object} params Parameters for request
             * @param {string} params.appsId Part of `name`. Name of the resource requested. Example: apps/myapp/services/default.
             * @param {string} params.servicesId Part of `name`. See documentation of `appsId`.
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
                        url: 'https://appengine.googleapis.com/v1beta5/apps/{appsId}/services/{servicesId}',
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['appsId', 'servicesId'],
                    pathParams: ['appsId', 'servicesId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * appengine.apps.services.list
             *
             * @desc Lists all the services in the application.
             *
             * @alias appengine.apps.services.list
             * @memberOf! appengine(v1beta5)
             *
             * @param {object} params Parameters for request
             * @param {string} params.appsId Part of `name`. Name of the resource requested. Example: apps/myapp.
             * @param {string=} params.pageToken Continuation token for fetching the next page of results.
             * @param {integer=} params.pageSize Maximum results to return per page.
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
                        url: 'https://appengine.googleapis.com/v1beta5/apps/{appsId}/services',
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
             * appengine.apps.services.patch
             *
             * @desc Updates the configuration of the specified service.
             *
             * @alias appengine.apps.services.patch
             * @memberOf! appengine(v1beta5)
             *
             * @param {object} params Parameters for request
             * @param {string} params.servicesId Part of `name`. See documentation of `appsId`.
             * @param {string} params.appsId Part of `name`. Name of the resource to update. Example: apps/myapp/services/default.
             * @param {boolean=} params.migrateTraffic Set to true to gradually shift traffic to one or more versions that you specify. By default, traffic is shifted immediately. For gradual traffic migration, the target versions must be located within instances that are configured for both warmup requests (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta5/apps.services.versions#inboundservicetype) and automatic scaling (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta5/apps.services.versions#automaticscaling). You must specify the shardBy (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta5/apps.services#shardby) field in the Service resource. Gradual traffic migration is not supported in the App Engine flexible environment. For examples, see Migrating and Splitting Traffic (https://cloud.google.com/appengine/docs/admin-api/migrating-splitting-traffic).
             * @param {string=} params.mask Standard field mask for the set of fields to be updated.
             * @param {appengine(v1beta5).Service} params.resource Request body data
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
                        url: 'https://appengine.googleapis.com/v1beta5/apps/{appsId}/services/{servicesId}',
                        method: 'PATCH'
                    }, options),
                    params: params,
                    requiredParams: ['appsId', 'servicesId'],
                    pathParams: ['servicesId', 'appsId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            versions: {
                /**
                 * appengine.apps.services.versions.get
                 *
                 * @desc Gets the specified Version resource. By default, only a BASIC_VIEW will be returned. Specify the FULL_VIEW parameter to get the full resource.
                 *
                 * @alias appengine.apps.services.versions.get
                 * @memberOf! appengine(v1beta5)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.servicesId Part of `name`. See documentation of `appsId`.
                 * @param {string} params.appsId Part of `name`. Name of the resource requested. Example: apps/myapp/services/default/versions/v1.
                 * @param {string} params.versionsId Part of `name`. See documentation of `appsId`.
                 * @param {string=} params.view Controls the set of fields returned in the Get response.
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
                            url: 'https://appengine.googleapis.com/v1beta5/apps/{appsId}/services/{servicesId}/versions/{versionsId}',
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['appsId', 'servicesId', 'versionsId'],
                        pathParams: ['servicesId', 'appsId', 'versionsId'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * appengine.apps.services.versions.list
                 *
                 * @desc Lists the versions of a service.
                 *
                 * @alias appengine.apps.services.versions.list
                 * @memberOf! appengine(v1beta5)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.appsId Part of `name`. Name of the resource requested. Example: apps/myapp/services/default.
                 * @param {string=} params.pageToken Continuation token for fetching the next page of results.
                 * @param {integer=} params.pageSize Maximum results to return per page.
                 * @param {string=} params.view Controls the set of fields returned in the List response.
                 * @param {string} params.servicesId Part of `name`. See documentation of `appsId`.
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
                            url: 'https://appengine.googleapis.com/v1beta5/apps/{appsId}/services/{servicesId}/versions',
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['appsId', 'servicesId'],
                        pathParams: ['appsId', 'servicesId'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * appengine.apps.services.versions.patch
                 *
                 * @desc Updates the specified Version resource. You can specify the following fields depending on the App Engine environment and type of scaling that the version resource uses: serving_status (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta5/apps.services.versions#Version.FIELDS.serving_status):  For Version resources that use basic scaling, manual scaling, or run in  the App Engine flexible environment. instance_class (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta5/apps.services.versions#Version.FIELDS.instance_class):  For Version resources that run in the App Engine standard environment. automatic_scaling.min_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta5/apps.services.versions#Version.FIELDS.automatic_scaling):  For Version resources that use automatic scaling and run in the App  Engine standard environment. automatic_scaling.max_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta5/apps.services.versions#Version.FIELDS.automatic_scaling):  For Version resources that use automatic scaling and run in the App  Engine standard environment.
                 *
                 * @alias appengine.apps.services.versions.patch
                 * @memberOf! appengine(v1beta5)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.appsId Part of `name`. Name of the resource to update. Example: apps/myapp/services/default/versions/1.
                 * @param {string} params.versionsId Part of `name`. See documentation of `appsId`.
                 * @param {string=} params.mask Standard field mask for the set of fields to be updated.
                 * @param {string} params.servicesId Part of `name`. See documentation of `appsId`.
                 * @param {appengine(v1beta5).Version} params.resource Request body data
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
                            url: 'https://appengine.googleapis.com/v1beta5/apps/{appsId}/services/{servicesId}/versions/{versionsId}',
                            method: 'PATCH'
                        }, options),
                        params: params,
                        requiredParams: ['appsId', 'servicesId', 'versionsId'],
                        pathParams: ['appsId', 'versionsId', 'servicesId'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * appengine.apps.services.versions.create
                 *
                 * @desc Deploys new code and resource files to a new version.
                 *
                 * @alias appengine.apps.services.versions.create
                 * @memberOf! appengine(v1beta5)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.servicesId Part of `name`. See documentation of `appsId`.
                 * @param {string} params.appsId Part of `name`. Name of the resource to update. For example: "apps/myapp/services/default".
                 * @param {appengine(v1beta5).Version} params.resource Request body data
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
                            url: 'https://appengine.googleapis.com/v1beta5/apps/{appsId}/services/{servicesId}/versions',
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['appsId', 'servicesId'],
                        pathParams: ['servicesId', 'appsId'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * appengine.apps.services.versions.delete
                 *
                 * @desc Deletes an existing version.
                 *
                 * @alias appengine.apps.services.versions.delete
                 * @memberOf! appengine(v1beta5)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.servicesId Part of `name`. See documentation of `appsId`.
                 * @param {string} params.appsId Part of `name`. Name of the resource requested. Example: apps/myapp/services/default/versions/v1.
                 * @param {string} params.versionsId Part of `name`. See documentation of `appsId`.
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
                            url: 'https://appengine.googleapis.com/v1beta5/apps/{appsId}/services/{servicesId}/versions/{versionsId}',
                            method: 'DELETE'
                        }, options),
                        params: params,
                        requiredParams: ['appsId', 'servicesId', 'versionsId'],
                        pathParams: ['servicesId', 'appsId', 'versionsId'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                instances: {
                    /**
                     * appengine.apps.services.versions.instances.delete
                     *
                     * @desc Stops a running instance.
                     *
                     * @alias appengine.apps.services.versions.instances.delete
                     * @memberOf! appengine(v1beta5)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.versionsId Part of `name`. See documentation of `appsId`.
                     * @param {string} params.servicesId Part of `name`. See documentation of `appsId`.
                     * @param {string} params.appsId Part of `name`. Name of the resource requested. For example: "apps/myapp/services/default/versions/v1/instances/instance-1".
                     * @param {string} params.instancesId Part of `name`. See documentation of `appsId`.
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
                                url: 'https://appengine.googleapis.com/v1beta5/apps/{appsId}/services/{servicesId}/versions/{versionsId}/instances/{instancesId}',
                                method: 'DELETE'
                            }, options),
                            params: params,
                            requiredParams: ['appsId', 'servicesId', 'versionsId', 'instancesId'],
                            pathParams: ['versionsId', 'servicesId', 'appsId', 'instancesId'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    /**
                     * appengine.apps.services.versions.instances.get
                     *
                     * @desc Gets instance information.
                     *
                     * @alias appengine.apps.services.versions.instances.get
                     * @memberOf! appengine(v1beta5)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.appsId Part of `name`. Name of the resource requested. Example: apps/myapp/services/default/versions/v1/instances/instance-1.
                     * @param {string} params.instancesId Part of `name`. See documentation of `appsId`.
                     * @param {string} params.versionsId Part of `name`. See documentation of `appsId`.
                     * @param {string} params.servicesId Part of `name`. See documentation of `appsId`.
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
                                url: 'https://appengine.googleapis.com/v1beta5/apps/{appsId}/services/{servicesId}/versions/{versionsId}/instances/{instancesId}',
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['appsId', 'servicesId', 'versionsId', 'instancesId'],
                            pathParams: ['appsId', 'instancesId', 'versionsId', 'servicesId'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    /**
                     * appengine.apps.services.versions.instances.list
                     *
                     * @desc Lists the instances of a version.Tip: To aggregate details about instances over time, see the Stackdriver Monitoring API (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list).
                     *
                     * @alias appengine.apps.services.versions.instances.list
                     * @memberOf! appengine(v1beta5)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.appsId Part of `name`. Name of the resource requested. Example: apps/myapp/services/default/versions/v1.
                     * @param {string=} params.pageToken Continuation token for fetching the next page of results.
                     * @param {integer=} params.pageSize Maximum results to return per page.
                     * @param {string} params.versionsId Part of `name`. See documentation of `appsId`.
                     * @param {string} params.servicesId Part of `name`. See documentation of `appsId`.
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
                                url: 'https://appengine.googleapis.com/v1beta5/apps/{appsId}/services/{servicesId}/versions/{versionsId}/instances',
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['appsId', 'servicesId', 'versionsId'],
                            pathParams: ['appsId', 'versionsId', 'servicesId'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    /**
                     * appengine.apps.services.versions.instances.debug
                     *
                     * @desc Enables debugging on a VM instance. This allows you to use the SSH command to connect to the virtual machine where the instance lives. While in "debug mode", the instance continues to serve live traffic. You should delete the instance when you are done debugging and then allow the system to take over and determine if another instance should be started.Only applicable for instances in App Engine flexible environment.
                     *
                     * @alias appengine.apps.services.versions.instances.debug
                     * @memberOf! appengine(v1beta5)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.servicesId Part of `name`. See documentation of `appsId`.
                     * @param {string} params.appsId Part of `name`. Name of the resource requested. Example: apps/myapp/services/default/versions/v1/instances/instance-1.
                     * @param {string} params.instancesId Part of `name`. See documentation of `appsId`.
                     * @param {string} params.versionsId Part of `name`. See documentation of `appsId`.
                     * @param {appengine(v1beta5).DebugInstanceRequest} params.resource Request body data
                     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                     * @param {callback} callback The callback that handles the response.
                     * @return {object} Request object
                     */
                    debug: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options || (options = {});
                        const parameters = {
                            options: Object.assign({
                                url: 'https://appengine.googleapis.com/v1beta5/apps/{appsId}/services/{servicesId}/versions/{versionsId}/instances/{instancesId}:debug',
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['appsId', 'servicesId', 'versionsId', 'instancesId'],
                            pathParams: ['servicesId', 'appsId', 'instancesId', 'versionsId'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    }
                }
            }
        },
        operations: {
            /**
             * appengine.apps.operations.list
             *
             * @desc Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.NOTE: the name binding below allows API services to override the binding to use different resource name schemes, such as users/x/operations.
             *
             * @alias appengine.apps.operations.list
             * @memberOf! appengine(v1beta5)
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
                        url: 'https://appengine.googleapis.com/v1beta5/apps/{appsId}/operations',
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
             * @memberOf! appengine(v1beta5)
             *
             * @param {object} params Parameters for request
             * @param {string} params.appsId Part of `name`. The name of the operation resource.
             * @param {string} params.operationsId Part of `name`. See documentation of `appsId`.
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
                        url: 'https://appengine.googleapis.com/v1beta5/apps/{appsId}/operations/{operationsId}',
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['appsId', 'operationsId'],
                    pathParams: ['appsId', 'operationsId'],
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
             * @memberOf! appengine(v1beta5)
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
                        url: 'https://appengine.googleapis.com/v1beta5/apps/{appsId}/locations',
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
             * @memberOf! appengine(v1beta5)
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
                        url: 'https://appengine.googleapis.com/v1beta5/apps/{appsId}/locations/{locationsId}',
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
//# sourceMappingURL=v1beta5.js.map