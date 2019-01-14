import { MetaAction } from "../../common/types/action";
import { IBookSearchState } from "../../common/model/work";
declare const BookDetailsReducer: (state: IBookSearchState, action: MetaAction<any, any>) => IBookSearchState;
export default BookDetailsReducer;
