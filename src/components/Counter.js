import React from "react";
import {CounterButton} from "./CounterButton";

export class Counter extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        };
    }

    updateCounter = (e) => {
        if (e === 'minus') {
            this.setState({count: this.state.count - 1});
        } else {
            this.setState({count: this.state.count + 1});
        }
    }

    render() {
        return (
            <div className="counter">
                <CounterButton type="minus" update={this.updateCounter} />
                <p className="counter-text">{this.state.count}</p>
                <CounterButton type="plus" update={this.updateCounter} />
            </div>
        )
    }
}
