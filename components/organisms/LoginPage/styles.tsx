import LoginForm from "molecules/LoginForm";
import styled from "styled-components";

export const Login = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template:
    ". form google-button" 100%
    /20vw 60vw 20vw;
`;
Login.displayName = "Login";

export const StyledLoginForm = styled(LoginForm)`
  grid-area: form;
  place-self: start center;
`;
StyledLoginForm.displayName = "StyledLoginForm";
