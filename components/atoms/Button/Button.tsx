import React, { ReactElement } from "react";

import { ButtonStyle } from "./styles";

interface ButtonProps {
  color?: string;
}

export default function Button({ color }: ButtonProps): ReactElement {
  return <ButtonStyle></ButtonStyle>;
}
