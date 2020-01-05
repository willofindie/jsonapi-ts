"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var pluralize = __importStar(require("pluralize"));
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
            return pluralize.plural(this.resourceName);
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
exports.SerializerUtils = SerializerUtils;
//# sourceMappingURL=serializer.js.map