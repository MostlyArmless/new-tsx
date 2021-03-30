"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const initialState = {};
class NewComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }
    render() {
        return ("NewComponent"
            < />);
    }
}
exports.NewComponent = NewComponent;
