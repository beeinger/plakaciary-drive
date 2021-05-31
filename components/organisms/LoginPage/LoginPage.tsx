import { Login, StyledLoginForm } from "./styles";
import React, { ReactElement } from "react";

interface LoginPageProps {}

export default function LoginPage({}: LoginPageProps): ReactElement {
  return (
    <Login>
      <StyledLoginForm />
    </Login>
  );
}
