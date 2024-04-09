import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Formulario } from "./components/Formulario";
import Home from "./components/Home";
import Load from "./components/Load";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Formulario />} />
        <Route path="/load" element={<Load />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
