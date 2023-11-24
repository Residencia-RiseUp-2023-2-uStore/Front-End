import React, { useEffect } from "react";
import Axios from "axios";
import './Perfil.css';
import InfosEmpresa from "../../Components/InfosEmpresa/InfosEmpresa";
import MenuLateral from "../../Components/MenuLateral/MenuLateral";
const Perfil = ()=>{
    function pegaUsers (){
        Axios.post("http://localhost:3307/login", {
            email: localStorage.getItem("email"),
          }).then((response) => {
            console.log(response.data);
            document.querySelector(".nome").innerHTML = response.data[0].name;
            document.querySelector(".cpf").innerHTML = response.data[0].CPF;
            document.querySelector(".dataNascimento").innerHTML = response.data[0].DATA_NASCIMENTO;
            document.querySelector(".nomeRua").innerHTML = response.data[0].RUA;
            document.querySelector(".uf").innerHTML = response.data[0].UF;
            document.querySelector(".email").innerHTML = response.data[0].email;
            
          });
          
        };

    useEffect(()=>{
        pegaUsers()
    },[])        
        return(
            <div className = "perfil">
                <MenuLateral className="menuLateral"></MenuLateral>
                <div className="informacoes">
                    <InfosEmpresa/>
                    <div className="infosCliente">
                        <h3>Nome Completo:</h3>
                        <p className="nome">Admin</p>
                        <h3>Data de nascimento:</h3>
                        <p className="dataNascimento">13/09/2004</p>
                        <h3>Cpf:</h3>
                        <p className="cpf">12345678912</p>
                        <h3>Nome da rua:</h3>
                        <p className="nomeRua">Rua rio das claras</p>
                        <h3>UF:</h3>
                        <p className="uf">PE</p>
                        <h3>Email:</h3>
                        <p className="email">admin@gmail.com</p>


                    </div>
                </div>
            </div>
    )
    
}

export default Perfil;