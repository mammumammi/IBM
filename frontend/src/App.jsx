import HomePage from "./components/Homepage"
import Timetable from "./components/timetable";
import Csa from "./components/Csa";
import Csb from "./components/Csb";
import Ece from "./components/Ece";
import Eee from "./components/Eee";
import It from "./components/It";
import Ce from "./components/Ce";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <Router>
        <Main />
      </Router>
    </>
  )
}

function Main(){
  return(
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/timetable" element={<Timetable />} />
        <Route path="/csa" element={<Csa />} />
        <Route path="/csb" element={<Csb />} />
        <Route path="/it" element={<It />} />
        <Route path="/ece" element={<Ece />} />
        <Route path="/eee" element={<Eee />} />
        <Route path="/ce" element={<Ce />} />
      </Routes>
    </>
  );
}


export default App
