/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var ErrorUtils = function (errors) {
    return errors.reduce(function (_errors, error) {
        _errors.push(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (error.id && { id: error.id })), (error.status && { status: error.status })), (error.code && { code: error.code })), (error.title && { title: error.title })), (error.detail && { detail: error.detail })), (error.source && {
            source: __assign(__assign({}, (error.source.pointer && { pointer: error.source.pointer })), (error.source.parameter && { parameter: error.source.parameter }))
        })), (error.links && { links: { about: error.links.about } })), (error.meta && { meta: error.meta })));
        return _errors;
    }, []);
};

var JSONAPIError = /** @class */ (function () {
    function JSONAPIError(opts) {
        var _opts = opts || [];
        this.errors = Array.isArray(_opts) ? ErrorUtils(_opts) : ErrorUtils([_opts]);
    }
    return JSONAPIError;
}());

// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)

export { JSONAPIError };
//# sourceMappingURL=index.es5.js.map
