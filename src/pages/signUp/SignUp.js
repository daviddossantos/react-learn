import React, { useRef } from "react";
import Input from "../components/form/Input";
import Divisor from "../components/divisor/Divisor";
import Submit from "../components/submit/Submit";
import { Container, SignIn } from "./SignUp.styled";
import ButtonGoogle from "../components/buttonGoogle/ButtonGoogle";
import * as Yup from "yup";
import { auth } from "../../firebase/firebaseConfig";
import { Form } from "@unform/web";
import { useHistory } from "react-router-dom";
import FadeInLeft from "../components/animations/FadeInLeft.styled";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider";
import { Redirect } from "react-router-dom";
import firebase from "firebase";
import { firebaseCode } from "../../constants/firabase.code";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignUp() {
  const history = useHistory();
  const formRef = useRef(null);

  const { currentUser, signIn } = useAuth();

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
      await auth
        .createUserWithEmailAndPassword(data.email, data.password)
        .then(() => {
          signIn();
          history.push("/home");
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

  async function handleGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    await auth
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
        <h1>Bem vindo!</h1>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="email" placeholder="E-mail" />
          <Input
            name="password"
            type="password"
            placeholder="Senha(Mín. 8 caracteres)"
          />
          <Submit label="Cadastrar" />
          <Divisor />

          <ButtonGoogle
            label="Cadastrar com Google"
            handleGoogle={handleGoogle}
          />
        </Form>
        <SignIn>
          Já possue uma conta?
          <Link to={"/"}>Entrar</Link>
        </SignIn>
      </FadeInLeft>
    </Container>
  );
}
