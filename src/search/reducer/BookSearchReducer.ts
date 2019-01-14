import {
    REQUEST_SEARCH_BOOK, SUCCESS_SEARCH_BOOK, ERROR_SEARCH_BOOK
} from "../action/BookSearchAction";

import {MetaAction} from "../../common/types/action";

import * as _ from 'lodash';
import {IBookSearchState, IWork} from "../../common/model/work";
import {IAppContext} from "../../common/model/appContext";
import {GET_APP_CONTEXT_DATA} from "../../common/action/AppContextAction";

const initialState: IBookSearchState = {
     works: [],
     searchingBooks: false
};

const BookSearchReducer = (state: IBookSearchState = initialState, action: MetaAction<any,any>) => {
    switch(action.type) {
        case REQUEST_SEARCH_BOOK: {
            return <IBookSearchState>_.assign({}, state, {searchingBooks: true})
        }

        case ERROR_SEARCH_BOOK: {
            return <IBookSearchState>_.assign({}, state, {searchingBooks: false})
        }

        case SUCCESS_SEARCH_BOOK: {
            let payload = action.payload as Array<IWork>;
            let worksFromResult = payload;
            return <IBookSearchState>_.assign({}, state, {works:worksFromResult, searchingBooks: false})
        }

        default:
            return state;
    }
};

export default BookSearchReducer;