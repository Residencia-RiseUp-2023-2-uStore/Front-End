import React from "react";
import "./MenuLateral.css";
import IconName from "../IconName/IconName";
import ProductCatalog from "../ProductCatalog/ProductCatalog";
import EspacoCadastro from "../EspacoCadastro/EspacoCadastro";
const MenuLateral = (props) => {
  
  const infosUser ={name:localStorage.getItem("Nome"),tipo:localStorage.getItem("tipo")};
  return (
    <div className="menuLateral">
      <img
        src="https://photografos.com.br/wp-content/uploads/2020/09/fotografia-para-perfil.jpg"
        alt="img person"
        className="imgPerfil"
      />
      <h3 className="name">{infosUser.name}</h3>
      <p className="tipoUsuario">Usuario Comum</p>
      <div className="iconDashBoard">
        <div className="dashBoard">
          <IconName
            linkImg="https://api.iconify.design/material-symbols/dashboard.svg?color=white"
            altImg="lala"
            textoIcon="Dashboard"
            key="1"
          />
        </div>
      </div>
      <span className="barra"></span>
      <ul className="icons">
        <li>
          <IconName
            className="iconeTexto"
            linkImg="https://api.iconify.design/material-symbols/person.svg?color=white"
            altImg="lala"
            textoIcon="Clientes"
            key="2"
            link="google.com.br"
          />
        </li>
        <li>
          <IconName
            className="iconeTexto"
            linkImg="https://api.iconify.design/bi/person-circle.svg?color=white"
            altImg="lala"
            textoIcon="Seu Perfil"
            key="3"
            link="google.com.br"
          />
        </li>
        <li>
          <IconName
            className="iconeTexto"
            linkImg="https://api.iconify.design/material-symbols/list.svg?color=white"
            altImg="lala"
            textoIcon="Pedidos"
            key="4"
            link="google.com.br"
          />
        </li>
        <li>
          <IconName
            className="iconeTexto"
            linkImg="https://api.iconify.design/material-symbols/storefront-outline.svg?color=white"
            altImg="lala"
            textoIcon="Produtos"
            key=""
            link="google.com.br"
          />
        </li>
        {infosUser.tipo  == "admin" ?   <IconName
            className="iconeTexto"
            linkImg="https://api.iconify.design/mdi/register-outline.svg?color=white"
            altImg="lala"
            textoIcon="Cadastro"
            key=""
            link= {<EspacoCadastro/>}
          />:""}
      </ul>
      <span className="barra barraBaixo"></span>
    </div>
  );
};

export default MenuLateral;
