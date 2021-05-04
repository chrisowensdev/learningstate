import React, { useState } from 'react';

const App = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <button onClick={(e) => setCount(count + 1)}>Increment</button>
            <button onClick={(e) => setCount(count - 1)}>Decrement</button>
        </div>
    );
};

export default App;
