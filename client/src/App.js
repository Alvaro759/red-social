import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import logo from "./logo.png";
import fondoForm from "./fondoForm.avif";
import Portada from "./Portada";
import NavigationMenu from "./NavigationMenu";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section className="sectionLogo">
          <img src={logo} className="App-logo" alt="logo" />
        </section>
        <section className="sectionForm">
          <img src={fondoForm} className="fondoForm" alt="fondoForm" />
          <NavigationMenu /> {/* Utiliza el componente NavigationMenu aquí */}
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
