import React, { ReactElement } from "react";

import Image from "atoms/Image";
import { parseCharToImagePath } from "utils";

interface LetterProps {
  className?: string;
  char: string;
}

export default function Letter({ className, char }: LetterProps): ReactElement {
  const _char = parseCharToImagePath(char);
  return _char === " " ? (
    <span className={className} />
  ) : (
    <Image
      className={className}
      svg={"alphabetSVG/" + _char + ".svg"}
      webp={"alphabetWEBP/" + _char + ".webp"}
      alt={_char}
    />
  );
}
