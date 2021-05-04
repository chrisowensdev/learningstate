import React, { Component } from 'react';
import NameList from './NamesList';
import { names } from '../../data/index';

import './styles2.css';

class App2 extends Component {
    constructor() {
        super();

        this.state = {
            data: names,
            searchVal: '',
        };
    }

    handleEvent = (event) => {
        this.setState({
            searchVal: event.target.value,
        });
    };

    render() {
        const { data, searchVal } = this.state;
        //[{}, {}, {}, {}]
        return (
            <div>
                <input
                    type='text'
                    placeholder='Type a name...'
                    onChange={this.handleEvent}
                    value={this.state.searchVal}
                />
                <NameList data={data} searchVal={searchVal} />
            </div>
        );
    }
}

export default App2;
