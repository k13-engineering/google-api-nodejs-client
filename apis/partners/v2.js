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
 * Google Partners API
 *
 * Searches certified companies and creates contact leads with them, and also audits the usage of clients.
 *
 * @example
 * const google = require('googleapis');
 * const partners = google.partners('v2');
 *
 * @namespace partners
 * @type {Function}
 * @version v2
 * @variation v2
 * @param {object=} options Options for Partners
 */
function Partners(options) {
    const self = this;
    self._options = options || {};
    self.clientMessages = {
        /**
         * partners.clientMessages.log
         *
         * @desc Logs a generic message from the client, such as `Failed to render component`, `Profile page is running slow`, `More than 500 users have accessed this result.`, etc.
         *
         * @alias partners.clientMessages.log
         * @memberOf! partners(v2)
         *
         * @param {object} params Parameters for request
         * @param {partners(v2).LogMessageRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        log: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://partners.googleapis.com/v2/clientMessages:log',
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
    self.exams = {
        /**
         * partners.exams.getToken
         *
         * @desc Gets an Exam Token for a Partner's user to take an exam in the Exams System
         *
         * @alias partners.exams.getToken
         * @memberOf! partners(v2)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.requestMetadata.locale Locale to use for the current request.
         * @param {string=} params.requestMetadata.userOverrides.ipAddress IP address to use instead of the user's geo-located IP address.
         * @param {string=} params.requestMetadata.experimentIds Experiment IDs the current request belongs to.
         * @param {string=} params.requestMetadata.trafficSource.trafficSubId Second level identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
         * @param {string} params.examType The exam type we are requesting a token for.
         * @param {string=} params.requestMetadata.partnersSessionId Google Partners session ID.
         * @param {string=} params.requestMetadata.userOverrides.userId Logged-in user ID to impersonate instead of the user's ID.
         * @param {string=} params.requestMetadata.trafficSource.trafficSourceId Identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getToken: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://partners.googleapis.com/v2/exams/{examType}/token',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['examType'],
                pathParams: ['examType'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.leads = {
        /**
         * partners.leads.list
         *
         * @desc Lists advertiser leads for a user's associated company. Should only be called within the context of an authorized logged in user.
         *
         * @alias partners.leads.list
         * @memberOf! partners(v2)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.requestMetadata.experimentIds Experiment IDs the current request belongs to.
         * @param {string=} params.orderBy How to order Leads. Currently, only `create_time` and `create_time desc` are supported
         * @param {string=} params.requestMetadata.trafficSource.trafficSubId Second level identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
         * @param {string=} params.requestMetadata.partnersSessionId Google Partners session ID.
         * @param {string=} params.requestMetadata.userOverrides.userId Logged-in user ID to impersonate instead of the user's ID.
         * @param {string=} params.pageToken A token identifying a page of results that the server returns. Typically, this is the value of `ListLeadsResponse.next_page_token` returned from the previous call to ListLeads.
         * @param {integer=} params.pageSize Requested page size. Server may return fewer leads than requested. If unspecified, server picks an appropriate default.
         * @param {string=} params.requestMetadata.trafficSource.trafficSourceId Identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
         * @param {string=} params.requestMetadata.locale Locale to use for the current request.
         * @param {string=} params.requestMetadata.userOverrides.ipAddress IP address to use instead of the user's geo-located IP address.
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
                    url: 'https://partners.googleapis.com/v2/leads',
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
    self.offers = {
        /**
         * partners.offers.list
         *
         * @desc Lists the Offers available for the current user
         *
         * @alias partners.offers.list
         * @memberOf! partners(v2)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.requestMetadata.experimentIds Experiment IDs the current request belongs to.
         * @param {string=} params.requestMetadata.trafficSource.trafficSubId Second level identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
         * @param {string=} params.requestMetadata.userOverrides.userId Logged-in user ID to impersonate instead of the user's ID.
         * @param {string=} params.requestMetadata.partnersSessionId Google Partners session ID.
         * @param {string=} params.requestMetadata.trafficSource.trafficSourceId Identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
         * @param {string=} params.requestMetadata.locale Locale to use for the current request.
         * @param {string=} params.requestMetadata.userOverrides.ipAddress IP address to use instead of the user's geo-located IP address.
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
                    url: 'https://partners.googleapis.com/v2/offers',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        history: {
            /**
             * partners.offers.history.list
             *
             * @desc Lists the Historical Offers for the current user (or user's entire company)
             *
             * @alias partners.offers.history.list
             * @memberOf! partners(v2)
             *
             * @param {object} params Parameters for request
             * @param {string=} params.requestMetadata.userOverrides.userId Logged-in user ID to impersonate instead of the user's ID.
             * @param {string=} params.requestMetadata.partnersSessionId Google Partners session ID.
             * @param {string=} params.pageToken Token to retrieve a specific page.
             * @param {integer=} params.pageSize Maximum number of rows to return per page.
             * @param {string=} params.requestMetadata.trafficSource.trafficSourceId Identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
             * @param {string=} params.requestMetadata.locale Locale to use for the current request.
             * @param {string=} params.requestMetadata.userOverrides.ipAddress IP address to use instead of the user's geo-located IP address.
             * @param {string=} params.requestMetadata.experimentIds Experiment IDs the current request belongs to.
             * @param {boolean=} params.entireCompany if true, show history for the entire company.  Requires user to be admin.
             * @param {string=} params.requestMetadata.trafficSource.trafficSubId Second level identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
             * @param {string=} params.orderBy Comma-separated list of fields to order by, e.g.: "foo,bar,baz". Use "foo desc" to sort descending. List of valid field names is: name, offer_code, expiration_time, status,     last_modified_time, sender_name, creation_time, country_code,     offer_type.
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
                        url: 'https://partners.googleapis.com/v2/offers/history',
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: [],
                    pathParams: [],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        }
    };
    self.userStates = {
        /**
         * partners.userStates.list
         *
         * @desc Lists states for current user.
         *
         * @alias partners.userStates.list
         * @memberOf! partners(v2)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.requestMetadata.userOverrides.userId Logged-in user ID to impersonate instead of the user's ID.
         * @param {string=} params.requestMetadata.partnersSessionId Google Partners session ID.
         * @param {string=} params.requestMetadata.trafficSource.trafficSourceId Identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
         * @param {string=} params.requestMetadata.locale Locale to use for the current request.
         * @param {string=} params.requestMetadata.userOverrides.ipAddress IP address to use instead of the user's geo-located IP address.
         * @param {string=} params.requestMetadata.experimentIds Experiment IDs the current request belongs to.
         * @param {string=} params.requestMetadata.trafficSource.trafficSubId Second level identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
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
                    url: 'https://partners.googleapis.com/v2/userStates',
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
    self.analytics = {
        /**
         * partners.analytics.list
         *
         * @desc Lists analytics data for a user's associated company. Should only be called within the context of an authorized logged in user.
         *
         * @alias partners.analytics.list
         * @memberOf! partners(v2)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.requestMetadata.userOverrides.userId Logged-in user ID to impersonate instead of the user's ID.
         * @param {string=} params.requestMetadata.partnersSessionId Google Partners session ID.
         * @param {string=} params.pageToken A token identifying a page of results that the server returns. Typically, this is the value of `ListAnalyticsResponse.next_page_token` returned from the previous call to ListAnalytics. Will be a date string in `YYYY-MM-DD` format representing the end date of the date range of results to return. If unspecified or set to "", default value is the current date.
         * @param {integer=} params.pageSize Requested page size. Server may return fewer analytics than requested. If unspecified or set to 0, default value is 30. Specifies the number of days in the date range when querying analytics. The `page_token` represents the end date of the date range and the start date is calculated using the `page_size` as the number of days BEFORE the end date. Must be a non-negative integer.
         * @param {string=} params.requestMetadata.trafficSource.trafficSourceId Identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
         * @param {string=} params.requestMetadata.locale Locale to use for the current request.
         * @param {string=} params.requestMetadata.userOverrides.ipAddress IP address to use instead of the user's geo-located IP address.
         * @param {string=} params.requestMetadata.experimentIds Experiment IDs the current request belongs to.
         * @param {string=} params.requestMetadata.trafficSource.trafficSubId Second level identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
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
                    url: 'https://partners.googleapis.com/v2/analytics',
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
    self.v2 = {
        /**
         * partners.updateLeads
         *
         * @desc Updates the specified lead.
         *
         * @alias partners.updateLeads
         * @memberOf! partners(v2)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.requestMetadata.userOverrides.userId Logged-in user ID to impersonate instead of the user's ID.
         * @param {string=} params.requestMetadata.partnersSessionId Google Partners session ID.
         * @param {string=} params.requestMetadata.trafficSource.trafficSourceId Identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
         * @param {string=} params.requestMetadata.locale Locale to use for the current request.
         * @param {string=} params.requestMetadata.userOverrides.ipAddress IP address to use instead of the user's geo-located IP address.
         * @param {string=} params.updateMask Standard field mask for the set of fields to be updated. Required with at least 1 value in FieldMask's paths. Only `state` and `adwords_customer_id` are currently supported.
         * @param {string=} params.requestMetadata.experimentIds Experiment IDs the current request belongs to.
         * @param {string=} params.requestMetadata.trafficSource.trafficSubId Second level identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
         * @param {partners(v2).Lead} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        updateLeads: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://partners.googleapis.com/v2/leads',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * partners.updateCompanies
         *
         * @desc Update company. Should only be called within the context of an authorized logged in user.
         *
         * @alias partners.updateCompanies
         * @memberOf! partners(v2)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.requestMetadata.partnersSessionId Google Partners session ID.
         * @param {string=} params.requestMetadata.userOverrides.userId Logged-in user ID to impersonate instead of the user's ID.
         * @param {string=} params.requestMetadata.trafficSource.trafficSourceId Identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
         * @param {string=} params.requestMetadata.locale Locale to use for the current request.
         * @param {string=} params.requestMetadata.userOverrides.ipAddress IP address to use instead of the user's geo-located IP address.
         * @param {string=} params.updateMask Standard field mask for the set of fields to be updated. Required with at least 1 value in FieldMask's paths.
         * @param {string=} params.requestMetadata.experimentIds Experiment IDs the current request belongs to.
         * @param {string=} params.requestMetadata.trafficSource.trafficSubId Second level identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
         * @param {partners(v2).Company} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        updateCompanies: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://partners.googleapis.com/v2/companies',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * partners.getPartnersstatus
         *
         * @desc Gets Partners Status of the logged in user's agency. Should only be called if the logged in user is the admin of the agency.
         *
         * @alias partners.getPartnersstatus
         * @memberOf! partners(v2)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.requestMetadata.userOverrides.userId Logged-in user ID to impersonate instead of the user's ID.
         * @param {string=} params.requestMetadata.partnersSessionId Google Partners session ID.
         * @param {string=} params.requestMetadata.trafficSource.trafficSourceId Identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
         * @param {string=} params.requestMetadata.locale Locale to use for the current request.
         * @param {string=} params.requestMetadata.userOverrides.ipAddress IP address to use instead of the user's geo-located IP address.
         * @param {string=} params.requestMetadata.experimentIds Experiment IDs the current request belongs to.
         * @param {string=} params.requestMetadata.trafficSource.trafficSubId Second level identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getPartnersstatus: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://partners.googleapis.com/v2/partnersstatus',
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
    self.users = {
        /**
         * partners.users.createCompanyRelation
         *
         * @desc Creates a user's company relation. Affiliates the user to a company.
         *
         * @alias partners.users.createCompanyRelation
         * @memberOf! partners(v2)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.requestMetadata.experimentIds Experiment IDs the current request belongs to.
         * @param {string=} params.requestMetadata.trafficSource.trafficSubId Second level identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
         * @param {string} params.userId The ID of the user. Can be set to <code>me</code> to mean the currently authenticated user.
         * @param {string=} params.requestMetadata.userOverrides.userId Logged-in user ID to impersonate instead of the user's ID.
         * @param {string=} params.requestMetadata.partnersSessionId Google Partners session ID.
         * @param {string=} params.requestMetadata.trafficSource.trafficSourceId Identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
         * @param {string=} params.requestMetadata.locale Locale to use for the current request.
         * @param {string=} params.requestMetadata.userOverrides.ipAddress IP address to use instead of the user's geo-located IP address.
         * @param {partners(v2).CompanyRelation} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        createCompanyRelation: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://partners.googleapis.com/v2/users/{userId}/companyRelation',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['userId'],
                pathParams: ['userId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * partners.users.deleteCompanyRelation
         *
         * @desc Deletes a user's company relation. Unaffiliaites the user from a company.
         *
         * @alias partners.users.deleteCompanyRelation
         * @memberOf! partners(v2)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.requestMetadata.userOverrides.userId Logged-in user ID to impersonate instead of the user's ID.
         * @param {string=} params.requestMetadata.partnersSessionId Google Partners session ID.
         * @param {string=} params.requestMetadata.trafficSource.trafficSourceId Identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
         * @param {string=} params.requestMetadata.locale Locale to use for the current request.
         * @param {string=} params.requestMetadata.userOverrides.ipAddress IP address to use instead of the user's geo-located IP address.
         * @param {string=} params.requestMetadata.experimentIds Experiment IDs the current request belongs to.
         * @param {string=} params.requestMetadata.trafficSource.trafficSubId Second level identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
         * @param {string} params.userId The ID of the user. Can be set to <code>me</code> to mean the currently authenticated user.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        deleteCompanyRelation: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://partners.googleapis.com/v2/users/{userId}/companyRelation',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['userId'],
                pathParams: ['userId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * partners.users.get
         *
         * @desc Gets a user.
         *
         * @alias partners.users.get
         * @memberOf! partners(v2)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.requestMetadata.userOverrides.userId Logged-in user ID to impersonate instead of the user's ID.
         * @param {string=} params.requestMetadata.partnersSessionId Google Partners session ID.
         * @param {string=} params.userView Specifies what parts of the user information to return.
         * @param {string=} params.requestMetadata.trafficSource.trafficSourceId Identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
         * @param {string=} params.requestMetadata.locale Locale to use for the current request.
         * @param {string=} params.requestMetadata.userOverrides.ipAddress IP address to use instead of the user's geo-located IP address.
         * @param {string=} params.requestMetadata.experimentIds Experiment IDs the current request belongs to.
         * @param {string} params.userId Identifier of the user. Can be set to <code>me</code> to mean the currently authenticated user.
         * @param {string=} params.requestMetadata.trafficSource.trafficSubId Second level identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
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
                    url: 'https://partners.googleapis.com/v2/users/{userId}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['userId'],
                pathParams: ['userId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * partners.users.updateProfile
         *
         * @desc Updates a user's profile. A user can only update their own profile and should only be called within the context of a logged in user.
         *
         * @alias partners.users.updateProfile
         * @memberOf! partners(v2)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.requestMetadata.partnersSessionId Google Partners session ID.
         * @param {string=} params.requestMetadata.userOverrides.userId Logged-in user ID to impersonate instead of the user's ID.
         * @param {string=} params.requestMetadata.trafficSource.trafficSourceId Identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
         * @param {string=} params.requestMetadata.locale Locale to use for the current request.
         * @param {string=} params.requestMetadata.userOverrides.ipAddress IP address to use instead of the user's geo-located IP address.
         * @param {string=} params.requestMetadata.experimentIds Experiment IDs the current request belongs to.
         * @param {string=} params.requestMetadata.trafficSource.trafficSubId Second level identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
         * @param {partners(v2).UserProfile} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        updateProfile: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://partners.googleapis.com/v2/users/profile',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.companies = {
        /**
         * partners.companies.get
         *
         * @desc Gets a company.
         *
         * @alias partners.companies.get
         * @memberOf! partners(v2)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.requestMetadata.trafficSource.trafficSourceId Identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
         * @param {string=} params.requestMetadata.userOverrides.ipAddress IP address to use instead of the user's geo-located IP address.
         * @param {string} params.companyId The ID of the company to retrieve.
         * @param {string=} params.requestMetadata.experimentIds Experiment IDs the current request belongs to.
         * @param {string=} params.currencyCode If the company's budget is in a different currency code than this one, then the converted budget is converted to this currency code.
         * @param {string=} params.orderBy How to order addresses within the returned company. Currently, only `address` and `address desc` is supported which will sorted by closest to farthest in distance from given address and farthest to closest distance from given address respectively.
         * @param {string=} params.requestMetadata.trafficSource.trafficSubId Second level identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
         * @param {string=} params.requestMetadata.userOverrides.userId Logged-in user ID to impersonate instead of the user's ID.
         * @param {string=} params.requestMetadata.partnersSessionId Google Partners session ID.
         * @param {string=} params.view The view of `Company` resource to be returned. This must not be `COMPANY_VIEW_UNSPECIFIED`.
         * @param {string=} params.requestMetadata.locale Locale to use for the current request.
         * @param {string=} params.address The address to use for sorting the company's addresses by proximity. If not given, the geo-located address of the request is used. Used when order_by is set.
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
                    url: 'https://partners.googleapis.com/v2/companies/{companyId}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['companyId'],
                pathParams: ['companyId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * partners.companies.list
         *
         * @desc Lists companies.
         *
         * @alias partners.companies.list
         * @memberOf! partners(v2)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.address The address to use when searching for companies. If not given, the geo-located address of the request is used.
         * @param {string=} params.requestMetadata.locale Locale to use for the current request.
         * @param {string=} params.minMonthlyBudget.units The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.
         * @param {integer=} params.maxMonthlyBudget.nanos Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
         * @param {string=} params.services List of services that the returned agencies should provide. If this is not empty, any returned agency must have at least one of these services, or one of the specializations in the "specializations" field.
         * @param {string=} params.requestMetadata.trafficSource.trafficSourceId Identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
         * @param {string=} params.maxMonthlyBudget.units The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.
         * @param {integer=} params.minMonthlyBudget.nanos Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
         * @param {string=} params.requestMetadata.trafficSource.trafficSubId Second level identifier to indicate where the traffic comes from. An identifier has multiple letters created by a team which redirected the traffic to us.
         * @param {string=} params.requestMetadata.partnersSessionId Google Partners session ID.
         * @param {string=} params.pageToken A token identifying a page of results that the server returns. Typically, this is the value of `ListCompaniesResponse.next_page_token` returned from the previous call to ListCompanies.
         * @param {string=} params.companyName Company name to search for.
         * @param {string=} params.industries List of industries the company can help with.
         * @param {string=} params.websiteUrl Website URL that will help to find a better matched company. .
         * @param {string=} params.gpsMotivations List of reasons for using Google Partner Search to get companies.
         * @param {string=} params.languageCodes List of language codes that company can support. Only primary language subtags are accepted as defined by <a href="https://tools.ietf.org/html/bcp47">BCP 47</a> (IETF BCP 47, "Tags for Identifying Languages").
         * @param {integer=} params.pageSize Requested page size. Server may return fewer companies than requested. If unspecified, server picks an appropriate default.
         * @param {string=} params.requestMetadata.userOverrides.ipAddress IP address to use instead of the user's geo-located IP address.
         * @param {string=} params.requestMetadata.experimentIds Experiment IDs the current request belongs to.
         * @param {string=} params.orderBy How to order addresses within the returned companies. Currently, only `address` and `address desc` is supported which will sorted by closest to farthest in distance from given address and farthest to closest distance from given address respectively.
         * @param {string=} params.specializations List of specializations that the returned agencies should provide. If this is not empty, any returned agency must have at least one of these specializations, or one of the services in the "services" field.
         * @param {string=} params.maxMonthlyBudget.currencyCode The 3-letter currency code defined in ISO 4217.
         * @param {string=} params.requestMetadata.userOverrides.userId Logged-in user ID to impersonate instead of the user's ID.
         * @param {string=} params.minMonthlyBudget.currencyCode The 3-letter currency code defined in ISO 4217.
         * @param {string=} params.view The view of the `Company` resource to be returned. This must not be `COMPANY_VIEW_UNSPECIFIED`.
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
                    url: 'https://partners.googleapis.com/v2/companies',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        leads: {
            /**
             * partners.companies.leads.create
             *
             * @desc Creates an advertiser lead for the given company ID.
             *
             * @alias partners.companies.leads.create
             * @memberOf! partners(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.companyId The ID of the company to contact.
             * @param {partners(v2).CreateLeadRequest} params.resource Request body data
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
                        url: 'https://partners.googleapis.com/v2/companies/{companyId}/leads',
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['companyId'],
                    pathParams: ['companyId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        }
    };
    self.userEvents = {
        /**
         * partners.userEvents.log
         *
         * @desc Logs a user event.
         *
         * @alias partners.userEvents.log
         * @memberOf! partners(v2)
         *
         * @param {object} params Parameters for request
         * @param {partners(v2).LogUserEventRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        log: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://partners.googleapis.com/v2/userEvents:log',
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
module.exports = Partners;
//# sourceMappingURL=v2.js.map