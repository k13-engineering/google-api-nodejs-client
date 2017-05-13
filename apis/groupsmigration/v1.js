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
 * Groups Migration API
 *
 * Groups Migration Api.
 *
 * @example
 * const google = require('googleapis');
 * const groupsmigration = google.groupsmigration('v1');
 *
 * @namespace groupsmigration
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Groupsmigration
 */
function Groupsmigration(options) {
    const self = this;
    self._options = options || {};
    self.archive = {
        /**
         * groupsmigration.archive.insert
         *
         * @desc Inserts a new mail into the archive of the Google group.
         *
         * @alias groupsmigration.archive.insert
         * @memberOf! groupsmigration(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.groupId The group ID
         * @param {object} params.media Media object
         * @param {string} params.media.mimeType Media mime-type
         * @param {string|object} params.media.body Media body contents
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
                    url: 'https://www.googleapis.com/groups/v1/groups/{groupId}/archive',
                    method: 'POST'
                }, options),
                params: params,
                mediaUrl: 'https://www.googleapis.com/upload/groups/v1/groups/{groupId}/archive',
                requiredParams: ['groupId'],
                pathParams: ['groupId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
}
module.exports = Groupsmigration;
//# sourceMappingURL=v1.js.map