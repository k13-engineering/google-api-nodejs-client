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
 * Google Safe Browsing API
 *
 * The Safe Browsing API is an experimental API that allows client applications to check URLs against Google&#39;s constantly-updated blacklists of suspected phishing and malware pages. Your client application can use the API to download an encrypted table for local, client-side lookups of URLs.
 *
 * @example
 * const google = require('googleapis');
 * const safebrowsing = google.safebrowsing('v4');
 *
 * @namespace safebrowsing
 * @type {Function}
 * @version v4
 * @variation v4
 * @param {object=} options Options for Safebrowsing
 */
function Safebrowsing(options) {
    const self = this;
    self._options = options || {};
    self.threatListUpdates = {
        /**
         * safebrowsing.threatListUpdates.fetch
         *
         * @desc Fetches the most recent threat list updates. A client can request updates for multiple lists at once.
         *
         * @alias safebrowsing.threatListUpdates.fetch
         * @memberOf! safebrowsing(v4)
         *
         * @param {object} params Parameters for request
         * @param {safebrowsing(v4).FetchThreatListUpdatesRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        fetch: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://safebrowsing.googleapis.com/v4/threatListUpdates:fetch',
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
    self.encodedFullHashes = {
        /**
         * safebrowsing.encodedFullHashes.get
         *
         *
         *
         * @alias safebrowsing.encodedFullHashes.get
         * @memberOf! safebrowsing(v4)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.clientId A client ID that (hopefully) uniquely identifies the client implementation of the Safe Browsing API.
         * @param {string=} params.clientVersion The version of the client implementation.
         * @param {string} params.encodedRequest A serialized FindFullHashesRequest proto.
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
                    url: 'https://safebrowsing.googleapis.com/v4/encodedFullHashes/{encodedRequest}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['encodedRequest'],
                pathParams: ['encodedRequest'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.threatLists = {
        /**
         * safebrowsing.threatLists.list
         *
         * @desc Lists the Safe Browsing threat lists available for download.
         *
         * @alias safebrowsing.threatLists.list
         * @memberOf! safebrowsing(v4)
         *
         * @param {object} params Parameters for request
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
                    url: 'https://safebrowsing.googleapis.com/v4/threatLists',
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
    self.threatMatches = {
        /**
         * safebrowsing.threatMatches.find
         *
         * @desc Finds the threat entries that match the Safe Browsing lists.
         *
         * @alias safebrowsing.threatMatches.find
         * @memberOf! safebrowsing(v4)
         *
         * @param {object} params Parameters for request
         * @param {safebrowsing(v4).FindThreatMatchesRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        find: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://safebrowsing.googleapis.com/v4/threatMatches:find',
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
    self.fullHashes = {
        /**
         * safebrowsing.fullHashes.find
         *
         * @desc Finds the full hashes that match the requested hash prefixes.
         *
         * @alias safebrowsing.fullHashes.find
         * @memberOf! safebrowsing(v4)
         *
         * @param {object} params Parameters for request
         * @param {safebrowsing(v4).FindFullHashesRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        find: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://safebrowsing.googleapis.com/v4/fullHashes:find',
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
    self.encodedUpdates = {
        /**
         * safebrowsing.encodedUpdates.get
         *
         *
         *
         * @alias safebrowsing.encodedUpdates.get
         * @memberOf! safebrowsing(v4)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.clientId A client ID that uniquely identifies the client implementation of the Safe Browsing API.
         * @param {string=} params.clientVersion The version of the client implementation.
         * @param {string} params.encodedRequest A serialized FetchThreatListUpdatesRequest proto.
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
                    url: 'https://safebrowsing.googleapis.com/v4/encodedUpdates/{encodedRequest}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['encodedRequest'],
                pathParams: ['encodedRequest'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
}
module.exports = Safebrowsing;
//# sourceMappingURL=v4.js.map