import {IAuthor} from "./author";

export interface Book {
    id: number;
    title: string;
    author: IAuthor;
    numberOfPages?: number;
    averageRating?: number;
    isbn?: string;
    imageUrl?: string;
    publicationYear?: number;
    publicationMonth?: number;
    publicationDay?: number;
    ratingsCount?: number;
    reviewsCount?: number;
    description?: string;
    publisher?: string;
    url?: string;

}

export type IBook = Book;
