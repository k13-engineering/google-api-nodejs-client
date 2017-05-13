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
 * const drive = google.drive('v3');
 *
 * @namespace drive
 * @type {Function}
 * @version v3
 * @variation v3
 * @param {object=} options Options for Drive
 */
function Drive(options) {
    const self = this;
    self._options = options || {};
    self.about = {
        /**
         * drive.about.get
         *
         * @desc Gets information about the user, the user's Drive, and system capabilities.
         *
         * @alias drive.about.get
         * @memberOf! drive(v3)
         *
         * @param {object=} params Parameters for request
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
                    url: 'https://www.googleapis.com/drive/v3/about',
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
         * drive.changes.getStartPageToken
         *
         * @desc Gets the starting pageToken for listing future changes.
         *
         * @alias drive.changes.getStartPageToken
         * @memberOf! drive(v3)
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
                    url: 'https://www.googleapis.com/drive/v3/changes/startPageToken',
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
         * @memberOf! drive(v3)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.includeCorpusRemovals Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.
         * @param {boolean=} params.includeRemoved Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.
         * @param {boolean=} params.includeTeamDriveItems Whether Team Drive files or changes should be included in results.
         * @param {integer=} params.pageSize The maximum number of changes to return per page.
         * @param {string} params.pageToken The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method.
         * @param {boolean=} params.restrictToMyDrive Whether to restrict the results to changes inside the My Drive hierarchy. This omits changes to files such as those in the Application Data folder or shared files which have not been added to My Drive.
         * @param {string=} params.spaces A comma-separated list of spaces to query within the user corpus. Supported values are 'drive', 'appDataFolder' and 'photos'.
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
                    url: 'https://www.googleapis.com/drive/v3/changes',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['pageToken'],
                pathParams: [],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * drive.changes.watch
         *
         * @desc Subscribes to changes for a user.
         *
         * @alias drive.changes.watch
         * @memberOf! drive(v3)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.includeCorpusRemovals Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.
         * @param {boolean=} params.includeRemoved Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.
         * @param {boolean=} params.includeTeamDriveItems Whether Team Drive files or changes should be included in results.
         * @param {integer=} params.pageSize The maximum number of changes to return per page.
         * @param {string} params.pageToken The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method.
         * @param {boolean=} params.restrictToMyDrive Whether to restrict the results to changes inside the My Drive hierarchy. This omits changes to files such as those in the Application Data folder or shared files which have not been added to My Drive.
         * @param {string=} params.spaces A comma-separated list of spaces to query within the user corpus. Supported values are 'drive', 'appDataFolder' and 'photos'.
         * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
         * @param {string=} params.teamDriveId The Team Drive from which changes will be returned. If specified the change IDs will be reflective of the Team Drive; use the combined Team Drive ID and change ID as an identifier.
         * @param {drive(v3).Channel} params.resource Request body data
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
                    url: 'https://www.googleapis.com/drive/v3/changes/watch',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['pageToken'],
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
         * @memberOf! drive(v3)
         *
         * @param {object} params Parameters for request
         * @param {drive(v3).Channel} params.resource Request body data
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
                    url: 'https://www.googleapis.com/drive/v3/channels/stop',
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
    self.comments = {
        /**
         * drive.comments.create
         *
         * @desc Creates a new comment on a file.
         *
         * @alias drive.comments.create
         * @memberOf! drive(v3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID of the file.
         * @param {drive(v3).Comment} params.resource Request body data
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
                    url: 'https://www.googleapis.com/drive/v3/files/{fileId}/comments',
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
         * drive.comments.delete
         *
         * @desc Deletes a comment.
         *
         * @alias drive.comments.delete
         * @memberOf! drive(v3)
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
                    url: 'https://www.googleapis.com/drive/v3/files/{fileId}/comments/{commentId}',
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
         * @memberOf! drive(v3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.commentId The ID of the comment.
         * @param {string} params.fileId The ID of the file.
         * @param {boolean=} params.includeDeleted Whether to return deleted comments. Deleted comments will not include their original content.
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
                    url: 'https://www.googleapis.com/drive/v3/files/{fileId}/comments/{commentId}',
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
         * drive.comments.list
         *
         * @desc Lists a file's comments.
         *
         * @alias drive.comments.list
         * @memberOf! drive(v3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID of the file.
         * @param {boolean=} params.includeDeleted Whether to include deleted comments. Deleted comments will not include their original content.
         * @param {integer=} params.pageSize The maximum number of comments to return per page.
         * @param {string=} params.pageToken The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
         * @param {string=} params.startModifiedTime The minimum value of 'modifiedTime' for the result comments (RFC 3339 date-time).
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
                    url: 'https://www.googleapis.com/drive/v3/files/{fileId}/comments',
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
         * drive.comments.update
         *
         * @desc Updates a comment with patch semantics.
         *
         * @alias drive.comments.update
         * @memberOf! drive(v3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.commentId The ID of the comment.
         * @param {string} params.fileId The ID of the file.
         * @param {drive(v3).Comment} params.resource Request body data
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
                    url: 'https://www.googleapis.com/drive/v3/files/{fileId}/comments/{commentId}',
                    method: 'PATCH'
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
         * @desc Creates a copy of a file and applies any requested updates with patch semantics.
         *
         * @alias drive.files.copy
         * @memberOf! drive(v3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID of the file.
         * @param {boolean=} params.ignoreDefaultVisibility Whether to ignore the domain's default visibility settings for the created file. Domain administrators can choose to make all uploaded files visible to the domain by default; this parameter bypasses that behavior for the request. Permissions are still inherited from parent folders.
         * @param {boolean=} params.keepRevisionForever Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Drive.
         * @param {string=} params.ocrLanguage A language hint for OCR processing during image import (ISO 639-1 code).
         * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
         * @param {drive(v3).File} params.resource Request body data
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
                    url: 'https://www.googleapis.com/drive/v3/files/{fileId}/copy',
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
         * drive.files.create
         *
         * @desc Creates a new file.
         *
         * @alias drive.files.create
         * @memberOf! drive(v3)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.ignoreDefaultVisibility Whether to ignore the domain's default visibility settings for the created file. Domain administrators can choose to make all uploaded files visible to the domain by default; this parameter bypasses that behavior for the request. Permissions are still inherited from parent folders.
         * @param {boolean=} params.keepRevisionForever Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Drive.
         * @param {string=} params.ocrLanguage A language hint for OCR processing during image import (ISO 639-1 code).
         * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
         * @param {boolean=} params.useContentAsIndexableText Whether to use the uploaded content as indexable text.
         * @param  {object} params.resource Media resource metadata
         * @param {object} params.media Media object
         * @param {string} params.media.mimeType Media mime-type
         * @param {string|object} params.media.body Media body contents
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
                    url: 'https://www.googleapis.com/drive/v3/files',
                    method: 'POST'
                }, options),
                params: params,
                mediaUrl: 'https://www.googleapis.com/upload/drive/v3/files',
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * drive.files.delete
         *
         * @desc Permanently deletes a file owned by the user without moving it to the trash. If the file belongs to a Team Drive the user must be an organizer on the parent. If the target is a folder, all descendants owned by the user are also deleted.
         *
         * @alias drive.files.delete
         * @memberOf! drive(v3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID of the file.
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
                    url: 'https://www.googleapis.com/drive/v3/files/{fileId}',
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
         * @memberOf! drive(v3)
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
                    url: 'https://www.googleapis.com/drive/v3/files/trash',
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
         * @memberOf! drive(v3)
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
                    url: 'https://www.googleapis.com/drive/v3/files/{fileId}/export',
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
         * @desc Generates a set of file IDs which can be provided in create requests.
         *
         * @alias drive.files.generateIds
         * @memberOf! drive(v3)
         *
         * @param {object=} params Parameters for request
         * @param {integer=} params.count The number of IDs to return.
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
                    url: 'https://www.googleapis.com/drive/v3/files/generateIds',
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
         * @desc Gets a file's metadata or content by ID.
         *
         * @alias drive.files.get
         * @memberOf! drive(v3)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.acknowledgeAbuse Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when alt=media.
         * @param {string} params.fileId The ID of the file.
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
                    url: 'https://www.googleapis.com/drive/v3/files/{fileId}',
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
         * drive.files.list
         *
         * @desc Lists or searches files.
         *
         * @alias drive.files.list
         * @memberOf! drive(v3)
         *
         * @param {object=} params Parameters for request
         * @param {string=} params.corpora Comma-separated list of bodies of items (files/documents) to which the query applies. Supported bodies are 'user', 'domain', 'teamDrive' and 'allTeamDrives'. 'allTeamDrives' must be combined with 'user'; all other values must be used in isolation. Prefer 'user' or 'teamDrive' to 'allTeamDrives' for efficiency.
         * @param {string=} params.corpus The source of files to list. Deprecated: use 'corpora' instead.
         * @param {boolean=} params.includeTeamDriveItems Whether Team Drive items should be included in results.
         * @param {string=} params.orderBy A comma-separated list of sort keys. Valid keys are 'createdTime', 'folder', 'modifiedByMeTime', 'modifiedTime', 'name', 'quotaBytesUsed', 'recency', 'sharedWithMeTime', 'starred', and 'viewedByMeTime'. Each key sorts ascending by default, but may be reversed with the 'desc' modifier. Example usage: ?orderBy=folder,modifiedTime desc,name. Please note that there is a current limitation for users with approximately one million files in which the requested sort order is ignored.
         * @param {integer=} params.pageSize The maximum number of files to return per page. Partial or empty result pages are possible even before the end of the files list has been reached.
         * @param {string=} params.pageToken The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
         * @param {string=} params.q A query for filtering the file results. See the "Search for Files" guide for supported syntax.
         * @param {string=} params.spaces A comma-separated list of spaces to query within the corpus. Supported values are 'drive', 'appDataFolder' and 'photos'.
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
                    url: 'https://www.googleapis.com/drive/v3/files',
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
         * drive.files.update
         *
         * @desc Updates a file's metadata and/or content with patch semantics.
         *
         * @alias drive.files.update
         * @memberOf! drive(v3)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.addParents A comma-separated list of parent IDs to add.
         * @param {string} params.fileId The ID of the file.
         * @param {boolean=} params.keepRevisionForever Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Drive.
         * @param {string=} params.ocrLanguage A language hint for OCR processing during image import (ISO 639-1 code).
         * @param {string=} params.removeParents A comma-separated list of parent IDs to remove.
         * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
         * @param {boolean=} params.useContentAsIndexableText Whether to use the uploaded content as indexable text.
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
                    url: 'https://www.googleapis.com/drive/v3/files/{fileId}',
                    method: 'PATCH'
                }, options),
                params: params,
                mediaUrl: 'https://www.googleapis.com/upload/drive/v3/files/{fileId}',
                requiredParams: ['fileId'],
                pathParams: ['fileId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * drive.files.watch
         *
         * @desc Subscribes to changes to a file
         *
         * @alias drive.files.watch
         * @memberOf! drive(v3)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.acknowledgeAbuse Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when alt=media.
         * @param {string} params.fileId The ID of the file.
         * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
         * @param {drive(v3).Channel} params.resource Request body data
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
                    url: 'https://www.googleapis.com/drive/v3/files/{fileId}/watch',
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
    self.permissions = {
        /**
         * drive.permissions.create
         *
         * @desc Creates a permission for a file or Team Drive.
         *
         * @alias drive.permissions.create
         * @memberOf! drive(v3)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.emailMessage A custom message to include in the notification email.
         * @param {string} params.fileId The ID of the file or Team Drive.
         * @param {boolean=} params.sendNotificationEmail Whether to send a notification email when sharing to users or groups. This defaults to true for users and groups, and is not allowed for other requests. It must not be disabled for ownership transfers.
         * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
         * @param {boolean=} params.transferOwnership Whether to transfer ownership to the specified user and downgrade the current owner to a writer. This parameter is required as an acknowledgement of the side effect.
         * @param {drive(v3).Permission} params.resource Request body data
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
                    url: 'https://www.googleapis.com/drive/v3/files/{fileId}/permissions',
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
         * drive.permissions.delete
         *
         * @desc Deletes a permission.
         *
         * @alias drive.permissions.delete
         * @memberOf! drive(v3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID of the file or Team Drive.
         * @param {string} params.permissionId The ID of the permission.
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
                    url: 'https://www.googleapis.com/drive/v3/files/{fileId}/permissions/{permissionId}',
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
         * @memberOf! drive(v3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID of the file.
         * @param {string} params.permissionId The ID of the permission.
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
                    url: 'https://www.googleapis.com/drive/v3/files/{fileId}/permissions/{permissionId}',
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
         * drive.permissions.list
         *
         * @desc Lists a file's or Team Drive's permissions.
         *
         * @alias drive.permissions.list
         * @memberOf! drive(v3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID of the file or Team Drive.
         * @param {integer=} params.pageSize The maximum number of permissions to return per page. When not set for files in a Team Drive, at most 100 results will be returned. When not set for files that are not in a Team Drive, the entire list will be returned.
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
                    url: 'https://www.googleapis.com/drive/v3/files/{fileId}/permissions',
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
         * drive.permissions.update
         *
         * @desc Updates a permission with patch semantics.
         *
         * @alias drive.permissions.update
         * @memberOf! drive(v3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID of the file or Team Drive.
         * @param {string} params.permissionId The ID of the permission.
         * @param {boolean=} params.removeExpiration Whether to remove the expiration date.
         * @param {boolean=} params.supportsTeamDrives Whether the requesting application supports Team Drives.
         * @param {boolean=} params.transferOwnership Whether to transfer ownership to the specified user and downgrade the current owner to a writer. This parameter is required as an acknowledgement of the side effect.
         * @param {drive(v3).Permission} params.resource Request body data
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
                    url: 'https://www.googleapis.com/drive/v3/files/{fileId}/permissions/{permissionId}',
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['fileId', 'permissionId'],
                pathParams: ['fileId', 'permissionId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.replies = {
        /**
         * drive.replies.create
         *
         * @desc Creates a new reply to a comment.
         *
         * @alias drive.replies.create
         * @memberOf! drive(v3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.commentId The ID of the comment.
         * @param {string} params.fileId The ID of the file.
         * @param {drive(v3).Reply} params.resource Request body data
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
                    url: 'https://www.googleapis.com/drive/v3/files/{fileId}/comments/{commentId}/replies',
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
         * drive.replies.delete
         *
         * @desc Deletes a reply.
         *
         * @alias drive.replies.delete
         * @memberOf! drive(v3)
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
                    url: 'https://www.googleapis.com/drive/v3/files/{fileId}/comments/{commentId}/replies/{replyId}',
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
         * @desc Gets a reply by ID.
         *
         * @alias drive.replies.get
         * @memberOf! drive(v3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.commentId The ID of the comment.
         * @param {string} params.fileId The ID of the file.
         * @param {boolean=} params.includeDeleted Whether to return deleted replies. Deleted replies will not include their original content.
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
                    url: 'https://www.googleapis.com/drive/v3/files/{fileId}/comments/{commentId}/replies/{replyId}',
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
         * drive.replies.list
         *
         * @desc Lists a comment's replies.
         *
         * @alias drive.replies.list
         * @memberOf! drive(v3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.commentId The ID of the comment.
         * @param {string} params.fileId The ID of the file.
         * @param {boolean=} params.includeDeleted Whether to include deleted replies. Deleted replies will not include their original content.
         * @param {integer=} params.pageSize The maximum number of replies to return per page.
         * @param {string=} params.pageToken The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
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
                    url: 'https://www.googleapis.com/drive/v3/files/{fileId}/comments/{commentId}/replies',
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
         * drive.replies.update
         *
         * @desc Updates a reply with patch semantics.
         *
         * @alias drive.replies.update
         * @memberOf! drive(v3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.commentId The ID of the comment.
         * @param {string} params.fileId The ID of the file.
         * @param {string} params.replyId The ID of the reply.
         * @param {drive(v3).Reply} params.resource Request body data
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
                    url: 'https://www.googleapis.com/drive/v3/files/{fileId}/comments/{commentId}/replies/{replyId}',
                    method: 'PATCH'
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
         * @desc Permanently deletes a revision. This method is only applicable to files with binary content in Drive.
         *
         * @alias drive.revisions.delete
         * @memberOf! drive(v3)
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
                    url: 'https://www.googleapis.com/drive/v3/files/{fileId}/revisions/{revisionId}',
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
         * @desc Gets a revision's metadata or content by ID.
         *
         * @alias drive.revisions.get
         * @memberOf! drive(v3)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.acknowledgeAbuse Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when alt=media.
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
                    url: 'https://www.googleapis.com/drive/v3/files/{fileId}/revisions/{revisionId}',
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
         * @memberOf! drive(v3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID of the file.
         * @param {integer=} params.pageSize The maximum number of revisions to return per page.
         * @param {string=} params.pageToken The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
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
                    url: 'https://www.googleapis.com/drive/v3/files/{fileId}/revisions',
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
         * drive.revisions.update
         *
         * @desc Updates a revision with patch semantics.
         *
         * @alias drive.revisions.update
         * @memberOf! drive(v3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID of the file.
         * @param {string} params.revisionId The ID of the revision.
         * @param {drive(v3).Revision} params.resource Request body data
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
                    url: 'https://www.googleapis.com/drive/v3/files/{fileId}/revisions/{revisionId}',
                    method: 'PATCH'
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
         * drive.teamdrives.create
         *
         * @desc Creates a new Team Drive.
         *
         * @alias drive.teamdrives.create
         * @memberOf! drive(v3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.requestId An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a Team Drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same Team Drive. If the Team Drive already exists a 409 error will be returned.
         * @param {drive(v3).TeamDrive} params.resource Request body data
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
                    url: 'https://www.googleapis.com/drive/v3/teamdrives',
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
         * drive.teamdrives.delete
         *
         * @desc Permanently deletes a Team Drive for which the user is an organizer. The Team Drive cannot contain any untrashed items.
         *
         * @alias drive.teamdrives.delete
         * @memberOf! drive(v3)
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
                    url: 'https://www.googleapis.com/drive/v3/teamdrives/{teamDriveId}',
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
         * @memberOf! drive(v3)
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
                    url: 'https://www.googleapis.com/drive/v3/teamdrives/{teamDriveId}',
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
         * drive.teamdrives.list
         *
         * @desc Lists the user's Team Drives.
         *
         * @alias drive.teamdrives.list
         * @memberOf! drive(v3)
         *
         * @param {object=} params Parameters for request
         * @param {integer=} params.pageSize Maximum number of Team Drives to return.
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
                    url: 'https://www.googleapis.com/drive/v3/teamdrives',
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
         * @memberOf! drive(v3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.teamDriveId The ID of the Team Drive
         * @param {drive(v3).TeamDrive} params.resource Request body data
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
                    url: 'https://www.googleapis.com/drive/v3/teamdrives/{teamDriveId}',
                    method: 'PATCH'
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
//# sourceMappingURL=v3.js.map