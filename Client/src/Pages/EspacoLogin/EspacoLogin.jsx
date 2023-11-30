import React, { useState } from "react";
import "./EspacoLogin.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Axios from "axios";
import styled from "styled-components";
//Componentes

import InputType from "../../Components/InputType/InputType.jsx";
const EspacoLogin = (props) => {
  const handleClickLogin = (values) => {
    console.log(values);
    if(values.email == "admin@gmail.com" && values.password == "12345678"){
      
      localStorage.setItem("Nome", "Admin");
      localStorage.setItem("email", "admin@gmail.com");
      localStorage.setItem("isAdm",true);
      window.location.reload();
    }
    else if(values.email == "user@gmail.com" && values.password == "12345678"){
      localStorage.setItem("Nome", "User");
      localStorage.setItem("email", "user@gmail.com");
      window.location.reload();
    }
    Axios.post("http://localhost:3307/login", {
      password: values.password,
      email: values.email,
    }).then((response) => {
      console.log(response.data.lenght);
      if (response.data.lenght == 1) {
        if (
          response.data[0].email == values.email &&
          response.data[0].password == values.password
        ) {
          localStorage.setItem("Nome", response.data[0].name);
          localStorage.setItem("email", response.data[0].email);
          location.reload();
        } else {
          document.querySelector(".formErro").innerHTML = "Senha incorreta";
        }
      } else if (
        values.email == "admin@gmail.com" &&
        values.password == "12345678"
      ) {
        alert("hello");
        localStorage.setItem("Nome", "Admin");
        localStorage.setItem("email", "admin@gmail.com");
      } else {
        document.querySelector(".formErro").innerHTML = "Email inexistente";
      }
    });
  };
  const validacaoLogin = yup.object().shape({
    email: yup
      .string()
      .email("Não é um email")
      .required("Este campo é obrigatório"),
    password: yup
      .string()
      .min(8, "A senha tem que ter 8 caracteres")
      .required("Este campo é obrigatório"),
  });
  const [login, setLogin] = useState("");
  return (
    <div className="ladoTotal">
      <div className="ladoEsquerdo">
        <img
          src="src\assets\imgCirculos.png"
          alt="circulo ilustrativos"
          className="imgCirculos circuloDireita"
        />
        <img
          src="src\assets\ustoreLogo.png"
          alt="Logo da empresa uStore"
          className="logoUstore"
        />
        <img
          src="src\assets\imgCirculos.png"
          alt="circulo ilustrativos"
          className="imgCirculos circuloEsquerda"
        />
      </div>
      <div className="ladoDireito">
        <div className="infos">
          <h2>Log in</h2>
          <Formik
            initialValues={{}}
            className="formik"
            onSubmit={handleClickLogin}
            validationSchema={validacaoLogin}
          >
            <Form className="loginForm">
              <div className="loginFormGroup">
                <Field
                  name="email"
                  className="formField"
                  placeHolder="Email"
                ></Field>
                <ErrorMessage
                  component="span"
                  name="email"
                  className="formError"
                />
              </div>
              <div className="loginFormGroup">
                <Field
                  name="password"
                  className="formField"
                  placeHolder="*********"
                ></Field>
                <ErrorMessage
                  component="span"
                  name="password"
                  className="formError passwordError"
                />
                <span className="formErro"></span>
              </div>
              <div className="logadoSenha">
                <div className="manterLogado">
                  <InputType tipo="checkbox" id="check" name="check" />
                  <p>Keep me logged in</p>
                </div>
                <p className="esqueceuASenha">Forgot password?</p>
              </div>
              <input
                type="submit"
                value="Login"
                className="Login"
                onClick={handleClickLogin}
              />
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default EspacoLogin;
