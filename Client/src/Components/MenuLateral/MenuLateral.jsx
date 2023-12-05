import React, { useEffect, useState } from "react";
import "./MenuLateral.css";
import IconName from "../IconName/IconName";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import EspacoCadastro from "../../Pages/EspacoCadastro/EspacoCadastro";

const MenuLateral = (props) => {
  let contagem = 0;

  const [isAdmin, setIsAdmin] = useState(false);
  const [nome, setNome] = useState("Julia");

  useEffect(() => {
    if (localStorage.getItem("isAdm")) {
      setIsAdmin(true);
    }
  }, []);

  let handleClickIconMenu = () => {
    let menuLateral = document.querySelector(".aberto");

    if (contagem % 2 === 0) {
      menuLateral.style.display = "flex";
      contagem++;
    } else {
      menuLateral.style.display = "none";
      contagem++;
    }
  };

  return (
    <div className="MenuLateral">
      <div className="menuLateral aberto">
        <img
          src="https://imgs.search.brave.com/ko4Bd8wGKBvGfTdCDnc8kSkRY-xSVtd3lQ5sY1jlqR8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMw/MzUzOTMxNi9wdC9m/b3RvL29uZS1iZWF1/dGlmdWwtd29tYW4t/bG9va2luZy1hdC10/aGUtY2FtZXJhLWlu/LXByb2ZpbGUuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWVG/U25lVFEwOUNHeFdO/ckRqRHN6RW9MbjhT/NFVZdFNCZUtCd3Bw/U1A1YVE9"
          alt="img person"
          className="imgPerfil"
        />
        <h3 className="name">{nome}</h3>
        <p className="tipoUsuario">Usuario Comum</p>

        <div className="iconDashBoard">
          <a
            href="https://ustore-dashboard-ten.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconName
              linkImg="https://api.iconify.design/material-symbols/dashboard.svg?color=white"
              altImg="lala"
              textoIcon="Dashboard"
              key="1"
            />
          </a>
        </div>

        <span className="barra"></span>
        <ul className="icons">
          <a
            href=" https://ustore-dashboard-ten.vercel.app/contacts"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>
              <IconName
                className="iconeTexto"
                linkImg="https://api.iconify.design/material-symbols/person.svg?color=white"
                altImg="lala"
                textoIcon="Clientes"
                key="2"
              />
            </li>
          </a>

          <li>
            <Link to="/Perfil">
              <IconName
                className="iconeTexto"
                linkImg="https://api.iconify.design/bi/person-circle.svg?color=white"
                altImg="lala"
                textoIcon="Seu Perfil"
                key="3"
              />
            </Link>
          </li>

          <a
            href="https://ustore-dashboard-ten.vercel.app/invoices"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>
              <IconName
                className="iconeTexto"
                linkImg="https://api.iconify.design/material-symbols/list.svg?color=white"
                altImg="lala"
                textoIcon="Pedidos"
                key="4"
              />
            </li>
          </a>

          <Link to="/ProductCatalog">
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

          <Link to="/CadastroProdutos">
            <li>
              <IconName
                className="iconeTexto"
                linkImg="https://api.iconify.design/icon-park-outline/ad-product.svg?color=white"
                altImg="lala"
                textoIcon="Cadastro de Produtos"
                key=""
              />
            </li>
          </Link>

          {isAdmin ? (
            <Link to="/EspacoCadastro">
              <IconName
                className="iconeTexto"
                linkImg="https://api.iconify.design/mdi/register-outline.svg?color=white"
                altImg="lala"
                textoIcon="Cadastro"
                key=""
              />
            </Link>
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
