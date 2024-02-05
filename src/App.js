import { useState } from "react";
import "./App.css";
import AppCtxt, { Context } from "./context/AppContext";
import Main from "./pages/Main";
import Splash from "./pages/screens/Splash";
import ReactRoute from "./routes/ReactRoute";

function App() {
  const [show, setShow] = useState(false);
  setInterval(() => {
    setShow(true);
  }, 1500);
  return <AppCtxt>{show ? <Main /> : <Splash />}</AppCtxt>;
}

export default App;
