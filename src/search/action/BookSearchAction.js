"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BookApi_1 = require("../../api/BookApi");
exports.REQUEST_SEARCH_BOOK = "book/searchBook";
exports.SUCCESS_SEARCH_BOOK = "book/successSearchBook";
exports.ERROR_SEARCH_BOOK = "book/errorSearchBook";
function searchBook(searchType, searchText) {
    return {
        types: [exports.REQUEST_SEARCH_BOOK, exports.SUCCESS_SEARCH_BOOK, exports.ERROR_SEARCH_BOOK],
        payload: {
            promise: BookApi_1.default.searchBook(searchType, searchText)
        }
    };
}
exports.searchBook = searchBook;
//# sourceMappingURL=BookSearchAction.js.map