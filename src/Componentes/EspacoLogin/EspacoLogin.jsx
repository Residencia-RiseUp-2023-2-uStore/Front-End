import React from "react";
import "./EspacoLogin.css";
//Componentes

import InputType from "../InputType/InputType.jsx";
const EspacoLogin = (props) => {
  return (
    <div className="ladoTotal">
      <div className="ladoEsquerdo">
        <img
          src="src\assets\imgCirculos.png"
          alt="circulo ilustrativos"
          className="imgCirculos circuloDireita"
        />
        <img
          src="src\assets\ustoreLogo.png"
          alt="Logo da empresa uStore"
          className="logoUstore"
        />
        <img
          src="src\assets\imgCirculos.png"
          alt="circulo ilustrativos"
          className="imgCirculos circuloEsquerda"
        />
      </div>
      <div className="ladoDireito">
        <div className="infos">
          <h2>Log in</h2>
          <InputType tipo="text" id="Login" name="Email" />
          <InputType tipo="password" id="Senha" name="Senha" />
          <div className="logadoSenha">
            <div className="manterLogado">
              <InputType tipo="checkbox" id="check" name="check" />
              <p>Keep me logged in</p>
            </div>
            <p className="esqueceuASenha">Forgot password?</p>
          </div>
          <input type="submit" value="Login" className="Login" />
        </div>
      </div>
    </div>
  );
};

export default EspacoLogin;
