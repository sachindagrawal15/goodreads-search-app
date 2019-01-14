import {IAppContext} from '../model/appContext';
import {MetaAction} from "../types/action";
import * as _ from 'lodash';
import {GET_APP_CONTEXT_DATA} from "../action/AppContextAction";

const initialState: IAppContext = {
    showLoader: true
};

const appReducer = (state: IAppContext = initialState, action: MetaAction<any,any>) => {
    switch(action.type) {
        case GET_APP_CONTEXT_DATA: {
            return state
        }

            default:
                return state;
    }
};

export default appReducer;