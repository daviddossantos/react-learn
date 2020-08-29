import React from "react";
import { SytledSubmit } from "./Submit.styled";

export default function Submit({ label }) {
  return <SytledSubmit type="submit">{label}</SytledSubmit>;
}
