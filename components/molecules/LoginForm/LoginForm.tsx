import {
  Form,
  InputArea,
  StyledButton,
  StyledIconInput,
  StyledLetterText,
  TextHolder,
} from "./styles";
import React, { ReactElement } from "react";

import { FiAtSign } from "react-icons/fi";
import { RiShieldKeyholeFill } from "react-icons/ri";

interface LoginFormProps {
  className?: string;
}

export default function LoginForm({ className }: LoginFormProps): ReactElement {
  return (
    <Form className={className}>
      <TextHolder>
        <StyledLetterText area="login" place="center" size="4.5em">
          LOGIN
        </StyledLetterText>
        <StyledLetterText area="register" size="1em">
          I REJESTRACJA
        </StyledLetterText>
      </TextHolder>
      <InputArea area="email">
        <StyledIconInput
          type="email"
          value="qwertyuiop@gmail.com"
          icon={FiAtSign}
        />
      </InputArea>
      <InputArea area="password">
        <StyledIconInput
          type="password"
          value="qwertyuiop"
          icon={RiShieldKeyholeFill}
        />
      </InputArea>
      <InputArea area="password-conf">
        <StyledIconInput
          type="password"
          value="qwertyuiop"
          icon={RiShieldKeyholeFill}
        />
      </InputArea>
      <StyledButton area="button">ZATWIERDŹ</StyledButton>
    </Form>
  );
}
