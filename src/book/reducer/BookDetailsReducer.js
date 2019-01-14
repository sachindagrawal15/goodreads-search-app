"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BookDetailsAction_1 = require("../action/BookDetailsAction");
const _ = require("lodash");
const initialState = {
    works: [],
    searchingBooks: false,
    loadingBookDetails: false,
    bookDetails: null
};
const BookDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case BookDetailsAction_1.REQUEST_BOOK_DETAILS: {
            return _.assign({}, state, { loadingBookDetails: true });
        }
        case BookDetailsAction_1.ERROR_BOOK_DETAILS: {
            return _.assign({}, state, { loadingBookDetails: false });
        }
        case BookDetailsAction_1.SUCCESS_BOOK_DETAILS: {
            let payload = action.payload;
            let bookDetails = payload;
            return _.assign({}, state, { bookDetails: bookDetails, loadingBookDetails: false });
        }
        default:
            return state;
    }
};
exports.default = BookDetailsReducer;
//# sourceMappingURL=BookDetailsReducer.js.map