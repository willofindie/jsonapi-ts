'use strict';
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorUtils = function (errors) {
    return errors.reduce(function (_errors, error) {
        _errors.push(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (error.id && { id: error.id })), (error.status && { status: error.status })), (error.code && { code: error.code })), (error.title && { title: error.title })), (error.detail && { detail: error.detail })), (error.source && {
            source: __assign(__assign({}, (error.source.pointer && { pointer: error.source.pointer })), (error.source.parameter && { parameter: error.source.parameter }))
        })), (error.links && { links: { about: error.links.about } })), (error.meta && { meta: error.meta })));
        return _errors;
    }, []);
};
//# sourceMappingURL=error.js.map