import React, { useState, useEffect } from "react";
import "./Produtos.css";

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setProdutos(json.products.slice(0, 10));
      });
  }, []);

  return (
    <div className="itens">
      {produtos.map((produto, index) => (
        <div className="paiProduto" key = {index}>
        <div key={index} className="produto">
          <img src={produto.images[0]} alt={produto.title} className="imgProduct"/>
          <div className="infos"> 
            <p>{produto.title}</p>
            <p className="price">R${produto.price},00</p>
          </div>
        </div>    
         </div>
      ))}
    </div>
  );
}
