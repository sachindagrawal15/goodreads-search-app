export default function promiseMiddleware(): ({ dispatch, getState }: {
    dispatch: any;
    getState: any;
}) => (next: any) => (action: any) => any;
