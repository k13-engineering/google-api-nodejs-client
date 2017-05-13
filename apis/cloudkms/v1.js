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
 * Google Cloud Key Management Service (KMS) API
 *
 * Manages encryption for your cloud services the same way you do on-premise. You can generate, use, rotate, and destroy AES256 encryption keys.
 *
 * @example
 * const google = require('googleapis');
 * const cloudkms = google.cloudkms('v1');
 *
 * @namespace cloudkms
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Cloudkms
 */
function Cloudkms(options) {
    const self = this;
    self._options = options || {};
    self.projects = {
        locations: {
            /**
             * cloudkms.projects.locations.list
             *
             * @desc Lists information about the supported locations for this service.
             *
             * @alias cloudkms.projects.locations.list
             * @memberOf! cloudkms(v1)
             *
             * @param {object} params Parameters for request
             * @param {string=} params.filter The standard list filter.
             * @param {string} params.name The resource that owns the locations collection, if applicable.
             * @param {string=} params.pageToken The standard list page token.
             * @param {integer=} params.pageSize The standard list page size.
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
                        url: 'https://cloudkms.googleapis.com/v1/{name}/locations',
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
             * cloudkms.projects.locations.get
             *
             * @desc Get information about a location.
             *
             * @alias cloudkms.projects.locations.get
             * @memberOf! cloudkms(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name Resource name for the location.
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
                        url: 'https://cloudkms.googleapis.com/v1/{name}',
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['name'],
                    pathParams: ['name'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            keyRings: {
                /**
                 * cloudkms.projects.locations.keyRings.create
                 *
                 * @desc Create a new KeyRing in a given Project and Location.
                 *
                 * @alias cloudkms.projects.locations.keyRings.create
                 * @memberOf! cloudkms(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.parent Required. The resource name of the location associated with the KeyRings, in the format `projects/x/locations/x`.
                 * @param {string=} params.keyRingId Required. It must be unique within a location and match the regular expression `[a-zA-Z0-9_-]{1,63}`
                 * @param {cloudkms(v1).KeyRing} params.resource Request body data
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
                            url: 'https://cloudkms.googleapis.com/v1/{parent}/keyRings',
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
                 * cloudkms.projects.locations.keyRings.setIamPolicy
                 *
                 * @desc Sets the access control policy on the specified resource. Replaces any existing policy.
                 *
                 * @alias cloudkms.projects.locations.keyRings.setIamPolicy
                 * @memberOf! cloudkms(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
                 * @param {cloudkms(v1).SetIamPolicyRequest} params.resource Request body data
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
                            url: 'https://cloudkms.googleapis.com/v1/{resource}:setIamPolicy',
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
                 * cloudkms.projects.locations.keyRings.getIamPolicy
                 *
                 * @desc Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
                 *
                 * @alias cloudkms.projects.locations.keyRings.getIamPolicy
                 * @memberOf! cloudkms(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
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
                            url: 'https://cloudkms.googleapis.com/v1/{resource}:getIamPolicy',
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['resource'],
                        pathParams: ['resource'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * cloudkms.projects.locations.keyRings.get
                 *
                 * @desc Returns metadata for a given KeyRing.
                 *
                 * @alias cloudkms.projects.locations.keyRings.get
                 * @memberOf! cloudkms(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name The name of the KeyRing to get.
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
                            url: 'https://cloudkms.googleapis.com/v1/{name}',
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
                 * cloudkms.projects.locations.keyRings.testIamPermissions
                 *
                 * @desc Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.  Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
                 *
                 * @alias cloudkms.projects.locations.keyRings.testIamPermissions
                 * @memberOf! cloudkms(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
                 * @param {cloudkms(v1).TestIamPermissionsRequest} params.resource Request body data
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
                            url: 'https://cloudkms.googleapis.com/v1/{resource}:testIamPermissions',
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
                 * cloudkms.projects.locations.keyRings.list
                 *
                 * @desc Lists KeyRings.
                 *
                 * @alias cloudkms.projects.locations.keyRings.list
                 * @memberOf! cloudkms(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.parent Required. The resource name of the location associated with the KeyRings, in the format `projects/x/locations/x`.
                 * @param {string=} params.pageToken Optional pagination token, returned earlier via ListKeyRingsResponse.next_page_token.
                 * @param {integer=} params.pageSize Optional limit on the number of KeyRings to include in the response.  Further KeyRings can subsequently be obtained by including the ListKeyRingsResponse.next_page_token in a subsequent request.  If unspecified, the server will pick an appropriate default.
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
                            url: 'https://cloudkms.googleapis.com/v1/{parent}/keyRings',
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['parent'],
                        pathParams: ['parent'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                cryptoKeys: {
                    /**
                     * cloudkms.projects.locations.keyRings.cryptoKeys.list
                     *
                     * @desc Lists CryptoKeys.
                     *
                     * @alias cloudkms.projects.locations.keyRings.cryptoKeys.list
                     * @memberOf! cloudkms(v1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string=} params.pageToken Optional pagination token, returned earlier via ListCryptoKeysResponse.next_page_token.
                     * @param {integer=} params.pageSize Optional limit on the number of CryptoKeys to include in the response.  Further CryptoKeys can subsequently be obtained by including the ListCryptoKeysResponse.next_page_token in a subsequent request.  If unspecified, the server will pick an appropriate default.
                     * @param {string} params.parent Required. The resource name of the KeyRing to list, in the format `projects/x/locations/x/keyRings/x`.
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
                                url: 'https://cloudkms.googleapis.com/v1/{parent}/cryptoKeys',
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
                     * cloudkms.projects.locations.keyRings.cryptoKeys.encrypt
                     *
                     * @desc Encrypt data, so that it can only be recovered by a call to Decrypt.
                     *
                     * @alias cloudkms.projects.locations.keyRings.cryptoKeys.encrypt
                     * @memberOf! cloudkms(v1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.name Required. The resource name of the CryptoKey or CryptoKeyVersion to use for encryption.  If a CryptoKey is specified, the server will use its primary version.
                     * @param {cloudkms(v1).EncryptRequest} params.resource Request body data
                     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                     * @param {callback} callback The callback that handles the response.
                     * @return {object} Request object
                     */
                    encrypt: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options || (options = {});
                        const parameters = {
                            options: Object.assign({
                                url: 'https://cloudkms.googleapis.com/v1/{name}:encrypt',
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
                     * cloudkms.projects.locations.keyRings.cryptoKeys.create
                     *
                     * @desc Create a new CryptoKey within a KeyRing.  CryptoKey.purpose is required.
                     *
                     * @alias cloudkms.projects.locations.keyRings.cryptoKeys.create
                     * @memberOf! cloudkms(v1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.parent Required. The name of the KeyRing associated with the CryptoKeys.
                     * @param {string=} params.cryptoKeyId Required. It must be unique within a KeyRing and match the regular expression `[a-zA-Z0-9_-]{1,63}`
                     * @param {cloudkms(v1).CryptoKey} params.resource Request body data
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
                                url: 'https://cloudkms.googleapis.com/v1/{parent}/cryptoKeys',
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
                     * cloudkms.projects.locations.keyRings.cryptoKeys.setIamPolicy
                     *
                     * @desc Sets the access control policy on the specified resource. Replaces any existing policy.
                     *
                     * @alias cloudkms.projects.locations.keyRings.cryptoKeys.setIamPolicy
                     * @memberOf! cloudkms(v1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
                     * @param {cloudkms(v1).SetIamPolicyRequest} params.resource Request body data
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
                                url: 'https://cloudkms.googleapis.com/v1/{resource}:setIamPolicy',
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
                     * cloudkms.projects.locations.keyRings.cryptoKeys.updatePrimaryVersion
                     *
                     * @desc Update the version of a CryptoKey that will be used in Encrypt
                     *
                     * @alias cloudkms.projects.locations.keyRings.cryptoKeys.updatePrimaryVersion
                     * @memberOf! cloudkms(v1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.name The resource name of the CryptoKey to update.
                     * @param {cloudkms(v1).UpdateCryptoKeyPrimaryVersionRequest} params.resource Request body data
                     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                     * @param {callback} callback The callback that handles the response.
                     * @return {object} Request object
                     */
                    updatePrimaryVersion: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options || (options = {});
                        const parameters = {
                            options: Object.assign({
                                url: 'https://cloudkms.googleapis.com/v1/{name}:updatePrimaryVersion',
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
                     * cloudkms.projects.locations.keyRings.cryptoKeys.getIamPolicy
                     *
                     * @desc Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
                     *
                     * @alias cloudkms.projects.locations.keyRings.cryptoKeys.getIamPolicy
                     * @memberOf! cloudkms(v1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
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
                                url: 'https://cloudkms.googleapis.com/v1/{resource}:getIamPolicy',
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['resource'],
                            pathParams: ['resource'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    /**
                     * cloudkms.projects.locations.keyRings.cryptoKeys.patch
                     *
                     * @desc Update a CryptoKey.
                     *
                     * @alias cloudkms.projects.locations.keyRings.cryptoKeys.patch
                     * @memberOf! cloudkms(v1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string=} params.updateMask Required list of fields to be updated in this request.
                     * @param {string} params.name Output only. The resource name for this CryptoKey in the format `projects/x/locations/x/keyRings/x/cryptoKeys/x`.
                     * @param {cloudkms(v1).CryptoKey} params.resource Request body data
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
                                url: 'https://cloudkms.googleapis.com/v1/{name}',
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
                     * cloudkms.projects.locations.keyRings.cryptoKeys.get
                     *
                     * @desc Returns metadata for a given CryptoKey, as well as its primary CryptoKeyVersion.
                     *
                     * @alias cloudkms.projects.locations.keyRings.cryptoKeys.get
                     * @memberOf! cloudkms(v1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.name The name of the CryptoKey to get.
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
                                url: 'https://cloudkms.googleapis.com/v1/{name}',
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
                     * cloudkms.projects.locations.keyRings.cryptoKeys.testIamPermissions
                     *
                     * @desc Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.  Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
                     *
                     * @alias cloudkms.projects.locations.keyRings.cryptoKeys.testIamPermissions
                     * @memberOf! cloudkms(v1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
                     * @param {cloudkms(v1).TestIamPermissionsRequest} params.resource Request body data
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
                                url: 'https://cloudkms.googleapis.com/v1/{resource}:testIamPermissions',
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
                     * cloudkms.projects.locations.keyRings.cryptoKeys.decrypt
                     *
                     * @desc Decrypt data that was protected by Encrypt.
                     *
                     * @alias cloudkms.projects.locations.keyRings.cryptoKeys.decrypt
                     * @memberOf! cloudkms(v1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.name Required. The resource name of the CryptoKey to use for decryption. The server will choose the appropriate version.
                     * @param {cloudkms(v1).DecryptRequest} params.resource Request body data
                     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                     * @param {callback} callback The callback that handles the response.
                     * @return {object} Request object
                     */
                    decrypt: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options || (options = {});
                        const parameters = {
                            options: Object.assign({
                                url: 'https://cloudkms.googleapis.com/v1/{name}:decrypt',
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['name'],
                            pathParams: ['name'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    cryptoKeyVersions: {
                        /**
                         * cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.list
                         *
                         * @desc Lists CryptoKeyVersions.
                         *
                         * @alias cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.list
                         * @memberOf! cloudkms(v1)
                         *
                         * @param {object} params Parameters for request
                         * @param {string} params.parent Required. The resource name of the CryptoKey to list, in the format `projects/x/locations/x/keyRings/x/cryptoKeys/x`.
                         * @param {string=} params.pageToken Optional pagination token, returned earlier via ListCryptoKeyVersionsResponse.next_page_token.
                         * @param {integer=} params.pageSize Optional limit on the number of CryptoKeyVersions to include in the response. Further CryptoKeyVersions can subsequently be obtained by including the ListCryptoKeyVersionsResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.
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
                                    url: 'https://cloudkms.googleapis.com/v1/{parent}/cryptoKeyVersions',
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
                         * cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.destroy
                         *
                         * @desc Schedule a CryptoKeyVersion for destruction.  Upon calling this method, CryptoKeyVersion.state will be set to DESTROY_SCHEDULED and destroy_time will be set to a time 24 hours in the future, at which point the state will be changed to DESTROYED, and the key material will be irrevocably destroyed.  Before the destroy_time is reached, RestoreCryptoKeyVersion may be called to reverse the process.
                         *
                         * @alias cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.destroy
                         * @memberOf! cloudkms(v1)
                         *
                         * @param {object} params Parameters for request
                         * @param {string} params.name The resource name of the CryptoKeyVersion to destroy.
                         * @param {cloudkms(v1).DestroyCryptoKeyVersionRequest} params.resource Request body data
                         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                         * @param {callback} callback The callback that handles the response.
                         * @return {object} Request object
                         */
                        destroy: function (params, options, callback) {
                            if (typeof options === 'function') {
                                callback = options;
                                options = {};
                            }
                            options || (options = {});
                            const parameters = {
                                options: Object.assign({
                                    url: 'https://cloudkms.googleapis.com/v1/{name}:destroy',
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
                         * cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.create
                         *
                         * @desc Create a new CryptoKeyVersion in a CryptoKey.  The server will assign the next sequential id. If unset, state will be set to ENABLED.
                         *
                         * @alias cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.create
                         * @memberOf! cloudkms(v1)
                         *
                         * @param {object} params Parameters for request
                         * @param {string} params.parent Required. The name of the CryptoKey associated with the CryptoKeyVersions.
                         * @param {cloudkms(v1).CryptoKeyVersion} params.resource Request body data
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
                                    url: 'https://cloudkms.googleapis.com/v1/{parent}/cryptoKeyVersions',
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
                         * cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.restore
                         *
                         * @desc Restore a CryptoKeyVersion in the DESTROY_SCHEDULED, state.  Upon restoration of the CryptoKeyVersion, state will be set to DISABLED, and destroy_time will be cleared.
                         *
                         * @alias cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.restore
                         * @memberOf! cloudkms(v1)
                         *
                         * @param {object} params Parameters for request
                         * @param {string} params.name The resource name of the CryptoKeyVersion to restore.
                         * @param {cloudkms(v1).RestoreCryptoKeyVersionRequest} params.resource Request body data
                         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                         * @param {callback} callback The callback that handles the response.
                         * @return {object} Request object
                         */
                        restore: function (params, options, callback) {
                            if (typeof options === 'function') {
                                callback = options;
                                options = {};
                            }
                            options || (options = {});
                            const parameters = {
                                options: Object.assign({
                                    url: 'https://cloudkms.googleapis.com/v1/{name}:restore',
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
                         * cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.get
                         *
                         * @desc Returns metadata for a given CryptoKeyVersion.
                         *
                         * @alias cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.get
                         * @memberOf! cloudkms(v1)
                         *
                         * @param {object} params Parameters for request
                         * @param {string} params.name The name of the CryptoKeyVersion to get.
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
                                    url: 'https://cloudkms.googleapis.com/v1/{name}',
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
                         * cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.patch
                         *
                         * @desc Update a CryptoKeyVersion's metadata.  state may be changed between ENABLED and DISABLED using this method. See DestroyCryptoKeyVersion and RestoreCryptoKeyVersion to move between other states.
                         *
                         * @alias cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.patch
                         * @memberOf! cloudkms(v1)
                         *
                         * @param {object} params Parameters for request
                         * @param {string} params.name Output only. The resource name for this CryptoKeyVersion in the format `projects/x/locations/x/keyRings/x/cryptoKeys/x/cryptoKeyVersions/x`.
                         * @param {string=} params.updateMask Required list of fields to be updated in this request.
                         * @param {cloudkms(v1).CryptoKeyVersion} params.resource Request body data
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
                                    url: 'https://cloudkms.googleapis.com/v1/{name}',
                                    method: 'PATCH'
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
            }
        }
    };
}
module.exports = Cloudkms;
//# sourceMappingURL=v1.js.map