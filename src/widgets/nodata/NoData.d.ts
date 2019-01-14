import * as React from "react";
export interface NoDataProps {
    message: string;
}
export interface NoDataState {
}
declare class NoData extends React.Component<NoDataProps, NoDataState> {
    constructor(props: any);
    render(): JSX.Element;
}
export default NoData;
