import React from "react";
import "./MenuLateral.css";
import IconName from "../IconName/IconName";
import ProductCatalog from "../../Pages/ProductCatalog/ProductCatalog.jsx";
import { BrowserRouter, Routes, Route,Link} from "react-router-dom";
import EspacoCadastro from "../EspacoCadastro/EspacoCadastro";
import Perfil from "../../Pages/Perfil/Perfil.jsx";
const MenuLateral = (props) => {
    let contagem = 0;
  const infosUser = {
    name: localStorage.getItem("Nome"),
    tipo:"admin",
  };
  let handleClickIconMenu = ()=>{
    let menuLateral = document.querySelector(".aberto");
    
    if(contagem %2==0){
        menuLateral.style.display = "flex";
        contagem++;
    }
    else{
        menuLateral.style.display = "none";
        contagem++;    
    }
  }
  return (
  
    <div className="MenuLateral">
      <div className="menuLateral aberto">
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
            />
          </li>
          <li>
            <Link to = "/Perfil">
            <IconName
              className="iconeTexto"
              linkImg="https://api.iconify.design/bi/person-circle.svg?color=white"
              altImg="lala"
              textoIcon="Seu Perfil"
              key="3"
            />
            </Link>
          </li>
      
          <li>
            <IconName
              className="iconeTexto"
              linkImg="https://api.iconify.design/material-symbols/list.svg?color=white"
              altImg="lala"
              textoIcon="Pedidos"
              key="4"
            />
          </li>
          <Link to = "/ProductCatalog">
          <li>
            <IconName
              className="iconeTexto"
              linkImg="https://api.iconify.design/material-symbols/storefront-outline.svg?color=white"
              altImg="lala"
              textoIcon="Produtos"
              key=""
            />
          </li>
          </Link>

          <li>
            <IconName
              className="iconeTexto"
              linkImg="https://api.iconify.design/icon-park-outline/ad-product.svg?color=white"
              altImg="lala"
              textoIcon="Cadastro de Produtos"
              key=""
            />
          </li>

          {infosUser.tipo == "admin" ? (
            <IconName
              className="iconeTexto"
              linkImg="https://api.iconify.design/mdi/register-outline.svg?color=white"
              altImg="lala"
              textoIcon="Cadastro"
              key=""
              link={<EspacoCadastro />}
            />
          ) : (
            ""
          )}
        </ul>
        <span className="barra barraBaixo"></span>
      </div>
      <img
        src="https://api.iconify.design/ic/baseline-menu.svg?color=%230e46c9"
        alt="Icone menu lateral"
        className="menuIcon"
        onClick={handleClickIconMenu}
      />
    </div>
 
  );
};

export default MenuLateral;
