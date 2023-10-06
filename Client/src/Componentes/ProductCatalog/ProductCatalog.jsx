import React, { useEffect, useState } from "react";
import "./ProductCatalog.css";
const ProductCatalog = props =>{
    const [usuario,setUsuario] = useState("");
   useEffect(()=>{
    console.log(localStorage.getItem("email"))
    setUsuario(localStorage.getItem("email"))
   },[])

    return(
        <div className="divproductCatalog">
            <p>{usuario}</p>
        </div>
    )
}

export default ProductCatalog;