"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseConfigApi_1 = require("./BaseConfigApi");
const Endpoints_1 = require("./Endpoints");
class BookApi extends BaseConfigApi_1.default {
    constructor() {
        super();
    }
    searchBook(searchType, searchText) {
        return this.get(Endpoints_1.default.searchBook, { "searchType": searchType, "searchText": searchText });
    }
    getBookDetails(id) {
        return this.get(Endpoints_1.default.bookDetails, { "id": id });
    }
}
exports.BookApi = BookApi;
exports.default = new BookApi();
//# sourceMappingURL=BookApi.js.map