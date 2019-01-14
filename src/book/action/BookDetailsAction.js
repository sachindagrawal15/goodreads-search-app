"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BookApi_1 = require("../../api/BookApi");
exports.REQUEST_BOOK_DETAILS = "book/bookDetails";
exports.SUCCESS_BOOK_DETAILS = "book/successBookDetails";
exports.ERROR_BOOK_DETAILS = "book/errorBookDetails";
function getBookDetails(id) {
    return {
        types: [exports.REQUEST_BOOK_DETAILS, exports.SUCCESS_BOOK_DETAILS, exports.ERROR_BOOK_DETAILS],
        payload: {
            promise: BookApi_1.default.getBookDetails(id)
        }
    };
}
exports.getBookDetails = getBookDetails;
//# sourceMappingURL=BookDetailsAction.js.map