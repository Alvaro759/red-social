import React from "react";
import * as imagenes from "./Imagenes";

function Menu() {
  return (
    <header className="sidebar">
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
              <a href="/settings">
                <span className="material-icons">settings</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Menu;
