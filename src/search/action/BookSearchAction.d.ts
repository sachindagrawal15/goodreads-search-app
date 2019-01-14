export declare const REQUEST_SEARCH_BOOK = "book/searchBook";
export declare const SUCCESS_SEARCH_BOOK = "book/successSearchBook";
export declare const ERROR_SEARCH_BOOK = "book/errorSearchBook";
export declare function searchBook(searchType: string, searchText: string): {
    types: string[];
    payload: {
        promise: Promise<any>;
    };
};
