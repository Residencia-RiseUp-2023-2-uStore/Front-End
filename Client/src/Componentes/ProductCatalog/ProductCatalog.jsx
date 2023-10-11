import React, { useEffect, useState } from "react";
import "./ProductCatalog.css";
const ProductCatalog = props =>{
    const [usuario,setUsuario] = useState("");
   useEffect(()=>{
    setUsuario(localStorage.getItem("Nome"))
   },[])

    return(
        <div className="divproductCatalog">
            <p>{usuario}</p>
        </div>
    )
}

export default ProductCatalog;