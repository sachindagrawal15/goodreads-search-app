import * as React from "react";

const NO_DATA_ICON = require("../../assets/noData.png");


export interface NoDataProps {
    message: string;
}

export interface NoDataState {

}

class NoData extends React.Component<NoDataProps, NoDataState> {

    constructor(props) {
        super(props)
    }

    render(){
        return (
            <div className = "no-data-warning">
                <div className = "center">
                    <img src={NO_DATA_ICON} width={10} height={10} />
                    <div className="text"> {this.props.message} </div>
                </div>
            </div>
        )

    }
}

export default NoData;