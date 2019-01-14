import { IStore } from "./Store";
export declare class AppStore {
    private static _instance;
    private store;
    constructor(history: any, initialState?: IStore);
    static getInstance(history?: any): AppStore;
    getStore(): any;
}
