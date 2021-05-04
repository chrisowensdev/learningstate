import React, { Component } from 'react';
import ArticleList from './ArticleList';

import './style.css';

const apikey = '';

class App extends Component {
    constructor() {
        super();

        this.state = {
            articles: [],
            searchResults: '',
        };
    }

    componentDidMount = async () => {
        let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apikey}`;
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        this.setState(
            {
                articles: data.articles,
            },
            () => {
                console.log(this.state.articles);
            }
        );

        //after
    };

    handleInput = (event) => {
        this.setState({
            searchResults: event.target.value,
        });
    };

    render() {
        const { articles, searchResults } = this.state;

        let filteredData = articles.filter((articleObj) => {
            return (
                articleObj.title
                    .toLowerCase()
                    .includes(searchResults.toLowerCase()) ||
                articleObj.description
                    .toLowerCase()
                    .includes(searchResults.toLowerCase())
            );
        });

        return (
            <>
                <h1>News Articles</h1>
                <input
                    type='text'
                    placeholder='Type an article title'
                    onChange={this.handleInput}
                    value={searchResults}
                />
                <ArticleList data={filteredData} />
            </>
        );
    }
}

export default App;
