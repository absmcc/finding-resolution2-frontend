import React from "react"
import Hero from "../components/Hero"
import DailyMessageList from "../components/DailyMessagesList"
import Chat from "../components/Chat"

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      <DailyMessageList/>
      <Chat />
    </>
  )
}
