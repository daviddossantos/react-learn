import styled, { keyframes } from "styled-components";
import BaseAnimation from "../baseAnimation/BaseAnimation";
const FadeInAnimation = keyframes`  
  from { opacity: 0;
    transform: translatex(-100%);}
  to { opacity: 1;
    transform: none;}
`;
const FadeInLeft = styled(BaseAnimation)`
  animation-name: ${FadeInAnimation};
`;
export default FadeInLeft;
