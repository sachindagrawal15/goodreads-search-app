import "file-loader?name=[name].[ext]!./settings.js";

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Route, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import {Provider} from 'react-redux';
import {AppStore} from './store/AppStore';
import createHistory from 'history/createHashHistory';
import GoodreadsSearchApp from "./main/GoodreadsSearchApp";
import BookDetails from "./book/component/BookDetails";


const history = createHistory();
const store = AppStore.getInstance(history).getStore();
const appWrapper = document.getElementById('maindiv');


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history = {history} >
		<div className = "App">
			<Switch>
				<Route exact path='/' component = {GoodreadsSearchApp} />
				<Route path='*bookDetails/:id' component = {BookDetails} />
				<Route path='/GoodreadsSearchApp' component = {GoodreadsSearchApp} />
				<Route path='/Home' component = {GoodreadsSearchApp} />
			</Switch>
		</div>
	</ConnectedRouter>		
  </Provider>, appWrapper);  