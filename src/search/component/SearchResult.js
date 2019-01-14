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
const connectRedux = require('react-redux').connect;
require("bootstrap/dist/css/bootstrap.min.css");
const ag_grid_react_1 = require("ag-grid-react");
require("ag-grid-community/dist/styles/ag-grid.css");
require("ag-grid-community/dist/styles/ag-theme-balham.css");
const ClickCellRenderer_1 = require("../../widgets/renderer/ClickCellRenderer");
let SearchResult = class SearchResult extends React.Component {
    constructor(props) {
        super(props);
        this.bookClickHandler = this.bookClickHandler.bind(this);
        this.state = {
            columnDefs: [
                { headerName: "Book Name", field: "book.title", sortable: true, filter: true,
                    cellRendererFramework: ClickCellRenderer_1.default,
                    cellRendererParams: {
                        onClick: this.bookClickHandler
                    }
                },
                { headerName: "Author", field: "book.author.name", sortable: true, filter: true },
                { headerName: "Rating", field: "averageRating", sortable: true, filter: true }
            ],
            rowData: []
        };
    }
    componentWillReceiveProps(nextProps, nextContext) {
        if (this.props.loading != nextProps.loading && !nextProps.loading) {
            this.setState({
                rowData: nextProps.works
            });
        }
    }
    bookClickHandler(bookId) {
        console.log("book click handler %o", bookId);
        this.props.history.push({ pathname: '/bookDetails/' + bookId, state: { id: bookId } });
    }
    render() {
        return (React.createElement("div", { className: "ag-theme-balham", style: {
                height: '500px',
                width: '600px'
            } },
            React.createElement(ag_grid_react_1.AgGridReact, { columnDefs: this.state.columnDefs, rowData: this.state.rowData })));
    }
};
SearchResult = __decorate([
    connectRedux(state => ({
        loading: state.bookSearchData.bookSearchContext.searchingBooks,
        works: state.bookSearchData.bookSearchContext.works
    }), {}),
    __metadata("design:paramtypes", [Object])
], SearchResult);
exports.default = SearchResult;
//# sourceMappingURL=SearchResult.js.map