import React from 'react'
import JoinChatsList from '../components/JoinChatsList'
import AvailableChatsList from '../components/AvailableChatsList'
import TitleContainer from '../components/shared/TitleContainer'


const Home = () => {

    return (
      <div className="row no-gutters fh">
        <div className="col-3 fh">
          <JoinChatsList />
        </div>
        <div className="col-9 fh">
          <TitleContainer text="Choose Your Channel" />
          <div className="container-fluid">
            <AvailableChatsList />
          </div>
        </div>
      </div>
  )
}

export default Home