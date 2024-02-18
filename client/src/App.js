/**import React from "react";
import "./App.css";
import logo from "./logo.png";
import fondoForm from "./fondoForm.avif";

function NavigationMenu() {
  return (
    <body>
      <div class="container">
        <form class="login-form">
          <h2>Inicia Sesión</h2>
          <input type="text" placeholder="Correo Electronico" />
          <input type="password" placeholder="Contraseña" />
          <button type="submit">Entrar</button>
          <a href="s">¿Olvidaste tu contraseña?</a>
          <hr />
          <button type="button" class="create-account-btn">
            Crea una cuenta
          </button>
        </form>
      </div>
    </body>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section className="sectionLogo">
          <img src={logo} className="App-logo" alt="logo" />
        </section>
        <section className="sectionForm">
          <img src={fondoForm} className="fondoForm" alt="fondoForm" />
          <NavigationMenu />
        </section>
      </header>
    </div>
  );
}

export default App;**/

import React from "react";
import "./portada.css";
import logo from "./logo.png";

function Menu() {
  return (
    <header className="sidebar">
      <nav>
        <ul>
          <li>
            <a href="d">
              <span className="material-icons">home</span>
            </a>
          </li>
          <li>
            <a href="d">
              <span className="material-icons">person</span>
            </a>
          </li>
          <li>
            <a href="d">
              <span className="material-icons">notifications</span>
            </a>
          </li>
          <li>
            <a href="d">
              <span className="material-icons">message</span>
            </a>
          </li>
          <li>
            <a href="d">
              <span className="material-icons">search</span>
            </a>
          </li>
          <li>
            <a href="d">
              <span className="material-icons">settings</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Portada() {
  return (
    <div className="main">
      <Menu />
      <div className="encabezado">
        <img src={logo} className="App-logo1" alt="logo" />
      </div>
      <div className="container"></div>
    </div>
  );
}

export default Portada;
