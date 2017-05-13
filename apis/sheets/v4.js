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
 * Google Sheets API
 *
 * Reads and writes Google Sheets.
 *
 * @example
 * const google = require('googleapis');
 * const sheets = google.sheets('v4');
 *
 * @namespace sheets
 * @type {Function}
 * @version v4
 * @variation v4
 * @param {object=} options Options for Sheets
 */
function Sheets(options) {
    const self = this;
    self._options = options || {};
    self.spreadsheets = {
        /**
         * sheets.spreadsheets.get
         *
         * @desc Returns the spreadsheet at the given ID. The caller must specify the spreadsheet ID.  By default, data within grids will not be returned. You can include grid data one of two ways:  * Specify a field mask listing your desired fields using the `fields` URL parameter in HTTP  * Set the includeGridData URL parameter to true.  If a field mask is set, the `includeGridData` parameter is ignored  For large spreadsheets, it is recommended to retrieve only the specific fields of the spreadsheet that you want.  To retrieve only subsets of the spreadsheet, use the ranges URL parameter. Multiple ranges can be specified.  Limiting the range will return only the portions of the spreadsheet that intersect the requested ranges. Ranges are specified using A1 notation.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Sheets API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/sheets
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var sheets = google.sheets('v4');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The spreadsheet to request.
         *     spreadsheetId: '',  // TODO: Update placeholder value.
         *
         *     // The ranges to retrieve from the spreadsheet.
         *     ranges: [],  // TODO: Update placeholder value.
         *
         *     // True if grid data should be returned.
         *     // This parameter is ignored if a field mask was set in the request.
         *     includeGridData: false,  // TODO: Update placeholder value.
         *
         *     auth: authClient
         *   };
         *
         *   sheets.spreadsheets.get(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See
         *   // https://developers.google.com/sheets/quickstart/nodejs#step_3_set_up_the_sample
         *   //
         *   // Authorize using one of the following scopes:
         *   //   'https://www.googleapis.com/auth/drive'
         *   //   'https://www.googleapis.com/auth/drive.readonly'
         *   //   'https://www.googleapis.com/auth/spreadsheets'
         *   //   'https://www.googleapis.com/auth/spreadsheets.readonly'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias sheets.spreadsheets.get
         * @memberOf! sheets(v4)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.ranges The ranges to retrieve from the spreadsheet.
         * @param {boolean=} params.includeGridData True if grid data should be returned. This parameter is ignored if a field mask was set in the request.
         * @param {string} params.spreadsheetId The spreadsheet to request.
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
                    url: 'https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}',
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['spreadsheetId'],
                pathParams: ['spreadsheetId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * sheets.spreadsheets.create
         *
         * @desc Creates a spreadsheet, returning the newly created spreadsheet.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Sheets API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/sheets
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var sheets = google.sheets('v4');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   sheets.spreadsheets.create(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See
         *   // https://developers.google.com/sheets/quickstart/nodejs#step_3_set_up_the_sample
         *   //
         *   // Authorize using one of the following scopes:
         *   //   'https://www.googleapis.com/auth/drive'
         *   //   'https://www.googleapis.com/auth/spreadsheets'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias sheets.spreadsheets.create
         * @memberOf! sheets(v4)
         *
         * @param {object} params Parameters for request
         * @param {sheets(v4).Spreadsheet} params.resource Request body data
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
                    url: 'https://sheets.googleapis.com/v4/spreadsheets',
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
         * sheets.spreadsheets.batchUpdate
         *
         * @desc Applies one or more updates to the spreadsheet.  Each request is validated before being applied. If any request is not valid then the entire request will fail and nothing will be applied.  Some requests have replies to give you some information about how they are applied. The replies will mirror the requests.  For example, if you applied 4 updates and the 3rd one had a reply, then the response will have 2 empty replies, the actual reply, and another empty reply, in that order.  Due to the collaborative nature of spreadsheets, it is not guaranteed that the spreadsheet will reflect exactly your changes after this completes, however it is guaranteed that the updates in the request will be applied together atomically. Your changes may be altered with respect to collaborator changes. If there are no collaborators, the spreadsheet should reflect your changes.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Sheets API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/sheets
         * // 2. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var sheets = google.sheets('v4');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The spreadsheet to apply the updates to.
         *     spreadsheetId: '',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // A list of updates to apply to the spreadsheet.
         *       requests: [],  // TODO: Update placeholder value.
         *
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient
         *   };
         *
         *   sheets.spreadsheets.batchUpdate(request, function(err, response) {
         *     if (err) {
         *       console.log(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   // TODO: Change placeholder below to generate authentication credentials. See
         *   // https://developers.google.com/sheets/quickstart/nodejs#step_3_set_up_the_sample
         *   //
         *   // Authorize using one of the following scopes:
         *   //   'https://www.googleapis.com/auth/drive'
         *   //   'https://www.googleapis.com/auth/spreadsheets'
         *   var authClient = null;
         *
         *   if (authClient == null) {
         *     console.log('authentication failed');
         *     return;
         *   }
         *   callback(authClient);
         * }
         *
         * @alias sheets.spreadsheets.batchUpdate
         * @memberOf! sheets(v4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.spreadsheetId The spreadsheet to apply the updates to.
         * @param {sheets(v4).BatchUpdateSpreadsheetRequest} params.resource Request body data
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
                    url: 'https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}:batchUpdate',
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['spreadsheetId'],
                pathParams: ['spreadsheetId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        sheets: {
            /**
             * sheets.spreadsheets.sheets.copyTo
             *
             * @desc Copies a single sheet from a spreadsheet to another spreadsheet. Returns the properties of the newly created sheet.
             *
             * @example
             * // BEFORE RUNNING:
             * // ---------------
             * // 1. If not already done, enable the Google Sheets API
             * //    and check the quota for your project at
             * //    https://console.developers.google.com/apis/api/sheets
             * // 2. Install the Node.js client library by running
             * //    `npm install googleapis --save`
             *
             * var google = require('googleapis');
             * var sheets = google.sheets('v4');
             *
             * authorize(function(authClient) {
             *   var request = {
             *     // The ID of the spreadsheet containing the sheet to copy.
             *     spreadsheetId: '',  // TODO: Update placeholder value.
             *
             *     // The ID of the sheet to copy.
             *     sheetId: 0,  // TODO: Update placeholder value.
             *
             *     resource: {
             *       // The ID of the spreadsheet to copy the sheet to.
             *       destinationSpreadsheetId: '',  // TODO: Update placeholder value.
             *
             *       // TODO: Add desired properties to the request body.
             *     },
             *
             *     auth: authClient
             *   };
             *
             *   sheets.spreadsheets.sheets.copyTo(request, function(err, response) {
             *     if (err) {
             *       console.log(err);
             *       return;
             *     }
             *
             *     // TODO: Change code below to process the `response` object:
             *     console.log(JSON.stringify(response, null, 2));
             *   });
             * });
             *
             * function authorize(callback) {
             *   // TODO: Change placeholder below to generate authentication credentials. See
             *   // https://developers.google.com/sheets/quickstart/nodejs#step_3_set_up_the_sample
             *   //
             *   // Authorize using one of the following scopes:
             *   //   'https://www.googleapis.com/auth/drive'
             *   //   'https://www.googleapis.com/auth/spreadsheets'
             *   var authClient = null;
             *
             *   if (authClient == null) {
             *     console.log('authentication failed');
             *     return;
             *   }
             *   callback(authClient);
             * }
             *
             * @alias sheets.spreadsheets.sheets.copyTo
             * @memberOf! sheets(v4)
             *
             * @param {object} params Parameters for request
             * @param {string} params.spreadsheetId The ID of the spreadsheet containing the sheet to copy.
             * @param {integer} params.sheetId The ID of the sheet to copy.
             * @param {sheets(v4).CopySheetToAnotherSpreadsheetRequest} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            copyTo: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const parameters = {
                    options: Object.assign({
                        url: 'https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/sheets/{sheetId}:copyTo',
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['spreadsheetId', 'sheetId'],
                    pathParams: ['spreadsheetId', 'sheetId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        },
        values: {
            /**
             * sheets.spreadsheets.values.batchGet
             *
             * @desc Returns one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more ranges.
             *
             * @example
             * // BEFORE RUNNING:
             * // ---------------
             * // 1. If not already done, enable the Google Sheets API
             * //    and check the quota for your project at
             * //    https://console.developers.google.com/apis/api/sheets
             * // 2. Install the Node.js client library by running
             * //    `npm install googleapis --save`
             *
             * var google = require('googleapis');
             * var sheets = google.sheets('v4');
             *
             * authorize(function(authClient) {
             *   var request = {
             *     // The ID of the spreadsheet to retrieve data from.
             *     spreadsheetId: '',  // TODO: Update placeholder value.
             *
             *     // The A1 notation of the values to retrieve.
             *     ranges: [],  // TODO: Update placeholder value.
             *
             *     // How values should be represented in the output.
             *     // The default render option is ValueRenderOption.FORMATTED_VALUE.
             *     valueRenderOption: '',  // TODO: Update placeholder value.
             *
             *     // How dates, times, and durations should be represented in the output.
             *     // This is ignored if value_render_option is
             *     // FORMATTED_VALUE.
             *     // The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
             *     dateTimeRenderOption: '',  // TODO: Update placeholder value.
             *
             *     auth: authClient
             *   };
             *
             *   sheets.spreadsheets.values.batchGet(request, function(err, response) {
             *     if (err) {
             *       console.log(err);
             *       return;
             *     }
             *
             *     // TODO: Change code below to process the `response` object:
             *     console.log(JSON.stringify(response, null, 2));
             *   });
             * });
             *
             * function authorize(callback) {
             *   // TODO: Change placeholder below to generate authentication credentials. See
             *   // https://developers.google.com/sheets/quickstart/nodejs#step_3_set_up_the_sample
             *   //
             *   // Authorize using one of the following scopes:
             *   //   'https://www.googleapis.com/auth/drive'
             *   //   'https://www.googleapis.com/auth/drive.readonly'
             *   //   'https://www.googleapis.com/auth/spreadsheets'
             *   //   'https://www.googleapis.com/auth/spreadsheets.readonly'
             *   var authClient = null;
             *
             *   if (authClient == null) {
             *     console.log('authentication failed');
             *     return;
             *   }
             *   callback(authClient);
             * }
             *
             * @alias sheets.spreadsheets.values.batchGet
             * @memberOf! sheets(v4)
             *
             * @param {object} params Parameters for request
             * @param {string} params.spreadsheetId The ID of the spreadsheet to retrieve data from.
             * @param {string=} params.valueRenderOption How values should be represented in the output. The default render option is ValueRenderOption.FORMATTED_VALUE.
             * @param {string=} params.dateTimeRenderOption How dates, times, and durations should be represented in the output. This is ignored if value_render_option is FORMATTED_VALUE. The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
             * @param {string=} params.ranges The A1 notation of the values to retrieve.
             * @param {string=} params.majorDimension The major dimension that results should use.  For example, if the spreadsheet data is: `A1=1,B1=2,A2=3,B2=4`, then requesting `range=A1:B2,majorDimension=ROWS` will return `[[1,2],[3,4]]`, whereas requesting `range=A1:B2,majorDimension=COLUMNS` will return `[[1,3],[2,4]]`.
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            batchGet: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const parameters = {
                    options: Object.assign({
                        url: 'https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values:batchGet',
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['spreadsheetId'],
                    pathParams: ['spreadsheetId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * sheets.spreadsheets.values.clear
             *
             * @desc Clears values from a spreadsheet. The caller must specify the spreadsheet ID and range. Only values are cleared -- all other properties of the cell (such as formatting, data validation, etc..) are kept.
             *
             * @example
             * // BEFORE RUNNING:
             * // ---------------
             * // 1. If not already done, enable the Google Sheets API
             * //    and check the quota for your project at
             * //    https://console.developers.google.com/apis/api/sheets
             * // 2. Install the Node.js client library by running
             * //    `npm install googleapis --save`
             *
             * var google = require('googleapis');
             * var sheets = google.sheets('v4');
             *
             * authorize(function(authClient) {
             *   var request = {
             *     // The ID of the spreadsheet to update.
             *     spreadsheetId: '',  // TODO: Update placeholder value.
             *
             *     // The A1 notation of the values to clear.
             *     range: '',  // TODO: Update placeholder value.
             *
             *     resource: {
             *       // TODO: Add desired properties to the request body.
             *     },
             *
             *     auth: authClient
             *   };
             *
             *   sheets.spreadsheets.values.clear(request, function(err, response) {
             *     if (err) {
             *       console.log(err);
             *       return;
             *     }
             *
             *     // TODO: Change code below to process the `response` object:
             *     console.log(JSON.stringify(response, null, 2));
             *   });
             * });
             *
             * function authorize(callback) {
             *   // TODO: Change placeholder below to generate authentication credentials. See
             *   // https://developers.google.com/sheets/quickstart/nodejs#step_3_set_up_the_sample
             *   //
             *   // Authorize using one of the following scopes:
             *   //   'https://www.googleapis.com/auth/drive'
             *   //   'https://www.googleapis.com/auth/spreadsheets'
             *   var authClient = null;
             *
             *   if (authClient == null) {
             *     console.log('authentication failed');
             *     return;
             *   }
             *   callback(authClient);
             * }
             *
             * @alias sheets.spreadsheets.values.clear
             * @memberOf! sheets(v4)
             *
             * @param {object} params Parameters for request
             * @param {string} params.spreadsheetId The ID of the spreadsheet to update.
             * @param {string} params.range The A1 notation of the values to clear.
             * @param {sheets(v4).ClearValuesRequest} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            clear: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const parameters = {
                    options: Object.assign({
                        url: 'https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values/{range}:clear',
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['spreadsheetId', 'range'],
                    pathParams: ['spreadsheetId', 'range'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * sheets.spreadsheets.values.append
             *
             * @desc Appends values to a spreadsheet. The input range is used to search for existing data and find a "table" within that range. Values will be appended to the next row of the table, starting with the first column of the table. See the [guide](/sheets/api/guides/values#appending_values) and [sample code](/sheets/api/samples/writing#append_values) for specific details of how tables are detected and data is appended.  The caller must specify the spreadsheet ID, range, and a valueInputOption.  The `valueInputOption` only controls how the input data will be added to the sheet (column-wise or row-wise), it does not influence what cell the data starts being written to.
             *
             * @example
             * // BEFORE RUNNING:
             * // ---------------
             * // 1. If not already done, enable the Google Sheets API
             * //    and check the quota for your project at
             * //    https://console.developers.google.com/apis/api/sheets
             * // 2. Install the Node.js client library by running
             * //    `npm install googleapis --save`
             *
             * var google = require('googleapis');
             * var sheets = google.sheets('v4');
             *
             * authorize(function(authClient) {
             *   var request = {
             *     // The ID of the spreadsheet to update.
             *     spreadsheetId: '',  // TODO: Update placeholder value.
             *
             *     // The A1 notation of a range to search for a logical table of data.
             *     // Values will be appended after the last row of the table.
             *     range: '',  // TODO: Update placeholder value.
             *
             *     // How the input data should be interpreted.
             *     valueInputOption: '',  // TODO: Update placeholder value.
             *
             *     // How the input data should be inserted.
             *     insertDataOption: '',  // TODO: Update placeholder value.
             *
             *     resource: {
             *       // TODO: Add desired properties to the request body.
             *     },
             *
             *     auth: authClient
             *   };
             *
             *   sheets.spreadsheets.values.append(request, function(err, response) {
             *     if (err) {
             *       console.log(err);
             *       return;
             *     }
             *
             *     // TODO: Change code below to process the `response` object:
             *     console.log(JSON.stringify(response, null, 2));
             *   });
             * });
             *
             * function authorize(callback) {
             *   // TODO: Change placeholder below to generate authentication credentials. See
             *   // https://developers.google.com/sheets/quickstart/nodejs#step_3_set_up_the_sample
             *   //
             *   // Authorize using one of the following scopes:
             *   //   'https://www.googleapis.com/auth/drive'
             *   //   'https://www.googleapis.com/auth/spreadsheets'
             *   var authClient = null;
             *
             *   if (authClient == null) {
             *     console.log('authentication failed');
             *     return;
             *   }
             *   callback(authClient);
             * }
             *
             * @alias sheets.spreadsheets.values.append
             * @memberOf! sheets(v4)
             *
             * @param {object} params Parameters for request
             * @param {string} params.range The A1 notation of a range to search for a logical table of data. Values will be appended after the last row of the table.
             * @param {boolean=} params.includeValuesInResponse Determines if the update response should include the values of the cells that were appended. By default, responses do not include the updated values.
             * @param {string} params.spreadsheetId The ID of the spreadsheet to update.
             * @param {string=} params.responseValueRenderOption Determines how values in the response should be rendered. The default render option is ValueRenderOption.FORMATTED_VALUE.
             * @param {string=} params.insertDataOption How the input data should be inserted.
             * @param {string=} params.valueInputOption How the input data should be interpreted.
             * @param {string=} params.responseDateTimeRenderOption Determines how dates, times, and durations in the response should be rendered. This is ignored if response_value_render_option is FORMATTED_VALUE. The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
             * @param {sheets(v4).ValueRange} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            append: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const parameters = {
                    options: Object.assign({
                        url: 'https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values/{range}:append',
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['spreadsheetId', 'range'],
                    pathParams: ['range', 'spreadsheetId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * sheets.spreadsheets.values.batchClear
             *
             * @desc Clears one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more ranges. Only values are cleared -- all other properties of the cell (such as formatting, data validation, etc..) are kept.
             *
             * @example
             * // BEFORE RUNNING:
             * // ---------------
             * // 1. If not already done, enable the Google Sheets API
             * //    and check the quota for your project at
             * //    https://console.developers.google.com/apis/api/sheets
             * // 2. Install the Node.js client library by running
             * //    `npm install googleapis --save`
             *
             * var google = require('googleapis');
             * var sheets = google.sheets('v4');
             *
             * authorize(function(authClient) {
             *   var request = {
             *     // The ID of the spreadsheet to update.
             *     spreadsheetId: '',  // TODO: Update placeholder value.
             *
             *     resource: {
             *       // The ranges to clear, in A1 notation.
             *       ranges: [],  // TODO: Update placeholder value.
             *
             *       // TODO: Add desired properties to the request body.
             *     },
             *
             *     auth: authClient
             *   };
             *
             *   sheets.spreadsheets.values.batchClear(request, function(err, response) {
             *     if (err) {
             *       console.log(err);
             *       return;
             *     }
             *
             *     // TODO: Change code below to process the `response` object:
             *     console.log(JSON.stringify(response, null, 2));
             *   });
             * });
             *
             * function authorize(callback) {
             *   // TODO: Change placeholder below to generate authentication credentials. See
             *   // https://developers.google.com/sheets/quickstart/nodejs#step_3_set_up_the_sample
             *   //
             *   // Authorize using one of the following scopes:
             *   //   'https://www.googleapis.com/auth/drive'
             *   //   'https://www.googleapis.com/auth/spreadsheets'
             *   var authClient = null;
             *
             *   if (authClient == null) {
             *     console.log('authentication failed');
             *     return;
             *   }
             *   callback(authClient);
             * }
             *
             * @alias sheets.spreadsheets.values.batchClear
             * @memberOf! sheets(v4)
             *
             * @param {object} params Parameters for request
             * @param {string} params.spreadsheetId The ID of the spreadsheet to update.
             * @param {sheets(v4).BatchClearValuesRequest} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            batchClear: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const parameters = {
                    options: Object.assign({
                        url: 'https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values:batchClear',
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['spreadsheetId'],
                    pathParams: ['spreadsheetId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * sheets.spreadsheets.values.get
             *
             * @desc Returns a range of values from a spreadsheet. The caller must specify the spreadsheet ID and a range.
             *
             * @example
             * // BEFORE RUNNING:
             * // ---------------
             * // 1. If not already done, enable the Google Sheets API
             * //    and check the quota for your project at
             * //    https://console.developers.google.com/apis/api/sheets
             * // 2. Install the Node.js client library by running
             * //    `npm install googleapis --save`
             *
             * var google = require('googleapis');
             * var sheets = google.sheets('v4');
             *
             * authorize(function(authClient) {
             *   var request = {
             *     // The ID of the spreadsheet to retrieve data from.
             *     spreadsheetId: '',  // TODO: Update placeholder value.
             *
             *     // The A1 notation of the values to retrieve.
             *     range: '',  // TODO: Update placeholder value.
             *
             *     // How values should be represented in the output.
             *     // The default render option is ValueRenderOption.FORMATTED_VALUE.
             *     valueRenderOption: '',  // TODO: Update placeholder value.
             *
             *     // How dates, times, and durations should be represented in the output.
             *     // This is ignored if value_render_option is
             *     // FORMATTED_VALUE.
             *     // The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
             *     dateTimeRenderOption: '',  // TODO: Update placeholder value.
             *
             *     auth: authClient
             *   };
             *
             *   sheets.spreadsheets.values.get(request, function(err, response) {
             *     if (err) {
             *       console.log(err);
             *       return;
             *     }
             *
             *     // TODO: Change code below to process the `response` object:
             *     console.log(JSON.stringify(response, null, 2));
             *   });
             * });
             *
             * function authorize(callback) {
             *   // TODO: Change placeholder below to generate authentication credentials. See
             *   // https://developers.google.com/sheets/quickstart/nodejs#step_3_set_up_the_sample
             *   //
             *   // Authorize using one of the following scopes:
             *   //   'https://www.googleapis.com/auth/drive'
             *   //   'https://www.googleapis.com/auth/drive.readonly'
             *   //   'https://www.googleapis.com/auth/spreadsheets'
             *   //   'https://www.googleapis.com/auth/spreadsheets.readonly'
             *   var authClient = null;
             *
             *   if (authClient == null) {
             *     console.log('authentication failed');
             *     return;
             *   }
             *   callback(authClient);
             * }
             *
             * @alias sheets.spreadsheets.values.get
             * @memberOf! sheets(v4)
             *
             * @param {object} params Parameters for request
             * @param {string} params.spreadsheetId The ID of the spreadsheet to retrieve data from.
             * @param {string} params.range The A1 notation of the values to retrieve.
             * @param {string=} params.valueRenderOption How values should be represented in the output. The default render option is ValueRenderOption.FORMATTED_VALUE.
             * @param {string=} params.dateTimeRenderOption How dates, times, and durations should be represented in the output. This is ignored if value_render_option is FORMATTED_VALUE. The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
             * @param {string=} params.majorDimension The major dimension that results should use.  For example, if the spreadsheet data is: `A1=1,B1=2,A2=3,B2=4`, then requesting `range=A1:B2,majorDimension=ROWS` will return `[[1,2],[3,4]]`, whereas requesting `range=A1:B2,majorDimension=COLUMNS` will return `[[1,3],[2,4]]`.
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
                        url: 'https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values/{range}',
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['spreadsheetId', 'range'],
                    pathParams: ['spreadsheetId', 'range'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * sheets.spreadsheets.values.update
             *
             * @desc Sets values in a range of a spreadsheet. The caller must specify the spreadsheet ID, range, and a valueInputOption.
             *
             * @example
             * // BEFORE RUNNING:
             * // ---------------
             * // 1. If not already done, enable the Google Sheets API
             * //    and check the quota for your project at
             * //    https://console.developers.google.com/apis/api/sheets
             * // 2. Install the Node.js client library by running
             * //    `npm install googleapis --save`
             *
             * var google = require('googleapis');
             * var sheets = google.sheets('v4');
             *
             * authorize(function(authClient) {
             *   var request = {
             *     // The ID of the spreadsheet to update.
             *     spreadsheetId: '',  // TODO: Update placeholder value.
             *
             *     // The A1 notation of the values to update.
             *     range: '',  // TODO: Update placeholder value.
             *
             *     // How the input data should be interpreted.
             *     valueInputOption: '',  // TODO: Update placeholder value.
             *
             *     resource: {
             *       // TODO: Add desired properties to the request body. All existing properties
             *       // will be replaced.
             *     },
             *
             *     auth: authClient
             *   };
             *
             *   sheets.spreadsheets.values.update(request, function(err, response) {
             *     if (err) {
             *       console.log(err);
             *       return;
             *     }
             *
             *     // TODO: Change code below to process the `response` object:
             *     console.log(JSON.stringify(response, null, 2));
             *   });
             * });
             *
             * function authorize(callback) {
             *   // TODO: Change placeholder below to generate authentication credentials. See
             *   // https://developers.google.com/sheets/quickstart/nodejs#step_3_set_up_the_sample
             *   //
             *   // Authorize using one of the following scopes:
             *   //   'https://www.googleapis.com/auth/drive'
             *   //   'https://www.googleapis.com/auth/spreadsheets'
             *   var authClient = null;
             *
             *   if (authClient == null) {
             *     console.log('authentication failed');
             *     return;
             *   }
             *   callback(authClient);
             * }
             *
             * @alias sheets.spreadsheets.values.update
             * @memberOf! sheets(v4)
             *
             * @param {object} params Parameters for request
             * @param {string} params.spreadsheetId The ID of the spreadsheet to update.
             * @param {string=} params.responseValueRenderOption Determines how values in the response should be rendered. The default render option is ValueRenderOption.FORMATTED_VALUE.
             * @param {string=} params.valueInputOption How the input data should be interpreted.
             * @param {string=} params.responseDateTimeRenderOption Determines how dates, times, and durations in the response should be rendered. This is ignored if response_value_render_option is FORMATTED_VALUE. The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
             * @param {boolean=} params.includeValuesInResponse Determines if the update response should include the values of the cells that were updated. By default, responses do not include the updated values. If the range to write was larger than than the range actually written, the response will include all values in the requested range (excluding trailing empty rows and columns).
             * @param {string} params.range The A1 notation of the values to update.
             * @param {sheets(v4).ValueRange} params.resource Request body data
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
                        url: 'https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values/{range}',
                        method: 'PUT'
                    }, options),
                    params: params,
                    requiredParams: ['spreadsheetId', 'range'],
                    pathParams: ['spreadsheetId', 'range'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * sheets.spreadsheets.values.batchUpdate
             *
             * @desc Sets values in one or more ranges of a spreadsheet. The caller must specify the spreadsheet ID, a valueInputOption, and one or more ValueRanges.
             *
             * @example
             * // BEFORE RUNNING:
             * // ---------------
             * // 1. If not already done, enable the Google Sheets API
             * //    and check the quota for your project at
             * //    https://console.developers.google.com/apis/api/sheets
             * // 2. Install the Node.js client library by running
             * //    `npm install googleapis --save`
             *
             * var google = require('googleapis');
             * var sheets = google.sheets('v4');
             *
             * authorize(function(authClient) {
             *   var request = {
             *     // The ID of the spreadsheet to update.
             *     spreadsheetId: '',  // TODO: Update placeholder value.
             *
             *     resource: {
             *       // How the input data should be interpreted.
             *       valueInputOption: '',  // TODO: Update placeholder value.
             *
             *       // The new values to apply to the spreadsheet.
             *       data: [],  // TODO: Update placeholder value.
             *
             *       // TODO: Add desired properties to the request body.
             *     },
             *
             *     auth: authClient
             *   };
             *
             *   sheets.spreadsheets.values.batchUpdate(request, function(err, response) {
             *     if (err) {
             *       console.log(err);
             *       return;
             *     }
             *
             *     // TODO: Change code below to process the `response` object:
             *     console.log(JSON.stringify(response, null, 2));
             *   });
             * });
             *
             * function authorize(callback) {
             *   // TODO: Change placeholder below to generate authentication credentials. See
             *   // https://developers.google.com/sheets/quickstart/nodejs#step_3_set_up_the_sample
             *   //
             *   // Authorize using one of the following scopes:
             *   //   'https://www.googleapis.com/auth/drive'
             *   //   'https://www.googleapis.com/auth/spreadsheets'
             *   var authClient = null;
             *
             *   if (authClient == null) {
             *     console.log('authentication failed');
             *     return;
             *   }
             *   callback(authClient);
             * }
             *
             * @alias sheets.spreadsheets.values.batchUpdate
             * @memberOf! sheets(v4)
             *
             * @param {object} params Parameters for request
             * @param {string} params.spreadsheetId The ID of the spreadsheet to update.
             * @param {sheets(v4).BatchUpdateValuesRequest} params.resource Request body data
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
                        url: 'https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values:batchUpdate',
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['spreadsheetId'],
                    pathParams: ['spreadsheetId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        }
    };
}
module.exports = Sheets;
//# sourceMappingURL=v4.js.map