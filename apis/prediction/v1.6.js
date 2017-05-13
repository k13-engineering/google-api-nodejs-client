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
 * Prediction API
 *
 * Lets you access a cloud hosted machine learning service that makes it easy to build smart apps
 *
 * @example
 * const google = require('googleapis');
 * const prediction = google.prediction('v1.6');
 *
 * @namespace prediction
 * @type {Function}
 * @version v1.6
 * @variation v1.6
 * @param {object=} options Options for Prediction
 */
function Prediction(options) {
    const self = this;
    self._options = options || {};
    self.hostedmodels = {
        /**
         * prediction.hostedmodels.predict
         *
         * @desc Submit input and request an output against a hosted model.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Prediction API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/prediction
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
         * var prediction = google.prediction('v1.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The project associated with the model.
         *     project: '',  // TODO: Update placeholder value.
         *
         *     // The name of a hosted model.
         *     hostedModelName: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   prediction.hostedmodels.predict(request, function(err, response) {
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
         * @alias prediction.hostedmodels.predict
         * @memberOf! prediction(v1.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.hostedModelName The name of a hosted model.
         * @param {string} params.project The project associated with the model.
         * @param {prediction(v1.6).Input} params.resource Request body data
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
                    url: 'https://www.googleapis.com/prediction/v1.6/projects/{project}/hostedmodels/{hostedModelName}/predict',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'hostedModelName'],
                pathParams: ['hostedModelName', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.trainedmodels = {
        /**
         * prediction.trainedmodels.analyze
         *
         * @desc Get analysis of the model and the data the model was trained on.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Prediction API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/prediction
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
         * var prediction = google.prediction('v1.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The project associated with the model.
         *     project: '',  // TODO: Update placeholder value.
         *
         *     // The unique name for the predictive model.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   prediction.trainedmodels.analyze(request, function(err, response) {
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
         * @alias prediction.trainedmodels.analyze
         * @memberOf! prediction(v1.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id The unique name for the predictive model.
         * @param {string} params.project The project associated with the model.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        analyze: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/prediction/v1.6/projects/{project}/trainedmodels/{id}/analyze',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'id'],
                pathParams: ['id', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * prediction.trainedmodels.delete
         *
         * @desc Delete a trained model.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Prediction API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/prediction
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
         * var prediction = google.prediction('v1.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The project associated with the model.
         *     project: '',  // TODO: Update placeholder value.
         *
         *     // The unique name for the predictive model.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   prediction.trainedmodels.delete(request, function(err) {
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
         * @alias prediction.trainedmodels.delete
         * @memberOf! prediction(v1.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id The unique name for the predictive model.
         * @param {string} params.project The project associated with the model.
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
                    url: 'https://www.googleapis.com/prediction/v1.6/projects/{project}/trainedmodels/{id}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'id'],
                pathParams: ['id', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * prediction.trainedmodels.get
         *
         * @desc Check training status of your model.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Prediction API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/prediction
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
         * var prediction = google.prediction('v1.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The project associated with the model.
         *     project: '',  // TODO: Update placeholder value.
         *
         *     // The unique name for the predictive model.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   prediction.trainedmodels.get(request, function(err, response) {
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
         * @alias prediction.trainedmodels.get
         * @memberOf! prediction(v1.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id The unique name for the predictive model.
         * @param {string} params.project The project associated with the model.
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
                    url: 'https://www.googleapis.com/prediction/v1.6/projects/{project}/trainedmodels/{id}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'id'],
                pathParams: ['id', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * prediction.trainedmodels.insert
         *
         * @desc Train a Prediction API model.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Prediction API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/prediction
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
         * var prediction = google.prediction('v1.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The project associated with the model.
         *     project: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   prediction.trainedmodels.insert(request, function(err, response) {
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
         * @alias prediction.trainedmodels.insert
         * @memberOf! prediction(v1.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project The project associated with the model.
         * @param {prediction(v1.6).Insert} params.resource Request body data
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
                    url: 'https://www.googleapis.com/prediction/v1.6/projects/{project}/trainedmodels',
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
         * prediction.trainedmodels.list
         *
         * @desc List available models.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Prediction API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/prediction
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
         * var prediction = google.prediction('v1.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The project associated with the model.
         *     project: '',  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   var handlePage = function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     var itemsPage = response['items'];
         *     if (!itemsPage) {
         *       return;
         *     }
         *     for (var i = 0; i < itemsPage.length; i++) {
         *       // TODO: Change code below to process each resource in `itemsPage`:
         *       console.log(JSON.stringify(itemsPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.pageToken = response.nextPageToken;
         *       prediction.trainedmodels.list(request, handlePage);
         *     }
         *   };
         *
         *   prediction.trainedmodels.list(request, handlePage);
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
         * @alias prediction.trainedmodels.list
         * @memberOf! prediction(v1.6)
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.maxResults Maximum number of results to return.
         * @param {string=} params.pageToken Pagination token.
         * @param {string} params.project The project associated with the model.
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
                    url: 'https://www.googleapis.com/prediction/v1.6/projects/{project}/trainedmodels/list',
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
         * prediction.trainedmodels.predict
         *
         * @desc Submit model id and request a prediction.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Prediction API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/prediction
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
         * var prediction = google.prediction('v1.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The project associated with the model.
         *     project: '',  // TODO: Update placeholder value.
         *
         *     // The unique name for the predictive model.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   prediction.trainedmodels.predict(request, function(err, response) {
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
         * @alias prediction.trainedmodels.predict
         * @memberOf! prediction(v1.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id The unique name for the predictive model.
         * @param {string} params.project The project associated with the model.
         * @param {prediction(v1.6).Input} params.resource Request body data
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
                    url: 'https://www.googleapis.com/prediction/v1.6/projects/{project}/trainedmodels/{id}/predict',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'id'],
                pathParams: ['id', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * prediction.trainedmodels.update
         *
         * @desc Add new data to a trained model.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Prediction API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/prediction
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
         * var prediction = google.prediction('v1.6');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The project associated with the model.
         *     project: '',  // TODO: Update placeholder value.
         *
         *     // The unique name for the predictive model.
         *     id: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body. All existing properties
         *       // will be replaced.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   prediction.trainedmodels.update(request, function(err, response) {
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
         * @alias prediction.trainedmodels.update
         * @memberOf! prediction(v1.6)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id The unique name for the predictive model.
         * @param {string} params.project The project associated with the model.
         * @param {prediction(v1.6).Update} params.resource Request body data
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
                    url: 'https://www.googleapis.com/prediction/v1.6/projects/{project}/trainedmodels/{id}',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['project', 'id'],
                pathParams: ['id', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
}
module.exports = Prediction;
//# sourceMappingURL=v1.6.js.map