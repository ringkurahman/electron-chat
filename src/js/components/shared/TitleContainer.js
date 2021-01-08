import React from 'react'


const TitleContainer = ({ text }) => {

    return (
        <div className="chat-name-container">
            <span className="name">{ text }</span>
        </div>
    )
}

export default TitleContainer