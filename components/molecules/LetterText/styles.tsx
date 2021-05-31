import Letter from "atoms/Letter";
import styled from "styled-components";

export const StyledLetter = styled(Letter)<{ size?: string }>`
  width: 0.75em;
  height: 1em;
  font-family: "Coda Caption", sans-serif;
  font-size: ${({ size }) => size || "inherit"};
  line-height: 1em;
  display: inline-block;
  justify-self: center;
`;
StyledLetter.displayName = "StyledLetter";
