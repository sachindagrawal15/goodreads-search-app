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
const react_select_1 = require("react-select");
const BookSearchAction_1 = require("../action/BookSearchAction");
const AppConstants_1 = require("../../utils/AppConstants");
const connectRedux = require('react-redux').connect;
const reactstrap_1 = require("reactstrap");
require("bootstrap/dist/css/bootstrap.min.css");
let BookSearch = class BookSearch extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = (selectedOption) => {
            this.setState({ selectedOption });
            console.log(`Option selected:`, selectedOption.label);
        };
        this.state = {
            selectedOption: null,
            searchText: ''
        };
    }
    handleSearch() {
        this.props.searchBook(this.state.selectedOption.value, this.state.searchText);
    }
    handleSearchTextChange(event) {
        this.setState({
            searchText: event.target.value
        });
    }
    render() {
        const { selectedOption } = this.state;
        return (React.createElement("div", null,
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-2" },
                    React.createElement(react_select_1.default, { value: selectedOption, onChange: this.handleChange, options: AppConstants_1.default.BOOK_SEARCH_OPTIONS })),
                React.createElement("div", { className: "col-2" },
                    React.createElement("input", { type: "text", value: this.state.searchText, onChange: this.handleSearchTextChange.bind(this) })),
                React.createElement("div", { className: "col-2" },
                    React.createElement(reactstrap_1.Button, { onClick: this.handleSearch.bind(this), color: "primary" }, " Search ")))));
    }
};
BookSearch = __decorate([
    connectRedux(state => ({
        showLoader: state.appContext.showLoader
    }), { searchBook: BookSearchAction_1.searchBook }),
    __metadata("design:paramtypes", [Object])
], BookSearch);
exports.default = BookSearch;
//# sourceMappingURL=BookSearch.js.map