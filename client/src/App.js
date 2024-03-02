import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as imagenes from "./Imagenes";
import Portada from "./Portada";
import Login from "./login";
import Settings from "./settings";
import { DarkModeProvider } from "./DarkModeContext";

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
      <DarkModeProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<Portada />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </DarkModeProvider>
    </Router>
  );
}
