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
 * Google Identity Toolkit API
 *
 * Help the third party sites to implement federated login.
 *
 * @example
 * const google = require('googleapis');
 * const identitytoolkit = google.identitytoolkit('v3');
 *
 * @namespace identitytoolkit
 * @type {Function}
 * @version v3
 * @variation v3
 * @param {object=} options Options for Identitytoolkit
 */
function Identitytoolkit(options) {
    const self = this;
    self._options = options || {};
    self.relyingparty = {
        /**
         * identitytoolkit.relyingparty.createAuthUri
         *
         * @desc Creates the URI used by the IdP to authenticate the user.
         *
         * @alias identitytoolkit.relyingparty.createAuthUri
         * @memberOf! identitytoolkit(v3)
         *
         * @param {object} params Parameters for request
         * @param {identitytoolkit(v3).IdentitytoolkitRelyingpartyCreateAuthUriRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        createAuthUri: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/createAuthUri',
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
         * identitytoolkit.relyingparty.deleteAccount
         *
         * @desc Delete user account.
         *
         * @alias identitytoolkit.relyingparty.deleteAccount
         * @memberOf! identitytoolkit(v3)
         *
         * @param {object} params Parameters for request
         * @param {identitytoolkit(v3).IdentitytoolkitRelyingpartyDeleteAccountRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        deleteAccount: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/deleteAccount',
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
         * identitytoolkit.relyingparty.downloadAccount
         *
         * @desc Batch download user accounts.
         *
         * @alias identitytoolkit.relyingparty.downloadAccount
         * @memberOf! identitytoolkit(v3)
         *
         * @param {object} params Parameters for request
         * @param {identitytoolkit(v3).IdentitytoolkitRelyingpartyDownloadAccountRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        downloadAccount: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/downloadAccount',
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
         * identitytoolkit.relyingparty.getAccountInfo
         *
         * @desc Returns the account info.
         *
         * @alias identitytoolkit.relyingparty.getAccountInfo
         * @memberOf! identitytoolkit(v3)
         *
         * @param {object} params Parameters for request
         * @param {identitytoolkit(v3).IdentitytoolkitRelyingpartyGetAccountInfoRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getAccountInfo: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/getAccountInfo',
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
         * identitytoolkit.relyingparty.getOobConfirmationCode
         *
         * @desc Get a code for user action confirmation.
         *
         * @alias identitytoolkit.relyingparty.getOobConfirmationCode
         * @memberOf! identitytoolkit(v3)
         *
         * @param {object} params Parameters for request
         * @param {identitytoolkit(v3).Relyingparty} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getOobConfirmationCode: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/getOobConfirmationCode',
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
         * identitytoolkit.relyingparty.getProjectConfig
         *
         * @desc Get project configuration.
         *
         * @alias identitytoolkit.relyingparty.getProjectConfig
         * @memberOf! identitytoolkit(v3)
         *
         * @param {object=} params Parameters for request
         * @param {string=} params.delegatedProjectNumber Delegated GCP project number of the request.
         * @param {string=} params.projectNumber GCP project number of the request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getProjectConfig: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/getProjectConfig',
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
         * identitytoolkit.relyingparty.getPublicKeys
         *
         * @desc Get token signing public key.
         *
         * @alias identitytoolkit.relyingparty.getPublicKeys
         * @memberOf! identitytoolkit(v3)
         *
         * @param {object=} params Parameters for request
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getPublicKeys: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/publicKeys',
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
         * identitytoolkit.relyingparty.getRecaptchaParam
         *
         * @desc Get recaptcha secure param.
         *
         * @alias identitytoolkit.relyingparty.getRecaptchaParam
         * @memberOf! identitytoolkit(v3)
         *
         * @param {object=} params Parameters for request
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getRecaptchaParam: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/getRecaptchaParam',
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
         * identitytoolkit.relyingparty.resetPassword
         *
         * @desc Reset password for a user.
         *
         * @alias identitytoolkit.relyingparty.resetPassword
         * @memberOf! identitytoolkit(v3)
         *
         * @param {object} params Parameters for request
         * @param {identitytoolkit(v3).IdentitytoolkitRelyingpartyResetPasswordRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        resetPassword: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/resetPassword',
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
         * identitytoolkit.relyingparty.setAccountInfo
         *
         * @desc Set account info for a user.
         *
         * @alias identitytoolkit.relyingparty.setAccountInfo
         * @memberOf! identitytoolkit(v3)
         *
         * @param {object} params Parameters for request
         * @param {identitytoolkit(v3).IdentitytoolkitRelyingpartySetAccountInfoRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setAccountInfo: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/setAccountInfo',
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
         * identitytoolkit.relyingparty.setProjectConfig
         *
         * @desc Set project configuration.
         *
         * @alias identitytoolkit.relyingparty.setProjectConfig
         * @memberOf! identitytoolkit(v3)
         *
         * @param {object} params Parameters for request
         * @param {identitytoolkit(v3).IdentitytoolkitRelyingpartySetProjectConfigRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setProjectConfig: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/setProjectConfig',
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
         * identitytoolkit.relyingparty.signOutUser
         *
         * @desc Sign out user.
         *
         * @alias identitytoolkit.relyingparty.signOutUser
         * @memberOf! identitytoolkit(v3)
         *
         * @param {object} params Parameters for request
         * @param {identitytoolkit(v3).IdentitytoolkitRelyingpartySignOutUserRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        signOutUser: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signOutUser',
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
         * identitytoolkit.relyingparty.signupNewUser
         *
         * @desc Signup new user.
         *
         * @alias identitytoolkit.relyingparty.signupNewUser
         * @memberOf! identitytoolkit(v3)
         *
         * @param {object} params Parameters for request
         * @param {identitytoolkit(v3).IdentitytoolkitRelyingpartySignupNewUserRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        signupNewUser: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser',
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
         * identitytoolkit.relyingparty.uploadAccount
         *
         * @desc Batch upload existing user accounts.
         *
         * @alias identitytoolkit.relyingparty.uploadAccount
         * @memberOf! identitytoolkit(v3)
         *
         * @param {object} params Parameters for request
         * @param {identitytoolkit(v3).IdentitytoolkitRelyingpartyUploadAccountRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        uploadAccount: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/uploadAccount',
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
         * identitytoolkit.relyingparty.verifyAssertion
         *
         * @desc Verifies the assertion returned by the IdP.
         *
         * @alias identitytoolkit.relyingparty.verifyAssertion
         * @memberOf! identitytoolkit(v3)
         *
         * @param {object} params Parameters for request
         * @param {identitytoolkit(v3).IdentitytoolkitRelyingpartyVerifyAssertionRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        verifyAssertion: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyAssertion',
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
         * identitytoolkit.relyingparty.verifyCustomToken
         *
         * @desc Verifies the developer asserted ID token.
         *
         * @alias identitytoolkit.relyingparty.verifyCustomToken
         * @memberOf! identitytoolkit(v3)
         *
         * @param {object} params Parameters for request
         * @param {identitytoolkit(v3).IdentitytoolkitRelyingpartyVerifyCustomTokenRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        verifyCustomToken: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyCustomToken',
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
         * identitytoolkit.relyingparty.verifyPassword
         *
         * @desc Verifies the user entered password.
         *
         * @alias identitytoolkit.relyingparty.verifyPassword
         * @memberOf! identitytoolkit(v3)
         *
         * @param {object} params Parameters for request
         * @param {identitytoolkit(v3).IdentitytoolkitRelyingpartyVerifyPasswordRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        verifyPassword: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword',
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
module.exports = Identitytoolkit;
//# sourceMappingURL=v3.js.map