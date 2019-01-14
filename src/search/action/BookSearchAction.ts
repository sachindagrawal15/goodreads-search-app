import BookApi from "../../api/BookApi";

export const REQUEST_SEARCH_BOOK = "book/searchBook";
export const SUCCESS_SEARCH_BOOK = "book/successSearchBook";
export const ERROR_SEARCH_BOOK = "book/errorSearchBook";

export function searchBook(searchType: string, searchText: string){
    return {
        types: [REQUEST_SEARCH_BOOK, SUCCESS_SEARCH_BOOK, ERROR_SEARCH_BOOK],
        payload: {
            promise: BookApi.searchBook(searchType, searchText)
        }
    }
}