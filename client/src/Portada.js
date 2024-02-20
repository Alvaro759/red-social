import React from "react";
import "./portada.css";
import logo from "./logo.png";
import fotoPerfil from "./usuario1.jpeg";
import fotoPerfil1 from "./foto1.jpeg";
import fotoPerfil2 from "./foto2.jpeg";
import fotoPerfil3 from "./foto3.jpeg";
import Menu from "./Menu";

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
