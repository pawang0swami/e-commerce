import "./App.css";
import Head from "./Com/Head";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //routing
import Foot from "./Com/Foot";
import Sign from "./Com/sign";
import Privatecom from "./Com/privatecom";
import Login from "./Com/Login";
import Add from "./Com/add";
import Home from "./Com/Home";
import List from "./Com/List";
import Update from "./Com/Update";

function App() {
  return (
    <div>
      <Router>
        <Head />
        <Routes>
          <Route element={<Privatecom />}>
            <Route path="/" element={<Home />} />
            <Route path="list" element={<List />} />

            <Route path="/add" element={<Add />} />
            <Route path="/update/:id" element={<Update />} />
            {/* <Route path="/logout" element={<h1>asdfgh</h1>} /> */}
            {/* <Route path="/profile" element={<h1>sdfg</h1>} /> */}
          </Route>

          <Route path="/sign" element={<Sign />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Foot />
      </Router>
    </div>
  );
}

export default App;
