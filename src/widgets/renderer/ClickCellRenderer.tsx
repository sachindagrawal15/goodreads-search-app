import * as React from 'react';
import {Link} from 'react-router-dom';


class ClickCellRenderer extends React.Component<any, any> {
    constructor(props){
        super(props)
    }

    render(){
        return (
              <div className ="click-handler" onClick={this.props.onClick.bind(this, this.props.data.book.id)}>
                    <a className="table-link"> {this.props.data.book.title} </a>
              </div>
        );
    }
}

export default ClickCellRenderer;