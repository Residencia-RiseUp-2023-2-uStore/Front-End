import React, { useState, useEffect } from 'react';
import "./App.css";
import EspacoLogin from './Componentes/EspacoLogin/EspacoLogin';
import EspacoCadastro from './Componentes/EspacoCadastro/EspacoCadastro';
import ProductCatalog from './Componentes/ProductCatalog/ProductCatalog';

function App(props) {
  const [user, setUser] = useState("a");

  useEffect(() => {
    if (localStorage.getItem("email")) {
      setUser(localStorage.getItem("email"));
    }
  }, []);

  let verificaUser;
  if (user) {
   verificaUser = <EspacoCadastro />;
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
