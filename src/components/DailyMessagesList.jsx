// import dailymessages from "./DailyMessages";
import { useEffect, useState } from "react"
import Carousel from 'react-material-ui-carousel'
import { Container } from "@mui/system"

function DailyMessageList() {
  const [messages, setMessages] = useState("")
  useEffect(() => {
    fetch("https://express-deployed-mr.web.app/dailymessages")
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.error(err))
  }, [])

  console.log(messages)

  return (
    <>
    
      <Carousel wrapAround autoplay>
        {!messages ? (
          <h2>Loading...</h2>
        ) : (
          messages.map((message) => (
            <div className="dailyhMessage">
                <Container maxWidth="lg" />
              <p key={message.id}>{message.message}</p>
            </div>
          ))
        )}
      </Carousel>
    </>
  )
}

export default DailyMessageList
