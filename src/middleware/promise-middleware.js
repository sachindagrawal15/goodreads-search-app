"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const is_promise_1 = require("../utils/is-promise");
function promiseMiddleware() {
    return ({ dispatch, getState }) => {
        return next => action => {
            if (!is_promise_1.default(action.payload)) {
                return next(action);
            }
            const { types, payload, meta } = action;
            const { promise, data } = payload;
            const [REQUEST, SUCCESS, FAILURE] = types;
            dispatch(_.assign({}, { type: REQUEST }, data ? { payload: data } : {}, meta ? { meta } : {}));
            return promise.then(result => {
                dispatch({
                    type: SUCCESS,
                    payload: _.isArray(result) ? result.map((entry) => entry.data) : result ? result.data : null,
                    meta
                });
            }, error => {
                dispatch({
                    type: FAILURE,
                    payload: error,
                    meta
                });
            });
        };
    };
}
exports.default = promiseMiddleware;
//# sourceMappingURL=promise-middleware.js.map