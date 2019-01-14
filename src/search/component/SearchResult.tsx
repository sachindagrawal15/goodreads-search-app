import * as React from "react";
import * as _ from 'lodash';
import Select from 'react-select';
import AppConstants from "../../utils/AppConstants";
const connectRedux = require('react-redux').connect;
import {Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import {IWork} from "../../common/model/work";
import NoData from "../../widgets/nodata/NoData";
import {IBook} from "../../common/model/book";
import ClickCellRenderer from "../../widgets/renderer/ClickCellRenderer";

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


@connectRedux(
    state => ({
        loading: state.bookSearchData.bookSearchContext.searchingBooks,
        works: state.bookSearchData.bookSearchContext.works
    }), { }
)
class SearchResult extends React.Component < SearchResultProps, SearchResultState> {

    constructor(props) {
        super(props);
        this.bookClickHandler = this.bookClickHandler.bind(this);
        this.state = {
            columnDefs: [
                {headerName: "Book Name", field: "book.title", sortable: true, filter: true,
                    cellRendererFramework: ClickCellRenderer,
                    cellRendererParams: {
                        onClick: this.bookClickHandler
                    }
                },
                {headerName: "Author", field: "book.author.name", sortable: true, filter: true},
                {headerName: "Rating", field: "averageRating", sortable: true, filter: true}

            ],
            rowData: []
        }
    }

    componentWillReceiveProps(nextProps: Readonly<SearchResultProps>, nextContext: any): void {
        if(this.props.loading != nextProps.loading && !nextProps.loading) {
            this.setState({
                rowData: nextProps.works
            })
        }
    }

    private bookClickHandler(bookId?: any){
        console.log("book click handler %o", bookId);
        this.props.history.push({pathname: '/bookDetails/' + bookId, state: {id: bookId} });
    }

    render() {
       return (
           <div
               className="ag-theme-balham"
               style={{
                   height: '500px',
                   width: '600px' }}
           >
                   <AgGridReact
                       columnDefs={this.state.columnDefs}
                       rowData={this.state.rowData}>
                   </AgGridReact>

           </div>
       );
    }
}

export default SearchResult;