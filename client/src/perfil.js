import React, { useContext } from "react";
import Menu from "./Menu";
import { DarkModeContext } from "./DarkModeContext";
import * as imagenes from "./Imagenes";

function Perfil() {
  const { darkMode } = useContext(DarkModeContext);

  // Datos del perfil de Ivanrodriiguezz__
  const perfilIvanrodriiguezz__ = {
    nombreUsuario: "Ivanrodriiguezz__",
    fotoPerfil: imagenes.fotoPerfil,
    seguidores: 500, // Número de seguidores
    seguidos: 300, // Número de seguidos
    publicaciones: [imagenes.publicacion1, imagenes.publicacion2, imagenes.publicacion3],
  };

  return (
    <div className={darkMode ? "main dark-mode" : "main"}>
      <Menu />
      <div className="containerP">
        <div className="perfil-info">
          <img className="perfil-foto" src={perfilIvanrodriiguezz__.fotoPerfil} alt="Foto de perfil" />
          <h2>{perfilIvanrodriiguezz__.nombreUsuario}</h2>
          <p>Seguidores: {perfilIvanrodriiguezz__.seguidores}</p>
          <p>Seguidos: {perfilIvanrodriiguezz__.seguidos}</p>
        </div>
        <div className="perfil-publicaciones">
          <h3>Publicaciones</h3>
          <div className="publicaciones1">
            {perfilIvanrodriiguezz__.publicaciones.map((publicacion, index) => (
              <img key={index} src={publicacion} alt={`Publicación ${index}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
