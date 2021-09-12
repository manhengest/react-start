import React from "react";

export class CounterButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'green'
        };
    }

    render() {
        return (
            <button
                style={{background: this.state.color}}
                onClick={() => this.props.update(this.props.type)}>
                {this.props.type}
            </button>
        );
    }
}
