import React, { useState, useEffect } from 'react';

const newsapikey = 'b381a4c34bb649cba8ad7f9138b9acfb';
let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${newsapikey}`;

const App = () => {
    const [count, setCount] = useState(0);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchDataAndSetArticles = async () => {
            const response = await fetch(url);
            const data = await response.json();
            setArticles(data.articles);
        };
        fetchDataAndSetArticles();
        console.log('useEffect has fired');
    }, []);

    console.log(articles);

    // useEffect(() => {});
    // componentDidMount mimick

    // useEffect(() => {}, []);
    // called every time state is updated

    // useEffect(() => {}, [stateVariableToTrack]);
    // listen for a change in that state variable

    return (
        <div className='App'>
            <h1>Hello World</h1>
            <h3>This is count: {count}</h3>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
};

export default App;
