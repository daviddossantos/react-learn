import React from "react";
import { SytledButtonGoogle } from "./ButtonGoogle.styled";

import { FcGoogle } from "react-icons/fc";
export default function ButtonGoogle({ handleGoogle, label }) {
  return (
    <SytledButtonGoogle
      onClick={() => {
        handleGoogle();
      }}
    >
      <span>
        <FcGoogle size={30} />
      </span>
      <strong>{label}</strong>
    </SytledButtonGoogle>
  );
}
