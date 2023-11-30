import { React, useEffect } from "react";
import "./EspacoCadastro.css";
import InputType from "../../Components/InputType/InputType";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Axios from "axios";
import MenuLateral from "../../Components/MenuLateral/MenuLateral";
function EspacoCadastro() {
  const handleClickCadastro = (values) => {
    console.log(values);
    Axios.post("http://localhost:3307/register", {
      name: values.name,
      email: values.email,
      password: values.password,
    }).then(() => {
      console.log((response) => {
        console.log(response);
      });
    });
  };
  const validationCadastro = yup.object().shape({
    email: yup
      .string()
      .email("não é um email")
      .required("Este campo é obrigatorio"),
    password: yup
      .string()
      .min(8, "a senha deve ter 8 caracteres")
      .required("Este campo é obrigatorio"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "as senhas não são iguais"),
    name: yup
      .string()
      .required("O nome é obrigatório")
      .min(2, "O nome deve ter pelo menos 2 caracteres")
      .max(50, "O nome deve ter no máximo 50 caracteres")
      .matches(/^[a-zA-Z ]*$/, "O nome deve conter apenas letras e espaços"),
  });
  useEffect(() => {
    Axios.get("http://localhost:3307/getUsers").then((response) => {
      console.log(response);
    });
  }, []);
  return (
    <div className="espacoCadastro">
      <MenuLateral/>
      <div className="form">
        <h2>Digite os dados para cadastro</h2>
        <Formik
          initialValues={{}}
          onSubmit={handleClickCadastro}
          validationSchema={validationCadastro}
        >
          <Form className="cadastroForm">
            <h3>Nome</h3>
            <div className="cadastroFormGroup">
              <Field
                name="name"
                className="formField"
                placeholder="Nome"
                id="name"
              ></Field>
              <ErrorMessage
                component="span"
                name="name"
                className="formError"
              />
            </div>
            <h3>Email</h3>
            <div className="cadastroFormGroup">
              <Field
                name="email"
                className="formField"
                placeholder="Email"
                id="email"
              ></Field>
              <ErrorMessage
                component="span"
                name="email"
                className="formError"
              />
            </div>
            <h3>Senha</h3>
            <div className="cadastroFormGroup">
              <Field
                name="password"
                className="formField"
                placeholder="*********"
                id="email"
              ></Field>
              <ErrorMessage
                component="span"
                name="password"
                className="formError"
              />
            </div>
            <h3>Confirme sua senha</h3>
            <div className="cadastroFormGroup">
              <Field
                name="confirmPassword"
                className="formField"
                placeholder="*********"
              ></Field>
              <ErrorMessage
                component="span"
                name="confirmPassword"
                className="formError"
              />
            </div>
            <div className="isAdmin">
            <h3>É admin?</h3>
            <select name="formfield" id="" style={{marginLeft : '10px'}}>
              <option value="text1">Sim</option>
              <option value="text2">Não</option>
            </select>
            </div>
            <button
              type="submit"
              className="login"
              onClick={() => handleClickCadastro()}
            >
              Cadastrar
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default EspacoCadastro;
