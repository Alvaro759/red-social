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
  );
}

export default Portada;
