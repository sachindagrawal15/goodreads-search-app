import BaseConfigApi from './BaseConfigApi';
export declare class BookApi extends BaseConfigApi {
    constructor();
    searchBook(searchType: string, searchText: string): Promise<any>;
    getBookDetails(id: number): Promise<any>;
}
declare const _default: BookApi;
export default _default;
