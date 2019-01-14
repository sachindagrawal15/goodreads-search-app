import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
export interface GoodreadsSearchAppProps {
    showLoader?: boolean;
    getAppContextData: Function;
    history?: any;
}
export interface GoodreadsSearchAppState {
    toggle: boolean;
}
declare class GoodreadsSearchApp extends React.Component<GoodreadsSearchAppProps, GoodreadsSearchAppState> {
    constructor(props: any);
    componentWillMount(): void;
    render(): JSX.Element;
}
export default GoodreadsSearchApp;
