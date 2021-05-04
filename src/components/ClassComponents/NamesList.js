import React, { Component } from 'react';

class NameList extends Component {
    render() {
        const { data, searchVal } = this.props;
        let filteredData = data.filter((nameObj) => {
            return nameObj.name.toLowerCase().includes(searchVal);
        });

        filteredData = searchVal === '' ? [] : filteredData;

        return (
            <>
                <ul>
                    {filteredData.map((names) => (
                        <li key={names.id} className={names.sex}>
                            {names.name}
                        </li>
                    ))}
                </ul>
                <ul>
                    {data.map((names) => (
                        <li key={names.id} className={names.sex}>
                            {names.name}
                        </li>
                    ))}
                </ul>
            </>
        );
    }
}

export default NameList;
