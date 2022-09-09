import "./App.css";
import React, { useState, createContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { initializeApp } from "firebase/app";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Chat } from "@mui/icons-material";
import DailyMessageList from "./components/DailyMessagesList";
import ChatRoom from "./components/Chat";

export const UserContext = createContext(null);

// const firebaseConfig = {
//     apiKey: "AIzaSyBqZZWS5GZLa7gn6pARnWnTQ3HToOQwa54",
//     authDomain: "finding-resolution.firebaseapp.com",
//     projectId: "finding-resolution",
//     storageBucket: "finding-resolution.appspot.com",
//     messagingSenderId: "220921446580",
//     appId: "1:220921446580:web:4e1083dca54f7fa90817e1"
//   };
  
const firebaseConfig = {
  apiKey: "AIzaSyDCv8r2L3Suzy62oy6BEGvkeJHz8Q8He1E",
  authDomain: "express-deployed-mr.firebaseapp.com",
  projectId: "express-deployed-mr",
  storageBucket: "express-deployed-mr.appspot.com",
  messagingSenderId: "608089590760",
  appId: "1:608089590760:web:7f34d34bfd52ce2a8f325d"
};
  
  

const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);

export default function App() {
  const [user, setUser] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoaded(true);
    });
  }, [auth]);

  function SignOut(event) {
    event
      .preventDefault()
      .then(() => {
        setUser(null);
        localStorage.setItem("user", null);
      })
      .catch((err) => console.log(err));
  }

  return (
    <UserContext.Provider value={{ user, setUser, SignOut }}>
      <Router>
        <Navbar />
        <Routes>
            <Route path = "/dailymessages" element= {<DailyMessageList />} />
            <Route path = "/chat" element= {<ChatRoom />} />
          <Route path="/signup" element= {<SignUp />} />
          <Route path="/login" element= {<Login />} />
          <Route path="/" element= {<Home />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </UserContext.Provider>
  );
}

