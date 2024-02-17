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

function Menu() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="d">Inicio</a>
          </li>
          <li>
            <a href="d">Perfil</a>
          </li>
          <li>
            <a href="d">Notificaciones</a>
          </li>
          <li>
            <a href="d">Mensajes</a>
          </li>
          <li>
            <a href="d">Buscar</a>
          </li>
          <li>
            <a href="d">Configuración</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Portada() {
  return (
    <div className="post">
      <Menu />
      <div className="container">
        <div className="user-info">
          <img src="avatar.jpg" alt="Avatar del Usuario" />
          <h3>Nombre del Usuario</h3>
        </div>
        <div className="post-content">
          <p>Contenido de la publicación...</p>
          <div className="interactions">
            <button className="like-btn">Me Gusta</button>
            <button className="comment-btn">Comentar</button>
          </div>
          <div className="comments">{/* Aquí se mostrarán los comentarios */}</div>
        </div>
      </div>
    </div>
  );
}

export default Portada;
