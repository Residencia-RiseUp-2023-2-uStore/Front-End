//libs react
import { useState } from 'react'

//CSS
import './App.css'

//Componentes
import EspacoLogin from './Componentes/EspacoLogin/EspacoLogin';
import EspacoCadastro from './Componentes/EspacoCadastro/EspacoCadastro'

function App(props) {
  const [login] = useState("D");
  console.log(login)
  return (
    <div className='App'>
     {login ? <EspacoCadastro/> : <EspacoLogin/>}
    </div>
  )
}

export default App;