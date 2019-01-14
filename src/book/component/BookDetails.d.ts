import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { IBook } from "../../common/model/book";
export interface BookDetailsProps {
    showLoader?: boolean;
    book?: IBook;
    match?: any;
    history?: any;
    bookLoading?: boolean;
    getBookDetails?: Function;
}
export interface BookDetailsState {
    loader?: boolean;
}
declare class BookDetails extends React.Component<BookDetailsProps, BookDetailsState> {
    constructor(props: any);
    componentWillReceiveProps(nextProps: Readonly<BookDetailsProps>, nextContext: any): void;
    componentWillMount(): void;
    componentDidMount(): void;
    private returnToSearchView;
    private renderBackButton;
    private showDetails;
    private showLoader;
    render(): JSX.Element;
}
export default BookDetails;
