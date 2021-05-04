import React, { useState, useEffect } from 'react';
import Article from './Article';

import './style.css';

const apikey = '';

const App = () => {
    const [articles, setArticles] = useState([]);
    const [topic, setTopic] = useState('Technology');

    useEffect(() => {
        const getNewsArticles = async () => {
            const response = await fetch(
                `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apikey}`
            );
            const data = await response.json();
            console.log(data.articles);
            setArticles(data.articles);
        };
        getNewsArticles();
    }, [topic]);

    return (
        <div className='App'>
            <h1>News Articles</h1>
            <div className='buttons'>
                <button onClick={(e) => setTopic('Sports')}>Sports</button>
                <button onClick={(e) => setTopic('Technology')}>
                    Technology
                </button>
                <button onClick={(e) => setTopic('Health')}>Health</button>
            </div>
            <ul className='article-list'>
                {articles.map((article, index) => (
                    <Article key={index} article={article} />
                ))}
            </ul>
        </div>
    );
};

export default App;
