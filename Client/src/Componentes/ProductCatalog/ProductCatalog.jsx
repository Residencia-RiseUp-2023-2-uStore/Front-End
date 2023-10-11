import React, { useEffect, useState } from "react";
import "./ProductCatalog.css";
import MenuLateral from "../MenuLateral/MenuLateral.jsx";
import IconName from "../IconName/IconName";
const ProductCatalog = (props) => {
  const [usuario, setUsuario] = useState("");
  useEffect(() => {
    setUsuario(localStorage.getItem("Nome"));
  }, []);

  return (
    <div className="divproductCatalog">
      <MenuLateral className="menuLateral"></MenuLateral>
      <div className="infoEmpresa">
        <div className="logo">
        <img
          src="src\assets\ustoreLogo.png"
          alt="Logo Ustore"
          className="logoUstoreProdutos"
        />
        </div>
        <div className="infos">
        <IconName
          className="iconeTexto iconeProdutos"
          linkImg="https://api.iconify.design/carbon/location-filled.svg?color=%23b0b0b0"
          altImg="lala"
          textoIcon="Av.Marques Olinda,126 5° andar - sala COBT
            Recife Antigo - PE | CEP 50030-000"
          key="2"
          link="google.com.br"
        />
        <IconName
          className="iconeTexto iconeProdutos"
          linkImg="https://api.iconify.design/ic/baseline-mail.svg?color=%23b0b0b0"
          altImg="lala"
          textoIcon="Fale com o comercial
            contato@usto.re"
          key="2"
          link="google.com.br"
        />
        </div>
      </div>
    </div>
  );
};

export default ProductCatalog;
