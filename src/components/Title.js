import React from "react";

export class Title extends React.Component {
    render() {
        return React.createElement("h1", null, `Say ${this.props.name} from React`);
    }
}
