import React, { useState, useEffect } from 'react';
import "./App.css";
import EspacoLogin from './Componentes/EspacoLogin/EspacoLogin';
import EspacoCadastro from './Componentes/EspacoCadastro/EspacoCadastro';
import ProductCatalog from './Pages/ProductCatalog/ProductCatalog';
import Perfil from './Pages/Perfil/Perfil';
import { BrowserRouter, Routes, Route,Link} from "react-router-dom";
function App(props) {
  const [user, setUser] = useState("");

  useEffect(() => {
    if (localStorage.getItem("Nome")) {
      setUser(localStorage.getItem("Nome"));
    }
  }, []);

  let verificaUser;
  if (user) {
   verificaUser = <ProductCatalog />;
  } else {
   verificaUser = <EspacoLogin />;
  }

  return (
    <BrowserRouter>
    <div className='App'>
    
      <Routes>
        <Route path='/' element={verificaUser} />
        <Route path='/Perfil' element={<Perfil />} />
        <Route path='/ProductCatalog' element={<ProductCatalog />} />
      </Routes>
    </div>
  </BrowserRouter>
    

  );
}

export default App;
