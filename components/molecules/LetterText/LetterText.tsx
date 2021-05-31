import React, { ReactElement } from "react";

import { StyledLetter } from "./styles";

interface LetterTextProps {
  className?: string;
  children: string;
  onClick?: () => void;
  size?: string;
}

export default function LetterText({
  className,
  children,
  onClick,
  size,
}: LetterTextProps): ReactElement {
  return (
    <div className={className} onClick={onClick}>
      {children.split("").map((val, idx) => {
        return <StyledLetter key={idx} size={size} char={val} />;
      })}
    </div>
  );
}
