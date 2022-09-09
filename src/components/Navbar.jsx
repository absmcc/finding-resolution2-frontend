import { Button } from "@mui/material"
import React from "react"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../App"
import "../css/navbar.css"

export default function Navbar() {
  const navigate = useNavigate()
  const { user } = useContext(UserContext)
  return (
    <>
      <div
        style={{
          display: "flex",
          
          flexDirection: "row",
          justifyContent: "space-between",
          textAlign: "center",
          margin: "15px",
          border: "1px solid black"
        }}
      >
        <Button>
          <h1
            className="blue-button navbar-expand-lg navbar-dark bg-dark"
            onClick={() => navigate("/")}
          >
           Finding Resolution
          </h1>
        </Button>

        {/* {!user && ( */}
        <Button style={{color: "#363457"}} onClick={() => navigate("/login")}>Login/SignUp</Button>
        {/* )} */}
      </div>
    </>
  )
}
