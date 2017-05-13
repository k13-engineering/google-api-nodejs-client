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
 * Google Service Control API
 *
 * Google Service Control provides control plane functionality to managed services, such as logging, monitoring, and status checks.
 *
 * @example
 * const google = require('googleapis');
 * const servicecontrol = google.servicecontrol('v1');
 *
 * @namespace servicecontrol
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Servicecontrol
 */
function Servicecontrol(options) {
    const self = this;
    self._options = options || {};
    self.services = {
        /**
         * servicecontrol.services.startReconciliation
         *
         * @desc Unlike rate quota, allocation quota does not get refilled periodically. So, it is possible that the quota usage as seen by the service differs from what the One Platform considers the usage is. This is expected to happen only rarely, but over time this can accumulate. Services can invoke StartReconciliation and EndReconciliation to correct this usage drift, as described below: 1. Service sends StartReconciliation with a timestamp in future for each    metric that needs to be reconciled. The timestamp being in future allows    to account for in-flight AllocateQuota and ReleaseQuota requests for the    same metric. 2. One Platform records this timestamp and starts tracking subsequent    AllocateQuota and ReleaseQuota requests until EndReconciliation is    called. 3. At or after the time specified in the StartReconciliation, service    sends EndReconciliation with the usage that needs to be reconciled to. 4. One Platform adjusts its own record of usage for that metric to the    value specified in EndReconciliation by taking in to account any    allocation or release between StartReconciliation and EndReconciliation.  Signals the quota controller that the service wants to perform a usage reconciliation as specified in the request.  This method requires the `servicemanagement.services.quota` permission on the specified service. For more information, see [Google Cloud IAM](https://cloud.google.com/iam).
         *
         * @alias servicecontrol.services.startReconciliation
         * @memberOf! servicecontrol(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.serviceName Name of the service as specified in the service configuration. For example, `"pubsub.googleapis.com"`.  See google.api.Service for the definition of a service name.
         * @param {servicecontrol(v1).StartReconciliationRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        startReconciliation: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://servicecontrol.googleapis.com/v1/services/{serviceName}:startReconciliation',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['serviceName'],
                pathParams: ['serviceName'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * servicecontrol.services.check
         *
         * @desc Checks an operation with Google Service Control to decide whether the given operation should proceed. It should be called before the operation is executed.  If feasible, the client should cache the check results and reuse them for 60 seconds. In case of server errors, the client can rely on the cached results for longer time.  NOTE: the `CheckRequest` has the size limit of 64KB.  This method requires the `servicemanagement.services.check` permission on the specified service. For more information, see [Google Cloud IAM](https://cloud.google.com/iam).
         *
         * @alias servicecontrol.services.check
         * @memberOf! servicecontrol(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.serviceName The service name as specified in its service configuration. For example, `"pubsub.googleapis.com"`.  See google.api.Service for the definition of a service name.
         * @param {servicecontrol(v1).CheckRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        check: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://servicecontrol.googleapis.com/v1/services/{serviceName}:check',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['serviceName'],
                pathParams: ['serviceName'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * servicecontrol.services.releaseQuota
         *
         * @desc Releases previously allocated quota done through AllocateQuota method.  This method requires the `servicemanagement.services.quota` permission on the specified service. For more information, see [Google Cloud IAM](https://cloud.google.com/iam).  **NOTE:** the client code **must** fail-open if the server returns one of the following quota errors: -   `PROJECT_STATUS_UNAVAILABLE` -   `SERVICE_STATUS_UNAVAILABLE` -   `BILLING_STATUS_UNAVAILABLE` -   `QUOTA_SYSTEM_UNAVAILABLE`  The server may inject above errors to prohibit any hard dependency on the quota system.
         *
         * @alias servicecontrol.services.releaseQuota
         * @memberOf! servicecontrol(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.serviceName Name of the service as specified in the service configuration. For example, `"pubsub.googleapis.com"`.  See google.api.Service for the definition of a service name.
         * @param {servicecontrol(v1).ReleaseQuotaRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        releaseQuota: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://servicecontrol.googleapis.com/v1/services/{serviceName}:releaseQuota',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['serviceName'],
                pathParams: ['serviceName'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * servicecontrol.services.endReconciliation
         *
         * @desc Signals the quota controller that service ends the ongoing usage reconciliation.  This method requires the `servicemanagement.services.quota` permission on the specified service. For more information, see [Google Cloud IAM](https://cloud.google.com/iam).
         *
         * @alias servicecontrol.services.endReconciliation
         * @memberOf! servicecontrol(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.serviceName Name of the service as specified in the service configuration. For example, `"pubsub.googleapis.com"`.  See google.api.Service for the definition of a service name.
         * @param {servicecontrol(v1).EndReconciliationRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        endReconciliation: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://servicecontrol.googleapis.com/v1/services/{serviceName}:endReconciliation',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['serviceName'],
                pathParams: ['serviceName'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * servicecontrol.services.report
         *
         * @desc Reports operation results to Google Service Control, such as logs and metrics. It should be called after an operation is completed.  If feasible, the client should aggregate reporting data for up to 5 seconds to reduce API traffic. Limiting aggregation to 5 seconds is to reduce data loss during client crashes. Clients should carefully choose the aggregation time window to avoid data loss risk more than 0.01% for business and compliance reasons.  NOTE: the `ReportRequest` has the size limit of 1MB.  This method requires the `servicemanagement.services.report` permission on the specified service. For more information, see [Google Cloud IAM](https://cloud.google.com/iam).
         *
         * @alias servicecontrol.services.report
         * @memberOf! servicecontrol(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.serviceName The service name as specified in its service configuration. For example, `"pubsub.googleapis.com"`.  See google.api.Service for the definition of a service name.
         * @param {servicecontrol(v1).ReportRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        report: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://servicecontrol.googleapis.com/v1/services/{serviceName}:report',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['serviceName'],
                pathParams: ['serviceName'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * servicecontrol.services.allocateQuota
         *
         * @desc Attempts to allocate quota for the specified consumer. It should be called before the operation is executed.  This method requires the `servicemanagement.services.quota` permission on the specified service. For more information, see [Google Cloud IAM](https://cloud.google.com/iam).  **NOTE:** the client code **must** fail-open if the server returns one of the following quota errors: -   `PROJECT_STATUS_UNAVAILABLE` -   `SERVICE_STATUS_UNAVAILABLE` -   `BILLING_STATUS_UNAVAILABLE` -   `QUOTA_SYSTEM_UNAVAILABLE`  The server may inject above errors to prohibit any hard dependency on the quota system.
         *
         * @alias servicecontrol.services.allocateQuota
         * @memberOf! servicecontrol(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.serviceName Name of the service as specified in the service configuration. For example, `"pubsub.googleapis.com"`.  See google.api.Service for the definition of a service name.
         * @param {servicecontrol(v1).AllocateQuotaRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        allocateQuota: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://servicecontrol.googleapis.com/v1/services/{serviceName}:allocateQuota',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['serviceName'],
                pathParams: ['serviceName'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
}
module.exports = Servicecontrol;
//# sourceMappingURL=v1.js.map