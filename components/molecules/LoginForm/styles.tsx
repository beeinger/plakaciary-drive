import { Button, IconInput } from "react-angled";

import LetterText from "molecules/LetterText";
import styled from "styled-components";

export const Form = styled.div`
  max-height: 50vh;
  margin-top: 10vh;
  display: grid;
  grid-template:
    "text" auto
    "email" auto
    "password" auto
    "password-conf" 60px
    "button" 20%
    / auto;

  grid-gap: 8px;
`;
Form.displayName = "Form";

export const TextHolder = styled.div`
  grid-area: text;
  display: grid;
  grid-template:
    "login" auto
    "register" auto
    / 35vw;

  @media screen and (max-width: 992px) {
    grid-template:
      "login" auto
      "register" auto
      / 50vw;
  }

  @media screen and (max-width: 600px) {
    grid-template:
      "login" auto
      "register" auto
      / 100vw;
  }

  grid-gap: 8px;
`;
TextHolder.displayName = "TextHolder";

export const StyledLetterText = styled(LetterText)<{
  area: string;
  place?: string;
}>`
  grid-area: ${({ area }) => area};
  place-self: ${({ place }) => place};
  ${({ area }) => area === "register" && "padding-left: 50%"};

  @media screen and (max-width: 992px) {
    ${({ area }) => area === "register" && "padding-left: 45%"};
  }

  @media screen and (max-width: 600px) {
    ${({ area }) => area === "register" && "padding-left: 50%"};
  }

  @media screen and (max-width: 400px) {
    ${({ area }) => area === "register" && "padding-left: 40%"};
  }
`;
StyledLetterText.displayName = "StyledLetterText";

export const InputArea = styled.span<{ area: string }>`
  grid-area: ${({ area }) => area};
  place-self: center;
`;
InputArea.displayName = "InputArea";

export const StyledIconInput = styled(IconInput)`
  width: 17.5vw;
  min-width: 200px;
  > input {
    width: calc(100% - (24px + 0.2em)) !important;
  }
  > svg {
    top: 0px;
  }
`;
StyledIconInput.displayName = "StyledIconInput";

export const StyledButton = styled(Button)<{ area: string }>`
  grid-area: ${({ area }) => area};
  place-self: center;
`;
StyledButton.displayName = "StyledButton";
