import React, { Component } from 'react';

import './styles.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            count: 0,
        };
    }

    increment = () => {
        //Re-render
        this.setState({
            count: this.state.count + 1,
        });
    };

    decrement = () => {
        this.setState({
            count: this.state.count - 1,
        });
    };

    render() {
        //code this.method
        //this.props
        //this.state
        return (
            <div>
                <button onClick={this.increment}>+</button>
                <h1>{this.state.count}</h1>
                <button onClick={this.decrement}>-</button>
            </div>
        );
    }
}

export default App;
