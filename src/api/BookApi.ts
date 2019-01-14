import BaseConfigApi from './BaseConfigApi';
import Endpoints from "./Endpoints";

export class BookApi extends BaseConfigApi {
    constructor(){
        super()
    }

    public searchBook(searchType: string, searchText: string){
        return this.get(Endpoints.searchBook, {"searchType": searchType, "searchText": searchText});
    }

    public getBookDetails(id: number) {
        return this.get(Endpoints.bookDetails, {"id": id});
    }
}

export default new BookApi();