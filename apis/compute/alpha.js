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
 * Compute Engine API
 *
 * Creates and runs virtual machines on Google Cloud Platform.
 *
 * @example
 * const google = require('googleapis');
 * const compute = google.compute('alpha');
 *
 * @namespace compute
 * @type {Function}
 * @version alpha
 * @variation alpha
 * @param {object=} options Options for Compute
 */
function Compute(options) {
    const self = this;
    self._options = options || {};
    self.acceleratorTypes = {
        /**
         * compute.acceleratorTypes.aggregatedList
         *
         * @desc Retrieves an aggregated list of accelerator types.
         *
         * @alias compute.acceleratorTypes.aggregatedList
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        aggregatedList: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/aggregated/acceleratorTypes',
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
         * compute.acceleratorTypes.get
         *
         * @desc Returns the specified accelerator type. Get a list of available accelerator types by making a list() request.
         *
         * @alias compute.acceleratorTypes.get
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.acceleratorType Name of the accelerator type to return.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.zone The name of the zone for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/acceleratorTypes/{acceleratorType}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'acceleratorType'],
                pathParams: ['acceleratorType', 'project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.acceleratorTypes.list
         *
         * @desc Retrieves a list of accelerator types available to the specified project.
         *
         * @alias compute.acceleratorTypes.list
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.zone The name of the zone for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/acceleratorTypes',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'zone'],
                pathParams: ['project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.addresses = {
        /**
         * compute.addresses.aggregatedList
         *
         * @desc Retrieves an aggregated list of addresses.
         *
         * @alias compute.addresses.aggregatedList
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        aggregatedList: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/aggregated/addresses',
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
         * compute.addresses.delete
         *
         * @desc Deletes the specified address resource.
         *
         * @alias compute.addresses.delete
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.address Name of the address resource to delete.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/addresses/{address}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'address'],
                pathParams: ['address', 'project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.addresses.get
         *
         * @desc Returns the specified address resource.
         *
         * @alias compute.addresses.get
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.address Name of the address resource to return.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/addresses/{address}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'address'],
                pathParams: ['address', 'project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.addresses.insert
         *
         * @desc Creates an address resource in the specified project using the data included in the request.
         *
         * @alias compute.addresses.insert
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).Address} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/addresses',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'region'],
                pathParams: ['project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.addresses.list
         *
         * @desc Retrieves a list of addresses contained within the specified region.
         *
         * @alias compute.addresses.list
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/addresses',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'region'],
                pathParams: ['project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.addresses.setLabels
         *
         * @desc Sets the labels on an Address. To learn more about labels, read the Labeling or Tagging Resources documentation.
         *
         * @alias compute.addresses.setLabels
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region The region for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {compute(alpha).RegionSetLabelsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setLabels: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/addresses/{resource}/setLabels',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'resource'],
                pathParams: ['project', 'region', 'resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.addresses.testIamPermissions
         *
         * @desc Returns permissions that a caller has on the specified resource.
         *
         * @alias compute.addresses.testIamPermissions
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region The name of the region for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {compute(alpha).TestPermissionsRequest} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/addresses/{resource}/testIamPermissions',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'resource'],
                pathParams: ['project', 'region', 'resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.autoscalers = {
        /**
         * compute.autoscalers.aggregatedList
         *
         * @desc Retrieves an aggregated list of autoscalers.
         *
         * @alias compute.autoscalers.aggregatedList
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        aggregatedList: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/aggregated/autoscalers',
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
         * compute.autoscalers.delete
         *
         * @desc Deletes the specified autoscaler.
         *
         * @alias compute.autoscalers.delete
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.autoscaler Name of the autoscaler to delete.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.zone Name of the zone for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/autoscalers/{autoscaler}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'autoscaler'],
                pathParams: ['autoscaler', 'project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.autoscalers.get
         *
         * @desc Returns the specified autoscaler resource. Get a list of available autoscalers by making a list() request.
         *
         * @alias compute.autoscalers.get
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.autoscaler Name of the autoscaler to return.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.zone Name of the zone for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/autoscalers/{autoscaler}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'autoscaler'],
                pathParams: ['autoscaler', 'project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.autoscalers.insert
         *
         * @desc Creates an autoscaler in the specified project using the data included in the request.
         *
         * @alias compute.autoscalers.insert
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.zone Name of the zone for this request.
         * @param {compute(alpha).Autoscaler} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/autoscalers',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone'],
                pathParams: ['project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.autoscalers.list
         *
         * @desc Retrieves a list of autoscalers contained within the specified zone.
         *
         * @alias compute.autoscalers.list
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.zone Name of the zone for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/autoscalers',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'zone'],
                pathParams: ['project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.autoscalers.patch
         *
         * @desc Updates an autoscaler in the specified project using the data included in the request. This method supports patch semantics.
         *
         * @alias compute.autoscalers.patch
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.autoscaler Name of the autoscaler to patch.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.zone Name of the zone for this request.
         * @param {compute(alpha).Autoscaler} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/autoscalers',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['project', 'zone'],
                pathParams: ['project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.autoscalers.testIamPermissions
         *
         * @desc Returns permissions that a caller has on the specified resource.
         *
         * @alias compute.autoscalers.testIamPermissions
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {string} params.zone The name of the zone for this request.
         * @param {compute(alpha).TestPermissionsRequest} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/autoscalers/{resource}/testIamPermissions',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'resource'],
                pathParams: ['project', 'resource', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.autoscalers.update
         *
         * @desc Updates an autoscaler in the specified project using the data included in the request.
         *
         * @alias compute.autoscalers.update
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.autoscaler Name of the autoscaler to update.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.zone Name of the zone for this request.
         * @param {compute(alpha).Autoscaler} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/autoscalers',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['project', 'zone'],
                pathParams: ['project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.backendBuckets = {
        /**
         * compute.backendBuckets.addSignedUrlKey
         *
         * @desc Adds the given Signed URL Key to the backend bucket.
         *
         * @alias compute.backendBuckets.addSignedUrlKey
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.backendBucket Name of the BackendBucket resource to which the Signed URL Key should be added. The name should conform to RFC1035.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).SignedUrlKey} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        addSignedUrlKey: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/backendBuckets/{backendBucket}/addSignedUrlKey',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'backendBucket'],
                pathParams: ['backendBucket', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.backendBuckets.delete
         *
         * @desc Deletes the specified BackendBucket resource.
         *
         * @alias compute.backendBuckets.delete
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.backendBucket Name of the BackendBucket resource to delete.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/backendBuckets/{backendBucket}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'backendBucket'],
                pathParams: ['backendBucket', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.backendBuckets.deleteSignedUrlKey
         *
         * @desc Deletes the given Signed URL Key from the backend bucket.
         *
         * @alias compute.backendBuckets.deleteSignedUrlKey
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.backendBucket Name of the BackendBucket resource to which the Signed URL Key should be added. The name should conform to RFC1035.
         * @param {string} params.keyName The name of the Signed URL Key to delete.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        deleteSignedUrlKey: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/backendBuckets/{backendBucket}/deleteSignedUrlKey',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'backendBucket', 'keyName'],
                pathParams: ['backendBucket', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.backendBuckets.get
         *
         * @desc Returns the specified BackendBucket resource. Get a list of available backend buckets by making a list() request.
         *
         * @alias compute.backendBuckets.get
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.backendBucket Name of the BackendBucket resource to return.
         * @param {string} params.project Project ID for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/backendBuckets/{backendBucket}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'backendBucket'],
                pathParams: ['backendBucket', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.backendBuckets.getIamPolicy
         *
         * @desc Gets the access control policy for a resource. May be empty if no such policy or resource exists.
         *
         * @alias compute.backendBuckets.getIamPolicy
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.resource_ Name of the resource for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/backendBuckets/{resource}/getIamPolicy',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'resource'],
                pathParams: ['project', 'resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.backendBuckets.insert
         *
         * @desc Creates a BackendBucket resource in the specified project using the data included in the request.
         *
         * @alias compute.backendBuckets.insert
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).BackendBucket} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/backendBuckets',
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
         * compute.backendBuckets.list
         *
         * @desc Retrieves the list of BackendBucket resources available to the specified project.
         *
         * @alias compute.backendBuckets.list
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/backendBuckets',
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
         * compute.backendBuckets.patch
         *
         * @desc Updates the specified BackendBucket resource with the data included in the request. This method supports patch semantics.
         *
         * @alias compute.backendBuckets.patch
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.backendBucket Name of the BackendBucket resource to patch.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).BackendBucket} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/backendBuckets/{backendBucket}',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['project', 'backendBucket'],
                pathParams: ['backendBucket', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.backendBuckets.setIamPolicy
         *
         * @desc Sets the access control policy on the specified resource. Replaces any existing policy.
         *
         * @alias compute.backendBuckets.setIamPolicy
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {compute(alpha).Policy} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/backendBuckets/{resource}/setIamPolicy',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'resource'],
                pathParams: ['project', 'resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.backendBuckets.testIamPermissions
         *
         * @desc Returns permissions that a caller has on the specified resource.
         *
         * @alias compute.backendBuckets.testIamPermissions
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {compute(alpha).TestPermissionsRequest} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/backendBuckets/{resource}/testIamPermissions',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'resource'],
                pathParams: ['project', 'resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.backendBuckets.update
         *
         * @desc Updates the specified BackendBucket resource with the data included in the request.
         *
         * @alias compute.backendBuckets.update
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.backendBucket Name of the BackendBucket resource to update.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).BackendBucket} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/backendBuckets/{backendBucket}',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['project', 'backendBucket'],
                pathParams: ['backendBucket', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.backendServices = {
        /**
         * compute.backendServices.addSignedUrlKey
         *
         * @desc Adds the given Signed URL Key to the specified backend service.
         *
         * @alias compute.backendServices.addSignedUrlKey
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.backendService Name of the BackendService resource to which the Signed URL Key should be added. The name should conform to RFC1035.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).SignedUrlKey} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        addSignedUrlKey: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/backendServices/{backendService}/addSignedUrlKey',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'backendService'],
                pathParams: ['backendService', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.backendServices.aggregatedList
         *
         * @desc Retrieves the list of all BackendService resources, regional and global, available to the specified project.
         *
         * @alias compute.backendServices.aggregatedList
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Name of the project scoping this request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        aggregatedList: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/aggregated/backendServices',
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
         * compute.backendServices.delete
         *
         * @desc Deletes the specified BackendService resource.
         *
         * @alias compute.backendServices.delete
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.backendService Name of the BackendService resource to delete.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/backendServices/{backendService}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'backendService'],
                pathParams: ['backendService', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.backendServices.deleteSignedUrlKey
         *
         * @desc Deletes the given Signed URL Key from the specified backend service.
         *
         * @alias compute.backendServices.deleteSignedUrlKey
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.backendService Name of the BackendService resource to which the Signed URL Key should be added. The name should conform to RFC1035.
         * @param {string} params.keyName The name of the Signed URL Key to delete.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        deleteSignedUrlKey: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/backendServices/{backendService}/deleteSignedUrlKey',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'backendService', 'keyName'],
                pathParams: ['backendService', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.backendServices.get
         *
         * @desc Returns the specified BackendService resource. Get a list of available backend services by making a list() request.
         *
         * @alias compute.backendServices.get
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.backendService Name of the BackendService resource to return.
         * @param {string} params.project Project ID for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/backendServices/{backendService}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'backendService'],
                pathParams: ['backendService', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.backendServices.getHealth
         *
         * @desc Gets the most recent health check results for this BackendService.
         *
         * @alias compute.backendServices.getHealth
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.backendService Name of the BackendService resource to which the queried instance belongs.
         * @param {string} params.project
         * @param {compute(alpha).ResourceGroupReference} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getHealth: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/backendServices/{backendService}/getHealth',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'backendService'],
                pathParams: ['backendService', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.backendServices.insert
         *
         * @desc Creates a BackendService resource in the specified project using the data included in the request. There are several restrictions and guidelines to keep in mind when creating a backend service. Read  Restrictions and Guidelines for more information.
         *
         * @alias compute.backendServices.insert
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).BackendService} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/backendServices',
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
         * compute.backendServices.list
         *
         * @desc Retrieves the list of BackendService resources available to the specified project.
         *
         * @alias compute.backendServices.list
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/backendServices',
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
         * compute.backendServices.patch
         *
         * @desc Patches the specified BackendService resource with the data included in the request. There are several restrictions and guidelines to keep in mind when updating a backend service. Read  Restrictions and Guidelines for more information. This method supports patch semantics.
         *
         * @alias compute.backendServices.patch
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.backendService Name of the BackendService resource to patch.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).BackendService} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/backendServices/{backendService}',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['project', 'backendService'],
                pathParams: ['backendService', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.backendServices.setSecurityPolicy
         *
         * @desc Sets the security policy for the specified backend service.
         *
         * @alias compute.backendServices.setSecurityPolicy
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.backendService Name of the BackendService resource to which the security policy should be set. The name should conform to RFC1035.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).SecurityPolicyReference} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setSecurityPolicy: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/backendServices/{backendService}/setSecurityPolicy',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'backendService'],
                pathParams: ['backendService', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.backendServices.testIamPermissions
         *
         * @desc Returns permissions that a caller has on the specified resource.
         *
         * @alias compute.backendServices.testIamPermissions
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {compute(alpha).TestPermissionsRequest} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/backendServices/{resource}/testIamPermissions',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'resource'],
                pathParams: ['project', 'resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.backendServices.update
         *
         * @desc Updates the specified BackendService resource with the data included in the request. There are several restrictions and guidelines to keep in mind when updating a backend service. Read  Restrictions and Guidelines for more information.
         *
         * @alias compute.backendServices.update
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.backendService Name of the BackendService resource to update.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).BackendService} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/backendServices/{backendService}',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['project', 'backendService'],
                pathParams: ['backendService', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.clientSslPolicies = {
        /**
         * compute.clientSslPolicies.testIamPermissions
         *
         * @desc Returns permissions that a caller has on the specified resource.
         *
         * @alias compute.clientSslPolicies.testIamPermissions
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {compute(alpha).TestPermissionsRequest} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/clientSslPolicies/{resource}/testIamPermissions',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'resource'],
                pathParams: ['project', 'resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.diskTypes = {
        /**
         * compute.diskTypes.aggregatedList
         *
         * @desc Retrieves an aggregated list of disk types.
         *
         * @alias compute.diskTypes.aggregatedList
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        aggregatedList: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/aggregated/diskTypes',
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
         * compute.diskTypes.get
         *
         * @desc Returns the specified disk type. Get a list of available disk types by making a list() request.
         *
         * @alias compute.diskTypes.get
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.diskType Name of the disk type to return.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.zone The name of the zone for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/diskTypes/{diskType}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'diskType'],
                pathParams: ['diskType', 'project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.diskTypes.list
         *
         * @desc Retrieves a list of disk types available to the specified project.
         *
         * @alias compute.diskTypes.list
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.zone The name of the zone for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/diskTypes',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'zone'],
                pathParams: ['project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.disks = {
        /**
         * compute.disks.aggregatedList
         *
         * @desc Retrieves an aggregated list of persistent disks.
         *
         * @alias compute.disks.aggregatedList
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        aggregatedList: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/aggregated/disks',
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
         * compute.disks.createSnapshot
         *
         * @desc Creates a snapshot of a specified persistent disk.
         *
         * @alias compute.disks.createSnapshot
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.disk Name of the persistent disk to snapshot.
         * @param {boolean=} params.guestFlush
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.zone The name of the zone for this request.
         * @param {compute(alpha).Snapshot} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        createSnapshot: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/disks/{disk}/createSnapshot',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'disk'],
                pathParams: ['disk', 'project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.disks.delete
         *
         * @desc Deletes the specified persistent disk. Deleting a disk removes its data permanently and is irreversible. However, deleting a disk does not delete any snapshots previously made from the disk. You must separately delete snapshots.
         *
         * @alias compute.disks.delete
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.disk Name of the persistent disk to delete.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.zone The name of the zone for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/disks/{disk}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'disk'],
                pathParams: ['disk', 'project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.disks.get
         *
         * @desc Returns a specified persistent disk. Get a list of available persistent disks by making a list() request.
         *
         * @alias compute.disks.get
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.disk Name of the persistent disk to return.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.zone The name of the zone for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/disks/{disk}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'disk'],
                pathParams: ['disk', 'project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.disks.getIamPolicy
         *
         * @desc Gets the access control policy for a resource. May be empty if no such policy or resource exists.
         *
         * @alias compute.disks.getIamPolicy
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {string} params.zone The name of the zone for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/disks/{resource}/getIamPolicy',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'resource'],
                pathParams: ['project', 'resource', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.disks.insert
         *
         * @desc Creates a persistent disk in the specified project using the data in the request. You can create a disk with a sourceImage, a sourceSnapshot, or create an empty 500 GB data disk by omitting all properties. You can also create a disk that is larger than the default size by specifying the sizeGb property.
         *
         * @alias compute.disks.insert
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string=} params.sourceImage Optional. Source image to restore onto a disk.
         * @param {string} params.zone The name of the zone for this request.
         * @param {compute(alpha).Disk} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/disks',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone'],
                pathParams: ['project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.disks.list
         *
         * @desc Retrieves a list of persistent disks contained within the specified zone.
         *
         * @alias compute.disks.list
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.zone The name of the zone for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/disks',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'zone'],
                pathParams: ['project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.disks.resize
         *
         * @desc Resizes the specified persistent disk.
         *
         * @alias compute.disks.resize
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.disk The name of the persistent disk.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.zone The name of the zone for this request.
         * @param {compute(alpha).DisksResizeRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        resize: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/disks/{disk}/resize',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'disk'],
                pathParams: ['disk', 'project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.disks.setIamPolicy
         *
         * @desc Sets the access control policy on the specified resource. Replaces any existing policy.
         *
         * @alias compute.disks.setIamPolicy
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {string} params.zone The name of the zone for this request.
         * @param {compute(alpha).Policy} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/disks/{resource}/setIamPolicy',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'resource'],
                pathParams: ['project', 'resource', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.disks.setLabels
         *
         * @desc Sets the labels on a disk. To learn more about labels, read the Labeling or Tagging Resources documentation.
         *
         * @alias compute.disks.setLabels
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {string} params.zone The name of the zone for this request.
         * @param {compute(alpha).ZoneSetLabelsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setLabels: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/disks/{resource}/setLabels',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'resource'],
                pathParams: ['project', 'resource', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.disks.testIamPermissions
         *
         * @desc Returns permissions that a caller has on the specified resource.
         *
         * @alias compute.disks.testIamPermissions
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {string} params.zone The name of the zone for this request.
         * @param {compute(alpha).TestPermissionsRequest} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/disks/{resource}/testIamPermissions',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'resource'],
                pathParams: ['project', 'resource', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.firewalls = {
        /**
         * compute.firewalls.delete
         *
         * @desc Deletes the specified firewall.
         *
         * @alias compute.firewalls.delete
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.firewall Name of the firewall rule to delete.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/firewalls/{firewall}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'firewall'],
                pathParams: ['firewall', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.firewalls.get
         *
         * @desc Returns the specified firewall.
         *
         * @alias compute.firewalls.get
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.firewall Name of the firewall rule to return.
         * @param {string} params.project Project ID for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/firewalls/{firewall}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'firewall'],
                pathParams: ['firewall', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.firewalls.insert
         *
         * @desc Creates a firewall rule in the specified project using the data included in the request.
         *
         * @alias compute.firewalls.insert
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).Firewall} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/firewalls',
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
         * compute.firewalls.list
         *
         * @desc Retrieves the list of firewall rules available to the specified project.
         *
         * @alias compute.firewalls.list
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/firewalls',
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
         * compute.firewalls.patch
         *
         * @desc Updates the specified firewall rule with the data included in the request. This method supports patch semantics.
         *
         * @alias compute.firewalls.patch
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.firewall Name of the firewall rule to patch.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).Firewall} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/firewalls/{firewall}',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['project', 'firewall'],
                pathParams: ['firewall', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.firewalls.testIamPermissions
         *
         * @desc Returns permissions that a caller has on the specified resource.
         *
         * @alias compute.firewalls.testIamPermissions
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {compute(alpha).TestPermissionsRequest} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/firewalls/{resource}/testIamPermissions',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'resource'],
                pathParams: ['project', 'resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.firewalls.update
         *
         * @desc Updates the specified firewall rule with the data included in the request. Using PUT method, can only update following fields of firewall rule: allowed, description, sourceRanges, sourceTags, targetTags.
         *
         * @alias compute.firewalls.update
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.firewall Name of the firewall rule to update.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).Firewall} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/firewalls/{firewall}',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['project', 'firewall'],
                pathParams: ['firewall', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.forwardingRules = {
        /**
         * compute.forwardingRules.aggregatedList
         *
         * @desc Retrieves an aggregated list of forwarding rules.
         *
         * @alias compute.forwardingRules.aggregatedList
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        aggregatedList: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/aggregated/forwardingRules',
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
         * compute.forwardingRules.delete
         *
         * @desc Deletes the specified ForwardingRule resource.
         *
         * @alias compute.forwardingRules.delete
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.forwardingRule Name of the ForwardingRule resource to delete.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region scoping this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/forwardingRules/{forwardingRule}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'forwardingRule'],
                pathParams: ['forwardingRule', 'project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.forwardingRules.get
         *
         * @desc Returns the specified ForwardingRule resource.
         *
         * @alias compute.forwardingRules.get
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.forwardingRule Name of the ForwardingRule resource to return.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region scoping this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/forwardingRules/{forwardingRule}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'forwardingRule'],
                pathParams: ['forwardingRule', 'project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.forwardingRules.insert
         *
         * @desc Creates a ForwardingRule resource in the specified project and region using the data included in the request.
         *
         * @alias compute.forwardingRules.insert
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region scoping this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).ForwardingRule} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/forwardingRules',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'region'],
                pathParams: ['project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.forwardingRules.list
         *
         * @desc Retrieves a list of ForwardingRule resources available to the specified project and region.
         *
         * @alias compute.forwardingRules.list
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region scoping this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/forwardingRules',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'region'],
                pathParams: ['project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.forwardingRules.patch
         *
         * @desc Updates the specified forwarding rule with the data included in the request. This method supports patch semantics. Currently it only allow to patch network_tier field.
         *
         * @alias compute.forwardingRules.patch
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.forwardingRule Name of the ForwardingRule resource to patch.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region scoping this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).ForwardingRule} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/forwardingRules/{forwardingRule}',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'forwardingRule'],
                pathParams: ['forwardingRule', 'project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.forwardingRules.setLabels
         *
         * @desc Sets the labels on the specified resource. To learn more about labels, read the Labeling or Tagging Resources documentation.
         *
         * @alias compute.forwardingRules.setLabels
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region The region for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {compute(alpha).RegionSetLabelsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setLabels: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/forwardingRules/{resource}/setLabels',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'resource'],
                pathParams: ['project', 'region', 'resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.forwardingRules.setTarget
         *
         * @desc Changes target URL for forwarding rule. The new target should be of the same type as the old target.
         *
         * @alias compute.forwardingRules.setTarget
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.forwardingRule Name of the ForwardingRule resource in which target is to be set.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region scoping this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).TargetReference} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setTarget: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/forwardingRules/{forwardingRule}/setTarget',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'forwardingRule'],
                pathParams: ['forwardingRule', 'project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.forwardingRules.testIamPermissions
         *
         * @desc Returns permissions that a caller has on the specified resource.
         *
         * @alias compute.forwardingRules.testIamPermissions
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region The name of the region for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {compute(alpha).TestPermissionsRequest} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/forwardingRules/{resource}/testIamPermissions',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'resource'],
                pathParams: ['project', 'region', 'resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.globalAddresses = {
        /**
         * compute.globalAddresses.delete
         *
         * @desc Deletes the specified address resource.
         *
         * @alias compute.globalAddresses.delete
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.address Name of the address resource to delete.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/addresses/{address}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'address'],
                pathParams: ['address', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.globalAddresses.get
         *
         * @desc Returns the specified address resource. Get a list of available addresses by making a list() request.
         *
         * @alias compute.globalAddresses.get
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.address Name of the address resource to return.
         * @param {string} params.project Project ID for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/addresses/{address}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'address'],
                pathParams: ['address', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.globalAddresses.insert
         *
         * @desc Creates an address resource in the specified project using the data included in the request.
         *
         * @alias compute.globalAddresses.insert
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).Address} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/addresses',
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
         * compute.globalAddresses.list
         *
         * @desc Retrieves a list of global addresses.
         *
         * @alias compute.globalAddresses.list
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/addresses',
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
         * compute.globalAddresses.setLabels
         *
         * @desc Sets the labels on a GlobalAddress. To learn more about labels, read the Labeling or Tagging Resources documentation.
         *
         * @alias compute.globalAddresses.setLabels
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {compute(alpha).GlobalSetLabelsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setLabels: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/addresses/{resource}/setLabels',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'resource'],
                pathParams: ['project', 'resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.globalAddresses.testIamPermissions
         *
         * @desc Returns permissions that a caller has on the specified resource.
         *
         * @alias compute.globalAddresses.testIamPermissions
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {compute(alpha).TestPermissionsRequest} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/addresses/{resource}/testIamPermissions',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'resource'],
                pathParams: ['project', 'resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.globalForwardingRules = {
        /**
         * compute.globalForwardingRules.delete
         *
         * @desc Deletes the specified GlobalForwardingRule resource.
         *
         * @alias compute.globalForwardingRules.delete
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.forwardingRule Name of the ForwardingRule resource to delete.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/forwardingRules/{forwardingRule}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'forwardingRule'],
                pathParams: ['forwardingRule', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.globalForwardingRules.get
         *
         * @desc Returns the specified GlobalForwardingRule resource. Get a list of available forwarding rules by making a list() request.
         *
         * @alias compute.globalForwardingRules.get
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.forwardingRule Name of the ForwardingRule resource to return.
         * @param {string} params.project Project ID for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/forwardingRules/{forwardingRule}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'forwardingRule'],
                pathParams: ['forwardingRule', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.globalForwardingRules.insert
         *
         * @desc Creates a GlobalForwardingRule resource in the specified project using the data included in the request.
         *
         * @alias compute.globalForwardingRules.insert
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).ForwardingRule} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/forwardingRules',
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
         * compute.globalForwardingRules.list
         *
         * @desc Retrieves a list of GlobalForwardingRule resources available to the specified project.
         *
         * @alias compute.globalForwardingRules.list
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/forwardingRules',
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
         * compute.globalForwardingRules.patch
         *
         * @desc Updates the specified forwarding rule with the data included in the request. This method supports patch semantics. Currently it only allow to patch network_tier field.
         *
         * @alias compute.globalForwardingRules.patch
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.forwardingRule Name of the ForwardingRule resource to patch.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).ForwardingRule} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/forwardingRules/{forwardingRule}',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['project', 'forwardingRule'],
                pathParams: ['forwardingRule', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.globalForwardingRules.setLabels
         *
         * @desc Sets the labels on the specified resource. To learn more about labels, read the Labeling or Tagging Resources documentation.
         *
         * @alias compute.globalForwardingRules.setLabels
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {compute(alpha).GlobalSetLabelsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setLabels: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/forwardingRules/{resource}/setLabels',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'resource'],
                pathParams: ['project', 'resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.globalForwardingRules.setTarget
         *
         * @desc Changes target URL for the GlobalForwardingRule resource. The new target should be of the same type as the old target.
         *
         * @alias compute.globalForwardingRules.setTarget
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.forwardingRule Name of the ForwardingRule resource in which target is to be set.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).TargetReference} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setTarget: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/forwardingRules/{forwardingRule}/setTarget',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'forwardingRule'],
                pathParams: ['forwardingRule', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.globalForwardingRules.testIamPermissions
         *
         * @desc Returns permissions that a caller has on the specified resource.
         *
         * @alias compute.globalForwardingRules.testIamPermissions
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {compute(alpha).TestPermissionsRequest} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/forwardingRules/{resource}/testIamPermissions',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'resource'],
                pathParams: ['project', 'resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.globalOperations = {
        /**
         * compute.globalOperations.aggregatedList
         *
         * @desc Retrieves an aggregated list of all operations.
         *
         * @alias compute.globalOperations.aggregatedList
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        aggregatedList: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/aggregated/operations',
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
         * compute.globalOperations.delete
         *
         * @desc Deletes the specified Operations resource.
         *
         * @alias compute.globalOperations.delete
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.operation Name of the Operations resource to delete.
         * @param {string} params.project Project ID for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/operations/{operation}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'operation'],
                pathParams: ['operation', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.globalOperations.get
         *
         * @desc Retrieves the specified Operations resource. Get a list of operations by making a list() request.
         *
         * @alias compute.globalOperations.get
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.operation Name of the Operations resource to return.
         * @param {string} params.project Project ID for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/operations/{operation}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'operation'],
                pathParams: ['operation', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.globalOperations.list
         *
         * @desc Retrieves a list of Operation resources contained within the specified project.
         *
         * @alias compute.globalOperations.list
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/operations',
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
    self.healthChecks = {
        /**
         * compute.healthChecks.delete
         *
         * @desc Deletes the specified HealthCheck resource.
         *
         * @alias compute.healthChecks.delete
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.healthCheck Name of the HealthCheck resource to delete.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/healthChecks/{healthCheck}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'healthCheck'],
                pathParams: ['healthCheck', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.healthChecks.get
         *
         * @desc Returns the specified HealthCheck resource. Get a list of available health checks by making a list() request.
         *
         * @alias compute.healthChecks.get
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.healthCheck Name of the HealthCheck resource to return.
         * @param {string} params.project Project ID for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/healthChecks/{healthCheck}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'healthCheck'],
                pathParams: ['healthCheck', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.healthChecks.insert
         *
         * @desc Creates a HealthCheck resource in the specified project using the data included in the request.
         *
         * @alias compute.healthChecks.insert
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).HealthCheck} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/healthChecks',
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
         * compute.healthChecks.list
         *
         * @desc Retrieves the list of HealthCheck resources available to the specified project.
         *
         * @alias compute.healthChecks.list
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/healthChecks',
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
         * compute.healthChecks.patch
         *
         * @desc Updates a HealthCheck resource in the specified project using the data included in the request. This method supports patch semantics.
         *
         * @alias compute.healthChecks.patch
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.healthCheck Name of the HealthCheck resource to patch.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).HealthCheck} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/healthChecks/{healthCheck}',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['project', 'healthCheck'],
                pathParams: ['healthCheck', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.healthChecks.testIamPermissions
         *
         * @desc Returns permissions that a caller has on the specified resource.
         *
         * @alias compute.healthChecks.testIamPermissions
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {compute(alpha).TestPermissionsRequest} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/healthChecks/{resource}/testIamPermissions',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'resource'],
                pathParams: ['project', 'resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.healthChecks.update
         *
         * @desc Updates a HealthCheck resource in the specified project using the data included in the request.
         *
         * @alias compute.healthChecks.update
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.healthCheck Name of the HealthCheck resource to update.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).HealthCheck} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/healthChecks/{healthCheck}',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['project', 'healthCheck'],
                pathParams: ['healthCheck', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.hostTypes = {
        /**
         * compute.hostTypes.aggregatedList
         *
         * @desc Retrieves an aggregated list of host types.
         *
         * @alias compute.hostTypes.aggregatedList
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        aggregatedList: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/aggregated/hostTypes',
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
         * compute.hostTypes.get
         *
         * @desc Returns the specified host type. Get a list of available host types by making a list() request.
         *
         * @alias compute.hostTypes.get
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.hostType Name of the host type to return.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.zone The name of the zone for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/hostTypes/{hostType}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'hostType'],
                pathParams: ['hostType', 'project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.hostTypes.list
         *
         * @desc Retrieves a list of host types available to the specified project.
         *
         * @alias compute.hostTypes.list
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.zone The name of the zone for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/hostTypes',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'zone'],
                pathParams: ['project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.hosts = {
        /**
         * compute.hosts.aggregatedList
         *
         * @desc Retrieves an aggregated list of hosts.
         *
         * @alias compute.hosts.aggregatedList
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        aggregatedList: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/aggregated/hosts',
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
         * compute.hosts.delete
         *
         * @desc Deletes the specified Host resource.
         *
         * @alias compute.hosts.delete
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.host Name of the Host resource to delete.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.zone The name of the zone for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/hosts/{host}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'host'],
                pathParams: ['host', 'project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.hosts.get
         *
         * @desc Returns the specified host. Get a list of available hosts by making a list() request.
         *
         * @alias compute.hosts.get
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.host Name of the host to return.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.zone The name of the zone for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/hosts/{host}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'host'],
                pathParams: ['host', 'project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.hosts.getIamPolicy
         *
         * @desc Gets the access control policy for a resource. May be empty if no such policy or resource exists.
         *
         * @alias compute.hosts.getIamPolicy
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {string} params.zone The name of the zone for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/hosts/{resource}/getIamPolicy',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'resource'],
                pathParams: ['project', 'resource', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.hosts.insert
         *
         * @desc Creates a host resource in the specified project using the data included in the request.
         *
         * @alias compute.hosts.insert
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.zone The name of the zone for this request.
         * @param {compute(alpha).Host} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/hosts',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone'],
                pathParams: ['project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.hosts.list
         *
         * @desc Retrieves a list of hosts available to the specified project.
         *
         * @alias compute.hosts.list
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.zone The name of the zone for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/hosts',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'zone'],
                pathParams: ['project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.hosts.setIamPolicy
         *
         * @desc Sets the access control policy on the specified resource. Replaces any existing policy.
         *
         * @alias compute.hosts.setIamPolicy
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {string} params.zone The name of the zone for this request.
         * @param {compute(alpha).Policy} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/hosts/{resource}/setIamPolicy',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'resource'],
                pathParams: ['project', 'resource', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.hosts.testIamPermissions
         *
         * @desc Returns permissions that a caller has on the specified resource.
         *
         * @alias compute.hosts.testIamPermissions
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {string} params.zone The name of the zone for this request.
         * @param {compute(alpha).TestPermissionsRequest} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/hosts/{resource}/testIamPermissions',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'resource'],
                pathParams: ['project', 'resource', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.httpHealthChecks = {
        /**
         * compute.httpHealthChecks.delete
         *
         * @desc Deletes the specified HttpHealthCheck resource.
         *
         * @alias compute.httpHealthChecks.delete
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.httpHealthCheck Name of the HttpHealthCheck resource to delete.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/httpHealthChecks/{httpHealthCheck}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'httpHealthCheck'],
                pathParams: ['httpHealthCheck', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.httpHealthChecks.get
         *
         * @desc Returns the specified HttpHealthCheck resource. Get a list of available HTTP health checks by making a list() request.
         *
         * @alias compute.httpHealthChecks.get
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.httpHealthCheck Name of the HttpHealthCheck resource to return.
         * @param {string} params.project Project ID for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/httpHealthChecks/{httpHealthCheck}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'httpHealthCheck'],
                pathParams: ['httpHealthCheck', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.httpHealthChecks.insert
         *
         * @desc Creates a HttpHealthCheck resource in the specified project using the data included in the request.
         *
         * @alias compute.httpHealthChecks.insert
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).HttpHealthCheck} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/httpHealthChecks',
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
         * compute.httpHealthChecks.list
         *
         * @desc Retrieves the list of HttpHealthCheck resources available to the specified project.
         *
         * @alias compute.httpHealthChecks.list
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/httpHealthChecks',
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
         * compute.httpHealthChecks.patch
         *
         * @desc Updates a HttpHealthCheck resource in the specified project using the data included in the request. This method supports patch semantics.
         *
         * @alias compute.httpHealthChecks.patch
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.httpHealthCheck Name of the HttpHealthCheck resource to patch.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).HttpHealthCheck} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/httpHealthChecks/{httpHealthCheck}',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['project', 'httpHealthCheck'],
                pathParams: ['httpHealthCheck', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.httpHealthChecks.testIamPermissions
         *
         * @desc Returns permissions that a caller has on the specified resource.
         *
         * @alias compute.httpHealthChecks.testIamPermissions
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {compute(alpha).TestPermissionsRequest} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/httpHealthChecks/{resource}/testIamPermissions',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'resource'],
                pathParams: ['project', 'resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.httpHealthChecks.update
         *
         * @desc Updates a HttpHealthCheck resource in the specified project using the data included in the request.
         *
         * @alias compute.httpHealthChecks.update
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.httpHealthCheck Name of the HttpHealthCheck resource to update.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).HttpHealthCheck} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/httpHealthChecks/{httpHealthCheck}',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['project', 'httpHealthCheck'],
                pathParams: ['httpHealthCheck', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.httpsHealthChecks = {
        /**
         * compute.httpsHealthChecks.delete
         *
         * @desc Deletes the specified HttpsHealthCheck resource.
         *
         * @alias compute.httpsHealthChecks.delete
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.httpsHealthCheck Name of the HttpsHealthCheck resource to delete.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/httpsHealthChecks/{httpsHealthCheck}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'httpsHealthCheck'],
                pathParams: ['httpsHealthCheck', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.httpsHealthChecks.get
         *
         * @desc Returns the specified HttpsHealthCheck resource. Get a list of available HTTPS health checks by making a list() request.
         *
         * @alias compute.httpsHealthChecks.get
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.httpsHealthCheck Name of the HttpsHealthCheck resource to return.
         * @param {string} params.project Project ID for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/httpsHealthChecks/{httpsHealthCheck}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'httpsHealthCheck'],
                pathParams: ['httpsHealthCheck', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.httpsHealthChecks.insert
         *
         * @desc Creates a HttpsHealthCheck resource in the specified project using the data included in the request.
         *
         * @alias compute.httpsHealthChecks.insert
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).HttpsHealthCheck} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/httpsHealthChecks',
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
         * compute.httpsHealthChecks.list
         *
         * @desc Retrieves the list of HttpsHealthCheck resources available to the specified project.
         *
         * @alias compute.httpsHealthChecks.list
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/httpsHealthChecks',
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
         * compute.httpsHealthChecks.patch
         *
         * @desc Updates a HttpsHealthCheck resource in the specified project using the data included in the request. This method supports patch semantics.
         *
         * @alias compute.httpsHealthChecks.patch
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.httpsHealthCheck Name of the HttpsHealthCheck resource to patch.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).HttpsHealthCheck} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/httpsHealthChecks/{httpsHealthCheck}',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['project', 'httpsHealthCheck'],
                pathParams: ['httpsHealthCheck', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.httpsHealthChecks.testIamPermissions
         *
         * @desc Returns permissions that a caller has on the specified resource.
         *
         * @alias compute.httpsHealthChecks.testIamPermissions
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {compute(alpha).TestPermissionsRequest} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/httpsHealthChecks/{resource}/testIamPermissions',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'resource'],
                pathParams: ['project', 'resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.httpsHealthChecks.update
         *
         * @desc Updates a HttpsHealthCheck resource in the specified project using the data included in the request.
         *
         * @alias compute.httpsHealthChecks.update
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.httpsHealthCheck Name of the HttpsHealthCheck resource to update.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).HttpsHealthCheck} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/httpsHealthChecks/{httpsHealthCheck}',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['project', 'httpsHealthCheck'],
                pathParams: ['httpsHealthCheck', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.images = {
        /**
         * compute.images.delete
         *
         * @desc Deletes the specified image.
         *
         * @alias compute.images.delete
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.image Name of the image resource to delete.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/images/{image}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'image'],
                pathParams: ['image', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.images.deprecate
         *
         * @desc Sets the deprecation status of an image.  If an empty request body is given, clears the deprecation status instead.
         *
         * @alias compute.images.deprecate
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.image Image name.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).DeprecationStatus} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        deprecate: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/images/{image}/deprecate',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'image'],
                pathParams: ['image', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.images.get
         *
         * @desc Returns the specified image. Get a list of available images by making a list() request.
         *
         * @alias compute.images.get
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.image Name of the image resource to return.
         * @param {string} params.project Project ID for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/images/{image}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'image'],
                pathParams: ['image', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.images.getFromFamily
         *
         * @desc Returns the latest image that is part of an image family and is not deprecated.
         *
         * @alias compute.images.getFromFamily
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.family Name of the image family to search for.
         * @param {string} params.project Project ID for this request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getFromFamily: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/images/family/{family}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'family'],
                pathParams: ['family', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.images.getIamPolicy
         *
         * @desc Gets the access control policy for a resource. May be empty if no such policy or resource exists.
         *
         * @alias compute.images.getIamPolicy
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.resource_ Name of the resource for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/images/{resource}/getIamPolicy',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'resource'],
                pathParams: ['project', 'resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.images.insert
         *
         * @desc Creates an image in the specified project using the data included in the request.
         *
         * @alias compute.images.insert
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.forceCreate Force image creation if true.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).Image} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/images',
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
         * compute.images.list
         *
         * @desc Retrieves the list of private images available to the specified project. Private images are images you create that belong to your project. This method does not get any images that belong to other projects, including publicly-available images, like Debian 8. If you want to get a list of publicly-available images, use this method to make a request to the respective image project, such as debian-cloud or windows-cloud.
         *
         * @alias compute.images.list
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/images',
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
         * compute.images.setIamPolicy
         *
         * @desc Sets the access control policy on the specified resource. Replaces any existing policy.
         *
         * @alias compute.images.setIamPolicy
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {compute(alpha).Policy} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/images/{resource}/setIamPolicy',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'resource'],
                pathParams: ['project', 'resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.images.setLabels
         *
         * @desc Sets the labels on an image. To learn more about labels, read the Labeling or Tagging Resources documentation.
         *
         * @alias compute.images.setLabels
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {compute(alpha).GlobalSetLabelsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setLabels: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/images/{resource}/setLabels',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'resource'],
                pathParams: ['project', 'resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.images.testIamPermissions
         *
         * @desc Returns permissions that a caller has on the specified resource.
         *
         * @alias compute.images.testIamPermissions
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {compute(alpha).TestPermissionsRequest} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/images/{resource}/testIamPermissions',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'resource'],
                pathParams: ['project', 'resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.instanceGroupManagers = {
        /**
         * compute.instanceGroupManagers.abandonInstances
         *
         * @desc Schedules a group action to remove the specified instances from the managed instance group. Abandoning an instance does not delete the instance, but it does remove the instance from any target pools that are applied by the managed instance group. This method reduces the targetSize of the managed instance group by the number of instances that you abandon. This operation is marked as DONE when the action is scheduled even if the instances have not yet been removed from the group. You must separately verify the status of the abandoning action with the listmanagedinstances method.  You can specify a maximum of 1000 instances with this method per request.
         *
         * @alias compute.instanceGroupManagers.abandonInstances
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instanceGroupManager The name of the managed instance group.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.zone The name of the zone where the managed instance group is located.
         * @param {compute(alpha).InstanceGroupManagersAbandonInstancesRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        abandonInstances: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/abandonInstances',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'instanceGroupManager'],
                pathParams: ['instanceGroupManager', 'project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.instanceGroupManagers.aggregatedList
         *
         * @desc Retrieves the list of managed instance groups and groups them by zone.
         *
         * @alias compute.instanceGroupManagers.aggregatedList
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        aggregatedList: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/aggregated/instanceGroupManagers',
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
         * compute.instanceGroupManagers.delete
         *
         * @desc Deletes the specified managed instance group and all of the instances in that group. Note that the instance group must not belong to a backend service. Read  Deleting an instance group for more information.
         *
         * @alias compute.instanceGroupManagers.delete
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instanceGroupManager The name of the managed instance group to delete.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.zone The name of the zone where the managed instance group is located.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'instanceGroupManager'],
                pathParams: ['instanceGroupManager', 'project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.instanceGroupManagers.deleteInstances
         *
         * @desc Schedules a group action to delete the specified instances in the managed instance group. The instances are also removed from any target pools of which they were a member. This method reduces the targetSize of the managed instance group by the number of instances that you delete. This operation is marked as DONE when the action is scheduled even if the instances are still being deleted. You must separately verify the status of the deleting action with the listmanagedinstances method.  You can specify a maximum of 1000 instances with this method per request.
         *
         * @alias compute.instanceGroupManagers.deleteInstances
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instanceGroupManager The name of the managed instance group.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.zone The name of the zone where the managed instance group is located.
         * @param {compute(alpha).InstanceGroupManagersDeleteInstancesRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        deleteInstances: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/deleteInstances',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'instanceGroupManager'],
                pathParams: ['instanceGroupManager', 'project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.instanceGroupManagers.get
         *
         * @desc Returns all of the details about the specified managed instance group. Get a list of available managed instance groups by making a list() request.
         *
         * @alias compute.instanceGroupManagers.get
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instanceGroupManager The name of the managed instance group.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.zone The name of the zone where the managed instance group is located.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'instanceGroupManager'],
                pathParams: ['instanceGroupManager', 'project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.instanceGroupManagers.insert
         *
         * @desc Creates a managed instance group using the information that you specify in the request. After the group is created, it schedules an action to create instances in the group using the specified instance template. This operation is marked as DONE when the group is created even if the instances in the group have not yet been created. You must separately verify the status of the individual instances with the listmanagedinstances method.  A managed instance group can have up to 1000 VM instances per group.
         *
         * @alias compute.instanceGroupManagers.insert
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.zone The name of the zone where you want to create the managed instance group.
         * @param {compute(alpha).InstanceGroupManager} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/instanceGroupManagers',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone'],
                pathParams: ['project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.instanceGroupManagers.list
         *
         * @desc Retrieves a list of managed instance groups that are contained within the specified project and zone.
         *
         * @alias compute.instanceGroupManagers.list
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.zone The name of the zone where the managed instance group is located.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/instanceGroupManagers',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'zone'],
                pathParams: ['project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.instanceGroupManagers.listManagedInstances
         *
         * @desc Lists all of the instances in the managed instance group. Each instance in the list has a currentAction, which indicates the action that the managed instance group is performing on the instance. For example, if the group is still creating an instance, the currentAction is CREATING. If a previous action failed, the list displays the errors for that failed action.
         *
         * @alias compute.instanceGroupManagers.listManagedInstances
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter
         * @param {string} params.instanceGroupManager The name of the managed instance group.
         * @param {integer=} params.maxResults
         * @param {string=} params.order_by
         * @param {string=} params.pageToken
         * @param {string} params.project Project ID for this request.
         * @param {string} params.zone The name of the zone where the managed instance group is located.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        listManagedInstances: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/listManagedInstances',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'instanceGroupManager'],
                pathParams: ['instanceGroupManager', 'project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.instanceGroupManagers.patch
         *
         * @desc Updates a managed instance group using the information that you specify in the request. This operation is marked as DONE when the group is patched even if the instances in the group are still in the process of being patched. You must separately verify the status of the individual instances with the listManagedInstances method. This method supports patch semantics.
         *
         * @alias compute.instanceGroupManagers.patch
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instanceGroupManager The name of the instance group manager.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.zone The name of the zone where you want to create the managed instance group.
         * @param {compute(alpha).InstanceGroupManager} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'instanceGroupManager'],
                pathParams: ['instanceGroupManager', 'project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.instanceGroupManagers.recreateInstances
         *
         * @desc Schedules a group action to recreate the specified instances in the managed instance group. The instances are deleted and recreated using the current instance template for the managed instance group. This operation is marked as DONE when the action is scheduled even if the instances have not yet been recreated. You must separately verify the status of the recreating action with the listmanagedinstances method.  You can specify a maximum of 1000 instances with this method per request.
         *
         * @alias compute.instanceGroupManagers.recreateInstances
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instanceGroupManager The name of the managed instance group.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.zone The name of the zone where the managed instance group is located.
         * @param {compute(alpha).InstanceGroupManagersRecreateInstancesRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        recreateInstances: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/recreateInstances',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'instanceGroupManager'],
                pathParams: ['instanceGroupManager', 'project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.instanceGroupManagers.resize
         *
         * @desc Resizes the managed instance group. If you increase the size, the group creates new instances using the current instance template. If you decrease the size, the group deletes instances. The resize operation is marked DONE when the resize actions are scheduled even if the group has not yet added or deleted any instances. You must separately verify the status of the creating or deleting actions with the listmanagedinstances method.
         *
         * @alias compute.instanceGroupManagers.resize
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instanceGroupManager The name of the managed instance group.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {integer} params.size The number of running instances that the managed instance group should maintain at any given time. The group automatically adds or removes instances to maintain the number of instances specified by this parameter.
         * @param {string} params.zone The name of the zone where the managed instance group is located.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        resize: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/resize',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'instanceGroupManager', 'size'],
                pathParams: ['instanceGroupManager', 'project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.instanceGroupManagers.resizeAdvanced
         *
         * @desc Resizes the managed instance group with advanced configuration options like disabling creation retries. This is an extended version of the resize method.  If you increase the size of the instance group, the group creates new instances using the current instance template. If you decrease the size, the group deletes instances. The resize operation is marked DONE when the resize actions are scheduled even if the group has not yet added or deleted any instances. You must separately verify the status of the creating, creatingWithoutRetries, or deleting actions with the get or listmanagedinstances method.
         *
         * @alias compute.instanceGroupManagers.resizeAdvanced
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instanceGroupManager The name of the managed instance group.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.zone The name of the zone where the managed instance group is located.
         * @param {compute(alpha).InstanceGroupManagersResizeAdvancedRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        resizeAdvanced: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/resizeAdvanced',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'instanceGroupManager'],
                pathParams: ['instanceGroupManager', 'project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.instanceGroupManagers.setAutoHealingPolicies
         *
         * @desc Modifies the autohealing policies.
         *
         * @alias compute.instanceGroupManagers.setAutoHealingPolicies
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instanceGroupManager The name of the instance group manager.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.zone The name of the zone where the managed instance group is located.
         * @param {compute(alpha).InstanceGroupManagersSetAutoHealingRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setAutoHealingPolicies: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/setAutoHealingPolicies',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'instanceGroupManager'],
                pathParams: ['instanceGroupManager', 'project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.instanceGroupManagers.setInstanceTemplate
         *
         * @desc Specifies the instance template to use when creating new instances in this group. The templates for existing instances in the group do not change unless you recreate them.
         *
         * @alias compute.instanceGroupManagers.setInstanceTemplate
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instanceGroupManager The name of the managed instance group.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.zone The name of the zone where the managed instance group is located.
         * @param {compute(alpha).InstanceGroupManagersSetInstanceTemplateRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setInstanceTemplate: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/setInstanceTemplate',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'instanceGroupManager'],
                pathParams: ['instanceGroupManager', 'project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.instanceGroupManagers.setTargetPools
         *
         * @desc Modifies the target pools to which all instances in this managed instance group are assigned. The target pools automatically apply to all of the instances in the managed instance group. This operation is marked DONE when you make the request even if the instances have not yet been added to their target pools. The change might take some time to apply to all of the instances in the group depending on the size of the group.
         *
         * @alias compute.instanceGroupManagers.setTargetPools
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instanceGroupManager The name of the managed instance group.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.zone The name of the zone where the managed instance group is located.
         * @param {compute(alpha).InstanceGroupManagersSetTargetPoolsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setTargetPools: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/setTargetPools',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'instanceGroupManager'],
                pathParams: ['instanceGroupManager', 'project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.instanceGroupManagers.testIamPermissions
         *
         * @desc Returns permissions that a caller has on the specified resource.
         *
         * @alias compute.instanceGroupManagers.testIamPermissions
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {string} params.zone The name of the zone for this request.
         * @param {compute(alpha).TestPermissionsRequest} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/instanceGroupManagers/{resource}/testIamPermissions',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'resource'],
                pathParams: ['project', 'resource', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.instanceGroupManagers.update
         *
         * @desc Updates a managed instance group using the information that you specify in the request. This operation is marked as DONE when the group is updated even if the instances in the group have not yet been updated. You must separately verify the status of the individual instances with the listManagedInstances method.
         *
         * @alias compute.instanceGroupManagers.update
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instanceGroupManager The name of the instance group manager.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.zone The name of the zone where you want to create the managed instance group.
         * @param {compute(alpha).InstanceGroupManager} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'instanceGroupManager'],
                pathParams: ['instanceGroupManager', 'project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.instanceGroups = {
        /**
         * compute.instanceGroups.addInstances
         *
         * @desc Adds a list of instances to the specified instance group. All of the instances in the instance group must be in the same network/subnetwork. Read  Adding instances for more information.
         *
         * @alias compute.instanceGroups.addInstances
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instanceGroup The name of the instance group where you are adding instances.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.zone The name of the zone where the instance group is located.
         * @param {compute(alpha).InstanceGroupsAddInstancesRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        addInstances: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/instanceGroups/{instanceGroup}/addInstances',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'instanceGroup'],
                pathParams: ['instanceGroup', 'project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.instanceGroups.aggregatedList
         *
         * @desc Retrieves the list of instance groups and sorts them by zone.
         *
         * @alias compute.instanceGroups.aggregatedList
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        aggregatedList: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/aggregated/instanceGroups',
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
         * compute.instanceGroups.delete
         *
         * @desc Deletes the specified instance group. The instances in the group are not deleted. Note that instance group must not belong to a backend service. Read  Deleting an instance group for more information.
         *
         * @alias compute.instanceGroups.delete
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instanceGroup The name of the instance group to delete.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.zone The name of the zone where the instance group is located.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/instanceGroups/{instanceGroup}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'instanceGroup'],
                pathParams: ['instanceGroup', 'project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.instanceGroups.get
         *
         * @desc Returns the specified instance group. Get a list of available instance groups by making a list() request.
         *
         * @alias compute.instanceGroups.get
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instanceGroup The name of the instance group.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.zone The name of the zone where the instance group is located.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/instanceGroups/{instanceGroup}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'instanceGroup'],
                pathParams: ['instanceGroup', 'project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.instanceGroups.insert
         *
         * @desc Creates an instance group in the specified project using the parameters that are included in the request.
         *
         * @alias compute.instanceGroups.insert
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.zone The name of the zone where you want to create the instance group.
         * @param {compute(alpha).InstanceGroup} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/instanceGroups',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone'],
                pathParams: ['project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.instanceGroups.list
         *
         * @desc Retrieves the list of instance groups that are located in the specified project and zone.
         *
         * @alias compute.instanceGroups.list
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.zone The name of the zone where the instance group is located.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/instanceGroups',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'zone'],
                pathParams: ['project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.instanceGroups.listInstances
         *
         * @desc Lists the instances in the specified instance group.
         *
         * @alias compute.instanceGroups.listInstances
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {string} params.instanceGroup The name of the instance group from which you want to generate a list of included instances.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.zone The name of the zone where the instance group is located.
         * @param {compute(alpha).InstanceGroupsListInstancesRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        listInstances: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/instanceGroups/{instanceGroup}/listInstances',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'instanceGroup'],
                pathParams: ['instanceGroup', 'project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.instanceGroups.removeInstances
         *
         * @desc Removes one or more instances from the specified instance group, but does not delete those instances.
         *
         * @alias compute.instanceGroups.removeInstances
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instanceGroup The name of the instance group where the specified instances will be removed.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.zone The name of the zone where the instance group is located.
         * @param {compute(alpha).InstanceGroupsRemoveInstancesRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        removeInstances: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/instanceGroups/{instanceGroup}/removeInstances',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'instanceGroup'],
                pathParams: ['instanceGroup', 'project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.instanceGroups.setNamedPorts
         *
         * @desc Sets the named ports for the specified instance group.
         *
         * @alias compute.instanceGroups.setNamedPorts
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instanceGroup The name of the instance group where the named ports are updated.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.zone The name of the zone where the instance group is located.
         * @param {compute(alpha).InstanceGroupsSetNamedPortsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setNamedPorts: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/instanceGroups/{instanceGroup}/setNamedPorts',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'instanceGroup'],
                pathParams: ['instanceGroup', 'project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.instanceGroups.testIamPermissions
         *
         * @desc Returns permissions that a caller has on the specified resource.
         *
         * @alias compute.instanceGroups.testIamPermissions
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {string} params.zone The name of the zone for this request.
         * @param {compute(alpha).TestPermissionsRequest} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/instanceGroups/{resource}/testIamPermissions',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'resource'],
                pathParams: ['project', 'resource', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.instanceTemplates = {
        /**
         * compute.instanceTemplates.delete
         *
         * @desc Deletes the specified instance template. If you delete an instance template that is being referenced from another instance group, the instance group will not be able to create or recreate virtual machine instances. Deleting an instance template is permanent and cannot be undone.
         *
         * @alias compute.instanceTemplates.delete
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instanceTemplate The name of the instance template to delete.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/instanceTemplates/{instanceTemplate}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'instanceTemplate'],
                pathParams: ['instanceTemplate', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.instanceTemplates.get
         *
         * @desc Returns the specified instance template. Get a list of available instance templates by making a list() request.
         *
         * @alias compute.instanceTemplates.get
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instanceTemplate The name of the instance template.
         * @param {string} params.project Project ID for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/instanceTemplates/{instanceTemplate}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'instanceTemplate'],
                pathParams: ['instanceTemplate', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.instanceTemplates.insert
         *
         * @desc Creates an instance template in the specified project using the data that is included in the request. If you are creating a new template to update an existing instance group, your new instance template must use the same network or, if applicable, the same subnetwork as the original template.
         *
         * @alias compute.instanceTemplates.insert
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).InstanceTemplate} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/instanceTemplates',
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
         * compute.instanceTemplates.list
         *
         * @desc Retrieves a list of instance templates that are contained within the specified project and zone.
         *
         * @alias compute.instanceTemplates.list
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/instanceTemplates',
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
         * compute.instanceTemplates.testIamPermissions
         *
         * @desc Returns permissions that a caller has on the specified resource.
         *
         * @alias compute.instanceTemplates.testIamPermissions
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {compute(alpha).TestPermissionsRequest} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/instanceTemplates/{resource}/testIamPermissions',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'resource'],
                pathParams: ['project', 'resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.instances = {
        /**
         * compute.instances.addAccessConfig
         *
         * @desc Adds an access config to an instance's network interface.
         *
         * @alias compute.instances.addAccessConfig
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance The instance name for this request.
         * @param {string} params.networkInterface The name of the network interface to add to this instance.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.zone The name of the zone for this request.
         * @param {compute(alpha).AccessConfig} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        addAccessConfig: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/instances/{instance}/addAccessConfig',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'instance', 'networkInterface'],
                pathParams: ['instance', 'project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.instances.aggregatedList
         *
         * @desc Retrieves aggregated list of instances.
         *
         * @alias compute.instances.aggregatedList
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        aggregatedList: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/aggregated/instances',
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
         * compute.instances.attachDisk
         *
         * @desc Attaches a Disk resource to an instance.
         *
         * @alias compute.instances.attachDisk
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.forceAttach Whether to force attach the disk even if it's currently attached to another instance. This is only available for regional disks.
         * @param {string} params.instance The instance name for this request.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.zone The name of the zone for this request.
         * @param {compute(alpha).AttachedDisk} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        attachDisk: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/instances/{instance}/attachDisk',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'instance'],
                pathParams: ['instance', 'project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.instances.delete
         *
         * @desc Deletes the specified Instance resource. For more information, see Stopping or Deleting an Instance.
         *
         * @alias compute.instances.delete
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Name of the instance resource to delete.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.zone The name of the zone for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/instances/{instance}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'instance'],
                pathParams: ['instance', 'project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.instances.deleteAccessConfig
         *
         * @desc Deletes an access config from an instance's network interface.
         *
         * @alias compute.instances.deleteAccessConfig
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.accessConfig The name of the access config to delete.
         * @param {string} params.instance The instance name for this request.
         * @param {string} params.networkInterface The name of the network interface.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.zone The name of the zone for this request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        deleteAccessConfig: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/instances/{instance}/deleteAccessConfig',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'instance', 'accessConfig', 'networkInterface'],
                pathParams: ['instance', 'project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.instances.detachDisk
         *
         * @desc Detaches a disk from an instance.
         *
         * @alias compute.instances.detachDisk
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.deviceName Disk device name to detach.
         * @param {string} params.instance Instance name.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.zone The name of the zone for this request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        detachDisk: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/instances/{instance}/detachDisk',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'instance', 'deviceName'],
                pathParams: ['instance', 'project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.instances.get
         *
         * @desc Returns the specified Instance resource. Get a list of available instances by making a list() request.
         *
         * @alias compute.instances.get
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Name of the instance resource to return.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.zone The name of the zone for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/instances/{instance}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'instance'],
                pathParams: ['instance', 'project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.instances.getIamPolicy
         *
         * @desc Gets the access control policy for a resource. May be empty if no such policy or resource exists.
         *
         * @alias compute.instances.getIamPolicy
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {string} params.zone The name of the zone for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/instances/{resource}/getIamPolicy',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'resource'],
                pathParams: ['project', 'resource', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.instances.getSerialPortOutput
         *
         * @desc Returns the specified instance's serial port output.
         *
         * @alias compute.instances.getSerialPortOutput
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Name of the instance scoping this request.
         * @param {integer=} params.port Specifies which COM or serial port to retrieve data from.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.start Returns output starting from a specific byte position. Use this to page through output when the output is too large to return in a single request. For the initial request, leave this field unspecified. For subsequent calls, this field should be set to the next value returned in the previous call.
         * @param {string} params.zone The name of the zone for this request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getSerialPortOutput: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/instances/{instance}/serialPort',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'instance'],
                pathParams: ['instance', 'project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.instances.insert
         *
         * @desc Creates an instance resource in the specified project using the data included in the request.
         *
         * @alias compute.instances.insert
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.zone The name of the zone for this request.
         * @param {compute(alpha).Instance} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/instances',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone'],
                pathParams: ['project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.instances.list
         *
         * @desc Retrieves the list of instances contained within the specified zone.
         *
         * @alias compute.instances.list
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.zone The name of the zone for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/instances',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'zone'],
                pathParams: ['project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.instances.listReferrers
         *
         * @desc Retrieves the list of referrers to instances contained within the specified zone.
         *
         * @alias compute.instances.listReferrers
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {string} params.instance Name of the target instance scoping this request, or '-' if the request should span over all instances in the container.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.zone The name of the zone for this request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        listReferrers: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/instances/{instance}/referrers',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'instance'],
                pathParams: ['instance', 'project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.instances.reset
         *
         * @desc Performs a reset on the instance. For more information, see Resetting an instance.
         *
         * @alias compute.instances.reset
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Name of the instance scoping this request.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.zone The name of the zone for this request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        reset: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/instances/{instance}/reset',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'instance'],
                pathParams: ['instance', 'project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.instances.setDiskAutoDelete
         *
         * @desc Sets the auto-delete flag for a disk attached to an instance.
         *
         * @alias compute.instances.setDiskAutoDelete
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {boolean} params.autoDelete Whether to auto-delete the disk when the instance is deleted.
         * @param {string} params.deviceName The device name of the disk to modify.
         * @param {string} params.instance The instance name.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.zone The name of the zone for this request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setDiskAutoDelete: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/instances/{instance}/setDiskAutoDelete',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'instance', 'autoDelete', 'deviceName'],
                pathParams: ['instance', 'project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.instances.setIamPolicy
         *
         * @desc Sets the access control policy on the specified resource. Replaces any existing policy.
         *
         * @alias compute.instances.setIamPolicy
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {string} params.zone The name of the zone for this request.
         * @param {compute(alpha).Policy} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/instances/{resource}/setIamPolicy',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'resource'],
                pathParams: ['project', 'resource', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.instances.setLabels
         *
         * @desc Sets labels on an instance. To learn more about labels, read the Labeling or Tagging Resources documentation.
         *
         * @alias compute.instances.setLabels
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Name of the instance scoping this request.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.zone The name of the zone for this request.
         * @param {compute(alpha).InstancesSetLabelsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setLabels: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/instances/{instance}/setLabels',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'instance'],
                pathParams: ['instance', 'project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.instances.setMachineResources
         *
         * @desc Changes the number and/or type of accelerator for a stopped instance to the values specified in the request.
         *
         * @alias compute.instances.setMachineResources
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Name of the instance scoping this request.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.zone The name of the zone for this request.
         * @param {compute(alpha).InstancesSetMachineResourcesRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setMachineResources: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/instances/{instance}/setMachineResources',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'instance'],
                pathParams: ['instance', 'project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.instances.setMachineType
         *
         * @desc Changes the machine type for a stopped instance to the machine type specified in the request.
         *
         * @alias compute.instances.setMachineType
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Name of the instance scoping this request.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.zone The name of the zone for this request.
         * @param {compute(alpha).InstancesSetMachineTypeRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setMachineType: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/instances/{instance}/setMachineType',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'instance'],
                pathParams: ['instance', 'project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.instances.setMetadata
         *
         * @desc Sets metadata for the specified instance to the data included in the request.
         *
         * @alias compute.instances.setMetadata
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Name of the instance scoping this request.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.zone The name of the zone for this request.
         * @param {compute(alpha).Metadata} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setMetadata: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/instances/{instance}/setMetadata',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'instance'],
                pathParams: ['instance', 'project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.instances.setMinCpuPlatform
         *
         * @desc Changes the minimum cpu/platform that this instance should be started as. This is called on a stopped instance.
         *
         * @alias compute.instances.setMinCpuPlatform
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Name of the instance scoping this request.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.zone The name of the zone for this request.
         * @param {compute(alpha).InstancesSetMinCpuPlatformRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setMinCpuPlatform: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/instances/{instance}/setMinCpuPlatform',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'instance'],
                pathParams: ['instance', 'project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.instances.setScheduling
         *
         * @desc Sets an instance's scheduling options.
         *
         * @alias compute.instances.setScheduling
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Instance name.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.zone The name of the zone for this request.
         * @param {compute(alpha).Scheduling} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setScheduling: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/instances/{instance}/setScheduling',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'instance'],
                pathParams: ['instance', 'project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.instances.setServiceAccount
         *
         * @desc Sets the service account on the instance. For more information, read Changing the service account and access scopes for an instance.
         *
         * @alias compute.instances.setServiceAccount
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Name of the instance resource to start.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.zone The name of the zone for this request.
         * @param {compute(alpha).InstancesSetServiceAccountRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setServiceAccount: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/instances/{instance}/setServiceAccount',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'instance'],
                pathParams: ['instance', 'project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.instances.setTags
         *
         * @desc Sets tags for the specified instance to the data included in the request.
         *
         * @alias compute.instances.setTags
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Name of the instance scoping this request.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.zone The name of the zone for this request.
         * @param {compute(alpha).Tags} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setTags: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/instances/{instance}/setTags',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'instance'],
                pathParams: ['instance', 'project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.instances.simulateMaintenanceEvent
         *
         * @desc Simulates a maintenance event on the instance.
         *
         * @alias compute.instances.simulateMaintenanceEvent
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Name of the instance scoping this request.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.zone The name of the zone for this request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        simulateMaintenanceEvent: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/instances/{instance}/simulateMaintenanceEvent',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'instance'],
                pathParams: ['instance', 'project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.instances.start
         *
         * @desc Starts an instance that was stopped using the using the instances().stop method. For more information, see Restart an instance.
         *
         * @alias compute.instances.start
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Name of the instance resource to start.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.zone The name of the zone for this request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        start: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/instances/{instance}/start',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'instance'],
                pathParams: ['instance', 'project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.instances.startWithEncryptionKey
         *
         * @desc Starts an instance that was stopped using the using the instances().stop method. For more information, see Restart an instance.
         *
         * @alias compute.instances.startWithEncryptionKey
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Name of the instance resource to start.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.zone The name of the zone for this request.
         * @param {compute(alpha).InstancesStartWithEncryptionKeyRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        startWithEncryptionKey: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/instances/{instance}/startWithEncryptionKey',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'instance'],
                pathParams: ['instance', 'project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.instances.stop
         *
         * @desc Stops a running instance, shutting it down cleanly, and allows you to restart the instance at a later time. Stopped instances do not incur per-minute, virtual machine usage charges while they are stopped, but any resources that the virtual machine is using, such as persistent disks and static IP addresses, will continue to be charged until they are deleted. For more information, see Stopping an instance.
         *
         * @alias compute.instances.stop
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.discardLocalSsd If true, discard the contents of any attached localSSD partitions. Default value is false (== preserve localSSD data).
         * @param {string} params.instance Name of the instance resource to stop.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.zone The name of the zone for this request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        stop: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/instances/{instance}/stop',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'instance'],
                pathParams: ['instance', 'project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.instances.suspend
         *
         * @desc This method suspends a running instance, saving its state to persistent storage, and allows you to resume the instance at a later time. Suspended instances incur reduced per-minute, virtual machine usage charges while they are suspended. Any resources the virtual machine is using, such as persistent disks and static IP addresses, will continue to be charged until they are deleted.
         *
         * @alias compute.instances.suspend
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.discardLocalSsd If true, discard the contents of any attached localSSD partitions. Default value is false (== preserve localSSD data).
         * @param {string} params.instance Name of the instance resource to suspend.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.zone The name of the zone for this request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        suspend: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/instances/{instance}/suspend',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'instance'],
                pathParams: ['instance', 'project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.instances.testIamPermissions
         *
         * @desc Returns permissions that a caller has on the specified resource.
         *
         * @alias compute.instances.testIamPermissions
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {string} params.zone The name of the zone for this request.
         * @param {compute(alpha).TestPermissionsRequest} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/instances/{resource}/testIamPermissions',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'resource'],
                pathParams: ['project', 'resource', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.instances.updateAccessConfig
         *
         * @desc Updates the specified access config from an instance's network interface with the data included in the request.
         *
         * @alias compute.instances.updateAccessConfig
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance The instance name for this request.
         * @param {string} params.networkInterface The name of the network interface where the access config is attached.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.zone The name of the zone for this request.
         * @param {compute(alpha).AccessConfig} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        updateAccessConfig: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/instances/{instance}/updateAccessConfig',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'instance', 'networkInterface'],
                pathParams: ['instance', 'project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.interconnectAttachments = {
        /**
         * compute.interconnectAttachments.aggregatedList
         *
         * @desc Retrieves an aggregated list of interconnect attachments.
         *
         * @alias compute.interconnectAttachments.aggregatedList
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        aggregatedList: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/aggregated/interconnectAttachments',
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
         * compute.interconnectAttachments.delete
         *
         * @desc Deletes the specified interconnect attachment.
         *
         * @alias compute.interconnectAttachments.delete
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.interconnectAttachment Name of the interconnect attachment to delete.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/interconnectAttachments/{interconnectAttachment}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'interconnectAttachment'],
                pathParams: ['interconnectAttachment', 'project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.interconnectAttachments.get
         *
         * @desc Returns the specified interconnect attachment.
         *
         * @alias compute.interconnectAttachments.get
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.interconnectAttachment Name of the interconnect attachment to return.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/interconnectAttachments/{interconnectAttachment}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'interconnectAttachment'],
                pathParams: ['interconnectAttachment', 'project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.interconnectAttachments.getIamPolicy
         *
         * @desc Gets the access control policy for a resource. May be empty if no such policy or resource exists.
         *
         * @alias compute.interconnectAttachments.getIamPolicy
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region The name of the region for this request.
         * @param {string} params.resource_ Name of the resource for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/interconnectAttachments/{resource}/getIamPolicy',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'resource'],
                pathParams: ['project', 'region', 'resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.interconnectAttachments.insert
         *
         * @desc Creates an InterconnectAttachment in the specified project using the data included in the request.
         *
         * @alias compute.interconnectAttachments.insert
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).InterconnectAttachment} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/interconnectAttachments',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'region'],
                pathParams: ['project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.interconnectAttachments.list
         *
         * @desc Retrieves the list of interconnect attachments contained within the specified region.
         *
         * @alias compute.interconnectAttachments.list
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/interconnectAttachments',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'region'],
                pathParams: ['project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.interconnectAttachments.testIamPermissions
         *
         * @desc Returns permissions that a caller has on the specified resource.
         *
         * @alias compute.interconnectAttachments.testIamPermissions
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region The name of the region for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {compute(alpha).TestPermissionsRequest} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/interconnectAttachments/{resource}/testIamPermissions',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'resource'],
                pathParams: ['project', 'region', 'resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.interconnectLocations = {
        /**
         * compute.interconnectLocations.get
         *
         * @desc Returns the details for the specified interconnect location. Get a list of available interconnect locations by making a list() request.
         *
         * @alias compute.interconnectLocations.get
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.interconnectLocation Name of the interconnect location to return.
         * @param {string} params.project Project ID for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/interconnectLocations/{interconnectLocation}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'interconnectLocation'],
                pathParams: ['interconnectLocation', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.interconnectLocations.list
         *
         * @desc Retrieves the list of interconnect locations available to the specified project.
         *
         * @alias compute.interconnectLocations.list
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/interconnectLocations',
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
         * compute.interconnectLocations.testIamPermissions
         *
         * @desc Returns permissions that a caller has on the specified resource.
         *
         * @alias compute.interconnectLocations.testIamPermissions
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {compute(alpha).TestPermissionsRequest} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/interconnectLocations/{resource}/testIamPermissions',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'resource'],
                pathParams: ['project', 'resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.interconnects = {
        /**
         * compute.interconnects.delete
         *
         * @desc Deletes the specified interconnect.
         *
         * @alias compute.interconnects.delete
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.interconnect Name of the interconnect to delete.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/interconnects/{interconnect}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'interconnect'],
                pathParams: ['interconnect', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.interconnects.get
         *
         * @desc Returns the specified interconnect. Get a list of available interconnects by making a list() request.
         *
         * @alias compute.interconnects.get
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.interconnect Name of the interconnect to return.
         * @param {string} params.project Project ID for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/interconnects/{interconnect}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'interconnect'],
                pathParams: ['interconnect', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.interconnects.insert
         *
         * @desc Creates a Interconnect in the specified project using the data included in the request.
         *
         * @alias compute.interconnects.insert
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).Interconnect} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/interconnects',
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
         * compute.interconnects.list
         *
         * @desc Retrieves the list of interconnect available to the specified project.
         *
         * @alias compute.interconnects.list
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/interconnects',
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
         * compute.interconnects.patch
         *
         * @desc Updates the specified interconnect with the data included in the request using patch semantics.
         *
         * @alias compute.interconnects.patch
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.interconnect Name of the interconnect to update.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).Interconnect} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/interconnects/{interconnect}',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['project', 'interconnect'],
                pathParams: ['interconnect', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.interconnects.testIamPermissions
         *
         * @desc Returns permissions that a caller has on the specified resource.
         *
         * @alias compute.interconnects.testIamPermissions
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {compute(alpha).TestPermissionsRequest} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/interconnects/{resource}/testIamPermissions',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'resource'],
                pathParams: ['project', 'resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.licenses = {
        /**
         * compute.licenses.get
         *
         * @desc Returns the specified License resource. Get a list of available licenses by making a list() request.
         *
         * @alias compute.licenses.get
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.license Name of the License resource to return.
         * @param {string} params.project Project ID for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/licenses/{license}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'license'],
                pathParams: ['license', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.licenses.insert
         *
         * @desc Create a License resource in the specified project.
         *
         * @alias compute.licenses.insert
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).License} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/licenses',
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
         * compute.licenses.list
         *
         * @desc Retrieves the list of licenses available in the specified project. This method does not get any licenses that belong to other projects, including licenses attached to publicly-available images, like Debian 8. If you want to get a list of publicly-available licenses, use this method to make a request to the respective image project, such as debian-cloud or windows-cloud.
         *
         * @alias compute.licenses.list
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/licenses',
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
    self.machineTypes = {
        /**
         * compute.machineTypes.aggregatedList
         *
         * @desc Retrieves an aggregated list of machine types.
         *
         * @alias compute.machineTypes.aggregatedList
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        aggregatedList: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/aggregated/machineTypes',
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
         * compute.machineTypes.get
         *
         * @desc Returns the specified machine type. Get a list of available machine types by making a list() request.
         *
         * @alias compute.machineTypes.get
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.machineType Name of the machine type to return.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.zone The name of the zone for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/machineTypes/{machineType}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'machineType'],
                pathParams: ['machineType', 'project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.machineTypes.list
         *
         * @desc Retrieves a list of machine types available to the specified project.
         *
         * @alias compute.machineTypes.list
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.zone The name of the zone for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/machineTypes',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'zone'],
                pathParams: ['project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.networks = {
        /**
         * compute.networks.addPeering
         *
         * @desc Adds a peering to the specified network.
         *
         * @alias compute.networks.addPeering
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.network Name of the network resource to add peering to.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).NetworksAddPeeringRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        addPeering: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/networks/{network}/addPeering',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'network'],
                pathParams: ['network', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.networks.delete
         *
         * @desc Deletes the specified network.
         *
         * @alias compute.networks.delete
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.network Name of the network to delete.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/networks/{network}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'network'],
                pathParams: ['network', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.networks.get
         *
         * @desc Returns the specified network. Get a list of available networks by making a list() request.
         *
         * @alias compute.networks.get
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.network Name of the network to return.
         * @param {string} params.project Project ID for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/networks/{network}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'network'],
                pathParams: ['network', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.networks.insert
         *
         * @desc Creates a network in the specified project using the data included in the request.
         *
         * @alias compute.networks.insert
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).Network} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/networks',
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
         * compute.networks.list
         *
         * @desc Retrieves the list of networks available to the specified project.
         *
         * @alias compute.networks.list
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/networks',
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
         * compute.networks.removePeering
         *
         * @desc Removes a peering from the specified network.
         *
         * @alias compute.networks.removePeering
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.network Name of the network resource to remove peering from.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).NetworksRemovePeeringRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        removePeering: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/networks/{network}/removePeering',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'network'],
                pathParams: ['network', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.networks.switchToCustomMode
         *
         * @desc Switches the network mode from auto subnet mode to custom subnet mode.
         *
         * @alias compute.networks.switchToCustomMode
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.network Name of the network to be updated.
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        switchToCustomMode: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/networks/{network}/switchToCustomMode',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'network'],
                pathParams: ['network', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.networks.testIamPermissions
         *
         * @desc Returns permissions that a caller has on the specified resource.
         *
         * @alias compute.networks.testIamPermissions
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {compute(alpha).TestPermissionsRequest} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/networks/{resource}/testIamPermissions',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'resource'],
                pathParams: ['project', 'resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.projects = {
        /**
         * compute.projects.disableXpnHost
         *
         * @desc Disable this project as an XPN host project.
         *
         * @alias compute.projects.disableXpnHost
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        disableXpnHost: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/disableXpnHost',
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
         * compute.projects.disableXpnResource
         *
         * @desc Disable an XPN resource associated with this host project.
         *
         * @alias compute.projects.disableXpnResource
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).ProjectsDisableXpnResourceRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        disableXpnResource: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/disableXpnResource',
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
         * compute.projects.enableXpnHost
         *
         * @desc Enable this project as an XPN host project.
         *
         * @alias compute.projects.enableXpnHost
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        enableXpnHost: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/enableXpnHost',
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
         * compute.projects.enableXpnResource
         *
         * @desc Enable XPN resource (a.k.a service project or service folder in the future) for a host project, so that subnetworks in the host project can be used by instances in the service project or folder.
         *
         * @alias compute.projects.enableXpnResource
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).ProjectsEnableXpnResourceRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        enableXpnResource: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/enableXpnResource',
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
         * compute.projects.get
         *
         * @desc Returns the specified Project resource.
         *
         * @alias compute.projects.get
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}',
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
         * compute.projects.getXpnHost
         *
         * @desc Get the XPN host project that this project links to. May be empty if no link exists.
         *
         * @alias compute.projects.getXpnHost
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getXpnHost: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/getXpnHost',
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
         * compute.projects.getXpnResources
         *
         * @desc Get XPN resources associated with this host project.
         *
         * @alias compute.projects.getXpnResources
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter
         * @param {integer=} params.maxResults
         * @param {string=} params.order_by
         * @param {string=} params.pageToken
         * @param {string} params.project Project ID for this request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getXpnResources: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/getXpnResources',
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
         * compute.projects.listXpnHosts
         *
         * @desc List all XPN host projects visible to the user in an organization.
         *
         * @alias compute.projects.listXpnHosts
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter
         * @param {integer=} params.maxResults
         * @param {string=} params.order_by
         * @param {string=} params.pageToken
         * @param {string} params.project Project ID for this request.
         * @param {compute(alpha).ProjectsListXpnHostsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        listXpnHosts: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/listXpnHosts',
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
         * compute.projects.moveDisk
         *
         * @desc Moves a persistent disk from one zone to another.
         *
         * @alias compute.projects.moveDisk
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).DiskMoveRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        moveDisk: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/moveDisk',
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
         * compute.projects.moveInstance
         *
         * @desc Moves an instance and its attached persistent disks from one zone to another.
         *
         * @alias compute.projects.moveInstance
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).InstanceMoveRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        moveInstance: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/moveInstance',
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
         * compute.projects.setCommonInstanceMetadata
         *
         * @desc Sets metadata common to all instances within the specified project using the data included in the request.
         *
         * @alias compute.projects.setCommonInstanceMetadata
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).Metadata} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setCommonInstanceMetadata: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/setCommonInstanceMetadata',
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
         * compute.projects.setDefaultServiceAccount
         *
         * @desc Sets the default service account of the project. The default service account is used when a VM instance is created with the service account email address set to "default".
         *
         * @alias compute.projects.setDefaultServiceAccount
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).ProjectsSetDefaultServiceAccountRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setDefaultServiceAccount: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/setDefaultServiceAccount',
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
         * compute.projects.setUsageExportBucket
         *
         * @desc Enables the usage export feature and sets the usage export bucket where reports are stored. If you provide an empty request body using this method, the usage export feature will be disabled.
         *
         * @alias compute.projects.setUsageExportBucket
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).UsageExportLocation} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setUsageExportBucket: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/setUsageExportBucket',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project'],
                pathParams: ['project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.regionAutoscalers = {
        /**
         * compute.regionAutoscalers.delete
         *
         * @desc Deletes the specified autoscaler.
         *
         * @alias compute.regionAutoscalers.delete
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.autoscaler Name of the autoscaler to delete.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region scoping this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/autoscalers/{autoscaler}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'autoscaler'],
                pathParams: ['autoscaler', 'project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.regionAutoscalers.get
         *
         * @desc Returns the specified autoscaler.
         *
         * @alias compute.regionAutoscalers.get
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.autoscaler Name of the autoscaler to return.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region scoping this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/autoscalers/{autoscaler}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'autoscaler'],
                pathParams: ['autoscaler', 'project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.regionAutoscalers.insert
         *
         * @desc Creates an autoscaler in the specified project using the data included in the request.
         *
         * @alias compute.regionAutoscalers.insert
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region scoping this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).Autoscaler} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/autoscalers',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'region'],
                pathParams: ['project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.regionAutoscalers.list
         *
         * @desc Retrieves a list of autoscalers contained within the specified region.
         *
         * @alias compute.regionAutoscalers.list
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region scoping this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/autoscalers',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'region'],
                pathParams: ['project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.regionAutoscalers.patch
         *
         * @desc Updates an autoscaler in the specified project using the data included in the request. This method supports patch semantics.
         *
         * @alias compute.regionAutoscalers.patch
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.autoscaler Name of the autoscaler to patch.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region scoping this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).Autoscaler} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/autoscalers',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['project', 'region'],
                pathParams: ['project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.regionAutoscalers.testIamPermissions
         *
         * @desc Returns permissions that a caller has on the specified resource.
         *
         * @alias compute.regionAutoscalers.testIamPermissions
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region The name of the region for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {compute(alpha).TestPermissionsRequest} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/autoscalers/{resource}/testIamPermissions',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'resource'],
                pathParams: ['project', 'region', 'resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.regionAutoscalers.update
         *
         * @desc Updates an autoscaler in the specified project using the data included in the request.
         *
         * @alias compute.regionAutoscalers.update
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.autoscaler Name of the autoscaler to update.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region scoping this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).Autoscaler} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/autoscalers',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['project', 'region'],
                pathParams: ['project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.regionBackendServices = {
        /**
         * compute.regionBackendServices.delete
         *
         * @desc Deletes the specified regional BackendService resource.
         *
         * @alias compute.regionBackendServices.delete
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.backendService Name of the BackendService resource to delete.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region scoping this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/backendServices/{backendService}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'backendService'],
                pathParams: ['backendService', 'project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.regionBackendServices.get
         *
         * @desc Returns the specified regional BackendService resource.
         *
         * @alias compute.regionBackendServices.get
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.backendService Name of the BackendService resource to return.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region scoping this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/backendServices/{backendService}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'backendService'],
                pathParams: ['backendService', 'project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.regionBackendServices.getHealth
         *
         * @desc Gets the most recent health check results for this regional BackendService.
         *
         * @alias compute.regionBackendServices.getHealth
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.backendService Name of the BackendService resource to which the queried instance belongs.
         * @param {string} params.project
         * @param {string} params.region Name of the region scoping this request.
         * @param {compute(alpha).ResourceGroupReference} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getHealth: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/backendServices/{backendService}/getHealth',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'backendService'],
                pathParams: ['backendService', 'project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.regionBackendServices.insert
         *
         * @desc Creates a regional BackendService resource in the specified project using the data included in the request. There are several restrictions and guidelines to keep in mind when creating a regional backend service. Read  Restrictions and Guidelines for more information.
         *
         * @alias compute.regionBackendServices.insert
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region scoping this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).BackendService} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/backendServices',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'region'],
                pathParams: ['project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.regionBackendServices.list
         *
         * @desc Retrieves the list of regional BackendService resources available to the specified project in the given region.
         *
         * @alias compute.regionBackendServices.list
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region scoping this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/backendServices',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'region'],
                pathParams: ['project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.regionBackendServices.patch
         *
         * @desc Updates the specified regional BackendService resource with the data included in the request. There are several restrictions and guidelines to keep in mind when updating a backend service. Read  Restrictions and Guidelines for more information. This method supports patch semantics.
         *
         * @alias compute.regionBackendServices.patch
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.backendService Name of the BackendService resource to patch.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region scoping this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).BackendService} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/backendServices/{backendService}',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'backendService'],
                pathParams: ['backendService', 'project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.regionBackendServices.testIamPermissions
         *
         * @desc Returns permissions that a caller has on the specified resource.
         *
         * @alias compute.regionBackendServices.testIamPermissions
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region The name of the region for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {compute(alpha).TestPermissionsRequest} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/backendServices/{resource}/testIamPermissions',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'resource'],
                pathParams: ['project', 'region', 'resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.regionBackendServices.update
         *
         * @desc Updates the specified regional BackendService resource with the data included in the request. There are several restrictions and guidelines to keep in mind when updating a backend service. Read  Restrictions and Guidelines for more information.
         *
         * @alias compute.regionBackendServices.update
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.backendService Name of the BackendService resource to update.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region scoping this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).BackendService} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/backendServices/{backendService}',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'backendService'],
                pathParams: ['backendService', 'project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.regionCommitments = {
        /**
         * compute.regionCommitments.aggregatedList
         *
         * @desc Retrieves an aggregated list of commitments.
         *
         * @alias compute.regionCommitments.aggregatedList
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        aggregatedList: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/aggregated/commitments',
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
         * compute.regionCommitments.get
         *
         * @desc Returns the specified commitment resource. Get a list of available commitments by making a list() request.
         *
         * @alias compute.regionCommitments.get
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.commitment Name of the commitment to return.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/commitments/{commitment}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'commitment'],
                pathParams: ['commitment', 'project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.regionCommitments.insert
         *
         * @desc Creates an commitment in the specified project using the data included in the request.
         *
         * @alias compute.regionCommitments.insert
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).Commitment} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/commitments',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'region'],
                pathParams: ['project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.regionCommitments.list
         *
         * @desc Retrieves a list of commitments contained within the specified region.
         *
         * @alias compute.regionCommitments.list
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/commitments',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'region'],
                pathParams: ['project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.regionCommitments.testIamPermissions
         *
         * @desc Returns permissions that a caller has on the specified resource.
         *
         * @alias compute.regionCommitments.testIamPermissions
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region The name of the region for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {compute(alpha).TestPermissionsRequest} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/commitments/{resource}/testIamPermissions',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'resource'],
                pathParams: ['project', 'region', 'resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.regionDiskTypes = {
        /**
         * compute.regionDiskTypes.get
         *
         * @desc Returns the specified regional disk type. Get a list of available disk types by making a list() request.
         *
         * @alias compute.regionDiskTypes.get
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.diskType Name of the disk type to return.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region The name of the region for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/diskTypes/{diskType}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'diskType'],
                pathParams: ['diskType', 'project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.regionDiskTypes.list
         *
         * @desc Retrieves a list of regional disk types available to the specified project.
         *
         * @alias compute.regionDiskTypes.list
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region The name of the region for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/diskTypes',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'region'],
                pathParams: ['project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.regionDisks = {
        /**
         * compute.regionDisks.createSnapshot
         *
         * @desc Creates a snapshot of this regional disk.
         *
         * @alias compute.regionDisks.createSnapshot
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.disk Name of the regional persistent disk to snapshot.
         * @param {boolean=} params.guestFlush
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).Snapshot} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        createSnapshot: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/disks/{disk}/createSnapshot',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'disk'],
                pathParams: ['disk', 'project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.regionDisks.delete
         *
         * @desc Deletes the specified regional persistent disk. Deleting a regional disk removes all the replicas of its data permanently and is irreversible. However, deleting a disk does not delete any snapshots previously made from the disk. You must separately delete snapshots.
         *
         * @alias compute.regionDisks.delete
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.disk Name of the regional persistent disk to delete.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/disks/{disk}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'disk'],
                pathParams: ['disk', 'project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.regionDisks.get
         *
         * @desc Returns a specified regional persistent disk.
         *
         * @alias compute.regionDisks.get
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.disk Name of the regional persistent disk to return.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/disks/{disk}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'disk'],
                pathParams: ['disk', 'project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.regionDisks.insert
         *
         * @desc Creates a persistent regional disk in the specified project using the data included in the request.
         *
         * @alias compute.regionDisks.insert
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string=} params.sourceImage Optional. Source image to restore onto a disk.
         * @param {compute(alpha).Disk} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/disks',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'region'],
                pathParams: ['project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.regionDisks.list
         *
         * @desc Retrieves the list of persistent disks contained within the specified region.
         *
         * @alias compute.regionDisks.list
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/disks',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'region'],
                pathParams: ['project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.regionDisks.resize
         *
         * @desc Resizes the specified regional persistent disk.
         *
         * @alias compute.regionDisks.resize
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.disk Name of the regional persistent disk.
         * @param {string} params.project The project ID for this request.
         * @param {string} params.region Name of the region for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).RegionDisksResizeRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        resize: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/disks/{disk}/resize',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'disk'],
                pathParams: ['disk', 'project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.regionDisks.setLabels
         *
         * @desc Sets the labels on the target regional disk.
         *
         * @alias compute.regionDisks.setLabels
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region The region for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {compute(alpha).RegionSetLabelsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setLabels: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/disks/{resource}/setLabels',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'resource'],
                pathParams: ['project', 'region', 'resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.regionDisks.testIamPermissions
         *
         * @desc Returns permissions that a caller has on the specified resource.
         *
         * @alias compute.regionDisks.testIamPermissions
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region The name of the region for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {compute(alpha).TestPermissionsRequest} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/disks/{resource}/testIamPermissions',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'resource'],
                pathParams: ['project', 'region', 'resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.regionInstanceGroupManagers = {
        /**
         * compute.regionInstanceGroupManagers.abandonInstances
         *
         * @desc Schedules a group action to remove the specified instances from the managed instance group. Abandoning an instance does not delete the instance, but it does remove the instance from any target pools that are applied by the managed instance group. This method reduces the targetSize of the managed instance group by the number of instances that you abandon. This operation is marked as DONE when the action is scheduled even if the instances have not yet been removed from the group. You must separately verify the status of the abandoning action with the listmanagedinstances method.  You can specify a maximum of 1000 instances with this method per request.
         *
         * @alias compute.regionInstanceGroupManagers.abandonInstances
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instanceGroupManager Name of the managed instance group.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region scoping this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).RegionInstanceGroupManagersAbandonInstancesRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        abandonInstances: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/abandonInstances',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'instanceGroupManager'],
                pathParams: ['instanceGroupManager', 'project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.regionInstanceGroupManagers.delete
         *
         * @desc Deletes the specified managed instance group and all of the instances in that group.
         *
         * @alias compute.regionInstanceGroupManagers.delete
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instanceGroupManager Name of the managed instance group to delete.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region scoping this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'instanceGroupManager'],
                pathParams: ['instanceGroupManager', 'project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.regionInstanceGroupManagers.deleteInstances
         *
         * @desc Schedules a group action to delete the specified instances in the managed instance group. The instances are also removed from any target pools of which they were a member. This method reduces the targetSize of the managed instance group by the number of instances that you delete. This operation is marked as DONE when the action is scheduled even if the instances are still being deleted. You must separately verify the status of the deleting action with the listmanagedinstances method.  You can specify a maximum of 1000 instances with this method per request.
         *
         * @alias compute.regionInstanceGroupManagers.deleteInstances
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instanceGroupManager Name of the managed instance group.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region scoping this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).RegionInstanceGroupManagersDeleteInstancesRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        deleteInstances: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/deleteInstances',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'instanceGroupManager'],
                pathParams: ['instanceGroupManager', 'project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.regionInstanceGroupManagers.get
         *
         * @desc Returns all of the details about the specified managed instance group.
         *
         * @alias compute.regionInstanceGroupManagers.get
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instanceGroupManager Name of the managed instance group to return.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region scoping this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'instanceGroupManager'],
                pathParams: ['instanceGroupManager', 'project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.regionInstanceGroupManagers.insert
         *
         * @desc Creates a managed instance group using the information that you specify in the request. After the group is created, it schedules an action to create instances in the group using the specified instance template. This operation is marked as DONE when the group is created even if the instances in the group have not yet been created. You must separately verify the status of the individual instances with the listmanagedinstances method.  A regional managed instance group can contain up to 2000 instances.
         *
         * @alias compute.regionInstanceGroupManagers.insert
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region scoping this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).InstanceGroupManager} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/instanceGroupManagers',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'region'],
                pathParams: ['project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.regionInstanceGroupManagers.list
         *
         * @desc Retrieves the list of managed instance groups that are contained within the specified region.
         *
         * @alias compute.regionInstanceGroupManagers.list
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region scoping this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/instanceGroupManagers',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'region'],
                pathParams: ['project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.regionInstanceGroupManagers.listManagedInstances
         *
         * @desc Lists the instances in the managed instance group and instances that are scheduled to be created. The list includes any current actions that the group has scheduled for its instances.
         *
         * @alias compute.regionInstanceGroupManagers.listManagedInstances
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter
         * @param {string} params.instanceGroupManager The name of the managed instance group.
         * @param {integer=} params.maxResults
         * @param {string=} params.order_by
         * @param {string=} params.pageToken
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region scoping this request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        listManagedInstances: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/listManagedInstances',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'instanceGroupManager'],
                pathParams: ['instanceGroupManager', 'project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.regionInstanceGroupManagers.patch
         *
         * @desc Updates a managed instance group using the information that you specify in the request. This operation is marked as DONE when the group is patched even if the instances in the group are still in the process of being patched. You must separately verify the status of the individual instances with the listmanagedinstances method. This method supports patch semantics.
         *
         * @alias compute.regionInstanceGroupManagers.patch
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instanceGroupManager The name of the instance group manager.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region scoping this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).InstanceGroupManager} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'instanceGroupManager'],
                pathParams: ['instanceGroupManager', 'project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.regionInstanceGroupManagers.recreateInstances
         *
         * @desc Schedules a group action to recreate the specified instances in the managed instance group. The instances are deleted and recreated using the current instance template for the managed instance group. This operation is marked as DONE when the action is scheduled even if the instances have not yet been recreated. You must separately verify the status of the recreating action with the listmanagedinstances method.  You can specify a maximum of 1000 instances with this method per request.
         *
         * @alias compute.regionInstanceGroupManagers.recreateInstances
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instanceGroupManager Name of the managed instance group.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region scoping this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).RegionInstanceGroupManagersRecreateRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        recreateInstances: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/recreateInstances',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'instanceGroupManager'],
                pathParams: ['instanceGroupManager', 'project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.regionInstanceGroupManagers.resize
         *
         * @desc Changes the intended size for the managed instance group. If you increase the size, the group schedules actions to create new instances using the current instance template. If you decrease the size, the group schedules delete actions on one or more instances. The resize operation is marked DONE when the resize actions are scheduled even if the group has not yet added or deleted any instances. You must separately verify the status of the creating or deleting actions with the listmanagedinstances method.
         *
         * @alias compute.regionInstanceGroupManagers.resize
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instanceGroupManager Name of the managed instance group.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region scoping this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {integer} params.size Number of instances that should exist in this instance group manager.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        resize: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/resize',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'instanceGroupManager', 'size'],
                pathParams: ['instanceGroupManager', 'project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.regionInstanceGroupManagers.setAutoHealingPolicies
         *
         * @desc Modifies the autohealing policy for the instances in this managed instance group.
         *
         * @alias compute.regionInstanceGroupManagers.setAutoHealingPolicies
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instanceGroupManager Name of the managed instance group.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region scoping this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).RegionInstanceGroupManagersSetAutoHealingRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setAutoHealingPolicies: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/setAutoHealingPolicies',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'instanceGroupManager'],
                pathParams: ['instanceGroupManager', 'project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.regionInstanceGroupManagers.setInstanceTemplate
         *
         * @desc Sets the instance template to use when creating new instances or recreating instances in this group. Existing instances are not affected.
         *
         * @alias compute.regionInstanceGroupManagers.setInstanceTemplate
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instanceGroupManager The name of the managed instance group.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region scoping this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).RegionInstanceGroupManagersSetTemplateRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setInstanceTemplate: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/setInstanceTemplate',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'instanceGroupManager'],
                pathParams: ['instanceGroupManager', 'project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.regionInstanceGroupManagers.setTargetPools
         *
         * @desc Modifies the target pools to which all new instances in this group are assigned. Existing instances in the group are not affected.
         *
         * @alias compute.regionInstanceGroupManagers.setTargetPools
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instanceGroupManager Name of the managed instance group.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region scoping this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).RegionInstanceGroupManagersSetTargetPoolsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setTargetPools: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/setTargetPools',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'instanceGroupManager'],
                pathParams: ['instanceGroupManager', 'project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.regionInstanceGroupManagers.testIamPermissions
         *
         * @desc Returns permissions that a caller has on the specified resource.
         *
         * @alias compute.regionInstanceGroupManagers.testIamPermissions
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region The name of the region for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {compute(alpha).TestPermissionsRequest} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/instanceGroupManagers/{resource}/testIamPermissions',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'resource'],
                pathParams: ['project', 'region', 'resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.regionInstanceGroupManagers.update
         *
         * @desc Updates a managed instance group using the information that you specify in the request. This operation is marked as DONE when the group is updated even if the instances in the group have not yet been updated. You must separately verify the status of the individual instances with the listmanagedinstances method.
         *
         * @alias compute.regionInstanceGroupManagers.update
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instanceGroupManager The name of the instance group manager.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region scoping this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).InstanceGroupManager} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'instanceGroupManager'],
                pathParams: ['instanceGroupManager', 'project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.regionInstanceGroups = {
        /**
         * compute.regionInstanceGroups.get
         *
         * @desc Returns the specified instance group resource.
         *
         * @alias compute.regionInstanceGroups.get
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instanceGroup Name of the instance group resource to return.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region scoping this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/instanceGroups/{instanceGroup}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'instanceGroup'],
                pathParams: ['instanceGroup', 'project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.regionInstanceGroups.list
         *
         * @desc Retrieves the list of instance group resources contained within the specified region.
         *
         * @alias compute.regionInstanceGroups.list
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region scoping this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/instanceGroups',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'region'],
                pathParams: ['project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.regionInstanceGroups.listInstances
         *
         * @desc Lists the instances in the specified instance group and displays information about the named ports. Depending on the specified options, this method can list all instances or only the instances that are running.
         *
         * @alias compute.regionInstanceGroups.listInstances
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {string} params.instanceGroup Name of the regional instance group for which we want to list the instances.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region scoping this request.
         * @param {compute(alpha).RegionInstanceGroupsListInstancesRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        listInstances: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/instanceGroups/{instanceGroup}/listInstances',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'instanceGroup'],
                pathParams: ['instanceGroup', 'project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.regionInstanceGroups.setNamedPorts
         *
         * @desc Sets the named ports for the specified regional instance group.
         *
         * @alias compute.regionInstanceGroups.setNamedPorts
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instanceGroup The name of the regional instance group where the named ports are updated.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region scoping this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).RegionInstanceGroupsSetNamedPortsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setNamedPorts: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/instanceGroups/{instanceGroup}/setNamedPorts',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'instanceGroup'],
                pathParams: ['instanceGroup', 'project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.regionInstanceGroups.testIamPermissions
         *
         * @desc Returns permissions that a caller has on the specified resource.
         *
         * @alias compute.regionInstanceGroups.testIamPermissions
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region The name of the region for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {compute(alpha).TestPermissionsRequest} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/instanceGroups/{resource}/testIamPermissions',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'resource'],
                pathParams: ['project', 'region', 'resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.regionOperations = {
        /**
         * compute.regionOperations.delete
         *
         * @desc Deletes the specified region-specific Operations resource.
         *
         * @alias compute.regionOperations.delete
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.operation Name of the Operations resource to delete.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/operations/{operation}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'operation'],
                pathParams: ['operation', 'project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.regionOperations.get
         *
         * @desc Retrieves the specified region-specific Operations resource.
         *
         * @alias compute.regionOperations.get
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.operation Name of the Operations resource to return.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/operations/{operation}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'operation'],
                pathParams: ['operation', 'project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.regionOperations.list
         *
         * @desc Retrieves a list of Operation resources contained within the specified region.
         *
         * @alias compute.regionOperations.list
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/operations',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'region'],
                pathParams: ['project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.regions = {
        /**
         * compute.regions.get
         *
         * @desc Returns the specified Region resource. Get a list of available regions by making a list() request.
         *
         * @alias compute.regions.get
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region resource to return.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'region'],
                pathParams: ['project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.regions.list
         *
         * @desc Retrieves the list of region resources available to the specified project.
         *
         * @alias compute.regions.list
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions',
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
    self.routers = {
        /**
         * compute.routers.aggregatedList
         *
         * @desc Retrieves an aggregated list of routers.
         *
         * @alias compute.routers.aggregatedList
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        aggregatedList: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/aggregated/routers',
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
         * compute.routers.delete
         *
         * @desc Deletes the specified Router resource.
         *
         * @alias compute.routers.delete
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.router Name of the Router resource to delete.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/routers/{router}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'router'],
                pathParams: ['project', 'region', 'router'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.routers.get
         *
         * @desc Returns the specified Router resource. Get a list of available routers by making a list() request.
         *
         * @alias compute.routers.get
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region for this request.
         * @param {string} params.router Name of the Router resource to return.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/routers/{router}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'router'],
                pathParams: ['project', 'region', 'router'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.routers.getRouterStatus
         *
         * @desc Retrieves runtime information of the specified router.
         *
         * @alias compute.routers.getRouterStatus
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region for this request.
         * @param {string} params.router Name of the Router resource to query.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getRouterStatus: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/routers/{router}/getRouterStatus',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'router'],
                pathParams: ['project', 'region', 'router'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.routers.insert
         *
         * @desc Creates a Router resource in the specified project and region using the data included in the request.
         *
         * @alias compute.routers.insert
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).Router} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/routers',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'region'],
                pathParams: ['project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.routers.list
         *
         * @desc Retrieves a list of Router resources available to the specified project.
         *
         * @alias compute.routers.list
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/routers',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'region'],
                pathParams: ['project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.routers.patch
         *
         * @desc Patches the specified Router resource with the data included in the request. This method supports patch semantics.
         *
         * @alias compute.routers.patch
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.router Name of the Router resource to patch.
         * @param {compute(alpha).Router} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/routers/{router}',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'router'],
                pathParams: ['project', 'region', 'router'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.routers.preview
         *
         * @desc Preview fields auto-generated during router create and update operations. Calling this method does NOT create or update the router.
         *
         * @alias compute.routers.preview
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region for this request.
         * @param {string} params.router Name of the Router resource to query.
         * @param {compute(alpha).Router} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        preview: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/routers/{router}/preview',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'router'],
                pathParams: ['project', 'region', 'router'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.routers.testIamPermissions
         *
         * @desc Returns permissions that a caller has on the specified resource.
         *
         * @alias compute.routers.testIamPermissions
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region The name of the region for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {compute(alpha).TestPermissionsRequest} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/routers/{resource}/testIamPermissions',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'resource'],
                pathParams: ['project', 'region', 'resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.routers.update
         *
         * @desc Updates the specified Router resource with the data included in the request.
         *
         * @alias compute.routers.update
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.router Name of the Router resource to update.
         * @param {compute(alpha).Router} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/routers/{router}',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'router'],
                pathParams: ['project', 'region', 'router'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.routes = {
        /**
         * compute.routes.delete
         *
         * @desc Deletes the specified Route resource.
         *
         * @alias compute.routes.delete
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.route Name of the Route resource to delete.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/routes/{route}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'route'],
                pathParams: ['project', 'route'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.routes.get
         *
         * @desc Returns the specified Route resource. Get a list of available routes by making a list() request.
         *
         * @alias compute.routes.get
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.route Name of the Route resource to return.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/routes/{route}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'route'],
                pathParams: ['project', 'route'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.routes.insert
         *
         * @desc Creates a Route resource in the specified project using the data included in the request.
         *
         * @alias compute.routes.insert
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).Route} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/routes',
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
         * compute.routes.list
         *
         * @desc Retrieves the list of Route resources available to the specified project.
         *
         * @alias compute.routes.list
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/routes',
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
         * compute.routes.testIamPermissions
         *
         * @desc Returns permissions that a caller has on the specified resource.
         *
         * @alias compute.routes.testIamPermissions
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {compute(alpha).TestPermissionsRequest} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/routes/{resource}/testIamPermissions',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'resource'],
                pathParams: ['project', 'resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.securityPolicies = {
        /**
         * compute.securityPolicies.delete
         *
         * @desc Deletes the specified policy.
         *
         * @alias compute.securityPolicies.delete
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.securityPolicy Name of the security policy to delete.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/securityPolicies/{securityPolicy}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'securityPolicy'],
                pathParams: ['project', 'securityPolicy'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.securityPolicies.get
         *
         * @desc List all of the ordered rules present in a single specified policy.
         *
         * @alias compute.securityPolicies.get
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.securityPolicy Name of the security policy to update.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/securityPolicies/{securityPolicy}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'securityPolicy'],
                pathParams: ['project', 'securityPolicy'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.securityPolicies.insert
         *
         * @desc Creates a new policy in the specified project using the data included in the request.
         *
         * @alias compute.securityPolicies.insert
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).SecurityPolicy} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/securityPolicies',
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
         * compute.securityPolicies.list
         *
         * @desc List all the policies that have been configured for the specified project.
         *
         * @alias compute.securityPolicies.list
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/securityPolicies',
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
         * compute.securityPolicies.patch
         *
         * @desc Patches the specified policy with the data included in the request.
         *
         * @alias compute.securityPolicies.patch
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.securityPolicy Name of the security policy to update.
         * @param {compute(alpha).SecurityPolicy} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/securityPolicies/{securityPolicy}',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['project', 'securityPolicy'],
                pathParams: ['project', 'securityPolicy'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.securityPolicies.testIamPermissions
         *
         * @desc Returns permissions that a caller has on the specified resource.
         *
         * @alias compute.securityPolicies.testIamPermissions
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {compute(alpha).TestPermissionsRequest} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/securityPolicies/{resource}/testIamPermissions',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'resource'],
                pathParams: ['project', 'resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.snapshots = {
        /**
         * compute.snapshots.delete
         *
         * @desc Deletes the specified Snapshot resource. Keep in mind that deleting a single snapshot might not necessarily delete all the data on that snapshot. If any data on the snapshot that is marked for deletion is needed for subsequent snapshots, the data will be moved to the next corresponding snapshot.  For more information, see Deleting snaphots.
         *
         * @alias compute.snapshots.delete
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.snapshot Name of the Snapshot resource to delete.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/snapshots/{snapshot}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'snapshot'],
                pathParams: ['project', 'snapshot'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.snapshots.get
         *
         * @desc Returns the specified Snapshot resource. Get a list of available snapshots by making a list() request.
         *
         * @alias compute.snapshots.get
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.snapshot Name of the Snapshot resource to return.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/snapshots/{snapshot}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'snapshot'],
                pathParams: ['project', 'snapshot'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.snapshots.getIamPolicy
         *
         * @desc Gets the access control policy for a resource. May be empty if no such policy or resource exists.
         *
         * @alias compute.snapshots.getIamPolicy
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.resource_ Name of the resource for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/snapshots/{resource}/getIamPolicy',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'resource'],
                pathParams: ['project', 'resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.snapshots.list
         *
         * @desc Retrieves the list of Snapshot resources contained within the specified project.
         *
         * @alias compute.snapshots.list
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/snapshots',
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
         * compute.snapshots.setIamPolicy
         *
         * @desc Sets the access control policy on the specified resource. Replaces any existing policy.
         *
         * @alias compute.snapshots.setIamPolicy
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {compute(alpha).Policy} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/snapshots/{resource}/setIamPolicy',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'resource'],
                pathParams: ['project', 'resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.snapshots.setLabels
         *
         * @desc Sets the labels on a snapshot. To learn more about labels, read the Labeling or Tagging Resources documentation.
         *
         * @alias compute.snapshots.setLabels
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {compute(alpha).GlobalSetLabelsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setLabels: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/snapshots/{resource}/setLabels',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'resource'],
                pathParams: ['project', 'resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.snapshots.testIamPermissions
         *
         * @desc Returns permissions that a caller has on the specified resource.
         *
         * @alias compute.snapshots.testIamPermissions
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {compute(alpha).TestPermissionsRequest} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/snapshots/{resource}/testIamPermissions',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'resource'],
                pathParams: ['project', 'resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.sslCertificates = {
        /**
         * compute.sslCertificates.delete
         *
         * @desc Deletes the specified SslCertificate resource.
         *
         * @alias compute.sslCertificates.delete
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.sslCertificate Name of the SslCertificate resource to delete.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/sslCertificates/{sslCertificate}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'sslCertificate'],
                pathParams: ['project', 'sslCertificate'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.sslCertificates.get
         *
         * @desc Returns the specified SslCertificate resource. Get a list of available SSL certificates by making a list() request.
         *
         * @alias compute.sslCertificates.get
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.sslCertificate Name of the SslCertificate resource to return.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/sslCertificates/{sslCertificate}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'sslCertificate'],
                pathParams: ['project', 'sslCertificate'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.sslCertificates.insert
         *
         * @desc Creates a SslCertificate resource in the specified project using the data included in the request.
         *
         * @alias compute.sslCertificates.insert
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).SslCertificate} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/sslCertificates',
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
         * compute.sslCertificates.list
         *
         * @desc Retrieves the list of SslCertificate resources available to the specified project.
         *
         * @alias compute.sslCertificates.list
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/sslCertificates',
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
         * compute.sslCertificates.testIamPermissions
         *
         * @desc Returns permissions that a caller has on the specified resource.
         *
         * @alias compute.sslCertificates.testIamPermissions
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {compute(alpha).TestPermissionsRequest} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/sslCertificates/{resource}/testIamPermissions',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'resource'],
                pathParams: ['project', 'resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.subnetworks = {
        /**
         * compute.subnetworks.aggregatedList
         *
         * @desc Retrieves an aggregated list of subnetworks.
         *
         * @alias compute.subnetworks.aggregatedList
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        aggregatedList: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/aggregated/subnetworks',
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
         * compute.subnetworks.delete
         *
         * @desc Deletes the specified subnetwork.
         *
         * @alias compute.subnetworks.delete
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region scoping this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.subnetwork Name of the Subnetwork resource to delete.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/subnetworks/{subnetwork}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'subnetwork'],
                pathParams: ['project', 'region', 'subnetwork'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.subnetworks.expandIpCidrRange
         *
         * @desc Expands the IP CIDR range of the subnetwork to a specified value.
         *
         * @alias compute.subnetworks.expandIpCidrRange
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region scoping this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.subnetwork Name of the Subnetwork resource to update.
         * @param {compute(alpha).SubnetworksExpandIpCidrRangeRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        expandIpCidrRange: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/subnetworks/{subnetwork}/expandIpCidrRange',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'subnetwork'],
                pathParams: ['project', 'region', 'subnetwork'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.subnetworks.get
         *
         * @desc Returns the specified subnetwork. Get a list of available subnetworks list() request.
         *
         * @alias compute.subnetworks.get
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region scoping this request.
         * @param {string} params.subnetwork Name of the Subnetwork resource to return.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/subnetworks/{subnetwork}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'subnetwork'],
                pathParams: ['project', 'region', 'subnetwork'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.subnetworks.getIamPolicy
         *
         * @desc Gets the access control policy for a resource. May be empty if no such policy or resource exists.
         *
         * @alias compute.subnetworks.getIamPolicy
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region The name of the region for this request.
         * @param {string} params.resource_ Name of the resource for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/subnetworks/{resource}/getIamPolicy',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'resource'],
                pathParams: ['project', 'region', 'resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.subnetworks.insert
         *
         * @desc Creates a subnetwork in the specified project using the data included in the request.
         *
         * @alias compute.subnetworks.insert
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region scoping this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).Subnetwork} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/subnetworks',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'region'],
                pathParams: ['project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.subnetworks.list
         *
         * @desc Retrieves a list of subnetworks available to the specified project.
         *
         * @alias compute.subnetworks.list
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region scoping this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/subnetworks',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'region'],
                pathParams: ['project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.subnetworks.setIamPolicy
         *
         * @desc Sets the access control policy on the specified resource. Replaces any existing policy.
         *
         * @alias compute.subnetworks.setIamPolicy
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region The name of the region for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {compute(alpha).Policy} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/subnetworks/{resource}/setIamPolicy',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'resource'],
                pathParams: ['project', 'region', 'resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.subnetworks.setPrivateIpGoogleAccess
         *
         * @desc Set whether VMs in this subnet can access Google services without assigning external IP addresses through Cloudpath.
         *
         * @alias compute.subnetworks.setPrivateIpGoogleAccess
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region scoping this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.subnetwork Name of the Subnetwork resource.
         * @param {compute(alpha).SubnetworksSetPrivateIpGoogleAccessRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setPrivateIpGoogleAccess: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/subnetworks/{subnetwork}/setPrivateIpGoogleAccess',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'subnetwork'],
                pathParams: ['project', 'region', 'subnetwork'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.subnetworks.testIamPermissions
         *
         * @desc Returns permissions that a caller has on the specified resource.
         *
         * @alias compute.subnetworks.testIamPermissions
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region The name of the region for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {compute(alpha).TestPermissionsRequest} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/subnetworks/{resource}/testIamPermissions',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'resource'],
                pathParams: ['project', 'region', 'resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.targetHttpProxies = {
        /**
         * compute.targetHttpProxies.delete
         *
         * @desc Deletes the specified TargetHttpProxy resource.
         *
         * @alias compute.targetHttpProxies.delete
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.targetHttpProxy Name of the TargetHttpProxy resource to delete.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/targetHttpProxies/{targetHttpProxy}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'targetHttpProxy'],
                pathParams: ['project', 'targetHttpProxy'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.targetHttpProxies.get
         *
         * @desc Returns the specified TargetHttpProxy resource. Get a list of available target HTTP proxies by making a list() request.
         *
         * @alias compute.targetHttpProxies.get
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.targetHttpProxy Name of the TargetHttpProxy resource to return.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/targetHttpProxies/{targetHttpProxy}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'targetHttpProxy'],
                pathParams: ['project', 'targetHttpProxy'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.targetHttpProxies.insert
         *
         * @desc Creates a TargetHttpProxy resource in the specified project using the data included in the request.
         *
         * @alias compute.targetHttpProxies.insert
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).TargetHttpProxy} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/targetHttpProxies',
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
         * compute.targetHttpProxies.list
         *
         * @desc Retrieves the list of TargetHttpProxy resources available to the specified project.
         *
         * @alias compute.targetHttpProxies.list
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/targetHttpProxies',
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
         * compute.targetHttpProxies.setUrlMap
         *
         * @desc Changes the URL map for TargetHttpProxy.
         *
         * @alias compute.targetHttpProxies.setUrlMap
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.targetHttpProxy Name of the TargetHttpProxy to set a URL map for.
         * @param {compute(alpha).UrlMapReference} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setUrlMap: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/targetHttpProxies/{targetHttpProxy}/setUrlMap',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'targetHttpProxy'],
                pathParams: ['project', 'targetHttpProxy'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.targetHttpProxies.testIamPermissions
         *
         * @desc Returns permissions that a caller has on the specified resource.
         *
         * @alias compute.targetHttpProxies.testIamPermissions
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {compute(alpha).TestPermissionsRequest} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/targetHttpProxies/{resource}/testIamPermissions',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'resource'],
                pathParams: ['project', 'resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.targetHttpsProxies = {
        /**
         * compute.targetHttpsProxies.delete
         *
         * @desc Deletes the specified TargetHttpsProxy resource.
         *
         * @alias compute.targetHttpsProxies.delete
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.targetHttpsProxy Name of the TargetHttpsProxy resource to delete.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/targetHttpsProxies/{targetHttpsProxy}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'targetHttpsProxy'],
                pathParams: ['project', 'targetHttpsProxy'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.targetHttpsProxies.get
         *
         * @desc Returns the specified TargetHttpsProxy resource. Get a list of available target HTTPS proxies by making a list() request.
         *
         * @alias compute.targetHttpsProxies.get
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.targetHttpsProxy Name of the TargetHttpsProxy resource to return.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/targetHttpsProxies/{targetHttpsProxy}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'targetHttpsProxy'],
                pathParams: ['project', 'targetHttpsProxy'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.targetHttpsProxies.insert
         *
         * @desc Creates a TargetHttpsProxy resource in the specified project using the data included in the request.
         *
         * @alias compute.targetHttpsProxies.insert
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).TargetHttpsProxy} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/targetHttpsProxies',
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
         * compute.targetHttpsProxies.list
         *
         * @desc Retrieves the list of TargetHttpsProxy resources available to the specified project.
         *
         * @alias compute.targetHttpsProxies.list
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/targetHttpsProxies',
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
         * compute.targetHttpsProxies.setSslCertificates
         *
         * @desc Replaces SslCertificates for TargetHttpsProxy.
         *
         * @alias compute.targetHttpsProxies.setSslCertificates
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.targetHttpsProxy Name of the TargetHttpsProxy resource to set an SslCertificates resource for.
         * @param {compute(alpha).TargetHttpsProxiesSetSslCertificatesRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setSslCertificates: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/targetHttpsProxies/{targetHttpsProxy}/setSslCertificates',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'targetHttpsProxy'],
                pathParams: ['project', 'targetHttpsProxy'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.targetHttpsProxies.setUrlMap
         *
         * @desc Changes the URL map for TargetHttpsProxy.
         *
         * @alias compute.targetHttpsProxies.setUrlMap
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.targetHttpsProxy Name of the TargetHttpsProxy resource whose URL map is to be set.
         * @param {compute(alpha).UrlMapReference} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setUrlMap: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/targetHttpsProxies/{targetHttpsProxy}/setUrlMap',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'targetHttpsProxy'],
                pathParams: ['project', 'targetHttpsProxy'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.targetHttpsProxies.testIamPermissions
         *
         * @desc Returns permissions that a caller has on the specified resource.
         *
         * @alias compute.targetHttpsProxies.testIamPermissions
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {compute(alpha).TestPermissionsRequest} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/targetHttpsProxies/{resource}/testIamPermissions',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'resource'],
                pathParams: ['project', 'resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.targetInstances = {
        /**
         * compute.targetInstances.aggregatedList
         *
         * @desc Retrieves an aggregated list of target instances.
         *
         * @alias compute.targetInstances.aggregatedList
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        aggregatedList: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/aggregated/targetInstances',
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
         * compute.targetInstances.delete
         *
         * @desc Deletes the specified TargetInstance resource.
         *
         * @alias compute.targetInstances.delete
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.targetInstance Name of the TargetInstance resource to delete.
         * @param {string} params.zone Name of the zone scoping this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/targetInstances/{targetInstance}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'targetInstance'],
                pathParams: ['project', 'targetInstance', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.targetInstances.get
         *
         * @desc Returns the specified TargetInstance resource. Get a list of available target instances by making a list() request.
         *
         * @alias compute.targetInstances.get
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.targetInstance Name of the TargetInstance resource to return.
         * @param {string} params.zone Name of the zone scoping this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/targetInstances/{targetInstance}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'targetInstance'],
                pathParams: ['project', 'targetInstance', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.targetInstances.insert
         *
         * @desc Creates a TargetInstance resource in the specified project and zone using the data included in the request.
         *
         * @alias compute.targetInstances.insert
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.zone Name of the zone scoping this request.
         * @param {compute(alpha).TargetInstance} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/targetInstances',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone'],
                pathParams: ['project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.targetInstances.list
         *
         * @desc Retrieves a list of TargetInstance resources available to the specified project and zone.
         *
         * @alias compute.targetInstances.list
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.zone Name of the zone scoping this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/targetInstances',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'zone'],
                pathParams: ['project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.targetInstances.testIamPermissions
         *
         * @desc Returns permissions that a caller has on the specified resource.
         *
         * @alias compute.targetInstances.testIamPermissions
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {string} params.zone The name of the zone for this request.
         * @param {compute(alpha).TestPermissionsRequest} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/targetInstances/{resource}/testIamPermissions',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'resource'],
                pathParams: ['project', 'resource', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.targetPools = {
        /**
         * compute.targetPools.addHealthCheck
         *
         * @desc Adds health check URLs to a target pool.
         *
         * @alias compute.targetPools.addHealthCheck
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region scoping this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.targetPool Name of the target pool to add a health check to.
         * @param {compute(alpha).TargetPoolsAddHealthCheckRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        addHealthCheck: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/targetPools/{targetPool}/addHealthCheck',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'targetPool'],
                pathParams: ['project', 'region', 'targetPool'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.targetPools.addInstance
         *
         * @desc Adds an instance to a target pool.
         *
         * @alias compute.targetPools.addInstance
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region scoping this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.targetPool Name of the TargetPool resource to add instances to.
         * @param {compute(alpha).TargetPoolsAddInstanceRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        addInstance: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/targetPools/{targetPool}/addInstance',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'targetPool'],
                pathParams: ['project', 'region', 'targetPool'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.targetPools.aggregatedList
         *
         * @desc Retrieves an aggregated list of target pools.
         *
         * @alias compute.targetPools.aggregatedList
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        aggregatedList: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/aggregated/targetPools',
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
         * compute.targetPools.delete
         *
         * @desc Deletes the specified target pool.
         *
         * @alias compute.targetPools.delete
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region scoping this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.targetPool Name of the TargetPool resource to delete.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/targetPools/{targetPool}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'targetPool'],
                pathParams: ['project', 'region', 'targetPool'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.targetPools.get
         *
         * @desc Returns the specified target pool. Get a list of available target pools by making a list() request.
         *
         * @alias compute.targetPools.get
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region scoping this request.
         * @param {string} params.targetPool Name of the TargetPool resource to return.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/targetPools/{targetPool}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'targetPool'],
                pathParams: ['project', 'region', 'targetPool'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.targetPools.getHealth
         *
         * @desc Gets the most recent health check results for each IP for the instance that is referenced by the given target pool.
         *
         * @alias compute.targetPools.getHealth
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region scoping this request.
         * @param {string} params.targetPool Name of the TargetPool resource to which the queried instance belongs.
         * @param {compute(alpha).InstanceReference} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getHealth: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/targetPools/{targetPool}/getHealth',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'targetPool'],
                pathParams: ['project', 'region', 'targetPool'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.targetPools.insert
         *
         * @desc Creates a target pool in the specified project and region using the data included in the request.
         *
         * @alias compute.targetPools.insert
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region scoping this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).TargetPool} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/targetPools',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'region'],
                pathParams: ['project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.targetPools.list
         *
         * @desc Retrieves a list of target pools available to the specified project and region.
         *
         * @alias compute.targetPools.list
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region scoping this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/targetPools',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'region'],
                pathParams: ['project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.targetPools.removeHealthCheck
         *
         * @desc Removes health check URL from a target pool.
         *
         * @alias compute.targetPools.removeHealthCheck
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.targetPool Name of the target pool to remove health checks from.
         * @param {compute(alpha).TargetPoolsRemoveHealthCheckRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        removeHealthCheck: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/targetPools/{targetPool}/removeHealthCheck',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'targetPool'],
                pathParams: ['project', 'region', 'targetPool'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.targetPools.removeInstance
         *
         * @desc Removes instance URL from a target pool.
         *
         * @alias compute.targetPools.removeInstance
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region scoping this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.targetPool Name of the TargetPool resource to remove instances from.
         * @param {compute(alpha).TargetPoolsRemoveInstanceRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        removeInstance: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/targetPools/{targetPool}/removeInstance',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'targetPool'],
                pathParams: ['project', 'region', 'targetPool'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.targetPools.setBackup
         *
         * @desc Changes a backup target pool's configurations.
         *
         * @alias compute.targetPools.setBackup
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {number=} params.failoverRatio New failoverRatio value for the target pool.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region scoping this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.targetPool Name of the TargetPool resource to set a backup pool for.
         * @param {compute(alpha).TargetReference} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setBackup: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/targetPools/{targetPool}/setBackup',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'targetPool'],
                pathParams: ['project', 'region', 'targetPool'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.targetPools.testIamPermissions
         *
         * @desc Returns permissions that a caller has on the specified resource.
         *
         * @alias compute.targetPools.testIamPermissions
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region The name of the region for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {compute(alpha).TestPermissionsRequest} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/targetPools/{resource}/testIamPermissions',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'resource'],
                pathParams: ['project', 'region', 'resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.targetSslProxies = {
        /**
         * compute.targetSslProxies.delete
         *
         * @desc Deletes the specified TargetSslProxy resource.
         *
         * @alias compute.targetSslProxies.delete
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.targetSslProxy Name of the TargetSslProxy resource to delete.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/targetSslProxies/{targetSslProxy}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'targetSslProxy'],
                pathParams: ['project', 'targetSslProxy'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.targetSslProxies.get
         *
         * @desc Returns the specified TargetSslProxy resource. Get a list of available target SSL proxies by making a list() request.
         *
         * @alias compute.targetSslProxies.get
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.targetSslProxy Name of the TargetSslProxy resource to return.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/targetSslProxies/{targetSslProxy}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'targetSslProxy'],
                pathParams: ['project', 'targetSslProxy'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.targetSslProxies.insert
         *
         * @desc Creates a TargetSslProxy resource in the specified project using the data included in the request.
         *
         * @alias compute.targetSslProxies.insert
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).TargetSslProxy} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/targetSslProxies',
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
         * compute.targetSslProxies.list
         *
         * @desc Retrieves the list of TargetSslProxy resources available to the specified project.
         *
         * @alias compute.targetSslProxies.list
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/targetSslProxies',
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
         * compute.targetSslProxies.setBackendService
         *
         * @desc Changes the BackendService for TargetSslProxy.
         *
         * @alias compute.targetSslProxies.setBackendService
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.targetSslProxy Name of the TargetSslProxy resource whose BackendService resource is to be set.
         * @param {compute(alpha).TargetSslProxiesSetBackendServiceRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setBackendService: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/targetSslProxies/{targetSslProxy}/setBackendService',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'targetSslProxy'],
                pathParams: ['project', 'targetSslProxy'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.targetSslProxies.setProxyHeader
         *
         * @desc Changes the ProxyHeaderType for TargetSslProxy.
         *
         * @alias compute.targetSslProxies.setProxyHeader
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.targetSslProxy Name of the TargetSslProxy resource whose ProxyHeader is to be set.
         * @param {compute(alpha).TargetSslProxiesSetProxyHeaderRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setProxyHeader: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/targetSslProxies/{targetSslProxy}/setProxyHeader',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'targetSslProxy'],
                pathParams: ['project', 'targetSslProxy'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.targetSslProxies.setSslCertificates
         *
         * @desc Changes SslCertificates for TargetSslProxy.
         *
         * @alias compute.targetSslProxies.setSslCertificates
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.targetSslProxy Name of the TargetSslProxy resource whose SslCertificate resource is to be set.
         * @param {compute(alpha).TargetSslProxiesSetSslCertificatesRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setSslCertificates: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/targetSslProxies/{targetSslProxy}/setSslCertificates',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'targetSslProxy'],
                pathParams: ['project', 'targetSslProxy'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.targetSslProxies.testIamPermissions
         *
         * @desc Returns permissions that a caller has on the specified resource.
         *
         * @alias compute.targetSslProxies.testIamPermissions
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {compute(alpha).TestPermissionsRequest} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/targetSslProxies/{resource}/testIamPermissions',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'resource'],
                pathParams: ['project', 'resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.targetTcpProxies = {
        /**
         * compute.targetTcpProxies.delete
         *
         * @desc Deletes the specified TargetTcpProxy resource.
         *
         * @alias compute.targetTcpProxies.delete
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.targetTcpProxy Name of the TargetTcpProxy resource to delete.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/targetTcpProxies/{targetTcpProxy}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'targetTcpProxy'],
                pathParams: ['project', 'targetTcpProxy'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.targetTcpProxies.get
         *
         * @desc Returns the specified TargetTcpProxy resource. Get a list of available target TCP proxies by making a list() request.
         *
         * @alias compute.targetTcpProxies.get
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.targetTcpProxy Name of the TargetTcpProxy resource to return.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/targetTcpProxies/{targetTcpProxy}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'targetTcpProxy'],
                pathParams: ['project', 'targetTcpProxy'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.targetTcpProxies.insert
         *
         * @desc Creates a TargetTcpProxy resource in the specified project using the data included in the request.
         *
         * @alias compute.targetTcpProxies.insert
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).TargetTcpProxy} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/targetTcpProxies',
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
         * compute.targetTcpProxies.list
         *
         * @desc Retrieves the list of TargetTcpProxy resources available to the specified project.
         *
         * @alias compute.targetTcpProxies.list
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/targetTcpProxies',
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
         * compute.targetTcpProxies.setBackendService
         *
         * @desc Changes the BackendService for TargetTcpProxy.
         *
         * @alias compute.targetTcpProxies.setBackendService
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.targetTcpProxy Name of the TargetTcpProxy resource whose BackendService resource is to be set.
         * @param {compute(alpha).TargetTcpProxiesSetBackendServiceRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setBackendService: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/targetTcpProxies/{targetTcpProxy}/setBackendService',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'targetTcpProxy'],
                pathParams: ['project', 'targetTcpProxy'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.targetTcpProxies.setProxyHeader
         *
         * @desc Changes the ProxyHeaderType for TargetTcpProxy.
         *
         * @alias compute.targetTcpProxies.setProxyHeader
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.targetTcpProxy Name of the TargetTcpProxy resource whose ProxyHeader is to be set.
         * @param {compute(alpha).TargetTcpProxiesSetProxyHeaderRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setProxyHeader: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/targetTcpProxies/{targetTcpProxy}/setProxyHeader',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'targetTcpProxy'],
                pathParams: ['project', 'targetTcpProxy'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.targetTcpProxies.testIamPermissions
         *
         * @desc Returns permissions that a caller has on the specified resource.
         *
         * @alias compute.targetTcpProxies.testIamPermissions
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {compute(alpha).TestPermissionsRequest} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/targetTcpProxies/{resource}/testIamPermissions',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'resource'],
                pathParams: ['project', 'resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.targetVpnGateways = {
        /**
         * compute.targetVpnGateways.aggregatedList
         *
         * @desc Retrieves an aggregated list of target VPN gateways.
         *
         * @alias compute.targetVpnGateways.aggregatedList
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        aggregatedList: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/aggregated/targetVpnGateways',
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
         * compute.targetVpnGateways.delete
         *
         * @desc Deletes the specified target VPN gateway.
         *
         * @alias compute.targetVpnGateways.delete
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.targetVpnGateway Name of the target VPN gateway to delete.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/targetVpnGateways/{targetVpnGateway}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'targetVpnGateway'],
                pathParams: ['project', 'region', 'targetVpnGateway'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.targetVpnGateways.get
         *
         * @desc Returns the specified target VPN gateway. Get a list of available target VPN gateways by making a list() request.
         *
         * @alias compute.targetVpnGateways.get
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region for this request.
         * @param {string} params.targetVpnGateway Name of the target VPN gateway to return.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/targetVpnGateways/{targetVpnGateway}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'targetVpnGateway'],
                pathParams: ['project', 'region', 'targetVpnGateway'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.targetVpnGateways.insert
         *
         * @desc Creates a target VPN gateway in the specified project and region using the data included in the request.
         *
         * @alias compute.targetVpnGateways.insert
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).TargetVpnGateway} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/targetVpnGateways',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'region'],
                pathParams: ['project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.targetVpnGateways.list
         *
         * @desc Retrieves a list of target VPN gateways available to the specified project and region.
         *
         * @alias compute.targetVpnGateways.list
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/targetVpnGateways',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'region'],
                pathParams: ['project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.targetVpnGateways.testIamPermissions
         *
         * @desc Returns permissions that a caller has on the specified resource.
         *
         * @alias compute.targetVpnGateways.testIamPermissions
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region The name of the region for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {compute(alpha).TestPermissionsRequest} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/targetVpnGateways/{resource}/testIamPermissions',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'resource'],
                pathParams: ['project', 'region', 'resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.urlMaps = {
        /**
         * compute.urlMaps.delete
         *
         * @desc Deletes the specified UrlMap resource.
         *
         * @alias compute.urlMaps.delete
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.urlMap Name of the UrlMap resource to delete.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/urlMaps/{urlMap}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'urlMap'],
                pathParams: ['project', 'urlMap'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.urlMaps.get
         *
         * @desc Returns the specified UrlMap resource. Get a list of available URL maps by making a list() request.
         *
         * @alias compute.urlMaps.get
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.urlMap Name of the UrlMap resource to return.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/urlMaps/{urlMap}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'urlMap'],
                pathParams: ['project', 'urlMap'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.urlMaps.insert
         *
         * @desc Creates a UrlMap resource in the specified project using the data included in the request.
         *
         * @alias compute.urlMaps.insert
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).UrlMap} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/urlMaps',
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
         * compute.urlMaps.invalidateCache
         *
         * @desc Initiates a cache invalidation operation, invalidating the specified path, scoped to the specified UrlMap.
         *
         * @alias compute.urlMaps.invalidateCache
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.urlMap Name of the UrlMap scoping this request.
         * @param {compute(alpha).CacheInvalidationRule} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        invalidateCache: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/urlMaps/{urlMap}/invalidateCache',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'urlMap'],
                pathParams: ['project', 'urlMap'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.urlMaps.list
         *
         * @desc Retrieves the list of UrlMap resources available to the specified project.
         *
         * @alias compute.urlMaps.list
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/urlMaps',
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
         * compute.urlMaps.patch
         *
         * @desc Patches the specified UrlMap resource with the data included in the request. This method supports patch semantics.
         *
         * @alias compute.urlMaps.patch
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.urlMap Name of the UrlMap resource to patch.
         * @param {compute(alpha).UrlMap} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/urlMaps/{urlMap}',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['project', 'urlMap'],
                pathParams: ['project', 'urlMap'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.urlMaps.testIamPermissions
         *
         * @desc Returns permissions that a caller has on the specified resource.
         *
         * @alias compute.urlMaps.testIamPermissions
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {compute(alpha).TestPermissionsRequest} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/urlMaps/{resource}/testIamPermissions',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'resource'],
                pathParams: ['project', 'resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.urlMaps.update
         *
         * @desc Updates the specified UrlMap resource with the data included in the request.
         *
         * @alias compute.urlMaps.update
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.urlMap Name of the UrlMap resource to update.
         * @param {compute(alpha).UrlMap} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/urlMaps/{urlMap}',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['project', 'urlMap'],
                pathParams: ['project', 'urlMap'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.urlMaps.validate
         *
         * @desc Runs static validation for the UrlMap. In particular, the tests of the provided UrlMap will be run. Calling this method does NOT create the UrlMap.
         *
         * @alias compute.urlMaps.validate
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.urlMap Name of the UrlMap resource to be validated as.
         * @param {compute(alpha).UrlMapsValidateRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        validate: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/global/urlMaps/{urlMap}/validate',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'urlMap'],
                pathParams: ['project', 'urlMap'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.vpnTunnels = {
        /**
         * compute.vpnTunnels.aggregatedList
         *
         * @desc Retrieves an aggregated list of VPN tunnels.
         *
         * @alias compute.vpnTunnels.aggregatedList
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        aggregatedList: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/aggregated/vpnTunnels',
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
         * compute.vpnTunnels.delete
         *
         * @desc Deletes the specified VpnTunnel resource.
         *
         * @alias compute.vpnTunnels.delete
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.vpnTunnel Name of the VpnTunnel resource to delete.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/vpnTunnels/{vpnTunnel}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'vpnTunnel'],
                pathParams: ['project', 'region', 'vpnTunnel'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.vpnTunnels.get
         *
         * @desc Returns the specified VpnTunnel resource. Get a list of available VPN tunnels by making a list() request.
         *
         * @alias compute.vpnTunnels.get
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region for this request.
         * @param {string} params.vpnTunnel Name of the VpnTunnel resource to return.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/vpnTunnels/{vpnTunnel}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'vpnTunnel'],
                pathParams: ['project', 'region', 'vpnTunnel'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.vpnTunnels.insert
         *
         * @desc Creates a VpnTunnel resource in the specified project and region using the data included in the request.
         *
         * @alias compute.vpnTunnels.insert
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {compute(alpha).VpnTunnel} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/vpnTunnels',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'region'],
                pathParams: ['project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.vpnTunnels.list
         *
         * @desc Retrieves a list of VpnTunnel resources contained in the specified project and region.
         *
         * @alias compute.vpnTunnels.list
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region Name of the region for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/vpnTunnels',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'region'],
                pathParams: ['project', 'region'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.vpnTunnels.setLabels
         *
         * @desc Sets the labels on a VpnTunnel. To learn more about labels, read the Labeling or Tagging Resources documentation.
         *
         * @alias compute.vpnTunnels.setLabels
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region The region for this request.
         * @param {string=} params.requestId begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {compute(alpha).RegionSetLabelsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setLabels: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/vpnTunnels/{resource}/setLabels',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'resource'],
                pathParams: ['project', 'region', 'resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.vpnTunnels.testIamPermissions
         *
         * @desc Returns permissions that a caller has on the specified resource.
         *
         * @alias compute.vpnTunnels.testIamPermissions
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.region The name of the region for this request.
         * @param {string} params.resource_ Name of the resource for this request.
         * @param {compute(alpha).TestPermissionsRequest} params.resource Request body data
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/regions/{region}/vpnTunnels/{resource}/testIamPermissions',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'region', 'resource'],
                pathParams: ['project', 'region', 'resource'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.zoneOperations = {
        /**
         * compute.zoneOperations.delete
         *
         * @desc Deletes the specified zone-specific Operations resource.
         *
         * @alias compute.zoneOperations.delete
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.operation Name of the Operations resource to delete.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.zone Name of the zone for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/operations/{operation}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'operation'],
                pathParams: ['operation', 'project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.zoneOperations.get
         *
         * @desc Retrieves the specified zone-specific Operations resource.
         *
         * @alias compute.zoneOperations.get
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.operation Name of the Operations resource to return.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.zone Name of the zone for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/operations/{operation}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'zone', 'operation'],
                pathParams: ['operation', 'project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.zoneOperations.list
         *
         * @desc Retrieves a list of Operation resources contained within the specified zone.
         *
         * @alias compute.zoneOperations.list
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
         * @param {string} params.zone Name of the zone for request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}/operations',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'zone'],
                pathParams: ['project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.zones = {
        /**
         * compute.zones.get
         *
         * @desc Returns the specified Zone resource. Get a list of available zones by making a list() request.
         *
         * @alias compute.zones.get
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID for this request.
         * @param {string} params.zone Name of the zone resource to return.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones/{zone}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'zone'],
                pathParams: ['project', 'zone'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * compute.zones.list
         *
         * @desc Retrieves the list of Zone resources available to the specified project.
         *
         * @alias compute.zones.list
         * @memberOf! compute(alpha)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
         * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
         * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
         * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
         * @param {string} params.project Project ID for this request.
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
                    url: 'https://www.googleapis.com/compute/alpha/projects/{project}/zones',
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
module.exports = Compute;
//# sourceMappingURL=alpha.js.map