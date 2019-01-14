import * as _ from 'lodash';
import isPromise from '../utils/is-promise';

export default function promiseMiddleware(){
    return({dispatch, getState}) => {
        return next => action => {
            if (!isPromise(action.payload)) {
                return next(action);
            }

            const {types, payload, meta} = action;
            const {promise, data} = payload;
            const [REQUEST, SUCCESS, FAILURE] = types;

            dispatch(_.assign({},
                {type: REQUEST},
                data ? {payload: data} : {},
                meta ? {meta} : {}
            ));

            return promise.then(
                result => {
                    dispatch({
                        type: SUCCESS,
                        payload: _.isArray(result) ? result.map((entry: any) => entry.data) : result ? result.data : null,
                        meta
                    });
                },
                error => {
                    dispatch({
                        type: FAILURE,
                        payload: error,
                        meta
                    });
                }
            );
        };

    };
}