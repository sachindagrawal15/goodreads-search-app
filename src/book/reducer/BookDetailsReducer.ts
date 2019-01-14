import {
    REQUEST_BOOK_DETAILS, SUCCESS_BOOK_DETAILS, ERROR_BOOK_DETAILS
} from "../action/BookDetailsAction";

import {MetaAction} from "../../common/types/action";

import * as _ from 'lodash';
import {IBookSearchState, IWork} from "../../common/model/work";
import {IBook} from "../../common/model/book";

const initialState: IBookSearchState = {
    works: [],
    searchingBooks: false,
    loadingBookDetails: false,
    bookDetails: null
};

const BookDetailsReducer = (state: IBookSearchState = initialState, action: MetaAction<any,any>) => {
    switch(action.type) {
        case REQUEST_BOOK_DETAILS: {
            return <IBookSearchState>_.assign({}, state, {loadingBookDetails: true})
        }

        case ERROR_BOOK_DETAILS: {
            return <IBookSearchState>_.assign({}, state, {loadingBookDetails: false})
        }

        case SUCCESS_BOOK_DETAILS: {
            let payload = action.payload as IBook;
            let bookDetails = payload;
            return <IBookSearchState>_.assign({}, state, {bookDetails: bookDetails, loadingBookDetails: false})
        }

        default:
            return state;
    }
};

export default BookDetailsReducer;