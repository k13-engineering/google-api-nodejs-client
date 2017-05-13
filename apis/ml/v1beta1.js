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
 * Google Cloud Machine Learning Engine
 *
 * An API to enable creating and using machine learning models.
 *
 * @example
 * const google = require('googleapis');
 * const ml = google.ml('v1beta1');
 *
 * @namespace ml
 * @type {Function}
 * @version v1beta1
 * @variation v1beta1
 * @param {object=} options Options for Ml
 */
function Ml(options) {
    const self = this;
    self._options = options || {};
    self.projects = {
        /**
         * ml.projects.predict
         *
         * @desc Performs prediction on the data in the request.  **** REMOVE FROM GENERATED DOCUMENTATION
         *
         * @alias ml.projects.predict
         * @memberOf! ml(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name Required. The resource name of a model or a version.  Authorization: requires `Viewer` role on the parent project.
         * @param {ml(v1beta1).GoogleCloudMlV1beta1__PredictRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        predict: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://ml.googleapis.com/v1beta1/{name}:predict',
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
         * ml.projects.getConfig
         *
         * @desc Get the service account information associated with your project. You need this information in order to grant the service account persmissions for the Google Cloud Storage location where you put your model training code for training the model with Google Cloud Machine Learning.
         *
         * @alias ml.projects.getConfig
         * @memberOf! ml(v1beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name Required. The project name.  Authorization: requires `Viewer` role on the specified project.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getConfig: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://ml.googleapis.com/v1beta1/{name}:getConfig',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['name'],
                pathParams: ['name'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        operations: {
            /**
             * ml.projects.operations.cancel
             *
             * @desc Starts asynchronous cancellation on a long-running operation.  The server makes a best effort to cancel the operation, but success is not guaranteed.  If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.  Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
             *
             * @alias ml.projects.operations.cancel
             * @memberOf! ml(v1beta1)
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
                        url: 'https://ml.googleapis.com/v1beta1/{name}:cancel',
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
             * ml.projects.operations.delete
             *
             * @desc Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
             *
             * @alias ml.projects.operations.delete
             * @memberOf! ml(v1beta1)
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
                        url: 'https://ml.googleapis.com/v1beta1/{name}',
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
             * ml.projects.operations.list
             *
             * @desc Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.  NOTE: the `name` binding below allows API services to override the binding to use different resource name schemes, such as `users/x/operations`.
             *
             * @alias ml.projects.operations.list
             * @memberOf! ml(v1beta1)
             *
             * @param {object} params Parameters for request
             * @param {integer=} params.pageSize The standard list page size.
             * @param {string=} params.filter The standard list filter.
             * @param {string} params.name The name of the operation collection.
             * @param {string=} params.pageToken The standard list page token.
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
                        url: 'https://ml.googleapis.com/v1beta1/{name}/operations',
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
             * ml.projects.operations.get
             *
             * @desc Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service.
             *
             * @alias ml.projects.operations.get
             * @memberOf! ml(v1beta1)
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
                        url: 'https://ml.googleapis.com/v1beta1/{name}',
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
        models: {
            /**
             * ml.projects.models.delete
             *
             * @desc Deletes a model.  You can only delete a model if there are no versions in it. You can delete versions by calling [projects.models.versions.delete](/ml-engine/reference/rest/v1beta1/projects.models.versions/delete).
             *
             * @alias ml.projects.models.delete
             * @memberOf! ml(v1beta1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name Required. The name of the model.  Authorization: requires `Editor` role on the parent project.
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
                        url: 'https://ml.googleapis.com/v1beta1/{name}',
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
             * ml.projects.models.list
             *
             * @desc Lists the models in a project.  Each project can contain multiple models, and each model can have multiple versions.
             *
             * @alias ml.projects.models.list
             * @memberOf! ml(v1beta1)
             *
             * @param {object} params Parameters for request
             * @param {integer=} params.pageSize Optional. The number of models to retrieve per "page" of results. If there are more remaining results than this number, the response message will contain a valid value in the `next_page_token` field.  The default value is 20, and the maximum page size is 100.
             * @param {string} params.parent Required. The name of the project whose models are to be listed.  Authorization: requires `Viewer` role on the specified project.
             * @param {string=} params.pageToken Optional. A page token to request the next page of results.  You get the token from the `next_page_token` field of the response from the previous call.
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
                        url: 'https://ml.googleapis.com/v1beta1/{parent}/models',
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
             * ml.projects.models.get
             *
             * @desc Gets information about a model, including its name, the description (if set), and the default version (if at least one version of the model has been deployed).
             *
             * @alias ml.projects.models.get
             * @memberOf! ml(v1beta1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name Required. The name of the model.  Authorization: requires `Viewer` role on the parent project.
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
                        url: 'https://ml.googleapis.com/v1beta1/{name}',
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
             * ml.projects.models.create
             *
             * @desc Creates a model which will later contain one or more versions.  You must add at least one version before you can request predictions from the model. Add versions by calling [projects.models.versions.create](/ml-engine/reference/rest/v1beta1/projects.models.versions/create).
             *
             * @alias ml.projects.models.create
             * @memberOf! ml(v1beta1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.parent Required. The project name.  Authorization: requires `Editor` role on the specified project.
             * @param {ml(v1beta1).GoogleCloudMlV1beta1__Model} params.resource Request body data
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
                        url: 'https://ml.googleapis.com/v1beta1/{parent}/models',
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['parent'],
                    pathParams: ['parent'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            versions: {
                /**
                 * ml.projects.models.versions.setDefault
                 *
                 * @desc Designates a version to be the default for the model.  The default version is used for prediction requests made against the model that don't specify a version.  The first version to be created for a model is automatically set as the default. You must make any subsequent changes to the default version setting manually using this method.
                 *
                 * @alias ml.projects.models.versions.setDefault
                 * @memberOf! ml(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name Required. The name of the version to make the default for the model. You can get the names of all the versions of a model by calling [projects.models.versions.list](/ml-engine/reference/rest/v1beta1/projects.models.versions/list).  Authorization: requires `Editor` role on the parent project.
                 * @param {ml(v1beta1).GoogleCloudMlV1beta1__SetDefaultVersionRequest} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                setDefault: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const parameters = {
                        options: Object.assign({
                            url: 'https://ml.googleapis.com/v1beta1/{name}:setDefault',
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
                 * ml.projects.models.versions.delete
                 *
                 * @desc Deletes a model version.  Each model can have multiple versions deployed and in use at any given time. Use this method to remove a single version.  Note: You cannot delete the version that is set as the default version of the model unless it is the only remaining version.
                 *
                 * @alias ml.projects.models.versions.delete
                 * @memberOf! ml(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name Required. The name of the version. You can get the names of all the versions of a model by calling [projects.models.versions.list](/ml-engine/reference/rest/v1beta1/projects.models.versions/list).  Authorization: requires `Editor` role on the parent project.
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
                            url: 'https://ml.googleapis.com/v1beta1/{name}',
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
                 * ml.projects.models.versions.list
                 *
                 * @desc Gets basic information about all the versions of a model.  If you expect that a model has a lot of versions, or if you need to handle only a limited number of results at a time, you can request that the list be retrieved in batches (called pages):
                 *
                 * @alias ml.projects.models.versions.list
                 * @memberOf! ml(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string=} params.pageToken Optional. A page token to request the next page of results.  You get the token from the `next_page_token` field of the response from the previous call.
                 * @param {integer=} params.pageSize Optional. The number of versions to retrieve per "page" of results. If there are more remaining results than this number, the response message will contain a valid value in the `next_page_token` field.  The default value is 20, and the maximum page size is 100.
                 * @param {string} params.parent Required. The name of the model for which to list the version.  Authorization: requires `Viewer` role on the parent project.
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
                            url: 'https://ml.googleapis.com/v1beta1/{parent}/versions',
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
                 * ml.projects.models.versions.get
                 *
                 * @desc Gets information about a model version.  Models can have multiple versions. You can call [projects.models.versions.list](/ml-engine/reference/rest/v1beta1/projects.models.versions/list) to get the same information that this method returns for all of the versions of a model.
                 *
                 * @alias ml.projects.models.versions.get
                 * @memberOf! ml(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name Required. The name of the version.  Authorization: requires `Viewer` role on the parent project.
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
                            url: 'https://ml.googleapis.com/v1beta1/{name}',
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
                 * ml.projects.models.versions.create
                 *
                 * @desc Creates a new version of a model from a trained TensorFlow model.  If the version created in the cloud by this call is the first deployed version of the specified model, it will be made the default version of the model. When you add a version to a model that already has one or more versions, the default version does not automatically change. If you want a new version to be the default, you must call [projects.models.versions.setDefault](/ml-engine/reference/rest/v1beta1/projects.models.versions/setDefault).
                 *
                 * @alias ml.projects.models.versions.create
                 * @memberOf! ml(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.parent Required. The name of the model.  Authorization: requires `Editor` role on the parent project.
                 * @param {ml(v1beta1).GoogleCloudMlV1beta1__Version} params.resource Request body data
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
                            url: 'https://ml.googleapis.com/v1beta1/{parent}/versions',
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['parent'],
                        pathParams: ['parent'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                }
            }
        },
        jobs: {
            /**
             * ml.projects.jobs.list
             *
             * @desc Lists the jobs in the project.
             *
             * @alias ml.projects.jobs.list
             * @memberOf! ml(v1beta1)
             *
             * @param {object} params Parameters for request
             * @param {string=} params.filter Optional. Specifies the subset of jobs to retrieve.
             * @param {string=} params.pageToken Optional. A page token to request the next page of results.  You get the token from the `next_page_token` field of the response from the previous call.
             * @param {integer=} params.pageSize Optional. The number of jobs to retrieve per "page" of results. If there are more remaining results than this number, the response message will contain a valid value in the `next_page_token` field.  The default value is 20, and the maximum page size is 100.
             * @param {string} params.parent Required. The name of the project for which to list jobs.  Authorization: requires `Viewer` role on the specified project.
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
                        url: 'https://ml.googleapis.com/v1beta1/{parent}/jobs',
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
             * ml.projects.jobs.get
             *
             * @desc Describes a job.
             *
             * @alias ml.projects.jobs.get
             * @memberOf! ml(v1beta1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name Required. The name of the job to get the description of.  Authorization: requires `Viewer` role on the parent project.
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
                        url: 'https://ml.googleapis.com/v1beta1/{name}',
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
             * ml.projects.jobs.create
             *
             * @desc Creates a training or a batch prediction job.
             *
             * @alias ml.projects.jobs.create
             * @memberOf! ml(v1beta1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.parent Required. The project name.  Authorization: requires `Editor` role on the specified project.
             * @param {ml(v1beta1).GoogleCloudMlV1beta1__Job} params.resource Request body data
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
                        url: 'https://ml.googleapis.com/v1beta1/{parent}/jobs',
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
             * ml.projects.jobs.cancel
             *
             * @desc Cancels a running job.
             *
             * @alias ml.projects.jobs.cancel
             * @memberOf! ml(v1beta1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name Required. The name of the job to cancel.  Authorization: requires `Editor` role on the parent project.
             * @param {ml(v1beta1).GoogleCloudMlV1beta1__CancelJobRequest} params.resource Request body data
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
                        url: 'https://ml.googleapis.com/v1beta1/{name}:cancel',
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
    };
}
module.exports = Ml;
//# sourceMappingURL=v1beta1.js.map