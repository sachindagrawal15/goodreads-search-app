import {createStore, applyMiddleware, compose, Store} from "redux";
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from "../middleware/promise-middleware";
import {IStore} from "./Store";
import {routerMiddleware} from "react-router-redux";
import {createLogger} from 'redux-logger';
import RootReducer from "../reducer/RootReducer";


export class AppStore {
    private static _instance: AppStore;


    private store: any;

    constructor(history: any, initialState?: IStore) {
        const logger = createLogger();
        const middleware = [routerMiddleware(history), promiseMiddleware(), thunkMiddleware, logger];
        const finalCreateStore = compose(applyMiddleware(...middleware))(createStore);
        this.store = finalCreateStore(RootReducer, initialState);
    }

    public static getInstance(history? : any){
        return this._instance || (this._instance = new this(history));
    }

    public getStore() {
        return this.store;
    }
}