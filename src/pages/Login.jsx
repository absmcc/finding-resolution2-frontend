import { useNavigate } from "react-router"
import { Container, TextField, Link, Button, Typography } from "@mui/material"
import { createTheme, ThemeProvider } from "@mui/material"
import { useContext, useState } from "react"
import { UserContext } from "../App"
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  getAuth,
} from "firebase/auth"

const provider = new GoogleAuthProvider()
const theme = createTheme()

// export default function Login() {
//   const { setUser } = useContext(UserContext)
//   const navigate = useNavigate()

//   const auth = getAuth()
//   const provider = new GoogleAuthProvider()
//   const login = () => {
//     signInWithEmailAndPassword(auth, provider)
//       .then((result) => {
//         setUser(result.user)
//         navigate("/")
//       })
//       .catch((error) => alert(error.message))
//   }

//   const userLogin = () => {
//     signInWithEmailAndPassword(email, password)
//       .then((res) => {
//         const json = JSON.stringify(res.user.uid)
//         localStorage.setItem("user", json)
//         console.log("user in Login", res.users)
//         setUsers(user.uid)
//         navigate("/")
//       })
//       .catch((err) => alert(err.message))

    export default function Login() {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const navigate = useNavigate();
        const auth = getAuth();
        const { user, setUser } = useContext(UserContext);

    const userLogin = () => {
      signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
          const json = JSON.stringify(res.user.uid)
          localStorage.setItem("user", json)
          console.log("user in login", res.user)
          setUser(res.user.uid)
          navigate("/")
        })
        .catch((err) => alert(err.message))
    }
    return (
      <>
        <ThemeProvider theme={theme} className="page-id-35">
          <Container component="main" maxWidth="xs">
            <Typography component="h1" variant="h5" className="entry">
              Sign In
            </Typography>
            <form
              onSubmit={(e) => {
                userLogin(e)
              }}
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
            />
            <Button
              onClick={(e) => userLogin(e)}
              type="submit"
              value="Login"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Link href="/signup" variant="body2">
              {"Don't have an account yet? Sign Up"}
            </Link>
          </Container>
        </ThemeProvider>
      </>
    )
            }
  

