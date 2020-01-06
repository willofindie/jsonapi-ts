import { plural } from 'pluralize';

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

var SerializerUtils = /** @class */ (function () {
    function SerializerUtils() {
        this.resourceName = '';
        this.opts = { attributes: [] };
    }
    Object.defineProperty(SerializerUtils.prototype, "id", {
        get: function () {
            return this.opts.id || 'id';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SerializerUtils.prototype, "type", {
        get: function () {
            return plural(this.resourceName);
        },
        enumerable: true,
        configurable: true
    });
    SerializerUtils.prototype.withName = function (resourceName) {
        this.resourceName = resourceName;
        return this;
    };
    SerializerUtils.prototype.withOptions = function (opts) {
        this.opts = opts;
        return this;
    };
    SerializerUtils.prototype.getAttributes = function (record) {
        var _this = this;
        return Object.keys(record)
            .filter(function (key) { return _this.opts.attributes.includes(key); })
            .reduce(function (_record, key) {
            var _a;
            return (__assign(__assign({}, _record), (_a = {}, _a[key] = record[key], _a)));
        }, {});
    };
    SerializerUtils.prototype.build = function (record) {
        return {
            id: record[this.id],
            type: this.type,
            attributes: this.getAttributes(record)
        };
    };
    return SerializerUtils;
}());

var JSONAPISerializer = /** @class */ (function () {
    function JSONAPISerializer(resourceName, opts) {
        this.resourceName = resourceName;
        this.opts = opts;
    }
    JSONAPISerializer.prototype.getResource = function (record) {
        return new SerializerUtils()
            .withName(this.resourceName)
            .withOptions(this.opts)
            .build(record);
    };
    JSONAPISerializer.prototype.getCollection = function (records) {
        var _this = this;
        return {
            data: records.map(function (record) { return _this.getResource(record); })
        };
    };
    JSONAPISerializer.prototype.serialize = function (records) {
        if (Array.isArray(records)) {
            return this.getCollection(records);
        }
        return {
            data: this.getResource(records)
        };
    };
    return JSONAPISerializer;
}());

export { JSONAPIError, JSONAPISerializer };
//# sourceMappingURL=index.esm.js.map
