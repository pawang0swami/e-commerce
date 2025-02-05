import "./App.css";
import Head from "./Com/Head";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";      //routing
import Foot from "./Com/Foot";
import Sign from "./Com/sign";
import Privatecom from "./Com/privatecom";

function App() {
  return (
    <div>
      <Router>
        <Head />
        <Routes>
          
          <Route element={<Privatecom/>}>
          <Route path="/" element={<Sign />} />
          <Route path="/add" element={<Sign />} />
          <Route path="/update" element={<Sign />} />
          <Route path="/logout" element={<Sign />} />
          <Route path="/profile" element={<Sign/>} />
          </Route>

          <Route path="/sign" element={<Sign />} />
        </Routes>
        <Foot />
      </Router>
    </div>
  );
}

export default App;
