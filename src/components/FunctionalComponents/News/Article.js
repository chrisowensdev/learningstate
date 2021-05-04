import React from 'react';

const Article = (props) => {
    const { article } = props;
    return (
        <li>
            <h4>{article.title}</h4>
            <img src={article.urlToImage} alt={article.title} />
            <p>{article.description}</p>
        </li>
    );
};

export default Article;
