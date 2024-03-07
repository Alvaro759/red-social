import React, { useState } from "react";
import * as imagenes from "./Imagenes";
import "./styles/Menu.css"; // Archivo CSS para estilos del menú de búsqueda

function Menu() {
  const [busquedaAbierta, setBusquedaAbierta] = useState(false);

  const toggleBusqueda = () => {
    setBusquedaAbierta(!busquedaAbierta);
  };

  return (
    <header className={`sidebar ${busquedaAbierta ? "busqueda-abierto" : ""}`}>
      <div className="logo">
        <img src={imagenes.logoBlanco} className="logoBlanco" alt="logo" />
      </div>
      <div className="menu-opciones">
        <nav>
          <ul>
            <li>
              <a href="/home">
                <span className="material-icons">home</span>
              </a>
            </li>
            <li>
              <a href="/perfil">
                <span className="material-icons">person</span>
              </a>
            </li>
            <li>
              <a href="#" onClick={toggleBusqueda}>
                <span className="material-icons">search</span>
              </a>
            </li>
            <li>
              <a href="/settings">
                <span className="material-icons">settings</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {busquedaAbierta && (
        <div className="menu-busqueda">
          <span className="cerrar-menu" onClick={toggleBusqueda}>
            &times;
          </span>
          <input type="text" placeholder="Buscar..." />
          <button onClick={toggleBusqueda}>Cerrar</button>
        </div>
      )}
    </header>
  );
}

export default Menu;
