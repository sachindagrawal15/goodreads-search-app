"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const NO_DATA_ICON = require("../../assets/noData.png");
class NoData extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", { className: "no-data-warning" },
            React.createElement("div", { className: "center" },
                React.createElement("img", { src: NO_DATA_ICON, width: 10, height: 10 }),
                React.createElement("div", { className: "text" },
                    " ",
                    this.props.message,
                    " "))));
    }
}
exports.default = NoData;
//# sourceMappingURL=NoData.js.map