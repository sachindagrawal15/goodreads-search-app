import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
export interface BookSearchProps {
    showLoader?: boolean;
    searchBook?: Function;
}
export interface BookSearchState {
    selectedOption?: any;
    searchText?: string;
}
declare class BookSearch extends React.Component<BookSearchProps, BookSearchState> {
    constructor(props: any);
    handleChange: (selectedOption: any) => void;
    handleSearch(): void;
    handleSearchTextChange(event: any): void;
    render(): JSX.Element;
}
export default BookSearch;
