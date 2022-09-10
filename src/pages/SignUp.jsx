import "firebase/firestore"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { initializeApp } from "firebase/app"
import { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Link from "@mui/material/Link"
import TextField from "@mui/material/TextField"
import Container from "@mui/material/Container"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { UserContext } from "../App"

const theme = createTheme()

export default function Signup() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [fname, setFname] = useState("")
  const navigate = useNavigate()
  const auth = getAuth()
  const { user, setUser } = useContext(UserContext);

  const createUser = (uid) => {
    const user = {
      email: email,
      fname: fname,
      uid,
    }

    fetch("https://express-deployed-mr.web.app/users", {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => alert(err))
  }

  const handleSignUp = (event) => {
    event.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const json = JSON.stringify(res.user.uid)
        localStorage.setItem("user", json)
        console.log("user in login", res.user)
        setUser(res.user.uid)
        navigate("/")
        //createUser(res.user.uid)
      })
      .catch((err) => alert(err.message))
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <Typography component="h1" variant="h5" className="entry">
            Sign Up
          </Typography>
          <form
            onSubmit={(e) => {
              handleSignUp(e)
            }}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            label="First Name"
            name="fname"
            type="fname"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            autoComplete="current-fname"
          />

          <TextField
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="current-email"
          />

          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />

          <Button
            onClick={(e) => handleSignUp(e)}
            type="submit"
            value="Sign Up"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Link href="/login" variant="body2">
            {"Already have an account? Sign In"}
          </Link>
        </Container>
      </ThemeProvider>
    </>
  )
}
