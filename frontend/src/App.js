import "./App.css";
import Head from "./Com/Head";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";      //routing
import Foot from "./Com/Foot";
import Sign from "./Com/sign";

function App() {
  return (
    <div>
      <Router>
        <Head />
        <Routes>
          <Route path="/" element={<Sign />} />
          <Route path="/add" element={<Sign />} />
          <Route path="/update" element={<Sign />} />
          <Route path="/logout" element={<Sign />} />
          <Route path="/profile" element={<Sign/>} />
          <Route path="/sign" element={<Sign />} />
        </Routes>
        <Foot />
      </Router>
    </div>
  );
}

export default App;
