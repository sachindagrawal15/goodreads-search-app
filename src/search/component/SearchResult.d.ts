import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { IWork } from "../../common/model/work";
export interface SearchResultProps {
    loading?: boolean;
    searchBook?: Function;
    works?: Array<IWork>;
    history?: any;
}
export interface SearchResultState {
    columnDefs?: any;
    rowData?: any;
}
declare class SearchResult extends React.Component<SearchResultProps, SearchResultState> {
    constructor(props: any);
    componentWillReceiveProps(nextProps: Readonly<SearchResultProps>, nextContext: any): void;
    private bookClickHandler;
    render(): JSX.Element;
}
export default SearchResult;
