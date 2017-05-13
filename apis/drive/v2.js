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
 * Drive API
 *
 * Manages files in Drive including uploading, downloading, searching, detecting changes, and updating sharing permissions.
 *
 * @example
 * const google = require('googleapis');
 * const drive = google.drive('v2');
 *
 * @namespace drive
 * @type {Function}
 * @version v2
 * @variation v2
 * @param {object=} options Options for Drive
 */
function Drive(options) {
    const self = this;
    self._options = options || {};
    self.about = {
        /**
         * drive.about.get
         *
         * @desc Gets the information about the current user along with Drive API settings
         *
         * @alias drive.about.get
         * @memberOf! drive(v2)
         *
         * @param {object=} params Parameters for request
         * @param {boolean=} params.includeSubscribed When calculating the number of remaining change IDs, whether to include public files the user has opened and shared files. When set to false, this counts only change IDs for owned files and any shared or public files that the user has explicitly added to a folder they own.
         * @param {string=} params.maxChangeIdCount Maximum number of remaining change IDs to count
         * @param {string=} params.startChangeId Change ID to start counting from when calculating number of remaining change IDs
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
                    url: 'https://www.googleapis.com/drive/v2/about',
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
    self.apps = {
        /**
         * drive.apps.get
         *
         * @desc Gets a specific app.
         *
         * @alias drive.apps.get
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.appId The ID of the app.
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
                    url: 'https://www.googleapis.com/drive/v2/apps/{appId}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['appId'],
                pathParams: ['appId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * drive.apps.list
         *
         * @desc Lists a user's installed apps.
         *
         * @alias drive.apps.list
         * @memberOf! drive(v2)
         *
         * @param {object=} params Parameters for request
         * @param {string=} params.appFilterExtensions A comma-separated list of file extensions for open with filtering. All apps within the given app query scope which can open any of the given file extensions will be included in the response. If appFilterMimeTypes are provided as well, the result is a union of the two resulting app lists.
         * @param {string=} params.appFilterMimeTypes A comma-separated list of MIME types for open with filtering. All apps within the given app query scope which can open any of the given MIME types will be included in the response. If appFilterExtensions are provided as well, the result is a union of the two resulting app lists.
         * @param {string=} params.languageCode A language or locale code, as defined by BCP 47, with some extensions from Unicode's LDML format (http://www.unicode.org/reports/tr35/).
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
                    url: 'https://www.googleapis.com/drive/v2/apps',
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
    self.changes = {
        /**
         * drive.changes.get
         *
         * @desc Gets a specific change.
         *
         * @alias drive.changes.get
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.changeId The ID of the change.
         * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
         * @param {string=} params.teamDriveId The Team Drive from which the change will be returned.
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
                    url: 'https://www.googleapis.com/drive/v2/changes/{changeId}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['changeId'],
                pathParams: ['changeId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * drive.changes.getStartPageToken
         *
         * @desc Gets the starting pageToken for listing future changes.
         *
         * @alias drive.changes.getStartPageToken
         * @memberOf! drive(v2)
         *
         * @param {object=} params Parameters for request
         * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
         * @param {string=} params.teamDriveId The ID of the Team Drive for which the starting pageToken for listing future changes from that Team Drive will be returned.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getStartPageToken: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/drive/v2/changes/startPageToken',
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
         * drive.changes.list
         *
         * @desc Lists the changes for a user or Team Drive.
         *
         * @alias drive.changes.list
         * @memberOf! drive(v2)
         *
         * @param {object=} params Parameters for request
         * @param {boolean=} params.includeCorpusRemovals Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.
         * @param {boolean=} params.includeDeleted Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.
         * @param {boolean=} params.includeSubscribed Whether to include public files the user has opened and shared files. When set to false, the list only includes owned files plus any shared or public files the user has explicitly added to a folder they own.
         * @param {boolean=} params.includeTeamDriveItems Whether Team Drive files or changes should be included in results.
         * @param {integer=} params.maxResults Maximum number of changes to return.
         * @param {string=} params.pageToken The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method.
         * @param {string=} params.spaces A comma-separated list of spaces to query. Supported values are 'drive', 'appDataFolder' and 'photos'.
         * @param {string=} params.startChangeId Change ID to start listing changes from.
         * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
         * @param {string=} params.teamDriveId The Team Drive from which changes will be returned. If specified the change IDs will be reflective of the Team Drive; use the combined Team Drive ID and change ID as an identifier.
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
                    url: 'https://www.googleapis.com/drive/v2/changes',
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
         * drive.changes.watch
         *
         * @desc Subscribe to changes for a user.
         *
         * @alias drive.changes.watch
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.includeCorpusRemovals Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.
         * @param {boolean=} params.includeDeleted Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.
         * @param {boolean=} params.includeSubscribed Whether to include public files the user has opened and shared files. When set to false, the list only includes owned files plus any shared or public files the user has explicitly added to a folder they own.
         * @param {boolean=} params.includeTeamDriveItems Whether Team Drive files or changes should be included in results.
         * @param {integer=} params.maxResults Maximum number of changes to return.
         * @param {string=} params.pageToken The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method.
         * @param {string=} params.spaces A comma-separated list of spaces to query. Supported values are 'drive', 'appDataFolder' and 'photos'.
         * @param {string=} params.startChangeId Change ID to start listing changes from.
         * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
         * @param {string=} params.teamDriveId The Team Drive from which changes will be returned. If specified the change IDs will be reflective of the Team Drive; use the combined Team Drive ID and change ID as an identifier.
         * @param {drive(v2).Channel} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        watch: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/drive/v2/changes/watch',
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
    self.channels = {
        /**
         * drive.channels.stop
         *
         * @desc Stop watching resources through this channel
         *
         * @alias drive.channels.stop
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {drive(v2).Channel} params.resource Request body data
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
                    url: 'https://www.googleapis.com/drive/v2/channels/stop',
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
    self.children = {
        /**
         * drive.children.delete
         *
         * @desc Removes a child from a folder.
         *
         * @alias drive.children.delete
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.childId The ID of the child.
         * @param {string} params.folderId The ID of the folder.
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
                    url: 'https://www.googleapis.com/drive/v2/files/{folderId}/children/{childId}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['folderId', 'childId'],
                pathParams: ['childId', 'folderId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * drive.children.get
         *
         * @desc Gets a specific child reference.
         *
         * @alias drive.children.get
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.childId The ID of the child.
         * @param {string} params.folderId The ID of the folder.
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
                    url: 'https://www.googleapis.com/drive/v2/files/{folderId}/children/{childId}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['folderId', 'childId'],
                pathParams: ['childId', 'folderId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * drive.children.insert
         *
         * @desc Inserts a file into a folder.
         *
         * @alias drive.children.insert
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.folderId The ID of the folder.
         * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
         * @param {drive(v2).ChildReference} params.resource Request body data
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
                    url: 'https://www.googleapis.com/drive/v2/files/{folderId}/children',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['folderId'],
                pathParams: ['folderId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * drive.children.list
         *
         * @desc Lists a folder's children.
         *
         * @alias drive.children.list
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.folderId The ID of the folder.
         * @param {integer=} params.maxResults Maximum number of children to return.
         * @param {string=} params.orderBy A comma-separated list of sort keys. Valid keys are 'createdDate', 'folder', 'lastViewedByMeDate', 'modifiedByMeDate', 'modifiedDate', 'quotaBytesUsed', 'recency', 'sharedWithMeDate', 'starred', and 'title'. Each key sorts ascending by default, but may be reversed with the 'desc' modifier. Example usage: ?orderBy=folder,modifiedDate desc,title. Please note that there is a current limitation for users with approximately one million files in which the requested sort order is ignored.
         * @param {string=} params.pageToken Page token for children.
         * @param {string=} params.q Query string for searching children.
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
                    url: 'https://www.googleapis.com/drive/v2/files/{folderId}/children',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['folderId'],
                pathParams: ['folderId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.comments = {
        /**
         * drive.comments.delete
         *
         * @desc Deletes a comment.
         *
         * @alias drive.comments.delete
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.commentId The ID of the comment.
         * @param {string} params.fileId The ID of the file.
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
                    url: 'https://www.googleapis.com/drive/v2/files/{fileId}/comments/{commentId}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['fileId', 'commentId'],
                pathParams: ['commentId', 'fileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * drive.comments.get
         *
         * @desc Gets a comment by ID.
         *
         * @alias drive.comments.get
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.commentId The ID of the comment.
         * @param {string} params.fileId The ID of the file.
         * @param {boolean=} params.includeDeleted If set, this will succeed when retrieving a deleted comment, and will include any deleted replies.
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
                    url: 'https://www.googleapis.com/drive/v2/files/{fileId}/comments/{commentId}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['fileId', 'commentId'],
                pathParams: ['commentId', 'fileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * drive.comments.insert
         *
         * @desc Creates a new comment on the given file.
         *
         * @alias drive.comments.insert
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID of the file.
         * @param {drive(v2).Comment} params.resource Request body data
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
                    url: 'https://www.googleapis.com/drive/v2/files/{fileId}/comments',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['fileId'],
                pathParams: ['fileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * drive.comments.list
         *
         * @desc Lists a file's comments.
         *
         * @alias drive.comments.list
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID of the file.
         * @param {boolean=} params.includeDeleted If set, all comments and replies, including deleted comments and replies (with content stripped) will be returned.
         * @param {integer=} params.maxResults The maximum number of discussions to include in the response, used for paging.
         * @param {string=} params.pageToken The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
         * @param {string=} params.updatedMin Only discussions that were updated after this timestamp will be returned. Formatted as an RFC 3339 timestamp.
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
                    url: 'https://www.googleapis.com/drive/v2/files/{fileId}/comments',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['fileId'],
                pathParams: ['fileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * drive.comments.patch
         *
         * @desc Updates an existing comment. This method supports patch semantics.
         *
         * @alias drive.comments.patch
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.commentId The ID of the comment.
         * @param {string} params.fileId The ID of the file.
         * @param {drive(v2).Comment} params.resource Request body data
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
                    url: 'https://www.googleapis.com/drive/v2/files/{fileId}/comments/{commentId}',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['fileId', 'commentId'],
                pathParams: ['commentId', 'fileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * drive.comments.update
         *
         * @desc Updates an existing comment.
         *
         * @alias drive.comments.update
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.commentId The ID of the comment.
         * @param {string} params.fileId The ID of the file.
         * @param {drive(v2).Comment} params.resource Request body data
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
                    url: 'https://www.googleapis.com/drive/v2/files/{fileId}/comments/{commentId}',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['fileId', 'commentId'],
                pathParams: ['commentId', 'fileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.files = {
        /**
         * drive.files.copy
         *
         * @desc Creates a copy of the specified file.
         *
         * @alias drive.files.copy
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.convert Whether to convert this file to the corresponding Google Docs format.
         * @param {string} params.fileId The ID of the file to copy.
         * @param {boolean=} params.ocr Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.
         * @param {string=} params.ocrLanguage If ocr is true, hints at the language to use. Valid values are BCP 47 codes.
         * @param {boolean=} params.pinned Whether to pin the head revision of the new copy. A file can have a maximum of 200 pinned revisions.
         * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
         * @param {string=} params.timedTextLanguage The language of the timed text.
         * @param {string=} params.timedTextTrackName The timed text track name.
         * @param {string=} params.visibility The visibility of the new file. This parameter is only relevant when the source is not a native Google Doc and convert=false.
         * @param {drive(v2).File} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        copy: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/drive/v2/files/{fileId}/copy',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['fileId'],
                pathParams: ['fileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * drive.files.delete
         *
         * @desc Permanently deletes a file by ID. Skips the trash. The currently authenticated user must own the file or be an organizer on the parent for Team Drive files.
         *
         * @alias drive.files.delete
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID of the file to delete.
         * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
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
                    url: 'https://www.googleapis.com/drive/v2/files/{fileId}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['fileId'],
                pathParams: ['fileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * drive.files.emptyTrash
         *
         * @desc Permanently deletes all of the user's trashed files.
         *
         * @alias drive.files.emptyTrash
         * @memberOf! drive(v2)
         *
         * @param {object=} params Parameters for request
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        emptyTrash: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/drive/v2/files/trash',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * drive.files.export
         *
         * @desc Exports a Google Doc to the requested MIME type and returns the exported content.
         *
         * @alias drive.files.export
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID of the file.
         * @param {string} params.mimeType The MIME type of the format requested for this export.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        export: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/drive/v2/files/{fileId}/export',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['fileId', 'mimeType'],
                pathParams: ['fileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * drive.files.generateIds
         *
         * @desc Generates a set of file IDs which can be provided in insert requests.
         *
         * @alias drive.files.generateIds
         * @memberOf! drive(v2)
         *
         * @param {object=} params Parameters for request
         * @param {integer=} params.maxResults Maximum number of IDs to return.
         * @param {string=} params.space The space in which the IDs can be used to create new files. Supported values are 'drive' and 'appDataFolder'.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        generateIds: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/drive/v2/files/generateIds',
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
         * drive.files.get
         *
         * @desc Gets a file's metadata by ID.
         *
         * @alias drive.files.get
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.acknowledgeAbuse Whether the user is acknowledging the risk of downloading known malware or other abusive files.
         * @param {string} params.fileId The ID for the file in question.
         * @param {string=} params.projection This parameter is deprecated and has no function.
         * @param {string=} params.revisionId Specifies the Revision ID that should be downloaded. Ignored unless alt=media is specified.
         * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
         * @param {boolean=} params.updateViewedDate Deprecated: Use files.update with modifiedDateBehavior=noChange, updateViewedDate=true and an empty request body.
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
                    url: 'https://www.googleapis.com/drive/v2/files/{fileId}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['fileId'],
                pathParams: ['fileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * drive.files.insert
         *
         * @desc Insert a new file.
         *
         * @alias drive.files.insert
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.convert Whether to convert this file to the corresponding Google Docs format.
         * @param {boolean=} params.ocr Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.
         * @param {string=} params.ocrLanguage If ocr is true, hints at the language to use. Valid values are BCP 47 codes.
         * @param {boolean=} params.pinned Whether to pin the head revision of the uploaded file. A file can have a maximum of 200 pinned revisions.
         * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
         * @param {string=} params.timedTextLanguage The language of the timed text.
         * @param {string=} params.timedTextTrackName The timed text track name.
         * @param {boolean=} params.useContentAsIndexableText Whether to use the content as indexable text.
         * @param {string=} params.visibility The visibility of the new file. This parameter is only relevant when convert=false.
         * @param  {object} params.resource Media resource metadata
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
                    url: 'https://www.googleapis.com/drive/v2/files',
                    method: 'POST'
                }, options),
                params: params,
                mediaUrl: 'https://www.googleapis.com/upload/drive/v2/files',
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * drive.files.list
         *
         * @desc Lists the user's files.
         *
         * @alias drive.files.list
         * @memberOf! drive(v2)
         *
         * @param {object=} params Parameters for request
         * @param {string=} params.corpora Comma-separated list of bodies of items (files/documents) to which the query applies. Supported bodies are 'default', 'domain', 'teamDrive' and 'allTeamDrives'. 'allTeamDrives' must be combined with 'default'; all other values must be used in isolation. Prefer 'default' or 'teamDrive' to 'allTeamDrives' for efficiency.
         * @param {string=} params.corpus The body of items (files/documents) to which the query applies. Deprecated: use 'corpora' instead.
         * @param {boolean=} params.includeTeamDriveItems Whether Team Drive items should be included in results.
         * @param {integer=} params.maxResults The maximum number of files to return per page. Partial or empty result pages are possible even before the end of the files list has been reached.
         * @param {string=} params.orderBy A comma-separated list of sort keys. Valid keys are 'createdDate', 'folder', 'lastViewedByMeDate', 'modifiedByMeDate', 'modifiedDate', 'quotaBytesUsed', 'recency', 'sharedWithMeDate', 'starred', and 'title'. Each key sorts ascending by default, but may be reversed with the 'desc' modifier. Example usage: ?orderBy=folder,modifiedDate desc,title. Please note that there is a current limitation for users with approximately one million files in which the requested sort order is ignored.
         * @param {string=} params.pageToken Page token for files.
         * @param {string=} params.projection This parameter is deprecated and has no function.
         * @param {string=} params.q Query string for searching files.
         * @param {string=} params.spaces A comma-separated list of spaces to query. Supported values are 'drive', 'appDataFolder' and 'photos'.
         * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
         * @param {string=} params.teamDriveId ID of Team Drive to search.
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
                    url: 'https://www.googleapis.com/drive/v2/files',
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
         * drive.files.patch
         *
         * @desc Updates file metadata and/or content. This method supports patch semantics.
         *
         * @alias drive.files.patch
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.addParents Comma-separated list of parent IDs to add.
         * @param {boolean=} params.convert This parameter is deprecated and has no function.
         * @param {string} params.fileId The ID of the file to update.
         * @param {string=} params.modifiedDateBehavior Determines the behavior in which modifiedDate is updated. This overrides setModifiedDate.
         * @param {boolean=} params.newRevision Whether a blob upload should create a new revision. If false, the blob data in the current head revision is replaced. If true or not set, a new blob is created as head revision, and previous unpinned revisions are preserved for a short period of time. Pinned revisions are stored indefinitely, using additional storage quota, up to a maximum of 200 revisions. For details on how revisions are retained, see the Drive Help Center.
         * @param {boolean=} params.ocr Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.
         * @param {string=} params.ocrLanguage If ocr is true, hints at the language to use. Valid values are BCP 47 codes.
         * @param {boolean=} params.pinned Whether to pin the new revision. A file can have a maximum of 200 pinned revisions.
         * @param {string=} params.removeParents Comma-separated list of parent IDs to remove.
         * @param {boolean=} params.setModifiedDate Whether to set the modified date with the supplied modified date.
         * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
         * @param {string=} params.timedTextLanguage The language of the timed text.
         * @param {string=} params.timedTextTrackName The timed text track name.
         * @param {boolean=} params.updateViewedDate Whether to update the view date after successfully updating the file.
         * @param {boolean=} params.useContentAsIndexableText Whether to use the content as indexable text.
         * @param {drive(v2).File} params.resource Request body data
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
                    url: 'https://www.googleapis.com/drive/v2/files/{fileId}',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['fileId'],
                pathParams: ['fileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * drive.files.touch
         *
         * @desc Set the file's updated time to the current server time.
         *
         * @alias drive.files.touch
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID of the file to update.
         * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        touch: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/drive/v2/files/{fileId}/touch',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['fileId'],
                pathParams: ['fileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * drive.files.trash
         *
         * @desc Moves a file to the trash. The currently authenticated user must own the file or be an organizer on the parent for Team Drive files.
         *
         * @alias drive.files.trash
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID of the file to trash.
         * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        trash: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/drive/v2/files/{fileId}/trash',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['fileId'],
                pathParams: ['fileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * drive.files.untrash
         *
         * @desc Restores a file from the trash.
         *
         * @alias drive.files.untrash
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID of the file to untrash.
         * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        untrash: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/drive/v2/files/{fileId}/untrash',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['fileId'],
                pathParams: ['fileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * drive.files.update
         *
         * @desc Updates file metadata and/or content.
         *
         * @alias drive.files.update
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.addParents Comma-separated list of parent IDs to add.
         * @param {boolean=} params.convert This parameter is deprecated and has no function.
         * @param {string} params.fileId The ID of the file to update.
         * @param {string=} params.modifiedDateBehavior Determines the behavior in which modifiedDate is updated. This overrides setModifiedDate.
         * @param {boolean=} params.newRevision Whether a blob upload should create a new revision. If false, the blob data in the current head revision is replaced. If true or not set, a new blob is created as head revision, and previous unpinned revisions are preserved for a short period of time. Pinned revisions are stored indefinitely, using additional storage quota, up to a maximum of 200 revisions. For details on how revisions are retained, see the Drive Help Center.
         * @param {boolean=} params.ocr Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.
         * @param {string=} params.ocrLanguage If ocr is true, hints at the language to use. Valid values are BCP 47 codes.
         * @param {boolean=} params.pinned Whether to pin the new revision. A file can have a maximum of 200 pinned revisions.
         * @param {string=} params.removeParents Comma-separated list of parent IDs to remove.
         * @param {boolean=} params.setModifiedDate Whether to set the modified date with the supplied modified date.
         * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
         * @param {string=} params.timedTextLanguage The language of the timed text.
         * @param {string=} params.timedTextTrackName The timed text track name.
         * @param {boolean=} params.updateViewedDate Whether to update the view date after successfully updating the file.
         * @param {boolean=} params.useContentAsIndexableText Whether to use the content as indexable text.
         * @param  {object} params.resource Media resource metadata
         * @param {object} params.media Media object
         * @param {string} params.media.mimeType Media mime-type
         * @param {string|object} params.media.body Media body contents
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
                    url: 'https://www.googleapis.com/drive/v2/files/{fileId}',
                    method: 'PUT'
                }, options),
                params: params,
                mediaUrl: 'https://www.googleapis.com/upload/drive/v2/files/{fileId}',
                requiredParams: ['fileId'],
                pathParams: ['fileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * drive.files.watch
         *
         * @desc Subscribe to changes on a file
         *
         * @alias drive.files.watch
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.acknowledgeAbuse Whether the user is acknowledging the risk of downloading known malware or other abusive files.
         * @param {string} params.fileId The ID for the file in question.
         * @param {string=} params.projection This parameter is deprecated and has no function.
         * @param {string=} params.revisionId Specifies the Revision ID that should be downloaded. Ignored unless alt=media is specified.
         * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
         * @param {boolean=} params.updateViewedDate Deprecated: Use files.update with modifiedDateBehavior=noChange, updateViewedDate=true and an empty request body.
         * @param {drive(v2).Channel} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        watch: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/drive/v2/files/{fileId}/watch',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['fileId'],
                pathParams: ['fileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.parents = {
        /**
         * drive.parents.delete
         *
         * @desc Removes a parent from a file.
         *
         * @alias drive.parents.delete
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID of the file.
         * @param {string} params.parentId The ID of the parent.
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
                    url: 'https://www.googleapis.com/drive/v2/files/{fileId}/parents/{parentId}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['fileId', 'parentId'],
                pathParams: ['fileId', 'parentId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * drive.parents.get
         *
         * @desc Gets a specific parent reference.
         *
         * @alias drive.parents.get
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID of the file.
         * @param {string} params.parentId The ID of the parent.
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
                    url: 'https://www.googleapis.com/drive/v2/files/{fileId}/parents/{parentId}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['fileId', 'parentId'],
                pathParams: ['fileId', 'parentId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * drive.parents.insert
         *
         * @desc Adds a parent folder for a file.
         *
         * @alias drive.parents.insert
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID of the file.
         * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
         * @param {drive(v2).ParentReference} params.resource Request body data
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
                    url: 'https://www.googleapis.com/drive/v2/files/{fileId}/parents',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['fileId'],
                pathParams: ['fileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * drive.parents.list
         *
         * @desc Lists a file's parents.
         *
         * @alias drive.parents.list
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID of the file.
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
                    url: 'https://www.googleapis.com/drive/v2/files/{fileId}/parents',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['fileId'],
                pathParams: ['fileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.permissions = {
        /**
         * drive.permissions.delete
         *
         * @desc Deletes a permission from a file or Team Drive.
         *
         * @alias drive.permissions.delete
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID for the file or Team Drive.
         * @param {string} params.permissionId The ID for the permission.
         * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
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
                    url: 'https://www.googleapis.com/drive/v2/files/{fileId}/permissions/{permissionId}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['fileId', 'permissionId'],
                pathParams: ['fileId', 'permissionId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * drive.permissions.get
         *
         * @desc Gets a permission by ID.
         *
         * @alias drive.permissions.get
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID for the file or Team Drive.
         * @param {string} params.permissionId The ID for the permission.
         * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
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
                    url: 'https://www.googleapis.com/drive/v2/files/{fileId}/permissions/{permissionId}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['fileId', 'permissionId'],
                pathParams: ['fileId', 'permissionId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * drive.permissions.getIdForEmail
         *
         * @desc Returns the permission ID for an email address.
         *
         * @alias drive.permissions.getIdForEmail
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.email The email address for which to return a permission ID
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getIdForEmail: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const parameters = {
                options: Object.assign({
                    url: 'https://www.googleapis.com/drive/v2/permissionIds/{email}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['email'],
                pathParams: ['email'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * drive.permissions.insert
         *
         * @desc Inserts a permission for a file or Team Drive.
         *
         * @alias drive.permissions.insert
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.emailMessage A custom message to include in notification emails.
         * @param {string} params.fileId The ID for the file or Team Drive.
         * @param {boolean=} params.sendNotificationEmails Whether to send notification emails when sharing to users or groups. This parameter is ignored and an email is sent if the role is owner.
         * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
         * @param {drive(v2).Permission} params.resource Request body data
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
                    url: 'https://www.googleapis.com/drive/v2/files/{fileId}/permissions',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['fileId'],
                pathParams: ['fileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * drive.permissions.list
         *
         * @desc Lists a file's or Team Drive's permissions.
         *
         * @alias drive.permissions.list
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID for the file or Team Drive.
         * @param {integer=} params.maxResults The maximum number of permissions to return per page. When not set for files in a Team Drive, at most 100 results will be returned. When not set for files that are not in a Team Drive, the entire list will be returned.
         * @param {string=} params.pageToken The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
         * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
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
                    url: 'https://www.googleapis.com/drive/v2/files/{fileId}/permissions',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['fileId'],
                pathParams: ['fileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * drive.permissions.patch
         *
         * @desc Updates a permission using patch semantics.
         *
         * @alias drive.permissions.patch
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID for the file or Team Drive.
         * @param {string} params.permissionId The ID for the permission.
         * @param {boolean=} params.removeExpiration Whether to remove the expiration date.
         * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
         * @param {boolean=} params.transferOwnership Whether changing a role to 'owner' downgrades the current owners to writers. Does nothing if the specified role is not 'owner'.
         * @param {drive(v2).Permission} params.resource Request body data
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
                    url: 'https://www.googleapis.com/drive/v2/files/{fileId}/permissions/{permissionId}',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['fileId', 'permissionId'],
                pathParams: ['fileId', 'permissionId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * drive.permissions.update
         *
         * @desc Updates a permission.
         *
         * @alias drive.permissions.update
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID for the file or Team Drive.
         * @param {string} params.permissionId The ID for the permission.
         * @param {boolean=} params.removeExpiration Whether to remove the expiration date.
         * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
         * @param {boolean=} params.transferOwnership Whether changing a role to 'owner' downgrades the current owners to writers. Does nothing if the specified role is not 'owner'.
         * @param {drive(v2).Permission} params.resource Request body data
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
                    url: 'https://www.googleapis.com/drive/v2/files/{fileId}/permissions/{permissionId}',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['fileId', 'permissionId'],
                pathParams: ['fileId', 'permissionId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.properties = {
        /**
         * drive.properties.delete
         *
         * @desc Deletes a property.
         *
         * @alias drive.properties.delete
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID of the file.
         * @param {string} params.propertyKey The key of the property.
         * @param {string=} params.visibility The visibility of the property.
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
                    url: 'https://www.googleapis.com/drive/v2/files/{fileId}/properties/{propertyKey}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['fileId', 'propertyKey'],
                pathParams: ['fileId', 'propertyKey'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * drive.properties.get
         *
         * @desc Gets a property by its key.
         *
         * @alias drive.properties.get
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID of the file.
         * @param {string} params.propertyKey The key of the property.
         * @param {string=} params.visibility The visibility of the property.
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
                    url: 'https://www.googleapis.com/drive/v2/files/{fileId}/properties/{propertyKey}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['fileId', 'propertyKey'],
                pathParams: ['fileId', 'propertyKey'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * drive.properties.insert
         *
         * @desc Adds a property to a file, or updates it if it already exists.
         *
         * @alias drive.properties.insert
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID of the file.
         * @param {drive(v2).Property} params.resource Request body data
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
                    url: 'https://www.googleapis.com/drive/v2/files/{fileId}/properties',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['fileId'],
                pathParams: ['fileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * drive.properties.list
         *
         * @desc Lists a file's properties.
         *
         * @alias drive.properties.list
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID of the file.
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
                    url: 'https://www.googleapis.com/drive/v2/files/{fileId}/properties',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['fileId'],
                pathParams: ['fileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * drive.properties.patch
         *
         * @desc Updates a property, or adds it if it doesn't exist. This method supports patch semantics.
         *
         * @alias drive.properties.patch
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID of the file.
         * @param {string} params.propertyKey The key of the property.
         * @param {string=} params.visibility The visibility of the property.
         * @param {drive(v2).Property} params.resource Request body data
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
                    url: 'https://www.googleapis.com/drive/v2/files/{fileId}/properties/{propertyKey}',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['fileId', 'propertyKey'],
                pathParams: ['fileId', 'propertyKey'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * drive.properties.update
         *
         * @desc Updates a property, or adds it if it doesn't exist.
         *
         * @alias drive.properties.update
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID of the file.
         * @param {string} params.propertyKey The key of the property.
         * @param {string=} params.visibility The visibility of the property.
         * @param {drive(v2).Property} params.resource Request body data
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
                    url: 'https://www.googleapis.com/drive/v2/files/{fileId}/properties/{propertyKey}',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['fileId', 'propertyKey'],
                pathParams: ['fileId', 'propertyKey'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.realtime = {
        /**
         * drive.realtime.get
         *
         * @desc Exports the contents of the Realtime API data model associated with this file as JSON.
         *
         * @alias drive.realtime.get
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID of the file that the Realtime API data model is associated with.
         * @param {integer=} params.revision The revision of the Realtime API data model to export. Revisions start at 1 (the initial empty data model) and are incremented with each change. If this parameter is excluded, the most recent data model will be returned.
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
                    url: 'https://www.googleapis.com/drive/v2/files/{fileId}/realtime',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['fileId'],
                pathParams: ['fileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * drive.realtime.update
         *
         * @desc Overwrites the Realtime API data model associated with this file with the provided JSON data model.
         *
         * @alias drive.realtime.update
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.baseRevision The revision of the model to diff the uploaded model against. If set, the uploaded model is diffed against the provided revision and those differences are merged with any changes made to the model after the provided revision. If not set, the uploaded model replaces the current model on the server.
         * @param {string} params.fileId The ID of the file that the Realtime API data model is associated with.
         * @param {object} params.media Media object
         * @param {string} params.media.mimeType Media mime-type
         * @param {string|object} params.media.body Media body contents
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
                    url: 'https://www.googleapis.com/drive/v2/files/{fileId}/realtime',
                    method: 'PUT'
                }, options),
                params: params,
                mediaUrl: 'https://www.googleapis.com/upload/drive/v2/files/{fileId}/realtime',
                requiredParams: ['fileId'],
                pathParams: ['fileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.replies = {
        /**
         * drive.replies.delete
         *
         * @desc Deletes a reply.
         *
         * @alias drive.replies.delete
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.commentId The ID of the comment.
         * @param {string} params.fileId The ID of the file.
         * @param {string} params.replyId The ID of the reply.
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
                    url: 'https://www.googleapis.com/drive/v2/files/{fileId}/comments/{commentId}/replies/{replyId}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['fileId', 'commentId', 'replyId'],
                pathParams: ['commentId', 'fileId', 'replyId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * drive.replies.get
         *
         * @desc Gets a reply.
         *
         * @alias drive.replies.get
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.commentId The ID of the comment.
         * @param {string} params.fileId The ID of the file.
         * @param {boolean=} params.includeDeleted If set, this will succeed when retrieving a deleted reply.
         * @param {string} params.replyId The ID of the reply.
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
                    url: 'https://www.googleapis.com/drive/v2/files/{fileId}/comments/{commentId}/replies/{replyId}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['fileId', 'commentId', 'replyId'],
                pathParams: ['commentId', 'fileId', 'replyId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * drive.replies.insert
         *
         * @desc Creates a new reply to the given comment.
         *
         * @alias drive.replies.insert
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.commentId The ID of the comment.
         * @param {string} params.fileId The ID of the file.
         * @param {drive(v2).CommentReply} params.resource Request body data
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
                    url: 'https://www.googleapis.com/drive/v2/files/{fileId}/comments/{commentId}/replies',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['fileId', 'commentId'],
                pathParams: ['commentId', 'fileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * drive.replies.list
         *
         * @desc Lists all of the replies to a comment.
         *
         * @alias drive.replies.list
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.commentId The ID of the comment.
         * @param {string} params.fileId The ID of the file.
         * @param {boolean=} params.includeDeleted If set, all replies, including deleted replies (with content stripped) will be returned.
         * @param {integer=} params.maxResults The maximum number of replies to include in the response, used for paging.
         * @param {string=} params.pageToken The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
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
                    url: 'https://www.googleapis.com/drive/v2/files/{fileId}/comments/{commentId}/replies',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['fileId', 'commentId'],
                pathParams: ['commentId', 'fileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * drive.replies.patch
         *
         * @desc Updates an existing reply. This method supports patch semantics.
         *
         * @alias drive.replies.patch
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.commentId The ID of the comment.
         * @param {string} params.fileId The ID of the file.
         * @param {string} params.replyId The ID of the reply.
         * @param {drive(v2).CommentReply} params.resource Request body data
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
                    url: 'https://www.googleapis.com/drive/v2/files/{fileId}/comments/{commentId}/replies/{replyId}',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['fileId', 'commentId', 'replyId'],
                pathParams: ['commentId', 'fileId', 'replyId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * drive.replies.update
         *
         * @desc Updates an existing reply.
         *
         * @alias drive.replies.update
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.commentId The ID of the comment.
         * @param {string} params.fileId The ID of the file.
         * @param {string} params.replyId The ID of the reply.
         * @param {drive(v2).CommentReply} params.resource Request body data
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
                    url: 'https://www.googleapis.com/drive/v2/files/{fileId}/comments/{commentId}/replies/{replyId}',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['fileId', 'commentId', 'replyId'],
                pathParams: ['commentId', 'fileId', 'replyId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.revisions = {
        /**
         * drive.revisions.delete
         *
         * @desc Removes a revision.
         *
         * @alias drive.revisions.delete
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID of the file.
         * @param {string} params.revisionId The ID of the revision.
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
                    url: 'https://www.googleapis.com/drive/v2/files/{fileId}/revisions/{revisionId}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['fileId', 'revisionId'],
                pathParams: ['fileId', 'revisionId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * drive.revisions.get
         *
         * @desc Gets a specific revision.
         *
         * @alias drive.revisions.get
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID of the file.
         * @param {string} params.revisionId The ID of the revision.
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
                    url: 'https://www.googleapis.com/drive/v2/files/{fileId}/revisions/{revisionId}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['fileId', 'revisionId'],
                pathParams: ['fileId', 'revisionId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * drive.revisions.list
         *
         * @desc Lists a file's revisions.
         *
         * @alias drive.revisions.list
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID of the file.
         * @param {integer=} params.maxResults Maximum number of revisions to return.
         * @param {string=} params.pageToken Page token for revisions. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
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
                    url: 'https://www.googleapis.com/drive/v2/files/{fileId}/revisions',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['fileId'],
                pathParams: ['fileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * drive.revisions.patch
         *
         * @desc Updates a revision. This method supports patch semantics.
         *
         * @alias drive.revisions.patch
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID for the file.
         * @param {string} params.revisionId The ID for the revision.
         * @param {drive(v2).Revision} params.resource Request body data
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
                    url: 'https://www.googleapis.com/drive/v2/files/{fileId}/revisions/{revisionId}',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['fileId', 'revisionId'],
                pathParams: ['fileId', 'revisionId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * drive.revisions.update
         *
         * @desc Updates a revision.
         *
         * @alias drive.revisions.update
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID for the file.
         * @param {string} params.revisionId The ID for the revision.
         * @param {drive(v2).Revision} params.resource Request body data
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
                    url: 'https://www.googleapis.com/drive/v2/files/{fileId}/revisions/{revisionId}',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['fileId', 'revisionId'],
                pathParams: ['fileId', 'revisionId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.teamdrives = {
        /**
         * drive.teamdrives.delete
         *
         * @desc Permanently deletes a Team Drive for which the user is an organizer. The Team Drive cannot contain any untrashed items.
         *
         * @alias drive.teamdrives.delete
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.teamDriveId The ID of the Team Drive
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
                    url: 'https://www.googleapis.com/drive/v2/teamdrives/{teamDriveId}',
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['teamDriveId'],
                pathParams: ['teamDriveId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * drive.teamdrives.get
         *
         * @desc Gets a Team Drive's metadata by ID.
         *
         * @alias drive.teamdrives.get
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.teamDriveId The ID of the Team Drive
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
                    url: 'https://www.googleapis.com/drive/v2/teamdrives/{teamDriveId}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['teamDriveId'],
                pathParams: ['teamDriveId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * drive.teamdrives.insert
         *
         * @desc Creates a new Team Drive.
         *
         * @alias drive.teamdrives.insert
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.requestId An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a Team Drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same Team Drive. If the Team Drive already exists a 409 error will be returned.
         * @param {drive(v2).TeamDrive} params.resource Request body data
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
                    url: 'https://www.googleapis.com/drive/v2/teamdrives',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['requestId'],
                pathParams: [],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * drive.teamdrives.list
         *
         * @desc Lists the user's Team Drives.
         *
         * @alias drive.teamdrives.list
         * @memberOf! drive(v2)
         *
         * @param {object=} params Parameters for request
         * @param {integer=} params.maxResults Maximum number of Team Drives to return.
         * @param {string=} params.pageToken Page token for Team Drives.
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
                    url: 'https://www.googleapis.com/drive/v2/teamdrives',
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
         * drive.teamdrives.update
         *
         * @desc Updates a Team Drive's metadata
         *
         * @alias drive.teamdrives.update
         * @memberOf! drive(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.teamDriveId The ID of the Team Drive
         * @param {drive(v2).TeamDrive} params.resource Request body data
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
                    url: 'https://www.googleapis.com/drive/v2/teamdrives/{teamDriveId}',
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['teamDriveId'],
                pathParams: ['teamDriveId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
}
module.exports = Drive;
//# sourceMappingURL=v2.js.map