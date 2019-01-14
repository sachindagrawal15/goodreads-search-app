export declare const REQUEST_BOOK_DETAILS = "book/bookDetails";
export declare const SUCCESS_BOOK_DETAILS = "book/successBookDetails";
export declare const ERROR_BOOK_DETAILS = "book/errorBookDetails";
export declare function getBookDetails(id: number): {
    types: string[];
    payload: {
        promise: Promise<any>;
    };
};
