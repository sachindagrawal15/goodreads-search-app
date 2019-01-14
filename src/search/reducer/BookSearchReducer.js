"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BookSearchAction_1 = require("../action/BookSearchAction");
const _ = require("lodash");
const initialState = {
    works: [],
    searchingBooks: false
};
const BookSearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case BookSearchAction_1.REQUEST_SEARCH_BOOK: {
            return _.assign({}, state, { searchingBooks: true });
        }
        case BookSearchAction_1.ERROR_SEARCH_BOOK: {
            return _.assign({}, state, { searchingBooks: false });
        }
        case BookSearchAction_1.SUCCESS_SEARCH_BOOK: {
            let payload = action.payload;
            let worksFromResult = payload;
            return _.assign({}, state, { works: worksFromResult, searchingBooks: false });
        }
        default:
            return state;
    }
};
exports.default = BookSearchReducer;
//# sourceMappingURL=BookSearchReducer.js.map