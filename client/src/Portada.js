import React, { useContext } from "react";
import * as imagenes from "./Imagenes";
import Menu from "./Menu";
import { DarkModeContext } from "./DarkModeContext";
import { Carousel } from "react-bootstrap";

function Publicaciones(props) {
  const { usuario, publicaciones } = props;

  return (
    <div className="publicaciones">
      <div className="contenidoSuperior">
        <img className="fotoperfil" src={usuario.fotoPerfil} alt="" />
        <h2>{usuario.nombreUsuario}</h2>
        <div className="BtnSeguir">
          <a href={usuario.enlaceSeguir}>
            <span className="material-icons">person_add</span>
          </a>
        </div>
      </div>
      <div className="contenidoInferiorGrande">
        {/* Muestra las publicaciones del usuario */}
        {publicaciones.map((publicacion, index) => (
          <img key={index} src={publicacion} alt=""></img>
        ))}
      </div>
      <div className="contenidoInferior d-md-none">
        {" "}
        {/* d-md-none solo se mostrará en dispositivos de menos de 768px */}
        <Carousel>
          {publicaciones.map((publicacion, index) => (
            <Carousel.Item key={index}>
              <img className="d-block w-100" src={publicacion} alt={`Slide ${index}`} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

// Componente de Portada
function Portada() {
  const { darkMode } = useContext(DarkModeContext);

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
    <div className={darkMode ? "dark-mode" : ""}>
      <div className="main">
        <Menu />
        <div className="phone">
          <h1>PixPlace</h1>
          <hr />
        </div>
        <div className="cuerpo">
          <div className="container">
            {usuariosPublicaciones.map((usuarioData, index) => (
              <Publicaciones key={index} {...usuarioData} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portada;
