import React, { useState, useEffect } from 'react';
import "./App.css";
import EspacoLogin from './Pages/EspacoLogin/EspacoLogin';
import EspacoCadastro from './Pages/EspacoCadastro/EspacoCadastro';
import ProductCatalog from './Pages/ProductCatalog/ProductCatalog';
import Perfil from './Pages/Perfil/Perfil';
import { BrowserRouter, Routes, Route,Link} from "react-router-dom";
import CadastroProdutos from './Pages/CadastroProdutos/CadastroProdutos';
import Clientes from './Pages/Clientes/Clientes';
import Pedidos from './Pages/Pedidos/Pedidos';
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
        <Route path='/ProductCatalog' element={<ProductCatalog />}/>
        <Route path ='/CadastroProdutos' element = {<CadastroProdutos/>}/>
        <Route path = '/EspacoCadastro' element = {<EspacoCadastro/>}/>
        <Route path = '/Pedidos' element = {<Pedidos/>}/>
        <Route path = '/Clientes' element = {<Clientes/>}/>
      </Routes>
    </div>
  </BrowserRouter>
    

  );
}

export default App;
