"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("file-loader?name=[name].[ext]!./settings.js");
const React = require("react");
const ReactDOM = require("react-dom");
const react_router_dom_1 = require("react-router-dom");
const react_router_redux_1 = require("react-router-redux");
const react_redux_1 = require("react-redux");
const AppStore_1 = require("./store/AppStore");
const createHashHistory_1 = require("history/createHashHistory");
const GoodreadsSearchApp_1 = require("./main/GoodreadsSearchApp");
const BookDetails_1 = require("./book/component/BookDetails");
const history = createHashHistory_1.default();
const store = AppStore_1.AppStore.getInstance(history).getStore();
const appWrapper = document.getElementById('maindiv');
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: store },
    React.createElement(react_router_redux_1.ConnectedRouter, { history: history },
        React.createElement("div", { className: "App" },
            React.createElement(react_router_dom_1.Switch, null,
                React.createElement(react_router_dom_1.Route, { exact: true, path: '/', component: GoodreadsSearchApp_1.default }),
                React.createElement(react_router_dom_1.Route, { path: '*bookDetails/:id', component: BookDetails_1.default }),
                React.createElement(react_router_dom_1.Route, { path: '/GoodreadsSearchApp', component: GoodreadsSearchApp_1.default }),
                React.createElement(react_router_dom_1.Route, { path: '/Home', component: GoodreadsSearchApp_1.default }))))), appWrapper);
//# sourceMappingURL=Entry.js.map