"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const AppContextAction_1 = require("../common/action/AppContextAction");
const BookSearch_1 = require("../search/component/BookSearch");
require("bootstrap/dist/css/bootstrap.min.css");
const SearchResult_1 = require("../search/component/SearchResult");
const connectRedux = require('react-redux').connect;
let GoodreadsSearchApp = class GoodreadsSearchApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        };
    }
    componentWillMount() {
        console.log("coming here");
        this.props.getAppContextData();
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("div", { className: "container-fluid" },
                React.createElement(BookSearch_1.default, null),
                React.createElement(SearchResult_1.default, { history: this.props.history }))));
    }
};
GoodreadsSearchApp = __decorate([
    connectRedux(state => ({
        showLoader: state.appContext.showLoader
    }), { getAppContextData: AppContextAction_1.getAppContextData }),
    __metadata("design:paramtypes", [Object])
], GoodreadsSearchApp);
exports.default = GoodreadsSearchApp;
//# sourceMappingURL=GoodreadsSearchApp.js.map