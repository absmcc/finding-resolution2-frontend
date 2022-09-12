import { Button, Fab } from "@mui/material"
import { ButtonGroup } from "@mui/material"
import { getAuth } from "@firebase/auth"

import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
} from "@firebase/firestore"
import { useCollectionData } from "react-firebase-hooks/firestore"
//import { initializeApp } from "firebase/app";

//const app = initializeApp(firebaseKey)

import "../css/chat.css"
import { useRef, useState, useEffect } from "react"

function ChatMessage(props) {
  const auth = getAuth()
  const { text, uid } = props.message

  const messageClass = uid === auth.currentUser ? "sent" : "received"

  return (
    <>
      <div className={`message ${props.color} ${messageClass}`}>
        <p>{text}</p>
      </div>
    </>
  )
}

export default function ChatRoom({ emotionCard }) {
  const auth = getAuth()
  const firestore = getFirestore()
  const dummy = useRef()
  const messagesCollection = collection(firestore, "messages")
  const q = query(messagesCollection, orderBy("createdAt"))
  const [color, setColor] = useState("")

  const [messages] = useCollectionData(q, { idField: "id" })
  console.log("These are the messages", messages)
  const [formValue, setFormValue] = useState("")

  const sendMessage = async (e) => {
    e.preventDefault()

    // const { uid } = auth.currentUser

    await addDoc(messagesCollection, {
      text: formValue,
      createdAt: serverTimestamp(),
      //   uid,
    })

    setFormValue("")
  }

  return (
    <>
      <main>
        {messages &&
          messages.map((msg, index) => {
            return <ChatMessage key={index} message={msg} color={color} />
          })}

        <span ref={dummy}></span>
      </main>
      <div className="input-container">
        <form onSubmit={sendMessage}>
          <input
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
            placeholder=""
            />
            </form>

          {/* <Button type="submit">SEND</Button> */}
          <div className="fab-container">
           
              <Fab
                onClick={(e) => {
                  setColor("upset")
                }}
                size="medium"
                color="error"
                aria-label="add"
              ></Fab>
            
            
              <Fab
                onClick={(e) => {
                  setColor("notReady")
                }}
                size="medium"
                color="warning"
                aria-label="add"
                setColor
              ></Fab>
           
          
              <Fab
                onClick={(e) => {
                  setColor("ready")
                }}
                size="medium"
                color="success"
                aria-label="add"
                setColor
                
              ></Fab>
           
          </div>
      </div>
    </>
  )
}
