import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import appReducer from "../common/reducer/AppReducer";
import combineSectionReducers from 'combine-section-reducers';
import BookSearchReducer from "../search/reducer/BookSearchReducer";
import BookDetailsReducer from "../book/reducer/BookDetailsReducer";

export default combineReducers({
    routing: routerReducer,
    appContext: appReducer,
    bookSearchData: combineSectionReducers({
        bookSearchContext: BookSearchReducer,
        bookDetailsContext: BookDetailsReducer
    })
});