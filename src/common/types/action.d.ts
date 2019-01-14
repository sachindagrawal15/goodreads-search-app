export interface PayloadAction<P> {
    type: string;
    payload?: P;
}

export interface MetaAction<P,M> extends PayloadAction<Payload> {
    meta?: M;
}

export interface PromiseAction {
    types: string[],
    payload: {
        promise: Promise
    },
    meta?: any;
}