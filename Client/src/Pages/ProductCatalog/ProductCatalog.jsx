import React, { useEffect, useState } from "react";
import "./ProductCatalog.css";
import MenuLateral from "../../Components/MenuLateral/MenuLateral.jsx";
import Produtos from "../../Components/Produtos/Produtos.jsx"
import IconName from "../../Components/IconName/IconName.jsx";
import InfosEmpresa from "../../Components/InfosEmpresa/InfosEmpresa.jsx";
const ProductCatalog = (props) => {
  const [usuario, setUsuario] = useState("");
  useEffect(() => {
    setUsuario(localStorage.getItem("nome"));
  }, []);

  return (
    <div className="divproductCatalog">
      <MenuLateral className="menuLateral"></MenuLateral>
      <div className="infosDaEmpresa">
      <InfosEmpresa/>
      <div className="banner">
        <img src="https://i.ibb.co/x389B4Q/banner.png" alt="" className="bannerImg"/>
      </div>
      <Produtos />
      </div>
    </div>
  );
};

export default ProductCatalog;
