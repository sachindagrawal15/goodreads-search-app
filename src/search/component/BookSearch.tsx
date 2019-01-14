import * as React from "react";
import * as _ from 'lodash';
import Select from 'react-select';
import {searchBook} from "../action/BookSearchAction";
import AppConstants from "../../utils/AppConstants";
const connectRedux = require('react-redux').connect;
import {Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export interface BookSearchProps {
    showLoader?: boolean;
    searchBook?: Function;
}

export interface BookSearchState {
    selectedOption?: any;
    searchText?: string;
}


@connectRedux(
    state => ({
        showLoader: state.appContext.showLoader
    }), { searchBook}
)
class BookSearch extends React.Component < BookSearchProps, BookSearchState> {

    constructor(props) {
        super(props);
        this.state = {
            selectedOption: null,
            searchText: ''
        }
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption.label);
    }

    handleSearch() {
        this.props.searchBook(this.state.selectedOption.value, this.state.searchText);
    }

    handleSearchTextChange(event){
        this.setState( {
            searchText: event.target.value
        });
    }


    render() {
        const { selectedOption } = this.state;
        return (
            <div>
                <div className="row">
                    <div className = "col-2">
                        <Select
                            value={selectedOption}
                            onChange={this.handleChange}
                            options= {AppConstants.BOOK_SEARCH_OPTIONS}
                        />
                    </div>
                    <div className = "col-2">
                        <input type = "text" value = {this.state.searchText} onChange={this.handleSearchTextChange.bind(this)}/>
                    </div>
                    <div className = "col-2">
                        <Button onClick={this.handleSearch.bind(this)} color="primary"> Search </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookSearch;