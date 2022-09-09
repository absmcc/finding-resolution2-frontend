import { createContext, useEffect, useState } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth" 
// import { firebaseConfig  } from "../firebaseConfig"
import firebaseKey from "../FirebaseConfig"
import  {initializeApp}  from "firebase-admin/app"


const app = initializeApp(firebaseKey)
const auth = getAuth(app)

export const UserContext = createContext()

export const UserContextProvider = (props) => {
  const [user, setUser] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const value = { user, setUser }
  const auth = getAuth()
  const { Provider } = UserContext
  useEffect(() => {
    onAuthStateChanged(auth, (u) => {
      setUser(u)
      setLoaded(true)
    })
  }, [auth])

  if (!loaded) {
    return <></>
  }
  return <Provider value={value}>{props.children}</Provider>
}
