import React from "react";
import "./portada.css";
import * as imagenes from "./Imagenes";
import Menu from "./Menu";

// Componente de Publicaciones
function Publicaciones(props) {
  // Desestructura las propiedades
  const { usuario, publicaciones } = props;

  return (
    <div className="publicaciones">
      <div className="contenidoSuperior">
        <img className="fotoperfil" src={usuario.fotoPerfil} alt=""></img>
        <h2>{usuario.nombreUsuario}</h2>
        <br />
        <br />
        <div className="BtnSeguir">
          <a href={usuario.enlaceSeguir}>
            <span className="material-icons">person_add</span>
          </a>
        </div>
      </div>
      <div className="contenidoInferior">
        {/* Muestra las publicaciones del usuario */}
        {publicaciones.map((publicacion, index) => (
          <img key={index} src={publicacion} alt=""></img>
        ))}
      </div>
    </div>
  );
}

// Componente de Portada
function Portada() {
  // Datos simulados de usuarios y sus publicaciones
  const usuariosPublicaciones = [
    {
      usuario: {
        nombreUsuario: "Ivanrodriiguezz__",
        fotoPerfil: imagenes.fotoPerfil,
        enlaceSeguir: "enlace_a_seguir_usuario",
      },
      publicaciones: [imagenes.publicacion1, imagenes.publicacion2, imagenes.publicacion3],
    },

    {
      usuario: {
        nombreUsuario: "Elenagarciiaa__",
        fotoPerfil: imagenes.fotoPerfil2,
        enlaceSeguir: "enlace_a_seguir_otro_usuario",
      },
      publicaciones: [imagenes.publicacion1, imagenes.publicacion2, imagenes.publicacion3],
    },
  ];

  return (
    <div className="main">
      <Menu />
      <div className="cuerpo">
        <div className="encabezado"></div>
        <div className="container">
          {/* Renderiza las publicaciones de cada usuario */}
          {usuariosPublicaciones.map((usuarioData, index) => (
            <Publicaciones key={index} {...usuarioData} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portada;
