import React, { Component } from 'react';

class SingleArticle extends Component {
    render() {
        const { article, index } = this.props;
        return (
            <li key={index}>
                <h4>{article.title}</h4>
                <img src={article.urlToImage} alt='' />
                <p>{article.description}</p>
            </li>
        );
    }
}

export default SingleArticle;
