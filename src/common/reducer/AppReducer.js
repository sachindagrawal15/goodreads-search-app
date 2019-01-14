"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AppContextAction_1 = require("../action/AppContextAction");
const initialState = {
    showLoader: true
};
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case AppContextAction_1.GET_APP_CONTEXT_DATA: {
            return state;
        }
        default:
            return state;
    }
};
exports.default = appReducer;
//# sourceMappingURL=AppReducer.js.map