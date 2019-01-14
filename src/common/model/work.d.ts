import { IBook } from "./book";
export interface Work {
    yearOfOriginalPublication?: number;
    monthOfOriginalPublication?: number;
    dayOfOriginalPublication?: number;
    averageRating?: number;
    book: IBook;
}
export declare type IWork = Work;
export declare type IBookSearchState = {
    works: Array<IWork>;
    searchingBooks?: boolean;
    bookDetails?: IBook;
    loadingBookDetails?: boolean;
};
