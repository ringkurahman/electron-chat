import React from 'react'



const App = () => {

    const title = "Hello World"
    const enhancedTitles = title + ' - React App!'

    const sendNotification = () => {
        electron
            .notificationApi
            .sendNotification('My custom message')
    }

    return (
        <>
            <h1>{enhancedTitles}</h1>
            <button onClick={sendNotification}>Send Notification</button>
        </>
    );
};

export default App