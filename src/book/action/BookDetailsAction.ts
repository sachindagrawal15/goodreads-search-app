import BookApi from "../../api/BookApi";

export const REQUEST_BOOK_DETAILS = "book/bookDetails";
export const SUCCESS_BOOK_DETAILS = "book/successBookDetails";
export const ERROR_BOOK_DETAILS = "book/errorBookDetails";

export function getBookDetails(id: number){
    return {
        types: [REQUEST_BOOK_DETAILS, SUCCESS_BOOK_DETAILS, ERROR_BOOK_DETAILS],
        payload: {
            promise: BookApi.getBookDetails(id)
        }
    }
}