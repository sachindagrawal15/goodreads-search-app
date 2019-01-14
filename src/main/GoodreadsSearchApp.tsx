import * as React from "react";
import * as _ from 'lodash';
import {getAppContextData} from "../common/action/AppContextAction";
import BookSearch from "../search/component/BookSearch";
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchResult from "../search/component/SearchResult";
import {Link} from 'react-router-dom';
const connectRedux = require('react-redux').connect;

export interface GoodreadsSearchAppProps {
	showLoader?: boolean;
    getAppContextData: Function;
    history?: any;
}

export interface GoodreadsSearchAppState {
	toggle: boolean;

}


@connectRedux(
    state => ({
        showLoader: state.appContext.showLoader
    }), { getAppContextData}
)
class GoodreadsSearchApp extends React.Component < GoodreadsSearchAppProps, GoodreadsSearchAppState> {
	constructor(props) {
		super(props);
		this.state = {
			toggle: false
		};
	}

	componentWillMount(){
		console.log("coming here");
		this.props.getAppContextData();
	}

	render() {
		
		return (
			<div>
				<div className = "container-fluid">
					<BookSearch />
					<SearchResult history = {this.props.history}/>
				</div>
			</div>
		);
	}
}

export default GoodreadsSearchApp;	
		

		