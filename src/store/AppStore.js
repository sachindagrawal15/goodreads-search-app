"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const redux_thunk_1 = require("redux-thunk");
const promise_middleware_1 = require("../middleware/promise-middleware");
const react_router_redux_1 = require("react-router-redux");
const redux_logger_1 = require("redux-logger");
const RootReducer_1 = require("../reducer/RootReducer");
class AppStore {
    constructor(history, initialState) {
        const logger = redux_logger_1.createLogger();
        const middleware = [react_router_redux_1.routerMiddleware(history), promise_middleware_1.default(), redux_thunk_1.default, logger];
        const finalCreateStore = redux_1.compose(redux_1.applyMiddleware(...middleware))(redux_1.createStore);
        this.store = finalCreateStore(RootReducer_1.default, initialState);
    }
    static getInstance(history) {
        return this._instance || (this._instance = new this(history));
    }
    getStore() {
        return this.store;
    }
}
exports.AppStore = AppStore;
//# sourceMappingURL=AppStore.js.map