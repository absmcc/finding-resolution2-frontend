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
<img src="https://hccounseling.com/wp-content/uploads/2019/07/hopecc-logo_2019_color200.png" srcset="https://hccounseling.com/wp-content/uploads/2019/07/hopecc-logo_2019_color200.png 1x, https://hccounseling.com/wp-content/uploads/2019/07/hopecc-logo_2019_color400.png 2x" width="200" height="67" style="max-height:67px;height:auto;" alt="Hope Christian Counseling Logo" data-retina_logo_url="https://hccounseling.com/wp-content/uploads/2019/07/hopecc-logo_2019_color400.png" class="fusion-standard-logo"></img>