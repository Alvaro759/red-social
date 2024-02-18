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
import fotoPerfil from "./usuario1.jpeg";
import fotoPerfil1 from "./foto1.jpeg";
import fotoPerfil2 from "./foto2.jpeg";
import fotoPerfil3 from "./foto3.jpeg";

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

function Historias() {
  return (
    <div className="historias">
      <img className="fotohistoria" src={fotoPerfil} alt=""></img>
      <img className="fotohistoria" src={fotoPerfil} alt=""></img>
      <img className="fotohistoria" src={fotoPerfil} alt=""></img>
      <img className="fotohistoria" src={fotoPerfil} alt=""></img>
      <img className="fotohistoria" src={fotoPerfil} alt=""></img>
      <img className="fotohistoria" src={fotoPerfil} alt=""></img>
      <img className="fotohistoria" src={fotoPerfil} alt=""></img>
      <img className="fotohistoria" src={fotoPerfil} alt=""></img>
      <img className="fotohistoria" src={fotoPerfil} alt=""></img>
      <img className="fotohistoria" src={fotoPerfil} alt=""></img>
      <img className="fotohistoria" src={fotoPerfil} alt=""></img>
      <img className="fotohistoria" src={fotoPerfil} alt=""></img>
      <img className="fotohistoria" src={fotoPerfil} alt=""></img>
    </div>
  );
}

function Publicaciones() {
  return (
    <div className="publicaciones">
      <div className="contenidoSuperior">
        <img className="fotoperfil" src={fotoPerfil} alt=""></img>
        <h2>Ivanrodriiguezz__</h2>
        <br />
        <br />
        <div className="BtnSeguir">
          <a href="d">
            <span className="material-icons">person_add</span>
          </a>
        </div>
      </div>
      <div className="contenidoInferior">
        <img src={fotoPerfil1} alt=""></img>
        <img src={fotoPerfil2} alt=""></img>
        <img src={fotoPerfil3} alt=""></img>
      </div>
    </div>
  );
}

function Portada() {
  return (
    <div className="main">
      <Menu />
      <div className="encabezado">
        <Historias />
        <img src={logo} className="App-logo1" alt="logo" />
      </div>
      <div className="container">
        <Publicaciones />
        <Publicaciones />
      </div>
    </div>
  );
}

export default Portada;
