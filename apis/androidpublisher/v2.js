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
 * Google Play Developer API
 *
 * Lets Android application developers access their Google Play accounts.
 *
 * @example
 * const google = require('googleapis');
 * const androidpublisher = google.androidpublisher('v2');
 *
 * @namespace androidpublisher
 * @type {Function}
 * @version v2
 * @variation v2
 * @param {object=} options Options for Androidpublisher
 */
function Androidpublisher(options) {
    const self = this;
    self._options = options || {};
    self.edits = {
        /**
         * androidpublisher.edits.commit
         *
         * @desc Commits/applies the changes made in this edit back to the app.
         *
         * @alias androidpublisher.edits.commit
         * @memberOf! androidpublisher(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.editId Unique identifier for this edit.
         * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        commit: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}:commit',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['packageName', 'editId'],
                pathParams: ['editId', 'packageName'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidpublisher.edits.delete
         *
         * @desc Deletes an edit for an app. Creating a new edit will automatically delete any of your previous edits so this method need only be called if you want to preemptively abandon an edit.
         *
         * @alias androidpublisher.edits.delete
         * @memberOf! androidpublisher(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.editId Unique identifier for this edit.
         * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
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
                    url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['packageName', 'editId'],
                pathParams: ['editId', 'packageName'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidpublisher.edits.get
         *
         * @desc Returns information about the edit specified. Calls will fail if the edit is no long active (e.g. has been deleted, superseded or expired).
         *
         * @alias androidpublisher.edits.get
         * @memberOf! androidpublisher(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.editId Unique identifier for this edit.
         * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
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
                    url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['packageName', 'editId'],
                pathParams: ['editId', 'packageName'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidpublisher.edits.insert
         *
         * @desc Creates a new edit for an app, populated with the app's current state.
         *
         * @alias androidpublisher.edits.insert
         * @memberOf! androidpublisher(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
         * @param {androidpublisher(v2).AppEdit} params.resource Request body data
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
                    url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['packageName'],
                pathParams: ['packageName'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidpublisher.edits.validate
         *
         * @desc Checks that the edit can be successfully committed. The edit's changes are not applied to the live app.
         *
         * @alias androidpublisher.edits.validate
         * @memberOf! androidpublisher(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.editId Unique identifier for this edit.
         * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
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
                    url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}:validate',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['packageName', 'editId'],
                pathParams: ['editId', 'packageName'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        apklistings: {
            /**
             * androidpublisher.edits.apklistings.delete
             *
             * @desc Deletes the APK-specific localized listing for a specified APK and language code.
             *
             * @alias androidpublisher.edits.apklistings.delete
             * @memberOf! androidpublisher(v2)
             *
             * @param {object} params Parameters for request
             * @param {integer} params.apkVersionCode The APK version code whose APK-specific listings should be read or modified.
             * @param {string} params.editId Unique identifier for this edit.
             * @param {string} params.language The language code (a BCP-47 language tag) of the APK-specific localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
             * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
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
                        url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/listings/{language}',
                        method: 'DELETE'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'editId', 'apkVersionCode', 'language'],
                    pathParams: ['apkVersionCode', 'editId', 'language', 'packageName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * androidpublisher.edits.apklistings.deleteall
             *
             * @desc Deletes all the APK-specific localized listings for a specified APK.
             *
             * @alias androidpublisher.edits.apklistings.deleteall
             * @memberOf! androidpublisher(v2)
             *
             * @param {object} params Parameters for request
             * @param {integer} params.apkVersionCode The APK version code whose APK-specific listings should be read or modified.
             * @param {string} params.editId Unique identifier for this edit.
             * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            deleteall: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const parameters = {
                    options: Object.assign({
                        url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/listings',
                        method: 'DELETE'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'editId', 'apkVersionCode'],
                    pathParams: ['apkVersionCode', 'editId', 'packageName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * androidpublisher.edits.apklistings.get
             *
             * @desc Fetches the APK-specific localized listing for a specified APK and language code.
             *
             * @alias androidpublisher.edits.apklistings.get
             * @memberOf! androidpublisher(v2)
             *
             * @param {object} params Parameters for request
             * @param {integer} params.apkVersionCode The APK version code whose APK-specific listings should be read or modified.
             * @param {string} params.editId Unique identifier for this edit.
             * @param {string} params.language The language code (a BCP-47 language tag) of the APK-specific localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
             * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
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
                        url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/listings/{language}',
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'editId', 'apkVersionCode', 'language'],
                    pathParams: ['apkVersionCode', 'editId', 'language', 'packageName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * androidpublisher.edits.apklistings.list
             *
             * @desc Lists all the APK-specific localized listings for a specified APK.
             *
             * @alias androidpublisher.edits.apklistings.list
             * @memberOf! androidpublisher(v2)
             *
             * @param {object} params Parameters for request
             * @param {integer} params.apkVersionCode The APK version code whose APK-specific listings should be read or modified.
             * @param {string} params.editId Unique identifier for this edit.
             * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
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
                        url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/listings',
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'editId', 'apkVersionCode'],
                    pathParams: ['apkVersionCode', 'editId', 'packageName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * androidpublisher.edits.apklistings.patch
             *
             * @desc Updates or creates the APK-specific localized listing for a specified APK and language code. This method supports patch semantics.
             *
             * @alias androidpublisher.edits.apklistings.patch
             * @memberOf! androidpublisher(v2)
             *
             * @param {object} params Parameters for request
             * @param {integer} params.apkVersionCode The APK version code whose APK-specific listings should be read or modified.
             * @param {string} params.editId Unique identifier for this edit.
             * @param {string} params.language The language code (a BCP-47 language tag) of the APK-specific localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
             * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
             * @param {androidpublisher(v2).ApkListing} params.resource Request body data
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
                        url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/listings/{language}',
                        method: 'PATCH'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'editId', 'apkVersionCode', 'language'],
                    pathParams: ['apkVersionCode', 'editId', 'language', 'packageName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * androidpublisher.edits.apklistings.update
             *
             * @desc Updates or creates the APK-specific localized listing for a specified APK and language code.
             *
             * @alias androidpublisher.edits.apklistings.update
             * @memberOf! androidpublisher(v2)
             *
             * @param {object} params Parameters for request
             * @param {integer} params.apkVersionCode The APK version code whose APK-specific listings should be read or modified.
             * @param {string} params.editId Unique identifier for this edit.
             * @param {string} params.language The language code (a BCP-47 language tag) of the APK-specific localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
             * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
             * @param {androidpublisher(v2).ApkListing} params.resource Request body data
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
                        url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/listings/{language}',
                        method: 'PUT'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'editId', 'apkVersionCode', 'language'],
                    pathParams: ['apkVersionCode', 'editId', 'language', 'packageName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        },
        apks: {
            /**
             * androidpublisher.edits.apks.addexternallyhosted
             *
             * @desc Creates a new APK without uploading the APK itself to Google Play, instead hosting the APK at a specified URL. This function is only available to enterprises using Google Play for Work whose application is configured to restrict distribution to the enterprise domain.
             *
             * @alias androidpublisher.edits.apks.addexternallyhosted
             * @memberOf! androidpublisher(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.editId Unique identifier for this edit.
             * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
             * @param {androidpublisher(v2).ApksAddExternallyHostedRequest} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            addexternallyhosted: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const parameters = {
                    options: Object.assign({
                        url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks/externallyHosted',
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'editId'],
                    pathParams: ['editId', 'packageName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * androidpublisher.edits.apks.list
             *
             *
             *
             * @alias androidpublisher.edits.apks.list
             * @memberOf! androidpublisher(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.editId Unique identifier for this edit.
             * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
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
                        url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks',
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'editId'],
                    pathParams: ['editId', 'packageName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * androidpublisher.edits.apks.upload
             *
             *
             *
             * @alias androidpublisher.edits.apks.upload
             * @memberOf! androidpublisher(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.editId Unique identifier for this edit.
             * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
             * @param {object} params.media Media object
             * @param {string} params.media.mimeType Media mime-type
             * @param {string|object} params.media.body Media body contents
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            upload: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const parameters = {
                    options: Object.assign({
                        url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks',
                        method: 'POST'
                    }, options),
                    params: params,
                    mediaUrl: 'https://www.googleapis.com/upload/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks',
                    requiredParams: ['packageName', 'editId'],
                    pathParams: ['editId', 'packageName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        },
        deobfuscationfiles: {
            /**
             * androidpublisher.edits.deobfuscationfiles.upload
             *
             * @desc Uploads the deobfuscation file of the specified APK. If a deobfuscation file already exists, it will be replaced.
             *
             * @alias androidpublisher.edits.deobfuscationfiles.upload
             * @memberOf! androidpublisher(v2)
             *
             * @param {object} params Parameters for request
             * @param {integer} params.apkVersionCode The version code of the APK whose deobfuscation file is being uploaded.
             * @param {string} params.deobfuscationFileType
             * @param {string} params.editId Unique identifier for this edit.
             * @param {string} params.packageName Unique identifier of the Android app for which the deobfuscatiuon files are being uploaded; for example, "com.spiffygame".
             * @param {object} params.media Media object
             * @param {string} params.media.mimeType Media mime-type
             * @param {string|object} params.media.body Media body contents
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            upload: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const parameters = {
                    options: Object.assign({
                        url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/deobfuscationFiles/{deobfuscationFileType}',
                        method: 'POST'
                    }, options),
                    params: params,
                    mediaUrl: 'https://www.googleapis.com/upload/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/deobfuscationFiles/{deobfuscationFileType}',
                    requiredParams: ['packageName', 'editId', 'apkVersionCode', 'deobfuscationFileType'],
                    pathParams: ['apkVersionCode', 'deobfuscationFileType', 'editId', 'packageName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        },
        details: {
            /**
             * androidpublisher.edits.details.get
             *
             * @desc Fetches app details for this edit. This includes the default language and developer support contact information.
             *
             * @alias androidpublisher.edits.details.get
             * @memberOf! androidpublisher(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.editId Unique identifier for this edit.
             * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
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
                        url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/details',
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'editId'],
                    pathParams: ['editId', 'packageName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * androidpublisher.edits.details.patch
             *
             * @desc Updates app details for this edit. This method supports patch semantics.
             *
             * @alias androidpublisher.edits.details.patch
             * @memberOf! androidpublisher(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.editId Unique identifier for this edit.
             * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
             * @param {androidpublisher(v2).AppDetails} params.resource Request body data
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
                        url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/details',
                        method: 'PATCH'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'editId'],
                    pathParams: ['editId', 'packageName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * androidpublisher.edits.details.update
             *
             * @desc Updates app details for this edit.
             *
             * @alias androidpublisher.edits.details.update
             * @memberOf! androidpublisher(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.editId Unique identifier for this edit.
             * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
             * @param {androidpublisher(v2).AppDetails} params.resource Request body data
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
                        url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/details',
                        method: 'PUT'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'editId'],
                    pathParams: ['editId', 'packageName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        },
        expansionfiles: {
            /**
             * androidpublisher.edits.expansionfiles.get
             *
             * @desc Fetches the Expansion File configuration for the APK specified.
             *
             * @alias androidpublisher.edits.expansionfiles.get
             * @memberOf! androidpublisher(v2)
             *
             * @param {object} params Parameters for request
             * @param {integer} params.apkVersionCode The version code of the APK whose Expansion File configuration is being read or modified.
             * @param {string} params.editId Unique identifier for this edit.
             * @param {string} params.expansionFileType
             * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
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
                        url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}',
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'editId', 'apkVersionCode', 'expansionFileType'],
                    pathParams: ['apkVersionCode', 'editId', 'expansionFileType', 'packageName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * androidpublisher.edits.expansionfiles.patch
             *
             * @desc Updates the APK's Expansion File configuration to reference another APK's Expansion Files. To add a new Expansion File use the Upload method. This method supports patch semantics.
             *
             * @alias androidpublisher.edits.expansionfiles.patch
             * @memberOf! androidpublisher(v2)
             *
             * @param {object} params Parameters for request
             * @param {integer} params.apkVersionCode The version code of the APK whose Expansion File configuration is being read or modified.
             * @param {string} params.editId Unique identifier for this edit.
             * @param {string} params.expansionFileType
             * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
             * @param {androidpublisher(v2).ExpansionFile} params.resource Request body data
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
                        url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}',
                        method: 'PATCH'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'editId', 'apkVersionCode', 'expansionFileType'],
                    pathParams: ['apkVersionCode', 'editId', 'expansionFileType', 'packageName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * androidpublisher.edits.expansionfiles.update
             *
             * @desc Updates the APK's Expansion File configuration to reference another APK's Expansion Files. To add a new Expansion File use the Upload method.
             *
             * @alias androidpublisher.edits.expansionfiles.update
             * @memberOf! androidpublisher(v2)
             *
             * @param {object} params Parameters for request
             * @param {integer} params.apkVersionCode The version code of the APK whose Expansion File configuration is being read or modified.
             * @param {string} params.editId Unique identifier for this edit.
             * @param {string} params.expansionFileType
             * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
             * @param {androidpublisher(v2).ExpansionFile} params.resource Request body data
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
                        url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}',
                        method: 'PUT'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'editId', 'apkVersionCode', 'expansionFileType'],
                    pathParams: ['apkVersionCode', 'editId', 'expansionFileType', 'packageName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * androidpublisher.edits.expansionfiles.upload
             *
             * @desc Uploads and attaches a new Expansion File to the APK specified.
             *
             * @alias androidpublisher.edits.expansionfiles.upload
             * @memberOf! androidpublisher(v2)
             *
             * @param {object} params Parameters for request
             * @param {integer} params.apkVersionCode The version code of the APK whose Expansion File configuration is being read or modified.
             * @param {string} params.editId Unique identifier for this edit.
             * @param {string} params.expansionFileType
             * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
             * @param {object} params.media Media object
             * @param {string} params.media.mimeType Media mime-type
             * @param {string|object} params.media.body Media body contents
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            upload: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const parameters = {
                    options: Object.assign({
                        url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}',
                        method: 'POST'
                    }, options),
                    params: params,
                    mediaUrl: 'https://www.googleapis.com/upload/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}',
                    requiredParams: ['packageName', 'editId', 'apkVersionCode', 'expansionFileType'],
                    pathParams: ['apkVersionCode', 'editId', 'expansionFileType', 'packageName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        },
        images: {
            /**
             * androidpublisher.edits.images.delete
             *
             * @desc Deletes the image (specified by id) from the edit.
             *
             * @alias androidpublisher.edits.images.delete
             * @memberOf! androidpublisher(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.editId Unique identifier for this edit.
             * @param {string} params.imageId Unique identifier an image within the set of images attached to this edit.
             * @param {string} params.imageType
             * @param {string} params.language The language code (a BCP-47 language tag) of the localized listing whose images are to read or modified. For example, to select Austrian German, pass "de-AT".
             * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
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
                        url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}/{imageId}',
                        method: 'DELETE'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'editId', 'language', 'imageType', 'imageId'],
                    pathParams: ['editId', 'imageId', 'imageType', 'language', 'packageName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * androidpublisher.edits.images.deleteall
             *
             * @desc Deletes all images for the specified language and image type.
             *
             * @alias androidpublisher.edits.images.deleteall
             * @memberOf! androidpublisher(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.editId Unique identifier for this edit.
             * @param {string} params.imageType
             * @param {string} params.language The language code (a BCP-47 language tag) of the localized listing whose images are to read or modified. For example, to select Austrian German, pass "de-AT".
             * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            deleteall: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const parameters = {
                    options: Object.assign({
                        url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}',
                        method: 'DELETE'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'editId', 'language', 'imageType'],
                    pathParams: ['editId', 'imageType', 'language', 'packageName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * androidpublisher.edits.images.list
             *
             * @desc Lists all images for the specified language and image type.
             *
             * @alias androidpublisher.edits.images.list
             * @memberOf! androidpublisher(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.editId Unique identifier for this edit.
             * @param {string} params.imageType
             * @param {string} params.language The language code (a BCP-47 language tag) of the localized listing whose images are to read or modified. For example, to select Austrian German, pass "de-AT".
             * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
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
                        url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}',
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'editId', 'language', 'imageType'],
                    pathParams: ['editId', 'imageType', 'language', 'packageName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * androidpublisher.edits.images.upload
             *
             * @desc Uploads a new image and adds it to the list of images for the specified language and image type.
             *
             * @alias androidpublisher.edits.images.upload
             * @memberOf! androidpublisher(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.editId Unique identifier for this edit.
             * @param {string} params.imageType
             * @param {string} params.language The language code (a BCP-47 language tag) of the localized listing whose images are to read or modified. For example, to select Austrian German, pass "de-AT".
             * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
             * @param {object} params.media Media object
             * @param {string} params.media.mimeType Media mime-type
             * @param {string|object} params.media.body Media body contents
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            upload: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const parameters = {
                    options: Object.assign({
                        url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}',
                        method: 'POST'
                    }, options),
                    params: params,
                    mediaUrl: 'https://www.googleapis.com/upload/androidpublisher/v2/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}',
                    requiredParams: ['packageName', 'editId', 'language', 'imageType'],
                    pathParams: ['editId', 'imageType', 'language', 'packageName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        },
        listings: {
            /**
             * androidpublisher.edits.listings.delete
             *
             * @desc Deletes the specified localized store listing from an edit.
             *
             * @alias androidpublisher.edits.listings.delete
             * @memberOf! androidpublisher(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.editId Unique identifier for this edit.
             * @param {string} params.language The language code (a BCP-47 language tag) of the localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
             * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
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
                        url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/listings/{language}',
                        method: 'DELETE'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'editId', 'language'],
                    pathParams: ['editId', 'language', 'packageName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * androidpublisher.edits.listings.deleteall
             *
             * @desc Deletes all localized listings from an edit.
             *
             * @alias androidpublisher.edits.listings.deleteall
             * @memberOf! androidpublisher(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.editId Unique identifier for this edit.
             * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            deleteall: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const parameters = {
                    options: Object.assign({
                        url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/listings',
                        method: 'DELETE'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'editId'],
                    pathParams: ['editId', 'packageName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * androidpublisher.edits.listings.get
             *
             * @desc Fetches information about a localized store listing.
             *
             * @alias androidpublisher.edits.listings.get
             * @memberOf! androidpublisher(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.editId Unique identifier for this edit.
             * @param {string} params.language The language code (a BCP-47 language tag) of the localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
             * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
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
                        url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/listings/{language}',
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'editId', 'language'],
                    pathParams: ['editId', 'language', 'packageName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * androidpublisher.edits.listings.list
             *
             * @desc Returns all of the localized store listings attached to this edit.
             *
             * @alias androidpublisher.edits.listings.list
             * @memberOf! androidpublisher(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.editId Unique identifier for this edit.
             * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
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
                        url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/listings',
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'editId'],
                    pathParams: ['editId', 'packageName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * androidpublisher.edits.listings.patch
             *
             * @desc Creates or updates a localized store listing. This method supports patch semantics.
             *
             * @alias androidpublisher.edits.listings.patch
             * @memberOf! androidpublisher(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.editId Unique identifier for this edit.
             * @param {string} params.language The language code (a BCP-47 language tag) of the localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
             * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
             * @param {androidpublisher(v2).Listing} params.resource Request body data
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
                        url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/listings/{language}',
                        method: 'PATCH'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'editId', 'language'],
                    pathParams: ['editId', 'language', 'packageName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * androidpublisher.edits.listings.update
             *
             * @desc Creates or updates a localized store listing.
             *
             * @alias androidpublisher.edits.listings.update
             * @memberOf! androidpublisher(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.editId Unique identifier for this edit.
             * @param {string} params.language The language code (a BCP-47 language tag) of the localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
             * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
             * @param {androidpublisher(v2).Listing} params.resource Request body data
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
                        url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/listings/{language}',
                        method: 'PUT'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'editId', 'language'],
                    pathParams: ['editId', 'language', 'packageName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        },
        testers: {
            /**
             * androidpublisher.edits.testers.get
             *
             *
             *
             * @alias androidpublisher.edits.testers.get
             * @memberOf! androidpublisher(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.editId Unique identifier for this edit.
             * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
             * @param {string} params.track
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
                        url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/testers/{track}',
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'editId', 'track'],
                    pathParams: ['editId', 'packageName', 'track'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * androidpublisher.edits.testers.patch
             *
             *
             *
             * @alias androidpublisher.edits.testers.patch
             * @memberOf! androidpublisher(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.editId Unique identifier for this edit.
             * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
             * @param {string} params.track
             * @param {androidpublisher(v2).Testers} params.resource Request body data
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
                        url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/testers/{track}',
                        method: 'PATCH'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'editId', 'track'],
                    pathParams: ['editId', 'packageName', 'track'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * androidpublisher.edits.testers.update
             *
             *
             *
             * @alias androidpublisher.edits.testers.update
             * @memberOf! androidpublisher(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.editId Unique identifier for this edit.
             * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
             * @param {string} params.track
             * @param {androidpublisher(v2).Testers} params.resource Request body data
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
                        url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/testers/{track}',
                        method: 'PUT'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'editId', 'track'],
                    pathParams: ['editId', 'packageName', 'track'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        },
        tracks: {
            /**
             * androidpublisher.edits.tracks.get
             *
             * @desc Fetches the track configuration for the specified track type. Includes the APK version codes that are in this track.
             *
             * @alias androidpublisher.edits.tracks.get
             * @memberOf! androidpublisher(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.editId Unique identifier for this edit.
             * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
             * @param {string} params.track The track type to read or modify.
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
                        url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/tracks/{track}',
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'editId', 'track'],
                    pathParams: ['editId', 'packageName', 'track'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * androidpublisher.edits.tracks.list
             *
             * @desc Lists all the track configurations for this edit.
             *
             * @alias androidpublisher.edits.tracks.list
             * @memberOf! androidpublisher(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.editId Unique identifier for this edit.
             * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
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
                        url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/tracks',
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'editId'],
                    pathParams: ['editId', 'packageName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * androidpublisher.edits.tracks.patch
             *
             * @desc Updates the track configuration for the specified track type. When halted, the rollout track cannot be updated without adding new APKs, and adding new APKs will cause it to resume. This method supports patch semantics.
             *
             * @alias androidpublisher.edits.tracks.patch
             * @memberOf! androidpublisher(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.editId Unique identifier for this edit.
             * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
             * @param {string} params.track The track type to read or modify.
             * @param {androidpublisher(v2).Track} params.resource Request body data
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
                        url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/tracks/{track}',
                        method: 'PATCH'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'editId', 'track'],
                    pathParams: ['editId', 'packageName', 'track'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * androidpublisher.edits.tracks.update
             *
             * @desc Updates the track configuration for the specified track type. When halted, the rollout track cannot be updated without adding new APKs, and adding new APKs will cause it to resume.
             *
             * @alias androidpublisher.edits.tracks.update
             * @memberOf! androidpublisher(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.editId Unique identifier for this edit.
             * @param {string} params.packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
             * @param {string} params.track The track type to read or modify.
             * @param {androidpublisher(v2).Track} params.resource Request body data
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
                        url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/tracks/{track}',
                        method: 'PUT'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'editId', 'track'],
                    pathParams: ['editId', 'packageName', 'track'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        }
    };
    self.entitlements = {
        /**
         * androidpublisher.entitlements.list
         *
         * @desc Lists the user's current inapp item or subscription entitlements
         *
         * @alias androidpublisher.entitlements.list
         * @memberOf! androidpublisher(v2)
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.maxResults
         * @param {string} params.packageName The package name of the application the inapp product was sold in (for example, 'com.some.thing').
         * @param {string=} params.productId The product id of the inapp product (for example, 'sku1'). This can be used to restrict the result set.
         * @param {integer=} params.startIndex
         * @param {string=} params.token
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
                    url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/entitlements',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['packageName'],
                pathParams: ['packageName'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.inappproducts = {
        /**
         * androidpublisher.inappproducts.batch
         *
         *
         *
         * @alias androidpublisher.inappproducts.batch
         * @memberOf! androidpublisher(v2)
         *
         * @param {object} params Parameters for request
         * @param {androidpublisher(v2).InappproductsBatchRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        batch: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/androidpublisher/v2/applications/inappproducts/batch',
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
         * androidpublisher.inappproducts.delete
         *
         * @desc Delete an in-app product for an app.
         *
         * @alias androidpublisher.inappproducts.delete
         * @memberOf! androidpublisher(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.packageName Unique identifier for the Android app with the in-app product; for example, "com.spiffygame".
         * @param {string} params.sku Unique identifier for the in-app product.
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
                    url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/inappproducts/{sku}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['packageName', 'sku'],
                pathParams: ['packageName', 'sku'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidpublisher.inappproducts.get
         *
         * @desc Returns information about the in-app product specified.
         *
         * @alias androidpublisher.inappproducts.get
         * @memberOf! androidpublisher(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.packageName
         * @param {string} params.sku Unique identifier for the in-app product.
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
                    url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/inappproducts/{sku}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['packageName', 'sku'],
                pathParams: ['packageName', 'sku'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidpublisher.inappproducts.insert
         *
         * @desc Creates a new in-app product for an app.
         *
         * @alias androidpublisher.inappproducts.insert
         * @memberOf! androidpublisher(v2)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.autoConvertMissingPrices If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.
         * @param {string} params.packageName Unique identifier for the Android app; for example, "com.spiffygame".
         * @param {androidpublisher(v2).InAppProduct} params.resource Request body data
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
                    url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/inappproducts',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['packageName'],
                pathParams: ['packageName'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidpublisher.inappproducts.list
         *
         * @desc List all the in-app products for an Android app, both subscriptions and managed in-app products..
         *
         * @alias androidpublisher.inappproducts.list
         * @memberOf! androidpublisher(v2)
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.maxResults
         * @param {string} params.packageName Unique identifier for the Android app with in-app products; for example, "com.spiffygame".
         * @param {integer=} params.startIndex
         * @param {string=} params.token
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
                    url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/inappproducts',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['packageName'],
                pathParams: ['packageName'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidpublisher.inappproducts.patch
         *
         * @desc Updates the details of an in-app product. This method supports patch semantics.
         *
         * @alias androidpublisher.inappproducts.patch
         * @memberOf! androidpublisher(v2)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.autoConvertMissingPrices If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.
         * @param {string} params.packageName Unique identifier for the Android app with the in-app product; for example, "com.spiffygame".
         * @param {string} params.sku Unique identifier for the in-app product.
         * @param {androidpublisher(v2).InAppProduct} params.resource Request body data
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
                    url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/inappproducts/{sku}',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['packageName', 'sku'],
                pathParams: ['packageName', 'sku'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidpublisher.inappproducts.update
         *
         * @desc Updates the details of an in-app product.
         *
         * @alias androidpublisher.inappproducts.update
         * @memberOf! androidpublisher(v2)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.autoConvertMissingPrices If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.
         * @param {string} params.packageName Unique identifier for the Android app with the in-app product; for example, "com.spiffygame".
         * @param {string} params.sku Unique identifier for the in-app product.
         * @param {androidpublisher(v2).InAppProduct} params.resource Request body data
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
                    url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/inappproducts/{sku}',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['packageName', 'sku'],
                pathParams: ['packageName', 'sku'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.purchases = {
        products: {
            /**
             * androidpublisher.purchases.products.get
             *
             * @desc Checks the purchase and consumption status of an inapp item.
             *
             * @alias androidpublisher.purchases.products.get
             * @memberOf! androidpublisher(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.packageName The package name of the application the inapp product was sold in (for example, 'com.some.thing').
             * @param {string} params.productId The inapp product SKU (for example, 'com.some.thing.inapp1').
             * @param {string} params.token The token provided to the user's device when the inapp product was purchased.
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
                        url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/purchases/products/{productId}/tokens/{token}',
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'productId', 'token'],
                    pathParams: ['packageName', 'productId', 'token'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        },
        subscriptions: {
            /**
             * androidpublisher.purchases.subscriptions.cancel
             *
             * @desc Cancels a user's subscription purchase. The subscription remains valid until its expiration time.
             *
             * @alias androidpublisher.purchases.subscriptions.cancel
             * @memberOf! androidpublisher(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.packageName The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
             * @param {string} params.subscriptionId The purchased subscription ID (for example, 'monthly001').
             * @param {string} params.token The token provided to the user's device when the subscription was purchased.
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
                        url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:cancel',
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'subscriptionId', 'token'],
                    pathParams: ['packageName', 'subscriptionId', 'token'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * androidpublisher.purchases.subscriptions.defer
             *
             * @desc Defers a user's subscription purchase until a specified future expiration time.
             *
             * @alias androidpublisher.purchases.subscriptions.defer
             * @memberOf! androidpublisher(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.packageName The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
             * @param {string} params.subscriptionId The purchased subscription ID (for example, 'monthly001').
             * @param {string} params.token The token provided to the user's device when the subscription was purchased.
             * @param {androidpublisher(v2).SubscriptionPurchasesDeferRequest} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            defer: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const parameters = {
                    options: Object.assign({
                        url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:defer',
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'subscriptionId', 'token'],
                    pathParams: ['packageName', 'subscriptionId', 'token'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * androidpublisher.purchases.subscriptions.get
             *
             * @desc Checks whether a user's subscription purchase is valid and returns its expiry time.
             *
             * @alias androidpublisher.purchases.subscriptions.get
             * @memberOf! androidpublisher(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.packageName The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
             * @param {string} params.subscriptionId The purchased subscription ID (for example, 'monthly001').
             * @param {string} params.token The token provided to the user's device when the subscription was purchased.
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
                        url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}',
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'subscriptionId', 'token'],
                    pathParams: ['packageName', 'subscriptionId', 'token'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * androidpublisher.purchases.subscriptions.refund
             *
             * @desc Refunds a user's subscription purchase, but the subscription remains valid until its expiration time and it will continue to recur.
             *
             * @alias androidpublisher.purchases.subscriptions.refund
             * @memberOf! androidpublisher(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.packageName The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
             * @param {string} params.subscriptionId The purchased subscription ID (for example, 'monthly001').
             * @param {string} params.token The token provided to the user's device when the subscription was purchased.
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            refund: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const parameters = {
                    options: Object.assign({
                        url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:refund',
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'subscriptionId', 'token'],
                    pathParams: ['packageName', 'subscriptionId', 'token'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * androidpublisher.purchases.subscriptions.revoke
             *
             * @desc Refunds and immediately revokes a user's subscription purchase. Access to the subscription will be terminated immediately and it will stop recurring.
             *
             * @alias androidpublisher.purchases.subscriptions.revoke
             * @memberOf! androidpublisher(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.packageName The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
             * @param {string} params.subscriptionId The purchased subscription ID (for example, 'monthly001').
             * @param {string} params.token The token provided to the user's device when the subscription was purchased.
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            revoke: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const parameters = {
                    options: Object.assign({
                        url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:revoke',
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['packageName', 'subscriptionId', 'token'],
                    pathParams: ['packageName', 'subscriptionId', 'token'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        },
        voidedpurchases: {
            /**
             * androidpublisher.purchases.voidedpurchases.list
             *
             * @desc Lists the purchases that were cancelled, refunded or charged-back.
             *
             * @alias androidpublisher.purchases.voidedpurchases.list
             * @memberOf! androidpublisher(v2)
             *
             * @param {object} params Parameters for request
             * @param {string=} params.endTime The time, in milliseconds since the Epoch, of the newest voided in-app product purchase that you want to see in the response. The value of this parameter cannot be greater than the current time and is ignored if a pagination token is set. Default value is current time.
             * @param {integer=} params.maxResults
             * @param {string} params.packageName The package name of the application for which voided purchases need to be returned (for example, 'com.some.thing').
             * @param {integer=} params.startIndex
             * @param {string=} params.startTime The time, in milliseconds since the Epoch, of the oldest voided in-app product purchase that you want to see in the response. The value of this parameter cannot be older than 30 days and is ignored if a pagination token is set. Default value is current time minus 30 days.
             * @param {string=} params.token
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
                        url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/purchases/voidedpurchases',
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['packageName'],
                    pathParams: ['packageName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        }
    };
    self.reviews = {
        /**
         * androidpublisher.reviews.get
         *
         * @desc Returns a single review.
         *
         * @alias androidpublisher.reviews.get
         * @memberOf! androidpublisher(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.packageName Unique identifier for the Android app for which we want reviews; for example, "com.spiffygame".
         * @param {string} params.reviewId
         * @param {string=} params.translationLanguage
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
                    url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/reviews/{reviewId}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['packageName', 'reviewId'],
                pathParams: ['packageName', 'reviewId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidpublisher.reviews.list
         *
         * @desc Returns a list of reviews. Only reviews from last week will be returned.
         *
         * @alias androidpublisher.reviews.list
         * @memberOf! androidpublisher(v2)
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.maxResults
         * @param {string} params.packageName Unique identifier for the Android app for which we want reviews; for example, "com.spiffygame".
         * @param {integer=} params.startIndex
         * @param {string=} params.token
         * @param {string=} params.translationLanguage
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
                    url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/reviews',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['packageName'],
                pathParams: ['packageName'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * androidpublisher.reviews.reply
         *
         * @desc Reply to a single review, or update an existing reply.
         *
         * @alias androidpublisher.reviews.reply
         * @memberOf! androidpublisher(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.packageName Unique identifier for the Android app for which we want reviews; for example, "com.spiffygame".
         * @param {string} params.reviewId
         * @param {androidpublisher(v2).ReviewsReplyRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        reply: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/reviews/{reviewId}:reply',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['packageName', 'reviewId'],
                pathParams: ['packageName', 'reviewId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
}
module.exports = Androidpublisher;
//# sourceMappingURL=v2.js.map