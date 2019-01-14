"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class ClickCellRenderer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", { className: "click-handler", onClick: this.props.onClick.bind(this, this.props.data.book.id) },
            React.createElement("a", { className: "table-link" },
                " ",
                this.props.data.book.title,
                " ")));
    }
}
exports.default = ClickCellRenderer;
//# sourceMappingURL=ClickCellRenderer.js.map