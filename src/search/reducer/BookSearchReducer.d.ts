import { MetaAction } from "../../common/types/action";
import { IBookSearchState } from "../../common/model/work";
declare const BookSearchReducer: (state: IBookSearchState, action: MetaAction<any, any>) => IBookSearchState;
export default BookSearchReducer;
