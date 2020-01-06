"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var serializer_1 = require("./utils/serializer");
var JSONAPISerializer = /** @class */ (function () {
    function JSONAPISerializer(resourceName, opts) {
        this.resourceName = resourceName;
        this.opts = opts;
    }
    JSONAPISerializer.prototype.getResource = function (record) {
        return new serializer_1.SerializerUtils()
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
exports.JSONAPISerializer = JSONAPISerializer;
//# sourceMappingURL=serializer.js.map