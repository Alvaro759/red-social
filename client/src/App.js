import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import * as imagenes from "./Imagenes";
import Portada from "./Portada";
import Login from "./login";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section className="sectionLogo">
          <img src={imagenes.logo} className="App-logo" alt="logo" />
        </section>
        <section className="sectionForm">
          <img src={imagenes.fondoForm} className="fondoForm" alt="fondoForm" />
          <Login />
        </section>
      </header>
    </div>
  );
}

export default function MyApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Portada />} />
      </Routes>
    </Router>
  );
}
