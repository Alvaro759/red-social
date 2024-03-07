import React, { useContext, useState, useEffect } from "react";
import Menu from "./Menu";
import { DarkModeContext } from "./DarkModeContext";

function Settings() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [showEmail, setShowEmail] = useState(false);
  const [privada, setPrivada] = useState(false);
  const [mensajePrivacidad, setMensajePrivacidad] = useState("Todo el mundo");
  const [favoritos, setFavoritos] = useState("Selecciona una cuenta favorita");
  const [silenciadas, setSilenciar] = useState("Selecciona una cuentas silenciadas");

  useEffect(() => {
    const storedShowEmail = localStorage.getItem("showEmail");
    if (storedShowEmail !== null) {
      setShowEmail(storedShowEmail === "true");
    }

    const storedPrivada = localStorage.getItem("privada");
    if (storedPrivada !== null) {
      setPrivada(storedPrivada === "true");
    }

    const storedMensajePrivacidad = localStorage.getItem("mensajePrivacidad");
    if (storedMensajePrivacidad !== null) {
      setMensajePrivacidad(storedMensajePrivacidad);
    }

    const storedFavoritos = localStorage.getItem("favoritos");
    if (storedFavoritos !== null) {
      setFavoritos(storedFavoritos);
    }

    const storedSilenciados = localStorage.getItem("silenciadas");
    if (storedSilenciados !== null) {
      setSilenciar(storedSilenciados);
    }
  }, []);

  const handleEmailCheckboxChange = () => {
    const newValue = !showEmail;
    setShowEmail(newValue);
    localStorage.setItem("showEmail", newValue.toString());
  };

  const handlePrivadaCheckboxChange = () => {
    const newValue = !privada;
    setPrivada(newValue);
    localStorage.setItem("privada", newValue.toString());
  };

  const handleMensajePrivacidadChange = (event) => {
    const value = event.target.value;
    setMensajePrivacidad(value);
    localStorage.setItem("mensajePrivacidad", value);
  };

  const handleFavoritosChange = (event) => {
    const value = event.target.value;
    setFavoritos(value);
    localStorage.setItem("favoritos", value);
  };

  const handleSilenciadosChange = (event) => {
    const value = event.target.value;
    setSilenciar(value);
    localStorage.setItem("silenciadas", value);
  };

  return (
    <div className={darkMode ? "main dark-mode" : "main"}>
      <Menu />
      <div className="containerP">
        <div className="align-center">
          <h2>Ajustes</h2>
          <div className="containerSettings">
            <div className="margin">
              <div className="mb-3">
                <span>Cambiar tema </span>
                <label className="switch">
                  <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
                  <span className="slider round"></span>
                </label>
              </div>
              <hr />
              <div>
                <h3>Privacidad</h3>
                <div className="formSelect margin">
                  <span>¿Quién puede enviarte mensajes?</span>
                  <select value={mensajePrivacidad} onChange={handleMensajePrivacidadChange}>
                    <option value="Todo el mundo">Todo el mundo</option>
                    <option value="Amigos y Amigos de Amigos">Amigos y Amigos de Amigos</option>
                    <option value="Solo Amigos">Solo Amigos</option>
                    <option value="Nadie">Nadie</option>
                  </select>
                </div>
                <div className="formSelect margin">
                  <span>Mostrar mi email</span>
                  <label className="switch">
                    <input type="checkbox" checked={showEmail} onChange={handleEmailCheckboxChange} />
                    <span className="slider round"></span>
                  </label>
                </div>
                <div className="formSelect margin">
                  <span>Cuenta privada</span>
                  <label className="switch">
                    <input type="checkbox" checked={privada} onChange={handlePrivadaCheckboxChange} />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>
              <hr />
              <div>
                <h3>Lo que tú ves</h3>
                <div className="formSelect margin">
                  <span>Favoritos</span>
                  <select value={favoritos} onChange={handleFavoritosChange}>
                    <option value="Selecciona una cuenta favorita">Selecciona una cuenta favorita</option>
                    <option value="Elenagarciiaa__">Elenagarciiaa__</option>
                    <option value="_alvarocaraballo_04">_alvarocaraballo_04</option>
                  </select>
                </div>
                <div className="formSelect margin">
                  <span>Silenciadas</span>
                  <select value={silenciadas} onChange={handleSilenciadosChange}>
                    <option value="Selecciona una cuentas silenciadas">Selecciona una cuentas silenciadas</option>
                    <option value="Elenagarciiaa__">Elenagarciiaa__</option>
                    <option value="_alvarocaraballo_04">_alvarocaraballo_04</option>
                  </select>
                </div>
                <div className="formSelect margin">
                  <span>Recuento de "Me Gustas"</span>
                </div>
              </div>
              <hr />
              <div>
                <h3>Mas información y ayuda</h3>
                <div className="formSelect margin">
                  <span>Ayuda</span>
                </div>
                <div className="formSelect margin">
                  <span>Estado de la cuenta</span>
                </div>
                <div className="formSelect margin">
                  <span>Información</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
