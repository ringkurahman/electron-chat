import React from 'react'
import { useParams } from 'react-router-dom'
import ChatUsersList from '../components/ChatUsersList'
import TitleContainer from '../components/shared/TitleContainer'
import ChatMessagesList from '../components/ChatMessagesList'
import { withBaseLayout } from '../layouts/BaseLayout'



const Chat = () => {

  const { id } = useParams()

    return (
        <div className="row no-gutters fh">
          <div className="col-3 fh">
            <ChatUsersList />
          </div>
          <div className="col-9 fh">
            <TitleContainer text={`Joined Channel: ${id}`} />
            <ChatMessagesList />
          </div>
        </div>
  )
}

export default withBaseLayout(Chat, { canGoBack: true })