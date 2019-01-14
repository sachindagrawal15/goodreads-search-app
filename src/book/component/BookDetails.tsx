import * as React from "react";

const connectRedux = require('react-redux').connect;
import {Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {IBook} from "../../common/model/book";
import {getBookDetails} from "../action/BookDetailsAction";

const SPINNER_ICON = require("../../assets/spinner.gif");

export interface BookDetailsProps {
    showLoader?: boolean;
    book?: IBook;
    match?: any;
    history?: any;
    bookLoading ?: boolean;
    getBookDetails?: Function;
}

export interface BookDetailsState {
    loader?: boolean;
}


@connectRedux(
    state => ({
        showLoader: state.appContext.showLoader,
        bookLoading: state.bookSearchData.bookDetailsContext.loadingBookDetails,
        book: state.bookSearchData.bookDetailsContext.bookDetails
    }), {getBookDetails }
)
class BookDetails extends React.Component < BookDetailsProps, BookDetailsState> {

    constructor(props) {
        super(props);
        this.state = {
            loader: false
        }
    }

    public componentWillReceiveProps(nextProps: Readonly<BookDetailsProps>, nextContext: any): void {
        if(nextProps.bookLoading != this.props.bookLoading && !nextProps.bookLoading) {
            console.log(nextProps.book);
        }
    }

    public componentWillMount(): void {
        console.log("loading router...");
    }

    public componentDidMount(){
        this.props.getBookDetails(this.props.match.params.id);
    }

    private returnToSearchView(){
        this.props.history.goBack();
    }

    private renderBackButton(){
        const back = "<- Back";
        return (
            <div className="back-details-view">
                <Button color="link" onClick = { this.returnToSearchView.bind(this)} > {back}  </Button>
            </div>
        )
    }

    private showDetails(){
          return (
              <div>
                  <div className="row">
                      {this.renderBackButton()}
                  </div>
                    {this.props.book && this.props.book.id ?
                        <div>
                            <div className="row">
                                <div className = "col-4">
                                    <label> Name: </label>
                                    <label className="font-weight-bold"> {this.props.book.title}</label>
                                </div>
                                <div className = "col-4">
                                    <label> Author: </label>
                                    <label className="font-weight-bold"> {this.props.book.author ? this.props.book.author.name: " - "}</label>
                                </div>
                            </div>

                            <div className="row">
                                <div className = "col-4">
                                    <label> Published Date: </label>
                                    <label className="font-weight-bold"> {this.props.book.publicationYear}</label>
                                </div>
                                <div className = "col-4">
                                    <label> Number of Pages: </label>
                                    <label className="font-weight-bold"> {this.props.book.numberOfPages}</label>
                                </div>
                            </div>

                            <div className="row">
                                <div className = "col-4">
                                    <label> Reviews: </label>
                                    <label className="font-weight-bold"> {this.props.book.reviewsCount}</label>
                                </div>
                                <div className = "col-4">
                                    <label> Ratings: </label>
                                    <label className="font-weight-bold"> {this.props.book.ratingsCount}</label>
                                </div>
                            </div>

                            <div className="row">
                                <div className = "col-12">
                                    <label>Description:</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className = "col-1">
                                    <img src={this.props.book.imageUrl} />
                                </div>
                                <div className = "col-11">
                                    <label className="font-weight-bold"> {this.props.book.description}</label>
                                </div>

                            </div>

                        </div>
                        : <div/>
                    }
              </div>
        );
    }

    private showLoader(){
       return (<img  data-src={SPINNER_ICON} />);
    }

    render() {
        return (
            <div>
                {this.props.bookLoading? this.showLoader(): this.showDetails()}

            </div>
        );
    }
}

export default BookDetails;