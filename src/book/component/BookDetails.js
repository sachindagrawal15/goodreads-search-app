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
const reactstrap_1 = require("reactstrap");
require("bootstrap/dist/css/bootstrap.min.css");
const BookDetailsAction_1 = require("../action/BookDetailsAction");
const SPINNER_ICON = require("../../assets/spinner.gif");
let BookDetails = class BookDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: false
        };
    }
    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.bookLoading != this.props.bookLoading && !nextProps.bookLoading) {
            console.log(nextProps.book);
        }
    }
    componentWillMount() {
        console.log("loading router...");
    }
    componentDidMount() {
        this.props.getBookDetails(this.props.match.params.id);
    }
    returnToSearchView() {
        this.props.history.goBack();
    }
    renderBackButton() {
        const back = "<- Back";
        return (React.createElement("div", { className: "back-details-view" },
            React.createElement(reactstrap_1.Button, { color: "link", onClick: this.returnToSearchView.bind(this) },
                " ",
                back,
                "  ")));
    }
    showDetails() {
        return (React.createElement("div", null,
            React.createElement("div", { className: "row" }, this.renderBackButton()),
            this.props.book && this.props.book.id ?
                React.createElement("div", null,
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-4" },
                            React.createElement("label", null, " Name: "),
                            React.createElement("label", { className: "font-weight-bold" },
                                " ",
                                this.props.book.title)),
                        React.createElement("div", { className: "col-4" },
                            React.createElement("label", null, " Author: "),
                            React.createElement("label", { className: "font-weight-bold" },
                                " ",
                                this.props.book.author ? this.props.book.author.name : " - "))),
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-4" },
                            React.createElement("label", null, " Published Date: "),
                            React.createElement("label", { className: "font-weight-bold" },
                                " ",
                                this.props.book.publicationYear)),
                        React.createElement("div", { className: "col-4" },
                            React.createElement("label", null, " Number of Pages: "),
                            React.createElement("label", { className: "font-weight-bold" },
                                " ",
                                this.props.book.numberOfPages))),
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-4" },
                            React.createElement("label", null, " Reviews: "),
                            React.createElement("label", { className: "font-weight-bold" },
                                " ",
                                this.props.book.reviewsCount)),
                        React.createElement("div", { className: "col-4" },
                            React.createElement("label", null, " Ratings: "),
                            React.createElement("label", { className: "font-weight-bold" },
                                " ",
                                this.props.book.ratingsCount))),
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-12" },
                            React.createElement("label", null, "Description:"))),
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-1" },
                            React.createElement("img", { src: this.props.book.imageUrl })),
                        React.createElement("div", { className: "col-11" },
                            React.createElement("label", { className: "font-weight-bold" },
                                " ",
                                this.props.book.description))))
                : React.createElement("div", null)));
    }
    showLoader() {
        return (React.createElement("img", { "data-src": SPINNER_ICON }));
    }
    render() {
        return (React.createElement("div", null, this.props.bookLoading ? this.showLoader() : this.showDetails()));
    }
};
BookDetails = __decorate([
    connectRedux(state => ({
        showLoader: state.appContext.showLoader,
        bookLoading: state.bookSearchData.bookDetailsContext.loadingBookDetails,
        book: state.bookSearchData.bookDetailsContext.bookDetails
    }), { getBookDetails: BookDetailsAction_1.getBookDetails }),
    __metadata("design:paramtypes", [Object])
], BookDetails);
exports.default = BookDetails;
//# sourceMappingURL=BookDetails.js.map