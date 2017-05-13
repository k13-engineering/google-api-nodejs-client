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
 * Google Play EMM API
 *
 * Manages the deployment of apps to Android for Work users.
 *
 * @example
 * const google = require('googleapis');
 * const androidenterprise = google.androidenterprise('v1');
 *
 * @namespace androidenterprise
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Androidenterprise
 */
function Androidenterprise(options) {
    const self = this;
    self._options = options || {};
    self.devices = {
        /**
         * androidenterprise.devices.get
         *
         * @desc Retrieves the details of a device.
         *
         * @alias androidenterprise.devices.get
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.deviceId The ID of the device.
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.userId The ID of the user.
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
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId', 'deviceId'],
                pathParams: ['deviceId', 'enterpriseId', 'userId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.devices.getState
         *
         * @desc Retrieves whether a device's access to Google services is enabled or disabled. The device state takes effect only if enforcing EMM policies on Android devices is enabled in the Google Admin Console. Otherwise, the device state is ignored and all devices are allowed access to Google services. This is only supported for Google-managed users.
         *
         * @alias androidenterprise.devices.getState
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.deviceId The ID of the device.
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.userId The ID of the user.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getState: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/state',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId', 'deviceId'],
                pathParams: ['deviceId', 'enterpriseId', 'userId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.devices.list
         *
         * @desc Retrieves the IDs of all of a user's devices.
         *
         * @alias androidenterprise.devices.list
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.userId The ID of the user.
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
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId'],
                pathParams: ['enterpriseId', 'userId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.devices.setState
         *
         * @desc Sets whether a device's access to Google services is enabled or disabled. The device state takes effect only if enforcing EMM policies on Android devices is enabled in the Google Admin Console. Otherwise, the device state is ignored and all devices are allowed access to Google services. This is only supported for Google-managed users.
         *
         * @alias androidenterprise.devices.setState
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.deviceId The ID of the device.
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.userId The ID of the user.
         * @param {androidenterprise(v1).DeviceState} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setState: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/state',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId', 'deviceId'],
                pathParams: ['deviceId', 'enterpriseId', 'userId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.enterprises = {
        /**
         * androidenterprise.enterprises.acknowledgeNotificationSet
         *
         * @desc Acknowledges notifications that were received from Enterprises.PullNotificationSet to prevent subsequent calls from returning the same notifications.
         *
         * @alias androidenterprise.enterprises.acknowledgeNotificationSet
         * @memberOf! androidenterprise(v1)
         *
         * @param {object=} params Parameters for request
         * @param {string=} params.notificationSetId The notification set ID as returned by Enterprises.PullNotificationSet. This must be provided.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        acknowledgeNotificationSet: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/acknowledgeNotificationSet',
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
         * androidenterprise.enterprises.completeSignup
         *
         * @desc Completes the signup flow, by specifying the Completion token and Enterprise token. This request must not be called multiple times for a given Enterprise Token.
         *
         * @alias androidenterprise.enterprises.completeSignup
         * @memberOf! androidenterprise(v1)
         *
         * @param {object=} params Parameters for request
         * @param {string=} params.completionToken The Completion token initially returned by GenerateSignupUrl.
         * @param {string=} params.enterpriseToken The Enterprise token appended to the Callback URL.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        completeSignup: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/completeSignup',
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
         * androidenterprise.enterprises.createWebToken
         *
         * @desc Returns a unique token to access an embeddable UI. To generate a web UI, pass the generated token into the managed Google Play javascript API. Each token may only be used to start one UI session. See the javascript API documentation for further information.
         *
         * @alias androidenterprise.enterprises.createWebToken
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {androidenterprise(v1).AdministratorWebTokenSpec} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        createWebToken: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/createWebToken',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['enterpriseId'],
                pathParams: ['enterpriseId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.enterprises.delete
         *
         * @desc Deletes the binding between the EMM and enterprise. This is now deprecated. Use this method only to unenroll customers that were previously enrolled with the insert call, then enroll them again with the enroll call.
         *
         * @alias androidenterprise.enterprises.delete
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
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
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['enterpriseId'],
                pathParams: ['enterpriseId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.enterprises.enroll
         *
         * @desc Enrolls an enterprise with the calling EMM.
         *
         * @alias androidenterprise.enterprises.enroll
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.token The token provided by the enterprise to register the EMM.
         * @param {androidenterprise(v1).Enterprise} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        enroll: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/enroll',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['token'],
                pathParams: [],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.enterprises.generateSignupUrl
         *
         * @desc Generates a sign-up URL.
         *
         * @alias androidenterprise.enterprises.generateSignupUrl
         * @memberOf! androidenterprise(v1)
         *
         * @param {object=} params Parameters for request
         * @param {string=} params.callbackUrl The callback URL to which the Admin will be redirected after successfully creating an enterprise. Before redirecting there the system will add a single query parameter to this URL named "enterpriseToken" which will contain an opaque token to be used for the CompleteSignup request. Beware that this means that the URL will be parsed, the parameter added and then a new URL formatted, i.e. there may be some minor formatting changes and, more importantly, the URL must be well-formed so that it can be parsed.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        generateSignupUrl: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/signupUrl',
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
         * androidenterprise.enterprises.get
         *
         * @desc Retrieves the name and domain of an enterprise.
         *
         * @alias androidenterprise.enterprises.get
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
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
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId'],
                pathParams: ['enterpriseId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.enterprises.getServiceAccount
         *
         * @desc Returns a service account and credentials. The service account can be bound to the enterprise by calling setAccount. The service account is unique to this enterprise and EMM, and will be deleted if the enterprise is unbound. The credentials contain private key data and are not stored server-side.  This method can only be called after calling Enterprises.Enroll or Enterprises.CompleteSignup, and before Enterprises.SetAccount; at other times it will return an error.  Subsequent calls after the first will generate a new, unique set of credentials, and invalidate the previously generated credentials.  Once the service account is bound to the enterprise, it can be managed using the serviceAccountKeys resource.
         *
         * @alias androidenterprise.enterprises.getServiceAccount
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string=} params.keyType The type of credential to return with the service account. Required.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getServiceAccount: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/serviceAccount',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId'],
                pathParams: ['enterpriseId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.enterprises.getStoreLayout
         *
         * @desc Returns the store layout for the enterprise. If the store layout has not been set, returns "basic" as the store layout type and no homepage.
         *
         * @alias androidenterprise.enterprises.getStoreLayout
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getStoreLayout: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId'],
                pathParams: ['enterpriseId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.enterprises.insert
         *
         * @desc Establishes the binding between the EMM and an enterprise. This is now deprecated; use enroll instead.
         *
         * @alias androidenterprise.enterprises.insert
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.token The token provided by the enterprise to register the EMM.
         * @param {androidenterprise(v1).Enterprise} params.resource Request body data
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
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['token'],
                pathParams: [],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.enterprises.list
         *
         * @desc Looks up an enterprise by domain name. This is only supported for enterprises created via the Google-initiated creation flow. Lookup of the id is not needed for enterprises created via the EMM-initiated flow since the EMM learns the enterprise ID in the callback specified in the Enterprises.generateSignupUrl call.
         *
         * @alias androidenterprise.enterprises.list
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.domain The exact primary domain name of the enterprise to look up.
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
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['domain'],
                pathParams: [],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.enterprises.pullNotificationSet
         *
         * @desc Pulls and returns a notification set for the enterprises associated with the service account authenticated for the request. The notification set may be empty if no notification are pending. A notification set returned needs to be acknowledged within 20 seconds by calling Enterprises.AcknowledgeNotificationSet, unless the notification set is empty. Notifications that are not acknowledged within the 20 seconds will eventually be included again in the response to another PullNotificationSet request, and those that are never acknowledged will ultimately be deleted according to the Google Cloud Platform Pub/Sub system policy. Multiple requests might be performed concurrently to retrieve notifications, in which case the pending notifications (if any) will be split among each caller, if any are pending. If no notifications are present, an empty notification list is returned. Subsequent requests may return more notifications once they become available.
         *
         * @alias androidenterprise.enterprises.pullNotificationSet
         * @memberOf! androidenterprise(v1)
         *
         * @param {object=} params Parameters for request
         * @param {string=} params.requestMode The request mode for pulling notifications. Specifying waitForNotifications will cause the request to block and wait until one or more notifications are present, or return an empty notification list if no notifications are present after some time. Speciying returnImmediately will cause the request to immediately return the pending notifications, or an empty list if no notifications are present. If omitted, defaults to waitForNotifications.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        pullNotificationSet: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/pullNotificationSet',
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
         * androidenterprise.enterprises.sendTestPushNotification
         *
         * @desc Sends a test push notification to validate the EMM integration with the Google Cloud Pub/Sub service for this enterprise.
         *
         * @alias androidenterprise.enterprises.sendTestPushNotification
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        sendTestPushNotification: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/sendTestPushNotification',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['enterpriseId'],
                pathParams: ['enterpriseId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.enterprises.setAccount
         *
         * @desc Sets the account that will be used to authenticate to the API as the enterprise.
         *
         * @alias androidenterprise.enterprises.setAccount
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {androidenterprise(v1).EnterpriseAccount} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setAccount: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/account',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['enterpriseId'],
                pathParams: ['enterpriseId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.enterprises.setStoreLayout
         *
         * @desc Sets the store layout for the enterprise. By default, storeLayoutType is set to "basic" and the basic store layout is enabled. The basic layout only contains apps approved by the admin, and that have been added to the available product set for a user (using the  setAvailableProductSet call). Apps on the page are sorted in order of their product ID value. If you create a custom store layout (by setting storeLayoutType = "custom" and setting a homepage), the basic store layout is disabled.
         *
         * @alias androidenterprise.enterprises.setStoreLayout
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {androidenterprise(v1).StoreLayout} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setStoreLayout: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['enterpriseId'],
                pathParams: ['enterpriseId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.enterprises.unenroll
         *
         * @desc Unenrolls an enterprise from the calling EMM.
         *
         * @alias androidenterprise.enterprises.unenroll
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        unenroll: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/unenroll',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['enterpriseId'],
                pathParams: ['enterpriseId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.entitlements = {
        /**
         * androidenterprise.entitlements.delete
         *
         * @desc Removes an entitlement to an app for a user.
         *
         * @alias androidenterprise.entitlements.delete
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.entitlementId The ID of the entitlement (a product ID), e.g. "app:com.google.android.gm".
         * @param {string} params.userId The ID of the user.
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
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/entitlements/{entitlementId}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId', 'entitlementId'],
                pathParams: ['enterpriseId', 'entitlementId', 'userId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.entitlements.get
         *
         * @desc Retrieves details of an entitlement.
         *
         * @alias androidenterprise.entitlements.get
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.entitlementId The ID of the entitlement (a product ID), e.g. "app:com.google.android.gm".
         * @param {string} params.userId The ID of the user.
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
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/entitlements/{entitlementId}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId', 'entitlementId'],
                pathParams: ['enterpriseId', 'entitlementId', 'userId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.entitlements.list
         *
         * @desc Lists all entitlements for the specified user. Only the ID is set.
         *
         * @alias androidenterprise.entitlements.list
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.userId The ID of the user.
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
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/entitlements',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId'],
                pathParams: ['enterpriseId', 'userId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.entitlements.patch
         *
         * @desc Adds or updates an entitlement to an app for a user. This method supports patch semantics.
         *
         * @alias androidenterprise.entitlements.patch
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.entitlementId The ID of the entitlement (a product ID), e.g. "app:com.google.android.gm".
         * @param {boolean=} params.install Set to true to also install the product on all the user's devices where possible. Failure to install on one or more devices will not prevent this operation from returning successfully, as long as the entitlement was successfully assigned to the user.
         * @param {string} params.userId The ID of the user.
         * @param {androidenterprise(v1).Entitlement} params.resource Request body data
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
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/entitlements/{entitlementId}',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId', 'entitlementId'],
                pathParams: ['enterpriseId', 'entitlementId', 'userId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.entitlements.update
         *
         * @desc Adds or updates an entitlement to an app for a user.
         *
         * @alias androidenterprise.entitlements.update
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.entitlementId The ID of the entitlement (a product ID), e.g. "app:com.google.android.gm".
         * @param {boolean=} params.install Set to true to also install the product on all the user's devices where possible. Failure to install on one or more devices will not prevent this operation from returning successfully, as long as the entitlement was successfully assigned to the user.
         * @param {string} params.userId The ID of the user.
         * @param {androidenterprise(v1).Entitlement} params.resource Request body data
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
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/entitlements/{entitlementId}',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId', 'entitlementId'],
                pathParams: ['enterpriseId', 'entitlementId', 'userId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.grouplicenses = {
        /**
         * androidenterprise.grouplicenses.get
         *
         * @desc Retrieves details of an enterprise's group license for a product.
         *
         * @alias androidenterprise.grouplicenses.get
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.groupLicenseId The ID of the product the group license is for, e.g. "app:com.google.android.gm".
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
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/groupLicenses/{groupLicenseId}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'groupLicenseId'],
                pathParams: ['enterpriseId', 'groupLicenseId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.grouplicenses.list
         *
         * @desc Retrieves IDs of all products for which the enterprise has a group license.
         *
         * @alias androidenterprise.grouplicenses.list
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
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
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/groupLicenses',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId'],
                pathParams: ['enterpriseId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.grouplicenseusers = {
        /**
         * androidenterprise.grouplicenseusers.list
         *
         * @desc Retrieves the IDs of the users who have been granted entitlements under the license.
         *
         * @alias androidenterprise.grouplicenseusers.list
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.groupLicenseId The ID of the product the group license is for, e.g. "app:com.google.android.gm".
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
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/groupLicenses/{groupLicenseId}/users',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'groupLicenseId'],
                pathParams: ['enterpriseId', 'groupLicenseId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.installs = {
        /**
         * androidenterprise.installs.delete
         *
         * @desc Requests to remove an app from a device. A call to get or list will still show the app as installed on the device until it is actually removed.
         *
         * @alias androidenterprise.installs.delete
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.deviceId The Android ID of the device.
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.installId The ID of the product represented by the install, e.g. "app:com.google.android.gm".
         * @param {string} params.userId The ID of the user.
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
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/installs/{installId}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId', 'deviceId', 'installId'],
                pathParams: ['deviceId', 'enterpriseId', 'installId', 'userId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.installs.get
         *
         * @desc Retrieves details of an installation of an app on a device.
         *
         * @alias androidenterprise.installs.get
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.deviceId The Android ID of the device.
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.installId The ID of the product represented by the install, e.g. "app:com.google.android.gm".
         * @param {string} params.userId The ID of the user.
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
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/installs/{installId}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId', 'deviceId', 'installId'],
                pathParams: ['deviceId', 'enterpriseId', 'installId', 'userId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.installs.list
         *
         * @desc Retrieves the details of all apps installed on the specified device.
         *
         * @alias androidenterprise.installs.list
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.deviceId The Android ID of the device.
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.userId The ID of the user.
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
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/installs',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId', 'deviceId'],
                pathParams: ['deviceId', 'enterpriseId', 'userId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.installs.patch
         *
         * @desc Requests to install the latest version of an app to a device. If the app is already installed, then it is updated to the latest version if necessary. This method supports patch semantics.
         *
         * @alias androidenterprise.installs.patch
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.deviceId The Android ID of the device.
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.installId The ID of the product represented by the install, e.g. "app:com.google.android.gm".
         * @param {string} params.userId The ID of the user.
         * @param {androidenterprise(v1).Install} params.resource Request body data
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
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/installs/{installId}',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId', 'deviceId', 'installId'],
                pathParams: ['deviceId', 'enterpriseId', 'installId', 'userId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.installs.update
         *
         * @desc Requests to install the latest version of an app to a device. If the app is already installed, then it is updated to the latest version if necessary.
         *
         * @alias androidenterprise.installs.update
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.deviceId The Android ID of the device.
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.installId The ID of the product represented by the install, e.g. "app:com.google.android.gm".
         * @param {string} params.userId The ID of the user.
         * @param {androidenterprise(v1).Install} params.resource Request body data
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
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/installs/{installId}',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId', 'deviceId', 'installId'],
                pathParams: ['deviceId', 'enterpriseId', 'installId', 'userId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.managedconfigurationsfordevice = {
        /**
         * androidenterprise.managedconfigurationsfordevice.delete
         *
         * @desc Removes a per-device managed configuration for an app for the specified device.
         *
         * @alias androidenterprise.managedconfigurationsfordevice.delete
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.deviceId The Android ID of the device.
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.managedConfigurationForDeviceId The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".
         * @param {string} params.userId The ID of the user.
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
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/managedConfigurationsForDevice/{managedConfigurationForDeviceId}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId', 'deviceId', 'managedConfigurationForDeviceId'],
                pathParams: ['deviceId', 'enterpriseId', 'managedConfigurationForDeviceId', 'userId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.managedconfigurationsfordevice.get
         *
         * @desc Retrieves details of a per-device managed configuration.
         *
         * @alias androidenterprise.managedconfigurationsfordevice.get
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.deviceId The Android ID of the device.
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.managedConfigurationForDeviceId The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".
         * @param {string} params.userId The ID of the user.
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
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/managedConfigurationsForDevice/{managedConfigurationForDeviceId}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId', 'deviceId', 'managedConfigurationForDeviceId'],
                pathParams: ['deviceId', 'enterpriseId', 'managedConfigurationForDeviceId', 'userId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.managedconfigurationsfordevice.list
         *
         * @desc Lists all the per-device managed configurations for the specified device. Only the ID is set.
         *
         * @alias androidenterprise.managedconfigurationsfordevice.list
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.deviceId The Android ID of the device.
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.userId The ID of the user.
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
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/managedConfigurationsForDevice',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId', 'deviceId'],
                pathParams: ['deviceId', 'enterpriseId', 'userId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.managedconfigurationsfordevice.patch
         *
         * @desc Adds or updates a per-device managed configuration for an app for the specified device. This method supports patch semantics.
         *
         * @alias androidenterprise.managedconfigurationsfordevice.patch
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.deviceId The Android ID of the device.
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.managedConfigurationForDeviceId The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".
         * @param {string} params.userId The ID of the user.
         * @param {androidenterprise(v1).ManagedConfiguration} params.resource Request body data
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
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/managedConfigurationsForDevice/{managedConfigurationForDeviceId}',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId', 'deviceId', 'managedConfigurationForDeviceId'],
                pathParams: ['deviceId', 'enterpriseId', 'managedConfigurationForDeviceId', 'userId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.managedconfigurationsfordevice.update
         *
         * @desc Adds or updates a per-device managed configuration for an app for the specified device.
         *
         * @alias androidenterprise.managedconfigurationsfordevice.update
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.deviceId The Android ID of the device.
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.managedConfigurationForDeviceId The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".
         * @param {string} params.userId The ID of the user.
         * @param {androidenterprise(v1).ManagedConfiguration} params.resource Request body data
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
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/managedConfigurationsForDevice/{managedConfigurationForDeviceId}',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId', 'deviceId', 'managedConfigurationForDeviceId'],
                pathParams: ['deviceId', 'enterpriseId', 'managedConfigurationForDeviceId', 'userId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.managedconfigurationsforuser = {
        /**
         * androidenterprise.managedconfigurationsforuser.delete
         *
         * @desc Removes a per-user managed configuration for an app for the specified user.
         *
         * @alias androidenterprise.managedconfigurationsforuser.delete
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.managedConfigurationForUserId The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".
         * @param {string} params.userId The ID of the user.
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
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/managedConfigurationsForUser/{managedConfigurationForUserId}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId', 'managedConfigurationForUserId'],
                pathParams: ['enterpriseId', 'managedConfigurationForUserId', 'userId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.managedconfigurationsforuser.get
         *
         * @desc Retrieves details of a per-user managed configuration for an app for the specified user.
         *
         * @alias androidenterprise.managedconfigurationsforuser.get
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.managedConfigurationForUserId The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".
         * @param {string} params.userId The ID of the user.
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
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/managedConfigurationsForUser/{managedConfigurationForUserId}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId', 'managedConfigurationForUserId'],
                pathParams: ['enterpriseId', 'managedConfigurationForUserId', 'userId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.managedconfigurationsforuser.list
         *
         * @desc Lists all the per-user managed configurations for the specified user. Only the ID is set.
         *
         * @alias androidenterprise.managedconfigurationsforuser.list
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.userId The ID of the user.
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
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/managedConfigurationsForUser',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId'],
                pathParams: ['enterpriseId', 'userId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.managedconfigurationsforuser.patch
         *
         * @desc Adds or updates a per-user managed configuration for an app for the specified user. This method supports patch semantics.
         *
         * @alias androidenterprise.managedconfigurationsforuser.patch
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.managedConfigurationForUserId The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".
         * @param {string} params.userId The ID of the user.
         * @param {androidenterprise(v1).ManagedConfiguration} params.resource Request body data
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
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/managedConfigurationsForUser/{managedConfigurationForUserId}',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId', 'managedConfigurationForUserId'],
                pathParams: ['enterpriseId', 'managedConfigurationForUserId', 'userId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.managedconfigurationsforuser.update
         *
         * @desc Adds or updates a per-user managed configuration for an app for the specified user.
         *
         * @alias androidenterprise.managedconfigurationsforuser.update
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.managedConfigurationForUserId The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".
         * @param {string} params.userId The ID of the user.
         * @param {androidenterprise(v1).ManagedConfiguration} params.resource Request body data
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
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/managedConfigurationsForUser/{managedConfigurationForUserId}',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId', 'managedConfigurationForUserId'],
                pathParams: ['enterpriseId', 'managedConfigurationForUserId', 'userId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.permissions = {
        /**
         * androidenterprise.permissions.get
         *
         * @desc Retrieves details of an Android app permission for display to an enterprise admin.
         *
         * @alias androidenterprise.permissions.get
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.language The BCP47 tag for the user's preferred language (e.g. "en-US", "de")
         * @param {string} params.permissionId The ID of the permission.
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
                    url: 'https://www.googleapis.com/androidenterprise/v1/permissions/{permissionId}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['permissionId'],
                pathParams: ['permissionId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.products = {
        /**
         * androidenterprise.products.approve
         *
         * @desc Approves the specified product and the relevant app permissions, if any. The maximum number of products that you can approve per enterprise customer is 1,000.  To learn how to use managed Google Play to design and create a store layout to display approved products to your users, see Store Layout Design.
         *
         * @alias androidenterprise.products.approve
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.productId The ID of the product.
         * @param {androidenterprise(v1).ProductsApproveRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        approve: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/approve',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'productId'],
                pathParams: ['enterpriseId', 'productId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.products.generateApprovalUrl
         *
         * @desc Generates a URL that can be rendered in an iframe to display the permissions (if any) of a product. An enterprise admin must view these permissions and accept them on behalf of their organization in order to approve that product.  Admins should accept the displayed permissions by interacting with a separate UI element in the EMM console, which in turn should trigger the use of this URL as the approvalUrlInfo.approvalUrl property in a Products.approve call to approve the product. This URL can only be used to display permissions for up to 1 day.
         *
         * @alias androidenterprise.products.generateApprovalUrl
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string=} params.languageCode The BCP 47 language code used for permission names and descriptions in the returned iframe, for instance "en-US".
         * @param {string} params.productId The ID of the product.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        generateApprovalUrl: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/generateApprovalUrl',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'productId'],
                pathParams: ['enterpriseId', 'productId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.products.get
         *
         * @desc Retrieves details of a product for display to an enterprise admin.
         *
         * @alias androidenterprise.products.get
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string=} params.language The BCP47 tag for the user's preferred language (e.g. "en-US", "de").
         * @param {string} params.productId The ID of the product, e.g. "app:com.google.android.gm".
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
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'productId'],
                pathParams: ['enterpriseId', 'productId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.products.getAppRestrictionsSchema
         *
         * @desc Retrieves the schema that defines the configurable properties for this product. All products have a schema, but this schema may be empty if no managed configurations have been defined. This schema can be used to populate a UI that allows an admin to configure the product. To apply a managed configuration based on the schema obtained using this API, see Managed Configurations through Play.
         *
         * @alias androidenterprise.products.getAppRestrictionsSchema
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string=} params.language The BCP47 tag for the user's preferred language (e.g. "en-US", "de").
         * @param {string} params.productId The ID of the product.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getAppRestrictionsSchema: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/appRestrictionsSchema',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'productId'],
                pathParams: ['enterpriseId', 'productId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.products.getPermissions
         *
         * @desc Retrieves the Android app permissions required by this app.
         *
         * @alias androidenterprise.products.getPermissions
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.productId The ID of the product.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getPermissions: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/permissions',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'productId'],
                pathParams: ['enterpriseId', 'productId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.products.list
         *
         * @desc Finds approved products that match a query, or all approved products if there is no query.
         *
         * @alias androidenterprise.products.list
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.approved Specifies whether to search among all products (false) or among only products that have been approved (true). Only "true" is supported, and should be specified.
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string=} params.language The BCP47 tag for the user's preferred language (e.g. "en-US", "de"). Results are returned in the language best matching the preferred language.
         * @param {integer=} params.maxResults Specifies the maximum number of products that can be returned per request. If not specified, uses a default value of 100, which is also the maximum retrievable within a single response.
         * @param {string=} params.query The search query as typed in the Google Play store search box. If omitted, all approved apps will be returned (using the pagination parameters), including apps that are not available in the store (e.g. unpublished apps).
         * @param {string=} params.token A pagination token is contained in a request''s response when there are more products. The token can be used in a subsequent request to obtain more products, and so forth. This parameter cannot be used in the initial request.
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
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/products',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId'],
                pathParams: ['enterpriseId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.products.unapprove
         *
         * @desc Unapproves the specified product (and the relevant app permissions, if any)
         *
         * @alias androidenterprise.products.unapprove
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.productId The ID of the product.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        unapprove: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/unapprove',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'productId'],
                pathParams: ['enterpriseId', 'productId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.serviceaccountkeys = {
        /**
         * androidenterprise.serviceaccountkeys.delete
         *
         * @desc Removes and invalidates the specified credentials for the service account associated with this enterprise. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount.
         *
         * @alias androidenterprise.serviceaccountkeys.delete
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.keyId The ID of the key.
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
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/serviceAccountKeys/{keyId}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'keyId'],
                pathParams: ['enterpriseId', 'keyId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.serviceaccountkeys.insert
         *
         * @desc Generates new credentials for the service account associated with this enterprise. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount.  Only the type of the key should be populated in the resource to be inserted.
         *
         * @alias androidenterprise.serviceaccountkeys.insert
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {androidenterprise(v1).ServiceAccountKey} params.resource Request body data
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
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/serviceAccountKeys',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['enterpriseId'],
                pathParams: ['enterpriseId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.serviceaccountkeys.list
         *
         * @desc Lists all active credentials for the service account associated with this enterprise. Only the ID and key type are returned. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount.
         *
         * @alias androidenterprise.serviceaccountkeys.list
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
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
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/serviceAccountKeys',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId'],
                pathParams: ['enterpriseId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.storelayoutclusters = {
        /**
         * androidenterprise.storelayoutclusters.delete
         *
         * @desc Deletes a cluster.
         *
         * @alias androidenterprise.storelayoutclusters.delete
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.clusterId The ID of the cluster.
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.pageId The ID of the page.
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
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters/{clusterId}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'pageId', 'clusterId'],
                pathParams: ['clusterId', 'enterpriseId', 'pageId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.storelayoutclusters.get
         *
         * @desc Retrieves details of a cluster.
         *
         * @alias androidenterprise.storelayoutclusters.get
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.clusterId The ID of the cluster.
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.pageId The ID of the page.
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
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters/{clusterId}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'pageId', 'clusterId'],
                pathParams: ['clusterId', 'enterpriseId', 'pageId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.storelayoutclusters.insert
         *
         * @desc Inserts a new cluster in a page.
         *
         * @alias androidenterprise.storelayoutclusters.insert
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.pageId The ID of the page.
         * @param {androidenterprise(v1).StoreCluster} params.resource Request body data
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
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'pageId'],
                pathParams: ['enterpriseId', 'pageId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.storelayoutclusters.list
         *
         * @desc Retrieves the details of all clusters on the specified page.
         *
         * @alias androidenterprise.storelayoutclusters.list
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.pageId The ID of the page.
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
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'pageId'],
                pathParams: ['enterpriseId', 'pageId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.storelayoutclusters.patch
         *
         * @desc Updates a cluster. This method supports patch semantics.
         *
         * @alias androidenterprise.storelayoutclusters.patch
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.clusterId The ID of the cluster.
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.pageId The ID of the page.
         * @param {androidenterprise(v1).StoreCluster} params.resource Request body data
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
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters/{clusterId}',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'pageId', 'clusterId'],
                pathParams: ['clusterId', 'enterpriseId', 'pageId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.storelayoutclusters.update
         *
         * @desc Updates a cluster.
         *
         * @alias androidenterprise.storelayoutclusters.update
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.clusterId The ID of the cluster.
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.pageId The ID of the page.
         * @param {androidenterprise(v1).StoreCluster} params.resource Request body data
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
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters/{clusterId}',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'pageId', 'clusterId'],
                pathParams: ['clusterId', 'enterpriseId', 'pageId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.storelayoutpages = {
        /**
         * androidenterprise.storelayoutpages.delete
         *
         * @desc Deletes a store page.
         *
         * @alias androidenterprise.storelayoutpages.delete
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.pageId The ID of the page.
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
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'pageId'],
                pathParams: ['enterpriseId', 'pageId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.storelayoutpages.get
         *
         * @desc Retrieves details of a store page.
         *
         * @alias androidenterprise.storelayoutpages.get
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.pageId The ID of the page.
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
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'pageId'],
                pathParams: ['enterpriseId', 'pageId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.storelayoutpages.insert
         *
         * @desc Inserts a new store page.
         *
         * @alias androidenterprise.storelayoutpages.insert
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {androidenterprise(v1).StorePage} params.resource Request body data
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
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['enterpriseId'],
                pathParams: ['enterpriseId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.storelayoutpages.list
         *
         * @desc Retrieves the details of all pages in the store.
         *
         * @alias androidenterprise.storelayoutpages.list
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
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
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId'],
                pathParams: ['enterpriseId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.storelayoutpages.patch
         *
         * @desc Updates the content of a store page. This method supports patch semantics.
         *
         * @alias androidenterprise.storelayoutpages.patch
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.pageId The ID of the page.
         * @param {androidenterprise(v1).StorePage} params.resource Request body data
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
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'pageId'],
                pathParams: ['enterpriseId', 'pageId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.storelayoutpages.update
         *
         * @desc Updates the content of a store page.
         *
         * @alias androidenterprise.storelayoutpages.update
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.pageId The ID of the page.
         * @param {androidenterprise(v1).StorePage} params.resource Request body data
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
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'pageId'],
                pathParams: ['enterpriseId', 'pageId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.users = {
        /**
         * androidenterprise.users.delete
         *
         * @desc Deleted an EMM-managed user.
         *
         * @alias androidenterprise.users.delete
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.userId The ID of the user.
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
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId'],
                pathParams: ['enterpriseId', 'userId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.users.generateAuthenticationToken
         *
         * @desc Generates an authentication token which the device policy client can use to provision the given EMM-managed user account on a device. The generated token is single-use and expires after a few minutes.  This call only works with EMM-managed accounts.
         *
         * @alias androidenterprise.users.generateAuthenticationToken
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.userId The ID of the user.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        generateAuthenticationToken: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/authenticationToken',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId'],
                pathParams: ['enterpriseId', 'userId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.users.generateToken
         *
         * @desc Generates a token (activation code) to allow this user to configure their managed account in the Android Setup Wizard. Revokes any previously generated token.  This call only works with Google managed accounts.
         *
         * @alias androidenterprise.users.generateToken
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.userId The ID of the user.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        generateToken: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/token',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId'],
                pathParams: ['enterpriseId', 'userId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.users.get
         *
         * @desc Retrieves a user's details.
         *
         * @alias androidenterprise.users.get
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.userId The ID of the user.
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
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId'],
                pathParams: ['enterpriseId', 'userId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.users.getAvailableProductSet
         *
         * @desc Retrieves the set of products a user is entitled to access.
         *
         * @alias androidenterprise.users.getAvailableProductSet
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.userId The ID of the user.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getAvailableProductSet: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/availableProductSet',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId'],
                pathParams: ['enterpriseId', 'userId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.users.insert
         *
         * @desc Creates a new EMM-managed user.  The Users resource passed in the body of the request should include an accountIdentifier and an accountType. If a corresponding user already exists with the same account identifier, the user will be updated with the resource. In this case only the displayName field can be changed.
         *
         * @alias androidenterprise.users.insert
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {androidenterprise(v1).User} params.resource Request body data
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
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/users',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['enterpriseId'],
                pathParams: ['enterpriseId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.users.list
         *
         * @desc Looks up a user by primary email address. This is only supported for Google-managed users. Lookup of the id is not needed for EMM-managed users because the id is already returned in the result of the Users.insert call.
         *
         * @alias androidenterprise.users.list
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.email The exact primary email address of the user to look up.
         * @param {string} params.enterpriseId The ID of the enterprise.
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
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/users',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'email'],
                pathParams: ['enterpriseId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.users.patch
         *
         * @desc Updates the details of an EMM-managed user.  Can be used with EMM-managed users only (not Google managed users). Pass the new details in the Users resource in the request body. Only the displayName field can be changed. Other fields must either be unset or have the currently active value. This method supports patch semantics.
         *
         * @alias androidenterprise.users.patch
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.userId The ID of the user.
         * @param {androidenterprise(v1).User} params.resource Request body data
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
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId'],
                pathParams: ['enterpriseId', 'userId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.users.revokeToken
         *
         * @desc Revokes a previously generated token (activation code) for the user.
         *
         * @alias androidenterprise.users.revokeToken
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.userId The ID of the user.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        revokeToken: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/token',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId'],
                pathParams: ['enterpriseId', 'userId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.users.setAvailableProductSet
         *
         * @desc Modifies the set of products that a user is entitled to access (referred to as whitelisted products). Only products that are approved or products that were previously approved (products with revoked approval) can be whitelisted.
         *
         * @alias androidenterprise.users.setAvailableProductSet
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.userId The ID of the user.
         * @param {androidenterprise(v1).ProductSet} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setAvailableProductSet: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/availableProductSet',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId'],
                pathParams: ['enterpriseId', 'userId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidenterprise.users.update
         *
         * @desc Updates the details of an EMM-managed user.  Can be used with EMM-managed users only (not Google managed users). Pass the new details in the Users resource in the request body. Only the displayName field can be changed. Other fields must either be unset or have the currently active value.
         *
         * @alias androidenterprise.users.update
         * @memberOf! androidenterprise(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.enterpriseId The ID of the enterprise.
         * @param {string} params.userId The ID of the user.
         * @param {androidenterprise(v1).User} params.resource Request body data
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
                    url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['enterpriseId', 'userId'],
                pathParams: ['enterpriseId', 'userId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
}
module.exports = Androidenterprise;
//# sourceMappingURL=v1.js.map