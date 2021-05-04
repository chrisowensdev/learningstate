import React, { Component } from 'react';
import SingleArticle from './SingleArticle';

class ArticleList extends Component {
    render() {
        let filteredList = this.props.data.map((article, index) => {
            return <SingleArticle article={article} index={index} />;
        });
        return <div className='article-list'>{filteredList}</div>;
    }
}

export default ArticleList;
