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
          <Route path="/" element={<h1>home</h1>} />
          <Route path="/add" element={<h1>add</h1>} />
          <Route path="/update" element={<h1>update</h1>} />
          {/* <Route path="/logout" element={<h1>asdfgh</h1>} /> */}
          <Route path="/profile" element={<h1>sdfg</h1>} />
          </Route>

          <Route path="/sign" element={<Sign />} />
        </Routes>
        <Foot />
      </Router>
    </div>
  );
}

export default App;
