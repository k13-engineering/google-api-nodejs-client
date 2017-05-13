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
 * Google Slides API
 *
 * An API for creating and editing Google Slides presentations.
 *
 * @example
 * const google = require('googleapis');
 * const slides = google.slides('v1');
 *
 * @namespace slides
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Slides
 */
function Slides(options) {
    const self = this;
    self._options = options || {};
    self.presentations = {
        /**
         * slides.presentations.get
         *
         * @desc Gets the latest version of the specified presentation.
         *
         * @alias slides.presentations.get
         * @memberOf! slides(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.presentationId The ID of the presentation to retrieve.
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
                    url: 'https://slides.googleapis.com/v1/presentations/{presentationId}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['presentationId'],
                pathParams: ['presentationId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * slides.presentations.create
         *
         * @desc Creates a new presentation using the title given in the request. Other fields in the request are ignored. Returns the created presentation.
         *
         * @alias slides.presentations.create
         * @memberOf! slides(v1)
         *
         * @param {object} params Parameters for request
         * @param {slides(v1).Presentation} params.resource Request body data
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
                    url: 'https://slides.googleapis.com/v1/presentations',
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
         * slides.presentations.batchUpdate
         *
         * @desc Applies one or more updates to the presentation.  Each request is validated before being applied. If any request is not valid, then the entire request will fail and nothing will be applied.  Some requests have replies to give you some information about how they are applied. Other requests do not need to return information; these each return an empty reply. The order of replies matches that of the requests.  For example, suppose you call batchUpdate with four updates, and only the third one returns information. The response would have two empty replies: the reply to the third request, and another empty reply, in that order.  Because other users may be editing the presentation, the presentation might not exactly reflect your changes: your changes may be altered with respect to collaborator changes. If there are no collaborators, the presentation should reflect your changes. In any case, the updates in your request are guaranteed to be applied together atomically.
         *
         * @alias slides.presentations.batchUpdate
         * @memberOf! slides(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.presentationId The presentation to apply the updates to.
         * @param {slides(v1).BatchUpdatePresentationRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        batchUpdate: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://slides.googleapis.com/v1/presentations/{presentationId}:batchUpdate',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['presentationId'],
                pathParams: ['presentationId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        pages: {
            /**
             * slides.presentations.pages.get
             *
             * @desc Gets the latest version of the specified page in the presentation.
             *
             * @alias slides.presentations.pages.get
             * @memberOf! slides(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.presentationId The ID of the presentation to retrieve.
             * @param {string} params.pageObjectId The object ID of the page to retrieve.
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
                        url: 'https://slides.googleapis.com/v1/presentations/{presentationId}/pages/{pageObjectId}',
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['presentationId', 'pageObjectId'],
                    pathParams: ['presentationId', 'pageObjectId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * slides.presentations.pages.getThumbnail
             *
             * @desc Generates a thumbnail of the latest version of the specified page in the presentation and returns a URL to the thumbnail image.
             *
             * @alias slides.presentations.pages.getThumbnail
             * @memberOf! slides(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.pageObjectId The object ID of the page whose thumbnail to retrieve.
             * @param {string=} params.thumbnailProperties.mimeType The optional mime type of the thumbnail image.  If you don't specify the mime type, the default mime type will be PNG.
             * @param {string=} params.thumbnailProperties.thumbnailSize The optional thumbnail image size.  If you don't specify the size, the server chooses a default size of the image.
             * @param {string} params.presentationId The ID of the presentation to retrieve.
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            getThumbnail: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const parameters = {
                    options: Object.assign({
                        url: 'https://slides.googleapis.com/v1/presentations/{presentationId}/pages/{pageObjectId}/thumbnail',
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['presentationId', 'pageObjectId'],
                    pathParams: ['pageObjectId', 'presentationId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        }
    };
}
module.exports = Slides;
//# sourceMappingURL=v1.js.map