import React from "react";
import Lottie from "lottie-react-web";
import home from "../../../assets/home.json";
import { StyledLoading } from "./Loading.styled";
export default function Loading() {
  return (
    <StyledLoading>
      <Lottie
        options={{
          animationData: home,
        }}
        width={300}
      />
    </StyledLoading>
  );
}
