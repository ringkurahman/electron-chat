import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import JoinChatsList from '../components/JoinChatsList'
import AvailableChatsList from '../components/AvailableChatsList'
import TitleContainer from '../components/shared/TitleContainer'
import { fetchChats } from '../actions/chatActions'


const Home = () => {

  const dispatch = useDispatch()
  const chats = useSelector(state =>state.chats.items)

  useEffect(() => {
    dispatch(fetchChats())
  }, [dispatch])

    return (
      <div className="row no-gutters fh">
        <div className="col-3 fh">
          <JoinChatsList chats={chats} />
        </div>
        <div className="col-9 fh">
          <TitleContainer text="Choose Your Channel" />
          <div className="container-fluid">
            <AvailableChatsList chats={chats} />
          </div>
        </div>
      </div>
  )
}

export default Home