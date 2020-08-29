import React, { useRef } from "react";
import { Container, Title, GoBack } from "./Forgot.styled";
import Input from "../components/form/Input";
import Submit from "../components/submit/Submit";
import { auth } from "../../firebase/firebaseConfig";
import { Form } from "@unform/web";
import { Link } from "react-router-dom";

import * as Yup from "yup";

import FadeInLeft from "../components/animations/FadeInLeft.styled";
import { useAuth } from "../../contexts/AuthProvider";
import { Redirect } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { firebaseCode } from "../../constants/firabase.code";

export default function Forgot() {
  const formRef = useRef(null);

  const { currentUser } = useAuth();

  if (!!currentUser) {
    return <Redirect to="/home" />;
  }

  async function handleSubmit(data) {
    try {
      // Remove all previous errors
      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string()
          .email("Digite um e-mail válido")
          .required("O e-mail e obrigatório"),
      });
      await schema.validate(data, {
        abortEarly: false,
      });

      await auth
        .sendPasswordResetEmail(data.email)
        .then((result) => {
          toast.sucess("Foi enviado um link para recuperar a senha!");
        })
        .catch((error) => {
          toast.error(firebaseCode(error.code));
        });
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
  }
  return (
    <Container>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />
      <FadeInLeft duration="0.8s" delay="0.20s">
        <h1>Esqueceu a senha?</h1>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <text>
            Digite seu endereço de e-mail e enviaremos um link para redefinir
            sua senha.
          </text>
          <Title>Recuperar senha</Title>
          <Input name="email" placeholder="Digite seu e-mail" />
          <Submit label="Recuperar" />
        </Form>
        <Link to="/">
          <GoBack>Voltar</GoBack>
        </Link>
      </FadeInLeft>
    </Container>
  );
}
