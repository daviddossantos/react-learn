export const FIREBASE = {
  USER_NOT_FOUND: {
    ERROR: "auth/user-not-found",
    MESSAGE: "Usuário não cadastrado",
  },
  WRONG_PASSWORD: {
    ERROR: "auth/wrong-password",
    MESSAGE: "Senha e/ou usuário incorreto",
  },
  EMAIL_IN_USE: {
    ERROR: "auth/email-already-in-use",
    MESSAGE: "E-mail já cadastro",
  },
  COMMON_ERROR: "Ocorreu um erro ao logar",
};

export function firebaseCode(firebasecode) {
  switch (firebasecode) {
    case FIREBASE.USER_NOT_FOUND.ERROR:
      return FIREBASE.USER_NOT_FOUND.MESSAGE;
    case FIREBASE.WRONG_PASSWORD.ERROR:
      return FIREBASE.WRONG_PASSWORD.MESSAGE;
    case FIREBASE.EMAIL_IN_USE.ERROR:
      return FIREBASE.EMAIL_IN_USE.MESSAGE;
    default:
      return FIREBASE.COMMON_ERROR;
  }
}
