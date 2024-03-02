import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import { DarkModeContext } from "./DarkModeContext";

function Settings() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "main dark-mode" : "main"}>
      <Menu />
      <div className="container">
        <div className="align-center">
          <h2>Ajustes</h2>
          <div className="containerSettings">
            <div className="m-1">
              <span>Cambiar tema </span>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={darkMode}
                  onChange={toggleDarkMode}
                />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
