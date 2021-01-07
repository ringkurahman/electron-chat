import React from 'react'
import { ipcRenderer } from 'electron'



const App = () => {

    const title = "Hello World"
    const enhancedTitles = title + ' - React App!'

    const sendNotifications = () => {
        ipcRenderer.send('notify', 'This is my custom message')
    }

    return (
        <>
            <h1>{enhancedTitles}</h1>
            <button onClick={sendNotifications}>Send Notification</button>
        </>
    );
};

export default App