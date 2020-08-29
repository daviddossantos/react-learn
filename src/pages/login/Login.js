import React, { useRef } from "react";
import Input from "./../components/form/Input";

import * as Yup from "yup";
import * as firebase from "firebase";
import { Container, ForgotPassword, Register } from "./Login.styled";

import { useHistory } from "react-router-dom";
import Divisor from "../components/divisor/Divisor";
import Submit from "../components/submit/Submit";
import ButtonGoogle from "../components/buttonGoogle/ButtonGoogle";
import { auth } from "../../firebase/firebaseConfig";
import FadeInLeft from "../components/animations/FadeInLeft.styled";
import { useAuth } from "../../contexts/AuthProvider";
import { Form } from "@unform/web";
import { Link, Redirect } from "react-router-dom";
import { firebaseCode } from "../../constants/firabase.code";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Login() {
  const history = useHistory();
  const formRef = useRef(null);
  const { signIn, currentUser } = useAuth();

  if (currentUser) {
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
        password: Yup.string()
          .min(8, "Senha precisa ter no mínimo 8 caracteres")
          .required("A senha e obrigatória"),
      });
      await schema.validate(data, {
        abortEarly: false,
      });

      try {
        await auth.signInWithEmailAndPassword(data.email, data.password);
        signIn();
        history.push("/home");
      } catch (error) {
        toast.error(firebaseCode(error.code));
      }
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

  async function handleGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then(() => {
        signIn();
        history.push("/home");
      })
      .catch((error) => {
        toast.error(firebaseCode(error.code));
      });
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
        <h1>Bem vindo de volta!</h1>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="email" placeholder="E-mail" />
          <Input name="password" type="password" placeholder="Senha" />

          <Link to="/forgot">
            <ForgotPassword>Esqueceu a senha?</ForgotPassword>
          </Link>
          <Submit label="Entrar" />
          <Divisor />
          <ButtonGoogle handleGoogle={handleGoogle} label="Entrar com Google" />
        </Form>
        <Register>
          Não tem uma conta?
          <Link to="/signup">Registre-se</Link>
        </Register>
      </FadeInLeft>
    </Container>
  );
}
