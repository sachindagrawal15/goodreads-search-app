"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isPromise(value) {
    if (value != null && typeof value == 'object') {
        return value.promise && typeof value.promise.then === 'function';
    }
}
exports.default = isPromise;
//# sourceMappingURL=is-promise.js.map