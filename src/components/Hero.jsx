import { useContext } from "react";
import { UserContext } from "../App";
import DailyMessageList from "./DailyMessagesList";
import Login from "../pages/Login";
import "../css/hero.css"

export default function Hero() {
  const { user } = useContext(UserContext);
  return (
    <>
Finding Resolution
      <div>
      <button onClick={event => Login(event)}>Login</button>
      </div>
    </>
  );
}
