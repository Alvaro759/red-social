import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container">
      <form className="login-form">
        <h2>Inicia Sesión</h2>
        <input type="text" placeholder="Correo Electrónico" />
        <input type="password" placeholder="Contraseña" />
        <Link to="/home">
          <button type="submit">Entrar</button>
        </Link>
        <a href="/">¿Olvidaste tu contraseña?</a>
        <hr />
        <button type="button" className="create-account-btn">
          Crea una cuenta
        </button>
      </form>
    </div>
  );
}

export default Login;
