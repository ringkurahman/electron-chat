import React from 'react'
import JoinChats from '../components/JoinChats'
import AvailableChats from '../components/AvailableChats'
import Container from '../components/shared/Container'


const Home = () => {
    return (
      <div className="row no-gutters fh">
        <div className="col-3 fh">
          <JoinChats />
        </div>
        <div className="col-9 fh">
          <Container />
          <div className="container-fluid">
            <AvailableChats />
          </div>
        </div>
      </div>
  )
}

export default Home