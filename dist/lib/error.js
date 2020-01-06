"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_1 = require("./utils/error");
var JSONAPIError = /** @class */ (function () {
    function JSONAPIError(opts) {
        var _opts = opts || [];
        this.errors = Array.isArray(_opts) ? error_1.ErrorUtils(_opts) : error_1.ErrorUtils([_opts]);
    }
    return JSONAPIError;
}());
exports.JSONAPIError = JSONAPIError;
//# sourceMappingURL=error.js.map