import React from 'react'

const App = () => {

    const title = "Hello World"
    const enhancedTitles = title + ' - React App!'

    return (
        <div>
            <h1>{ enhancedTitles }</h1>
        </div>
    );
};

export default App