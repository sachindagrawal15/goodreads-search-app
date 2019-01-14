"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const react_router_redux_1 = require("react-router-redux");
const AppReducer_1 = require("../common/reducer/AppReducer");
const combine_section_reducers_1 = require("combine-section-reducers");
const BookSearchReducer_1 = require("../search/reducer/BookSearchReducer");
const BookDetailsReducer_1 = require("../book/reducer/BookDetailsReducer");
exports.default = redux_1.combineReducers({
    routing: react_router_redux_1.routerReducer,
    appContext: AppReducer_1.default,
    bookSearchData: combine_section_reducers_1.default({
        bookSearchContext: BookSearchReducer_1.default,
        bookDetailsContext: BookDetailsReducer_1.default
    })
});
//# sourceMappingURL=RootReducer.js.map