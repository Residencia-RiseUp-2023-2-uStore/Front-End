import React, { useState, useEffect } from 'react';
import "./App.css";
import EspacoLogin from './Componentes/EspacoLogin/EspacoLogin';
import EspacoCadastro from './Componentes/EspacoCadastro/EspacoCadastro';
import ProductCatalog from './Componentes/ProductCatalog/ProductCatalog';

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
    <div className='App'>
      {verificaUser}
    </div>
  );
}

export default App;
