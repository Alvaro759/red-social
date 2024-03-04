import React, { useContext, useState, useEffect } from "react";
import Menu from "./Menu";
import { DarkModeContext } from "./DarkModeContext";

function Settings() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [showEmail, setShowEmail] = useState(false);

  useEffect(() => {
    // Al cargar el componente, recuperamos el estado del checkbox del localStorage
    const storedShowEmail = localStorage.getItem("showEmail");
    if (storedShowEmail !== null) {
      setShowEmail(storedShowEmail === "true");
    }
  }, []);

  const handleEmailCheckboxChange = () => {
    const newValue = !showEmail;
    setShowEmail(newValue);
    // Guardamos el estado del checkbox en el localStorage
    localStorage.setItem("showEmail", newValue.toString());
  };

  return (
    <div className={darkMode ? "main dark-mode" : "main"}>
      <Menu />
      <div className="containerP">
        <div className="align-center">
          <h2>Ajustes</h2>
          <div className="containerSettings">
            <div className="margin">
              <span>Cambiar tema </span>
              <label className="switch">
                <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
                <span className="slider round"></span>
              </label>
              <h3>Privacidad</h3>
              <div className="formSelect margin">
                <span>¿Quién puede enviarte mensajes?</span>
                <select>
                  <option selected>Todo el mundo</option>
                  <option>Amigos y Amigos de Amigos</option>
                  <option>Solo Amigos</option>
                  <option>Nadie</option>
                </select>
              </div>
              <div className="formSelect m-1">
                <span>Mostrar mi email</span>
                <label className="switch">
                  <input type="checkbox" checked={showEmail} onChange={handleEmailCheckboxChange} />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
