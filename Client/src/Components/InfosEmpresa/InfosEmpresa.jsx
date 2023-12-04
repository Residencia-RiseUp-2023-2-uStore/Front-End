import React from "react";
import IconName from "../IconName/IconName";
import './InfosEmpresa.css'
const InfosEmpresa = () => {
  return (
    <div className="infosEmpresa">
      <div className="logo">
        <img
          src="https://i.ibb.co/hWL9xd6/ustore-Logo.png"
          alt="Logo Ustore"
          className="logoUstoreProdutos"
        />
      </div>
      <div className="infosProdutos">
        <IconName
          className="iconeTexto iconeProdutos"
          linkImg="https://api.iconify.design/carbon/location-filled.svg?color=%23b0b0b0"
          altImg="lala"
          textoIcon="Av.Marques Olinda,126 5° andar - sala COBT
            Recife Antigo - PE | CEP 50030-000"
          link="google.com.br"
        />
        <IconName
          className="iconeTexto iconeProdutos localizacao"
          linkImg="https://api.iconify.design/ic/baseline-mail.svg?color=%23b0b0b0"
          altImg="lala"
          textoIcon="Fale com o comercial
            contato@usto.re"
          link="google.com.br"
        />
      </div>
    </div>
  );
};

export default InfosEmpresa;
