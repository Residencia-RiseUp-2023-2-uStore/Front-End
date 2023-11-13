import React, { useEffect, useState } from "react";
import "./ProductCatalog.css";
import MenuLateral from "../../Componentes/MenuLateral/MenuLateral.jsx";
import Produtos from "../../Componentes/Produtos/Produtos.jsx"
import IconName from "../../Componentes/IconName/IconName.jsx";
import InfosEmpresa from "../../Componentes/InfosEmpresa/InfosEmpresa.jsx";
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
        <img src="src/assets/banner.png" alt="" className="bannerImg"/>
      </div>
      <Produtos />
      </div>
    </div>
  );
};

export default ProductCatalog;
